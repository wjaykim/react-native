(window.webpackJsonp=window.webpackJsonp||[]).push([[611],{1006:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return d}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,d=p["".concat(i,".").concat(m)]||p[m]||g[m]||a;return o?r.a.createElement(d,l(l({ref:t},s),{},{components:o})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},691:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return c})),o.d(t,"default",(function(){return u}));var n=o(2),r=o(7),a=(o(0),o(1006)),i={id:"using-a-scrollview",title:"Using a ScrollView"},l={unversionedId:"using-a-scrollview",id:"using-a-scrollview",isDocsHomePage:!1,title:"Using a ScrollView",description:"The ScrollView is a generic scrolling container that can contain multiple components and views. The scrollable items can be heterogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).",source:"@site/../docs/using-a-scrollview.md",slug:"/using-a-scrollview",permalink:"/docs/next/using-a-scrollview",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/using-a-scrollview.md",version:"current",lastUpdatedAt:1596036838,sidebar:"docs",previous:{title:"Handling Text Input",permalink:"/docs/next/handling-text-input"},next:{title:"Using List Views",permalink:"/docs/next/using-a-listview"}},c=[],s={rightToc:c};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/scrollview"}),"ScrollView")," is a generic scrolling container that can contain multiple components and views. The scrollable items can be heterogeneous, and you can scroll both vertically and horizontally (by setting the ",Object(a.b)("inlineCode",{parentName:"p"},"horizontal")," property)."),Object(a.b)("p",null,"This example creates a vertical ",Object(a.b)("inlineCode",{parentName:"p"},"ScrollView")," with both images and text mixed together."),Object(a.b)("div",{className:"snack-player","data-snack-name":"Using ScrollView","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Image%2C%20ScrollView%2C%20Text%20%7D%20from%20'react-native'%3B%0A%0Aconst%20logo%20%3D%20%7B%0A%20%20uri%3A%20'https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png'%2C%0A%20%20width%3A%2064%2C%0A%20%20height%3A%2064%0A%7D%3B%0A%0Aexport%20default%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CScrollView%3E%0A%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EScroll%20me%20plz%3C%2FText%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EIf%20you%20like%3C%2FText%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EScrolling%20down%3C%2FText%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EWhat's%20the%20best%3C%2FText%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2096%20%7D%7D%3EFramework%20around%3F%3C%2FText%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CImage%20source%3D%7Blogo%7D%20%2F%3E%0A%20%20%20%20%3CText%20style%3D%7B%7B%20fontSize%3A%2080%20%7D%7D%3EReact%20Native%3C%2FText%3E%0A%20%20%3C%2FScrollView%3E%0A)%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(a.b)("p",null,"ScrollViews can be configured to allow paging through views using swiping gestures by using the ",Object(a.b)("inlineCode",{parentName:"p"},"pagingEnabled")," props. Swiping horizontally between views can also be implemented on Android using the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-viewpager"}),"ViewPager")," component."),Object(a.b)("p",null,"On iOS a ScrollView with a single item can be used to allow the user to zoom content. Set up the ",Object(a.b)("inlineCode",{parentName:"p"},"maximumZoomScale")," and ",Object(a.b)("inlineCode",{parentName:"p"},"minimumZoomScale")," props and your user will be able to use pinch and expand gestures to zoom in and out."),Object(a.b)("p",null,"The ScrollView works best to present a small amount of things of a limited size. All the elements and views of a ",Object(a.b)("inlineCode",{parentName:"p"},"ScrollView")," are rendered, even if they are not currently shown on the screen. If you have a long list of more items than can fit on the screen, you should use a ",Object(a.b)("inlineCode",{parentName:"p"},"FlatList")," instead. So let's ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/using-a-listview"}),"learn about list views")," next."))}u.isMDXComponent=!0}}]);