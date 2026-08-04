import{j as e,bt as p,aO as P,aS as r}from"./index-CwvhYMZj.js";import{p as S,S as u,h as g}from"./WalletLink-C0Ue2G5C-DHz9xc4Z.js";import{c as v}from"./ethers-B0MTzayX-Bv8R2IEX.js";import{d as f}from"./Layouts-BlFm53ED-CcJeY7Dk.js";import{F as I}from"./ChevronDownIcon-BkCxevWb.js";import{b as d}from"./react-vendor-Cp2JmYUv.js";const h=({label:i,children:n,valueStyles:t})=>e.jsxs(C,{children:[e.jsx("div",{children:i}),e.jsx(B,{style:{...t},children:n})]});let C=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > :first-child {
    color: var(--privy-color-foreground-3);
    text-align: left;
  }

  > :last-child {
    color: var(--privy-color-foreground-2);
    text-align: right;
  }
`,B=r.div`
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  padding: 4px 8px;
`;const A=({gas:i,tokenPrice:n,tokenSymbol:t})=>e.jsxs(f,{style:{paddingBottom:"12px"},children:[e.jsxs(j,{children:[e.jsx(y,{children:"Est. Fees"}),e.jsx("div",{children:e.jsx(g,{weiQuantities:[BigInt(i)],tokenPrice:n,tokenSymbol:t})})]}),n&&e.jsx(m,{children:`${v(BigInt(i),t)}`})]}),F=({value:i,gas:n,tokenPrice:t,tokenSymbol:o})=>{let l=BigInt(i??0)+BigInt(n);return e.jsxs(f,{children:[e.jsxs(j,{children:[e.jsx(y,{children:"Total (including fees)"}),e.jsx("div",{children:e.jsx(g,{weiQuantities:[BigInt(i||0),BigInt(n)],tokenPrice:t,tokenSymbol:o})})]}),t&&e.jsx(m,{children:v(l,o)})]})};let j=r.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
`,m=r.div`
  display: flex;
  flex-direction: row;
  height: 12px;

  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
  font-weight: 400;
`,y=r.div`
  font-size: 14px;
  line-height: 22.4px;
  font-weight: 400;
`;const s=d.createContext(void 0),a=d.createContext(void 0),T=({defaultValue:i,children:n})=>{let[t,o]=d.useState(i||null);return e.jsx(s.Provider,{value:{activePanel:t,togglePanel:l=>{o(t===l?null:l)}},children:e.jsx(V,{children:n})})},$=({value:i,children:n})=>{let{activePanel:t,togglePanel:o}=d.useContext(s),l=t===i;return e.jsx(a.Provider,{value:{onToggle:()=>o(i),value:i},children:e.jsx(W,{isActive:l?"true":"false","data-open":String(l),children:n})})},z=({children:i})=>{let{activePanel:n}=d.useContext(s),{onToggle:t,value:o}=d.useContext(a),l=n===o;return e.jsxs(e.Fragment,{children:[e.jsxs(D,{onClick:t,"data-open":String(l),children:[e.jsx(R,{children:i}),e.jsx(O,{isactive:l?"true":"false",children:e.jsx(I,{height:"16px",width:"16px",strokeWidth:"2"})})]}),e.jsx(H,{})]})},E=({children:i})=>{let{activePanel:n}=d.useContext(s),{value:t}=d.useContext(a);return e.jsx(L,{"data-open":String(n===t),children:e.jsx(b,{children:i})})},Q=({children:i})=>{let{activePanel:n}=d.useContext(s),{value:t}=d.useContext(a);return e.jsx(b,{children:typeof i=="function"?i({isActive:n===t}):i})};let V=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`,D=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding-bottom: 8px;
`,H=r.div`
  width: 100%;

  && {
    border-top: 1px solid;
    border-color: var(--privy-color-foreground-4);
  }
  padding-bottom: 12px;
`,R=r.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  width: 100%;
  padding-right: 8px;
`,W=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  padding: 12px;

  && {
    border: 1px solid;
    border-color: var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
  }
`,L=r.div`
  position: relative;
  overflow: hidden;
  transition: max-height 25ms ease-out;

  &[data-open='true'] {
    max-height: 700px;
  }

  &[data-open='false'] {
    max-height: 0;
  }
`,b=r.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1 1 auto;
  min-height: 1px;
`,O=r.div`
  transform: ${i=>i.isactive==="true"?"rotate(180deg)":"rotate(0deg)"};
`;const Y=({from:i,to:n,txn:t,transactionInfo:o,tokenPrice:l,gas:c,tokenSymbol:x})=>{let w=BigInt(t?.value||0);return e.jsx(T,{...P().render.standalone?{defaultValue:"details"}:{},children:e.jsxs($,{value:"details",children:[e.jsx(z,{children:e.jsxs(q,{children:[e.jsx("div",{children:o?.title||"Details"}),e.jsx(G,{children:e.jsx(S,{weiQuantities:[w],tokenPrice:l,tokenSymbol:x})})]})}),e.jsxs(E,{children:[e.jsx(h,{label:"From",children:e.jsx(u,{walletAddress:i,chainId:t.chainId||p,chainType:"ethereum"})}),e.jsx(h,{label:"To",children:e.jsx(u,{walletAddress:n,chainId:t.chainId||p,chainType:"ethereum"})}),o&&o.action&&e.jsx(h,{label:"Action",children:o.action}),c&&e.jsx(A,{value:t.value,gas:c,tokenPrice:l,tokenSymbol:x})]}),e.jsx(Q,{children:({isActive:k})=>e.jsx(F,{value:t.value,displayFee:k,gas:c||"0x0",tokenPrice:l,tokenSymbol:x})})]})})};let q=r.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,G=r.div`
  flex-shrink: 0;
  padding-left: 8px;
`;export{Y as $};
//# sourceMappingURL=TransactionDetails-BoTugrU5-D5GKjL69.js.map
