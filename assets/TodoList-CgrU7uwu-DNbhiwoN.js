import{aS as i,j as t}from"./index-CwvhYMZj.js";import{t as n}from"./react-vendor-Cp2JmYUv.js";import{X as a}from"./x-CbsRK1rH.js";import{C as c}from"./check-Deqt4hNf.js";const v=i.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px; /* 10px gap between items */
  padding-left: 8px; /* 8px indentation container */
`;i.div`
  &&& {
    margin-left: 6px; /* Center the line under the checkbox (12px/2) */
    border-left: 2px solid var(--privy-color-foreground-4);
    height: 10px; /* 10px H padding between paragraphs */
    margin-top: 0;
    margin-bottom: 0;
  }
`;const g=({children:o,variant:r="default",icon:e})=>{let s=()=>{switch(r){case"success":return"var(--privy-color-icon-success)";case"error":return"var(--privy-color-icon-error)";default:return"var(--privy-color-icon-muted)"}};return t.jsxs(p,{children:[t.jsx(l,{$variant:r,"data-variant":r,children:(()=>{if(e)return n.isValidElement(e)?n.cloneElement(e,{stroke:s(),strokeWidth:2}):e;switch(r){case"success":default:return t.jsx(c,{size:12,stroke:s(),strokeWidth:3});case"error":return t.jsx(a,{size:12,stroke:s(),strokeWidth:3})}})()}),o]})};let l=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({$variant:o})=>{switch(o){case"success":return"var(--privy-color-success-bg, #EAFCEF)";case"error":return"var(--privy-color-error-bg, #FEE2E2)";default:return"var(--privy-color-background-2)"}}};
  flex-shrink: 0;
`,p=i.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start; /* Align all elements to the top */
  text-align: left;
  gap: 8px;

  && {
    a {
      color: var(--privy-color-accent);
    }
  }
`;export{v as a,g as c};
//# sourceMappingURL=TodoList-CgrU7uwu-DNbhiwoN.js.map
