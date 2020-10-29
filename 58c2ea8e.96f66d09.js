(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return f}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(a),b=o,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||r;return a?n.a.createElement(f,c(c({ref:t},l),{},{components:a})):n.a.createElement(f,c({ref:t},l))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},419:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var o=a(2),n=a(7),r=(a(0),a(1006)),i={title:"React Native: A year in review",author:"Martin Konicek",authorTitle:"Software Engineer at Facebook",authorURL:"https://github.com/mkonicek",authorImageURL:"https://avatars1.githubusercontent.com/u/346214?v=3&s=460",authorTwitter:"martinkonicek",hero:"/blog/assets/big-hero.png",tags:["announcement"]},c={permalink:"/blog/2016/04/13/react-native-a-year-in-review",source:"@site/blog/2016-04-13-react-native-a-year-in-review.md",description:"It's been one year since we open-sourced React Native. What started as an idea with a handful of engineers is now a framework being used by product teams across Facebook and beyond. Today at F8 we announced that Microsoft is bringing React Native to the Windows ecosystem, giving developers the potential to build React Native on Windows PC, Phone, and Xbox. It will also provide open source tools and services such as a React Native extension for Visual Studio Code and CodePush to help developers create React Native apps on the Windows platform. In addition, Samsung is building React Native for its hybrid platform, which will empower developers to build apps for millions of SmartTVs and mobile and wearable devices. We also released the Facebook SDK for React Native, which makes it easier for developers to incorporate Facebook social features like Login, Sharing, App Analytics, and Graph APIs into their apps. In one year, React Native has changed the way developers build on every major platform.",date:"2016-04-13T00:00:00.000Z",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],title:"React Native: A year in review",readingTime:1.19,truncated:!1,prevItem:{title:"Toward Better Documentation",permalink:"/blog/2016/07/06/toward-better-documentation"},nextItem:{title:"Dive into React Native Performance",permalink:"/blog/2016/03/28/dive-into-react-native-performance"}},s=[],l={rightToc:s};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"It's been one year since we open-sourced React Native. What started as an idea with a handful of engineers is now a framework being used by product teams across Facebook and beyond. Today at F8 we announced that Microsoft is bringing ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"http://microsoft.github.io/code-push/articles/ReactNativeWindows.html"}),"React Native to the Windows ecosystem"),", giving developers the potential to build React Native on Windows PC, Phone, and Xbox. It will also provide open source tools and services such as a React Native extension for Visual Studio Code and CodePush to help developers create React Native apps on the Windows platform. In addition, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.tizen.org/blogs"}),"Samsung")," is building React Native for its hybrid platform, which will empower developers to build apps for millions of SmartTVs and mobile and wearable devices. We also released the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/react-native-fbsdk"}),"Facebook SDK for React Native"),", which makes it easier for developers to incorporate Facebook social features like Login, Sharing, App Analytics, and Graph APIs into their apps. In one year, React Native has changed the way developers build on every major platform."),Object(r.b)("p",null,"It's been an epic ride \u2014 but we are only getting started. Here is a look back at how React Native has grown and evolved since we open-sourced it a year ago, some challenges we faced along the way, and what we expect as we look ahead to the future."),Object(r.b)("footer",null,Object(r.b)("a",{href:"https://code.facebook.com/posts/597378980427792/react-native-a-year-in-review/",className:"btn"},"Read more")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This is an excerpt. Read the rest of the post on ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://code.facebook.com/posts/597378980427792/react-native-a-year-in-review/"}),"Facebook Code"),".")))}p.isMDXComponent=!0}}]);