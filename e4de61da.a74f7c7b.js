(window.webpackJsonp=window.webpackJsonp||[]).push([[825],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),d=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,u=s["".concat(o,".").concat(m)]||s[m]||p[m]||l;return n?i.a.createElement(u,r(r({ref:t},b),{},{components:n})):i.a.createElement(u,r({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var b=2;b<l;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},894:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(7),l=(n(0),n(1006)),o={id:"animated",title:"Animated"},r={unversionedId:"animated",id:"version-0.61/animated",isDocsHomePage:!1,title:"Animated",description:"The Animated library is designed to make animations fluid, powerful, and painless to build and maintain. Animated focuses on declarative relationships between inputs and outputs, with configurable transforms in between, and start/stop methods to control time-based animation execution.",source:"@site/versioned_docs/version-0.61/animated.md",slug:"/animated",permalink:"/docs/0.61/animated",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/animated.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/api",previous:{title:"\ud83d\udea7 AlertIOS",permalink:"/docs/0.61/alertios"},next:{title:"AppRegistry",permalink:"/docs/0.61/appregistry"}},c=[{value:"Overview",id:"overview",children:[{value:"Configuring animations",id:"configuring-animations",children:[]},{value:"Working with animations",id:"working-with-animations",children:[]},{value:"Using the native driver",id:"using-the-native-driver",children:[]},{value:"Animatable components",id:"animatable-components",children:[]},{value:"Composing animations",id:"composing-animations",children:[]},{value:"Combining animated values",id:"combining-animated-values",children:[]},{value:"Interpolation",id:"interpolation",children:[]},{value:"Handling gestures and other events",id:"handling-gestures-and-other-events",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>decay()</code>",id:"decay",children:[]},{value:"<code>timing()</code>",id:"timing",children:[]},{value:"<code>spring()</code>",id:"spring",children:[]},{value:"<code>add()</code>",id:"add",children:[]},{value:"<code>subtract()</code>",id:"subtract",children:[]},{value:"<code>divide()</code>",id:"divide",children:[]},{value:"<code>multiply()</code>",id:"multiply",children:[]},{value:"<code>modulo()</code>",id:"modulo",children:[]},{value:"<code>diffClamp()</code>",id:"diffclamp",children:[]},{value:"<code>delay()</code>",id:"delay",children:[]},{value:"<code>sequence()</code>",id:"sequence",children:[]},{value:"<code>parallel()</code>",id:"parallel",children:[]},{value:"<code>stagger()</code>",id:"stagger",children:[]},{value:"<code>loop()</code>",id:"loop",children:[]},{value:"<code>event()</code>",id:"event",children:[]},{value:"<code>forkEvent()</code>",id:"forkevent",children:[]},{value:"<code>unforkEvent()</code>",id:"unforkevent",children:[]}]},{value:"Properties",id:"properties",children:[{value:"<code>Value</code>",id:"value",children:[]},{value:"<code>ValueXY</code>",id:"valuexy",children:[]},{value:"<code>Interpolation</code>",id:"interpolation-1",children:[]},{value:"<code>Node</code>",id:"node",children:[]},{value:"<code>createAnimatedComponent</code>",id:"createanimatedcomponent",children:[]},{value:"<code>attachNativeEvent</code>",id:"attachnativeevent",children:[]}]}],b={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"Animated")," library is designed to make animations fluid, powerful, and painless to build and maintain. ",Object(l.b)("inlineCode",{parentName:"p"},"Animated")," focuses on declarative relationships between inputs and outputs, with configurable transforms in between, and ",Object(l.b)("inlineCode",{parentName:"p"},"start"),"/",Object(l.b)("inlineCode",{parentName:"p"},"stop")," methods to control time-based animation execution."),Object(l.b)("p",null,"The most basic workflow for creating an animation is to create an ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.Value"),", hook it up to one or more style attributes of an animated component, and then drive updates via animations using ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.timing()"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"Animated.timing(\n  // Animate value over time\n  this.state.fadeAnim, // The value to drive\n  {\n    toValue: 1 // Animate to final value of 1\n  }\n).start(); // Start the animation\n")),Object(l.b)("p",null,"Refer to the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/animations#animated-api"}),"Animations")," guide to see additional examples of ",Object(l.b)("inlineCode",{parentName:"p"},"Animated")," in action."),Object(l.b)("h2",{id:"overview"},"Overview"),Object(l.b)("p",null,"There are two value types you can use with ",Object(l.b)("inlineCode",{parentName:"p"},"Animated"),":"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/animated#value"}),Object(l.b)("inlineCode",{parentName:"a"},"Animated.Value()"))," for single values"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/animated#valuexy"}),Object(l.b)("inlineCode",{parentName:"a"},"Animated.ValueXY()"))," for vectors")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Animated.Value")," can bind to style properties or other props, and can be interpolated as well. A single ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.Value")," can drive any number of properties."),Object(l.b)("h3",{id:"configuring-animations"},"Configuring animations"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Animated")," provides three types of animation types. Each animation type provides a particular animation curve that controls how your values animate from their initial value to the final value:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/animated#decay"}),Object(l.b)("inlineCode",{parentName:"a"},"Animated.decay()"))," starts with an initial velocity and gradually slows to a stop."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/animated#spring"}),Object(l.b)("inlineCode",{parentName:"a"},"Animated.spring()"))," provides a basic spring physics model."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/animated#timing"}),Object(l.b)("inlineCode",{parentName:"a"},"Animated.timing()"))," animates a value over time using ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/easing"}),"easing functions"),".")),Object(l.b)("p",null,"In most cases, you will be using ",Object(l.b)("inlineCode",{parentName:"p"},"timing()"),". By default, it uses a symmetric easeInOut curve that conveys the gradual acceleration of an object to full speed and concludes by gradually decelerating to a stop."),Object(l.b)("h3",{id:"working-with-animations"},"Working with animations"),Object(l.b)("p",null,"Animations are started by calling ",Object(l.b)("inlineCode",{parentName:"p"},"start()")," on your animation. ",Object(l.b)("inlineCode",{parentName:"p"},"start()")," takes a completion callback that will be called when the animation is done. If the animation finished running normally, the completion callback will be invoked with ",Object(l.b)("inlineCode",{parentName:"p"},"{finished: true}"),". If the animation is done because ",Object(l.b)("inlineCode",{parentName:"p"},"stop()")," was called on it before it could finish (e.g. because it was interrupted by a gesture or another animation), then it will receive ",Object(l.b)("inlineCode",{parentName:"p"},"{finished: false}"),"."),Object(l.b)("h3",{id:"using-the-native-driver"},"Using the native driver"),Object(l.b)("p",null,"By using the native driver, we send everything about the animation to native before starting the animation, allowing native code to perform the animation on the UI thread without having to go through the bridge on every frame. Once the animation has started, the JS thread can be blocked without affecting the animation."),Object(l.b)("p",null,"You can use the native driver by specifying ",Object(l.b)("inlineCode",{parentName:"p"},"useNativeDriver: true")," in your animation configuration. See the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/animations#using-the-native-driver"}),"Animations")," guide to learn more."),Object(l.b)("h3",{id:"animatable-components"},"Animatable components"),Object(l.b)("p",null,"Only animatable components can be animated. These unique components do the magic of binding the animated values to the properties, and do targeted native updates to avoid the cost of the react render and reconciliation process on every frame. They also handle cleanup on unmount so they are safe by default."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/animated#createanimatedcomponent"}),Object(l.b)("inlineCode",{parentName:"a"},"createAnimatedComponent()"))," can be used to make a component animatable.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Animated")," exports the following animatable components using the above wrapper:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Animated.Image")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Animated.ScrollView")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Animated.Text")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Animated.View")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Animated.FlatList")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Animated.SectionList"))),Object(l.b)("h3",{id:"composing-animations"},"Composing animations"),Object(l.b)("p",null,"Animations can also be combined in complex ways using composition functions:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/animated#delay"}),Object(l.b)("inlineCode",{parentName:"a"},"Animated.delay()"))," starts an animation after a given delay."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/animated#parallel"}),Object(l.b)("inlineCode",{parentName:"a"},"Animated.parallel()"))," starts a number of animations at the same time."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/animated#sequence"}),Object(l.b)("inlineCode",{parentName:"a"},"Animated.sequence()"))," starts the animations in order, waiting for each to complete before starting the next."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/animated#stagger"}),Object(l.b)("inlineCode",{parentName:"a"},"Animated.stagger()"))," starts animations in order and in parallel, but with successive delays.")),Object(l.b)("p",null,"Animations can also be chained together by setting the ",Object(l.b)("inlineCode",{parentName:"p"},"toValue")," of one animation to be another ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.Value"),". See ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/animations#tracking-dynamic-values"}),"Tracking dynamic values")," in the Animations guide."),Object(l.b)("p",null,"By default, if one animation is stopped or interrupted, then all other animations in the group are also stopped."),Object(l.b)("h3",{id:"combining-animated-values"},"Combining animated values"),Object(l.b)("p",null,"You can combine two animated values via addition, subtraction, multiplication, division, or modulo to make a new animated value:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/animated#add"}),Object(l.b)("inlineCode",{parentName:"a"},"Animated.add()"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/animated#subtract"}),Object(l.b)("inlineCode",{parentName:"a"},"Animated.subtract()"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/animated#divide"}),Object(l.b)("inlineCode",{parentName:"a"},"Animated.divide()"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/animated#modulo"}),Object(l.b)("inlineCode",{parentName:"a"},"Animated.modulo()"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/animated#multiply"}),Object(l.b)("inlineCode",{parentName:"a"},"Animated.multiply()")))),Object(l.b)("h3",{id:"interpolation"},"Interpolation"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"interpolate()")," function allows input ranges to map to different output ranges. By default, it will extrapolate the curve beyond the ranges given, but you can also have it clamp the output value. It uses linear interpolation by default but also supports easing functions."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/animated#interpolate"}),Object(l.b)("inlineCode",{parentName:"a"},"interpolate()")))),Object(l.b)("p",null,"Read more about interpolation in the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/animations#interpolation"}),"Animation")," guide."),Object(l.b)("h3",{id:"handling-gestures-and-other-events"},"Handling gestures and other events"),Object(l.b)("p",null,"Gestures, like panning or scrolling, and other events can map directly to animated values using ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.event()"),". This is done with a structured map syntax so that values can be extracted from complex event objects. The first level is an array to allow mapping across multiple args, and that array contains nested objects."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.61/animated#event"}),Object(l.b)("inlineCode",{parentName:"a"},"Animated.event()")))),Object(l.b)("p",null,"For example, when working with horizontal scrolling gestures, you would do the following in order to map ",Object(l.b)("inlineCode",{parentName:"p"},"event.nativeEvent.contentOffset.x")," to ",Object(l.b)("inlineCode",{parentName:"p"},"scrollX")," (an ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.Value"),"):"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"})," onScroll={Animated.event(\n   // scrollX = e.nativeEvent.contentOffset.x\n   [{ nativeEvent: {\n        contentOffset: {\n          x: scrollX\n        }\n      }\n    }]\n )}\n")),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"methods"},"Methods"),Object(l.b)("p",null,"When the given value is a ValueXY instead of a Value, each config option may be a vector of the form ",Object(l.b)("inlineCode",{parentName:"p"},"{x: ..., y: ...}")," instead of a scalar."),Object(l.b)("h3",{id:"decay"},Object(l.b)("inlineCode",{parentName:"h3"},"decay()")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static decay(value, config)\n")),Object(l.b)("p",null,"Animates a value from an initial velocity to zero based on a decay coefficient."),Object(l.b)("p",null,"Config is an object that may have the following options:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"velocity"),": Initial velocity. Required."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"deceleration"),": Rate of decay. Default 0.997."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"isInteraction"),': Whether or not this animation creates an "interaction handle" on the ',Object(l.b)("inlineCode",{parentName:"li"},"InteractionManager"),". Default true."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"useNativeDriver"),": Uses the native driver when true. Default false.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"timing"},Object(l.b)("inlineCode",{parentName:"h3"},"timing()")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static timing(value, config)\n")),Object(l.b)("p",null,"Animates a value along a timed easing curve. The ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/easing"}),Object(l.b)("inlineCode",{parentName:"a"},"Easing"))," module has tons of predefined curves, or you can use your own function."),Object(l.b)("p",null,"Config is an object that may have the following options:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"duration"),": Length of animation (milliseconds). Default 500."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"easing"),": Easing function to define curve. Default is ",Object(l.b)("inlineCode",{parentName:"li"},"Easing.inOut(Easing.ease)"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay"),": Start the animation after delay (milliseconds). Default 0."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"isInteraction"),': Whether or not this animation creates an "interaction handle" on the ',Object(l.b)("inlineCode",{parentName:"li"},"InteractionManager"),". Default true."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"useNativeDriver"),": Uses the native driver when true. Default false.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"spring"},Object(l.b)("inlineCode",{parentName:"h3"},"spring()")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static spring(value, config)\n")),Object(l.b)("p",null,"Animates a value according to an analytical spring model based on ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Harmonic_oscillator#Damped_harmonic_oscillator"}),"damped harmonic oscillation"),". Tracks velocity state to create fluid motions as the ",Object(l.b)("inlineCode",{parentName:"p"},"toValue")," updates, and can be chained together."),Object(l.b)("p",null,"Config is an object that may have the following options."),Object(l.b)("p",null,"Note that you can only define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one:"),Object(l.b)("p",null,"The friction/tension or bounciness/speed options match the spring model in ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/pop"}),Object(l.b)("inlineCode",{parentName:"a"},"Facebook Pop")),", ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/rebound/"}),"Rebound"),", and ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"http://origami.design/"}),"Origami"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"friction"),': Controls "bounciness"/overshoot. Default 7.'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"tension"),": Controls speed. Default 40."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"speed"),": Controls speed of the animation. Default 12."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"bounciness"),": Controls bounciness. Default 8.")),Object(l.b)("p",null,"Specifying stiffness/damping/mass as parameters makes ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.spring")," use an analytical spring model based on the motion equations of a ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Harmonic_oscillator#Damped_harmonic_oscillator"}),"damped harmonic oscillator"),". This behavior is slightly more precise and faithful to the physics behind spring dynamics, and closely mimics the implementation in iOS's CASpringAnimation."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"stiffness"),": The spring stiffness coefficient. Default 100."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"damping"),": Defines how the spring\u2019s motion should be damped due to the forces of friction. Default 10."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mass"),": The mass of the object attached to the end of the spring. Default 1.")),Object(l.b)("p",null,"Other configuration options are as follows:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"velocity"),": The initial velocity of the object attached to the spring. Default 0 (object is at rest)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overshootClamping"),": Boolean indicating whether the spring should be clamped and not bounce. Default false."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restDisplacementThreshold"),": The threshold of displacement from rest below which the spring should be considered at rest. Default 0.001."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"restSpeedThreshold"),": The speed at which the spring should be considered at rest in pixels per second. Default 0.001."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"delay"),": Start the animation after delay (milliseconds). Default 0."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"isInteraction"),': Whether or not this animation creates an "interaction handle" on the ',Object(l.b)("inlineCode",{parentName:"li"},"InteractionManager"),". Default true."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"useNativeDriver"),": Uses the native driver when true. Default false.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"add"},Object(l.b)("inlineCode",{parentName:"h3"},"add()")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static add(a, b)\n")),Object(l.b)("p",null,"Creates a new Animated value composed from two Animated values added together."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"subtract"},Object(l.b)("inlineCode",{parentName:"h3"},"subtract()")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static subtract(a, b)\n")),Object(l.b)("p",null,"Creates a new Animated value composed by subtracting the second Animated value from the first Animated value."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"divide"},Object(l.b)("inlineCode",{parentName:"h3"},"divide()")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static divide(a, b)\n")),Object(l.b)("p",null,"Creates a new Animated value composed by dividing the first Animated value by the second Animated value."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"multiply"},Object(l.b)("inlineCode",{parentName:"h3"},"multiply()")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static multiply(a, b)\n")),Object(l.b)("p",null,"Creates a new Animated value composed from two Animated values multiplied together."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"modulo"},Object(l.b)("inlineCode",{parentName:"h3"},"modulo()")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static modulo(a, modulus)\n")),Object(l.b)("p",null,"Creates a new Animated value that is the (non-negative) modulo of the provided Animated value"),Object(l.b)("hr",null),Object(l.b)("h3",{id:"diffclamp"},Object(l.b)("inlineCode",{parentName:"h3"},"diffClamp()")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static diffClamp(a, min, max)\n")),Object(l.b)("p",null,"Create a new Animated value that is limited between 2 values. It uses the difference between the last value so even if the value is far from the bounds it will start changing when the value starts getting closer again. (",Object(l.b)("inlineCode",{parentName:"p"},"value = clamp(value + diff, min, max)"),")."),Object(l.b)("p",null,"This is useful with scroll events, for example, to show the navbar when scrolling up and to hide it when scrolling down."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"delay"},Object(l.b)("inlineCode",{parentName:"h3"},"delay()")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static delay(time)\n")),Object(l.b)("p",null,"Starts an animation after the given delay."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"sequence"},Object(l.b)("inlineCode",{parentName:"h3"},"sequence()")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static sequence(animations)\n")),Object(l.b)("p",null,"Starts an array of animations in order, waiting for each to complete before starting the next. If the current running animation is stopped, no following animations will be started."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"parallel"},Object(l.b)("inlineCode",{parentName:"h3"},"parallel()")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static parallel(animations, config?)\n")),Object(l.b)("p",null,"Starts an array of animations all at the same time. By default, if one of the animations is stopped, they will all be stopped. You can override this with the ",Object(l.b)("inlineCode",{parentName:"p"},"stopTogether")," flag."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"stagger"},Object(l.b)("inlineCode",{parentName:"h3"},"stagger()")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static stagger(time, animations)\n")),Object(l.b)("p",null,"Array of animations may run in parallel (overlap), but are started in sequence with successive delays. Nice for doing trailing effects."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"loop"},Object(l.b)("inlineCode",{parentName:"h3"},"loop()")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static loop(animation, config?)\n")),Object(l.b)("p",null,"Loops a given animation continuously, so that each time it reaches the end, it resets and begins again from the start. Will loop without blocking the UI thread if the child animation is set to ",Object(l.b)("inlineCode",{parentName:"p"},"useNativeDriver: true"),". In addition, loops can prevent ",Object(l.b)("inlineCode",{parentName:"p"},"VirtualizedList"),"-based components from rendering more rows while the animation is running. You can pass ",Object(l.b)("inlineCode",{parentName:"p"},"isInteraction: false")," in the child animation config to fix this."),Object(l.b)("p",null,"Config is an object that may have the following options:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"iterations"),": Number of times the animation should loop. Default ",Object(l.b)("inlineCode",{parentName:"li"},"-1")," (infinite).")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"event"},Object(l.b)("inlineCode",{parentName:"h3"},"event()")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static event(argMapping, config?)\n")),Object(l.b)("p",null,"Takes an array of mappings and extracts values from each arg accordingly, then calls ",Object(l.b)("inlineCode",{parentName:"p"},"setValue")," on the mapped outputs. e.g."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"})," onScroll={Animated.event(\n   [{nativeEvent: {contentOffset: {x: this._scrollX}}}],\n   {listener: (event) => console.log(event)}, // Optional async listener\n )}\n ...\n onPanResponderMove: Animated.event([\n   null,                // raw event arg ignored\n   {dx: this._panX}],    // gestureState arg\n{listener: (event, gestureState) => console.log(event, gestureState)}, // Optional async listener\n ),\n")),Object(l.b)("p",null,"Config is an object that may have the following options:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"listener"),": Optional async listener."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"useNativeDriver"),": Uses the native driver when true. Default false.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"forkevent"},Object(l.b)("inlineCode",{parentName:"h3"},"forkEvent()")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static forkEvent(event, listener)\n")),Object(l.b)("p",null,"Advanced imperative API for snooping on animated events that are passed in through props. It permits to add a new javascript listener to an existing ",Object(l.b)("inlineCode",{parentName:"p"},"AnimatedEvent"),". If ",Object(l.b)("inlineCode",{parentName:"p"},"animatedEvent")," is a javascript listener, it will merge the 2 listeners into a single one, and if ",Object(l.b)("inlineCode",{parentName:"p"},"animatedEvent")," is null/undefined, it will assign the javascript listener directly. Use values directly where possible."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"unforkevent"},Object(l.b)("inlineCode",{parentName:"h3"},"unforkEvent()")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static unforkEvent(event, listener)\n")),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)("h3",{id:"value"},Object(l.b)("inlineCode",{parentName:"h3"},"Value")),Object(l.b)("p",null,"Standard value class for driving animations. Typically initialized with ",Object(l.b)("inlineCode",{parentName:"p"},"new Animated.Value(0);")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"valuexy"},Object(l.b)("inlineCode",{parentName:"h3"},"ValueXY")),Object(l.b)("p",null,"2D value class for driving 2D animations, such as pan gestures."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"interpolation-1"},Object(l.b)("inlineCode",{parentName:"h3"},"Interpolation")),Object(l.b)("p",null,"Exported to use the Interpolation type in flow."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"node"},Object(l.b)("inlineCode",{parentName:"h3"},"Node")),Object(l.b)("p",null,"Exported for ease of type checking. All animated values derive from this class."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"createanimatedcomponent"},Object(l.b)("inlineCode",{parentName:"h3"},"createAnimatedComponent")),Object(l.b)("p",null,"Make any React component Animatable. Used to create ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.View"),", etc."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"attachnativeevent"},Object(l.b)("inlineCode",{parentName:"h3"},"attachNativeEvent")),Object(l.b)("p",null,"Imperative API to attach an animated value to an event on a view. Prefer using ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.event")," with ",Object(l.b)("inlineCode",{parentName:"p"},"useNativeDrive: true")," if possible."))}d.isMDXComponent=!0}}]);