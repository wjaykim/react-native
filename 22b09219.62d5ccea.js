(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,O=p["".concat(c,".").concat(u)]||p[u]||s[u]||i;return n?r.a.createElement(O,o(o({ref:t},b),{},{components:n})):r.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},227:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(7),i=(n(0),n(1006)),c={id:"activityindicator",title:"ActivityIndicator"},o={unversionedId:"activityindicator",id:"version-0.61/activityindicator",isDocsHomePage:!1,title:"ActivityIndicator",description:"Displays a circular loading indicator.",source:"@site/versioned_docs/version-0.61/activityindicator.md",slug:"/activityindicator",permalink:"/docs/0.61/activityindicator",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/activityindicator.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/components",previous:{title:"Components and APIs",permalink:"/docs/0.61/components-and-apis"},next:{title:"Button",permalink:"/docs/0.61/button"}},l=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>animating</code>",id:"animating",children:[]},{value:"<code>color</code>",id:"color",children:[]},{value:"<code>hidesWhenStopped</code>",id:"hideswhenstopped",children:[]},{value:"<code>size</code>",id:"size",children:[]}]}],b={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Displays a circular loading indicator."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("div",{className:"snack-player","data-snack-name":"activityindicator","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%0Aimport%20%7B%0A%20%20ActivityIndicator%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20View%2C%0A%7D%20from%20'react-native'%0A%0Aexport%20default%20class%20App%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.horizontal%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20color%3D%22%230000ff%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%22small%22%20color%3D%22%2300ff00%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20color%3D%22%230000ff%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%22small%22%20color%3D%22%2300ff00%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%0A%20%20%7D%2C%0A%20%20horizontal%3A%20%7B%0A%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%0A%7D)","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("p",null,"Inherits ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/view#props"}),"View Props"),"."),Object(i.b)("h3",{id:"animating"},Object(i.b)("inlineCode",{parentName:"h3"},"animating")),Object(i.b)("p",null,"Whether to show the indicator (true, the default) or hide it (false)."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"color"},Object(i.b)("inlineCode",{parentName:"h3"},"color")),Object(i.b)("p",null,"The foreground color of the spinner (default is gray on iOS and dark cyan on Android)."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/0.61/colors"}),"color")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"hideswhenstopped"},Object(i.b)("inlineCode",{parentName:"h3"},"hidesWhenStopped")),Object(i.b)("p",null,"Whether the indicator should hide when not animating (true by default)."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iOS")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"size"},Object(i.b)("inlineCode",{parentName:"h3"},"size")),Object(i.b)("p",null,"Size of the indicator (default is 'small'). Passing a number to the size prop is only supported on Android."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enum('small', 'large'), number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))))}d.isMDXComponent=!0}}]);