(window.webpackJsonp=window.webpackJsonp||[]).push([[888],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,O=p["".concat(a,".").concat(d)]||p[d]||u[d]||o;return n?i.a.createElement(O,c(c({ref:t},l),{},{components:n})):i.a.createElement(O,c({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},956:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(7),o=(n(0),n(1006)),a={id:"vibrationios",title:"VibrationIOS"},c={unversionedId:"vibrationios",id:"version-0.60/vibrationios",isDocsHomePage:!1,title:"VibrationIOS",description:"NOTE: VibrationIOS is being deprecated. Use Vibration instead.",source:"@site/versioned_docs/version-0.60/vibrationios.md",slug:"/vibrationios",permalink:"/docs/0.60/vibrationios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/vibrationios.md",version:"0.60",lastUpdatedAt:1603945169},b=[{value:"Methods",id:"methods",children:[]},{value:"Methods",id:"methods-1",children:[{value:"<code>vibrate()</code>",id:"vibrate",children:[]}]}],l={rightToc:b};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"NOTE: ",Object(o.b)("inlineCode",{parentName:"p"},"VibrationIOS")," is being deprecated. Use ",Object(o.b)("inlineCode",{parentName:"p"},"Vibration")," instead."),Object(o.b)("p",null,"The Vibration API is exposed at ",Object(o.b)("inlineCode",{parentName:"p"},"VibrationIOS.vibrate()"),". On iOS, calling this function will trigger a one second vibration. The vibration is synchronous so this method will return immediately."),Object(o.b)("p",null,"There will be no effect on devices that do not support Vibration, eg. the iOS simulator."),Object(o.b)("p",null,"Vibration patterns are currently unsupported."),Object(o.b)("h3",{id:"methods"},"Methods"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.60/vibrationios#vibrate"}),Object(o.b)("inlineCode",{parentName:"a"},"vibrate")))),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods-1"},"Methods"),Object(o.b)("h3",{id:"vibrate"},Object(o.b)("inlineCode",{parentName:"h3"},"vibrate()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static vibrate()\n")),Object(o.b)("p",null,"@deprecated"))}s.isMDXComponent=!0}}]);