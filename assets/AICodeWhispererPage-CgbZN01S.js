import{j as e,ad as c,ah as x,S as g}from"./index-CwvhYMZj.js";import{b as n,L as m}from"./react-vendor-Cp2JmYUv.js";import{A as h}from"./AICodeWhisperer-DKe_js3f.js";import"./web3-vendor-CGwxEKZx.js";const p=`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract VulnerableContract {
    mapping(address => uint256) public balances;
    
    function deposit() external payable {
        balances[msg.sender] += msg.value;
    }
    
    // ⚠️ Vulnerable to reentrancy!
    function withdraw(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        
        // External call before state update - vulnerability!
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
        
        balances[msg.sender] -= amount;
    }
    
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}`;function j(){const[t,r]=n.useState(p),[l,i]=n.useState([]),d=(a,s)=>{i(o=>[...o,{type:a,message:s,timestamp:Date.now()}])};return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900",children:[e.jsx("div",{className:"bg-gradient-to-r from-purple-600 to-blue-600 text-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs(m,{to:"/innovation",className:"inline-flex items-center gap-2 text-purple-200 hover:text-white mb-4 transition-colors",children:[e.jsx(c,{className:"w-4 h-4"}),"Back to Innovation Hub"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"p-3 bg-white/10 rounded-xl",children:e.jsx(x,{className:"w-8 h-8"})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl font-bold flex items-center gap-2",children:["AI Code Whisperer",e.jsx(g,{className:"w-6 h-6 text-yellow-300"})]}),e.jsx("p",{className:"text-purple-200 mt-1",children:"Real-time vulnerability detection, gas optimization, and security insights powered by AI"})]})]})]})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden",children:[e.jsxs("div",{className:"border-b border-gray-200 dark:border-gray-700 px-4 py-3",children:[e.jsx("h2",{className:"font-semibold text-gray-900 dark:text-white",children:"Smart Contract Code"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Edit the code to see AI analysis in real-time"})]}),e.jsx("textarea",{value:t,onChange:a=>r(a.target.value),className:"w-full h-96 p-4 font-mono text-sm bg-gray-900 text-gray-100 resize-none focus:outline-none",spellCheck:!1})]}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden",children:e.jsx(h,{code:t,onCodeChange:r,onLog:d})})]}),l.length>0&&e.jsxs("div",{className:"mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4",children:[e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white mb-3",children:"Activity Log"}),e.jsx("div",{className:"space-y-2 max-h-48 overflow-y-auto",children:l.slice(-10).reverse().map((a,s)=>e.jsx("div",{className:`text-sm px-3 py-2 rounded ${a.type==="error"?"bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300":a.type==="warning"?"bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300":a.type==="success"?"bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`,children:a.message},s))})]}),e.jsxs("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow",children:[e.jsx("h3",{className:"font-semibold text-purple-600 dark:text-purple-400",children:"🔍 Vulnerability Detection"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Detects 94% of common smart contract vulnerabilities instantly"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow",children:[e.jsx("h3",{className:"font-semibold text-blue-600 dark:text-blue-400",children:"⚡ Gas Optimization"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"AI-powered suggestions to reduce gas costs by up to 70%"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow",children:[e.jsx("h3",{className:"font-semibold text-green-600 dark:text-green-400",children:"🎤 Voice Control"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Hands-free coding with voice commands and dictation"})]})]})]})]})}export{j as default};
//# sourceMappingURL=AICodeWhispererPage-CgbZN01S.js.map
