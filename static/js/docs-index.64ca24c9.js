(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docs/index.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=t("./node_modules/react/index.js"),s=t.n(o),i=t("./node_modules/@mdx-js/react/dist/index.es.js"),c=t("./node_modules/docz/dist/index.esm.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),u=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),b=t("./node_modules/classnames/index.js"),p=t.n(b);function m(){var e=Object(l.a)(["\n  min-height: 80px;\n  box-sizing: border-box;\n  padding: 4px;\n  resize: none;\n  outline: none;\n  font-size: ","rem;\n  font-family: ",";\n  font-weight: ",";\n  overflow: auto;\n  color: ",";\n  background-color: transparent;\n  ",";\n"]);return m=function(){return e},e}function d(){var e=Object(l.a)(["\n  padding: 3px;\n  border: 2px solid ",";\n"]);return d=function(){return e},e}function j(){var e=Object(l.a)(["\n  border: 1px solid ",";\n  transition: border-color 300ms;\n\n  :hover {\n    padding: 3px;\n    border: 2px solid ",";\n  }\n"]);return j=function(){return e},e}"undefined"!==typeof TextareaProps&&TextareaProps&&TextareaProps===Object(TextareaProps)&&Object.isExtensible(TextareaProps)&&Object.defineProperty(TextareaProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextareaProps",filename:"src\\Textarea.tsx"}});var x=Object(u.c)(j(),(function(e){return e.theme.palette.input.bottomLine}),(function(e){return e.theme.palette.action.active})),f=Object(u.c)(d(),(function(e){return e.theme.palette.primary[500]})),O=u.d.textarea(m(),(function(e){return e.theme.typography.subheading.fontSize}),(function(e){return e.theme.typography.fontFamily}),(function(e){return e.theme.typography.fontWeightRegular}),(function(e){return e.theme.palette.text.primary}),(function(e){return e.focused?f:x}));function g(e){var n=e.defaultValue,t=e.value,r=e.onChange,i=e.onBlur,c=e.className,l=Object(o.useState)(!1),u=Object(a.a)(l,2),b=u[0],m=u[1],d=Object(o.useCallback)((function(){return m(!0)}),[]),j=Object(o.useCallback)((function(){m(!1),i&&i()}),[i]);return s.a.createElement(O,Object.assign({},e,{defaultValue:n,value:t,onChange:r,onFocus:d,focused:b,onBlur:j,className:p()("sinouiincubator-textarea",c)}))}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Textarea",filename:"src\\Textarea.tsx"}});var h=g;g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Textarea",filename:"src\\index.ts"}}),t.d(n,"default",(function(){return N}));var T={},v="wrapper";function N(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(v,Object.assign({},T,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"sinouiincubatortextarea"},"@sinouiincubator/textarea"),Object(i.b)("p",null,"\u591a\u884c\u6587\u672c\u8f93\u5165\u6846\u7ec4\u4ef6\u3002"),Object(i.b)("p",null,Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/@sinouiincubator/textarea"}),Object(i.b)("img",{alt:"npm version",src:"https://img.shields.io/npm/v/@sinouiincubator/textarea"})),"\n",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://www.npmjs.com/package/@sinouiincubator/textarea"}),Object(i.b)("img",{alt:"downloads",src:"https://img.shields.io/npm/dm/@sinouiincubator/textarea"}))),Object(i.b)("h2",{id:"\u4f9d\u8d56\u5b89\u88c5"},"\u4f9d\u8d56\u5b89\u88c5"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"yarn add @sinouiincubator/textarea\n")),Object(i.b)("h2",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React, { useState, useCallback } from 'react';\nimport Textarea from '@sinouiincubator/textarea';\n\nfunction SimpleDemo() {\n  const [value, setValue] = useState();\n\n  const onChange = useCallback(\n    (event: React.ChangeEvent<HTMLTextAreaElement>) => {\n      const newValue = event.target.value;\n      setValue(newValue);\n    },\n    [],\n  );\n\n  return <Textarea value={value} onChange={onChange} />;\n}\n")),Object(i.b)(c.c,{__position:0,__code:"() => {\n  const [value, setValue] = useState()\n  const onChange = useCallback(event => {\n    const newValue = event.target.value\n    setValue(newValue)\n  }, [])\n  return <Textarea value={value} onChange={onChange} />\n}",__scope:{props:this?this.props:t,useState:o.useState,useCallback:o.useCallback,Playground:c.c,Props:c.d,Textarea:h},mdxType:"Playground"},(function(){var e=Object(o.useState)(),n=Object(a.a)(e,2),t=n[0],r=n[1],s=Object(o.useCallback)((function(e){var n=e.target.value;r(n)}),[]);return Object(i.b)(h,{value:t,onChange:s,mdxType:"Textarea"})})),Object(i.b)("h2",{id:"\u4e0esinouisinoui-components-forms-\u96c6\u6210"},"\u4e0e@sinoui/sinoui-components-forms \u96c6\u6210"),Object(i.b)("p",null,Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://sinoui.github.io/sinoui-forms-library/sinoui-components-forms"}),"@sinoui/sinoui-components-forms"),"\u662f\u4ee5",Object(i.b)("inlineCode",{parentName:"p"},"sinoui-components"),"\u4e3a\u57fa\u7840\u7684\u8868\u5355\u63a7\u4ef6\u5e93\u3002\n",Object(i.b)("inlineCode",{parentName:"p"},"Textarea"),"\u4e0e",Object(i.b)("inlineCode",{parentName:"p"},"@sinoui/sinoui-components-forms"),"\u7684\u96c6\u6210\u65b9\u5f0f\u5982\u4e0b\uff1a"),Object(i.b)("p",null,"\u9996\u5148\u5b9a\u4e49",Object(i.b)("inlineCode",{parentName:"p"},"TextareaField"),"\u7ec4\u4ef6\uff1a"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"TextareaField.tsx")),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport classNames from 'classnames';\nimport Textarea, { TextareaProps } from '@sinouiincubator/textarea';\nimport { Field, FieldProps } from '@sinoui/sinoui-components-forms';\n\nexport type TextareaFieldProps = FieldProps<TextareaProps, string>;\n\nfunction TextareaField(props: TextareaFieldProps) {\n  const { className } = props;\n  return (\n    <Field\n      as={Textarea}\n      defaultValue=\"\"\n      {...props}\n      className={classNames(className, 'sinoui-text-input-field')}\n    />\n  );\n}\n\nexport default TextareaField;\n")),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { Form, FormItem, Label } from '@sinoui/sinoui-components-forms';\nimport TextareaField from './TextareaField';\n\nfunction Demo() {\n  return (\n    <Form>\n      <FormItem>\n        <Label>\u5907\u6ce8</Label>\n        <TextareaField name=\"note\" />\n      </FormItem>\n    </Form>\n  );\n}\n")),Object(i.b)("h2",{id:"\u6837\u5f0f\u81ea\u5b9a\u4e49"},"\u6837\u5f0f\u81ea\u5b9a\u4e49"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Textarea"),"\u7684 DOM \u7ed3\u6784\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u6709\u4e00\u4e2a",Object(i.b)("inlineCode",{parentName:"p"},"textarea"),"\u5143\u7d20\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-html"}),'<textarea class="sinouiincubator-textarea" />\n')),Object(i.b)("p",null,"\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"className"),"\u5b9a\u4e49",Object(i.b)("inlineCode",{parentName:"p"},"css"),"\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"p"},"styled-components"),"\u81ea\u5b9a\u4e49\u6837\u5f0f\u3002"),Object(i.b)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),Object(i.b)(c.d,{of:h,mdxType:"Props"}))}N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs\\index.mdx"}}),N.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-index.fa248b6faa2f804356c6.js.map