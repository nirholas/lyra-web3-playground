import{j as e,aS as r}from"./index-CwvhYMZj.js";import{b as m}from"./react-vendor-Cp2JmYUv.js";import{$ as p}from"./ModalHeader-D_3-4MRo-Dlc1xzv1.js";import{e as f}from"./ErrorMessage-D8VaAP5m-CHjHeUuA.js";import{r as x}from"./LabelXs-oqZNqbm_-l49xTuOu.js";import{d as h}from"./Address-Cno9Tu-W-B6XGj74H.js";import{d as g}from"./shared-FM0rljBt-GTof99va.js";import{C as j}from"./check-Deqt4hNf.js";import{C as u}from"./copy-DV1q-aaV.js";let v=r(g)`
  && {
    padding: 0.75rem;
    height: 56px;
  }
`,y=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,C=r.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,b=r.div`
  font-size: 12px;
  line-height: 1rem;
  color: var(--privy-color-foreground-3);
`,w=r(x)`
  text-align: left;
  margin-bottom: 0.5rem;
`,z=r(f)`
  margin-top: 0.25rem;
`,E=r(p)`
  && {
    gap: 0.375rem;
    font-size: 14px;
  }
`;const P=({errMsg:t,balance:s,address:a,className:c,title:n,showCopyButton:d=!1})=>{let[o,l]=m.useState(!1);return m.useEffect((()=>{if(o){let i=setTimeout((()=>l(!1)),3e3);return()=>clearTimeout(i)}}),[o]),e.jsxs("div",{children:[n&&e.jsx(w,{children:n}),e.jsx(v,{className:c,$state:t?"error":void 0,children:e.jsxs(y,{children:[e.jsxs(C,{children:[e.jsx(h,{address:a,showCopyIcon:!1}),s!==void 0&&e.jsx(b,{children:s})]}),d&&e.jsx(E,{onClick:function(i){i.stopPropagation(),navigator.clipboard.writeText(a).then((()=>l(!0))).catch(console.error)},size:"sm",children:e.jsxs(e.Fragment,o?{children:["Copied",e.jsx(j,{size:14})]}:{children:["Copy",e.jsx(u,{size:14})]})})]})}),t&&e.jsx(z,{children:t})]})};export{P as j};
//# sourceMappingURL=WalletInfoCard-B7po3U-w-C0AP9u5X.js.map
