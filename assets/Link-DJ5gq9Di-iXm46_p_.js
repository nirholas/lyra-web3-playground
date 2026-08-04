import{j as s,aS as d}from"./index-CwvhYMZj.js";let c=d.a`
  && {
    color: ${({$variant:r})=>r==="underlined"?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))"};
    font-weight: 400;
    text-decoration: ${({$variant:r})=>r==="underlined"?"underline":"var(--privy-link-navigation-decoration, none)"};
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
    cursor: ${({$disabled:r})=>r?"not-allowed":"pointer"};
    opacity: ${({$disabled:r})=>r?.5:1};

    font-size: ${({$size:r})=>{switch(r){case"xs":return"12px";case"sm":return"14px";default:return"16px"}}};

    line-height: ${({$size:r})=>{switch(r){case"xs":return"18px";case"sm":return"22px";default:return"24px"}}};

    transition:
      color 200ms ease,
      text-decoration-color 200ms ease,
      opacity 200ms ease;

    &:hover {
      color: ${({$variant:r,$disabled:e})=>r==="underlined"?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))"};
      text-decoration: ${({$disabled:r})=>r?"none":"underline"};
      text-underline-offset: 4px;
    }

    &:active {
      color: ${({$variant:r,$disabled:e})=>e?r==="underlined"?"var(--privy-color-foreground)":"var(--privy-link-navigation-color, var(--privy-color-accent))":"var(--privy-color-foreground)"};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px #949df9;
      border-radius: 2px;
    }
  }
`;const p=({size:r="md",variant:e="navigation",disabled:o=!1,as:i,children:a,onClick:t,...l})=>s.jsx(c,{as:i,$size:r,$variant:e,$disabled:o,onClick:n=>{o?n.preventDefault():t?.(n)},...l,children:a});export{p as n};
//# sourceMappingURL=Link-DJ5gq9Di-iXm46_p_.js.map
