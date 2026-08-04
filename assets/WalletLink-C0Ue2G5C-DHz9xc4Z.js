import{j as n,bq as j,aS as l}from"./index-CwvhYMZj.js";import{i as $,m as c,o as d,c as m}from"./ethers-B0MTzayX-Bv8R2IEX.js";import{C as g}from"./getFormattedUsdFromLamports-B6EqSEho-C-HCdwKa.js";import{t as k}from"./transaction-CnfuREWo-nROljJQP.js";import{aK as S}from"./web3-vendor-CGwxEKZx.js";const P=({weiQuantities:e,tokenPrice:r,tokenSymbol:o})=>{let i=c(e),t=r?d(i,r):void 0,s=m(i,o);return n.jsx(a,{children:t||s})},q=({weiQuantities:e,tokenPrice:r,tokenSymbol:o})=>{let i=c(e),t=r?d(i,r):void 0,s=m(i,o);return n.jsx(a,{children:t?n.jsxs(n.Fragment,{children:[n.jsx(y,{children:"USD"}),t==="<$0.01"?n.jsxs(h,{children:[n.jsx(p,{children:"<"}),"$0.01"]}):t]}):s})},D=({quantities:e,tokenPrice:r,tokenSymbol:o="SOL",tokenDecimals:i=9})=>{let t=e.reduce(((f,u)=>f+u),0n),s=r&&o==="SOL"&&i===9?g(t,r):void 0,x=o==="SOL"&&i===9?k(t):`${S(t,i)} ${o}`;return n.jsx(a,{children:s?n.jsx(n.Fragment,{children:s==="<$0.01"?n.jsxs(h,{children:[n.jsx(p,{children:"<"}),"$0.01"]}):s}):x})};let a=l.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,y=l.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,p=l.span`
  font-size: 10px;
`,h=l.span`
  display: flex;
  align-items: center;
`;function v(e,r){return`https://explorer.solana.com/account/${e}?chain=${r}`}const F=e=>n.jsx(b,{href:e.chainType==="ethereum"?$(e.chainId,e.walletAddress):v(e.walletAddress,e.chainId),target:"_blank",children:j(e.walletAddress)});let b=l.a`
  &:hover {
    text-decoration: underline;
  }
`;export{F as S,D as f,q as h,P as p};
//# sourceMappingURL=WalletLink-C0Ue2G5C-DHz9xc4Z.js.map
