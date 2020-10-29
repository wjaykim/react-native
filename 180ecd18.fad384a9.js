(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,h=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?r.a.createElement(h,c(c({ref:t},p),{},{components:n})):r.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(7),o=(n(0),n(1006)),i={id:"improvingux",title:"Improving User Experience"},c={unversionedId:"improvingux",id:"version-0.62/improvingux",isDocsHomePage:!1,title:"Improving User Experience",description:"Configure text inputs",source:"@site/versioned_docs/version-0.62/improvingux.md",slug:"/improvingux",permalink:"/docs/0.62/improvingux",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/improvingux.md",version:"0.62",lastUpdatedAt:1603945169},l=[{value:"Configure text inputs",id:"configure-text-inputs",children:[]},{value:"Manage layout when keyboard is visible",id:"manage-layout-when-keyboard-is-visible",children:[]},{value:"Make tappable areas larger",id:"make-tappable-areas-larger",children:[]},{value:"Use Android Ripple",id:"use-android-ripple",children:[]},{value:"Screen orientation lock",id:"screen-orientation-lock",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"configure-text-inputs"},"Configure text inputs"),Object(o.b)("p",null,"Entering text on touch phone is a challenge - small screen, software keyboard. But based on what kind of data you need, you can make it easier by properly configuring the text inputs:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Focus the first field automatically"),Object(o.b)("li",{parentName:"ul"},"Use placeholder text as an example of expected data format"),Object(o.b)("li",{parentName:"ul"},"Enable or disable autocapitalization and autocorrect"),Object(o.b)("li",{parentName:"ul"},"Choose keyboard type (e.g. email, numeric)"),Object(o.b)("li",{parentName:"ul"},"Make sure the return button focuses the next field or submits the form")),Object(o.b)("p",null,"Check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.62/textinput"}),Object(o.b)("inlineCode",{parentName:"a"},"TextInput")," docs")," for more configuration options."),Object(o.b)("video",{src:"/img/textinput.mp4",muted:!0,autoplay:!0,loop:!0,width:"320",height:"430"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/H1iGt2vSW"}),"Try it on your phone")),Object(o.b)("h2",{id:"manage-layout-when-keyboard-is-visible"},"Manage layout when keyboard is visible"),Object(o.b)("p",null,"Software keyboard takes almost half of the screen. If you have interactive elements that can get covered by the keyboard, make sure they are still accessible by using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.62/keyboardavoidingview"}),Object(o.b)("inlineCode",{parentName:"a"},"KeyboardAvoidingView")," component"),"."),Object(o.b)("video",{src:"/img/keyboardavoidingview.mp4",muted:!0,autoplay:!0,loop:!0,width:"320",height:"448"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/ryxRkwnrW"}),"Try it on your phone")),Object(o.b)("h2",{id:"make-tappable-areas-larger"},"Make tappable areas larger"),Object(o.b)("p",null,"On mobile phones it's hard to be very precise when pressing buttons. Make sure all interactive elements are 44x44 or larger. One way to do this is to leave enough space for the element, ",Object(o.b)("inlineCode",{parentName:"p"},"padding"),", ",Object(o.b)("inlineCode",{parentName:"p"},"minWidth")," and ",Object(o.b)("inlineCode",{parentName:"p"},"minHeight")," style values can be useful for that. Alternatively, you can use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.62/touchablewithoutfeedback#hitslop"}),Object(o.b)("inlineCode",{parentName:"a"},"hitSlop")," prop")," to increase interactive area without affecting the layout. Here's a demo:"),Object(o.b)("video",{src:"/img/hitslop.mp4",muted:!0,autoplay:!0,loop:!0,width:"320",height:"120"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/rJPwCt4HZ"}),"Try it on your phone")),Object(o.b)("h2",{id:"use-android-ripple"},"Use Android Ripple"),Object(o.b)("p",null,"Android API 21+ uses the material design ripple to provide user with feedback when they touch an interactable area on the screen. React Native exposes this through the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.62/touchablenativefeedback"}),Object(o.b)("inlineCode",{parentName:"a"},"TouchableNativeFeedback")," component"),". Using this touchable effect instead of opacity or highlight will often make your app feel much more fitting on the platform. That said, you need to be careful when using it because it doesn't work on iOS or on Android API < 21, so you will need to fallback to using one of the other Touchable components on iOS. You can use a library like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-community/react-native-platform-touchable"}),"react-native-platform-touchable")," to handle the platform differences for you."),Object(o.b)("video",{src:"/img/ripple.mp4",muted:!0,autoplay:!0,loop:!0,width:"320"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/SJywqe3rZ"}),"Try it on your phone")),Object(o.b)("h2",{id:"screen-orientation-lock"},"Screen orientation lock"),Object(o.b)("p",null,"Multiple screen orientations should work fine by default unless you're using ",Object(o.b)("inlineCode",{parentName:"p"},"Dimensions")," API and don't handle orientation changes. If you don't want to support multiple screen orientations, you can lock the screen orientation to either portrait or landscape."),Object(o.b)("p",null,"On iOS, in the General tab and Deployment Info section of Xcode enable the Device Orientation you want to support (ensure you have selected iPhone from the Devices menu when making the changes). For Android, open the AndroidManifest.xml file and within the activity element add ",Object(o.b)("inlineCode",{parentName:"p"},"'android:screenOrientation=\"portrait\"'")," to lock to portrait or ",Object(o.b)("inlineCode",{parentName:"p"},"'android:screenOrientation=\"landscape\"'")," to lock to landscape."),Object(o.b)("h1",{id:"learn-more"},"Learn more"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://material.io/"}),"Material Design")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.apple.com/ios/human-interface-guidelines/overview/design-principles/"}),"Human Interface Guidelines")," are great resources for learning more about designing for mobile platforms."))}u.isMDXComponent=!0}}]);