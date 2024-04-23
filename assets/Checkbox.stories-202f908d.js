import{j as s}from"./jsx-runtime-5fc188ad.js";import{a as o}from"./index-b4703c0f.js";import{r as l}from"./index-c0290abd.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-725317a4.js";const C={title:"Form/Checkbox",component:o.Box,args:{variant:"default",size:"default",isChecked:!1},argTypes:{variant:{options:["default"],control:{type:"select"},description:"Define os estilos do componente",defaultValue:"default"},size:{options:["default"],control:{type:"select"},description:"Define os tamanhos do componente",defaultValue:"default"},isChecked:{options:[!0,!1],control:{type:"select"},description:"Propriedade aplicada somente ao elemento de container",defaultValue:!1}},tags:["autodocs"]},t={args:{},render:e=>{const[i,c]=l.useState(!1);return s.jsx(o.Root,{variant:e.variant,size:e.size,isChecked:i,children:s.jsx(o.Box,{...e,onCheckedChange:()=>c(d=>!d),children:s.jsx(o.Indicator,{variant:e.variant,size:e.size})})})}};var a,r,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [isChecked, setIsChecked] = useState(false);
    return <Checkbox.Root variant={args.variant} size={args.size} isChecked={isChecked}>
                <Checkbox.Box {...args} onCheckedChange={() => setIsChecked(state => !state)}>
                    <Checkbox.Indicator variant={args.variant} size={args.size} />
                </Checkbox.Box>
            </Checkbox.Root>;
  }
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,C as default};
//# sourceMappingURL=Checkbox.stories-202f908d.js.map
