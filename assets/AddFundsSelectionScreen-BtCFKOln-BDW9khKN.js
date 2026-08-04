import{aV as f,aP as x,aO as y,aW as C,j as r,aS as i}from"./index-CwvhYMZj.js";import{b as a}from"./react-vendor-Cp2JmYUv.js";import{n as g}from"./styles-DVyDvTdj-SsnFStKO.js";import{i as s,d as l,l as c,Q as j}from"./styles-DdJQcN_0-D7Kr8tzM.js";import"./web3-vendor-CGwxEKZx.js";import{c as b}from"./createLucideIcon-Bo__PW5l.js";import{C as w}from"./credit-card-Dnbq7B4e.js";import"./ScreenLayout-CEKu-oQC-HZV7AL8r.js";import"./ModalHeader-D_3-4MRo-Dlc1xzv1.js";import"./Screen-C2sjv2Hr-CNkHaVdl.js";import"./index-Dq_xe9dz-CKGV5uof.js";const k=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],d=b("banknote",k),Q={component:()=>{let e=f(),{onUserCloseViaDialogOrKeybindRef:n}=x(),p=y(),t=a.useRef(!1);a.useEffect((()=>{e&&(t.current=!1)}),[e]);let o=a.useCallback((async()=>{!t.current&&e&&(t.current=!0,C(),await e.onCancel())}),[e]);return a.useEffect((()=>(n.current=o,()=>{n.current===o&&(n.current=null)})),[o,n]),e?e.error?r.jsx(s,{icon:d,iconVariant:"warning",title:"Unable to add funds",subtitle:e.error,showClose:!0,onClose:o,primaryCta:{label:"Close",onClick:o}}):r.jsx(s,{icon:d,iconVariant:"subtle",title:"Select method",subtitle:"Choose how to fund your wallet",showClose:!0,onClose:o,children:r.jsxs(g,{style:{marginTop:"1rem"},$colorScheme:p.appearance.palette.colorScheme,children:[e.startFiat&&r.jsxs(l,{onClick:async()=>{t.current||(t.current=!0,await e.startFiat?.())},children:[r.jsx(u,{children:r.jsx(w,{})}),r.jsxs(m,{children:[r.jsx(c,{children:"Pay with fiat"}),r.jsx(h,{children:"Apple Pay, Google Pay, or debit card"})]})]}),e.startCrypto&&r.jsxs(l,{onClick:async()=>{t.current||(t.current=!0,await e.startCrypto?.())},children:[r.jsx(u,{children:r.jsx(j,{})}),r.jsxs(m,{children:[r.jsx(c,{children:"Transfer from wallet"}),r.jsx(h,{children:"Send crypto from any wallet"})]})]})]})}):null}};let u=i.span`
  width: 2rem;
  height: 2rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  color: var(--color-icon-muted, #64668b);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`,m=i.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,h=i.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--privy-color-foreground-3);
`;export{Q as AddFundsSelectionScreen,Q as default};
//# sourceMappingURL=AddFundsSelectionScreen-BtCFKOln-BDW9khKN.js.map
