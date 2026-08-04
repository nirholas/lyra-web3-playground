import{j as e,ad as c,a7 as m,S as x}from"./index-CwvhYMZj.js";import{b as n,L as g}from"./react-vendor-Cp2JmYUv.js";import{C as h}from"./ContractTimeMachine-CF4vN6XX.js";import"./web3-vendor-CGwxEKZx.js";const p=`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract EvolvingToken {
    string public name = "TimeToken";
    string public symbol = "TIME";
    uint8 public decimals = 18;
    uint256 public totalSupply;
    
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    
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
}`;function f(){const[s,r]=n.useState(p),[i,d]=n.useState([]),l=(a,t)=>{d(o=>[...o,{type:a,message:t,timestamp:Date.now()}])};return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900",children:[e.jsx("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-600 text-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs(g,{to:"/innovation",className:"inline-flex items-center gap-2 text-indigo-200 hover:text-white mb-4 transition-colors",children:[e.jsx(c,{className:"w-4 h-4"}),"Back to Innovation Hub"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"p-3 bg-white/10 rounded-xl",children:e.jsx(m,{className:"w-8 h-8"})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl font-bold flex items-center gap-2",children:["Contract Time Machine",e.jsx(x,{className:"w-6 h-6 text-yellow-300"})]}),e.jsx("p",{className:"text-indigo-200 mt-1",children:"Travel through code history, fork realities, and simulate future executions"})]})]})]})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden",children:[e.jsxs("div",{className:"border-b border-gray-200 dark:border-gray-700 px-4 py-3",children:[e.jsx("h2",{className:"font-semibold text-gray-900 dark:text-white",children:"Smart Contract Code"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Make changes and travel through time"})]}),e.jsx("textarea",{value:s,onChange:a=>r(a.target.value),className:"w-full h-96 p-4 font-mono text-sm bg-gray-900 text-gray-100 resize-none focus:outline-none",spellCheck:!1})]}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden",children:e.jsx(h,{currentCode:s,onCodeChange:r,onLog:l})})]}),i.length>0&&e.jsxs("div",{className:"mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4",children:[e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white mb-3",children:"Timeline Log"}),e.jsx("div",{className:"space-y-2 max-h-48 overflow-y-auto",children:i.slice(-10).reverse().map((a,t)=>e.jsx("div",{className:`text-sm px-3 py-2 rounded ${a.type==="error"?"bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300":a.type==="warning"?"bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300":a.type==="success"?"bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`,children:a.message},t))})]}),e.jsxs("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow",children:[e.jsx("h3",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"⏪ Time Travel"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Navigate through every version of your code with precision"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow",children:[e.jsx("h3",{className:"font-semibold text-purple-600 dark:text-purple-400",children:"🔀 Fork Reality"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Create parallel timelines to explore different implementations"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow",children:[e.jsx("h3",{className:"font-semibold text-blue-600 dark:text-blue-400",children:"🔮 Future Simulation"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Predict how your contract will behave under various conditions"})]})]})]})]})}export{f as default};
//# sourceMappingURL=ContractTimeMachinePage-C-b4W0Ps.js.map
