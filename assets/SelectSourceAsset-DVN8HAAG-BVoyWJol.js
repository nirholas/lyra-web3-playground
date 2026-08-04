import{j as e,dO as h,aS as r}from"./index-CwvhYMZj.js";import{b as l}from"./react-vendor-Cp2JmYUv.js";import{n as A}from"./ScreenLayout-CEKu-oQC-HZV7AL8r.js";import{C as S}from"./chevron-down-zTj6iVh5.js";const P=({currency:o="usd",value:s,onChange:n,inputMode:a="decimal",autoFocus:p})=>{let[u,j]=l.useState("0"),[m,k]=l.useState(null),g=l.useRef(null),v=l.useRef(null),d=s??u,x=h[o]?.symbol??"$",c=d.length>9?"small":d.length>6?"compact":"default";l.useLayoutEffect((()=>{let t=v.current?.offsetWidth;k(t?Math.ceil(t)+2:null)}),[c,d]);let C=l.useCallback((t=>{let i=t.target.value,f=(i=i.replace(/[^\d.]/g,"")).split(".");f.length>2&&(i=f[0]+"."+f.slice(1).join(""));let[$="",y]=i.split("."),b=$.replace(/^0+(?=\d)/,"");((i=y!==void 0?`${b||"0"}.${y}`:b||"0")===""||i===".")&&(i="0"),n?n(i):j(i)}),[n]),z=l.useCallback((t=>{!(["Delete","Backspace","Tab","Escape","Enter",".","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)||(t.ctrlKey||t.metaKey)&&["a","c","v","x"].includes(t.key.toLowerCase()))&&(t.key>="0"&&t.key<="9"||t.preventDefault())}),[]);return e.jsxs(E,{$size:c,onClick:()=>g.current?.focus(),children:[e.jsx(w,{$size:c,children:x}),e.jsx(L,{ref:g,type:"text",inputMode:a,value:d,onChange:C,onKeyDown:z,autoFocus:p,placeholder:"0","aria-label":"Amount",style:m?{width:`${m}px`}:void 0}),e.jsx(D,{ref:v,"aria-hidden":"true",children:d}),e.jsx(w,{$size:c,style:{opacity:0},children:x})]})},Q=({selectedAsset:o,onEditSourceAsset:s})=>{let{icon:n}=h[o];return e.jsxs(R,{onClick:s,children:[e.jsx(B,{children:n}),e.jsx(K,{children:o.toLocaleUpperCase()}),e.jsx(M,{children:e.jsx(S,{})})]})};let E=r.span`
  position: relative;
  background-color: var(--privy-color-background);
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  font-kerning: none;
  font-feature-settings: 'calt' off;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;

  && {
    color: var(--privy-color-foreground);
    font-size: ${({$size:o})=>o==="small"?"2.25rem":o==="compact"?"3rem":"3.75rem"};
    font-style: normal;
    font-weight: 600;
    line-height: 5.375rem;
  }
`,L=r.input`
  appearance: none;
  align-self: flex-start;
  min-width: 1ch;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-align: left;
  caret-color: currentColor;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
`,D=r.span`
  position: absolute;
  visibility: hidden;
  white-space: pre;
  pointer-events: none;
`,w=r.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: ${({$size:o})=>o==="small"?"0.75rem":o==="compact"?"0.875rem":"1rem"};
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  margin-top: 0.75rem;
`,R=r.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  gap: 0.5rem;
  border: 1px solid var(--privy-color-border-default);
  border-radius: var(--privy-border-radius-full);

  && {
    margin: auto;
    padding: 0.5rem 1rem;
  }
`,B=r.div`
  svg {
    width: 1rem;
    height: 1rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
    border: solid 0.1px var(--privy-color-border-default);
  }
`,K=r.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`,M=r.div`
  color: var(--privy-color-foreground);

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;const V=({opts:o,isLoading:s,onSelectSource:n})=>e.jsx(A,{showClose:!1,showBack:!0,onBack:()=>n(o.source.selectedAsset),title:"Select currency",children:e.jsx(U,{children:o.source.assets.map((a=>{let{icon:p,name:u}=h[a];return e.jsx(F,{onClick:()=>n(a),disabled:s,children:e.jsxs(H,{children:[e.jsx(O,{children:p}),e.jsxs(T,{children:[e.jsx(W,{children:u}),e.jsx(q,{children:a.toLocaleUpperCase()})]})]})},a)}))})});let U=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-height: 20.875rem;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,F=r.button`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;

  && {
    padding: 0.75rem 1rem;
  }
`,H=r.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,O=r.div`
  svg {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
    border: solid 0.1px var(--privy-color-border-default);
  }
`,T=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
`,W=r.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
`,q=r.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
`;export{P as c,Q as p,V as w};
//# sourceMappingURL=SelectSourceAsset-DVN8HAAG-BVoyWJol.js.map
