(window.webpackJsonp=window.webpackJsonp||[]).push([[411],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return s}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),p=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(a),j=n,s=d["".concat(l,".").concat(j)]||d[j]||O[j]||r;return a?b.a.createElement(s,i(i({ref:t},o),{},{components:a})):b.a.createElement(s,i({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=j;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<r;o++)l[o]=a[o];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},495:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),b=a(7),r=(a(0),a(1006)),l={id:"viewpagerandroid",title:"\ud83d\udea7 ViewPagerAndroid"},i={unversionedId:"viewpagerandroid",id:"viewpagerandroid",isDocsHomePage:!1,title:"\ud83d\udea7 ViewPagerAndroid",description:"Deprecated. Use @react-native-community/viewpager instead.",source:"@site/../docs/viewpagerandroid.md",slug:"/viewpagerandroid",permalink:"/docs/next/viewpagerandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/viewpagerandroid.md",version:"current",lastUpdatedAt:1603945169},c=[{value:"Props",id:"props",children:[{value:"<code>initialPage</code>",id:"initialpage",children:[]},{value:"<code>keyboardDismissMode</code>",id:"keyboarddismissmode",children:[]},{value:"<code>onPageScroll</code>",id:"onpagescroll",children:[]},{value:"<code>onPageScrollStateChanged</code>",id:"onpagescrollstatechanged",children:[]},{value:"<code>onPageSelected</code>",id:"onpageselected",children:[]},{value:"<code>pageMargin</code>",id:"pagemargin",children:[]},{value:"<code>peekEnabled</code>",id:"peekenabled",children:[]},{value:"<code>scrollEnabled</code>",id:"scrollenabled",children:[]},{value:"<code>setPage</code>",id:"setpage",children:[]},{value:"<code>setPageWithoutAnimation</code>",id:"setpagewithoutanimation",children:[]}]},{value:"Type Definitions",id:"type-definitions",children:[{value:"ViewPagerScrollState",id:"viewpagerscrollstate",children:[]}]}],o={rightToc:c};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-viewpager"}),"@react-native-community/viewpager")," instead.")),Object(r.b)("p",null,"Container that allows to flip left and right between child views. Each child view of the ",Object(r.b)("inlineCode",{parentName:"p"},"ViewPagerAndroid")," will be treated as a separate page and will be stretched to fill the ",Object(r.b)("inlineCode",{parentName:"p"},"ViewPagerAndroid"),"."),Object(r.b)("p",null,"It is important all children are ",Object(r.b)("inlineCode",{parentName:"p"},"<View>"),"s and not composite components. You can set style properties like ",Object(r.b)("inlineCode",{parentName:"p"},"padding")," or ",Object(r.b)("inlineCode",{parentName:"p"},"backgroundColor")," for each child. It is also important that each child have a ",Object(r.b)("inlineCode",{parentName:"p"},"key")," prop."),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'render() {\n  return (\n    <ViewPagerAndroid\n      style={styles.viewPager}\n      initialPage={0}>\n      <View style={styles.pageStyle} key="1">\n        <Text>First page</Text>\n      </View>\n      <View style={styles.pageStyle} key="2">\n        <Text>Second page</Text>\n      </View>\n    </ViewPagerAndroid>\n  );\n}\n\n...\n\nconst styles = {\n  ...\n  viewPager: {\n    flex: 1\n  },\n  pageStyle: {\n    alignItems: \'center\',\n    padding: 20,\n  }\n}\n')),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("p",null,"Inherits ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/view#props"}),"View Props"),"."),Object(r.b)("h3",{id:"initialpage"},Object(r.b)("inlineCode",{parentName:"h3"},"initialPage")),Object(r.b)("p",null,"Index of initial page that should be selected. Use ",Object(r.b)("inlineCode",{parentName:"p"},"setPage")," method to update the page, and ",Object(r.b)("inlineCode",{parentName:"p"},"onPageSelected")," to monitor page changes"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"keyboarddismissmode"},Object(r.b)("inlineCode",{parentName:"h3"},"keyboardDismissMode")),Object(r.b)("p",null,"Determines whether the keyboard gets dismissed in response to a drag."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"'none' (the default), drags do not dismiss the keyboard."),Object(r.b)("li",{parentName:"ul"},"'on-drag', the keyboard is dismissed when a drag begins.")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('none', 'on-drag')"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onpagescroll"},Object(r.b)("inlineCode",{parentName:"h3"},"onPageScroll")),Object(r.b)("p",null,"Executed when transitioning between pages (either because of animation for the requested page change or when user is swiping/dragging between pages) The ",Object(r.b)("inlineCode",{parentName:"p"},"event.nativeEvent")," object for this callback will carry following data:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"position - index of first page from the left that is currently visible"),Object(r.b)("li",{parentName:"ul"},"offset - value from range ","[0, 1]",' describing stage between page transitions. Value x means that (1 - x) fraction of the page at "position" index is visible, and x fraction of the next page is visible.')),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onpagescrollstatechanged"},Object(r.b)("inlineCode",{parentName:"h3"},"onPageScrollStateChanged")),Object(r.b)("p",null,"Function called when the page scrolling state has changed. The page scrolling state can be in 3 states:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"idle, meaning there is no interaction with the page scroller happening at the time"),Object(r.b)("li",{parentName:"ul"},"dragging, meaning there is currently an interaction with the page scroller"),Object(r.b)("li",{parentName:"ul"},"settling, meaning that there was an interaction with the page scroller, and the page scroller is now finishing its closing or opening animation")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onpageselected"},Object(r.b)("inlineCode",{parentName:"h3"},"onPageSelected")),Object(r.b)("p",null,"This callback will be called once ViewPager finish navigating to selected page (when user swipes between pages). The ",Object(r.b)("inlineCode",{parentName:"p"},"event.nativeEvent")," object passed to this callback will have following fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"position - index of page that has been selected")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"pagemargin"},Object(r.b)("inlineCode",{parentName:"h3"},"pageMargin")),Object(r.b)("p",null,"Blank space to show between pages. This is only visible while scrolling, pages are still edge-to-edge."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"peekenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"peekEnabled")),Object(r.b)("p",null,"Whether enable showing peekFraction or not. If this is true, the preview of last and next page will show in current screen. Defaults to false."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"scrollenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"scrollEnabled")),Object(r.b)("p",null,"When false, the content does not scroll. The default value is true."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setpage"},Object(r.b)("inlineCode",{parentName:"h3"},"setPage")),Object(r.b)("p",null,"A helper function to scroll to a specific page in the ViewPager. The transition between pages will be animated."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"position - index of page that will be selected")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setpagewithoutanimation"},Object(r.b)("inlineCode",{parentName:"h3"},"setPageWithoutAnimation")),Object(r.b)("p",null,"A helper function to scroll to a specific page in the ViewPager. The transition between pages will ",Object(r.b)("em",{parentName:"p"},"not")," be animated."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"position - index of page that will be selected")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(r.b)("h2",{id:"type-definitions"},"Type Definitions"),Object(r.b)("h3",{id:"viewpagerscrollstate"},"ViewPagerScrollState"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$Enum")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Constants:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"idle"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dragging"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"settling"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))))}p.isMDXComponent=!0}}]);