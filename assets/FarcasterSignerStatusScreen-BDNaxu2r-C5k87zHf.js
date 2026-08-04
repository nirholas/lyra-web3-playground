import{aP as F,aO as T,aQ as I,b8 as y,j as t,b9 as x,aX as O,aS as o}from"./index-CwvhYMZj.js";import{b as c}from"./react-vendor-Cp2JmYUv.js";import{h as q}from"./CopyToClipboard-DSTf_eKU-CbGW7Cls.js";import{n as B}from"./OpenLink-DZHy38vr-DVCOOH8p.js";import{C as E}from"./QrCode-GMgqSEw1-YzIYpK6K.js";import{n as _}from"./ScreenLayout-CEKu-oQC-HZV7AL8r.js";import{l as h}from"./farcaster-DPlSjvF5-CptHzlCm.js";import"./web3-vendor-CGwxEKZx.js";import"./dijkstra-COg3n3zL.js";import"./ModalHeader-D_3-4MRo-Dlc1xzv1.js";import"./Screen-C2sjv2Hr-CNkHaVdl.js";import"./index-Dq_xe9dz-CKGV5uof.js";let S="#8a63d2";const M=({appName:u,loading:m,success:p,errorMessage:e,connectUri:a,onBack:r,onClose:l,onOpenFarcaster:s})=>t.jsx(_,x.isMobile||m?x.isIOS?{title:e?e.message:"Add a signer to Farcaster",subtitle:e?e.detail:`This will allow ${u} to add casts, likes, follows, and more on your behalf.`,icon:h,iconVariant:"loading",iconLoadingStatus:{success:p,fail:!!e},primaryCta:a&&s?{label:"Open Farcaster app",onClick:s}:void 0,onBack:r,onClose:l,watermark:!0}:{title:e?e.message:"Requesting signer from Farcaster",subtitle:e?e.detail:"This should only take a moment",icon:h,iconVariant:"loading",iconLoadingStatus:{success:p,fail:!!e},onBack:r,onClose:l,watermark:!0,children:a&&x.isMobile&&t.jsx(A,{children:t.jsx(B,{text:"Take me to Farcaster",url:a,color:S})})}:{title:"Add a signer to Farcaster",subtitle:`This will allow ${u} to add casts, likes, follows, and more on your behalf.`,onBack:r,onClose:l,watermark:!0,children:t.jsxs(P,{children:[t.jsx(R,{children:a?t.jsx(E,{url:a,size:275,squareLogoElement:h}):t.jsx(V,{children:t.jsx(O,{})})}),t.jsxs(L,{children:[t.jsx(N,{children:"Or copy this link and paste it into a phone browser to open the Farcaster app."}),a&&t.jsx(q,{text:a,itemName:"link",color:S})]})]})});let A=o.div`
  margin-top: 24px;
`,P=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,R=o.div`
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,L=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,N=o.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,V=o.div`
  position: relative;
  width: 82px;
  height: 82px;
`;const $={component:()=>{let{lastScreen:u,navigateBack:m,data:p}=F(),e=T(),{requestFarcasterSignerStatus:a,closePrivyModal:r}=I(),[l,s]=c.useState(void 0),[k,v]=c.useState(!1),[b,w]=c.useState(!1),g=c.useRef([]),n=p?.farcasterSigner;c.useEffect((()=>{let j=Date.now(),i=setInterval((async()=>{if(!n?.public_key)return clearInterval(i),void s({retryable:!0,message:"Connect failed",detail:"Something went wrong. Please try again."});n.status==="approved"&&(clearInterval(i),v(!1),w(!0),g.current.push(setTimeout((()=>r({shouldCallAuthOnSuccess:!1,isSuccess:!0})),y)));let d=await a(n?.public_key),C=Date.now()-j;d.status==="approved"?(clearInterval(i),v(!1),w(!0),g.current.push(setTimeout((()=>r({shouldCallAuthOnSuccess:!1,isSuccess:!0})),y))):C>3e5?(clearInterval(i),s({retryable:!0,message:"Connect failed",detail:"The request timed out. Try again."})):d.status==="revoked"&&(clearInterval(i),s({retryable:!0,message:"Request rejected",detail:"The request was rejected. Please try again."}))}),2e3);return()=>{clearInterval(i),g.current.forEach((d=>clearTimeout(d)))}}),[]);let f=n?.status==="pending_approval"?n.signer_approval_url:void 0;return t.jsx(M,{appName:e.name,loading:k,success:b,errorMessage:l,connectUri:f,onBack:u?m:void 0,onClose:r,onOpenFarcaster:()=>{f&&(window.location.href=f)}})}};export{$ as FarcasterSignerStatusScreen,M as FarcasterSignerStatusView,$ as default};
//# sourceMappingURL=FarcasterSignerStatusScreen-BDNaxu2r-C5k87zHf.js.map
