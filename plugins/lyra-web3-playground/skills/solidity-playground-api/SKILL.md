---
name: solidity-playground-api
description: Run the Lyra Web3 Playground backend and use its HTTP API to compile Solidity, deploy to a testnet, get AI contract help and upload to IPFS. Use when the user wants to compile or try out a Solidity contract against this repo's server.
---

# Lyra Web3 Playground backend

The repo is a browser Solidity IDE (Vite and React, `src/`) plus an Express backend in `server/` (`lyra-web3-server`, not on npm). Work from a clone of `https://github.com/nirholas/lyra-web3-playground`; review before running.

## Start the server

```bash
cd server && npm install && npm run dev      # tsx watch, http://localhost:3001 (PORT)
```

Optional env (all read in `server/src`): `PORT`, `CORS_ORIGIN`, `NODE_ENV`, `VITE_ALCHEMY_API_KEY` (RPC for deploys), `OPENAI_API_KEY` or `GROQ_API_KEY` (AI routes), `PINATA_API_KEY` and `PINATA_SECRET_KEY` (IPFS), `FUNDER_PRIVATE_KEY` (the server's deploy and faucet wallet). The user sets these in their own shell or `.env`; never ask for or print the funder key, and use a throwaway testnet key only.

## Endpoints (mounted in `server/src/index.ts`)

- `GET /health`
- `POST /api/compile` with `{ code, version?, optimize? }`. `version` must be one of the allowed list (0.8.13 to 0.8.26, 0.7.4 to 0.7.6, 0.6.11, 0.6.12, 0.5.16, 0.5.17; default 0.8.20); `optimize` is a boolean (default true). Returns `{ success, data }` with ABI and bytecode.
- `POST /api/deploy` with `{ bytecode, abi, network?, constructorArgs? }`. Default network `sepolia`; configured networks are testnets (sepolia and polygon mumbai). It signs with `FUNDER_PRIVATE_KEY`.
- `POST /api/ai/generate` `{ prompt }`, `POST /api/ai/explain` `{ code, question? }`, `POST /api/ai/tests` `{ code, framework? }` (default hardhat).
- `POST /api/faucet/request` `{ address, network? }`.
- `POST /api/ipfs/upload` and `POST /api/ipfs/pin`.
- `POST /api/translate` and `GET /api/translate/languages`.

## Example

```bash
curl -s localhost:3001/api/compile -H 'content-type: application/json' \
  -d '{"code":"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.20;\ncontract Counter { uint256 public n; function inc() external { n++; } }","version":"0.8.20"}'
```

## Rules

1. Compile first and show any compiler errors to the user before deploying.
2. `deploy` and `faucet` send real testnet transactions from the server wallet. State network, contract and constructor args and get a yes first. Never point this at mainnet keys.
3. Generated AI code is untrusted: review it before compiling or deploying.
