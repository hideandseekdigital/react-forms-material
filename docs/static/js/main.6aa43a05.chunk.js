(this["webpackJsonp@cordelta/react-forms-material-sample"]=this["webpackJsonp@cordelta/react-forms-material-sample"]||[]).push([[0],{45:function(e,t,r){e.exports=r(54)},54:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(8),o=r.n(c),i=r(29),u=r(21),l=r(11),s=r(17);function f(e,t){if(t){var r=e.indexOf(".");return-1===r?t[e]:f(e.substring(r+1),t[e.substring(0,r)])}}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(r,!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}f.set=function(e,t,r){if(t){var n=e.indexOf(".");if(-1===n)t[e]=r;else{var a=e.substring(0,n),c=e.substring(n+1),o=t[a];o&&"object"===typeof o||(o={},t[a]=o),f.set(c,o,r)}return t}};var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(r){var a=Object(n.useReducer)((function(e,t){return p({},e,{},t)}),r.values||{}),c=Object(s.a)(a,2),o=c[0],u=c[1],b=Object(n.useReducer)((function(e,t){return[].concat(Object(i.a)(e),[t])}),[]),m=Object(s.a)(b,2),O=m[0],d=m[1],y=Object(n.createRef)(),v=function(e){O.forEach((function(e){return e()})),y.current.checkValidity()&&r.onSubmit&&r.onSubmit(Object.keys(o).reduce((function(e,t){return f.set(t,p({},e),o[t])}),{})),e.preventDefault()},j="react-forms ".concat(r.className||""),g=Object.keys(t).reduce((function(e,n){return p({},e,Object(l.a)({},n,r[n]||t[n]))}),{});return Object(n.createElement)("form",p({},r,{className:j,noValidate:!0,onSubmit:v,ref:y,children:[Object(n.createElement)(e,p({},r,{key:"context",value:p({registerFieldValidator:d,setFieldValue:u,getFieldValue:function(e){return o[e]},onSubmit:v},g)})),Object(n.createElement)("input",{key:"submit",type:"submit",style:{visibility:"hidden",position:"absolute"}})]}))}};function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var d=function(e){return function(t){if(!t.onSubmit)throw new Error("Button components must be contained within a Form component");var r=Object(n.useState)(!1),a=Object(s.a)(r,2),c=a[0],o=a[1],i=(t.onSubmit,t.registerFieldValidator,t.setFieldValue,t.getFieldValue,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(r,!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(u.a)(t,["onSubmit","registerFieldValidator","setFieldValue","getFieldValue"]),{onClick:function(e){var r=t.onSubmit(e);r&&r.finally&&"function"===typeof r.finally&&(o(!0),r.finally((function(){return o(!1)})))},disabled:c}));return e(i)}};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(r,!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=function(e,t){var r=e.type,n=e.checked,a=e.value,c=e.defaultValue,o=function(t){return"number"===e.type||e.numeric?+t:t},i={setInitialValue:function(r){var n=r.set;void 0!==a?n(a):void 0!==c?n(c):void 0!==t.defaultValue?n(function(e,t){return"function"===typeof e?e.apply(null,t):e}(t.defaultValue,[e])):n(void 0)},getOutputValue:function(e){var t=e.event;if(t.target&&void 0!==t.target.value)return t.target.value;if(void 0!==t.value)return t.value;throw new Error("Unable to determine input value from event")},getValueProps:function(e){return{value:e.currentValue||""}}},u=function(e,t){return void 0===t?Boolean(e):e?t:void 0},l={text:i,radio:{setInitialValue:function(e){var t=e.set;return n&&t(a)},getOutputValue:function(){return a},getValueProps:function(e){var t=e.currentValue;return{checked:o(a)===t}}},checkbox:{setInitialValue:function(e){return(0,e.set)(u(n,a))},getOutputValue:function(e){var t=e.event;return u(t.target.checked,a)},getValueProps:function(e){var t=e.currentValue;return{checked:Boolean(t)}}},select:v({},i,{setInitialValue:function(t){var r=t.set,n=t.element;r(a||c||e.options&&e.options.length>0&&e.options[0]||n&&n.value)}})};return v({},l[t.type||r]||l.text,{applyValueTransforms:o})};function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(r,!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w,P=(w=0,function(){return"react-forms-".concat(++w)}),E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(r){if(!r.name)throw new Error("You must provide a name prop to form components");if(!r.setFieldValue)throw new Error("Input components must be contained within a Form component");var a=Object(n.useState)(!1),c=Object(s.a)(a,2),o=c[0],i=c[1],f=Object(n.useState)(!1),b=Object(s.a)(f,2),p=b[0],m=b[1],O=Object(n.useState)(r.id||P()),d=Object(s.a)(O,1)[0];Object(n.useEffect)((function(){var e=r.name,n=r.getFieldValue,a=r.setFieldValue,c=r.registerFieldValidator,o=j(r,t),i=o.setInitialValue,u=o.applyValueTransforms;void 0===n(e)&&i({set:function(t){return a(Object(l.a)({},e,u(t)))},element:document.querySelector("#".concat(d))}),c(y)}),[]);var y=function(){i(!0),m(Boolean(document.querySelector("#".concat(d,":invalid"))))},v=t.passErrorProp,g=j(r,t).getValueProps,w=r.type,E=r.name,V=(r.value,r.checked,r.defaultValue,r.numeric,r.onSubmit,r.registerFieldValidator,r.setFieldValue,r.getFieldValue),k=Object(u.a)(r,["type","name","value","checked","defaultValue","numeric","onSubmit","registerFieldValidator","setFieldValue","getFieldValue"]),S=g({currentValue:V(E)}),D=w&&{type:w},F=v&&{error:p},x=(o?"validated ":"")+(r.className||"")||void 0,L=h({id:d,name:E,className:x,onChange:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var c=n[0],o=r.name,i=r.setFieldValue,u=r.onChange,s=t.valueFromEvent,f=j(r,t),b=f.getOutputValue,p=f.applyValueTransforms,m=s?s.apply(null,n):b({event:c});i(Object(l.a)({},o,p(m))),c&&c.target&&c.target.checkValidity&&(c.target.checkValidity(),y()),u&&u.apply(c.target,n)}},k,{},S,{},D,{},F);return e(L)}};function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var k=Object(n.createContext)({}),S=function(e){return function(t){return Object(n.createElement)(k.Consumer,{children:function(r){return Object(n.createElement)(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(r,!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r,{},t))}})}},D=(m(k.Provider),S(d((function(e){return Object(n.createElement)("button",e)}))),S(E((function(e){return Object(n.createElement)("input",e)}))),S(E((function(e){return Object(n.createElement)("textarea",e)}))),S(E((function(e){return Object(n.createElement)("select",e)}),{type:"select"})),r(82)),F=r(85),x=r(92),L=r(86),N=r(87),T=r(90),C=r(89),I=r(93),q=r(88),B=r(91);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(r,!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}!function(e,t){if(t&&"undefined"!==typeof document&&!document.querySelector("#".concat(e))){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.id=e,n.type="text/css",r.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}("react-forms-material-styles","\n  form.react-forms .MuiRadio-root, form.react-forms .MuiCheckbox-root {\n    top: 10px;\n  }\n\n  form.react-forms .react-forms-material-field {\n    display: block;\n  }\n    \n  form.react-forms .react-forms-material-inline {\n    display: inline-block;\n  }\n");var M,W=m(k.Provider,{margin:"normal",display:"block"}),U=(M=D.a,S(d((function(e){return Object(n.createElement)(M,e)})))),A=function(e,t,r){return function(e,t){return S(E((function(t){return Object(n.createElement)(e,t)}),t))}(Y(e,t,r),J({passErrorProp:!0},t))},Y=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.alwaysShrinkLabel,a=t.shrinkLabel,c=void 0===a||a;return function(t){var a=t.className,o=t.error,l=t.hiddenLabel,s=t.variant,f=t.margin,b=t.display,p=t.label,m=t.helperText,O=Object(u.a)(t,["className","error","hiddenLabel","variant","margin","display","label","helperText"]);return Object(n.createElement)(F.a,{className:"react-forms-material-field".concat(a?" ".concat(a):"").concat("inline"===b?" react-forms-material-inline":""),error:o,fullWidth:O.fullWidth,hiddenLabel:l,required:O.required,variant:s,margin:f,children:[].concat(Object(i.a)(p?[Object(n.createElement)(x.a,J({key:"label",htmlFor:O.id,children:p},!1===c&&{shrink:!1},{},r&&{className:"MuiInputLabel-shrink"}))]:[]),[Object(n.createElement)(e,J({key:"input"},O))],Object(i.a)(m?[Object(n.createElement)(L.a,{key:"helperText",children:m})]:[]))})}},z=A(N.a),G=A(T.a,{type:"checkbox"},{alwaysShrinkLabel:!0}),H=A(C.a,{type:"radio"},{shrinkLabel:!1}),K=Y((function(e){var t=e.name,r=e.values,a=e.labels,c=e.numeric,o=Object(u.a)(e,["name","values","labels","numeric"]);return Object(n.createElement)(I.a,J({},o,{children:[r.map((function(e,r){return Object(n.createElement)(H,{name:t,value:e,numeric:c,key:e,label:a&&a[r]||e,margin:o.row?"none":o.margin})}))]}))}),{},{alwaysShrinkLabel:!0}),Q=A((function(e){var t=e.values,r=e.labels,a=Object(u.a)(e,["values","labels"]);return Object(n.createElement)(q.a,J({},a,{children:t.map((function(e,t){return Object(n.createElement)(B.a,{value:e,key:e,children:r&&r[t]||e})}))}))}),{type:"select"},{alwaysShrinkLabel:!0}),X=function(e){var t=e.onSubmit,r=e.initialValues;return a.a.createElement(W,{onSubmit:t,values:r},a.a.createElement(z,{name:"name",label:"Name",required:!0,minLength:"5",maxLength:"50"}),a.a.createElement(z,{name:"description",label:"Description",multiline:!0,rows:4,maxLength:"100"}),a.a.createElement(Q,{name:"type",label:"Type",values:["","Widget","Component"],required:!0}),a.a.createElement(K,{name:"rating",label:"Rating",values:[1,2,3],row:!0}),a.a.createElement(G,{name:"urgent",label:"Urgent"}),a.a.createElement(U,null,"Submit"))};o.a.render(a.a.createElement((function(){return a.a.createElement(X,{onSubmit:function(e){return alert(JSON.stringify(e,null,2))}})}),null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.6aa43a05.chunk.js.map