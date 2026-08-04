import{j as e,ad as x,Q as o,S as m}from"./index-CwvhYMZj.js";import{b as d,L as g}from"./react-vendor-Cp2JmYUv.js";import{C as h}from"./CrossChainDreamWeaver-BFhe2ZQa.js";import"./web3-vendor-CGwxEKZx.js";import"./link-Bonuwsuf.js";import"./network-Bmi8bYHi.js";const p=`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title Cross-Chain Ready Token
/// @notice A token designed for multi-chain deployment
contract CrossChainToken {
    string public name = "CrossToken";
    string public symbol = "CROSS";
    uint8 public constant decimals = 18;
    uint256 public totalSupply;
    
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    
    // Cross-chain bridge address (set per chain)
    address public bridge;
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event CrossChainTransfer(uint256 indexed destChainId, address indexed to, uint256 amount);
    
    constructor(uint256 initialSupply) {
        totalSupply = initialSupply * 10 ** decimals;
        balanceOf[msg.sender] = totalSupply;
    }
    
    function transfer(address to, uint256 amount) external returns (bool) {
        require(balanceOf[msg.sender] >= amount, "Insufficient balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
        emit Transfer(msg.sender, to, amount);
        return true;
    }
    
    function approve(address spender, uint256 amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }
    
    /// @notice Initiate cross-chain transfer
    function bridgeTransfer(uint256 destChainId, address to, uint256 amount) external {
        require(bridge != address(0), "Bridge not set");
        require(balanceOf[msg.sender] >= amount, "Insufficient balance");
        
        balanceOf[msg.sender] -= amount;
        totalSupply -= amount;
        
        emit CrossChainTransfer(destChainId, to, amount);
    }
    
    function setBridge(address _bridge) external {
        require(bridge == address(0), "Bridge already set");
        bridge = _bridge;
    }
}`;function N(){const[t,i]=d.useState(p),[r,n]=d.useState([]),l=(s,a)=>{n(c=>[...c,{type:s,message:a,timestamp:Date.now()}])};return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900",children:[e.jsx("div",{className:"bg-gradient-to-r from-emerald-600 to-teal-600 text-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs(g,{to:"/innovation",className:"inline-flex items-center gap-2 text-emerald-200 hover:text-white mb-4 transition-colors",children:[e.jsx(x,{className:"w-4 h-4"}),"Back to Innovation Hub"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"p-3 bg-white/10 rounded-xl",children:e.jsx(o,{className:"w-8 h-8"})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl font-bold flex items-center gap-2",children:["Cross-Chain Dream Weaver",e.jsx(m,{className:"w-6 h-6 text-yellow-300"})]}),e.jsx("p",{className:"text-emerald-200 mt-1",children:"Deploy to 8+ blockchains with one click and smart AI optimization"})]})]})]})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden",children:[e.jsxs("div",{className:"border-b border-gray-200 dark:border-gray-700 px-4 py-3",children:[e.jsx("h2",{className:"font-semibold text-gray-900 dark:text-white",children:"Cross-Chain Contract"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Deploy this contract across multiple chains"})]}),e.jsx("textarea",{value:t,onChange:s=>i(s.target.value),className:"w-full h-96 p-4 font-mono text-sm bg-gray-900 text-gray-100 resize-none focus:outline-none",spellCheck:!1})]}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden",children:e.jsx(h,{code:t,onLog:l})})]}),r.length>0&&e.jsxs("div",{className:"mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4",children:[e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white mb-3",children:"Deployment Log"}),e.jsx("div",{className:"space-y-2 max-h-48 overflow-y-auto",children:r.slice(-10).reverse().map((s,a)=>e.jsx("div",{className:`text-sm px-3 py-2 rounded ${s.type==="error"?"bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300":s.type==="warning"?"bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300":s.type==="success"?"bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`,children:s.message},a))})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-4",children:"Supported Chains"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:"⟠"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-gray-900 dark:text-white",children:"Ethereum"}),e.jsx("div",{className:"text-xs text-gray-500",children:"Chain ID: 1"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:"⬢"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-gray-900 dark:text-white",children:"Polygon"}),e.jsx("div",{className:"text-xs text-gray-500",children:"Chain ID: 137"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:"◆"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-gray-900 dark:text-white",children:"BSC"}),e.jsx("div",{className:"text-xs text-gray-500",children:"Chain ID: 56"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:"◉"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-gray-900 dark:text-white",children:"Arbitrum"}),e.jsx("div",{className:"text-xs text-gray-500",children:"Chain ID: 42161"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:"⬡"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-gray-900 dark:text-white",children:"Optimism"}),e.jsx("div",{className:"text-xs text-gray-500",children:"Chain ID: 10"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:"❄️"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-gray-900 dark:text-white",children:"Avalanche"}),e.jsx("div",{className:"text-xs text-gray-500",children:"Chain ID: 43114"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:"🔷"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-gray-900 dark:text-white",children:"Base"}),e.jsx("div",{className:"text-xs text-gray-500",children:"Chain ID: 8453"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:"⚡"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-gray-900 dark:text-white",children:"zkSync"}),e.jsx("div",{className:"text-xs text-gray-500",children:"Chain ID: 324"})]})]})]})]})]})]})}export{N as default};
//# sourceMappingURL=CrossChainDreamWeaverPage-CFz_XgU4.js.map
