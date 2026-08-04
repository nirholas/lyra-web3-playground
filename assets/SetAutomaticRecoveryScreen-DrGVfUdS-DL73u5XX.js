import{aY as E,aQ as F,aP as P,j as e,cW as g,dS as w,b8 as R,aS as U}from"./index-CwvhYMZj.js";import{F as W}from"./ExclamationTriangleIcon-DDJREHD6.js";import{F as I}from"./LockClosedIcon-BOzSnyUv.js";import{b as y}from"./react-vendor-Cp2JmYUv.js";import{T as x,k as v,u as j}from"./ModalHeader-D_3-4MRo-Dlc1xzv1.js";import{r as A}from"./Subtitle-CV-2yKE4-DFj2A67I.js";import{e as S}from"./Title-BnzYV3Is-Bj_ZjRfN.js";import"./web3-vendor-CGwxEKZx.js";const M=U.div`
  && {
    border-width: 4px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  aspect-ratio: 1;
  border-style: solid;
  border-color: ${t=>t.$color??"var(--privy-color-accent)"};
  border-radius: 50%;
`,_={component:()=>{let{user:t}=E(),{client:b,walletProxy:u,refreshSessionAndUser:$,closePrivyModal:s}=F(),r=P(),{entropyId:m,entropyIdVerifier:k}=r.data?.recoverWallet??{},[a,f]=y.useState(!1),[i,T]=y.useState(null),[l,h]=y.useState(null);function n(){if(!a){if(l)return r.data?.setWalletPassword?.onFailure(l),void s();if(!i)return r.data?.setWalletPassword?.onFailure(Error("User exited set recovery flow")),void s()}}r.onUserCloseViaDialogOrKeybindRef.current=n;let C=!(!a&&!i);return e.jsxs(e.Fragment,l?{children:[e.jsx(x,{onClose:n},"header"),e.jsx(M,{$color:"var(--privy-color-error)",style:{alignSelf:"center"},children:e.jsx(W,{height:38,width:38,stroke:"var(--privy-color-error)"})}),e.jsx(S,{style:{marginTop:"0.5rem"},children:"Something went wrong"}),e.jsx(g,{style:{minHeight:"2rem"}}),e.jsx(v,{onClick:()=>h(null),children:"Try again"}),e.jsx(j,{})]}:{children:[e.jsx(x,{onClose:n},"header"),e.jsx(I,{style:{width:"3rem",height:"3rem",alignSelf:"center"}}),e.jsx(S,{style:{marginTop:"0.5rem"},children:"Automatically secure your account"}),e.jsx(A,{style:{marginTop:"1rem"},children:"When you log into a new device, you’ll only need to authenticate to access your account. Never get logged out if you forget your password."}),e.jsx(g,{style:{minHeight:"2rem"}}),e.jsx(v,{loading:a,disabled:C,onClick:()=>(async function(){f(!0);try{let o=await b.getAccessToken(),c=w(t,m);if(!o||!u||!c)return;if(!(await u.setRecovery({accessToken:o,entropyId:m,entropyIdVerifier:k,existingRecoveryMethod:c.recoveryMethod,recoveryMethod:"privy"})).entropyId)throw Error("Unable to set recovery on wallet");let d=await $();if(!d)throw Error("Unable to set recovery on wallet");let p=w(d,c.address);if(!p)throw Error("Unabled to set recovery on wallet");T(!!d),setTimeout((()=>{r.data?.setWalletPassword?.onSuccess(p),s()}),R)}catch(o){h(o)}finally{f(!1)}})(),children:i?"Success":"Confirm"}),e.jsx(j,{})]})}};export{_ as SetAutomaticRecoveryScreen,_ as default};
//# sourceMappingURL=SetAutomaticRecoveryScreen-DrGVfUdS-DL73u5XX.js.map
