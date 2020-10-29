(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),s=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=s(a),j=r,u=p["".concat(c,".").concat(j)]||p[j]||m[j]||i;return a?n.a.createElement(u,l(l({ref:t},o),{},{components:a})):n.a.createElement(u,l({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=j;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<i;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},221:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(7),i=(a(0),a(1006)),c={id:"javascript-environment",title:"JavaScript Environment"},l={unversionedId:"javascript-environment",id:"version-0.60/javascript-environment",isDocsHomePage:!1,title:"JavaScript Environment",description:"JavaScript Runtime",source:"@site/versioned_docs/version-0.60/javascript-environment.md",slug:"/javascript-environment",permalink:"/docs/0.60/javascript-environment",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/javascript-environment.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/docs",previous:{title:"Gesture Responder System",permalink:"/docs/0.60/gesture-responder-system"},next:{title:"Using TypeScript with React Native",permalink:"/docs/0.60/typescript"}},b=[{value:"JavaScript Runtime",id:"javascript-runtime",children:[]},{value:"JavaScript Syntax Transformers",id:"javascript-syntax-transformers",children:[]},{value:"Polyfills",id:"polyfills",children:[]}],o={rightToc:b};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"javascript-runtime"},"JavaScript Runtime"),Object(i.b)("p",null,"When using React Native, you're going to be running your JavaScript code in two environments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In most cases, React Native will use ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://trac.webkit.org/wiki/JavaScriptCore"}),"JavaScriptCore"),", the JavaScript engine that powers Safari. Note that on iOS, JavaScriptCore does not use JIT due to the absence of writable executable memory in iOS apps."),Object(i.b)("li",{parentName:"ul"},"When using Chrome debugging, all JavaScript code runs within Chrome itself, communicating with native code via WebSockets. Chrome uses ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://v8.dev/"}),"V8")," as its JavaScript engine.")),Object(i.b)("p",null,"While both environments are very similar, you may end up hitting some inconsistencies. We're likely going to experiment with other JavaScript engines in the future, so it's best to avoid relying on specifics of any runtime."),Object(i.b)("h2",{id:"javascript-syntax-transformers"},"JavaScript Syntax Transformers"),Object(i.b)("p",null,"Syntax transformers make writing code more enjoyable by allowing you to use new JavaScript syntax without having to wait for support on all interpreters."),Object(i.b)("p",null,"React Native ships with the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://babeljs.io"}),"Babel JavaScript compiler"),". Check ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://babeljs.io/docs/plugins/#transform-plugins"}),"Babel documentation")," on its supported transformations for more details."),Object(i.b)("p",null,"A full list of React Native's enabled transformations can be found in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/metro/tree/master/packages/metro-react-native-babel-preset"}),"metro-react-native-babel-preset"),"."),Object(i.b)("p",null,"ES5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Reserved Words: ",Object(i.b)("inlineCode",{parentName:"li"},"promise.catch(function() { });"))),Object(i.b)("p",null,"ES6"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://babeljs.io/docs/learn-es2015/#arrows"}),"Arrow functions"),": ",Object(i.b)("inlineCode",{parentName:"li"},"<C onPress={() => this.setState({pressed: true})} />")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://babeljs.io/docs/learn-es2015/#let-const"}),"Block scoping"),": ",Object(i.b)("inlineCode",{parentName:"li"},"let greeting = 'hi';")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://babeljs.io/docs/learn-es2015/#default-rest-spread"}),"Call spread"),": ",Object(i.b)("inlineCode",{parentName:"li"},"Math.max(...array);")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://babeljs.io/docs/learn-es2015/#classes"}),"Classes"),": ",Object(i.b)("inlineCode",{parentName:"li"},"class C extends React.Component { render() { return <View />; } }")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://babeljs.io/docs/learn-es2015/#let-const"}),"Constants"),": ",Object(i.b)("inlineCode",{parentName:"li"},"const answer = 42;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://babeljs.io/docs/learn-es2015/#destructuring"}),"Destructuring"),": ",Object(i.b)("inlineCode",{parentName:"li"},"var {isActive, style} = this.props;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of"}),"for...of"),": ",Object(i.b)("inlineCode",{parentName:"li"},"for (var num of [1, 2, 3]) {};")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://babeljs.io/docs/learn-es2015/#modules"}),"Modules"),": ",Object(i.b)("inlineCode",{parentName:"li"},"import React, { Component } from 'react';")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://babeljs.io/docs/learn-es2015/#enhanced-object-literals"}),"Computed Properties"),": ",Object(i.b)("inlineCode",{parentName:"li"},"var key = 'abc'; var obj = {[key]: 10};")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://babeljs.io/docs/learn-es2015/#enhanced-object-literals"}),"Object Concise Method"),": ",Object(i.b)("inlineCode",{parentName:"li"},"var obj = { method() { return 10; } };")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://babeljs.io/docs/learn-es2015/#enhanced-object-literals"}),"Object Short Notation"),": ",Object(i.b)("inlineCode",{parentName:"li"},"var name = 'vjeux'; var obj = { name };")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/sebmarkbage/ecmascript-rest-spread"}),"Rest Params"),": ",Object(i.b)("inlineCode",{parentName:"li"},"function(type, ...args) {};")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://babeljs.io/docs/learn-es2015/#template-strings"}),"Template Literals"),": ",Object(i.b)("inlineCode",{parentName:"li"},"var who = 'world'; var str = `Hello ${who}`;"))),Object(i.b)("p",null,"ES8"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/jeffmo/es-trailing-function-commas"}),"Function Trailing Comma"),": ",Object(i.b)("inlineCode",{parentName:"li"},"function f(a, b, c,) {};")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/tc39/ecmascript-asyncawait"}),"Async Functions"),": ",Object(i.b)("inlineCode",{parentName:"li"},"async function doStuffAsync() { const foo = await doOtherStuffAsync(); };"))),Object(i.b)("p",null,"Stage 3"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/tc39/proposal-object-rest-spread"}),"Object Spread"),": ",Object(i.b)("inlineCode",{parentName:"li"},"var extended = { ...obj, a: 10 };")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/tc39/proposal-static-class-features"}),"Static class fields"),": ",Object(i.b)("inlineCode",{parentName:"li"},"class CustomDate { static epoch = new CustomDate(0); }")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/tc39/proposal-optional-chaining"}),"Optional Chaining"),": ",Object(i.b)("inlineCode",{parentName:"li"},"var name = obj.user?.name;"))),Object(i.b)("p",null,"Specific"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://reactjs.org/docs/jsx-in-depth.html"}),"JSX"),": ",Object(i.b)("inlineCode",{parentName:"li"},"<View style={{color: 'red'}} />")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://flowtype.org/"}),"Flow"),": ",Object(i.b)("inlineCode",{parentName:"li"},"function foo(x: ?number): string {};")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://flowtype.org/"}),"TypeScript"),": ",Object(i.b)("inlineCode",{parentName:"li"},"function foo(x: number | undefined): string {};")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://babeljs.io/docs/en/babel-template"}),"Babel Template"),": allows AST templating")),Object(i.b)("h2",{id:"polyfills"},"Polyfills"),Object(i.b)("p",null,"Many standards functions are also available on all the supported JavaScript runtimes."),Object(i.b)("p",null,"Browser"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.chrome.com/devtools/docs/console-api"}),"console.{log, warn, error, info, trace, table, group, groupEnd}")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/docs/latest/api/modules.html"}),"CommonJS require")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.60/network#content"}),"XMLHttpRequest, fetch")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.60/timers#content"}),"{set, clear}{Timeout, Interval, Immediate}, {request, cancel}AnimationFrame"))),Object(i.b)("p",null,"ES6"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"}),"Object.assign")),Object(i.b)("li",{parentName:"ul"},"String.prototype.{",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith"}),"startsWith"),", ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith"}),"endsWith"),", ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat"}),"repeat"),", ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes"}),"includes"),"}"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from"}),"Array.from")),Object(i.b)("li",{parentName:"ul"},"Array.prototype.{",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"}),"find"),", ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"}),"findIndex"),"}")),Object(i.b)("p",null,"ES7"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Array.prototype.{",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"}),"includes"),"}")),Object(i.b)("p",null,"ES8"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Object.{",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"}),"entries"),", ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values"}),"values"),"}")),Object(i.b)("p",null,"Specific"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"__DEV__"))))}s.isMDXComponent=!0}}]);