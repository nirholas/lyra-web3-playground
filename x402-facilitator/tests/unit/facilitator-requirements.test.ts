import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { Address, Hex } from 'viem';

import type { PaymentRequirements, X402Payment } from '../../src/types/index.js';

// ---------------------------------------------------------------------------
// Mocks — declared before the module-under-test is imported
// ---------------------------------------------------------------------------

const mockVerifyTypedData = vi.fn<(...args: unknown[]) => Promise<boolean>>();
vi.mock('viem', async () => {
  const actual = await vi.importActual<typeof import('viem')>('viem');
  return {
    ...actual,
    verifyTypedData: (...args: unknown[]) => mockVerifyTypedData(...args),
    createPublicClient: () => ({ readContract: async () => 10_000_000n }),
  };
});

vi.mock('../../src/utils/metrics.js', () => ({
  metrics: {
    verifyRequests: { inc: vi.fn() },
    verifyLatency: { observe: vi.fn() },
    verifyErrors: { inc: vi.fn() },
    settleRejected: { inc: vi.fn() },
  },
}));

vi.mock('../../src/utils/logger.js', () => ({
  logger: { debug: vi.fn(), info: vi.fn(), warn: vi.fn(), error: vi.fn() },
}));

vi.mock('../../src/config/env.js', () => ({
  env: {
    FACILITATOR_PRIVATE_KEY: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
    BASE_RPC_URL: 'https://base.example.com',
    BASE_SEPOLIA_RPC_URL: 'https://base-sepolia.example.com',
    ARBITRUM_RPC_URL: 'https://arb.example.com',
    ARBITRUM_SEPOLIA_RPC_URL: 'https://arb-sepolia.example.com',
    ETHEREUM_RPC_URL: 'https://eth.example.com',
    PORT: 3402,
    HOST: '0.0.0.0',
    RATE_LIMIT_MAX: 100,
    RATE_LIMIT_WINDOW_MS: 60_000,
    CORS_ORIGINS: '*',
    LOG_LEVEL: 'error',
  },
}));

vi.mock('../../src/config/chains.js', () => ({
  getChainConfig: (chainId: number) => {
    const cfgs: Record<number, unknown> = {
      1: { chainId: 1, name: 'Ethereum', rpcUrl: 'https://eth.llamarpc.com', blockExplorerUrl: 'https://etherscan.io' },
      8453: { chainId: 8453, name: 'Base', rpcUrl: 'https://mainnet.base.org', blockExplorerUrl: 'https://basescan.org' },
      42161: { chainId: 42161, name: 'Arbitrum One', rpcUrl: 'https://arb1.arbitrum.io/rpc', blockExplorerUrl: 'https://arbiscan.io' },
      84532: { chainId: 84532, name: 'Base Sepolia', rpcUrl: 'https://sepolia.base.org', blockExplorerUrl: 'https://sepolia.basescan.org' },
    };
    return cfgs[chainId];
  },
}));

// ---------------------------------------------------------------------------
// Import module under test (after mocks)
// ---------------------------------------------------------------------------
import { Facilitator } from '../../src/core/facilitator.js';

// ---------------------------------------------------------------------------
// Constants & Helpers
// ---------------------------------------------------------------------------

const USDC_BASE: Address = '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913';
const PAYER: Address = '0x1111111111111111111111111111111111111111';
const PAYEE: Address = '0x2222222222222222222222222222222222222222';
const NONCE: Hex = '0x0000000000000000000000000000000000000000000000000000000000000001';
const SIGNATURE: Hex = ('0x' + 'ab'.repeat(64) + '1c') as Hex;

const now = Math.floor(Date.now() / 1000);

function makePayment(overrides?: {
  chainId?: X402Payment['chainId'];
  token?: Address;
  signature?: Hex;
  authorization?: Partial<X402Payment['authorization']>;
}): X402Payment {
  return {
    chainId: overrides?.chainId ?? 8453,
    token: overrides?.token ?? USDC_BASE,
    authorization: {
      from: PAYER,
      to: PAYEE,
      value: 1_000_000n,
      validAfter: BigInt(now - 3600),
      validBefore: BigInt(now + 3600),
      nonce: NONCE,
      ...overrides?.authorization,
    },
    signature: overrides?.signature ?? SIGNATURE,
  };
}

function makeRequirements(overrides?: Partial<PaymentRequirements>): PaymentRequirements {
  return {
    chainId: 8453,
    asset: USDC_BASE,
    payTo: PAYEE,
    maxAmountRequired: 1_000_000n,
    ...overrides,
  };
}

// Regression: Facilitator.verify used to ignore its requirements argument, so a
// valid signature for a different recipient, amount or asset was accepted.
describe('Facilitator.verify requirements binding', () => {
  let facilitator: Facilitator;

  beforeEach(() => {
    mockVerifyTypedData.mockReset();
    mockVerifyTypedData.mockResolvedValue(true);
    facilitator = new Facilitator({
      privateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
      chains: [{ chainId: 8453, rpcUrl: 'https://base.example.com' }],
    } as unknown as ConstructorParameters<typeof Facilitator>[0]);
  });

  it('accepts a payment that satisfies the requirements', async () => {
    const res = await facilitator.verify(makePayment(), makeRequirements());
    expect(res.isValid).toBe(true);
  });

  it('rejects a payment sent to a different recipient than required', async () => {
    const other: Address = '0x3333333333333333333333333333333333333333';
    const res = await facilitator.verify(makePayment(), makeRequirements({ payTo: other }));
    expect(res.isValid).toBe(false);
    expect(res).toMatchObject({ invalidReason: 'Recipient mismatch' });
  });

  it('rejects a payment below the required amount', async () => {
    const res = await facilitator.verify(makePayment(), makeRequirements({ maxAmountRequired: 2_000_000n }));
    expect(res).toMatchObject({ isValid: false, invalidReason: 'Insufficient payment amount' });
  });

  it('rejects a payment on a different asset than required', async () => {
    const res = await facilitator.verify(
      makePayment(),
      makeRequirements({ asset: '0xdAC17F958D2ee523a2206206994597C13D831ec7' }),
    );
    expect(res).toMatchObject({ isValid: false, invalidReason: 'Asset mismatch' });
  });
});
