import{b as p,j as e,ad as x,R as u,F as h,S as i,Z as b,ar as f}from"./index-CwvhYMZj.js";import{b as o,L as w}from"./react-vendor-Cp2JmYUv.js";import{T as y}from"./TemplateSelector-CLxBNa5_.js";import"./web3-vendor-CGwxEKZx.js";const v=[{id:"component",name:"WalletButton",language:"typescript",icon:"react",code:`// Editable React Component - Try changing colors or text!
function WalletButton() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    setLoading(true);
    
    // Simulate wallet connection
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate fake address for demo
    const fakeAddress = '0x' + Array.from({length: 40}, () => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('');
    
    setAddress(fakeAddress);
    setConnected(true);
    setLoading(false);
  };

  const disconnect = () => {
    setConnected(false);
    setAddress('');
  };

  const shortenAddress = (addr) => {
    return addr.slice(0, 6) + '...' + addr.slice(-4);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        🦊 Wallet Connect Demo
      </h2>
      
      {!connected ? (
        <button
          onClick={connectWallet}
          disabled={loading}
          className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 transition-all"
        >
          {loading ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              Connecting...
            </>
          ) : (
            <>
              <Wallet className="w-5 h-5" />
              Connect Wallet
            </>
          )}
        </button>
      ) : (
        <div className="space-y-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-2">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Connected!</span>
            </div>
            <div className="font-mono text-sm bg-white dark:bg-gray-800 p-2 rounded border">
              {shortenAddress(address)}
            </div>
          </div>
          
          <button
            onClick={disconnect}
            className="w-full py-2 px-4 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 font-medium rounded-lg transition-colors"
          >
            Disconnect
          </button>
        </div>
      )}
      
      <p className="mt-4 text-sm text-gray-500 text-center">
        ✏️ Try editing the code on the left!
      </p>
    </div>
  );
}

// Required for react-live
render(<WalletButton />);`},{id:"contract",name:"WalletRegistry",language:"solidity",icon:"contract",code:`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title WalletRegistry
 * @dev Simple contract to register connected wallets
 */
contract WalletRegistry {
    // Mapping of registered addresses
    mapping(address => bool) public isRegistered;
    mapping(address => uint256) public registrationTime;
    
    // Array of all registered addresses
    address[] public registeredWallets;
    
    // Events
    event WalletRegistered(address indexed wallet, uint256 timestamp);
    event WalletUnregistered(address indexed wallet);
    
    /**
     * @dev Register the sender's wallet
     */
    function register() external {
        require(!isRegistered[msg.sender], "Already registered");
        
        isRegistered[msg.sender] = true;
        registrationTime[msg.sender] = block.timestamp;
        registeredWallets.push(msg.sender);
        
        emit WalletRegistered(msg.sender, block.timestamp);
    }
    
    /**
     * @dev Unregister the sender's wallet
     */
    function unregister() external {
        require(isRegistered[msg.sender], "Not registered");
        
        isRegistered[msg.sender] = false;
        registrationTime[msg.sender] = 0;
        
        emit WalletUnregistered(msg.sender);
    }
    
    /**
     * @dev Get total registered wallets count
     */
    function getTotalRegistered() external view returns (uint256) {
        return registeredWallets.length;
    }
    
    /**
     * @dev Check if an address is registered
     */
    function checkRegistration(address wallet) external view returns (bool, uint256) {
        return (isRegistered[wallet], registrationTime[wallet]);
    }
}`},{id:"styles",name:"styles",language:"css",icon:"style",code:`/* Custom styles for the wallet component */
/* Try editing these values! */

.wallet-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
}

.wallet-button {
  background: white;
  color: #667eea;
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.wallet-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.address-display {
  font-family: 'Monaco', 'Menlo', monospace;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 12px;
  border-radius: 8px;
  color: white;
  font-size: 14px;
}

/* Animation for loading state */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.loading {
  animation: pulse 1.5s infinite;
}`}];function C(){p({title:"Full-Stack Web3 Demo",description:"Interactive full-stack Web3 demo with editable React components, smart contract integration, and live preview. Experience blockchain development hands-on.",path:"/fullstack"});const[c,r]=o.useState(!1),[l,d]=o.useState(v),m=n=>{const a=n.files.map((t,s)=>({id:`file-${s}`,name:t.name.replace(/\.[^/.]+$/,""),language:t.language,icon:t.language==="solidity"?"contract":t.language==="css"?"style":"react",code:t.content}));a.length>0&&d(a),r(!1)},g=n=>{const a={id:`contract-${Date.now()}`,name:n.name.replace(/[^a-zA-Z0-9]/g,""),language:"solidity",icon:"contract",code:n.code},t=l.some(s=>s.language==="solidity");d(t?l.map(s=>s.language==="solidity"?a:s):[...l,a]),r(!1)};return e.jsxs(e.Fragment,{children:[c&&e.jsx(y,{onClose:()=>r(!1),onSelect:m,onContractSelect:g,showContractTemplates:!0}),e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900",children:[e.jsx("div",{className:"bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-8",children:[e.jsxs(w,{to:"/examples",className:"inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors",children:[e.jsx(x,{className:"w-4 h-4"}),"Back to Examples"]}),e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx("div",{className:"p-3 bg-white/20 rounded-xl",children:e.jsx(u,{className:"w-8 h-8"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold",children:"Full-Stack Playground"}),e.jsx("p",{className:"text-white/80",children:"Edit React + Solidity + CSS with live preview"})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 mt-4",children:[e.jsxs("button",{onClick:()=>r(!0),className:"px-4 py-1.5 bg-white/20 hover:bg-white/30 rounded-full text-sm flex items-center gap-2 transition-colors",children:[e.jsx(h,{className:"w-4 h-4"}),"Load Template (46 available)"]}),e.jsxs("span",{className:"px-3 py-1 bg-white/20 rounded-full text-sm flex items-center gap-1",children:[e.jsx(i,{className:"w-3 h-3"})," Live Preview"]}),e.jsxs("span",{className:"px-3 py-1 bg-white/20 rounded-full text-sm flex items-center gap-1",children:[e.jsx(b,{className:"w-3 h-3"})," Multi-File Editor"]}),e.jsx("span",{className:"px-3 py-1 bg-purple-400/30 rounded-full text-sm",children:"React"}),e.jsx("span",{className:"px-3 py-1 bg-blue-400/30 rounded-full text-sm",children:"Solidity"}),e.jsx("span",{className:"px-3 py-1 bg-pink-400/30 rounded-full text-sm",children:"CSS"})]})]})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-8",children:[e.jsx("div",{className:"mb-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-800 rounded-xl",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(i,{className:"w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-purple-900 dark:text-purple-100",children:"🎉 New! Full-Stack Code Editing"}),e.jsx("p",{className:"text-sm text-purple-700 dark:text-purple-300 mt-1",children:"Edit the React component and see changes instantly! The Solidity contract shows the backend logic. Switch between files using the tabs above the editor."})]})]})}),e.jsx(f,{title:"Wallet Connect Example",description:"A complete wallet connection flow with React frontend and Solidity smart contract. Edit any file to see live changes!",files:l}),e.jsxs("div",{className:"mt-8 grid md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700",children:[e.jsx("div",{className:"text-2xl mb-2",children:"1️⃣"}),e.jsx("h4",{className:"font-semibold mb-1",children:"Edit the React Code"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Try changing button colors, text, or add new features to the WalletButton component."})]}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700",children:[e.jsx("div",{className:"text-2xl mb-2",children:"2️⃣"}),e.jsx("h4",{className:"font-semibold mb-1",children:"View the Contract"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Switch to the Solidity tab to see the smart contract that would power this on-chain."})]}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700",children:[e.jsx("div",{className:"text-2xl mb-2",children:"3️⃣"}),e.jsx("h4",{className:"font-semibold mb-1",children:"Customize Styles"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Edit the CSS file to change colors, animations, and styling of components."})]})]})]})]})]})}export{C as default};
//# sourceMappingURL=FullStackDemoPage-BRE09hha.js.map
