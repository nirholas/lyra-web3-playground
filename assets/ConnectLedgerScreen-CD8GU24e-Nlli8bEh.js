import{aP as a,j as n,aS as o}from"./index-CwvhYMZj.js";import{n as s}from"./ScreenLayout-CEKu-oQC-HZV7AL8r.js";import"./react-vendor-Cp2JmYUv.js";import"./web3-vendor-CGwxEKZx.js";import"./ModalHeader-D_3-4MRo-Dlc1xzv1.js";import"./Screen-C2sjv2Hr-CNkHaVdl.js";import"./index-Dq_xe9dz-CKGV5uof.js";const L=e=>n.jsx("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"-0.625 12.48 397.647 399.546",width:"2500",height:"674",preserveAspectRatio:"none",...e,children:n.jsx("g",{children:n.jsx("path",{fill:"#333745",d:"M 333.9 12.8 L 150.9 12.8 L 150.9 258.4 L 396.5 258.4 L 396.5 76.7 C 396.6 42.2 368.4 12.8 333.9 12.8 Z M 94.7 12.8 L 64 12.8 C 29.5 12.8 0 40.9 0 76.8 L 0 107.5 L 94.7 107.5 L 94.7 12.8 Z M 0 165 L 94.7 165 L 94.7 259.7 L 0 259.7 L 0 165 Z M 301.9 410.6 L 332.6 410.6 C 367.1 410.6 396.6 382.5 396.6 346.6 L 396.6 316 L 301.9 316 L 301.9 410.6 Z M 150.9 316 L 245.6 316 L 245.6 410.7 L 150.9 410.7 L 150.9 316 Z M 0 316 L 0 346.7 C 0 381.2 28.1 410.7 64 410.7 L 94.7 410.7 L 94.7 316 L 0 316 Z"})})}),c=({onContinueWithLedger:e,onContinueWithoutLedger:t,title:i="Using a hardware wallet?",subtitle:r=`If you have a Ledger connected,
continue to sign with Ledger`})=>n.jsx(s,{title:i,subtitle:n.jsx(d,{children:r}),primaryCta:{label:"Continue with Ledger",onClick:e},secondaryCta:{label:"Continue without Ledger",onClick:t},watermark:!0,children:n.jsx(l,{children:n.jsx(L,{style:{width:"48px",height:"48px"}})})});function g(){let{data:e,setModalData:t,navigate:i}=a();return n.jsx(c,{onContinueWithLedger:function(){t({...e,login:{...e?.login,isSigningInWithLedgerSolana:!0}}),i("ConnectionStatusScreen")},onContinueWithoutLedger:function(){t({...e,login:{...e?.login,isSigningInWithLedgerSolana:!1}}),i("ConnectionStatusScreen")}})}const S={component:g};let l=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: var(--screen-space);
`,d=o.span`
  white-space: pre-wrap;
`;export{S as ConnectLedgerScreen,g as ConnectLedgerScreenComponent,c as ConnectLedgerScreenView,S as default};
//# sourceMappingURL=ConnectLedgerScreen-CD8GU24e-Nlli8bEh.js.map
