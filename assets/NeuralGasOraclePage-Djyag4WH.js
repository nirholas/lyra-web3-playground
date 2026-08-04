import{j as e,ad as o,ah as x,S as m}from"./index-CwvhYMZj.js";import{b as i,L as g}from"./react-vendor-Cp2JmYUv.js";import{N as u}from"./NeuralGasOracle-BPunZbQm.js";import"./web3-vendor-CGwxEKZx.js";import"./activity-CV4c2GWL.js";import"./database-7U9cU_a8.js";import"./network-Bmi8bYHi.js";const h=`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title Gas-Heavy Contract for Optimization
/// @notice This contract has intentionally unoptimized patterns
contract GasHeavyContract {
    // Unoptimized: Using multiple storage slots
    uint256 public value1;
    uint256 public value2;
    uint256 public value3;
    
    // Unoptimized: Dynamic array iteration
    uint256[] public values;
    
    mapping(address => uint256) public balances;
    
    // Gas expensive: Multiple SSTOREs
    function setMultipleValues(uint256 v1, uint256 v2, uint256 v3) external {
        value1 = v1;
        value2 = v2;
        value3 = v3;
    }
    
    // Gas expensive: Loop with storage reads
    function sumAllValues() external view returns (uint256 total) {
        for (uint256 i = 0; i < values.length; i++) {
            total += values[i];
        }
    }
    
    // Gas expensive: String comparison
    function compareStrings(string memory a, string memory b) external pure returns (bool) {
        return keccak256(bytes(a)) == keccak256(bytes(b));
    }
    
    // Could use unchecked for gas savings
    function incrementCounter() external {
        value1 = value1 + 1;
    }
    
    function pushValue(uint256 value) external {
        values.push(value);
    }
    
    function deposit() external payable {
        balances[msg.sender] += msg.value;
    }
}`;function w(){const[s,l]=i.useState(h),[r,n]=i.useState([]),d=(a,t)=>{n(c=>[...c,{type:a,message:t,timestamp:Date.now()}])};return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900",children:[e.jsx("div",{className:"bg-gradient-to-r from-cyan-600 to-blue-600 text-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs(g,{to:"/innovation",className:"inline-flex items-center gap-2 text-cyan-200 hover:text-white mb-4 transition-colors",children:[e.jsx(o,{className:"w-4 h-4"}),"Back to Innovation Hub"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"p-3 bg-white/10 rounded-xl",children:e.jsx(x,{className:"w-8 h-8"})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl font-bold flex items-center gap-2",children:["Neural Gas Oracle",e.jsx(m,{className:"w-6 h-6 text-yellow-300"})]}),e.jsx("p",{className:"text-cyan-200 mt-1",children:"ML-powered gas prediction and optimization with 94% accuracy"})]})]})]})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden",children:[e.jsxs("div",{className:"border-b border-gray-200 dark:border-gray-700 px-4 py-3",children:[e.jsx("h2",{className:"font-semibold text-gray-900 dark:text-white",children:"Contract to Analyze"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"AI will predict and optimize gas usage"})]}),e.jsx("textarea",{value:s,onChange:a=>l(a.target.value),className:"w-full h-96 p-4 font-mono text-sm bg-gray-900 text-gray-100 resize-none focus:outline-none",spellCheck:!1})]}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden",children:e.jsx(u,{code:s,onLog:d})})]}),r.length>0&&e.jsxs("div",{className:"mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4",children:[e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white mb-3",children:"Optimization Log"}),e.jsx("div",{className:"space-y-2 max-h-48 overflow-y-auto",children:r.slice(-10).reverse().map((a,t)=>e.jsx("div",{className:`text-sm px-3 py-2 rounded ${a.type==="error"?"bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300":a.type==="warning"?"bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300":a.type==="success"?"bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`,children:a.message},t))})]}),e.jsxs("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow",children:[e.jsx("h3",{className:"font-semibold text-cyan-600 dark:text-cyan-400",children:"🧠 LSTM Predictor"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"94% accuracy trained on 100k+ contracts"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow",children:[e.jsx("h3",{className:"font-semibold text-blue-600 dark:text-blue-400",children:"🔄 Transformer Optimizer"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"91% accuracy for pattern-based optimizations"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow",children:[e.jsx("h3",{className:"font-semibold text-indigo-600 dark:text-indigo-400",children:"🎯 Pattern Matcher"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"89% accuracy for common gas patterns"})]})]}),e.jsx("div",{className:"mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-6 text-white",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 text-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold",children:"70%"}),e.jsx("div",{className:"text-cyan-100",children:"Max Gas Savings"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold",children:"100k+"}),e.jsx("div",{className:"text-cyan-100",children:"Contracts Analyzed"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-3xl font-bold",children:"$2.5M"}),e.jsx("div",{className:"text-cyan-100",children:"Total Savings Achieved"})]})]})})]})]})}export{w as default};
//# sourceMappingURL=NeuralGasOraclePage-Djyag4WH.js.map
