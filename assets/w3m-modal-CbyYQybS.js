import{N as h,y as Pe,R as u,S as f,b as re,c as I,E as _,z as ae,B as se,n as m,D as G,a as ce,F as Y,G as q,I as Ve,m as Ie,J as je,C as ue,K as Ee,L as Ne,P as We,M as $,Q as le,e as S,r as oe,i as T,d as c,j as Re,v as pe,h as fe,f as Ke,U as F,O as g,s as Oe,A as ie,T as Ge,V as Ye,X as Xe}from"./core-Uv9Br_k5.js";import{c as y,n as p,o as E,r as w,U as De}from"./index-DUiIFAH_.js";import"./web3-vendor-CGwxEKZx.js";import"./react-vendor-Cp2JmYUv.js";import"./index-CwvhYMZj.js";const D={getGasPriceInEther(e,t){const o=t*e;return Number(o)/1e18},getGasPriceInUSD(e,t,o){const i=D.getGasPriceInEther(t,o);return h.bigNumber(e).times(i).toNumber()},getPriceImpact({sourceTokenAmount:e,sourceTokenPriceInUSD:t,toTokenPriceInUSD:o,toTokenAmount:i}){const a=h.bigNumber(e).times(t),n=h.bigNumber(i).times(o);return a.minus(n).div(a).times(100).toNumber()},getMaxSlippage(e,t){const o=h.bigNumber(e).div(100);return h.multiply(t,o).toNumber()},getProviderFee(e,t=.0085){return h.bigNumber(e).times(t).toString()},isInsufficientNetworkTokenForGas(e,t){const o=t||"0";return h.bigNumber(e).eq(0)?!0:h.bigNumber(h.bigNumber(o)).gt(e)},isInsufficientSourceTokenForSwap(e,t,o){const i=o?.find(n=>n.address===t)?.quantity?.numeric;return h.bigNumber(i||"0").lt(e)}},xe=15e4,qe=6,k={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,switchingTokens:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:Ie.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},r=We({...k}),de={state:r,subscribe(e){return Ne(r,()=>e(r))},subscribeKey(e,t){return Ee(r,e,t)},getParams(){const e=m.state.activeChain,t=m.getAccountData(e)?.caipAddress??m.state.activeCaipAddress,o=ce.getPlainAddress(t),i=je(),a=ue.getConnectorId(m.state.activeChain);if(!o)throw new Error("No address found to swap the tokens from.");const n=!r.toToken?.address||!r.toToken?.decimals,s=!r.sourceToken?.address||!r.sourceToken?.decimals||!h.bigNumber(r.sourceTokenAmount).gt(0),l=!r.sourceTokenAmount;return{networkAddress:i,fromAddress:o,fromCaipAddress:t,sourceTokenAddress:r.sourceToken?.address,toTokenAddress:r.toToken?.address,toTokenAmount:r.toTokenAmount,toTokenDecimals:r.toToken?.decimals,sourceTokenAmount:r.sourceTokenAmount,sourceTokenDecimals:r.sourceToken?.decimals,invalidToToken:n,invalidSourceToken:s,invalidSourceTokenAmount:l,availableToSwap:t&&!n&&!s&&!l,isAuthConnector:a===I.CONNECTOR_ID.AUTH}},async setSourceToken(e){if(!e){r.sourceToken=e,r.sourceTokenAmount="",r.sourceTokenPriceInUSD=0;return}r.sourceToken=e,await d.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){r.sourceTokenAmount=e},async setToToken(e){if(!e){r.toToken=e,r.toTokenAmount="",r.toTokenPriceInUSD=0;return}r.toToken=e,await d.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){r.toTokenAmount=e?h.toFixed(e,qe):""},async setTokenPrice(e,t){let o=r.tokensPriceMap[e]||0;o||(r.loadingPrices=!0,o=await d.getAddressPrice(e)),t==="sourceToken"?r.sourceTokenPriceInUSD=o:t==="toToken"&&(r.toTokenPriceInUSD=o),r.loadingPrices&&(r.loadingPrices=!1),d.getParams().availableToSwap&&!r.switchingTokens&&d.swapTokens()},async switchTokens(){if(!(r.initializing||!r.initialized||r.switchingTokens)){r.switchingTokens=!0;try{const e=r.toToken?{...r.toToken}:void 0,t=r.sourceToken?{...r.sourceToken}:void 0,o=e&&r.toTokenAmount===""?"1":r.toTokenAmount;d.setSourceTokenAmount(o),d.setToTokenAmount(""),await d.setSourceToken(e),await d.setToToken(t),r.switchingTokens=!1,d.swapTokens()}catch(e){throw r.switchingTokens=!1,e}}},resetState(){r.myTokensWithBalance=k.myTokensWithBalance,r.tokensPriceMap=k.tokensPriceMap,r.initialized=k.initialized,r.initializing=k.initializing,r.switchingTokens=k.switchingTokens,r.sourceToken=k.sourceToken,r.sourceTokenAmount=k.sourceTokenAmount,r.sourceTokenPriceInUSD=k.sourceTokenPriceInUSD,r.toToken=k.toToken,r.toTokenAmount=k.toTokenAmount,r.toTokenPriceInUSD=k.toTokenPriceInUSD,r.networkPrice=k.networkPrice,r.networkTokenSymbol=k.networkTokenSymbol,r.networkBalanceInUSD=k.networkBalanceInUSD,r.inputError=k.inputError},resetValues(){const{networkAddress:e}=d.getParams(),t=r.tokens?.find(o=>o.address===e);d.setSourceToken(t),d.setToToken(void 0)},getApprovalLoadingState(){return r.loadingApprovalTransaction},clearError(){r.transactionError=void 0},async initializeState(){if(!r.initializing){if(r.initializing=!0,!r.initialized)try{await d.fetchTokens(),r.initialized=!0}catch{r.initialized=!1,f.showError("Failed to initialize swap"),u.goBack()}r.initializing=!1}},async fetchTokens(){const{networkAddress:e}=d.getParams();await d.getNetworkTokenPrice(),await d.getMyTokensWithBalance();const t=r.myTokensWithBalance?.find(o=>o.address===e);t&&(r.networkTokenSymbol=t.symbol,d.setSourceToken(t),d.setSourceTokenAmount("0"))},async getTokenList(){const e=m.state.activeCaipNetwork?.caipNetworkId;if(!(r.caipNetworkId===e&&r.tokens))try{r.tokensLoading=!0;const t=await Y.getTokenList(e);r.tokens=t,r.caipNetworkId=e,r.popularTokens=t.sort((o,i)=>o.symbol<i.symbol?-1:o.symbol>i.symbol?1:0),r.suggestedTokens=t.filter(o=>!!Ie.SWAP_SUGGESTED_TOKENS.includes(o.symbol))}catch{r.tokens=[],r.popularTokens=[],r.suggestedTokens=[]}finally{r.tokensLoading=!1}},async getAddressPrice(e){const t=r.tokensPriceMap[e];if(t)return t;const i=(await G.fetchTokenPrice({addresses:[e]}))?.fungibles||[],n=[...r.tokens||[],...r.myTokensWithBalance||[]]?.find(v=>v.address===e)?.symbol,s=i.find(v=>v.symbol.toLowerCase()===n?.toLowerCase())?.price||0,l=parseFloat(s.toString());return r.tokensPriceMap[e]=l,l},async getNetworkTokenPrice(){const{networkAddress:e}=d.getParams(),o=(await G.fetchTokenPrice({addresses:[e]}).catch(()=>(f.showError("Failed to fetch network token price"),{fungibles:[]}))).fungibles?.[0],i=o?.price.toString()||"0";r.tokensPriceMap[e]=parseFloat(i),r.networkTokenSymbol=o?.symbol||"",r.networkPrice=i},async getMyTokensWithBalance(e){const t=await Ve.getMyTokensWithBalance(e),o=Y.mapBalancesToSwapTokens(t);o&&(await d.getInitialGasPrice(),d.setBalances(o))},setBalances(e){const{networkAddress:t}=d.getParams(),o=m.state.activeCaipNetwork;if(!o)return;const i=e.find(a=>a.address===t);e.forEach(a=>{r.tokensPriceMap[a.address]=a.price||0}),r.myTokensWithBalance=e.filter(a=>a.address.startsWith(o.caipNetworkId)),r.networkBalanceInUSD=i?h.multiply(i.quantity.numeric,i.price).toString():"0"},async getInitialGasPrice(){const e=await Y.fetchGasPrice();if(!e)return{gasPrice:null,gasPriceInUSD:null};switch(m.state?.activeCaipNetwork?.chainNamespace){case I.CHAIN.SOLANA:return r.gasFee=e.standard??"0",r.gasPriceInUSD=h.multiply(e.standard,r.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(r.gasFee),gasPriceInUSD:Number(r.gasPriceInUSD)};case I.CHAIN.EVM:default:const t=e.standard??"0",o=BigInt(t),i=BigInt(xe),a=D.getGasPriceInUSD(r.networkPrice,i,o);return r.gasFee=t,r.gasPriceInUSD=a,{gasPrice:o,gasPriceInUSD:a}}},async swapTokens(){const e=m.getAccountData()?.address,t=r.sourceToken,o=r.toToken,i=h.bigNumber(r.sourceTokenAmount).gt(0);if(i||d.setToTokenAmount(""),!o||!t||r.loadingPrices||!i||!e)return;r.loadingQuote=!0;const a=h.bigNumber(r.sourceTokenAmount).times(10**t.decimals).round(0);try{const n=await G.fetchSwapQuote({userAddress:e,from:t.address,to:o.address,gasPrice:r.gasFee,amount:a.toString()});r.loadingQuote=!1;const s=n?.quotes?.[0]?.toAmount;if(!s){q.open({displayMessage:"Incorrect amount",debugMessage:"Please enter a valid amount"},"error");return}const l=h.bigNumber(s).div(10**o.decimals).toString();d.setToTokenAmount(l),d.hasInsufficientToken(r.sourceTokenAmount,t.address)?r.inputError="Insufficient balance":(r.inputError=void 0,d.setTransactionDetails())}catch(n){const s=await Y.handleSwapError(n);r.loadingQuote=!1,r.inputError=s||"Insufficient balance"}},async getTransaction(){const{fromCaipAddress:e,availableToSwap:t}=d.getParams(),o=r.sourceToken,i=r.toToken;if(!(!e||!t||!o||!i||r.loadingQuote))try{r.loadingBuildTransaction=!0;const a=await Y.fetchSwapAllowance({userAddress:e,tokenAddress:o.address,sourceTokenAmount:r.sourceTokenAmount,sourceTokenDecimals:o.decimals});let n;return a?n=await d.createSwapTransaction():n=await d.createAllowanceTransaction(),r.loadingBuildTransaction=!1,r.fetchError=!1,n}catch{u.goBack(),f.showError("Failed to check allowance"),r.loadingBuildTransaction=!1,r.approvalTransaction=void 0,r.swapTransaction=void 0,r.fetchError=!0;return}},async createAllowanceTransaction(){const{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:o}=d.getParams();if(!(!e||!o)){if(!t)throw new Error("createAllowanceTransaction - No source token address found.");try{const i=await G.generateApproveCalldata({from:t,to:o,userAddress:e}),a=ce.getPlainAddress(i.tx.from);if(!a)throw new Error("SwapController:createAllowanceTransaction - address is required");const n={data:i.tx.data,to:a,gasPrice:BigInt(i.tx.eip155.gasPrice),value:BigInt(i.tx.value),toAmount:r.toTokenAmount};return r.swapTransaction=void 0,r.approvalTransaction={data:n.data,to:n.to,gasPrice:n.gasPrice,value:n.value,toAmount:n.toAmount},{data:n.data,to:n.to,gasPrice:n.gasPrice,value:n.value,toAmount:n.toAmount}}catch{u.goBack(),f.showError("Failed to create approval transaction"),r.approvalTransaction=void 0,r.swapTransaction=void 0,r.fetchError=!0;return}}},async createSwapTransaction(){const{networkAddress:e,fromCaipAddress:t,sourceTokenAmount:o}=d.getParams(),i=r.sourceToken,a=r.toToken;if(!t||!o||!i||!a)return;const n=re.parseUnits(o,i.decimals)?.toString();try{const s=await G.generateSwapCalldata({userAddress:t,from:i.address,to:a.address,amount:n,disableEstimate:!0}),l=i.address===e,v=BigInt(s.tx.eip155.gas),H=BigInt(s.tx.eip155.gasPrice),M=ce.getPlainAddress(s.tx.to);if(!M)throw new Error("SwapController:createSwapTransaction - address is required");const V={data:s.tx.data,to:M,gas:v,gasPrice:H,value:BigInt(l?n??"0":"0"),toAmount:r.toTokenAmount};return r.gasPriceInUSD=D.getGasPriceInUSD(r.networkPrice,v,H),r.approvalTransaction=void 0,r.swapTransaction=V,V}catch{u.goBack(),f.showError("Failed to create transaction"),r.approvalTransaction=void 0,r.swapTransaction=void 0,r.fetchError=!0;return}},onEmbeddedWalletApprovalSuccess(){f.showLoading("Approve limit increase in your wallet"),u.replace("SwapPreview")},async sendTransactionForApproval(e){const{fromAddress:t,isAuthConnector:o}=d.getParams();r.loadingApprovalTransaction=!0,o?u.pushTransactionStack({onSuccess:d.onEmbeddedWalletApprovalSuccess}):f.showLoading("Approve limit increase in your wallet");try{await re.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:I.CHAIN.EVM}),await d.swapTokens(),await d.getTransaction(),r.approvalTransaction=void 0,r.loadingApprovalTransaction=!1}catch(a){const n=a;r.transactionError=n?.displayMessage,r.loadingApprovalTransaction=!1,f.showError(n?.displayMessage||"Transaction error"),_.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:n?.displayMessage||n?.message||"Unknown",network:m.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:d.state.sourceToken?.symbol||"",swapToToken:d.state.toToken?.symbol||"",swapFromAmount:d.state.sourceTokenAmount||"",swapToAmount:d.state.toTokenAmount||"",isSmartAccount:ae(I.CHAIN.EVM)===se.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){if(!e)return;const{fromAddress:t,toTokenAmount:o,isAuthConnector:i}=d.getParams();r.loadingTransaction=!0;const a=`Swapping ${r.sourceToken?.symbol} to ${h.formatNumberToLocalString(o,3)} ${r.toToken?.symbol}`,n=`Swapped ${r.sourceToken?.symbol} to ${h.formatNumberToLocalString(o,3)} ${r.toToken?.symbol}`;i?u.pushTransactionStack({onSuccess(){u.replace("Account"),f.showLoading(a),de.resetState()}}):f.showLoading("Confirm transaction in your wallet");try{const s=[r.sourceToken?.address,r.toToken?.address].join(","),l=await re.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:I.CHAIN.EVM});return r.loadingTransaction=!1,f.showSuccess(n),_.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:m.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:d.state.sourceToken?.symbol||"",swapToToken:d.state.toToken?.symbol||"",swapFromAmount:d.state.sourceTokenAmount||"",swapToAmount:d.state.toTokenAmount||"",isSmartAccount:ae(I.CHAIN.EVM)===se.ACCOUNT_TYPES.SMART_ACCOUNT}}),de.resetState(),i||u.replace("Account"),de.getMyTokensWithBalance(s),l}catch(s){const l=s;r.transactionError=l?.displayMessage,r.loadingTransaction=!1,f.showError(l?.displayMessage||"Transaction error"),_.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:l?.displayMessage||l?.message||"Unknown",network:m.state.activeCaipNetwork?.caipNetworkId||"",swapFromToken:d.state.sourceToken?.symbol||"",swapToToken:d.state.toToken?.symbol||"",swapFromAmount:d.state.sourceTokenAmount||"",swapToAmount:d.state.toTokenAmount||"",isSmartAccount:ae(I.CHAIN.EVM)===se.ACCOUNT_TYPES.SMART_ACCOUNT}});return}},hasInsufficientToken(e,t){return D.isInsufficientSourceTokenForSwap(e,t,r.myTokensWithBalance)},setTransactionDetails(){const{toTokenAddress:e,toTokenDecimals:t}=d.getParams();!e||!t||(r.gasPriceInUSD=D.getGasPriceInUSD(r.networkPrice,BigInt(r.gasFee),BigInt(xe)),r.priceImpact=D.getPriceImpact({sourceTokenAmount:r.sourceTokenAmount,sourceTokenPriceInUSD:r.sourceTokenPriceInUSD,toTokenPriceInUSD:r.toTokenPriceInUSD,toTokenAmount:r.toTokenAmount}),r.maxSlippage=D.getMaxSlippage(r.slippage,r.toTokenAmount),r.providerFee=D.getProviderFee(r.sourceTokenAmount))}},d=Pe(de),A=We({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),Qe={state:A,subscribe(e){return Ne(A,()=>e(A))},subscribeKey(e,t){return Ee(A,e,t)},showTooltip({message:e,triggerRect:t,variant:o}){A.open=!0,A.message=e,A.triggerRect=t,A.variant=o},hide(){A.open=!1,A.message="",A.triggerRect={width:0,height:0,top:0,left:0}}},X=Pe(Qe),_e={isUnsupportedChainView(){return u.state.view==="UnsupportedChain"||u.state.view==="SwitchNetwork"&&u.state.history.includes("UnsupportedChain")},async safeClose(){if(this.isUnsupportedChainView()){$.shake();return}if(await le.isSIWXCloseDisabled()){$.shake();return}(u.state.view==="DataCapture"||u.state.view==="DataCaptureOtpConfirm")&&re.disconnect(),$.close()}},Ze=S`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e[8]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    overflow: hidden;
  }
`;var Je=function(e,t,o,i){var a=arguments.length,n=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,o,n):s(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let ge=class extends T{render(){return c`<slot></slot>`}};ge.styles=[oe,Ze];ge=Je([y("wui-card")],ge);const et=S`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: var(--local-icon-bg-value);
  }
`;var ve=function(e,t,o,i){var a=arguments.length,n=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,o,n):s(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const tt={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let Z=class extends T{constructor(){super(...arguments),this.message="",this.type="info"}render(){return c`
      <wui-flex
        data-type=${E(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${tt[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){q.close()}};Z.styles=[oe,et];ve([p()],Z.prototype,"message",void 0);ve([p()],Z.prototype,"type",void 0);Z=ve([y("wui-alertbar")],Z);const ot=S`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:e})=>e[3]};
    left: ${({spacing:e})=>e[4]};
    right: ${({spacing:e})=>e[4]};
    opacity: 0;
    pointer-events: none;
  }
`;var Be=function(e,t,o,i){var a=arguments.length,n=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,o,n):s(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const nt={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}};let we=class extends T{constructor(){super(),this.unsubscribe=[],this.open=q.state.open,this.onOpen(!0),this.unsubscribe.push(q.subscribeKey("open",t=>{this.open=t,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:o}=q.state,i=nt[o];return c`
      <wui-alertbar
        message=${t}
        backgroundColor=${i?.backgroundColor}
        iconColor=${i?.iconColor}
        icon=${i?.icon}
        type=${o}
      ></wui-alertbar>
    `}onOpen(t){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):t||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};we.styles=ot;Be([w()],we.prototype,"open",void 0);we=Be([y("w3m-alertbar")],we);const it=S`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:e})=>e.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:e})=>e.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var U=function(e,t,o,i){var a=arguments.length,n=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,o,n):s(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let N=class extends T{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return c`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${E(this.iconSize)}></wui-icon>
    </button>`}};N.styles=[oe,Re,it];U([p()],N.prototype,"icon",void 0);U([p()],N.prototype,"variant",void 0);U([p()],N.prototype,"type",void 0);U([p()],N.prototype,"size",void 0);U([p()],N.prototype,"iconSize",void 0);U([p({type:Boolean})],N.prototype,"fullWidth",void 0);U([p({type:Boolean})],N.prototype,"disabled",void 0);N=U([y("wui-icon-button")],N);const rt=S`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var j=function(e,t,o,i){var a=arguments.length,n=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,o,n):s(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const at={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},st={lg:"lg",md:"md",sm:"sm"};let B=class extends T{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return c`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){const t=at[this.size];return this.text?c`<wui-text color="primary" variant=${t}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return c`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;const t=st[this.size];return c` <wui-flex class="left-icon-container">
      <wui-icon size=${t} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};B.styles=[oe,Re,rt];j([p()],B.prototype,"imageSrc",void 0);j([p()],B.prototype,"text",void 0);j([p()],B.prototype,"size",void 0);j([p()],B.prototype,"type",void 0);j([p({type:Boolean})],B.prototype,"disabled",void 0);B=j([y("wui-select")],B);const ct=S`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var z=function(e,t,o,i){var a=arguments.length,n=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,o,n):s(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const lt=["SmartSessionList"],dt={PayWithExchange:pe.tokens.theme.foregroundPrimary};function Se(){const e=u.state.data?.connector?.name,t=u.state.data?.wallet?.name,o=u.state.data?.network?.name,i=t??e,a=ue.getConnectors(),n=a.length===1&&a[0]?.id==="w3m-email",s=m.getAccountData()?.socialProvider,l=s?s.charAt(0).toUpperCase()+s.slice(1):"Connect Social";return{Connect:`Connect ${n?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:i?`Get ${i}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:o??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:l,ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in Progress",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset"}}let W=class extends T{constructor(){super(),this.unsubscribe=[],this.heading=Se()[u.state.view],this.network=m.state.activeCaipNetwork,this.networkImage=fe.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=u.state.view,this.viewDirection="",this.unsubscribe.push(Ke.subscribeNetworkImages(()=>{this.networkImage=fe.getNetworkImage(this.network)}),u.subscribeKey("view",t=>{setTimeout(()=>{this.view=t,this.heading=Se()[t]},F.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),m.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=fe.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=dt[u.state.view]??pe.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",t),c`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){_.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),u.push("WhatIsAWallet")}async onClose(){await _e.safeClose()}rightHeaderTemplate(){const t=g?.state?.features?.smartSessions;return u.state.view!=="Account"||!t?this.closeButtonTemplate():c`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>u.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return c`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){const t=lt.includes(this.view);return c`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${t?c`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:t}=u.state,o=t==="Connect",i=g.state.enableEmbedded,a=t==="ApproveTransaction",n=t==="ConnectingSiwe",s=t==="Account",l=g.state.enableNetworkSwitch,v=a||n||o&&i;return s&&l?c`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${E(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${E(this.networkImage)}
      ></wui-select>`:this.showBack&&!v?c`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:c`<wui-icon-button
      data-hidden=${!o}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(_.sendEvent({type:"track",event:"CLICK_NETWORKS"}),u.push("Networks"))}isAllowedNetworkSwitch(){const t=m.getAllRequestedCaipNetworks(),o=t?t.length>1:!1,i=t?.find(({id:a})=>a===this.network?.id);return o||!i}onViewChange(){const{history:t}=u.state;let o=F.VIEW_DIRECTION.Next;t.length<this.prevHistoryLength&&(o=F.VIEW_DIRECTION.Prev),this.prevHistoryLength=t.length,this.viewDirection=o}async onHistoryChange(){const{history:t}=u.state,o=this.shadowRoot?.querySelector("#dynamic");t.length>1&&!this.showBack&&o?(await o.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,o.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&o&&(await o.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,o.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){u.goBack()}};W.styles=ct;z([w()],W.prototype,"heading",void 0);z([w()],W.prototype,"network",void 0);z([w()],W.prototype,"networkImage",void 0);z([w()],W.prototype,"showBack",void 0);z([w()],W.prototype,"prevHistoryLength",void 0);z([w()],W.prototype,"view",void 0);z([w()],W.prototype,"viewDirection",void 0);W=z([y("w3m-header")],W);const ut=S`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`;var ye=function(e,t,o,i){var a=arguments.length,n=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,o,n):s(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let J=class extends T{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return c`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){const t={success:"success",error:"error",warning:"warning",info:"default"},o={success:"checkmark",error:"warning",warning:"warningCircle",info:"info"};return this.variant==="loading"?c`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:c`<wui-icon-box
      size="md"
      color=${t[this.variant]}
      icon=${o[this.variant]}
    ></wui-icon-box>`}};J.styles=[oe,ut];ye([p()],J.prototype,"message",void 0);ye([p()],J.prototype,"variant",void 0);J=ye([y("wui-snackbar")],J);const pt=Oe`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var Ue=function(e,t,o,i){var a=arguments.length,n=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,o,n):s(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let me=class extends T{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=f.state.open,this.unsubscribe.push(f.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:o}=f.state;return c` <wui-snackbar message=${t} variant=${o}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),f.state.autoClose&&(this.timeout=setTimeout(()=>f.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};me.styles=pt;Ue([w()],me.prototype,"open",void 0);me=Ue([y("w3m-snackbar")],me);const wt=S`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e[3]} 10px ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e[5]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.textPrimary};
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var ne=function(e,t,o,i){var a=arguments.length,n=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,o,n):s(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let L=class extends T{constructor(){super(),this.unsubscribe=[],this.open=X.state.open,this.message=X.state.message,this.triggerRect=X.state.triggerRect,this.variant=X.state.variant,this.unsubscribe.push(X.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,o=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${t}px;
    --w3m-tooltip-left: ${o}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,c`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};L.styles=[wt];ne([w()],L.prototype,"open",void 0);ne([w()],L.prototype,"message",void 0);ne([w()],L.prototype,"triggerRect",void 0);ne([w()],L.prototype,"variant",void 0);L=ne([y("w3m-tooltip")],L);const Q={getTabsByNamespace(e){return!!e&&e===I.CHAIN.EVM?g.state.remoteFeatures?.activity===!1?F.ACCOUNT_TABS.filter(o=>o.label!=="Activity"):F.ACCOUNT_TABS:[]},isValidReownName(e){return/^[a-zA-Z0-9]+$/gu.test(e)},isValidEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e)},validateReownName(e){return e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,"")},hasFooter(){const e=u.state.view;if(F.VIEWS_WITH_LEGAL_FOOTER.includes(e)){const{termsConditionsUrl:t,privacyPolicyUrl:o}=g.state,i=g.state.features?.legalCheckbox;return!(!t&&!o||i)}return F.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}},mt=S`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e[3]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`;var ze=function(e,t,o,i){var a=arguments.length,n=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,o,n):s(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let he=class extends T{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=g.state.remoteFeatures,this.unsubscribe.push(g.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{termsConditionsUrl:t,privacyPolicyUrl:o}=g.state,i=g.state.features?.legalCheckbox;return!t&&!o||i?c`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:c`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:o}=g.state;return t&&o?"and":""}termsTemplate(){const{termsConditionsUrl:t}=g.state;return t?c`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:t}=g.state;return t?c`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(t=!1){return this.remoteFeatures?.reownBranding?t?c`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:c`<wui-ux-by-reown></wui-ux-by-reown>`:null}};he.styles=[mt];ze([w()],he.prototype,"remoteFeatures",void 0);he=ze([y("w3m-legal-footer")],he);const ht=Oe``;var ft=function(e,t,o,i){var a=arguments.length,n=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,o,n):s(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let be=class extends T{render(){const{termsConditionsUrl:t,privacyPolicyUrl:o}=g.state;return!t&&!o?null:c`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return c` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){_.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:ae(m.state.activeChain)===se.ACCOUNT_TYPES.SMART_ACCOUNT}}),u.push("WhatIsABuy")}};be.styles=[ht];be=ft([y("w3m-onramp-providers-footer")],be);const gt=S`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var ke=function(e,t,o,i){var a=arguments.length,n=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,o,n):s(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let ee=class extends T{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=u.state.view}firstUpdated(){this.status=Q.hasFooter()?"show":"hide",this.unsubscribe.push(u.subscribeKey("view",t=>{this.view=t,this.status=Q.hasFooter()?"show":"hide",this.status==="hide"&&document.documentElement.style.setProperty("--apkt-footer-height","0px")})),this.resizeObserver=new ResizeObserver(t=>{for(const o of t)if(o.target===this.getWrapper()){const i=`${o.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",i)}}),this.resizeObserver.observe(this.getWrapper())}render(){return c`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return Q.hasFooter()?c` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return c`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return c`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return c` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){_.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),u.push("WhatIsANetwork")}getWrapper(){return this.shadowRoot?.querySelector("div.container")}};ee.styles=[gt];ke([w()],ee.prototype,"status",void 0);ke([w()],ee.prototype,"view",void 0);ee=ke([y("w3m-footer")],ee);const bt=S`
  :host {
    display: block;
    width: inherit;
  }
`;var Te=function(e,t,o,i){var a=arguments.length,n=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,o,n):s(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let te=class extends T{constructor(){super(),this.unsubscribe=[],this.viewState=u.state.view,this.history=u.state.history.join(","),this.unsubscribe.push(u.subscribeKey("view",()=>{this.history=u.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return c`${this.templatePageContainer()}`}templatePageContainer(){return c`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=u.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(t){switch(t){case"AccountSettings":return c`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return c`<w3m-account-view></w3m-account-view>`;case"AllWallets":return c`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return c`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return c`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return c`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return c`<w3m-connect-view></w3m-connect-view>`;case"Create":return c`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return c`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return c`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return c`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return c`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return c`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return c`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return c`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return c`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return c`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return c`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return c`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return c`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return c`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return c`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return c`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return c`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return c`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return c`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return c`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return c`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return c`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return c`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return c`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return c`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return c`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return c`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return c`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return c`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return c`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return c`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return c`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return c`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return c`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return c`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return c`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return c`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return c`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return c`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return c`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return c`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return c`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return c`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return c`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return c`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return c`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return c`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return c`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return c`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"FundWallet":return c`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return c`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return c`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;default:return c`<w3m-connect-view></w3m-connect-view>`}}};te.styles=[bt];Te([w()],te.prototype,"viewState",void 0);Te([w()],te.prototype,"history",void 0);te=Te([y("w3m-router")],te);const vt=S`
  :host {
    z-index: ${({tokens:e})=>e.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({tokens:e})=>e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      backdrop-filter ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    transition-delay: ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      w3m-shake ${({durations:e})=>e.xl}
        ${({easings:e})=>e["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:e})=>e["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
  }
`;var R=function(e,t,o,i){var a=arguments.length,n=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,o,n):s(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const Ce="scroll-lock",yt={PayWithExchange:"0",PayWithExchangeSelectAsset:"0"};class P extends T{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=g.state.enableEmbedded,this.open=$.state.open,this.caipAddress=m.state.activeCaipAddress,this.caipNetwork=m.state.activeCaipNetwork,this.shake=$.state.shake,this.filterByNamespace=ue.state.filterByNamespace,this.padding=pe.spacing[1],this.mobileFullScreen=g.state.enableMobileFullScreen,this.initializeTheming(),ie.prefetchAnalyticsConfig(),this.unsubscribe.push($.subscribeKey("open",t=>t?this.onOpen():this.onClose()),$.subscribeKey("shake",t=>this.shake=t),m.subscribeKey("activeCaipNetwork",t=>this.onNewNetwork(t)),m.subscribeKey("activeCaipAddress",t=>this.onNewAddress(t)),g.subscribeKey("enableEmbedded",t=>this.enableEmbedded=t),ue.subscribeKey("filterByNamespace",t=>{this.filterByNamespace!==t&&!m.getAccountData(t)?.caipAddress&&(ie.fetchRecommendedWallets(),this.filterByNamespace=t)}),u.subscribeKey("view",()=>{this.dataset.border=Q.hasFooter()?"true":"false",this.padding=yt[u.state.view]??pe.spacing[1]}))}firstUpdated(){if(this.dataset.border=Q.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded){$.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded?c`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?c`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return c` <wui-card
      shake="${this.shake}"
      data-embedded="${E(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(t){if(t.target===t.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await _e.safeClose()}initializeTheming(){const{themeVariables:t,themeMode:o}=Ge.state,i=De.getColorTheme(o);Ye(t,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),f.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=Ce,t.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${Ce}"]`);t&&t.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const t=this.shadowRoot?.querySelector("wui-card");t?.focus(),window.addEventListener("keydown",o=>{if(o.key==="Escape")this.handleClose();else if(o.key==="Tab"){const{tagName:i}=o.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&t?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(t){const o=m.state.isSwitchingNamespace,i=u.state.view==="ProfileWallets";t?await this.onConnected({caipAddress:t,isSwitchingNamespace:o,isInProfileView:i}):!o&&!this.enableEmbedded&&!i&&$.close(),await le.initializeIfEnabled(t),this.caipAddress=t,m.setIsSwitchingNamespace(!1)}async onConnected(t){if(t.isInProfileView)return;const{chainNamespace:o,chainId:i,address:a}=Xe.parseCaipAddress(t.caipAddress),n=`${o}:${i}`,s=!ce.getPlainAddress(this.caipAddress),l=await le.getSessions({address:a,caipNetworkId:n}),v=le.getSIWX()?l.some(V=>V.data.accountAddress===a):!0,H=t.isSwitchingNamespace&&v&&!this.enableEmbedded,M=this.enableEmbedded&&s;H?u.goBack():M&&$.close()}onNewNetwork(t){const o=this.caipNetwork,i=o?.caipNetworkId?.toString(),a=o?.chainNamespace,n=t?.caipNetworkId?.toString(),s=t?.chainNamespace,l=i!==n,H=l&&!(a!==s),M=o?.name===I.UNSUPPORTED_NETWORK_NAME,V=u.state.view==="ConnectingExternal",Fe=u.state.view==="ProfileWallets",Le=!m.getAccountData(t?.chainNamespace)?.caipAddress,He=u.state.view==="UnsupportedChain",Me=$.state.open;let K=!1;this.enableEmbedded&&u.state.view==="SwitchNetwork"&&(K=!0),l&&d.resetState(),Me&&!V&&!Fe&&(Le?l&&(K=!0):(He||H&&!M)&&(K=!0)),K&&u.state.view!=="SIWXSignMessage"&&u.goBack(),this.caipNetwork=t}prefetch(){this.hasPrefetched||(ie.prefetch(),ie.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}P.styles=vt;R([p({type:Boolean})],P.prototype,"enableEmbedded",void 0);R([w()],P.prototype,"open",void 0);R([w()],P.prototype,"caipAddress",void 0);R([w()],P.prototype,"caipNetwork",void 0);R([w()],P.prototype,"shake",void 0);R([w()],P.prototype,"filterByNamespace",void 0);R([w()],P.prototype,"padding",void 0);R([w()],P.prototype,"mobileFullScreen",void 0);let Ae=class extends P{};Ae=R([y("w3m-modal")],Ae);let $e=class extends P{};$e=R([y("appkit-modal")],$e);const kt=S`
  :host {
    width: 100%;
  }
`;var x=function(e,t,o,i){var a=arguments.length,n=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,o,n):s(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};let b=class extends T{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(t){super.updated(t),(t.has("name")||t.has("imageSrc")||t.has("walletRank"))&&(this.hasImpressionSent=!1),t.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&!this.loading&&!this.hasImpressionSent&&this.sendImpressionEvent()})},{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){!this.name||this.hasImpressionSent||!this.walletRank||(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&_.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:u.state.view,displayIndex:this.displayIndex}))}render(){return c`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${E(this.imageSrc)}
        name=${this.name}
        size=${E(this.size)}
        tagLabel=${E(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
      ></wui-list-wallet>
    `}};b.styles=kt;x([p({type:Array})],b.prototype,"walletImages",void 0);x([p()],b.prototype,"imageSrc",void 0);x([p()],b.prototype,"name",void 0);x([p()],b.prototype,"size",void 0);x([p()],b.prototype,"tagLabel",void 0);x([p()],b.prototype,"tagVariant",void 0);x([p()],b.prototype,"walletIcon",void 0);x([p()],b.prototype,"tabIdx",void 0);x([p({type:Boolean})],b.prototype,"disabled",void 0);x([p({type:Boolean})],b.prototype,"showAllWallets",void 0);x([p({type:Boolean})],b.prototype,"loading",void 0);x([p({type:String})],b.prototype,"loadingSpinnerColor",void 0);x([p()],b.prototype,"rdnsId",void 0);x([p()],b.prototype,"displayIndex",void 0);x([p()],b.prototype,"walletRank",void 0);b=x([y("w3m-list-wallet")],b);const Tt=S`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:e})=>e.lg};
    --local-transition: ${({easings:e})=>e["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;var O=function(e,t,o,i){var a=arguments.length,n=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(n=(a<3?s(n):a>3?s(t,o,n):s(t,o))||n);return a>3&&n&&Object.defineProperty(t,o,n),n};const xt=60;let C=class extends T{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=g.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(t){if(t.has("history")){const o=this.history;this.historyState!==""&&this.historyState!==o&&this.onViewChange(o)}t.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),t.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(t=>{for(const o of t)if(o.target===this.getWrapper()){let i=o.contentRect.height;const a=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");if(this.mobileFullScreen){const n=window.visualViewport?.height||window.innerHeight,s=this.getHeaderHeight();i=n-s-a,this.style.setProperty("--local-border-bottom-radius","0px")}else i=i+a,this.style.setProperty("--local-border-bottom-radius",a?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${i}px`),this.previousHeight!=="0px"&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${i}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),window.visualViewport?.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){const t=this.getWrapper();t&&this.resizeObserver&&this.resizeObserver.unobserve(t),window.removeEventListener("resize",this.onViewportResize),window.visualViewport?.removeEventListener("resize",this.onViewportResize)}render(){return c`
      <div class="container" data-mobile-fullscreen="${E(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${E(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(t){const o=t.split(",").filter(Boolean),i=this.historyState.split(",").filter(Boolean),a=i.length,n=o.length,s=o[o.length-1]||"",l=De.cssDurationToNumber(this.transitionDuration);let v="";n>a?v="next":n<a?v="prev":n===a&&o[n-1]!==i[a-1]&&(v="next"),this.viewDirection=`${v}-${s}`,setTimeout(()=>{this.historyState=t,this.setView?.(s)},l),setTimeout(()=>{this.viewDirection=""},l*2)}getWrapper(){return this.shadowRoot?.querySelector("div.page")}updateContainerHeight(){const t=this.getWrapper();if(!t)return;const o=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");let i=0;if(this.mobileFullScreen){const a=window.visualViewport?.height||window.innerHeight,n=this.getHeaderHeight();i=a-n-o,this.style.setProperty("--local-border-bottom-radius","0px")}else i=t.getBoundingClientRect().height+o,this.style.setProperty("--local-border-bottom-radius",o?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${i}px`),this.previousHeight!=="0px"&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${i}px`}getHeaderHeight(){return xt}};C.styles=[Tt];O([p({type:String})],C.prototype,"transitionDuration",void 0);O([p({type:String})],C.prototype,"transitionFunction",void 0);O([p({type:String})],C.prototype,"history",void 0);O([p({type:String})],C.prototype,"view",void 0);O([p({attribute:!1})],C.prototype,"setView",void 0);O([w()],C.prototype,"viewDirection",void 0);O([w()],C.prototype,"historyState",void 0);O([w()],C.prototype,"previousHeight",void 0);O([w()],C.prototype,"mobileFullScreen",void 0);C=O([y("w3m-router-container")],C);export{$e as AppKitModal,b as W3mListWallet,Ae as W3mModal,P as W3mModalBase,C as W3mRouterContainer};
//# sourceMappingURL=w3m-modal-CbyYQybS.js.map
