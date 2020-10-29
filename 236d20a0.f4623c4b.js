(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,d=p["".concat(o,".").concat(u)]||p[u]||m[u]||i;return n?r.a.createElement(d,l(l({ref:t},b),{},{components:n})):r.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(7),i=(n(0),n(1006)),o={id:"optimizing-flatlist-configuration",title:"Optimizing Flatlist Configuration"},l={unversionedId:"optimizing-flatlist-configuration",id:"version-0.62/optimizing-flatlist-configuration",isDocsHomePage:!1,title:"Optimizing Flatlist Configuration",description:"Terms",source:"@site/versioned_docs/version-0.62/optimizing-flatlist-configuration.md",slug:"/optimizing-flatlist-configuration",permalink:"/docs/0.62/optimizing-flatlist-configuration",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/optimizing-flatlist-configuration.md",version:"0.62",lastUpdatedAt:1603945169,sidebar:"version-0.62/docs",previous:{title:"Performance Overview",permalink:"/docs/0.62/performance"},next:{title:"RAM Bundles and Inline Requires",permalink:"/docs/0.62/ram-bundles-inline-requires"}},c=[{value:"Terms",id:"terms",children:[]},{value:"Props",id:"props",children:[{value:"removeClippedSubviews",id:"removeclippedsubviews",children:[]},{value:"maxToRenderPerBatch",id:"maxtorenderperbatch",children:[]},{value:"updateCellsBatchingPeriod",id:"updatecellsbatchingperiod",children:[]},{value:"initialNumToRender",id:"initialnumtorender",children:[]},{value:"windowSize",id:"windowsize",children:[]},{value:"legacyImplementation",id:"legacyimplementation",children:[]}]},{value:"List items",id:"list-items",children:[{value:"Use basic components",id:"use-basic-components",children:[]},{value:"Use light components",id:"use-light-components",children:[]},{value:"Use shouldComponentUpdate",id:"use-shouldcomponentupdate",children:[]},{value:"Use cached optimized images",id:"use-cached-optimized-images",children:[]},{value:"Use getItemLayout",id:"use-getitemlayout",children:[]},{value:"Use keyExtractor or key",id:"use-keyextractor-or-key",children:[]},{value:"Avoid anonymous function on renderItem",id:"avoid-anonymous-function-on-renderitem",children:[]}]}],b={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"terms"},"Terms"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"VirtualizedList:")," The component behind ",Object(i.b)("inlineCode",{parentName:"p"},"FlatList")," (React Native's implementation of the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://bvaughn.github.io/react-virtualized/#/components/List"}),Object(i.b)("inlineCode",{parentName:"a"},"Virtual List"))," concept.)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Memory consumption:")," How much information about your list is being stored in memory, which could lead to an app crash.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Responsiveness:")," Application ability to respond to interactions. Low responsiveness, for instance, is when you touch on a component and it waits a bit to respond, instead of responding immediately as expected.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Blank areas:")," When ",Object(i.b)("inlineCode",{parentName:"p"},"VirtualizedList")," can't render your items fast enough, you may enter a part of your list with non-rendered components that appear as blank space.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Viewport:")," The visible area of content that is rendered to pixels.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Window:")," The area in which items should be mounted, which is generally much larger than the viewport."))),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("p",null,"Here are a list of props that can help to improve ",Object(i.b)("inlineCode",{parentName:"p"},"FlatList")," performance:"),Object(i.b)("h3",{id:"removeclippedsubviews"},"removeClippedSubviews"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Boolean"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"False")))),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", views that are outside of the viewport are detached from the native view hierarchy."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pros:")," This reduces time spent on the main thread, and thus reduces the risk of dropped frames, by excluding views outside of the viewport from the native rendering and drawing traversals."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Cons:")," Be aware that this implementation can have bugs, such as missing content (mainly observed on iOS), especially if you are doing complex things with transforms and/or absolute positioning. Also note this does not save significant memory because the views are not deallocated, only detached."),Object(i.b)("h3",{id:"maxtorenderperbatch"},"maxToRenderPerBatch"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10")))),Object(i.b)("p",null,"It is a ",Object(i.b)("inlineCode",{parentName:"p"},"VirtualizedList")," prop that can be passed through ",Object(i.b)("inlineCode",{parentName:"p"},"FlatList"),". This controls the amount of items rendered per batch, which is the next chunk of items rendered on every scroll."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pros:")," Setting a bigger number means less visual blank areas when scrolling (increases the fill rate)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Cons:")," More items per batch means longer periods of JavaScript execution potentially blocking other event processing, like presses, hurting responsiveness."),Object(i.b)("h3",{id:"updatecellsbatchingperiod"},"updateCellsBatchingPeriod"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"50")))),Object(i.b)("p",null,"While ",Object(i.b)("inlineCode",{parentName:"p"},"maxToRenderPerBatch")," tells the amount of items rendered per batch, setting ",Object(i.b)("inlineCode",{parentName:"p"},"updateCellsBatchingPeriod")," tells your ",Object(i.b)("inlineCode",{parentName:"p"},"VirtualizedList")," the delay in milliseconds between batch renders (how frequently your component will be rendering the windowed items)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pros:")," Combining this prop with ",Object(i.b)("inlineCode",{parentName:"p"},"maxToRenderPerBatch")," gives you the power to, for example, render more items in a less frequent batch, or less items in a more frequent batch."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Cons:")," Less frequent batches may cause blank areas, More frequent batches may cause responsiveness issues."),Object(i.b)("h3",{id:"initialnumtorender"},"initialNumToRender"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10")))),Object(i.b)("p",null,"The initial amount of items to render."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pros:")," Define precise number of items that would cover the screen for every device. This can be a big performance boost for the initial render."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Cons:")," Setting a low ",Object(i.b)("inlineCode",{parentName:"p"},"initialNumToRender")," may cause blank areas, especially if it's too small to cover the viewport on initial render."),Object(i.b)("h3",{id:"windowsize"},"windowSize"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"21")))),Object(i.b)("p",null,"The number passed here is a measurement unit where 1 is equivalent to your viewport height. The default value is 21 (10 viewports above, 10 below, and one in between)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pros:")," Bigger ",Object(i.b)("inlineCode",{parentName:"p"},"windowSize")," will result in less chance of seeing blank space while scrolling. On the other hand, smaller ",Object(i.b)("inlineCode",{parentName:"p"},"windowSize")," will result in fewer items mounted simultaneously, saving memory."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Cons:")," For a bigger ",Object(i.b)("inlineCode",{parentName:"p"},"windowSize"),", you will have more memory consumption. For a lower ",Object(i.b)("inlineCode",{parentName:"p"},"windowSize"),", you will have a bigger chance of seeing blank areas."),Object(i.b)("h3",{id:"legacyimplementation"},"legacyImplementation"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Boolean"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"False")))),Object(i.b)("p",null,"Make ",Object(i.b)("inlineCode",{parentName:"p"},"FlatList")," rely on the older and deprecated ",Object(i.b)("inlineCode",{parentName:"p"},"ListView")," instead of ",Object(i.b)("inlineCode",{parentName:"p"},"VirtualizedList"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pros:")," No risk of seeing blank areas while scrolling. May avoid bugs in ",Object(i.b)("inlineCode",{parentName:"p"},"VirtualizedList"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Cons:")," Extra memory consumption and more app crash risk in large lists (100+) with complex items. It also warns that the above tweaks will not work because now it is using ",Object(i.b)("inlineCode",{parentName:"p"},"ListView"),". Many other features are not supported. There may be other bugs since ",Object(i.b)("inlineCode",{parentName:"p"},"ListView")," is deprecated."),Object(i.b)("h2",{id:"list-items"},"List items"),Object(i.b)("p",null,"Below are some tips about list item components. They are the core of your list, so they need to be fast."),Object(i.b)("h3",{id:"use-basic-components"},"Use basic components"),Object(i.b)("p",null,"The more complex your components are, the slower they will render. Try to avoid a lot of logic and nesting in your list items. If you are reusing this list item component a lot in your app, create a component only for your big lists and make them with as little logic and nesting as possible."),Object(i.b)("h3",{id:"use-light-components"},"Use light components"),Object(i.b)("p",null,"The heavier your components are, the slower they render. Avoid heavy images (use a cropped version or thumbnail for list items, as small as possible). Talk to your design team, use as little effects and interactions and information as possible in your list. Show them in your item's detail."),Object(i.b)("h3",{id:"use-shouldcomponentupdate"},"Use shouldComponentUpdate"),Object(i.b)("p",null,"Implement update verification to your components. React's ",Object(i.b)("inlineCode",{parentName:"p"},"PureComponent")," implement a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-component.html#shouldcomponentupdate"}),Object(i.b)("inlineCode",{parentName:"a"},"shouldComponentUpdate"))," with shallow comparison. This is expensive here because it need to check all your props. If you want a good bit-level performance, create the strictest rules for your list item components, checking only props that could potentially change. If your list is basic enough, you could even use"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"shouldComponentUpdate() {\n  return false\n}\n")),Object(i.b)("h3",{id:"use-cached-optimized-images"},"Use cached optimized images"),Object(i.b)("p",null,"You can use the community packages (such as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/DylanVann/react-native-fast-image"}),"react-native-fast-image")," from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/DylanVann"}),"@DylanVann"),") for more performant images. Every image in your list is a ",Object(i.b)("inlineCode",{parentName:"p"},"new Image()")," instance. The faster it reaches the ",Object(i.b)("inlineCode",{parentName:"p"},"loaded")," hook, the faster your Javascript thread will be free again."),Object(i.b)("h3",{id:"use-getitemlayout"},"Use getItemLayout"),Object(i.b)("p",null,"If all your list item components have the same height (or width, for a horizontal list), providing the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"flatlist#getitemlayout"}),"getItemLayout")," prop removes the need for your ",Object(i.b)("inlineCode",{parentName:"p"},"FlatList")," to manage async layout calculations. This is a very desirable optimization technique."),Object(i.b)("p",null,"If your components have dynamic size and you really need performance, consider asking your design team if they may think of a redesign in order to perform better."),Object(i.b)("h3",{id:"use-keyextractor-or-key"},"Use keyExtractor or key"),Object(i.b)("p",null,"You can set the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"flatlist#keyextractor"}),Object(i.b)("inlineCode",{parentName:"a"},"keyExtractor"))," to your ",Object(i.b)("inlineCode",{parentName:"p"},"FlatList")," component. This prop is used for caching and as the React ",Object(i.b)("inlineCode",{parentName:"p"},"key")," to track item re-ordering."),Object(i.b)("p",null,"You can also use a ",Object(i.b)("inlineCode",{parentName:"p"},"key")," prop in you item component."),Object(i.b)("h3",{id:"avoid-anonymous-function-on-renderitem"},"Avoid anonymous function on renderItem"),Object(i.b)("p",null,"Move out the ",Object(i.b)("inlineCode",{parentName:"p"},"renderItem")," function to the outside of render function, so it won't recreate itself each time render function called."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"renderItem = ({ item }) => (<View key={item.key}><Text>{item.title}</Text></View>);\n\nrender(){\n  // ...\n\n  <FlatList\n    data={items}\n    renderItem={renderItem}\n  />\n\n  // ...\n}\n")))}s.isMDXComponent=!0}}]);