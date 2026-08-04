import{aO as z,cO as E,d1 as c,d2 as T,d3 as U,d4 as q,d5 as L,j as r,d6 as s,aS as w,d7 as R}from"./index-CwvhYMZj.js";import{b as i}from"./react-vendor-Cp2JmYUv.js";import{V as B,m as D}from"./ModalHeader-D_3-4MRo-Dlc1xzv1.js";import{n as I}from"./Chip-D2-wZOHJ-BouAZwUz.js";const K=({value:e,onChange:u})=>r.jsx("select",{value:e,onChange:u,children:R.map((d=>r.jsxs("option",{value:d.code,children:[d.code," +",d.callCode]},d.code)))}),J=i.forwardRef(((e,u)=>{let d=z(),[y,C]=i.useState(!1),{accountType:k}=E(),[a,h]=i.useState(""),[t,j]=i.useState(e.defaultCountry??d?.intl.defaultCountry??"US"),S=c(a,t),g=T(t),V=U(t),N=q(t),x=!S,[b,f]=i.useState(!1),P=N.length,m=o=>{let n=o.target.value;j(n),h(""),e.onChange&&e.onChange({rawPhoneNumber:a,qualifiedPhoneNumber:s(a,n),countryCode:n,isValid:c(a,t)})},v=(o,n)=>{try{let l=o.replace(/\D/g,"")===a.replace(/\D/g,"")?o:g.input(o);h(l),e.onChange&&e.onChange({rawPhoneNumber:l,qualifiedPhoneNumber:s(o,n),countryCode:n,isValid:c(o,n)})}catch(l){console.error("Error processing phone number:",l)}},p=()=>{f(!0);let o=s(a,t);e.onSubmit({rawPhoneNumber:a,qualifiedPhoneNumber:o,countryCode:t,isValid:c(a,t)}).finally((()=>f(!1)))};return i.useEffect((()=>{if(e.defaultValue){let o=L(e.defaultValue);g.reset(),m({target:{value:o.countryCode}}),v(o.phone,o.countryCode)}}),[e.defaultValue]),r.jsxs(r.Fragment,{children:[r.jsx(F,{children:r.jsxs(O,{$callingCodeLength:P,$stacked:e.stacked,children:[r.jsx(K,{value:t,onChange:m}),r.jsx("input",{ref:u,id:"phone-number-input",className:"login-method-button",type:"tel",placeholder:V,onFocus:()=>C(!0),onChange:o=>{v(o.target.value,t)},onKeyUp:o=>{o.key==="Enter"&&p()},value:a,autoComplete:"tel"}),k!=="phone"||y||e.hideRecent?e.stacked||e.noIncludeSubmitButton?r.jsx("span",{}):r.jsx(B,{isSubmitting:b,onClick:p,disabled:x,children:"Submit"}):r.jsx(I,{color:"gray",children:"Recent"})]})}),e.stacked&&!e.noIncludeSubmitButton?r.jsx(D,{loading:b,loadingText:null,onClick:p,disabled:x,children:"Submit"}):null]})}));let F=w.div`
  width: 100%;
`,O=w.label`
  --country-code-dropdown-width: calc(54px + calc(12 * ${e=>e.$callingCodeLength}px));
  --phone-input-extra-padding-left: calc(12px + calc(3 * ${e=>e.$callingCodeLength}px));
  display: block;
  position: relative;
  width: 100%;

  /* Tablet and Up */
  @media (min-width: 441px) {
    --country-code-dropdown-width: calc(52px + calc(10 * ${e=>e.$callingCodeLength}px));
  }

  && > select {
    font-size: 16px;
    height: 24px;
    position: absolute;
    margin: 13px calc(var(--country-code-dropdown-width) / 4);
    line-height: 24px;
    width: var(--country-code-dropdown-width);
    background-color: var(--privy-color-background);
    background-size: auto;
    background-position-x: right;
    cursor: pointer;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      width: var(--country-code-dropdown-width);
    }

    :focus {
      outline: none;
      box-shadow: none;
    }
  }

  && > input {
    font-size: 16px;
    line-height: 24px;
    color: var(--privy-color-foreground);

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    width: calc(100% - var(--country-code-dropdown-width));

    padding: 12px 88px 12px
      calc(var(--country-code-dropdown-width) + var(--phone-input-extra-padding-left));
    padding-right: ${e=>e.$stacked?"16px":"88px"};
    flex-grow: 1;
    background: var(--privy-color-background);
    border: 1px solid var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
    width: 100%;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }

    :autofill,
    :-webkit-autofill {
      background: var(--privy-color-background);
    }

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
      padding-right: 78px;
    }
  }

  && > :last-child {
    right: 16px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  && > button:last-child {
    right: 0px;
    line-height: 24px;
    padding: 13px 17px;

    :focus {
      outline: none;
      border-color: var(--privy-color-accent);
    }
  }

  && > input::placeholder {
    color: var(--privy-color-foreground-3);
  }
`;export{J as w};
//# sourceMappingURL=ConnectPhoneForm-DugMOYBh-EvKhYFWI.js.map
