/**
 * ✨ built by nich
 * 🌐 GitHub: github.com/nirholas
 * 💫 Web Templates for Sandbox IDE
 */

export interface WebTemplate {
  id: string;
  name: string;
  description: string;
  category: 'starter' | 'web3' | 'ui' | 'api' | 'game' | 'utility';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  files: { name: string; language: string; content: string; isEntry?: boolean }[];
  examplePrompts: string[];
}

export const webTemplates: WebTemplate[] = [
  // === STARTER TEMPLATES ===
  {
    id: 'blank',
    name: 'Blank Project',
    description: 'Empty HTML/CSS/JS starter',
    category: 'starter',
    difficulty: 'beginner',
    examplePrompts: ['Start fresh', 'Empty project', 'Blank canvas'],
    files: [
      { name: 'index.html', language: 'html', isEntry: true, content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Project</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="app"></div>
  <script src="app.js"></script>
</body>
</html>` },
      { name: 'styles.css', language: 'css', content: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: system-ui, sans-serif; }` },
      { name: 'app.js', language: 'javascript', content: `console.log('Hello World!');` }
    ]
  },
  {
    id: 'hello-world',
    name: 'Hello World',
    description: 'Simple interactive starter with counter',
    category: 'starter',
    difficulty: 'beginner',
    examplePrompts: ['Hello world', 'Counter app', 'Basic interactive'],
    files: [
      { name: 'index.html', language: 'html', isEntry: true, content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="app">
    <h1>Hello, World! 🚀</h1>
    <p>Start editing to see changes live.</p>
    <button id="counter-btn">Clicked: 0 times</button>
  </div>
  <script src="app.js"></script>
</body>
</html>` },
      { name: 'styles.css', language: 'css', content: `*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
#app {
  text-align: center;
  padding: 48px;
  background: rgba(255,255,255,0.1);
  border-radius: 24px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
}
h1 { font-size: 3rem; margin-bottom: 16px; }
p { font-size: 1.25rem; opacity: 0.9; margin-bottom: 24px; }
button {
  background: #fff;
  color: #667eea;
  border: none;
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s;
}
button:hover { transform: translateY(-2px); }` },
      { name: 'app.js', language: 'javascript', content: `let count = 0;
const button = document.getElementById('counter-btn');
button.addEventListener('click', () => {
  count++;
  button.textContent = \`Clicked: \${count} times\`;
  console.log('Count:', count);
});
console.log('🚀 App initialized!');` }
    ]
  },

  // === WEB3 TEMPLATES ===
  {
    id: 'wallet-connect',
    name: 'Wallet Connect',
    description: 'Connect to MetaMask and display balance',
    category: 'web3',
    difficulty: 'beginner',
    examplePrompts: ['Connect wallet', 'MetaMask integration', 'Web3 wallet'],
    files: [
      { name: 'index.html', language: 'html', isEntry: true, content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wallet Connect</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>🦊 Wallet Connect</h1>
    <div id="wallet-info" class="hidden">
      <p>Address: <span id="address"></span></p>
      <p>Balance: <span id="balance"></span> ETH</p>
      <p>Network: <span id="network"></span></p>
    </div>
    <button id="connect-btn">Connect Wallet</button>
  </div>
  <script src="app.js"></script>
</body>
</html>` },
      { name: 'styles.css', language: 'css', content: `.container {
  max-width: 500px;
  margin: 100px auto;
  padding: 40px;
  text-align: center;
  background: #1a1a2e;
  border-radius: 16px;
  color: #fff;
  font-family: system-ui, sans-serif;
}
h1 { margin-bottom: 24px; }
#wallet-info { margin: 24px 0; text-align: left; padding: 16px; background: #16213e; border-radius: 8px; }
#wallet-info p { margin: 8px 0; font-size: 14px; word-break: break-all; }
.hidden { display: none; }
button {
  background: linear-gradient(135deg, #f5af19, #f12711);
  color: #fff;
  border: none;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
}
button:hover { opacity: 0.9; }
button:disabled { opacity: 0.5; cursor: not-allowed; }` },
      { name: 'app.js', language: 'javascript', content: `const connectBtn = document.getElementById('connect-btn');
const walletInfo = document.getElementById('wallet-info');
const addressEl = document.getElementById('address');
const balanceEl = document.getElementById('balance');
const networkEl = document.getElementById('network');

const networks = { '0x1': 'Ethereum', '0x89': 'Polygon', '0xa86a': 'Avalanche', '0x38': 'BSC' };

async function connectWallet() {
  if (!window.ethereum) {
    alert('Please install MetaMask!');
    return;
  }
  
  connectBtn.textContent = 'Connecting...';
  connectBtn.disabled = true;
  
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    
    const balance = await window.ethereum.request({
      method: 'eth_getBalance',
      params: [account, 'latest']
    });
    
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    
    addressEl.textContent = account.slice(0, 6) + '...' + account.slice(-4);
    balanceEl.textContent = (parseInt(balance, 16) / 1e18).toFixed(4);
    networkEl.textContent = networks[chainId] || chainId;
    
    walletInfo.classList.remove('hidden');
    connectBtn.textContent = 'Connected ✓';
    
    console.log('Connected:', account);
  } catch (err) {
    console.error(err);
    connectBtn.textContent = 'Connect Wallet';
    connectBtn.disabled = false;
  }
}

connectBtn.addEventListener('click', connectWallet);

window.ethereum?.on('accountsChanged', () => location.reload());
window.ethereum?.on('chainChanged', () => location.reload());` }
    ]
  },
  {
    id: 'nft-minter',
    name: 'NFT Minter UI',
    description: 'Mint NFTs with MetaMask',
    category: 'web3',
    difficulty: 'intermediate',
    examplePrompts: ['NFT minting', 'Mint NFT UI', 'NFT frontend'],
    files: [
      { name: 'index.html', language: 'html', isEntry: true, content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NFT Minter</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="minter">
    <h1>🎨 NFT Minter</h1>
    <div class="preview">
      <img id="preview-img" src="https://picsum.photos/300/300" alt="NFT Preview">
    </div>
    <div class="controls">
      <input type="text" id="name" placeholder="NFT Name">
      <input type="text" id="description" placeholder="Description">
      <div class="price">Price: 0.01 ETH</div>
      <button id="mint-btn">Mint NFT</button>
    </div>
    <div id="status"></div>
  </div>
  <script src="app.js"></script>
</body>
</html>` },
      { name: 'styles.css', language: 'css', content: `body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  font-family: system-ui, sans-serif;
}
.minter {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 40px;
  text-align: center;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.1);
}
h1 { margin-bottom: 24px; }
.preview {
  width: 300px;
  height: 300px;
  margin: 0 auto 24px;
  border-radius: 16px;
  overflow: hidden;
}
.preview img { width: 100%; height: 100%; object-fit: cover; }
.controls { display: flex; flex-direction: column; gap: 12px; }
input {
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.1);
  color: #fff;
  font-size: 16px;
}
.price { padding: 12px; background: rgba(255,255,255,0.1); border-radius: 8px; }
button {
  padding: 16px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}
#status { margin-top: 16px; font-size: 14px; }` },
      { name: 'app.js', language: 'javascript', content: `const mintBtn = document.getElementById('mint-btn');
const status = document.getElementById('status');

async function mint() {
  if (!window.ethereum) {
    status.textContent = '❌ Please install MetaMask';
    return;
  }
  
  const name = document.getElementById('name').value;
  const desc = document.getElementById('description').value;
  
  if (!name) {
    status.textContent = '❌ Please enter a name';
    return;
  }
  
  status.textContent = '🔄 Connecting wallet...';
  
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    status.textContent = '🔄 Preparing transaction...';
    
    // Simulated mint - replace with actual contract call
    await new Promise(r => setTimeout(r, 2000));
    
    status.innerHTML = '✅ NFT Minted!<br>Name: ' + name + '<br>Owner: ' + accounts[0].slice(0,10) + '...';
    console.log('Minted NFT:', { name, desc, owner: accounts[0] });
  } catch (err) {
    status.textContent = '❌ ' + (err.message || 'Minting failed');
    console.error(err);
  }
}

mintBtn.addEventListener('click', mint);` }
    ]
  },

  // === UI TEMPLATES ===
  {
    id: 'dashboard',
    name: 'Dashboard Layout',
    description: 'Responsive admin dashboard',
    category: 'ui',
    difficulty: 'intermediate',
    examplePrompts: ['Dashboard', 'Admin panel', 'Analytics dashboard'],
    files: [
      { name: 'index.html', language: 'html', isEntry: true, content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <aside class="sidebar">
    <h2>📊 Dashboard</h2>
    <nav>
      <a href="#" class="active">Overview</a>
      <a href="#">Analytics</a>
      <a href="#">Users</a>
      <a href="#">Settings</a>
    </nav>
  </aside>
  <main class="content">
    <header><h1>Overview</h1></header>
    <div class="cards">
      <div class="card"><h3>Users</h3><p class="big">12,345</p></div>
      <div class="card"><h3>Revenue</h3><p class="big">$45.2K</p></div>
      <div class="card"><h3>Orders</h3><p class="big">892</p></div>
      <div class="card"><h3>Growth</h3><p class="big">+24%</p></div>
    </div>
  </main>
</body>
</html>` },
      { name: 'styles.css', language: 'css', content: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { display: flex; min-height: 100vh; font-family: system-ui, sans-serif; background: #f5f5f5; }
.sidebar {
  width: 240px;
  background: #1a1a2e;
  color: #fff;
  padding: 24px;
}
.sidebar h2 { margin-bottom: 32px; }
.sidebar nav { display: flex; flex-direction: column; gap: 8px; }
.sidebar a {
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 8px;
  transition: all 0.2s;
}
.sidebar a:hover, .sidebar a.active { background: rgba(255,255,255,0.1); color: #fff; }
.content { flex: 1; padding: 32px; }
header { margin-bottom: 32px; }
.cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; }
.card {
  background: #fff;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.card h3 { color: #666; font-size: 14px; margin-bottom: 8px; }
.card .big { font-size: 32px; font-weight: 700; color: #1a1a2e; }` },
      { name: 'app.js', language: 'javascript', content: `// Add interactivity here
console.log('Dashboard loaded');` }
    ]
  },
  {
    id: 'landing-page',
    name: 'Landing Page',
    description: 'Modern product landing page',
    category: 'ui',
    difficulty: 'beginner',
    examplePrompts: ['Landing page', 'Product page', 'Marketing page'],
    files: [
      { name: 'index.html', language: 'html', isEntry: true, content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Landing</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <nav>
      <div class="logo">🚀 Product</div>
      <div class="links">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <button class="cta-small">Get Started</button>
      </div>
    </nav>
  </header>
  <section class="hero">
    <h1>Build Something Amazing</h1>
    <p>The fastest way to create, deploy, and scale your next big idea.</p>
    <button class="cta">Start Free Trial</button>
  </section>
  <section class="features">
    <div class="feature">⚡ Lightning Fast</div>
    <div class="feature">🔒 Secure by Default</div>
    <div class="feature">🌍 Global Scale</div>
  </section>
</body>
</html>` },
      { name: 'styles.css', language: 'css', content: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: system-ui, sans-serif; }
header {
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
nav { display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 1200px; margin: 0 auto; }
.logo { font-size: 24px; font-weight: 700; }
.links { display: flex; gap: 24px; align-items: center; }
.links a { color: #333; text-decoration: none; }
.cta-small { padding: 10px 20px; background: #667eea; color: #fff; border: none; border-radius: 8px; cursor: pointer; }
.hero {
  text-align: center;
  padding: 120px 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
}
.hero h1 { font-size: 48px; margin-bottom: 16px; }
.hero p { font-size: 20px; opacity: 0.9; margin-bottom: 32px; }
.cta { padding: 16px 40px; font-size: 18px; background: #fff; color: #667eea; border: none; border-radius: 12px; cursor: pointer; font-weight: 600; }
.features { display: flex; justify-content: center; gap: 48px; padding: 80px 20px; }
.feature { font-size: 20px; font-weight: 600; }` },
      { name: 'app.js', language: 'javascript', content: `console.log('Landing page loaded');` }
    ]
  },

  // === API / UTILITY TEMPLATES ===
  {
    id: 'fetch-api',
    name: 'API Fetch Example',
    description: 'Fetch data from REST API',
    category: 'api',
    difficulty: 'beginner',
    examplePrompts: ['Fetch API', 'REST API', 'HTTP request'],
    files: [
      { name: 'index.html', language: 'html', isEntry: true, content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>API Demo</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>🌐 API Demo</h1>
    <button id="fetch-btn">Fetch Users</button>
    <div id="loading" class="hidden">Loading...</div>
    <ul id="users"></ul>
  </div>
  <script src="app.js"></script>
</body>
</html>` },
      { name: 'styles.css', language: 'css', content: `.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 40px;
  font-family: system-ui, sans-serif;
}
h1 { margin-bottom: 24px; }
button { padding: 12px 24px; font-size: 16px; cursor: pointer; }
.hidden { display: none; }
#users { list-style: none; padding: 0; margin-top: 24px; }
#users li {
  padding: 16px;
  background: #f5f5f5;
  margin-bottom: 8px;
  border-radius: 8px;
}
#users li strong { color: #333; }` },
      { name: 'app.js', language: 'javascript', content: `const fetchBtn = document.getElementById('fetch-btn');
const loading = document.getElementById('loading');
const usersList = document.getElementById('users');

async function fetchUsers() {
  loading.classList.remove('hidden');
  usersList.innerHTML = '';
  
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    
    users.forEach(user => {
      const li = document.createElement('li');
      li.innerHTML = '<strong>' + user.name + '</strong><br>' + user.email;
      usersList.appendChild(li);
    });
    
    console.log('Fetched', users.length, 'users');
  } catch (err) {
    usersList.innerHTML = '<li>Error loading users</li>';
    console.error(err);
  } finally {
    loading.classList.add('hidden');
  }
}

fetchBtn.addEventListener('click', fetchUsers);` }
    ]
  },
  {
    id: 'todo-app',
    name: 'Todo App',
    description: 'Simple todo list with local storage',
    category: 'utility',
    difficulty: 'beginner',
    examplePrompts: ['Todo app', 'Task list', 'Todo list'],
    files: [
      { name: 'index.html', language: 'html', isEntry: true, content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Todo App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>✅ Todo List</h1>
    <div class="input-group">
      <input type="text" id="todo-input" placeholder="Add a task...">
      <button id="add-btn">Add</button>
    </div>
    <ul id="todos"></ul>
    <p class="count"><span id="count">0</span> tasks remaining</p>
  </div>
  <script src="app.js"></script>
</body>
</html>` },
      { name: 'styles.css', language: 'css', content: `.container {
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  font-family: system-ui, sans-serif;
}
h1 { text-align: center; margin-bottom: 24px; }
.input-group { display: flex; gap: 8px; margin-bottom: 24px; }
input {
  flex: 1;
  padding: 12px;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 16px;
}
button { padding: 12px 20px; background: #667eea; color: #fff; border: none; border-radius: 8px; cursor: pointer; }
#todos { list-style: none; padding: 0; }
#todos li {
  display: flex;
  align-items: center;
  padding: 12px;
  background: #f9f9f9;
  margin-bottom: 8px;
  border-radius: 8px;
}
#todos li.done span { text-decoration: line-through; opacity: 0.5; }
#todos li span { flex: 1; }
#todos li button { background: #ff4757; padding: 6px 12px; font-size: 12px; }
.count { text-align: center; color: #999; margin-top: 16px; }` },
      { name: 'app.js', language: 'javascript', content: `const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todosList = document.getElementById('todos');
const countEl = document.getElementById('count');

let todos = JSON.parse(localStorage.getItem('todos') || '[]');

function render() {
  todosList.innerHTML = '';
  todos.forEach((todo, i) => {
    const li = document.createElement('li');
    li.className = todo.done ? 'done' : '';
    li.innerHTML = \`
      <input type="checkbox" \${todo.done ? 'checked' : ''} onchange="toggle(\${i})">
      <span>\${todo.text}</span>
      <button onclick="remove(\${i})">Delete</button>
    \`;
    todosList.appendChild(li);
  });
  countEl.textContent = todos.filter(t => !t.done).length;
  localStorage.setItem('todos', JSON.stringify(todos));
}

function add() {
  const text = input.value.trim();
  if (!text) return;
  todos.push({ text, done: false });
  input.value = '';
  render();
}

window.toggle = (i) => { todos[i].done = !todos[i].done; render(); };
window.remove = (i) => { todos.splice(i, 1); render(); };

addBtn.addEventListener('click', add);
input.addEventListener('keypress', e => e.key === 'Enter' && add());

render();` }
    ]
  },

  // === GAME TEMPLATE ===
  {
    id: 'canvas-game',
    name: 'Canvas Game',
    description: 'Simple canvas-based game starter',
    category: 'game',
    difficulty: 'intermediate',
    examplePrompts: ['Canvas game', 'Simple game', 'Game starter'],
    files: [
      { name: 'index.html', language: 'html', isEntry: true, content: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Canvas Game</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="game-container">
    <canvas id="game" width="400" height="400"></canvas>
    <p>Use arrow keys to move</p>
    <p>Score: <span id="score">0</span></p>
  </div>
  <script src="app.js"></script>
</body>
</html>` },
      { name: 'styles.css', language: 'css', content: `body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a2e;
  font-family: system-ui, sans-serif;
  color: #fff;
}
.game-container { text-align: center; }
canvas { background: #16213e; border-radius: 8px; display: block; margin: 0 auto 16px; }
p { margin: 8px 0; }` },
      { name: 'app.js', language: 'javascript', content: `const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');

let player = { x: 200, y: 200, size: 20, speed: 5 };
let target = { x: 100, y: 100, size: 15 };
let score = 0;
let keys = {};

function randomPos() {
  return {
    x: Math.random() * (canvas.width - 30) + 15,
    y: Math.random() * (canvas.height - 30) + 15
  };
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Player
  ctx.fillStyle = '#667eea';
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
  ctx.fill();
  
  // Target
  ctx.fillStyle = '#f5af19';
  ctx.beginPath();
  ctx.arc(target.x, target.y, target.size, 0, Math.PI * 2);
  ctx.fill();
}

function update() {
  if (keys['ArrowUp']) player.y -= player.speed;
  if (keys['ArrowDown']) player.y += player.speed;
  if (keys['ArrowLeft']) player.x -= player.speed;
  if (keys['ArrowRight']) player.x += player.speed;
  
  // Bounds
  player.x = Math.max(player.size, Math.min(canvas.width - player.size, player.x));
  player.y = Math.max(player.size, Math.min(canvas.height - player.size, player.y));
  
  // Collision
  const dx = player.x - target.x;
  const dy = player.y - target.y;
  if (Math.sqrt(dx*dx + dy*dy) < player.size + target.size) {
    score++;
    scoreEl.textContent = score;
    const pos = randomPos();
    target.x = pos.x;
    target.y = pos.y;
    console.log('Score:', score);
  }
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

document.addEventListener('keydown', e => keys[e.key] = true);
document.addEventListener('keyup', e => keys[e.key] = false);

loop();
console.log('🎮 Game started! Use arrow keys to catch the target.');` }
    ]
  }
];

// Search templates by query
export function searchWebTemplates(query: string): WebTemplate[] {
  const q = query.toLowerCase();
  return webTemplates.filter(t =>
    t.name.toLowerCase().includes(q) ||
    t.description.toLowerCase().includes(q) ||
    t.category.toLowerCase().includes(q) ||
    t.examplePrompts.some(p => p.toLowerCase().includes(q))
  );
}

// Get templates by category
export function getWebTemplatesByCategory(category: WebTemplate['category']): WebTemplate[] {
  return webTemplates.filter(t => t.category === category);
}
