(window.webpackJsonp=window.webpackJsonp||[]).push([[523],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=o,h=b["".concat(s,".").concat(d)]||b[d]||p[d]||r;return n?a.a.createElement(h,i(i({ref:t},l),{},{components:n})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1057:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Button-b053d1b4ecdc78a87ce72711549ba2ca.png"},605:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(2),a=n(7),r=(n(0),n(1006)),s={id:"handling-touches",title:"Handling Touches"},i={unversionedId:"handling-touches",id:"version-0.62/handling-touches",isDocsHomePage:!1,title:"Handling Touches",description:"Users interact with mobile apps mainly through touch. They can use a combination of gestures, such as tapping on a button, scrolling a list, or zooming on a map. React Native provides components to handle all sorts of common gestures, as well as a comprehensive gesture responder system to allow for more advanced gesture recognition, but the one component you will most likely be interested in is the basic Button.",source:"@site/versioned_docs/version-0.62/handling-touches.md",slug:"/handling-touches",permalink:"/docs/0.62/handling-touches",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/handling-touches.md",version:"0.62",lastUpdatedAt:1603945169,sidebar:"version-0.62/docs",previous:{title:"Color Reference",permalink:"/docs/0.62/colors"},next:{title:"Navigating Between Screens",permalink:"/docs/0.62/navigation"}},c=[{value:"Displaying a basic button",id:"displaying-a-basic-button",children:[]},{value:"Touchables",id:"touchables",children:[]},{value:"Scrolling and swiping",id:"scrolling-and-swiping",children:[]}],l={rightToc:c};function u(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Users interact with mobile apps mainly through touch. They can use a combination of gestures, such as tapping on a button, scrolling a list, or zooming on a map. React Native provides components to handle all sorts of common gestures, as well as a comprehensive ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/0.62/gesture-responder-system"}),"gesture responder system")," to allow for more advanced gesture recognition, but the one component you will most likely be interested in is the basic Button."),Object(r.b)("h2",{id:"displaying-a-basic-button"},"Displaying a basic button"),Object(r.b)("p",null,Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/0.62/button"}),"Button")," provides a basic button component that is rendered nicely on all platforms. The minimal example to display a button looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"<Button\n  onPress={() => {\n    alert('You tapped the button!');\n  }}\n  title=\"Press Me\"\n/>\n")),Object(r.b)("p",null,'This will render a blue label on iOS, and a blue rounded rectangle with light text on Android. Pressing the button will call the "onPress" function, which in this case displays an alert popup. If you like, you can specify a "color" prop to change the color of your button.'),Object(r.b)("p",null,Object(r.b)("img",{src:n(1057).default})),Object(r.b)("p",null,"Go ahead and play around with the ",Object(r.b)("inlineCode",{parentName:"p"},"Button"),' component using the example below. You can select which platform your app is previewed in by clicking on the toggle in the bottom right, then click on "Tap to Play" to preview the app.'),Object(r.b)("div",{className:"snack-player","data-snack-name":"Button Basics","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20StyleSheet%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20ButtonBasics%20extends%20Component%20%7B%0A%20%20_onPressButton()%20%7B%0A%20%20%20%20alert('You%20tapped%20the%20button!')%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Press%20Me%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Press%20Me%22%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22%23841584%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.alternativeLayoutButtonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22This%20looks%20great!%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22OK!%22%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22%23841584%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20flex%3A%201%2C%0A%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20margin%3A%2020%0A%20%20%7D%2C%0A%20%20alternativeLayoutButtonContainer%3A%20%7B%0A%20%20%20%20margin%3A%2020%2C%0A%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20justifyContent%3A%20'space-between'%0A%20%20%7D%0A%7D)%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(r.b)("h2",{id:"touchables"},"Touchables"),Object(r.b)("p",null,'If the basic button doesn\'t look right for your app, you can build your own button using any of the "Touchable" components provided by React Native. The "Touchable" components provide the capability to capture tapping gestures, and can display feedback when a gesture is recognized. These components do not provide any default styling, however, so you will need to do a bit of work to get them looking nicely in your app.'),Object(r.b)("p",null,'Which "Touchable" component you use will depend on what kind of feedback you want to provide:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Generally, you can use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/0.62/touchablehighlight"}),Object(r.b)("strong",{parentName:"a"},"TouchableHighlight"))," anywhere you would use a button or link on web. The view's background will be darkened when the user presses down on the button.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You may consider using ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/0.62/touchablenativefeedback"}),Object(r.b)("strong",{parentName:"a"},"TouchableNativeFeedback"))," on Android to display ink surface reaction ripples that respond to the user's touch.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/0.62/touchableopacity"}),Object(r.b)("strong",{parentName:"a"},"TouchableOpacity"))," can be used to provide feedback by reducing the opacity of the button, allowing the background to be seen through while the user is pressing down.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you need to handle a tap gesture but you don't want any feedback to be displayed, use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/0.62/touchablewithoutfeedback"}),Object(r.b)("strong",{parentName:"a"},"TouchableWithoutFeedback")),"."))),Object(r.b)("p",null,"In some cases, you may want to detect when a user presses and holds a view for a set amount of time. These long presses can be handled by passing a function to the ",Object(r.b)("inlineCode",{parentName:"p"},"onLongPress"),' props of any of the "Touchable" components.'),Object(r.b)("p",null,"Let's see all of these in action:"),Object(r.b)("div",{className:"snack-player","data-snack-name":"Touchables","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Platform%2C%20StyleSheet%2C%20Text%2C%20TouchableHighlight%2C%20TouchableOpacity%2C%20TouchableNativeFeedback%2C%20TouchableWithoutFeedback%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20Touchables%20extends%20Component%20%7B%0A%20%20_onPressButton()%20%7B%0A%20%20%20%20alert('You%20tapped%20the%20button!')%0A%20%20%7D%0A%0A%20%20_onLongPressButton()%20%7B%0A%20%20%20%20alert('You%20long-pressed%20the%20button!')%0A%20%20%7D%0A%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CTouchableHighlight%20onPress%3D%7Bthis._onPressButton%7D%20underlayColor%3D%22white%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableHighlight%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7Bthis._onPressButton%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableOpacity%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%3CTouchableNativeFeedback%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3D%7BPlatform.OS%20%3D%3D%3D%20'android'%20%3F%20TouchableNativeFeedback.SelectableBackground()%20%3A%20''%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableNativeFeedback%20%7BPlatform.OS%20!%3D%3D%20'android'%20%3F%20'(Android%20only)'%20%3A%20''%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableNativeFeedback%3E%0A%20%20%20%20%20%20%20%20%3CTouchableWithoutFeedback%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableWithoutFeedback%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableWithoutFeedback%3E%0A%20%20%20%20%20%20%20%20%3CTouchableHighlight%20onPress%3D%7Bthis._onPressButton%7D%20onLongPress%3D%7Bthis._onLongPressButton%7D%20underlayColor%3D%22white%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchable%20with%20Long%20Press%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20paddingTop%3A%2060%2C%0A%20%20%20%20alignItems%3A%20'center'%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20width%3A%20260%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20backgroundColor%3A%20'%232196F3'%0A%20%20%7D%2C%0A%20%20buttonText%3A%20%7B%0A%20%20%20%20textAlign%3A%20'center'%2C%0A%20%20%20%20padding%3A%2020%2C%0A%20%20%20%20color%3A%20'white'%0A%20%20%7D%0A%7D)%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(r.b)("h2",{id:"scrolling-and-swiping"},"Scrolling and swiping"),Object(r.b)("p",null,"Gestures commonly used on devices with touchable screens include swipes and pans. These allow the user to scroll through a list of items, or swipe through pages of content. For these, check out the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/0.62/scrollview"}),"ScrollView")," Core Component."))}u.isMDXComponent=!0}}]);