import{h as m,b as x,j as e,q as h,F as u,C as n,d as o,aa as y,Z as g,E as b,x as j}from"./index-CwvhYMZj.js";import{b as f,L as c}from"./react-vendor-Cp2JmYUv.js";import"./web3-vendor-CGwxEKZx.js";const N=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],k=m("server",N),w=[{id:"compile",title:"Compilation API",description:"Compile Solidity smart contracts",endpoints:[{method:"POST",path:"/api/compile",description:"Compile a Solidity smart contract and return the ABI and bytecode",parameters:[{name:"source",type:"string",required:!0,description:"Solidity source code"},{name:"version",type:"string",required:!1,description:"Solidity compiler version (default: 0.8.19)"},{name:"optimization",type:"boolean",required:!1,description:"Enable optimization (default: true)"},{name:"runs",type:"number",required:!1,description:"Optimization runs (default: 200)"}],response:`{
  "success": true,
  "contracts": {
    "ContractName": {
      "abi": [...],
      "bytecode": "0x...",
      "deployedBytecode": "0x..."
    }
  },
  "warnings": [],
  "errors": []
}`,example:`fetch('/api/compile', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    source: 'pragma solidity ^0.8.19; contract Hello { }',
    version: '0.8.19',
    optimization: true
  })
})`}]},{id:"deploy",title:"Deployment API",description:"Deploy contracts to various networks",endpoints:[{method:"POST",path:"/api/deploy",description:"Deploy a compiled contract to a testnet",parameters:[{name:"abi",type:"array",required:!0,description:"Contract ABI"},{name:"bytecode",type:"string",required:!0,description:"Contract bytecode"},{name:"network",type:"string",required:!0,description:"Target network (sepolia, mumbai, etc.)"},{name:"constructorArgs",type:"array",required:!1,description:"Constructor arguments"}],response:`{
  "success": true,
  "contractAddress": "0x...",
  "transactionHash": "0x...",
  "network": "sepolia",
  "blockNumber": 12345678
}`,example:`fetch('/api/deploy', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    abi: [...],
    bytecode: '0x...',
    network: 'sepolia',
    constructorArgs: []
  })
})`}]},{id:"ai",title:"AI API",description:"AI-powered code analysis and generation",endpoints:[{method:"POST",path:"/api/ai/analyze",description:"Analyze smart contract code for issues and improvements",parameters:[{name:"source",type:"string",required:!0,description:"Solidity source code to analyze"},{name:"type",type:"string",required:!1,description:"Analysis type: security, gas, or all (default: all)"}],response:`{
  "success": true,
  "analysis": {
    "security": [...],
    "gasOptimization": [...],
    "bestPractices": [...],
    "score": 85
  }
}`,example:`fetch('/api/ai/analyze', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    source: 'contract MyToken { ... }',
    type: 'security'
  })
})`},{method:"POST",path:"/api/ai/generate",description:"Generate smart contract code from natural language description",parameters:[{name:"prompt",type:"string",required:!0,description:"Description of the contract to generate"},{name:"template",type:"string",required:!1,description:"Base template: erc20, erc721, custom"}],response:`{
  "success": true,
  "code": "// SPDX-License-Identifier: MIT...",
  "explanation": "This contract implements..."
}`,example:`fetch('/api/ai/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    prompt: 'Create a simple voting contract',
    template: 'custom'
  })
})`}]},{id:"faucet",title:"Faucet API",description:"Request testnet tokens",endpoints:[{method:"POST",path:"/api/faucet/request",description:"Request testnet tokens for an address",parameters:[{name:"address",type:"string",required:!0,description:"Wallet address to receive tokens"},{name:"network",type:"string",required:!0,description:"Target network (sepolia, mumbai)"}],response:`{
  "success": true,
  "transactionHash": "0x...",
  "amount": "0.1",
  "network": "sepolia"
}`,example:`fetch('/api/faucet/request', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    address: '0x...',
    network: 'sepolia'
  })
})`}]},{id:"ipfs",title:"IPFS API",description:"Store and retrieve data from IPFS",endpoints:[{method:"POST",path:"/api/ipfs/upload",description:"Upload content to IPFS",parameters:[{name:"content",type:"string | object",required:!0,description:"Content to upload (JSON or string)"},{name:"filename",type:"string",required:!1,description:"Optional filename"}],response:`{
  "success": true,
  "cid": "Qm...",
  "url": "ipfs://Qm...",
  "gateway": "https://ipfs.io/ipfs/Qm..."
}`,example:`fetch('/api/ipfs/upload', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    content: { name: 'My NFT', description: '...' },
    filename: 'metadata.json'
  })
})`},{method:"GET",path:"/api/ipfs/:cid",description:"Retrieve content from IPFS by CID",parameters:[{name:"cid",type:"string",required:!0,description:"IPFS Content Identifier"}],response:`{
  "success": true,
  "content": { ... }
}`,example:"fetch('/api/ipfs/QmXxx...')"}]}];function C(){x({title:"API Reference",description:"Complete API documentation for Lyra Web3 Playground. Compilation, deployment, template, and project sharing endpoints with examples.",path:"/docs/api"});const[a,l]=f.useState(null),i=s=>{navigator.clipboard.writeText(s),l(s),setTimeout(()=>l(null),2e3)},d=s=>{switch(s){case"GET":return"bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";case"POST":return"bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";case"PUT":return"bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";case"DELETE":return"bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";default:return"bg-gray-100 text-gray-700"}};return e.jsxs("div",{className:"min-h-screen bg-gray-50 dark:bg-gray-900",children:[e.jsx("div",{className:"bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700",children:e.jsx("div",{className:"container mx-auto px-4 py-4",children:e.jsxs("nav",{className:"flex items-center space-x-2 text-sm",children:[e.jsx(c,{to:"/docs",className:"text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:"Documentation"}),e.jsx(h,{className:"w-4 h-4 text-gray-400"}),e.jsx("span",{className:"text-gray-900 dark:text-white font-medium",children:"API Reference"})]})})}),e.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12",children:e.jsx("div",{className:"container mx-auto px-4",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("div",{className:"flex items-center space-x-4 mb-4",children:[e.jsx("div",{className:"p-3 bg-white/20 rounded-xl",children:e.jsx(u,{className:"w-8 h-8"})}),e.jsx("h1",{className:"text-3xl md:text-4xl font-black",children:"API Reference"})]}),e.jsx("p",{className:"text-xl text-blue-100",children:"Complete reference for the Lyra Web3 Playground REST API"})]})})}),e.jsx("div",{className:"container mx-auto px-4 py-12",children:e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsxs("div",{className:"mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg",children:[e.jsxs("h2",{className:"text-lg font-bold mb-3 flex items-center",children:[e.jsx(k,{className:"w-5 h-5 mr-2 text-blue-600"}),"Base URL"]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("code",{className:"flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg font-mono text-sm",children:"https://api.lyra.works"}),e.jsx("button",{onClick:()=>i("https://api.lyra.works"),className:"p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",children:a==="https://api.lyra.works"?e.jsx(n,{className:"w-5 h-5 text-green-500"}):e.jsx(o,{className:"w-5 h-5"})})]})]}),e.jsxs("div",{className:"mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg",children:[e.jsxs("h2",{className:"text-lg font-bold mb-3 flex items-center",children:[e.jsx(y,{className:"w-5 h-5 mr-2 text-blue-600"}),"Authentication"]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:"Most endpoints require an API key. Include it in the request headers:"}),e.jsx("pre",{className:"p-4 bg-gray-900 text-gray-300 rounded-lg overflow-x-auto text-sm",children:e.jsx("code",{children:"Authorization: Bearer YOUR_API_KEY"})}),e.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400 mt-4",children:["API keys are available for registered developers. Contact us on"," ",e.jsx("a",{href:"https://github.com/nirholas/lyra-web3-playground/discussions",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline",children:"GitHub Discussions"})," ","to request access."]})]}),e.jsxs("div",{className:"mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg",children:[e.jsxs("h2",{className:"text-lg font-bold mb-3 flex items-center",children:[e.jsx(g,{className:"w-5 h-5 mr-2 text-blue-600"}),"Rate Limiting"]}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"API requests are rate limited to ensure fair usage:"}),e.jsxs("ul",{className:"mt-4 space-y-2 text-gray-600 dark:text-gray-400",children:[e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Free tier:"})," 100 requests per hour"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Pro tier:"})," 1,000 requests per hour"]}),e.jsxs("li",{children:["• ",e.jsx("strong",{children:"Compile endpoint:"})," 50 requests per hour"]})]})]}),w.map(s=>e.jsxs("div",{id:s.id,className:"mb-12",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:s.title}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-6",children:s.description}),s.endpoints.map((t,p)=>e.jsxs("div",{className:"mb-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden",children:[e.jsxs("div",{className:"p-4 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-3",children:[e.jsx("span",{className:`px-3 py-1 rounded-lg text-sm font-bold ${d(t.method)}`,children:t.method}),e.jsx("code",{className:"font-mono text-sm",children:t.path})]}),e.jsxs("div",{className:"p-6",children:[e.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-4",children:t.description}),t.parameters&&t.parameters.length>0&&e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"font-bold mb-3",children:"Parameters"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-gray-200 dark:border-gray-700",children:[e.jsx("th",{className:"text-left py-2 pr-4",children:"Name"}),e.jsx("th",{className:"text-left py-2 pr-4",children:"Type"}),e.jsx("th",{className:"text-left py-2 pr-4",children:"Required"}),e.jsx("th",{className:"text-left py-2",children:"Description"})]})}),e.jsx("tbody",{children:t.parameters.map(r=>e.jsxs("tr",{className:"border-b border-gray-100 dark:border-gray-700/50",children:[e.jsx("td",{className:"py-2 pr-4 font-mono text-blue-600",children:r.name}),e.jsx("td",{className:"py-2 pr-4 text-gray-500",children:r.type}),e.jsx("td",{className:"py-2 pr-4",children:r.required?e.jsx("span",{className:"text-red-500",children:"Required"}):e.jsx("span",{className:"text-gray-400",children:"Optional"})}),e.jsx("td",{className:"py-2 text-gray-600 dark:text-gray-400",children:r.description})]},r.name))})]})})]}),t.response&&e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"font-bold mb-3",children:"Response"}),e.jsxs("div",{className:"relative",children:[e.jsx("pre",{className:"p-4 bg-gray-900 text-gray-300 rounded-lg overflow-x-auto text-sm",children:e.jsx("code",{children:t.response})}),e.jsx("button",{onClick:()=>i(t.response),className:"absolute top-2 right-2 p-2 text-gray-400 hover:text-white",children:a===t.response?e.jsx(n,{className:"w-4 h-4 text-green-500"}):e.jsx(o,{className:"w-4 h-4"})})]})]}),t.example&&e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold mb-3",children:"Example"}),e.jsxs("div",{className:"relative",children:[e.jsx("pre",{className:"p-4 bg-gray-900 text-gray-300 rounded-lg overflow-x-auto text-sm",children:e.jsx("code",{children:t.example})}),e.jsx("button",{onClick:()=>i(t.example),className:"absolute top-2 right-2 p-2 text-gray-400 hover:text-white",children:a===t.example?e.jsx(n,{className:"w-4 h-4 text-green-500"}):e.jsx(o,{className:"w-4 h-4"})})]})]})]})]},p))]},s.id)),e.jsxs("div",{className:"mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl",children:[e.jsx("h3",{className:"font-bold mb-4",children:"Need Help?"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs("a",{href:"https://github.com/nirholas/lyra-web3-playground/discussions",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline",children:[e.jsx(b,{className:"w-4 h-4"}),e.jsx("span",{children:"Ask on GitHub"})]}),e.jsxs(c,{to:"/docs",className:"inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline",children:[e.jsx(j,{className:"w-4 h-4"}),e.jsx("span",{children:"Browse Documentation"})]})]})]})]})})]})}export{C as default};
//# sourceMappingURL=ApiReferencePage-CZHu7hjz.js.map
