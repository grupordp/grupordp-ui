import{j as t}from"./jsx-runtime-5fc188ad.js";import{c as _,b as e}from"./index-b4703c0f.js";import{r as z}from"./index-c0290abd.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-725317a4.js";const F=_("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),a=_("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),N={title:"Form/TextInput",component:e.Input,args:{variant:"default",large:"md"},parameters:{docs:{description:{component:"Component para entrada de dado do usuário em formato de texto."}}},argTypes:{large:{description:"Define o tamanho do componente",defaultValue:"md",options:["sm","md","lg"],control:{type:"select"}},variant:{description:"Define o estilo do componente: background e bordas, por exemplo",defaultValue:"default",options:["default"],control:{type:"select"}},error:{description:"Define estado de erro",defaultValue:!1,options:[!0,!1],control:{type:"select"}}},tags:["autodocs"]},o={render:r=>t.jsxs(e.Root,{...r,children:[t.jsx(e.Icon,{icon:a,variant:r.variant,large:r.large,error:r.error}),t.jsx(e.Input,{placeholder:"Digite seu email",...r})]})},n={render:r=>t.jsx(e.Root,{...r,children:t.jsx(e.Input,{placeholder:"Digite seu email",...r})})},s={args:{large:"sm"},render:r=>t.jsxs(e.Root,{...r,children:[t.jsx(e.Icon,{icon:a,variant:r.variant,large:r.large,error:r.error}),t.jsx(e.Input,{placeholder:"Digite seu email",...r})]})},i={args:{large:"md"},render:r=>t.jsxs(e.Root,{...r,children:[t.jsx(e.Icon,{icon:a,variant:r.variant,large:r.large,error:r.error}),t.jsx(e.Input,{placeholder:"Digite seu email",...r})]})},l={args:{large:"lg"},render:r=>t.jsxs(e.Root,{...r,children:[t.jsx(e.Icon,{icon:a,variant:r.variant,large:r.large,error:r.error}),t.jsx(e.Input,{placeholder:"Digite seu email",...r})]})},c={args:{error:!0},render:r=>t.jsxs(e.Root,{...r,children:[t.jsx(e.Icon,{icon:a,variant:r.variant,large:r.large,error:r.error}),t.jsx(e.Input,{placeholder:"Digite seu email",...r}),t.jsx(e.Actions,{children:t.jsx(e.Status,{large:r.large,error:r.error})})]})},p={args:{error:!1},render:r=>t.jsxs(e.Root,{...r,children:[t.jsx(e.Icon,{icon:a,variant:r.variant,large:r.large,error:r.error}),t.jsx(e.Input,{placeholder:"Digite seu email",...r}),t.jsx(e.Actions,{children:t.jsx(e.Status,{large:r.large,error:r.error})})]})},u={args:{error:void 0},render:r=>{const[d,H]=z.useState(!1);return t.jsxs(e.Root,{...r,children:[t.jsx(e.Icon,{icon:F,variant:r.variant,large:r.large,error:r.error}),t.jsx(e.Input,{placeholder:"Digite sua senha",type:d?"text":"password",...r}),t.jsxs(e.Actions,{children:[t.jsx(e.PasswordAction,{onClick:()=>H(W=>!W),isPasswordHidden:!d,variant:r.variant,large:r.large,error:r.error}),t.jsx(e.Status,{large:r.large,error:r.error})]})]})}};var g,x,m;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <TextInput.Root {...args}>
            <TextInput.Icon icon={Mail} variant={args.variant} large={args.large} error={args.error} />
            <TextInput.Input placeholder='Digite seu email' {...args} />
        </TextInput.Root>
}`,...(m=(x=o.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var I,T,h;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <TextInput.Root {...args}>
            <TextInput.Input placeholder='Digite seu email' {...args} />
        </TextInput.Root>
}`,...(h=(T=n.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var v,j,R;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    large: 'sm'
  },
  render: args => <TextInput.Root {...args}>
            <TextInput.Icon icon={Mail} variant={args.variant} large={args.large} error={args.error} />
            <TextInput.Input placeholder='Digite seu email' {...args} />
        </TextInput.Root>
}`,...(R=(j=s.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var f,D,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    large: 'md'
  },
  render: args => <TextInput.Root {...args}>
            <TextInput.Icon icon={Mail} variant={args.variant} large={args.large} error={args.error} />
            <TextInput.Input placeholder='Digite seu email' {...args} />
        </TextInput.Root>
}`,...(w=(D=i.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var S,y,A;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    large: 'lg'
  },
  render: args => <TextInput.Root {...args}>
            <TextInput.Icon icon={Mail} variant={args.variant} large={args.large} error={args.error} />
            <TextInput.Input placeholder='Digite seu email' {...args} />
        </TextInput.Root>
}`,...(A=(y=l.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var P,k,M;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    error: true
  },
  render: args => <TextInput.Root {...args}>
            <TextInput.Icon icon={Mail} variant={args.variant} large={args.large} error={args.error} />
            <TextInput.Input placeholder='Digite seu email' {...args} />
            <TextInput.Actions>
                <TextInput.Status large={args.large} error={args.error} />
            </TextInput.Actions>
        </TextInput.Root>
}`,...(M=(k=c.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var V,b,L;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    error: false
  },
  render: args => <TextInput.Root {...args}>
            <TextInput.Icon icon={Mail} variant={args.variant} large={args.large} error={args.error} />
            <TextInput.Input placeholder='Digite seu email' {...args} />
            <TextInput.Actions>
                <TextInput.Status large={args.large} error={args.error} />
            </TextInput.Actions>
        </TextInput.Root>
}`,...(L=(b=p.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var E,C,O;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    error: undefined
  },
  render: args => {
    const [isPasswordVisible, setPasswordVisibility] = useState(false);
    return <TextInput.Root {...args}>
                <TextInput.Icon icon={Lock} variant={args.variant} large={args.large} error={args.error} />
                <TextInput.Input placeholder='Digite sua senha' type={isPasswordVisible ? 'text' : 'password'} {...args} />
                <TextInput.Actions>
                    <TextInput.PasswordAction onClick={() => setPasswordVisibility(state => !state)} isPasswordHidden={!isPasswordVisible} variant={args.variant} large={args.large} error={args.error} />
                    <TextInput.Status large={args.large} error={args.error} />
                </TextInput.Actions>
            </TextInput.Root>;
  }
}`,...(O=(C=u.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};const Q=["Default","WithOutIcon","Small","Medium","Large","Error","Success","PasswordAction"];export{o as Default,c as Error,l as Large,i as Medium,u as PasswordAction,s as Small,p as Success,n as WithOutIcon,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=TextInput.stories-784a2615.js.map
