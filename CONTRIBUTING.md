<!--
  ✨ built by nich
  🌐 GitHub: github.com/nirholas
  💫 Great things are built by great people like you 👏
-->

# Contributing to Lyra Web3 Playground

Thank you for your interest in contributing to Lyra Web3 Playground! This document provides guidelines and information for contributors.

## 🌟 Code of Conduct

We are committed to providing a welcoming and inclusive experience for everyone. We expect all contributors to:

- Be respectful and professional
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other community members

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- MetaMask browser extension (for testing Web3 features)
- A code editor (VS Code recommended)

### Development Setup

1. **Fork and clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/lyra-web3-playground.git
cd lyra-web3-playground
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env
# Edit .env with your API keys (optional for basic development)
```

4. **Start development server**

```bash
npm run dev
```

5. **Run tests**

```bash
npm run test
```

## 📝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:

- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (browser, OS, etc.)

### Suggesting Enhancements

For feature requests:

- Use a clear and descriptive title
- Provide detailed explanation of the feature
- Explain why this would be useful
- Include mockups or examples if possible

### Pull Requests

1. **Create a feature branch**

```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes**
   - Write clean, documented code
   - Follow existing code style
   - Add tests for new features
   - Update documentation

3. **Test your changes**

```bash
npm run lint
npm run test
npm run build
```

4. **Commit your changes**

Follow conventional commits format:

```bash
git commit -m "feat: add new example for cross-chain bridge"
git commit -m "fix: resolve wallet connection issue"
git commit -m "docs: update setup instructions"
```

Commit types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

5. **Push and create PR**

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- Clear title and description
- Reference to related issues
- Screenshots/videos for UI changes
- Test results

## 🏗️ Project Structure

```
playground/
├── src/
│   ├── components/     # Reusable UI components
│   ├── examples/       # Interactive example implementations
│   │   ├── web3/      # Web3-specific examples
│   │   └── ai/        # AI-enhanced examples
│   ├── pages/         # Page components
│   ├── stores/        # State management
│   ├── utils/         # Utility functions
│   ├── hooks/         # Custom React hooks
│   ├── types/         # TypeScript type definitions
│   └── styles/        # Global styles
├── public/            # Static assets
├── tests/             # Test files
└── docs/              # Documentation
```

## 💻 Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type when possible
- Use meaningful variable and function names

```typescript
// Good
interface WalletState {
  address: string | null;
  chainId: number | null;
  isConnected: boolean;
}

// Avoid
interface State {
  addr: any;
  chain: any;
  conn: boolean;
}
```

### React

- Use functional components with hooks
- Keep components small and focused
- Use proper prop types
- Handle loading and error states

```typescript
// Good
interface Props {
  title: string;
  onConnect: () => Promise<void>;
}

export function WalletButton({ title, onConnect }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  // ...
}
```

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Support dark mode
- Ensure accessibility (ARIA labels, keyboard navigation)

```tsx
// Good
<button 
  className="btn-primary"
  aria-label="Connect wallet"
  disabled={isLoading}
>
  {isLoading ? 'Connecting...' : 'Connect'}
</button>
```

### Testing

- Write tests for new features
- Aim for 80% coverage
- Test edge cases and error scenarios

```typescript
describe('WalletConnect', () => {
  it('should connect to MetaMask', async () => {
    // Test implementation
  });

  it('should handle connection errors', async () => {
    // Test implementation
  });
});
```

## 🎨 Adding New Examples

To add a new example:

1. **Create example component**

```typescript
// src/examples/web3/MyExample.tsx
export default function MyExample() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">My Example</h1>
      {/* Implementation */}
    </div>
  );
}
```

2. **Add to example registry**

Update `src/pages/Homepage.tsx` to include your example:

```typescript
{
  id: 'my-example',
  title: 'My Example',
  description: 'Description of what this example does',
  category: 'web3',
  difficulty: 'beginner',
  tags: ['ethereum', 'smart-contracts'],
  component: MyExample,
}
```

3. **Add route**

Update `src/pages/ExamplePage.tsx`:

```typescript
const exampleComponents: Record<string, React.ComponentType> = {
  // ...
  'my-example': MyExample,
};
```

4. **Add documentation**

Create `docs/examples/my-example.md` with:
- Overview
- Prerequisites
- Step-by-step guide
- Code explanation
- Common issues

## 🧪 Testing Guidelines

### Unit Tests

- Test individual functions and components
- Mock external dependencies
- Use descriptive test names

```typescript
test('formatBalance should handle zero balance', () => {
  expect(formatBalance('0')).toBe('0');
});
```

### Integration Tests

- Test component interactions
- Test API calls
- Test state management

### E2E Tests (Coming Soon)

- Test complete user flows
- Test across different browsers
- Test responsive design

## 📚 Documentation

Good documentation is crucial:

- Comment complex logic
- Update README for new features
- Add JSDoc for public APIs
- Include examples in documentation

```typescript
/**
 * Connects to user's wallet and retrieves account information
 * @returns Promise that resolves to wallet address
 * @throws Error if wallet is not available or user rejects
 */
async function connectWallet(): Promise<string> {
  // Implementation
}
```

## 🔍 Code Review Process

All submissions require review:

1. Automated checks must pass (build, lint, tests)
2. At least one maintainer approval required
3. Address all review comments
4. Keep PR focused and small when possible
5. Be responsive to feedback

## 🎯 Priority Areas

We're especially interested in contributions for:

### High Priority
- Additional Web3 examples (DeFi, NFTs, DAOs)
- AI integration examples
- Test coverage improvements
- Accessibility enhancements
- Performance optimizations

### Medium Priority
- Additional network support (Solana, Avalanche)
- UI/UX improvements
- Mobile responsiveness
- Internationalization (i18n)

### Future
- Desktop app (Electron)
- Mobile app (React Native)
- Browser extensions
- API development

## 🏆 Recognition

Contributors are recognized in:

- README.md contributors section
- Release notes
- Project website (when available)

## 📞 Getting Help

- **Questions?** Open a [Discussion](https://github.com/nirholas/lyra-web3-playground/discussions)
- **Issues?** Create an [Issue](https://github.com/nirholas/lyra-web3-playground/issues)
- **Chat?** Join our community (link coming soon)

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You

Thank you for contributing to making Web3 and AI more accessible to developers worldwide!

---

**Happy Coding! 🚀**
