import{j as e,ad as c,a9 as x,S as m}from"./index-CwvhYMZj.js";import{b as l,L as g}from"./react-vendor-Cp2JmYUv.js";import{C as h}from"./CollaborativeArena-CQK5psNm.js";import"./web3-vendor-CGwxEKZx.js";import"./trophy-Be8W0WH3.js";const p=`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title Collaborative Challenge Contract
/// @notice Complete the functions to pass all test cases!
contract CollaborativeChallenge {
    mapping(address => uint256) public scores;
    address[] public leaderboard;
    
    event ScoreUpdated(address indexed player, uint256 newScore);
    event ChallengeCompleted(address indexed winner, uint256 reward);
    
    /// @notice TODO: Implement a secure deposit function
    function deposit() external payable {
        // Your code here...
    }
    
    /// @notice TODO: Implement score tracking with overflow protection
    function addScore(address player, uint256 points) external {
        // Your code here...
    }
    
    /// @notice TODO: Return top 3 players
    function getTopPlayers() external view returns (address[] memory) {
        // Your code here...
    }
    
    /// @notice TODO: Implement secure reward distribution
    function distributeReward(address winner) external {
        // Your code here...
    }
}`;function f(){const[s,r]=l.useState(p),[d,o]=l.useState([]),i=(a,t)=>{o(n=>[...n,{type:a,message:t,timestamp:Date.now()}])};return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900",children:[e.jsx("div",{className:"bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs(g,{to:"/innovation",className:"inline-flex items-center gap-2 text-violet-200 hover:text-white mb-4 transition-colors",children:[e.jsx(c,{className:"w-4 h-4"}),"Back to Innovation Hub"]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"p-3 bg-white/10 rounded-xl",children:e.jsx(x,{className:"w-8 h-8"})}),e.jsxs("div",{children:[e.jsxs("h1",{className:"text-3xl font-bold flex items-center gap-2",children:["Collaborative Arena",e.jsx(m,{className:"w-6 h-6 text-yellow-300"})]}),e.jsx("p",{className:"text-violet-200 mt-1",children:"Code with AI teammates, compete in challenges, and earn bounties"})]})]})]})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden",children:[e.jsxs("div",{className:"border-b border-gray-200 dark:border-gray-700 px-4 py-3",children:[e.jsx("h2",{className:"font-semibold text-gray-900 dark:text-white",children:"Challenge Code"}),e.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Complete the TODOs with help from AI teammates"})]}),e.jsx("textarea",{value:s,onChange:a=>r(a.target.value),className:"w-full h-96 p-4 font-mono text-sm bg-gray-900 text-gray-100 resize-none focus:outline-none",spellCheck:!1})]}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden",children:e.jsx(h,{code:s,onCodeChange:r,onLog:i})})]}),d.length>0&&e.jsxs("div",{className:"mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4",children:[e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white mb-3",children:"Arena Log"}),e.jsx("div",{className:"space-y-2 max-h-48 overflow-y-auto",children:d.slice(-10).reverse().map((a,t)=>e.jsx("div",{className:`text-sm px-3 py-2 rounded ${a.type==="error"?"bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300":a.type==="warning"?"bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300":a.type==="success"?"bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`,children:a.message},t))})]}),e.jsxs("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow",children:[e.jsx("h3",{className:"font-semibold text-violet-600 dark:text-violet-400",children:"🤖 CodePilot"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Your AI pair programmer that suggests completions and fixes"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow",children:[e.jsx("h3",{className:"font-semibold text-fuchsia-600 dark:text-fuchsia-400",children:"👨‍🏫 Professor AI"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Explains concepts and provides educational guidance"})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-lg p-4 shadow",children:[e.jsx("h3",{className:"font-semibold text-pink-600 dark:text-pink-400",children:"🛡️ Security Auditor"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-1",children:"Reviews your code for vulnerabilities and best practices"})]})]})]})]})}export{f as default};
//# sourceMappingURL=CollaborativeArenaPage-BE_PVP4o.js.map
