import{aY as A,aQ as N,aP as k,dP as M,cL as b,eV as E,eW as C,j as t,b8 as O,aS as u,eY as P}from"./index-CwvhYMZj.js";import{b as o}from"./react-vendor-Cp2JmYUv.js";import{h as z}from"./CopyToClipboard-DSTf_eKU-CbGW7Cls.js";import{a as I}from"./Layouts-BlFm53ED-CcJeY7Dk.js";import{a as q,i as F}from"./JsonTree-aPaJmPx7-h25Hocmw.js";import{n as V}from"./ScreenLayout-CEKu-oQC-HZV7AL8r.js";import{i as $,be as H}from"./web3-vendor-CGwxEKZx.js";import{c as J}from"./createLucideIcon-Bo__PW5l.js";import"./ModalHeader-D_3-4MRo-Dlc1xzv1.js";import"./Screen-C2sjv2Hr-CNkHaVdl.js";import"./index-Dq_xe9dz-CKGV5uof.js";const Q=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],W=J("square-pen",Q),Y=u.img`
  && {
    height: ${e=>e.size==="sm"?"65px":"140px"};
    width: ${e=>e.size==="sm"?"65px":"140px"};
    border-radius: 16px;
    margin-bottom: 12px;
  }
`;let K=e=>{if(!$(e))return e;try{let a=H(e);return a.includes("�")?e:a}catch{return e}},B=e=>{try{let a=P.decode(e),s=new TextDecoder().decode(a);return s.includes("�")?e:s}catch{return e}},G=e=>{let{types:a,primaryType:s,...l}=e.typedData;return t.jsxs(t.Fragment,{children:[t.jsx(te,{data:l}),t.jsx(z,{text:(n=e.typedData,JSON.stringify(n,null,2)),itemName:"full payload to clipboard"})," "]});var n};const X=({method:e,messageData:a,copy:s,iconUrl:l,isLoading:n,success:g,walletProxyIsLoading:m,errorMessage:x,isCancellable:d,onSign:c,onCancel:y,onClose:p})=>t.jsx(V,{title:s.title,subtitle:s.description,showClose:!0,onClose:p,icon:W,iconVariant:"subtle",helpText:x?t.jsx(ee,{children:x}):void 0,primaryCta:{label:s.buttonText,onClick:c,disabled:n||g||m,loading:n},secondaryCta:d?{label:"Not now",onClick:y,disabled:n||g||m}:void 0,watermark:!0,children:t.jsxs(I,{children:[l?t.jsx(Y,{style:{alignSelf:"center"},size:"sm",src:l,alt:"app image"}):null,t.jsxs(Z,{children:[e==="personal_sign"&&t.jsx(w,{children:K(a)}),e==="eth_signTypedData_v4"&&t.jsx(G,{typedData:a}),e==="solana_signMessage"&&t.jsx(w,{children:B(a)})]})]})}),ge={component:()=>{let{authenticated:e}=A(),{initializeWalletProxy:a,closePrivyModal:s}=N(),{navigate:l,data:n,onUserCloseViaDialogOrKeybindRef:g}=k(),[m,x]=o.useState(!0),[d,c]=o.useState(""),[y,p]=o.useState(),[f,T]=o.useState(null),[_,S]=o.useState(!1);o.useEffect((()=>{e||l("LandingScreen")}),[e]),o.useEffect((()=>{a(M).then((i=>{x(!1),i||(c("An error has occurred, please try again."),p(new b(new E(d,C.E32603_DEFAULT_INTERNAL_ERROR.eipCode))))}))}),[]);let{method:j,data:R,confirmAndSign:v,onSuccess:D,onFailure:L,uiOptions:r}=n.signMessage,U={title:r?.title||"Sign message",description:r?.description||"Signing this message will not cost you any fees.",buttonText:r?.buttonText||"Sign and continue"},h=i=>{i?D(i):L(y||new b(new E("The user rejected the request.",C.E4001_USER_REJECTED_REQUEST.eipCode))),s({shouldCallAuthOnSuccess:!1}),setTimeout((()=>{T(null),c(""),p(void 0)}),200)};return g.current=()=>{h(f)},t.jsx(X,{method:j,messageData:R,copy:U,iconUrl:r?.iconUrl&&typeof r.iconUrl=="string"?r.iconUrl:void 0,isLoading:_,success:f!==null,walletProxyIsLoading:m,errorMessage:d,isCancellable:r?.isCancellable,onSign:async()=>{S(!0),c("");try{let i=await v();T(i),S(!1),setTimeout((()=>{h(i)}),O)}catch(i){console.error(i),c("An error has occurred, please try again."),p(new b(new E(d,C.E32603_DEFAULT_INTERNAL_ERROR.eipCode))),S(!1)}},onCancel:()=>h(null),onClose:()=>h(f)})}};let Z=u.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ee=u.p`
  && {
    margin: 0;
    width: 100%;
    text-align: center;
    color: var(--privy-color-error-dark);
    font-size: 14px;
    line-height: 22px;
  }
`,te=u(q)`
  margin-top: 0;
`,w=u(F)`
  margin-top: 0;
`;export{ge as SignRequestScreen,X as SignRequestView,ge as default};
//# sourceMappingURL=SignRequestScreen-Drp6Qi0J-TQ6l0oCw.js.map
