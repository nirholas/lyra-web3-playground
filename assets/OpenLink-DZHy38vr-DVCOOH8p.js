import{j as t,aS as n}from"./index-CwvhYMZj.js";import{b as a}from"./react-vendor-Cp2JmYUv.js";const s=r=>{let[e,o]=a.useState(!1);return t.jsx(i,{color:r.color,href:r.url,target:"_blank",rel:"noreferrer noopener",onClick:()=>{o(!0),setTimeout((()=>o(!1)),1500)},justOpened:e,children:r.text})};let i=n.a`
  display: flex;
  align-items: center;
  gap: 6px;

  && {
    margin: 8px 2px;
    font-size: 14px;
    color: ${r=>r.justOpened?"var(--privy-color-foreground)":r.color||"var(--privy-color-foreground-3)"};
    font-weight: ${r=>r.justOpened?"medium":"normal"};
    transition: color 350ms ease;

    :focus,
    :active {
      background-color: transparent;
      border: none;
      outline: none;
      box-shadow: none;
    }

    :hover {
      color: ${r=>r.justOpened?"var(--privy-color-foreground)":"var(--privy-color-foreground-2)"};
    }

    :active {
      color: 'var(--privy-color-foreground)';
      font-weight: medium;
    }

    @media (max-width: 440px) {
      margin: 12px 2px;
    }
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;export{s as n};
//# sourceMappingURL=OpenLink-DZHy38vr-DVCOOH8p.js.map
