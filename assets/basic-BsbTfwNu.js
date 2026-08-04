import{i as M,C as K,A as N,O as q,a as P,b as L,c as Ge,d as u,E as F,R as B,e as j,f as Gt,g as ve,h as we,H as Jn,r as G,j as he,T as Nt,S as je,M as kn,k as An,l as Bn,m as Pn,w as Me,n as ge,o as Xn,p as Zn,q as Qt,s as Ln,W as Ot}from"./core-Uv9Br_k5.js";import{n as d,r as _,c as O,o as z,U as ce,i as ei,t as ti,e as ni}from"./index-DUiIFAH_.js";import{g as ii}from"./react-vendor-Cp2JmYUv.js";import{r as ri}from"./dijkstra-COg3n3zL.js";import"./web3-vendor-CGwxEKZx.js";import"./index-CwvhYMZj.js";var Le=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let $e=class extends M{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=K.state.connectors,this.count=N.state.count,this.filteredCount=N.state.filteredWallets.length,this.isFetchingRecommendedWallets=N.state.isFetchingRecommendedWallets,this.unsubscribe.push(K.subscribeKey("connectors",t=>this.connectors=t),N.subscribeKey("count",t=>this.count=t),N.subscribeKey("filteredWallets",t=>this.filteredCount=t.length),N.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(c=>c.id==="walletConnect"),{allWallets:i}=q.state;if(!t||i==="HIDE"||i==="ONLY_MOBILE"&&!P.isMobile())return null;const r=N.state.featured.length,o=this.count+r,n=o<10?o:Math.floor(o/10)*10,s=this.filteredCount>0?this.filteredCount:n;let a=`${s}`;this.filteredCount>0?a=`${this.filteredCount}`:s<o&&(a=`${s}+`);const l=L.hasAnyConnection(Ge.CONNECTOR_ID.WALLET_CONNECT);return u`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${a}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${z(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${l}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){F.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),B.push("AllWallets",{redirectView:B.state.data?.redirectView})}};Le([d()],$e.prototype,"tabIdx",void 0);Le([_()],$e.prototype,"connectors",void 0);Le([_()],$e.prototype,"count",void 0);Le([_()],$e.prototype,"filteredCount",void 0);Le([_()],$e.prototype,"isFetchingRecommendedWallets",void 0);$e=Le([O("w3m-all-wallets-widget")],$e);const oi=j`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var fe=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Z=class extends M{constructor(){super(),this.unsubscribe=[],this.connectors=K.state.connectors,this.recommended=N.state.recommended,this.featured=N.state.featured,this.explorerWallets=N.state.explorerWallets,this.connections=L.state.connections,this.connectorImages=Gt.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(K.subscribeKey("connectors",t=>this.connectors=t),L.subscribeKey("connections",t=>this.connections=t),Gt.subscribeKey("connectorImages",t=>this.connectorImages=t),N.subscribeKey("recommended",t=>this.recommended=t),N.subscribeKey("featured",t=>this.featured=t),N.subscribeKey("explorerFilteredWallets",t=>{this.explorerWallets=t?.length?t:N.state.explorerWallets}),N.subscribeKey("explorerWallets",t=>{this.explorerWallets?.length||(this.explorerWallets=t)})),P.isTelegram()&&P.isIos()&&(this.loadingTelegram=!L.state.wcUri,this.unsubscribe.push(L.subscribeKey("wcUri",t=>this.loadingTelegram=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return u`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}mapConnectorsToExplorerWallets(t,i){return t.map(r=>{if(r.type==="MULTI_CHAIN"&&r.connectors){const n=r.connectors.map(c=>c.id),s=r.connectors.map(c=>c.name),a=r.connectors.map(c=>c.info?.rdns),l=i?.find(c=>n.includes(c.id)||s.includes(c.name)||c.rdns&&(a.includes(c.rdns)||n.includes(c.rdns)));return r.explorerWallet=l??r.explorerWallet,r}const o=i?.find(n=>n.id===r.id||n.rdns===r.info?.rdns||n.name===r.name);return r.explorerWallet=o??r.explorerWallet,r})}processConnectorsByType(t,i=!0){const r=ve.sortConnectorsByExplorerWallet([...t]);return i?r.filter(ve.showConnector):r}connectorListTemplate(){const t=this.mapConnectorsToExplorerWallets(this.connectors,this.explorerWallets??[]),i=ve.getConnectorsByType(t,this.recommended,this.featured),r=this.processConnectorsByType(i.announced.filter(h=>h.id!=="walletConnect")),o=this.processConnectorsByType(i.injected),n=this.processConnectorsByType(i.multiChain.filter(h=>h.name!=="WalletConnect"),!1),s=i.custom,a=i.recent,l=this.processConnectorsByType(i.external.filter(h=>h.id!==Ge.CONNECTOR_ID.COINBASE_SDK)),c=i.recommended,w=i.featured,E=ve.getConnectorTypeOrder({custom:s,recent:a,announced:r,injected:o,multiChain:n,recommended:c,featured:w,external:l}),C=this.connectors.find(h=>h.id==="walletConnect"),m=P.isMobile(),x=[];for(const h of E)switch(h){case"walletConnect":{!m&&C&&x.push({kind:"connector",subtype:"walletConnect",connector:C});break}case"recent":{ve.getFilteredRecentWallets().forEach(p=>x.push({kind:"wallet",subtype:"recent",wallet:p}));break}case"injected":{n.forEach(b=>x.push({kind:"connector",subtype:"multiChain",connector:b})),r.forEach(b=>x.push({kind:"connector",subtype:"announced",connector:b})),o.forEach(b=>x.push({kind:"connector",subtype:"injected",connector:b}));break}case"featured":{w.forEach(b=>x.push({kind:"wallet",subtype:"featured",wallet:b}));break}case"custom":{ve.getFilteredCustomWallets(s??[]).forEach(p=>x.push({kind:"wallet",subtype:"custom",wallet:p}));break}case"external":{l.forEach(b=>x.push({kind:"connector",subtype:"external",connector:b}));break}case"recommended":{ve.getCappedRecommendedWallets(c).forEach(p=>x.push({kind:"wallet",subtype:"recommended",wallet:p}));break}default:console.warn(`Unknown connector type: ${h}`)}return x.map((h,b)=>h.kind==="connector"?this.renderConnector(h,b):this.renderWallet(h,b))}renderConnector(t,i){const r=t.connector,o=we.getConnectorImage(r)||this.connectorImages[r?.imageId??""],s=(this.connections.get(r.chain)??[]).some(E=>Jn.isLowerCaseMatch(E.connectorId,r.id));let a,l;t.subtype==="multiChain"?(a="multichain",l="info"):t.subtype==="walletConnect"?(a="qr code",l="accent"):t.subtype==="injected"||t.subtype==="announced"?(a=s?"connected":"installed",l=s?"info":"success"):(a=void 0,l=void 0);const c=L.hasAnyConnection(Ge.CONNECTOR_ID.WALLET_CONNECT),w=t.subtype==="walletConnect"||t.subtype==="external"?c:!1;return u`
      <w3m-list-wallet
        displayIndex=${i}
        imageSrc=${z(o)}
        .installed=${!0}
        name=${r.name??"Unknown"}
        .tagVariant=${l}
        tagLabel=${z(a)}
        data-testid=${`wallet-selector-${r.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(t)}
        tabIdx=${z(this.tabIdx)}
        ?disabled=${w}
        rdnsId=${z(r.explorerWallet?.rdns||void 0)}
        walletRank=${z(r.explorerWallet?.order)}
      >
      </w3m-list-wallet>
    `}onClickConnector(t){const i=B.state.data?.redirectView;if(t.subtype==="walletConnect"){K.setActiveConnector(t.connector),P.isMobile()?B.push("AllWallets"):B.push("ConnectingWalletConnect",{redirectView:i});return}if(t.subtype==="multiChain"){K.setActiveConnector(t.connector),B.push("ConnectingMultiChain",{redirectView:i});return}if(t.subtype==="injected"){K.setActiveConnector(t.connector),B.push("ConnectingExternal",{connector:t.connector,redirectView:i,wallet:t.connector.explorerWallet});return}if(t.subtype==="announced"){if(t.connector.id==="walletConnect"){P.isMobile()?B.push("AllWallets"):B.push("ConnectingWalletConnect",{redirectView:i});return}B.push("ConnectingExternal",{connector:t.connector,redirectView:i,wallet:t.connector.explorerWallet});return}B.push("ConnectingExternal",{connector:t.connector,redirectView:i})}renderWallet(t,i){const r=t.wallet,o=we.getWalletImage(r),s=L.hasAnyConnection(Ge.CONNECTOR_ID.WALLET_CONNECT),a=this.loadingTelegram,l=t.subtype==="recent"?"recent":void 0,c=t.subtype==="recent"?"info":void 0;return u`
      <w3m-list-wallet
        displayIndex=${i}
        imageSrc=${z(o)}
        name=${r.name??"Unknown"}
        @click=${()=>this.onClickWallet(t)}
        size="sm"
        data-testid=${`wallet-selector-${r.id}`}
        tabIdx=${z(this.tabIdx)}
        ?loading=${a}
        ?disabled=${s}
        rdnsId=${z(r.rdns||void 0)}
        walletRank=${z(r.order)}
        tagLabel=${z(l)}
        .tagVariant=${c}
      >
      </w3m-list-wallet>
    `}onClickWallet(t){const i=B.state.data?.redirectView;if(t.subtype==="featured"){K.selectWalletConnector(t.wallet);return}if(t.subtype==="recent"){if(this.loadingTelegram)return;K.selectWalletConnector(t.wallet);return}if(t.subtype==="custom"){if(this.loadingTelegram)return;B.push("ConnectingWalletConnect",{wallet:t.wallet,redirectView:i});return}if(this.loadingTelegram)return;const r=K.getConnector({id:t.wallet.id,rdns:t.wallet.rdns});r?B.push("ConnectingExternal",{connector:r,redirectView:i}):B.push("ConnectingWalletConnect",{wallet:t.wallet,redirectView:i})}};Z.styles=oi;fe([d({type:Number})],Z.prototype,"tabIdx",void 0);fe([_()],Z.prototype,"connectors",void 0);fe([_()],Z.prototype,"recommended",void 0);fe([_()],Z.prototype,"featured",void 0);fe([_()],Z.prototype,"explorerWallets",void 0);fe([_()],Z.prototype,"connections",void 0);fe([_()],Z.prototype,"connectorImages",void 0);fe([_()],Z.prototype,"loadingTelegram",void 0);Z=fe([O("w3m-connector-list")],Z);const si=j`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var Ue=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};const ai={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},li={lg:"md",md:"sm",sm:"sm"};let Ce=class extends M{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return u`
      <button data-active=${this.active}>
        ${this.icon?u`<wui-icon size=${li[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${ai[this.size]}> ${this.label} </wui-text>
      </button>
    `}};Ce.styles=[G,he,si];Ue([d()],Ce.prototype,"icon",void 0);Ue([d()],Ce.prototype,"size",void 0);Ue([d()],Ce.prototype,"label",void 0);Ue([d({type:Boolean})],Ce.prototype,"active",void 0);Ce=Ue([O("wui-tab-item")],Ce);const ci=j`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var qe=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let xe=class extends M{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((t,i)=>{const r=i===this.activeTab;return u`
        <wui-tab-item
          @click=${()=>this.onTabClick(i)}
          icon=${t.icon}
          size=${this.size}
          label=${t.label}
          ?active=${r}
          data-active=${r}
          data-testid="tab-${t.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(t){this.activeTab=t,this.onTabChange(t)}};xe.styles=[G,he,ci];qe([d({type:Array})],xe.prototype,"tabs",void 0);qe([d()],xe.prototype,"onTabChange",void 0);qe([d()],xe.prototype,"size",void 0);qe([_()],xe.prototype,"activeTab",void 0);xe=qe([O("wui-tabs")],xe);var Mt=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Qe=class extends M{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return u`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(i=>i==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:i==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:i==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:i==="web"?{label:"Webapp",icon:"browser",platform:"web"}:i==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:i})=>i),t}onTabChange(t){const i=this.platformTabs[t];i&&this.onSelectPlatfrom?.(i)}};Mt([d({type:Array})],Qe.prototype,"platforms",void 0);Mt([d()],Qe.prototype,"onSelectPlatfrom",void 0);Qe=Mt([O("w3m-connecting-header")],Qe);const ui=j`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var Te=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};const di={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},hi={lg:"md",md:"md",sm:"sm"};let ue=class extends M{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;const t=this.textVariant??di[this.size];return u`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){const t=hi[this.size],i=this.variant==="neutral-primary"||this.variant==="accent-primary"?"invert":"primary";return u`<wui-loading-spinner color=${i} size=${t}></wui-loading-spinner>`}return null}};ue.styles=[G,he,ui];Te([d()],ue.prototype,"size",void 0);Te([d({type:Boolean})],ue.prototype,"disabled",void 0);Te([d({type:Boolean})],ue.prototype,"fullWidth",void 0);Te([d({type:Boolean})],ue.prototype,"loading",void 0);Te([d()],ue.prototype,"variant",void 0);Te([d()],ue.prototype,"textVariant",void 0);ue=Te([O("wui-button")],ue);const fi=j`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Nn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Ye=class extends M{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,r=36-t,o=116+r,n=245+r,s=360+r*1.75;return u`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${o} ${n}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Ye.styles=[G,fi];Nn([d({type:Number})],Ye.prototype,"radius",void 0);Ye=Nn([O("wui-loading-thumbnail")],Ye);const pi=j`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var ot=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Be=class extends M{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return u`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Be.styles=[G,he,pi];ot([d({type:Boolean})],Be.prototype,"disabled",void 0);ot([d()],Be.prototype,"label",void 0);ot([d()],Be.prototype,"buttonLabel",void 0);Be=ot([O("wui-cta-button")],Be);const gi=j`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`;var On=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Je=class extends M{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:i,play_store:r,chrome_store:o,homepage:n}=this.wallet,s=P.isMobile(),a=P.isIos(),l=P.isAndroid(),c=[i,r,n,o].filter(Boolean).length>1,w=ce.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return c&&!s?u`
        <wui-cta-button
          label=${`Don't have ${w}?`}
          buttonLabel="Get"
          @click=${()=>B.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&n?u`
        <wui-cta-button
          label=${`Don't have ${w}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:i&&a?u`
        <wui-cta-button
          label=${`Don't have ${w}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&l?u`
        <wui-cta-button
          label=${`Don't have ${w}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&P.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&P.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&P.openHref(this.wallet.homepage,"_blank")}};Je.styles=[gi];On([d({type:Object})],Je.prototype,"wallet",void 0);Je=On([O("w3m-mobile-download-links")],Je);const mi=j`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var ee=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};class U extends M{constructor(){super(),this.wallet=B.state.data?.wallet,this.connector=B.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=we.getConnectorImage(this.connector)??we.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=L.state.wcUri,this.error=L.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(L.subscribeKey("wcUri",t=>{this.uri=t,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),L.subscribeKey("wcError",t=>this.error=t)),(P.isTelegram()||P.isSafari())&&P.isIos()&&L.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),L.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i="";return this.label?i=this.label:(i=`Continue in ${this.name}`,this.error&&(i="Connection declined")),u`
      <wui-flex
        data-error=${z(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${z(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?u`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?u`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,this.shadowRoot?.querySelector("wui-button")?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){L.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){const t=Nt.state.themeVariables["--w3m-border-radius-master"],i=t?parseInt(t.replace("px",""),10):4;return u`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(P.copyToClopboard(this.uri),je.showSuccess("Link copied"))}catch{je.showError("Failed to copy")}}}U.styles=mi;ee([_()],U.prototype,"isRetrying",void 0);ee([_()],U.prototype,"uri",void 0);ee([_()],U.prototype,"error",void 0);ee([_()],U.prototype,"ready",void 0);ee([_()],U.prototype,"showRetry",void 0);ee([_()],U.prototype,"label",void 0);ee([_()],U.prototype,"secondaryBtnLabel",void 0);ee([_()],U.prototype,"secondaryLabel",void 0);ee([_()],U.prototype,"isLoading",void 0);ee([d({type:Boolean})],U.prototype,"isMobile",void 0);ee([d()],U.prototype,"onRetry",void 0);var wi=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Yt=class extends U{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),F.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:B.state.view}})}async onConnectProxy(){try{this.error=!1;const{connectors:t}=K.state,i=t.find(r=>r.type==="ANNOUNCED"&&r.info?.rdns===this.wallet?.rdns||r.type==="INJECTED"||r.name===this.wallet?.name);if(i)await L.connectExternal(i,i.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");kn.close(),F.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown",view:B.state.view,walletRank:this.wallet?.order}})}catch(t){t instanceof An&&t.originalName===Bn.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?F.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:t.message}}):F.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}};Yt=wi([O("w3m-connecting-wc-browser")],Yt);var bi=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Jt=class extends U{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),F.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:B.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:i}=this.wallet,{redirect:r,href:o}=P.formatNativeUrl(t,this.uri);L.setWcLinking({name:i,href:o}),L.setRecentWallet(this.wallet),P.openHref(r,"_blank")}catch{this.error=!0}}};Jt=bi([O("w3m-connecting-wc-desktop")],Jt);var Ne=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Ee=class extends U{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=q.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,link_mode:i,name:r}=this.wallet,{redirect:o,redirectUniversalLink:n,href:s}=P.formatNativeUrl(t,this.uri,i);this.redirectDeeplink=o,this.redirectUniversalLink=n,this.target=P.isIframe()?"_top":"_self",L.setWcLinking({name:r,href:s}),L.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?P.openHref(this.redirectUniversalLink,this.target):P.openHref(this.redirectDeeplink,this.target)}catch(t){F.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:t instanceof Error?t.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=Pn.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(L.subscribeKey("wcUri",()=>{this.onHandleURI()})),F.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:B.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){L.setWcError(!1),this.onConnect?.()}};Ne([_()],Ee.prototype,"redirectDeeplink",void 0);Ne([_()],Ee.prototype,"redirectUniversalLink",void 0);Ne([_()],Ee.prototype,"target",void 0);Ne([_()],Ee.prototype,"preferUniversalLinks",void 0);Ne([_()],Ee.prototype,"isLoading",void 0);Ee=Ne([O("w3m-connecting-wc-mobile")],Ee);var Ae={},dt,Xt;function yi(){return Xt||(Xt=1,dt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),dt}var ht={},me={},Zt;function _e(){if(Zt)return me;Zt=1;let e;const t=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return me.getSymbolSize=function(r){if(!r)throw new Error('"version" cannot be null or undefined');if(r<1||r>40)throw new Error('"version" should be in range from 1 to 40');return r*4+17},me.getSymbolTotalCodewords=function(r){return t[r]},me.getBCHDigit=function(i){let r=0;for(;i!==0;)r++,i>>>=1;return r},me.setToSJISFunction=function(r){if(typeof r!="function")throw new Error('"toSJISFunc" is not a valid function.');e=r},me.isKanjiModeEnabled=function(){return typeof e<"u"},me.toSJIS=function(r){return e(r)},me}var ft={},en;function zt(){return en||(en=1,(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(ft)),ft}var pt,tn;function vi(){if(tn)return pt;tn=1;function e(){this.buffer=[],this.length=0}return e.prototype={get:function(t){const i=Math.floor(t/8);return(this.buffer[i]>>>7-t%8&1)===1},put:function(t,i){for(let r=0;r<i;r++)this.putBit((t>>>i-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const i=Math.floor(this.length/8);this.buffer.length<=i&&this.buffer.push(0),t&&(this.buffer[i]|=128>>>this.length%8),this.length++}},pt=e,pt}var gt,nn;function $i(){if(nn)return gt;nn=1;function e(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}return e.prototype.set=function(t,i,r,o){const n=t*this.size+i;this.data[n]=r,o&&(this.reservedBit[n]=!0)},e.prototype.get=function(t,i){return this.data[t*this.size+i]},e.prototype.xor=function(t,i,r){this.data[t*this.size+i]^=r},e.prototype.isReserved=function(t,i){return this.reservedBit[t*this.size+i]},gt=e,gt}var mt={},rn;function Ci(){return rn||(rn=1,(function(e){const t=_e().getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,n=t(r),s=n===145?26:Math.ceil((n-13)/(2*o-2))*2,a=[n-7];for(let l=1;l<o-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const o=[],n=e.getRowColCoords(r),s=n.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||o.push([n[a],n[l]]);return o}})(mt)),mt}var wt={},on;function xi(){if(on)return wt;on=1;const e=_e().getSymbolSize,t=7;return wt.getPositions=function(r){const o=e(r);return[[0,0],[o-t,0],[0,o-t]]},wt}var bt={},sn;function Ei(){return sn||(sn=1,(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const n=o.size;let s=0,a=0,l=0,c=null,w=null;for(let E=0;E<n;E++){a=l=0,c=w=null;for(let C=0;C<n;C++){let m=o.get(E,C);m===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=m,a=1),m=o.get(C,E),m===w?l++:(l>=5&&(s+=t.N1+(l-5)),w=m,l=1)}a>=5&&(s+=t.N1+(a-5)),l>=5&&(s+=t.N1+(l-5))}return s},e.getPenaltyN2=function(o){const n=o.size;let s=0;for(let a=0;a<n-1;a++)for(let l=0;l<n-1;l++){const c=o.get(a,l)+o.get(a,l+1)+o.get(a+1,l)+o.get(a+1,l+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const n=o.size;let s=0,a=0,l=0;for(let c=0;c<n;c++){a=l=0;for(let w=0;w<n;w++)a=a<<1&2047|o.get(c,w),w>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|o.get(w,c),w>=10&&(l===1488||l===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let n=0;const s=o.data.length;for(let l=0;l<s;l++)n+=o.data[l];return Math.abs(Math.ceil(n*100/s/5)-10)*t.N4};function i(r,o,n){switch(r){case e.Patterns.PATTERN000:return(o+n)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(o+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return o*n%2+o*n%3===0;case e.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case e.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,n){const s=n.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)n.isReserved(l,a)||n.xor(l,a,i(o,l,a))},e.getBestMask=function(o,n){const s=Object.keys(e.Patterns).length;let a=0,l=1/0;for(let c=0;c<s;c++){n(c),e.applyMask(c,o);const w=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(c,o),w<l&&(l=w,a=c)}return a}})(bt)),bt}var Ke={},an;function Dn(){if(an)return Ke;an=1;const e=zt(),t=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Ke.getBlocksCount=function(o,n){switch(n){case e.L:return t[(o-1)*4+0];case e.M:return t[(o-1)*4+1];case e.Q:return t[(o-1)*4+2];case e.H:return t[(o-1)*4+3];default:return}},Ke.getTotalCodewordsCount=function(o,n){switch(n){case e.L:return i[(o-1)*4+0];case e.M:return i[(o-1)*4+1];case e.Q:return i[(o-1)*4+2];case e.H:return i[(o-1)*4+3];default:return}},Ke}var yt={},De={},ln;function Ri(){if(ln)return De;ln=1;const e=new Uint8Array(512),t=new Uint8Array(256);return(function(){let r=1;for(let o=0;o<255;o++)e[o]=r,t[r]=o,r<<=1,r&256&&(r^=285);for(let o=255;o<512;o++)e[o]=e[o-255]})(),De.log=function(r){if(r<1)throw new Error("log("+r+")");return t[r]},De.exp=function(r){return e[r]},De.mul=function(r,o){return r===0||o===0?0:e[t[r]+t[o]]},De}var cn;function Si(){return cn||(cn=1,(function(e){const t=Ri();e.mul=function(r,o){const n=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)n[s+a]^=t.mul(r[s],o[a]);return n},e.mod=function(r,o){let n=new Uint8Array(r);for(;n.length-o.length>=0;){const s=n[0];for(let l=0;l<o.length;l++)n[l]^=t.mul(o[l],s);let a=0;for(;a<n.length&&n[a]===0;)a++;n=n.slice(a)}return n},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let n=0;n<r;n++)o=e.mul(o,new Uint8Array([1,t.exp(n)]));return o}})(yt)),yt}var vt,un;function Ti(){if(un)return vt;un=1;const e=Si();function t(i){this.genPoly=void 0,this.degree=i,this.degree&&this.initialize(this.degree)}return t.prototype.initialize=function(r){this.degree=r,this.genPoly=e.generateECPolynomial(this.degree)},t.prototype.encode=function(r){if(!this.genPoly)throw new Error("Encoder not initialized");const o=new Uint8Array(r.length+this.degree);o.set(r);const n=e.mod(o,this.genPoly),s=this.degree-n.length;if(s>0){const a=new Uint8Array(this.degree);return a.set(n,s),a}return n},vt=t,vt}var $t={},Ct={},xt={},dn;function Mn(){return dn||(dn=1,xt.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40}),xt}var te={},hn;function zn(){if(hn)return te;hn=1;const e="[0-9]+",t="[A-Z $%*+\\-./:]+";let i="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";i=i.replace(/u/g,"\\u");const r="(?:(?![A-Z0-9 $%*+\\-./:]|"+i+`)(?:.|[\r
]))+`;te.KANJI=new RegExp(i,"g"),te.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),te.BYTE=new RegExp(r,"g"),te.NUMERIC=new RegExp(e,"g"),te.ALPHANUMERIC=new RegExp(t,"g");const o=new RegExp("^"+i+"$"),n=new RegExp("^"+e+"$"),s=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return te.testKanji=function(l){return o.test(l)},te.testNumeric=function(l){return n.test(l)},te.testAlphanumeric=function(l){return s.test(l)},te}var fn;function Ie(){return fn||(fn=1,(function(e){const t=Mn(),i=zn();e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,s){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?n.ccBits[0]:s<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(n,s){if(e.isValid(n))return n;try{return r(n)}catch{return s}}})(Ct)),Ct}var pn;function _i(){return pn||(pn=1,(function(e){const t=_e(),i=Dn(),r=zt(),o=Ie(),n=Mn(),s=7973,a=t.getBCHDigit(s);function l(C,m,x){for(let h=1;h<=40;h++)if(m<=e.getCapacity(h,x,C))return h}function c(C,m){return o.getCharCountIndicator(C,m)+4}function w(C,m){let x=0;return C.forEach(function(h){const b=c(h.mode,m);x+=b+h.getBitsLength()}),x}function E(C,m){for(let x=1;x<=40;x++)if(w(C,x)<=e.getCapacity(x,m,o.MIXED))return x}e.from=function(m,x){return n.isValid(m)?parseInt(m,10):x},e.getCapacity=function(m,x,h){if(!n.isValid(m))throw new Error("Invalid QR Code version");typeof h>"u"&&(h=o.BYTE);const b=t.getSymbolTotalCodewords(m),p=i.getTotalCodewordsCount(m,x),g=(b-p)*8;if(h===o.MIXED)return g;const y=g-c(h,m);switch(h){case o.NUMERIC:return Math.floor(y/10*3);case o.ALPHANUMERIC:return Math.floor(y/11*2);case o.KANJI:return Math.floor(y/13);case o.BYTE:default:return Math.floor(y/8)}},e.getBestVersionForData=function(m,x){let h;const b=r.from(x,r.M);if(Array.isArray(m)){if(m.length>1)return E(m,b);if(m.length===0)return 1;h=m[0]}else h=m;return l(h.mode,h.getLength(),b)},e.getEncodedBits=function(m){if(!n.isValid(m)||m<7)throw new Error("Invalid QR Code version");let x=m<<12;for(;t.getBCHDigit(x)-a>=0;)x^=s<<t.getBCHDigit(x)-a;return m<<12|x}})($t)),$t}var Et={},gn;function Ii(){if(gn)return Et;gn=1;const e=_e(),t=1335,i=21522,r=e.getBCHDigit(t);return Et.getEncodedBits=function(n,s){const a=n.bit<<3|s;let l=a<<10;for(;e.getBCHDigit(l)-r>=0;)l^=t<<e.getBCHDigit(l)-r;return(a<<10|l)^i},Et}var Rt={},St,mn;function Wi(){if(mn)return St;mn=1;const e=Ie();function t(i){this.mode=e.NUMERIC,this.data=i.toString()}return t.getBitsLength=function(r){return 10*Math.floor(r/3)+(r%3?r%3*3+1:0)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){let o,n,s;for(o=0;o+3<=this.data.length;o+=3)n=this.data.substr(o,3),s=parseInt(n,10),r.put(s,10);const a=this.data.length-o;a>0&&(n=this.data.substr(o),s=parseInt(n,10),r.put(s,a*3+1))},St=t,St}var Tt,wn;function ki(){if(wn)return Tt;wn=1;const e=Ie(),t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(r){this.mode=e.ALPHANUMERIC,this.data=r}return i.getBitsLength=function(o){return 11*Math.floor(o/2)+6*(o%2)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(o){let n;for(n=0;n+2<=this.data.length;n+=2){let s=t.indexOf(this.data[n])*45;s+=t.indexOf(this.data[n+1]),o.put(s,11)}this.data.length%2&&o.put(t.indexOf(this.data[n]),6)},Tt=i,Tt}var _t,bn;function Ai(){return bn||(bn=1,_t=function(t){for(var i=[],r=t.length,o=0;o<r;o++){var n=t.charCodeAt(o);if(n>=55296&&n<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(n=(n-55296)*1024+s-56320+65536,o+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer}),_t}var It,yn;function Bi(){if(yn)return It;yn=1;const e=Ai(),t=Ie();function i(r){this.mode=t.BYTE,typeof r=="string"&&(r=e(r)),this.data=new Uint8Array(r)}return i.getBitsLength=function(o){return o*8},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(r){for(let o=0,n=this.data.length;o<n;o++)r.put(this.data[o],8)},It=i,It}var Wt,vn;function Pi(){if(vn)return Wt;vn=1;const e=Ie(),t=_e();function i(r){this.mode=e.KANJI,this.data=r}return i.getBitsLength=function(o){return o*13},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(r){let o;for(o=0;o<this.data.length;o++){let n=t.toSJIS(this.data[o]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[o]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),r.put(n,13)}},Wt=i,Wt}var $n;function Li(){return $n||($n=1,(function(e){const t=Ie(),i=Wi(),r=ki(),o=Bi(),n=Pi(),s=zn(),a=_e(),l=ri();function c(p){return unescape(encodeURIComponent(p)).length}function w(p,g,y){const f=[];let D;for(;(D=p.exec(y))!==null;)f.push({data:D[0],index:D.index,mode:g,length:D[0].length});return f}function E(p){const g=w(s.NUMERIC,t.NUMERIC,p),y=w(s.ALPHANUMERIC,t.ALPHANUMERIC,p);let f,D;return a.isKanjiModeEnabled()?(f=w(s.BYTE,t.BYTE,p),D=w(s.KANJI,t.KANJI,p)):(f=w(s.BYTE_KANJI,t.BYTE,p),D=[]),g.concat(y,f,D).sort(function(I,T){return I.index-T.index}).map(function(I){return{data:I.data,mode:I.mode,length:I.length}})}function C(p,g){switch(g){case t.NUMERIC:return i.getBitsLength(p);case t.ALPHANUMERIC:return r.getBitsLength(p);case t.KANJI:return n.getBitsLength(p);case t.BYTE:return o.getBitsLength(p)}}function m(p){return p.reduce(function(g,y){const f=g.length-1>=0?g[g.length-1]:null;return f&&f.mode===y.mode?(g[g.length-1].data+=y.data,g):(g.push(y),g)},[])}function x(p){const g=[];for(let y=0;y<p.length;y++){const f=p[y];switch(f.mode){case t.NUMERIC:g.push([f,{data:f.data,mode:t.ALPHANUMERIC,length:f.length},{data:f.data,mode:t.BYTE,length:f.length}]);break;case t.ALPHANUMERIC:g.push([f,{data:f.data,mode:t.BYTE,length:f.length}]);break;case t.KANJI:g.push([f,{data:f.data,mode:t.BYTE,length:c(f.data)}]);break;case t.BYTE:g.push([{data:f.data,mode:t.BYTE,length:c(f.data)}])}}return g}function h(p,g){const y={},f={start:{}};let D=["start"];for(let $=0;$<p.length;$++){const I=p[$],T=[];for(let v=0;v<I.length;v++){const k=I[v],R=""+$+v;T.push(R),y[R]={node:k,lastCount:0},f[R]={};for(let W=0;W<D.length;W++){const S=D[W];y[S]&&y[S].node.mode===k.mode?(f[S][R]=C(y[S].lastCount+k.length,k.mode)-C(y[S].lastCount,k.mode),y[S].lastCount+=k.length):(y[S]&&(y[S].lastCount=k.length),f[S][R]=C(k.length,k.mode)+4+t.getCharCountIndicator(k.mode,g))}}D=T}for(let $=0;$<D.length;$++)f[D[$]].end=0;return{map:f,table:y}}function b(p,g){let y;const f=t.getBestModeForData(p);if(y=t.from(g,f),y!==t.BYTE&&y.bit<f.bit)throw new Error('"'+p+'" cannot be encoded with mode '+t.toString(y)+`.
 Suggested mode is: `+t.toString(f));switch(y===t.KANJI&&!a.isKanjiModeEnabled()&&(y=t.BYTE),y){case t.NUMERIC:return new i(p);case t.ALPHANUMERIC:return new r(p);case t.KANJI:return new n(p);case t.BYTE:return new o(p)}}e.fromArray=function(g){return g.reduce(function(y,f){return typeof f=="string"?y.push(b(f,null)):f.data&&y.push(b(f.data,f.mode)),y},[])},e.fromString=function(g,y){const f=E(g,a.isKanjiModeEnabled()),D=x(f),$=h(D,y),I=l.find_path($.map,"start","end"),T=[];for(let v=1;v<I.length-1;v++)T.push($.table[I[v]].node);return e.fromArray(m(T))},e.rawSplit=function(g){return e.fromArray(E(g,a.isKanjiModeEnabled()))}})(Rt)),Rt}var Cn;function Ni(){if(Cn)return ht;Cn=1;const e=_e(),t=zt(),i=vi(),r=$i(),o=Ci(),n=xi(),s=Ei(),a=Dn(),l=Ti(),c=_i(),w=Ii(),E=Ie(),C=Li();function m($,I){const T=$.size,v=n.getPositions(I);for(let k=0;k<v.length;k++){const R=v[k][0],W=v[k][1];for(let S=-1;S<=7;S++)if(!(R+S<=-1||T<=R+S))for(let A=-1;A<=7;A++)W+A<=-1||T<=W+A||(S>=0&&S<=6&&(A===0||A===6)||A>=0&&A<=6&&(S===0||S===6)||S>=2&&S<=4&&A>=2&&A<=4?$.set(R+S,W+A,!0,!0):$.set(R+S,W+A,!1,!0))}}function x($){const I=$.size;for(let T=8;T<I-8;T++){const v=T%2===0;$.set(T,6,v,!0),$.set(6,T,v,!0)}}function h($,I){const T=o.getPositions(I);for(let v=0;v<T.length;v++){const k=T[v][0],R=T[v][1];for(let W=-2;W<=2;W++)for(let S=-2;S<=2;S++)W===-2||W===2||S===-2||S===2||W===0&&S===0?$.set(k+W,R+S,!0,!0):$.set(k+W,R+S,!1,!0)}}function b($,I){const T=$.size,v=c.getEncodedBits(I);let k,R,W;for(let S=0;S<18;S++)k=Math.floor(S/3),R=S%3+T-8-3,W=(v>>S&1)===1,$.set(k,R,W,!0),$.set(R,k,W,!0)}function p($,I,T){const v=$.size,k=w.getEncodedBits(I,T);let R,W;for(R=0;R<15;R++)W=(k>>R&1)===1,R<6?$.set(R,8,W,!0):R<8?$.set(R+1,8,W,!0):$.set(v-15+R,8,W,!0),R<8?$.set(8,v-R-1,W,!0):R<9?$.set(8,15-R-1+1,W,!0):$.set(8,15-R-1,W,!0);$.set(v-8,8,1,!0)}function g($,I){const T=$.size;let v=-1,k=T-1,R=7,W=0;for(let S=T-1;S>0;S-=2)for(S===6&&S--;;){for(let A=0;A<2;A++)if(!$.isReserved(k,S-A)){let pe=!1;W<I.length&&(pe=(I[W]>>>R&1)===1),$.set(k,S-A,pe),R--,R===-1&&(W++,R=7)}if(k+=v,k<0||T<=k){k-=v,v=-v;break}}}function y($,I,T){const v=new i;T.forEach(function(A){v.put(A.mode.bit,4),v.put(A.getLength(),E.getCharCountIndicator(A.mode,$)),A.write(v)});const k=e.getSymbolTotalCodewords($),R=a.getTotalCodewordsCount($,I),W=(k-R)*8;for(v.getLengthInBits()+4<=W&&v.put(0,4);v.getLengthInBits()%8!==0;)v.putBit(0);const S=(W-v.getLengthInBits())/8;for(let A=0;A<S;A++)v.put(A%2?17:236,8);return f(v,$,I)}function f($,I,T){const v=e.getSymbolTotalCodewords(I),k=a.getTotalCodewordsCount(I,T),R=v-k,W=a.getBlocksCount(I,T),S=v%W,A=W-S,pe=Math.floor(v/W),Oe=Math.floor(R/W),Gn=Oe+1,Vt=pe-Oe,Qn=new l(Vt);let at=0;const He=new Array(W),Ht=new Array(W);let lt=0;const Yn=new Uint8Array($.buffer);for(let ke=0;ke<W;ke++){const ut=ke<A?Oe:Gn;He[ke]=Yn.slice(at,at+ut),Ht[ke]=Qn.encode(He[ke]),at+=ut,lt=Math.max(lt,ut)}const ct=new Uint8Array(v);let Kt=0,se,ae;for(se=0;se<lt;se++)for(ae=0;ae<W;ae++)se<He[ae].length&&(ct[Kt++]=He[ae][se]);for(se=0;se<Vt;se++)for(ae=0;ae<W;ae++)ct[Kt++]=Ht[ae][se];return ct}function D($,I,T,v){let k;if(Array.isArray($))k=C.fromArray($);else if(typeof $=="string"){let pe=I;if(!pe){const Oe=C.rawSplit($);pe=c.getBestVersionForData(Oe,T)}k=C.fromString($,pe||40)}else throw new Error("Invalid data");const R=c.getBestVersionForData(k,T);if(!R)throw new Error("The amount of data is too big to be stored in a QR Code");if(!I)I=R;else if(I<R)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+R+`.
`);const W=y(I,T,k),S=e.getSymbolSize(I),A=new r(S);return m(A,I),x(A),h(A,I),p(A,T,0),I>=7&&b(A,I),g(A,W),isNaN(v)&&(v=s.getBestMask(A,p.bind(null,A,T))),s.applyMask(v,A),p(A,T,v),{modules:A,version:I,errorCorrectionLevel:T,maskPattern:v,segments:k}}return ht.create=function(I,T){if(typeof I>"u"||I==="")throw new Error("No input text");let v=t.M,k,R;return typeof T<"u"&&(v=t.from(T.errorCorrectionLevel,t.M),k=c.from(T.version),R=s.from(T.maskPattern),T.toSJISFunc&&e.setToSJISFunction(T.toSJISFunc)),D(I,k,v,R)},ht}var kt={},At={},xn;function jn(){return xn||(xn=1,(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:n,scale:n?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const n=e.getScale(r,o);return Math.floor((r+o.margin*2)*n)},e.qrToImageData=function(r,o,n){const s=o.modules.size,a=o.modules.data,l=e.getScale(s,n),c=Math.floor((s+n.margin*2)*l),w=n.margin*l,E=[n.color.light,n.color.dark];for(let C=0;C<c;C++)for(let m=0;m<c;m++){let x=(C*c+m)*4,h=n.color.light;if(C>=w&&m>=w&&C<c-w&&m<c-w){const b=Math.floor((C-w)/l),p=Math.floor((m-w)/l);h=E[a[b*s+p]?1:0]}r[x++]=h.r,r[x++]=h.g,r[x++]=h.b,r[x]=h.a}}})(At)),At}var En;function Oi(){return En||(En=1,(function(e){const t=jn();function i(o,n,s){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,s,a){let l=a,c=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(c=r()),l=t.getOptions(l);const w=t.getImageWidth(n.modules.size,l),E=c.getContext("2d"),C=E.createImageData(w,w);return t.qrToImageData(C.data,n,l),i(E,c,w),E.putImageData(C,0,0),c},e.renderToDataURL=function(n,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const c=e.render(n,s,l),w=l.type||"image/png",E=l.rendererOpts||{};return c.toDataURL(w,E.quality)}})(kt)),kt}var Bt={},Rn;function Di(){if(Rn)return Bt;Rn=1;const e=jn();function t(o,n){const s=o.a/255,a=n+'="'+o.hex+'"';return s<1?a+" "+n+'-opacity="'+s.toFixed(2).slice(1)+'"':a}function i(o,n,s){let a=o+n;return typeof s<"u"&&(a+=" "+s),a}function r(o,n,s){let a="",l=0,c=!1,w=0;for(let E=0;E<o.length;E++){const C=Math.floor(E%n),m=Math.floor(E/n);!C&&!c&&(c=!0),o[E]?(w++,E>0&&C>0&&o[E-1]||(a+=c?i("M",C+s,.5+m+s):i("m",l,0),l=0,c=!1),C+1<n&&o[E+1]||(a+=i("h",w),w=0)):l++}return a}return Bt.render=function(n,s,a){const l=e.getOptions(s),c=n.modules.size,w=n.modules.data,E=c+l.margin*2,C=l.color.light.a?"<path "+t(l.color.light,"fill")+' d="M0 0h'+E+"v"+E+'H0z"/>':"",m="<path "+t(l.color.dark,"stroke")+' d="'+r(w,c,l.margin)+'"/>',x='viewBox="0 0 '+E+" "+E+'"',b='<svg xmlns="http://www.w3.org/2000/svg" '+(l.width?'width="'+l.width+'" height="'+l.width+'" ':"")+x+' shape-rendering="crispEdges">'+C+m+`</svg>
`;return typeof a=="function"&&a(null,b),b},Bt}var Sn;function Mi(){if(Sn)return Ae;Sn=1;const e=yi(),t=Ni(),i=Oi(),r=Di();function o(n,s,a,l,c){const w=[].slice.call(arguments,1),E=w.length,C=typeof w[E-1]=="function";if(!C&&!e())throw new Error("Callback required as last argument");if(C){if(E<2)throw new Error("Too few arguments provided");E===2?(c=a,a=s,s=l=void 0):E===3&&(s.getContext&&typeof c>"u"?(c=l,l=void 0):(c=l,l=a,a=s,s=void 0))}else{if(E<1)throw new Error("Too few arguments provided");return E===1?(a=s,s=l=void 0):E===2&&!s.getContext&&(l=a,a=s,s=void 0),new Promise(function(m,x){try{const h=t.create(a,l);m(n(h,s,l))}catch(h){x(h)}})}try{const m=t.create(a,l);c(null,n(m,s,l))}catch(m){c(m)}}return Ae.create=t.create,Ae.toCanvas=o.bind(null,i.render),Ae.toDataURL=o.bind(null,i.renderToDataURL),Ae.toString=o.bind(null,function(n,s,a){return r.render(n,a)}),Ae}var zi=Mi();const ji=ii(zi),Ui=.1,Tn=2.5,le=7;function Pt(e,t,i){return e===t?!1:(e-t<0?t-e:e-t)<=i+Ui}function qi(e,t){const i=Array.prototype.slice.call(ji.create(e,{errorCorrectionLevel:t}).modules.data,0),r=Math.sqrt(i.length);return i.reduce((o,n,s)=>(s%r===0?o.push([n]):o[o.length-1].push(n))&&o,[])}const Fi={generate({uri:e,size:t,logoSize:i,padding:r=8,dotColor:o="var(--apkt-colors-black)"}){const s=[],a=qi(e,"Q"),l=(t-2*r)/a.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:h,y:b})=>{const p=(a.length-le)*l*h+r,g=(a.length-le)*l*b+r,y=.45;for(let f=0;f<c.length;f+=1){const D=l*(le-f*2);s.push(Me`
            <rect
              fill=${f===2?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${f===0?D-10:D}
              rx= ${f===0?(D-10)*y:D*y}
              ry= ${f===0?(D-10)*y:D*y}
              stroke=${o}
              stroke-width=${f===0?10:0}
              height=${f===0?D-10:D}
              x= ${f===0?g+l*f+10/2:g+l*f}
              y= ${f===0?p+l*f+10/2:p+l*f}
            />
          `)}});const w=Math.floor((i+25)/l),E=a.length/2-w/2,C=a.length/2+w/2-1,m=[];a.forEach((h,b)=>{h.forEach((p,g)=>{if(a[b][g]&&!(b<le&&g<le||b>a.length-(le+1)&&g<le||b<le&&g>a.length-(le+1))&&!(b>E&&b<C&&g>E&&g<C)){const y=b*l+l/2+r,f=g*l+l/2+r;m.push([y,f])}})});const x={};return m.forEach(([h,b])=>{x[h]?x[h]?.push(b):x[h]=[b]}),Object.entries(x).map(([h,b])=>{const p=b.filter(g=>b.every(y=>!Pt(g,y,l)));return[Number(h),p]}).forEach(([h,b])=>{b.forEach(p=>{s.push(Me`<circle cx=${h} cy=${p} fill=${o} r=${l/Tn} />`)})}),Object.entries(x).filter(([h,b])=>b.length>1).map(([h,b])=>{const p=b.filter(g=>b.some(y=>Pt(g,y,l)));return[Number(h),p]}).map(([h,b])=>{b.sort((g,y)=>g<y?-1:1);const p=[];for(const g of b){const y=p.find(f=>f.some(D=>Pt(g,D,l)));y?y.push(g):p.push([g])}return[h,p.map(g=>[g[0],g[g.length-1]])]}).forEach(([h,b])=>{b.forEach(([p,g])=>{s.push(Me`
              <line
                x1=${h}
                x2=${h}
                y1=${p}
                y2=${g}
                stroke=${o}
                stroke-width=${l/(Tn/2)}
                stroke-linecap="round"
              />
            `)})}),s}},Vi=j`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:e})=>e.white};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var be=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let ne=class extends M{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,u`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return Me`
      <svg height=${this.size} width=${this.size}>
        ${Fi.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?u`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?u`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:u`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};ne.styles=[G,Vi];be([d()],ne.prototype,"uri",void 0);be([d({type:Number})],ne.prototype,"size",void 0);be([d()],ne.prototype,"theme",void 0);be([d()],ne.prototype,"imageSrc",void 0);be([d()],ne.prototype,"alt",void 0);be([d({type:Boolean})],ne.prototype,"arenaClear",void 0);be([d({type:Boolean})],ne.prototype,"farcaster",void 0);ne=be([O("wui-qr-code")],ne);const Hi=j`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundSecondary} 0%,
      ${({tokens:e})=>e.theme.foregroundTertiary} 50%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1s ease-in-out infinite;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;var Fe=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Re=class extends M{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",u`<slot></slot>`}};Re.styles=[Hi];Fe([d()],Re.prototype,"width",void 0);Fe([d()],Re.prototype,"height",void 0);Fe([d()],Re.prototype,"variant",void 0);Fe([d({type:Boolean})],Re.prototype,"rounded",void 0);Re=Fe([O("wui-shimmer")],Re);const Ki=j`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var Un=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Xe=class extends U{constructor(){super(),this.basic=!1,this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate)}firstUpdated(){this.basic||F.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:B.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(t=>t()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,i=this.wallet?this.wallet.name:void 0;L.setWcLinking(void 0),L.setRecentWallet(this.wallet);let r=this.uri;if(this.wallet?.mobile_link){const{redirect:o}=P.formatNativeUrl(this.wallet?.mobile_link,this.uri,null);r=o}return u` <wui-qr-code
      size=${t}
      theme=${Nt.state.themeMode}
      uri=${r}
      imageSrc=${z(we.getWalletImage(this.wallet))}
      color=${z(Nt.state.themeVariables["--w3m-qr-color"])}
      alt=${z(i)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return u`<wui-button
      .disabled=${t}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};Xe.styles=Ki;Un([d({type:Boolean})],Xe.prototype,"basic",void 0);Xe=Un([O("w3m-connecting-wc-qrcode")],Xe);var Gi=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let _n=class extends M{constructor(){if(super(),this.wallet=B.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");F.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:B.state.view}})}render(){return u`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${z(we.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};_n=Gi([O("w3m-connecting-wc-unsupported")],_n);var qn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Dt=class extends U{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=Pn.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(L.subscribeKey("wcUri",()=>{this.updateLoadingState()})),F.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:B.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:i}=this.wallet,{redirect:r,href:o}=P.formatUniversalUrl(t,this.uri);L.setWcLinking({name:i,href:o}),L.setRecentWallet(this.wallet),P.openHref(r,"_blank")}catch{this.error=!0}}};qn([_()],Dt.prototype,"isLoading",void 0);Dt=qn([O("w3m-connecting-wc-web")],Dt);const Qi=j`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var We=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let de=class extends M{constructor(){super(),this.wallet=B.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!q.state.siwx,this.remoteFeatures=q.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(q.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return q.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),u`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return!this.remoteFeatures?.reownBranding||!this.displayBranding?null:u`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(t=!1){if(!(this.platform==="browser"||q.state.manualWCControl&&!t))try{const{wcPairingExpiry:i,status:r}=L.state,{redirectView:o}=B.state.data??{};if(t||q.state.enableEmbedded||P.isPairingExpired(i)||r==="connecting"){const n=L.getConnections(ge.state.activeChain),s=this.remoteFeatures?.multiWallet,a=n.length>0;await L.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(a&&s?(B.replace("ProfileWallets"),je.showSuccess("New Wallet Added")):o?B.replace(o):kn.close())}}catch(i){if(i instanceof Error&&i.message.includes("An error occurred when attempting to switch chain")&&!q.state.enableNetworkSwitch&&ge.state.activeChain){ge.setActiveCaipNetwork(Xn.getUnsupportedNetwork(`${ge.state.activeChain}:${ge.state.activeCaipNetwork?.id}`)),ge.showUnsupportedChainUI();return}i instanceof An&&i.originalName===Bn.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?F.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:i.message}}):F.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:i?.message??"Unknown"}}),L.setWcError(!0),je.showError(i.message??"Connection error"),L.resetWcConnection(),B.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:i,webapp_link:r,injected:o,rdns:n}=this.wallet,s=o?.map(({injected_id:x})=>x).filter(Boolean),a=[...n?[n]:s??[]],l=q.state.isUniversalProvider?!1:a.length,c=t,w=r,E=L.checkInstalled(a),C=l&&E,m=i&&!P.isMobile();C&&!ge.state.noAdapters&&this.platforms.push("browser"),c&&this.platforms.push(P.isMobile()?"mobile":"qrcode"),w&&this.platforms.push("web"),m&&this.platforms.push("desktop"),!C&&l&&!ge.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return u`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return u`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return u`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return u`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return u`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return u`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?u`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){const i=this.shadowRoot?.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};de.styles=Qi;We([_()],de.prototype,"platform",void 0);We([_()],de.prototype,"platforms",void 0);We([_()],de.prototype,"isSiwxEnabled",void 0);We([_()],de.prototype,"remoteFeatures",void 0);We([d({type:Boolean})],de.prototype,"displayBranding",void 0);We([d({type:Boolean})],de.prototype,"basic",void 0);de=We([O("w3m-connecting-wc-view")],de);var jt=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Ze=class extends M{constructor(){super(),this.unsubscribe=[],this.isMobile=P.isMobile(),this.remoteFeatures=q.state.remoteFeatures,this.unsubscribe.push(q.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(this.isMobile){const{featured:t,recommended:i}=N.state,{customWallets:r}=q.state,o=Zn.getRecentWallets(),n=t.length||i.length||r?.length||o.length;return u`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${n?u`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return u`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?u` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};jt([_()],Ze.prototype,"isMobile",void 0);jt([_()],Ze.prototype,"remoteFeatures",void 0);Ze=jt([O("w3m-connecting-wc-basic-view")],Ze);const Yi=e=>e.strings===void 0;const ze=(e,t)=>{const i=e._$AN;if(i===void 0)return!1;for(const r of i)r._$AO?.(t,!1),ze(r,t);return!0},et=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},Fn=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Zi(t)}};function Ji(e){this._$AN!==void 0?(et(this),this._$AM=e,Fn(this)):this._$AM=e}function Xi(e,t=!1,i=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(r))for(let n=i;n<r.length;n++)ze(r[n],!1),et(r[n]);else r!=null&&(ze(r,!1),et(r));else ze(this,e)}const Zi=e=>{e.type==ti.CHILD&&(e._$AP??=Xi,e._$AQ??=Ji)};class er extends ei{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,r){super._$AT(t,i,r),Fn(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(ze(this,t),et(this))}setValue(t){if(Yi(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const Ut=()=>new tr;class tr{}const Lt=new WeakMap,qt=ni(class extends er{render(e){return Qt}update(e,[t]){const i=t!==this.G;return i&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Qt}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=Lt.get(t);i===void 0&&(i=new WeakMap,Lt.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Lt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),nr=j`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var st=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Pe=class extends M{constructor(){super(...arguments),this.inputElementRef=Ut(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return u`
      <label data-size=${this.size}>
        <input
          ${qt(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};Pe.styles=[G,he,nr];st([d({type:Boolean})],Pe.prototype,"checked",void 0);st([d({type:Boolean})],Pe.prototype,"disabled",void 0);st([d()],Pe.prototype,"size",void 0);Pe=st([O("wui-toggle")],Pe);const ir=j`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var Vn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let tt=class extends M{constructor(){super(...arguments),this.checked=!1}render(){return u`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(t){t.stopPropagation(),this.checked=t.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};tt.styles=[G,he,ir];Vn([d({type:Boolean})],tt.prototype,"checked",void 0);tt=Vn([O("wui-certified-switch")],tt);const rr=j`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var J=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let V=class extends M{constructor(){super(...arguments),this.inputElementRef=Ut(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return u` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${qt(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${z(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?u`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){return this.onSubmit?u`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${this.onSubmit?.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?u`<wui-icon name="spinner" size="md"></wui-icon>`:u`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?u`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?u`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};V.styles=[G,he,rr];J([d()],V.prototype,"icon",void 0);J([d({type:Boolean})],V.prototype,"disabled",void 0);J([d({type:Boolean})],V.prototype,"loading",void 0);J([d()],V.prototype,"placeholder",void 0);J([d()],V.prototype,"type",void 0);J([d()],V.prototype,"value",void 0);J([d()],V.prototype,"errorText",void 0);J([d()],V.prototype,"warningText",void 0);J([d()],V.prototype,"onSubmit",void 0);J([d()],V.prototype,"size",void 0);J([d({attribute:!1})],V.prototype,"onKeyDown",void 0);V=J([O("wui-input-text")],V);const or=j`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var Hn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let nt=class extends M{constructor(){super(...arguments),this.inputComponentRef=Ut(),this.inputValue=""}render(){return u`
      <wui-input-text
        ${qt(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?u`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(t){this.inputValue=t.detail||""}clearValue(){const i=this.inputComponentRef.value?.inputElementRef.value;i&&(i.value="",this.inputValue="",i.focus(),i.dispatchEvent(new Event("input")))}};nt.styles=[G,or];Hn([d()],nt.prototype,"inputValue",void 0);nt=Hn([O("wui-search-bar")],nt);const sr=Me`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,ar=j`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Kn=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let it=class extends M{constructor(){super(...arguments),this.type="wallet"}render(){return u`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?u` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${sr}`:u`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};it.styles=[G,he,ar];Kn([d()],it.prototype,"type",void 0);it=Kn([O("wui-card-select-loader")],it);const lr=Ln`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var X=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let H=class extends M{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&ce.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ce.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ce.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ce.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ce.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ce.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ce.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ce.getSpacingStyles(this.margin,3)};
    `,u`<slot></slot>`}};H.styles=[G,lr];X([d()],H.prototype,"gridTemplateRows",void 0);X([d()],H.prototype,"gridTemplateColumns",void 0);X([d()],H.prototype,"justifyItems",void 0);X([d()],H.prototype,"alignItems",void 0);X([d()],H.prototype,"justifyContent",void 0);X([d()],H.prototype,"alignContent",void 0);X([d()],H.prototype,"columnGap",void 0);X([d()],H.prototype,"rowGap",void 0);X([d()],H.prototype,"gap",void 0);X([d()],H.prototype,"padding",void 0);X([d()],H.prototype,"margin",void 0);H=X([O("wui-grid")],H);const cr=j`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var re=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Q=class extends M{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const t=this.wallet?.badge_type==="certified";return u`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${z(t?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${t?u`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():u`
      <wui-wallet-image
        size="lg"
        imageSrc=${z(this.imageSrc)}
        name=${z(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return u`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=we.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await we.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){!this.wallet||this.isImpressed||(this.isImpressed=!0,F.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:B.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};Q.styles=cr;re([_()],Q.prototype,"visible",void 0);re([_()],Q.prototype,"imageSrc",void 0);re([_()],Q.prototype,"imageLoading",void 0);re([_()],Q.prototype,"isImpressed",void 0);re([d()],Q.prototype,"explorerId",void 0);re([d()],Q.prototype,"walletQuery",void 0);re([d()],Q.prototype,"certified",void 0);re([d()],Q.prototype,"displayIndex",void 0);re([d({type:Object})],Q.prototype,"wallet",void 0);Q=re([O("w3m-all-wallets-list-item")],Q);const ur=j`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var ye=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};const In="local-paginator";let ie=class extends M{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!N.state.wallets.length,this.wallets=N.state.wallets,this.recommended=N.state.recommended,this.featured=N.state.featured,this.filteredWallets=N.state.filteredWallets,this.mobileFullScreen=q.state.enableMobileFullScreen,this.unsubscribe.push(N.subscribeKey("wallets",t=>this.wallets=t),N.subscribeKey("recommended",t=>this.recommended=t),N.subscribeKey("featured",t=>this.featured=t),N.subscribeKey("filteredWallets",t=>this.filteredWallets=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.paginationObserver?.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),u`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const t=this.shadowRoot?.querySelector("wui-grid");t&&(await N.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,i){return[...Array(t)].map(()=>u`
        <wui-card-select-loader type="wallet" id=${z(i)}></wui-card-select-loader>
      `)}getWallets(){const t=[...this.featured,...this.recommended];this.filteredWallets?.length>0?t.push(...this.filteredWallets):t.push(...this.wallets);const i=P.uniqueBy(t,"id"),r=Ot.markWalletsAsInstalled(i);return Ot.markWalletsWithDisplayIndex(r)}walletsTemplate(){return this.getWallets().map((i,r)=>u`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${i.id}"
          @click=${()=>this.onConnectWallet(i)}
          .wallet=${i}
          explorerId=${i.id}
          certified=${this.badge==="certified"}
          displayIndex=${r}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:i,featured:r,count:o,mobileFilteredOutWalletsLength:n}=N.state,s=window.innerWidth<352?3:4,a=t.length+i.length;let c=Math.ceil(a/s)*s-a+s;return c-=t.length?r.length%s:0,o===0&&r.length>0?null:o===0||[...r,...t,...i].length<o-(n??0)?this.shimmerTemplate(c,In):null}createPaginationObserver(){const t=this.shadowRoot?.querySelector(`#${In}`);t&&(this.paginationObserver=new IntersectionObserver(([i])=>{if(i?.isIntersecting&&!this.loading){const{page:r,count:o,wallets:n}=N.state;n.length<o&&N.fetchWalletsByPage({page:r+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){K.selectWalletConnector(t)}};ie.styles=ur;ye([_()],ie.prototype,"loading",void 0);ye([_()],ie.prototype,"wallets",void 0);ye([_()],ie.prototype,"recommended",void 0);ye([_()],ie.prototype,"featured",void 0);ye([_()],ie.prototype,"filteredWallets",void 0);ye([_()],ie.prototype,"badge",void 0);ye([_()],ie.prototype,"mobileFullScreen",void 0);ie=ye([O("w3m-all-wallets-list")],ie);const dr=Ln`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Ve=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Se=class extends M{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=q.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?u`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await N.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=N.state,i=Ot.markWalletsAsInstalled(t);return t.length?u`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${i.map((r,o)=>u`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(r)}
              .wallet=${r}
              data-testid="wallet-search-item-${r.id}"
              explorerId=${r.id}
              certified=${this.badge==="certified"}
              walletQuery=${this.query}
              displayIndex=${o}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:u`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){K.selectWalletConnector(t)}};Se.styles=dr;Ve([_()],Se.prototype,"loading",void 0);Ve([_()],Se.prototype,"mobileFullScreen",void 0);Ve([d()],Se.prototype,"query",void 0);Ve([d()],Se.prototype,"badge",void 0);Se=Ve([O("w3m-all-wallets-search")],Se);var Ft=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let rt=class extends M{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=P.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return u`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge==="certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?u`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:u`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onCertifiedSwitchChange(t){t.detail?(this.badge="certified",je.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return P.isMobile()?u`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){B.push("ConnectingWalletConnect")}};Ft([_()],rt.prototype,"search",void 0);Ft([_()],rt.prototype,"badge",void 0);rt=Ft([O("w3m-all-wallets-view")],rt);const hr=j`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var oe=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Y=class extends M{constructor(){super(...arguments),this.imageSrc="google",this.loading=!1,this.disabled=!1,this.rightIcon=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",u`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        tabindex=${z(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?u`<wui-image
        icon=${this.icon}
        iconColor=${z(this.iconColor)}
        ?boxed=${!0}
        ?rounded=${this.rounded}
      ></wui-image>`:u`<wui-image
      ?boxed=${!0}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      src=${this.imageSrc}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?u`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:u`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};Y.styles=[G,he,hr];oe([d()],Y.prototype,"imageSrc",void 0);oe([d()],Y.prototype,"icon",void 0);oe([d()],Y.prototype,"iconColor",void 0);oe([d({type:Boolean})],Y.prototype,"loading",void 0);oe([d()],Y.prototype,"tabIdx",void 0);oe([d({type:Boolean})],Y.prototype,"disabled",void 0);oe([d({type:Boolean})],Y.prototype,"rightIcon",void 0);oe([d({type:Boolean})],Y.prototype,"rounded",void 0);oe([d({type:Boolean})],Y.prototype,"fullSize",void 0);Y=oe([O("wui-list-item")],Y);var fr=function(e,t,i,r){var o=arguments.length,n=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(o<3?s(n):o>3?s(t,i,n):s(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Wn=class extends M{constructor(){super(...arguments),this.wallet=B.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return u`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?u`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?u`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?u`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?u`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(t){t.href&&this.wallet&&(F.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:t.type}}),P.openHref(t.href,"_blank"))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};Wn=fr([O("w3m-downloads-view")],Wn);export{rt as W3mAllWalletsView,Ze as W3mConnectingWcBasicView,Wn as W3mDownloadsView};
//# sourceMappingURL=basic-BsbTfwNu.js.map
