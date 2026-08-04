import{b as t}from"./react-vendor-Cp2JmYUv.js";import{j as r,aS as i}from"./index-CwvhYMZj.js";function a({title:e,titleId:o,...c},l){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":o},c),e?t.createElement("title",{id:o},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"}))}const m=t.forwardRef(a),b=({className:e,checked:o,color:c="var(--privy-color-accent)",...l})=>r.jsx("label",{children:r.jsxs(d,{className:e,children:[r.jsx(n,{checked:o,...l}),r.jsx(p,{color:c,checked:o,children:r.jsx(s,{viewBox:"0 0 24 24",children:r.jsx("polyline",{points:"20 6 9 17 4 12"})})})]})});i.label`
  && {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    text-align: left;
    border-radius: 0.5rem;
    border: 1px solid var(--privy-color-foreground-4);
    width: 100%;
  }
`;let d=i.div`
  display: inline-block;
  vertical-align: middle;
`,s=i.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`,n=i.input.attrs({type:"checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,p=i.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  transition: all 150ms;
  cursor: pointer;
  border-color: ${e=>e.color};
  border-radius: 3px;
  background: ${e=>e.checked?e.color:"var(--privy-color-background)"};

  && {
    /* This is necessary to override css reset for border width */
    border-width: 1px;
  }

  ${n}:focus + & {
    box-shadow: 0 0 0 1px ${e=>e.color};
  }

  ${s} {
    visibility: ${e=>e.checked?"visible":"hidden"};
  }
`;export{m as F,b as o};
//# sourceMappingURL=Checkbox-BhNoOKjX--b4UT1cL.js.map
