import{j as l,cp as s,aT as e,aS as c}from"./index-CwvhYMZj.js";import{n as t}from"./LoadingSkeleton-U6-3yFwI-T5syb77E.js";const p=({children:o,color:i,isLoading:r,isPulsing:a,...n})=>l.jsx(g,{$color:i,$isLoading:r,$isPulsing:a,...n,children:o});let g=c.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${o=>{let i,r;o.$color==="green"&&(i="var(--privy-color-success-dark)",r="var(--privy-color-success-light)"),o.$color==="red"&&(i="var(--privy-color-error)",r="var(--privy-color-error-light)"),o.$color==="gray"&&(i="var(--privy-color-foreground-2)",r="var(--privy-color-background-2)");let a=s`
      from, to {
        background-color: ${r};
      }

      50% {
        background-color: rgba(${r}, 0.8);
      }
    `;return e`
      color: ${i};
      background-color: ${r};
      ${o.$isPulsing&&e`
        animation: ${a} 3s linear infinite;
      `};
    `}}

  ${t}
`;export{p as n};
//# sourceMappingURL=Chip-D2-wZOHJ-BouAZwUz.js.map
