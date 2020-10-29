(window.webpackJsonp=window.webpackJsonp||[]).push([[683],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),b=n,h=p["".concat(o,".").concat(b)]||p[b]||u[b]||r;return a?i.a.createElement(h,l(l({ref:t},c),{},{components:a})):i.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},1105:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/animated-diagram-127161e299f43a8c0e677715d6be7881.png"},761:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(2),i=a(7),r=(a(0),a(1006)),o={title:"Using Native Driver for Animated",author:"Janic Duplessis",authorTitle:"Software Engineer at App & Flow",authorURL:"https://twitter.com/janicduplessis",authorImageURL:"https://secure.gravatar.com/avatar/8d6b6c0f5b228b0a8566a69de448b9dd?s=128",authorTwitter:"janicduplessis",tags:["engineering"]},l={permalink:"/blog/2017/02/14/using-native-driver-for-animated",source:"@site/blog/2017-02-14-using-native-driver-for-animated.md",description:"For the past year, we've been working on improving performance of animations that use the Animated library. Animations are very important to create a beautiful user experience but can also be hard to do right. We want to make it easy for developers to create performant animations without having to worry about some of their code causing it to lag.",date:"2017-02-14T00:00:00.000Z",tags:[{label:"engineering",permalink:"/blog/tags/engineering"}],title:"Using Native Driver for Animated",readingTime:6.09,truncated:!1,prevItem:{title:"Introducing Create React Native App",permalink:"/blog/2017/03/13/introducing-create-react-native-app"},nextItem:{title:"A Monthly Release Cadence: Releasing December and January RC",permalink:"/blog/2017/01/07/monthly-release-cadence"}},s=[{value:"What is this?",id:"what-is-this",children:[]},{value:"A bit of history...",id:"a-bit-of-history",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"How do I use this in my app?",id:"how-do-i-use-this-in-my-app",children:[]},{value:"Caveats",id:"caveats",children:[]},{value:"Resources",id:"resources",children:[]}],c={rightToc:s};function d(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"For the past year, we've been working on improving performance of animations that use the Animated library. Animations are very important to create a beautiful user experience but can also be hard to do right. We want to make it easy for developers to create performant animations without having to worry about some of their code causing it to lag."),Object(r.b)("h2",{id:"what-is-this"},"What is this?"),Object(r.b)("p",null,"The Animated API was designed with a very important constraint in mind, it is serializable. This means we can send everything about the animation to native before it has even started and allows native code to perform the animation on the UI thread without having to go through the bridge on every frame. It is very useful because once the animation has started, the JS thread can be blocked and the animation will still run smoothly. In practice this can happen a lot because user code runs on the JS thread and React renders can also lock JS for a long time."),Object(r.b)("h2",{id:"a-bit-of-history"},"A bit of history..."),Object(r.b)("p",null,"This project started about a year ago, when Expo built the li.st app on Android. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/kzzzf"}),"Krzysztof Magiera")," was contracted to build the initial implementation on Android. It ended up working well and li.st was the first app to ship with native driven animations using Animated. A few months later, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/buba447"}),"Brandon Withrow")," built the initial implementation on iOS. After that, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/ryangomba"}),"Ryan Gomba")," and myself worked on adding missing features like support for ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.event")," as well as squash bugs we found when using it in production apps. This was truly a community effort and I would like to thanks everyone that was involved as well as Expo for sponsoring a large part of the development. It is now used by ",Object(r.b)("inlineCode",{parentName:"p"},"Touchable")," components in React Native as well as for navigation animations in the newly released ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-community/react-navigation"}),"React Navigation")," library."),Object(r.b)("h2",{id:"how-does-it-work"},"How does it work?"),Object(r.b)("p",null,"First, let's check out how animations currently work using Animated with the JS driver. When using Animated, you declare a graph of nodes that represent the animations that you want to perform, and then use a driver to update an Animated value using a predefined curve. You may also update an Animated value by connecting it to an event of a ",Object(r.b)("inlineCode",{parentName:"p"},"View")," using ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.event"),"."),Object(r.b)("p",null,Object(r.b)("img",{src:a(1105).default})),Object(r.b)("p",null,"Here's a breakdown of the steps for an animation and where it happens:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"JS: The animation driver uses ",Object(r.b)("inlineCode",{parentName:"li"},"requestAnimationFrame")," to execute on every frame and update the value it drives using the new value it calculates based on the animation curve."),Object(r.b)("li",{parentName:"ul"},"JS: Intermediate values are calculated and passed to a props node that is attached to a ",Object(r.b)("inlineCode",{parentName:"li"},"View"),"."),Object(r.b)("li",{parentName:"ul"},"JS: The ",Object(r.b)("inlineCode",{parentName:"li"},"View")," is updated using ",Object(r.b)("inlineCode",{parentName:"li"},"setNativeProps"),"."),Object(r.b)("li",{parentName:"ul"},"JS to Native bridge."),Object(r.b)("li",{parentName:"ul"},"Native: The ",Object(r.b)("inlineCode",{parentName:"li"},"UIView")," or ",Object(r.b)("inlineCode",{parentName:"li"},"android.View")," is updated.")),Object(r.b)("p",null,"As you can see, most of the work happens on the JS thread. If it is blocked the animation will skip frames. It also needs to go through the JS to Native bridge on every frame to update native views."),Object(r.b)("p",null,"What the native driver does is move all of these steps to native. Since Animated produces a graph of animated nodes, it can be serialized and sent to native only once when the animation starts, eliminating the need to callback into the JS thread; the native code can take care of updating the views directly on the UI thread on every frame."),Object(r.b)("p",null,"Here's an example of how we can serialize an animated value and an interpolation node (not the exact implementation, just an example)."),Object(r.b)("p",null,"Create the native value node, this is the value that will be animated:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"NativeAnimatedModule.createNode({\n  id: 1,\n  type: 'value',\n  initialValue: 0,\n});\n")),Object(r.b)("p",null,"Create the native interpolation node, this tells the native driver how to interpolate a value:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"NativeAnimatedModule.createNode({\n  id: 2,\n  type: 'interpolation',\n  inputRange: [0, 10],\n  outputRange: [10, 0],\n  extrapolate: 'clamp',\n});\n")),Object(r.b)("p",null,"Create the native props node, this tells the native driver which prop on the view it is attached to:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"NativeAnimatedModule.createNode({\n  id: 3,\n  type: 'props',\n  properties: ['style.opacity'],\n});\n")),Object(r.b)("p",null,"Connect nodes together:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"NativeAnimatedModule.connectNodes(1, 2);\nNativeAnimatedModule.connectNodes(2, 3);\n")),Object(r.b)("p",null,"Connect the props node to a view:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"NativeAnimatedModule.connectToView(3, ReactNative.findNodeHandle(viewRef));\n")),Object(r.b)("p",null,"With that, the native animated module has all the info it needs to update the native views directly without having to go to JS to calculate any value."),Object(r.b)("p",null,"All there is left to do is actually start the animation by specifying what type of animation curve we want and what animated value to update. Timing animations can also be simplified by calculating every frame of the animation in advance in JS to make the native implementation smaller."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"NativeAnimatedModule.startAnimation({\n  type: 'timing',\n  frames: [0, 0.1, 0.2, 0.4, 0.65, ...],\n  animatedValueId: 1,\n});\n")),Object(r.b)("p",null,"And now here's the breakdown of what happens when the animation runs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Native: The native animation driver uses ",Object(r.b)("inlineCode",{parentName:"li"},"CADisplayLink")," or ",Object(r.b)("inlineCode",{parentName:"li"},"android.view.Choreographer")," to execute on every frame and update the value it drives using the new value it calculates based on the animation curve."),Object(r.b)("li",{parentName:"ul"},"Native: Intermediate values are calculated and passed to a props node that is attached to a native view."),Object(r.b)("li",{parentName:"ul"},"Native: The ",Object(r.b)("inlineCode",{parentName:"li"},"UIView")," or ",Object(r.b)("inlineCode",{parentName:"li"},"android.View")," is updated.")),Object(r.b)("p",null,"As you can see, no more JS thread and no more bridge which means faster animations! \ud83c\udf89\ud83c\udf89"),Object(r.b)("h2",{id:"how-do-i-use-this-in-my-app"},"How do I use this in my app?"),Object(r.b)("p",null,"For normal animations the answer is simple, just add ",Object(r.b)("inlineCode",{parentName:"p"},"useNativeDriver: true")," to the animation config when starting it."),Object(r.b)("p",null,"Before:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Animated.timing(this.state.animatedValue, {\n  toValue: 1,\n  duration: 500,\n}).start();\n")),Object(r.b)("p",null,"After:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Animated.timing(this.state.animatedValue, {\n  toValue: 1,\n  duration: 500,\n  useNativeDriver: true, // <-- Add this\n}).start();\n")),Object(r.b)("p",null,"Animated values are only compatible with one driver so if you use native driver when starting an animation on a value, make sure every animation on that value also uses the native driver."),Object(r.b)("p",null,"It also works with ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.event"),", this is very useful if you have an animation that must follow the scroll position because without the native driver it will always run a frame behind of the gesture because of the async nature of React Native."),Object(r.b)("p",null,"Before:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"<ScrollView\n  scrollEventThrottle={16}\n  onScroll={Animated.event(\n    [{ nativeEvent: { contentOffset: { y: this.state.animatedValue } } }]\n  )}\n>\n  {content}\n</ScrollView>\n")),Object(r.b)("p",null,"After:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"<Animated.ScrollView // <-- Use the Animated ScrollView wrapper\n  scrollEventThrottle={1} // <-- Use 1 here to make sure no events are ever missed\n  onScroll={Animated.event(\n    [{ nativeEvent: { contentOffset: { y: this.state.animatedValue } } }],\n    { useNativeDriver: true } // <-- Add this\n  )}\n>\n  {content}\n</Animated.ScrollView>\n")),Object(r.b)("h2",{id:"caveats"},"Caveats"),Object(r.b)("p",null,"Not everything you can do with Animated is currently supported in Native Animated. The main limitation is that you can only animate non-layout properties, things like ",Object(r.b)("inlineCode",{parentName:"p"},"transform")," and ",Object(r.b)("inlineCode",{parentName:"p"},"opacity")," will work but Flexbox and position properties won't. Another one is with ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.event"),", it will only work with direct events and not bubbling events. This means it does not work with ",Object(r.b)("inlineCode",{parentName:"p"},"PanResponder")," but does work with things like ",Object(r.b)("inlineCode",{parentName:"p"},"ScrollView#onScroll"),"."),Object(r.b)("p",null,"Native Animated has also been part of React Native for quite a while but has never been documented because it was considered experimental. Because of that make sure you are using a recent version (0.40+) of React Native if you want to use this feature."),Object(r.b)("h2",{id:"resources"},"Resources"),Object(r.b)("p",null,"For more information about animated I recommend watching ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=xtqUJVqpKNo"}),"this talk")," by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/Vjeux"}),"Christopher Chedeau"),"."),Object(r.b)("p",null,"If you want a deep dive into animations and how offloading them to native can improve user experience there is also ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=qgSMjYWqBk4"}),"this talk")," by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/kzzzf"}),"Krzysztof Magiera"),"."))}d.isMDXComponent=!0}}]);