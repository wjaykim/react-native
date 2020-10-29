(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(a),m=r,f=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return a?n.a.createElement(f,c(c({ref:t},p),{},{components:a})):n.a.createElement(f,c({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},211:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(7),o=(a(0),a(1006)),i={id:"out-of-tree-platforms",title:"Out-of-Tree Platforms"},c={unversionedId:"out-of-tree-platforms",id:"version-0.62/out-of-tree-platforms",isDocsHomePage:!1,title:"Out-of-Tree Platforms",description:"React Native is not only for Android and iOS - there are community-supported projects that bring it to other platforms, such as:",source:"@site/versioned_docs/version-0.62/out-of-tree-platforms.md",slug:"/out-of-tree-platforms",permalink:"/docs/0.62/out-of-tree-platforms",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/out-of-tree-platforms.md",version:"0.62",lastUpdatedAt:1603945169,sidebar:"version-0.62/docs",previous:{title:"Building For TV Devices",permalink:"/docs/0.62/building-for-tv"},next:{title:"Running On Device",permalink:"/docs/0.62/running-on-device"}},l=[{value:"Creating your own React Native platform",id:"creating-your-own-react-native-platform",children:[{value:"Bundling",id:"bundling",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"React Native is not only for Android and iOS - there are community-supported projects that bring it to other platforms, such as:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Microsoft/react-native-windows"}),"React Native Windows")," - React Native support for Microsoft's Universal Windows Platform (UWP) and the Windows Presentation Foundation (WPF)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/vincentriemer/react-native-dom"}),"React Native DOM")," - An experimental, comprehensive port of React Native to the web. (Not to be confused with ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/necolas/react-native-web"}),"React Native Web"),", which has different goals)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/lazaronixon/react-native-turbolinks"}),"React Native Turbolinks")," - React Native adapter for building hybrid apps with Turbolinks 5."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/status-im/react-native-desktop"}),"React Native Desktop")," - A project aiming to bring React Native to the Desktop with Qt's QML. A fork of ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/CanonicalLtd/react-native/"}),"React Native Ubuntu"),", which is no longer maintained."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/ptmt/react-native-macos"}),"React Native macOS")," - An experimental React Native fork targeting macOS and Cocoa"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/react-native-community/react-native-tvos"}),"React Native tvOS")," - adaptation of React Native for Apple tvOS"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/areslabs/alita"}),"alita")," - An experimental, comprehensive port of React Native to mini-program(\u5fae\u4fe1\u5c0f\u7a0b\u5e8f).")),Object(o.b)("h2",{id:"creating-your-own-react-native-platform"},"Creating your own React Native platform"),Object(o.b)("p",null,"Right now the process of creating a React Native platform from scratch is not very well documented - one of the goals of the upcoming re-architecture (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/blog/2018/06/14/state-of-react-native-2018"}),"Fabric"),") is to make maintaining a platform easier."),Object(o.b)("h3",{id:"bundling"},"Bundling"),Object(o.b)("p",null,"As of React Native 0.57 you can now register your React Native platform with React Native's JavaScript bundler, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebook.github.io/metro/"}),"Metro"),". This means you can pass ",Object(o.b)("inlineCode",{parentName:"p"},"--platform example")," to ",Object(o.b)("inlineCode",{parentName:"p"},"npx react-native bundle"),", and it will look for JavaScript files with the ",Object(o.b)("inlineCode",{parentName:"p"},".example.js")," suffix."),Object(o.b)("p",null,"To register your platform with RNPM, your module's name must match one of these patterns:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"react-native-example")," - It will search all top-level modules that start with ",Object(o.b)("inlineCode",{parentName:"li"},"react-native-")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@org/react-native-example")," - It will search for modules that start with ",Object(o.b)("inlineCode",{parentName:"li"},"react-native-")," under any scope"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@react-native-example/module")," - It will search in all modules under scopes with names starting with ",Object(o.b)("inlineCode",{parentName:"li"},"@react-native-"))),Object(o.b)("p",null,"You must also have an entry in your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "rnpm": {\n    "haste": {\n      "providesModuleNodeModules": ["react-native-example"],\n      "platforms": ["example"]\n    }\n  }\n}\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},'"providesModuleNodeModules"')," is an array of modules that will get added to the Haste module search path, and ",Object(o.b)("inlineCode",{parentName:"p"},'"platforms"')," is an array of platform suffixes that will be added as valid platforms."))}s.isMDXComponent=!0}}]);