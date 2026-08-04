import{i as ee,aQ as E,db as re,aP as te,j as r,dc as A,aX as ne,aS as p,dd as se,de as oe,bq as ie}from"./index-CwvhYMZj.js";import{b as m}from"./react-vendor-Cp2JmYUv.js";import{i as T,d as W,t as q,l as X,y as Q,c as F,n as ae,a as Y,s as le,Q as H,m as ce,g as S,p as k,f as j,v as $,u as N,h as U,b as D}from"./styles-DdJQcN_0-D7Kr8tzM.js";import{n as w}from"./ScreenLayout-CEKu-oQC-HZV7AL8r.js";import{n as K}from"./styles-DVyDvTdj-SsnFStKO.js";import{m as de}from"./ModalHeader-D_3-4MRo-Dlc1xzv1.js";import{C as ue}from"./QrCode-GMgqSEw1-YzIYpK6K.js";import{u as me,c as pe,s as fe,d as he,b as ge,e as ye,f as be,g as xe,h as Ce,F as Ee}from"./floating-ui.react-D14xVesx.js";import{m as ve}from"./CopyableText-ChtfBWx4-BNsv1Owt.js";import"./web3-vendor-CGwxEKZx.js";import{T as O}from"./triangle-alert-hZhdGoKr.js";import{c as G}from"./createLucideIcon-Bo__PW5l.js";import{C as R}from"./check-Deqt4hNf.js";import{H as we}from"./hourglass-CeFv-HfW.js";import{C as _e}from"./chevron-down-zTj6iVh5.js";import{I as Te}from"./info-CXz0cBJ1.js";import{b as Se,o as ke,f as je,s as Ne}from"./floating-ui.react-dom-Dud6YGIV.js";import"./Screen-C2sjv2Hr-CNkHaVdl.js";import"./index-Dq_xe9dz-CKGV5uof.js";import"./dijkstra-COg3n3zL.js";import"./copy-DV1q-aaV.js";const v=ee((()=>null)),_=e=>{v.getState()!==null&&v.setState(e)};async function Ue(e,t){let n=await e.fetchPrivyRoute(re,{}),s={config:{status:"ready",data:{currencies:n.currencies,chains:n.chains}}};t?.aborted||_(s)}function g(){let e=v(),{closePrivyModal:t,privy:n}=E(),s=e?.params??null,i=e?.config??{status:"loading"},l=m.useCallback((o=>{_({modalState:o})}),[]),c=m.useCallback((async()=>{let o=e?.controller;if(s&&o&&!o.signal.aborted){_({config:{status:"loading"}});try{await Ue(n,o.signal)}catch(a){if(o.signal.aborted)return;throw _({config:{status:"error",error:a instanceof Error?a:Error("Failed to load deposit config")}}),a}}}),[s,n,e?.controller]),d=m.useCallback((()=>{if(!e)return;let{modalState:o}=e;o.step==="complete"?e.onComplete():o.step==="failed"?e.onError(Error("DEPOSIT_FAILED")):o.step==="error"?e.onError(Error(o.code)):o.step==="refunded"?e.onError(Error("DEPOSIT_REFUNDED")):e.onError(Error("USER_EXITED")),t({shouldCallAuthOnSuccess:!1})}),[e,t]);return{modalState:e?.modalState??{step:"intro"},setModalState:l,config:i,retryConfig:c,params:s,close:d,onBack:e?.onBack}}function x(e){let{modalState:t,config:n,params:s,...i}=g();if((function(l,c){if(l.step!==c)throw Error("UNEXPECTED_STATE")})(t,e),!s||n.status!=="ready")throw Error("UNEXPECTED_STATE");return{state:t,configData:n.data,params:s,...i}}const De=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Ie=G("chevron-up",De);const Ae=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Oe=G("undo-2",Ae);class Re extends m.Component{static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t,n){this.props.onError(t)}componentDidUpdate(t){t.resetKey!==this.props.resetKey&&this.state.hasError&&this.setState({hasError:!1})}render(){return this.state.hasError?null:this.props.children}constructor(...t){super(...t),this.state={hasError:!1}}}function Fe(e,t,n){let s=Number(e);return!Number.isFinite(s)||s===0?`1 ${t} ≈ ${e} ${n}`:s>=.01?`1 ${t} ≈ ${P(s)} ${n}`:`${P(1/s)} ${t} ≈ 1 ${n}`}function P(e){return e>=1e3?new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Math.round(e)):e>=100?new Intl.NumberFormat("en-US",{maximumFractionDigits:1}).format(e):e>=1?new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(e):new Intl.NumberFormat("en-US",{maximumFractionDigits:4}).format(e)}function L(e,t){let n=Number(e);if(!Number.isFinite(n)||n===0)return e;let s=t!=null?n/10**t:n;return s>=1e3?new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(s):s>=1?new Intl.NumberFormat("en-US",{maximumFractionDigits:4}).format(s):s>=1e-4?new Intl.NumberFormat("en-US",{maximumFractionDigits:6}).format(s):new Intl.NumberFormat("en-US",{maximumSignificantDigits:4}).format(s)}function I({address:e,caip2:t,config:n}){for(let s of n.currencies){let i=s.chains.find((l=>l.caip2===t&&l.address.toLowerCase()===e.toLowerCase()));if(i)return{symbol:s.symbol.toUpperCase(),decimals:i.decimals}}return{symbol:e,decimals:void 0}}function M(e,t){return t[e]?.displayName??e}function B(e,t){return e.chains.filter((n=>n.can_be_relay_deposit_source===!0)).map((n=>{let s=t.chains[n.caip2];return s?{caip2:n.caip2,displayName:s.displayName,iconUrl:s.iconUrl,vmType:s.vmType,currencyAddress:n.address,currencyDecimals:n.decimals}:null})).filter((n=>n!==null))}function V(e,t){if(!e.chains[t.destinationChain])return`Unsupported destination chain: "${t.destinationChain}". Check that the chain is in CAIP-2 format (e.g. "eip155:8453") and is supported for deposit addresses.`;let n=t.destinationCurrency.toLowerCase();return e.currencies.some((s=>s.chains.some((i=>i.caip2===t.destinationChain&&i.address.toLowerCase()===n))))?null:`Unsupported destination currency "${t.destinationCurrency}" on chain "${t.destinationChain}". Check that this token address is supported on the specified chain.`}let $e=new Set(["ROUTE_UNAVAILABLE","UNEXPECTED_STATE","TIMEOUT_WAITING_FOR_NEXT_ORDER","TIMEOUT_ORDER_COMPLETION","DEPOSIT_FAILED","DEPOSIT_REFUNDED","USER_EXITED","AMOUNT_TOO_LOW","INSUFFICIENT_LIQUIDITY","UNSUPPORTED_CHAIN","UNSUPPORTED_CURRENCY","UNSUPPORTED_ROUTE","NO_SWAP_ROUTES_FOUND","NO_INTERNAL_SWAP_ROUTES_FOUND","NO_QUOTES","SANCTIONED_WALLET_ADDRESS","REFUND_WALLET_CREATION_FAILED","DEPOSIT_ADDRESSES_NOT_ENABLED","NOT_AUTHENTICATED"]);function Pe(e){return $e.has(e)}function z(e){return Pe(e)?e:"UNKNOWN_ERROR"}function J(){let{params:e,setModalState:t}=g(),{privy:n}=E(),s=(function(){let{privy:c,refreshSessionAndUser:d}=E();return m.useCallback(((o,a)=>a?Promise.resolve({ok:!0,address:a}):A.resolveRefundAddress({privy:c,caip2:o,onWalletCreated:d})),[c,d])})(),[i,l]=m.useState(!1);return{fetchQuote:m.useCallback((async(c,d,o)=>{if(e){l(!0);try{let a=await s(c.caip2,e.refundAddress);if(!a.ok)return void t({step:"error",code:z(a.error)});let u=await n.fetchPrivyRoute(se,{body:{source_chain:c.caip2,source_currency:c.currencyAddress,destination_chain:e.destinationChain,destination_currency:e.destinationCurrency,destination_address:e.destinationAddress,refund_address:a.address,...e.slippageBps!=null?{slippage_bps:e.slippageBps}:{}}});t({step:"address",selectedCurrency:d,selectedChain:c,availableChains:o,quote:u})}catch(a){let u=a instanceof Error?a:Error(String(a)),f="status"in u&&typeof u.status=="number"?u.status:void 0;t({step:"error",code:u instanceof oe&&u.code==="feature_not_enabled"?"DEPOSIT_ADDRESSES_NOT_ENABLED":f&&f>=500?"UNKNOWN_ERROR":z(u.message),message:u.message})}finally{l(!1)}}}),[e,n,s,t]),isFetching:i}}function Z(e,t){switch(e.status){case"completed":return t({step:"complete",order:e});case"refunded":return t({step:"refunded",order:e});case"failed":return t({step:"failed",order:e});case"executing":return t({step:"processing",order:e});default:return}}const Le=({sourceAmount:e,sourceSymbol:t,sourceChainName:n,sourceDecimals:s,destinationAmount:i,destSymbol:l,destChainName:c,destDecimals:d,onClose:o})=>r.jsx(T,{icon:R,iconVariant:"success",title:"Transfer complete",subtitle:i?`Received ${L(e,s)} ${t} on ${n} and converted it to ${L(i,d)} ${l} on ${c}. Funds are available to use.`:`Your ${t} has been received and is now available in your wallet.`,showClose:!0,onClose:o,primaryCta:{label:"Done",onClick:o},watermark:!1});function Me(){let{state:e,configData:t,close:n}=x("complete"),{order:s}=e,{sourceSymbol:i,sourceChainName:l,sourceDecimals:c,destSymbol:d,destChainName:o,destDecimals:a}=m.useMemo((()=>{let u=I({address:s.source_currency,caip2:s.source_chain,config:t}),f=I({address:s.destination_currency,caip2:s.destination_chain,config:t});return{sourceSymbol:u.symbol,sourceChainName:M(s.source_chain,t.chains),sourceDecimals:u.decimals,destSymbol:f.symbol,destChainName:M(s.destination_chain,t.chains),destDecimals:f.decimals}}),[s,t]);return r.jsx(Le,{sourceAmount:s.source_amount,sourceSymbol:i,sourceChainName:l,sourceDecimals:c,destinationAmount:s.destination_amount,destSymbol:d,destChainName:o,destDecimals:a,onClose:n})}function Be(){let{modalState:e,setModalState:t,config:n,retryConfig:s,close:i}=g();if(e.step!=="error")throw Error("UNEXPECTED_STATE");let{code:l}=e,{title:c,subtitle:d,detail:o,iconVariant:a}=(y=>{switch(y){case"AMOUNT_TOO_LOW":return{title:"Amount too low",subtitle:"The deposit amount is below the minimum for this route.",detail:"Try a larger amount or a different token.",iconVariant:"warning"};case"INSUFFICIENT_LIQUIDITY":return{title:"Insufficient liquidity",subtitle:"There isn't enough liquidity for this route right now.",detail:"Try a smaller amount or a different network.",iconVariant:"warning"};case"UNSUPPORTED_CHAIN":return{title:"Unsupported chain",subtitle:"Deposits from this chain type aren't supported yet. Try a different network.",iconVariant:"warning"};case"UNSUPPORTED_CURRENCY":case"UNSUPPORTED_ROUTE":case"ROUTE_UNAVAILABLE":case"NO_SWAP_ROUTES_FOUND":case"NO_INTERNAL_SWAP_ROUTES_FOUND":case"NO_QUOTES":return{title:"Route not available",subtitle:"This deposit route isn't supported right now. Try a different token or network.",iconVariant:"warning"};case"SANCTIONED_WALLET_ADDRESS":return{title:"Address restricted",subtitle:"This address cannot be used for deposits due to compliance restrictions.",iconVariant:"warning"};case"REFUND_WALLET_CREATION_FAILED":return{title:"Unable to set up refund address",subtitle:"We couldn't create a wallet to receive refunds on this chain. Please try again or select a different network.",iconVariant:"warning"};case"DEPOSIT_ADDRESSES_NOT_ENABLED":return{title:"Not enabled",subtitle:"Deposit addresses are not enabled for this app.",iconVariant:"warning"};case"NOT_AUTHENTICATED":return{title:"Not signed in",subtitle:"Please sign in to continue with your deposit.",iconVariant:"warning"};case"TIMEOUT_WAITING_FOR_NEXT_ORDER":case"TIMEOUT_ORDER_COMPLETION":return{title:"Taking longer than expected",subtitle:"Your funds are safe. The deposit is still being processed — check back later.",iconVariant:"subtle"};default:return{title:"Something went wrong",subtitle:"We couldn't complete your request. Please try again.",iconVariant:"subtle"}}})(l),[u,f]=m.useState(!1);return r.jsx(T,{icon:O,iconVariant:a,title:c,subtitle:o?`${d} ${o}`:d,showClose:!0,onClose:i,primaryCta:{label:"Try again",onClick:async()=>{if(n.status!=="ready"){f(!0);try{await s(),t({step:"token"})}catch{f(!1)}}else t({step:"token"})},loading:u},watermark:!0})}function Ve(){let{state:e,close:t}=x("failed"),{order:n}=e;return r.jsx(w,{icon:O,iconVariant:"error",title:"Transfer failed",subtitle:"Something went wrong processing your transfer.",showClose:!0,onClose:t,primaryCta:{label:"Done",onClick:t},secondaryCta:{label:"Learn about manual recovery",onClick:()=>window.open("https://docs.privy.io","_blank","noopener,noreferrer")},watermark:!0,children:r.jsxs(ze,{href:n.tracking_url,target:"_blank",rel:"noopener noreferrer",children:["Reference: ",n.provider_request_id]})})}let ze=p.a`
  text-align: center;
  font-size: 0.75rem;
  opacity: 0.7;
  text-decoration: underline;
  cursor: pointer;
  color: var(--privy-color-foreground-3);
`;function We(){let{close:e,setModalState:t,config:n,params:s,onBack:i}=g(),[l,c]=m.useState(!1);return m.useEffect((()=>{if(l&&s){if(n.status==="ready"){let d=V(n.data,s);t(d?{step:"error",code:"ROUTE_UNAVAILABLE",message:d}:{step:"token"})}n.status==="error"&&t({step:"error",code:"ROUTE_UNAVAILABLE"})}}),[l,n,s,t]),r.jsx(T,{icon:H,iconVariant:"subtle",title:"Add funds",subtitle:"Top up your account by sending crypto from any wallet. Conversion and routing handled by Relay.",showClose:!0,onClose:e,showBack:!!i,onBack:i,primaryCta:{label:"Continue",onClick:()=>{if(n.status==="ready"&&s){let d=V(n.data,s);t(d?{step:"error",code:"ROUTE_UNAVAILABLE",message:d}:{step:"token"})}else n.status==="error"?t({step:"error",code:"ROUTE_UNAVAILABLE"}):c(!0)},loading:l&&n.status==="loading",loadingText:null},watermark:!0})}function qe(){let{state:e,setModalState:t,close:n}=x("network"),[s,i]=m.useState(-1),{availableChains:l}=e,{confirm:c,isFetching:d}=(function(){let o=v(),{params:a}=g(),{fetchQuote:u,isFetching:f}=J();return{confirm:m.useCallback((async y=>{if(!y||!a)return;let h=o?.modalState;h&&h.step==="network"&&await u(y,h.selectedCurrency,h.availableChains)}),[a,o,u]),isFetching:f}})();return r.jsx(w,{title:"Select network",eyebrow:r.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.375rem"},children:[r.jsx("img",{src:e.selectedCurrency.logoURI,alt:"",style:{width:"1rem",height:"1rem",borderRadius:"50%"}}),"Send ",e.selectedCurrency.symbol]}),showBack:!0,onBack:()=>t({step:"token"}),showClose:!0,onClose:n,watermark:!0,children:r.jsx(K,{style:{marginTop:"1rem",height:"22rem"},$colorScheme:"light",children:l.map(((o,a)=>r.jsxs(W,{$selected:s===a,disabled:d,onClick:()=>{i(a),c(o)},children:[r.jsx(q,{src:o.iconUrl,alt:o.displayName}),r.jsx(X,{children:o.displayName}),d&&a===s&&r.jsx(Q,{})]},o.caip2)))})})}const Xe=({trackingUrl:e,onClose:t})=>r.jsx(w,{icon:we,iconVariant:"subtle",title:"Transfer in progress",subtitle:"Your deposit was received and the transfer is now processing.",showClose:!0,onClose:t,secondaryCta:{label:"View on block explorer ↗",onClick:()=>window.open(e,"_blank","noopener,noreferrer")},watermark:!1,children:r.jsxs(ce,{children:[r.jsxs(S,{children:[r.jsx(k,{$status:"done",children:r.jsx(R,{size:14,color:"var(--privy-color-icon-success)",strokeWidth:2})}),r.jsx(j,{children:"Deposit received"})]}),r.jsx($,{}),r.jsxs(S,{children:[r.jsx(k,{$status:"active",children:r.jsx(Qe,{})}),r.jsx(j,{children:"Bridging"})]}),r.jsx($,{}),r.jsxs(S,{children:[r.jsx(k,{$status:"pending"}),r.jsx(j,{children:"Funds arrived"})]})]})});let Qe=p.span`
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid var(--privy-color-foreground-3);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;function Ye(){let{state:e,close:t}=x("processing");return(function({orderId:n,enabled:s}){let{privy:i}=E(),{setModalState:l}=g();m.useEffect((()=>{let c=new AbortController;return A.waitForCompletion({privy:i,orderId:n,signal:c.signal}).then((d=>{c.signal.aborted||(d.status==="success"?Z(d.order,l):d.status==="timeout"&&l({step:"error",code:"TIMEOUT_ORDER_COMPLETION"}))})),()=>{c.abort()}}),[s,n,i,l])})({orderId:e.order.id,enabled:!0}),r.jsx(Xe,{trackingUrl:e.order.tracking_url,onClose:t})}function He(){let{state:e,close:t}=x("refunded"),{order:n}=e;return r.jsx(T,{icon:Oe,iconVariant:"subtle",title:"Transfer refunded",subtitle:"Your transfer was received, but the swap couldn't be completed. A refund has been started automatically.",showClose:!0,onClose:t,primaryCta:{label:"Done",onClick:t},secondaryCta:{label:"View transaction details",onClick:()=>window.open(n.tracking_url,"_blank","noopener,noreferrer")},watermark:!0})}function Ke(){let{close:e,setModalState:t,config:n}=g(),{confirm:s,currencies:i,isFetching:l}=(function(){let{config:o,setModalState:a}=g(),{fetchQuote:u,isFetching:f}=J(),y=o.status==="ready"?o.data.currencies.filter((h=>B(h,o.data).length>0)):[];return{confirm:m.useCallback((async h=>{if(o.status!=="ready"||!h)return;let b=B(h,o.data);if(b.length!==1)a({step:"network",selectedCurrency:h,availableChains:b});else{let C=b[0];await u(C,h,b)}}),[o,u,a]),currencies:y,isFetching:f}})(),[c,d]=m.useState(-1);return r.jsx(w,{title:"Select token",showBack:!0,onBack:()=>t({step:"intro"}),showClose:!0,onClose:e,watermark:!0,children:n.status==="error"?r.jsx(F,{children:r.jsx(ae,{children:"Failed to load tokens"})}):n.status==="loading"?r.jsx(F,{children:r.jsx(ne,{})}):r.jsx(K,{style:{marginTop:"1rem",height:"22rem"},$colorScheme:"light",children:i.map(((o,a)=>r.jsxs(W,{$selected:c===a,disabled:l,onClick:()=>{d(a),s(o)},children:[r.jsx(Y,{src:o.logoURI,alt:o.symbol}),r.jsx(X,{children:o.name}),l&&a===c?r.jsx(Q,{}):r.jsx(le,{children:o.symbol})]},o.symbol)))})})}function Ge({address:e,onClick:t}){let[n,s]=m.useState(!1);return r.jsx(r.Fragment,{children:n?r.jsx(Je,{onClick:()=>s(!1),style:{marginTop:"1.5rem"},children:r.jsx(ue,{url:e,size:312,hideLogo:!0})}):r.jsxs(Ze,{title:"Click to copy address",onClick:t,style:{marginTop:"1.5rem"},children:[r.jsxs(er,{children:[r.jsx(rr,{children:"Deposit address"}),r.jsx(tr,{children:e})]}),r.jsx(nr,{children:r.jsx(sr,{type:"button",onClick:i=>{i.stopPropagation(),s(!0)},children:r.jsx(H,{size:16,color:"var(--privy-color-icon-muted)"})})})]})})}let Je=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`,Ze=p.div`
  display: flex;
  border-radius: var(--privy-border-radius-md);
  background: var(--privy-color-background-clicked, #f1f2f9);
  padding: 1rem;
  cursor: pointer;
  gap: 0.5rem;
`,er=p.div`
  flex: 1;
  min-width: 0;
  text-align: left;
`,rr=p.div`
  font-size: 0.75rem;
  color: var(--privy-color-icon-muted);
  line-height: 1rem;
  margin-bottom: 0.25rem;
`,tr=p.div`
  word-break: break-all;
  font-size: 0.875rem;
  font-family: ui-monospace, monospace;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--privy-color-foreground);
`,nr=p.div`
  width: 1.5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding-top: 0.25rem;
`,sr=p.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border-radius: var(--privy-border-radius-xs);

    &:hover {
      background: var(--privy-color-background);
    }

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`;function or({quote:e,selectedCurrency:t,selectedChain:n,destinationSymbol:s}){let[i,l]=m.useState(!1),c=t.symbol.toUpperCase(),d=n.displayName,o=m.useRef(null);return r.jsxs(ir,{children:[r.jsxs(ar,{onClick:m.useCallback((()=>{let a=document.getElementById("privy-modal-content");a&&(o.current&&clearTimeout(o.current),a.style.transition="none",o.current=setTimeout((()=>{a.style.transition="",o.current=null}),160)),l((u=>!u))}),[]),children:[r.jsxs(lr,{children:[t.logoURI&&r.jsx(Y,{src:t.logoURI,alt:c,style:{width:"2rem",height:"2rem"}}),n.iconUrl&&r.jsx(cr,{src:n.iconUrl,alt:d})]}),r.jsxs(dr,{children:[r.jsx(ur,{children:"You send"}),r.jsxs(mr,{children:[c," on ",d]})]}),r.jsx(pr,{children:r.jsx(i?Ie:_e,{size:16})})]}),r.jsx(yr,{$expanded:i,children:r.jsx(br,{children:r.jsxs(fr,{children:[e.indicative_rate&&r.jsxs(N,{children:[r.jsx(U,{children:"Conversion rate"}),r.jsxs(D,{style:{display:"flex",alignItems:"center",gap:"0.25rem"},children:[Fe(e.indicative_rate,c,s.toUpperCase()),r.jsx(xr,{content:"Estimated rate based on current market conditions. Final execution price may vary depending on transfer size and routing."})]})]}),r.jsxs(N,{children:[r.jsx(U,{children:"Max slippage"}),r.jsxs(D,{children:[(e.slippage_bps/100).toFixed(1),"%"]})]}),r.jsxs(N,{children:[r.jsx(U,{children:"Refund address"}),r.jsx(D,{children:r.jsx(ve,{value:e.refund_address,iconOnly:!0,iconSize:11,children:ie(e.refund_address,4,4)})})]})]})})}),r.jsxs(hr,{children:[r.jsx(O,{size:16,color:"var(--privy-color-icon-muted)",style:{flexShrink:0}}),r.jsxs(gr,{children:["Only send ",r.jsx("strong",{children:c})," on ",r.jsx("strong",{children:d}),". Other assets may be lost."]})]})]})}let ir=p.div`
  border-radius: var(--privy-border-radius-md);
  border: 1px solid var(--privy-color-foreground-4);
  overflow: hidden;
`,ar=p.button`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--privy-color-foreground);
    outline: none;
    box-shadow: none;

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`,lr=p.span`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`,cr=p(q)`
  && {
    position: absolute;
    top: -0.125rem;
    right: -0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    box-sizing: content-box;
    border: 1.5px solid #fff;
    background-color: #fff;
  }
`,dr=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,ur=p.span`
  font-size: 0.75rem;
  color: var(--privy-color-foreground-3);
  line-height: 1rem;
`,mr=p.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,pr=p.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-clicked, #f1f2f9);
  color: var(--privy-color-foreground-3);
`,fr=p.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0.75rem;

  & > * {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--privy-color-foreground-4);
  }

  & > *:last-child {
    border-bottom: none;
  }
`,hr=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0.75rem 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: var(--privy-border-radius-sm);
  background: #f8f9fc;
`,gr=p.span`
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: var(--privy-color-icon-muted);
  text-align: left;
`,yr=p.div`
  display: grid;
  grid-template-rows: ${({$expanded:e})=>e?"1fr":"0fr"};
  transition: grid-template-rows 150ms ease-out;
`,br=p.div`
  overflow: hidden;
`;function xr({content:e}){let[t,n]=m.useState(!1),{refs:s,floatingStyles:i,context:l}=me({open:t,onOpenChange:n,placement:"top",whileElementsMounted:Se,middleware:[ke(6),je(),Ne({padding:8})]}),c=pe(l,{move:!1,handleClose:fe()}),d=he(l),{getReferenceProps:o,getFloatingProps:a}=ge([c,d,ye(l),be(l),xe(l,{role:"tooltip"})]),{isMounted:u,styles:f}=Ce(l,{duration:150});return r.jsxs(r.Fragment,{children:[r.jsx("button",{ref:s.setReference,type:"button","aria-label":"More information about conversion rate",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",padding:0,border:"none",background:"none",color:"var(--privy-color-icon-muted)",cursor:"pointer"},...o(),children:r.jsx(Te,{size:14})}),u&&r.jsx(Ee,{root:document.getElementById("privy-modal-content")??void 0,children:r.jsx(Cr,{ref:s.setFloating,style:{...i,...f},...a(),children:e})})]})}let Cr=p.div`
  max-width: 13rem;
  padding: 0.5rem 0.625rem;
  border-radius: var(--privy-border-radius-sm, 0.375rem);
  background: var(--privy-color-foreground);
  color: var(--privy-color-background);
  font-size: 0.6875rem;
  line-height: 1rem;
  font-weight: 400;
  text-align: left;
  z-index: 10;
`;const Er=({quote:e,selectedCurrency:t,selectedChain:n,destinationSymbol:s,onBack:i,onClose:l})=>{let[c,d]=m.useState(!1),o=t?.symbol?.toUpperCase()??"funds",a=n?.displayName??"",u=async()=>{c||(await navigator.clipboard.writeText(e.deposit_address),d(!0),setTimeout((()=>d(!1)),2e3))};return r.jsxs(w,{title:`Send ${o}${a?` on ${a}`:""}`,subtitle:"Send funds to the address below. Conversion and routing handled by Relay.",showBack:!0,onBack:i,showClose:!0,onClose:l,watermark:!1,children:[r.jsx(or,{quote:e,selectedCurrency:t,selectedChain:n,destinationSymbol:s}),r.jsx(Ge,{address:e.deposit_address,onClick:u}),r.jsx(de,{style:{marginTop:"1rem",marginBottom:"0.5rem",...c?{backgroundColor:"var(--privy-color-icon-success)",borderColor:"var(--privy-color-icon-success)"}:{}},onClick:u,children:c?r.jsxs(r.Fragment,{children:["Copied ",r.jsx(R,{size:16,style:{marginLeft:"0.25rem"}})]}):"Copy address"}),r.jsx(vr,{children:"Routing and bridging are handled by Relay. Privy does not control execution timing, liquidity, or transaction outcomes."})]})};let vr=p.p`
  && {
    margin: 0.5rem 0 0;
    font-size: 0.6875rem;
    line-height: 1.125rem;
    color: var(--privy-color-icon-muted);
    text-align: center;
  }
`;function wr(){let{state:e,configData:t,setModalState:n,close:s,params:i}=x("address"),{quote:l,selectedCurrency:c,selectedChain:d,availableChains:o}=e;return(function({depositAddressId:a,enabled:u,quoteCreatedAt:f}){let{privy:y}=E(),{setModalState:h}=g();m.useEffect((()=>{if(!a)return;let b=new AbortController;return A.waitForDeposit({privy:y,depositAddressId:a,quoteCreatedAt:f,signal:b.signal}).then((C=>{b.signal.aborted||(C.status==="success"?Z(C.order,h):C.status==="timeout"&&h({step:"error",code:"TIMEOUT_WAITING_FOR_NEXT_ORDER"}))})),()=>{b.abort()}}),[u,a,y,f,h])})({depositAddressId:l.id,enabled:!0,quoteCreatedAt:l.created_at}),r.jsx(Er,{quote:l,selectedCurrency:c,selectedChain:d,destinationSymbol:m.useMemo((()=>I({address:i.destinationCurrency,caip2:i.destinationChain,config:t}).symbol),[i,t]),onBack:()=>n({step:"network",selectedCurrency:c,availableChains:o}),onClose:s})}function _r(){let{modalState:e,setModalState:t}=g();return r.jsx(Re,{onError:n=>t({step:"error",code:"UNEXPECTED_STATE",message:n.message}),resetKey:e.step,children:r.jsx(Tr,{})})}function Tr(){let{modalState:e}=g();switch(e.step){case"intro":return r.jsx(We,{});case"token":return r.jsx(Ke,{});case"network":return r.jsx(qe,{});case"address":return r.jsx(wr,{});case"processing":return r.jsx(Ye,{});case"complete":return r.jsx(Me,{});case"refunded":return r.jsx(He,{});case"failed":return r.jsx(Ve,{});case"error":return r.jsx(Be,{});default:return null}}var Qr={component:()=>{let{onUserCloseViaDialogOrKeybindRef:e}=te(),t=v(),{close:n,config:s}=g();return m.useEffect((()=>{e.current=n}),[e,n]),m.useEffect((()=>{if(s.status==="ready"){for(let i of s.data.currencies)new Image().src=i.logoURI;for(let i of Object.values(s.data.chains))new Image().src=i.iconUrl}}),[s]),t?r.jsx(_r,{}):null}};export{Qr as default};
//# sourceMappingURL=DepositAddressScreen-BfPfe4Io-DEK4MPId.js.map
