import{aY as T,aQ as _,aP as E,j as e,dS as F,eL as I,dp as U,aS as u,aT as W}from"./index-CwvhYMZj.js";import{F as N}from"./ShieldCheckIcon-Cg12noZK.js";import{b as a}from"./react-vendor-Cp2JmYUv.js";import{m as O}from"./ModalHeader-D_3-4MRo-Dlc1xzv1.js";import{l as V}from"./Layouts-BlFm53ED-CcJeY7Dk.js";import{g as H,h as z,u as M,b as Y,k as q}from"./shared-Ci2Sr9Yy-Dy9VGmke.js";import{w as s}from"./Screen-C2sjv2Hr-CNkHaVdl.js";import"./web3-vendor-CGwxEKZx.js";import"./index-Dq_xe9dz-CKGV5uof.js";const se={component:()=>{let[o,h]=a.useState(!0),{authenticated:p,user:w}=T(),{walletProxy:m,closePrivyModal:y,createAnalyticsEvent:v,client:b}=_(),{navigate:j,data:k,onUserCloseViaDialogOrKeybindRef:A}=E(),[l,C]=a.useState(void 0),[x,n]=a.useState(""),[d,f]=a.useState(!1),{entropyId:c,entropyIdVerifier:S,onCompleteNavigateTo:g,onSuccess:$,onFailure:P}=k.recoverWallet,i=(r="User exited before their wallet could be recovered")=>{y({shouldCallAuthOnSuccess:!1}),P(typeof r=="string"?new U(r):r)};return A.current=i,a.useEffect((()=>{if(!p)return i("User must be authenticated and have a Privy wallet before it can be recovered")}),[p]),e.jsxs(s,{children:[e.jsx(s.Header,{icon:N,title:"Enter your password",subtitle:"Please provision your account on this new device. To continue, enter your recovery password.",showClose:!0,onClose:i}),e.jsx(s.Body,{children:e.jsx(B,{children:e.jsxs("div",{children:[e.jsxs(H,{children:[e.jsx(z,{type:o?"password":"text",onChange:r=>(t=>{t&&C(t)})(r.target.value),disabled:d,style:{paddingRight:"2.3rem"}}),e.jsx(M,{style:{right:"0.75rem"},children:o?e.jsx(Y,{onClick:()=>h(!1)}):e.jsx(q,{onClick:()=>h(!0)})})]}),!!x&&e.jsx(D,{children:x})]})})}),e.jsxs(s.Footer,{children:[e.jsx(s.HelpText,{children:e.jsxs(V,{children:[e.jsx("h4",{children:"Why is this necessary?"}),e.jsx("p",{children:"You previously set a password for this wallet. This helps ensure only you can access it"})]})}),e.jsx(s.Actions,{children:e.jsx(K,{loading:d||!m,disabled:!l,onClick:async()=>{f(!0);let r=await b.getAccessToken(),t=F(w,c);if(!r||!t||l===null)return i("User must be authenticated and have a Privy wallet before it can be recovered");try{v({eventName:"embedded_wallet_recovery_started",payload:{walletAddress:t.address}}),await m?.recover({accessToken:r,entropyId:c,entropyIdVerifier:S,recoveryPassword:l}),n(""),g?j(g):y({shouldCallAuthOnSuccess:!1}),$?.(t),v({eventName:"embedded_wallet_recovery_completed",payload:{walletAddress:t.address}})}catch(R){I(R)?n("Invalid recovery password, please try again."):n("An error has occurred, please try again.")}finally{f(!1)}},$hideAnimations:!c&&d,children:"Recover your account"})}),e.jsx(s.Watermark,{})]})]})}};let B=u.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,D=u.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,K=u(O)`
  ${({$hideAnimations:o})=>o&&W`
      && {
        // Remove animations because the recoverWallet task on the iframe partially
        // blocks the renderer, so the animation stutters and doesn't look good
        transition: none;
      }
    `}
`;export{se as PasswordRecoveryScreen,se as default};
//# sourceMappingURL=PasswordRecoveryScreen-COuYWnEH-CRNealwR.js.map
