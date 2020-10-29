(window.webpackJsonp=window.webpackJsonp||[]).push([[383],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},466:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(7),r=(n(0),n(1006)),o={id:"navigation",title:"Navigating Between Screens"},c={unversionedId:"navigation",id:"version-0.61/navigation",isDocsHomePage:!1,title:"Navigating Between Screens",description:"Mobile apps are rarely made up of a single screen. Managing the presentation of, and transition between, multiple screens is typically handled by what is known as a navigator.",source:"@site/versioned_docs/version-0.61/navigation.md",slug:"/navigation",permalink:"/docs/0.61/navigation",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/navigation.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/docs",previous:{title:"Platform Specific Code",permalink:"/docs/0.61/platform-specific-code"},next:{title:"Images",permalink:"/docs/0.61/images"}},l=[{value:"React Navigation",id:"react-navigation",children:[{value:"Installation and setup",id:"installation-and-setup",children:[]},{value:"Usage",id:"usage",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Mobile apps are rarely made up of a single screen. Managing the presentation of, and transition between, multiple screens is typically handled by what is known as a navigator."),Object(r.b)("p",null,"This guide covers the various navigation components available in React Native. If you are getting started with navigation, you will probably want to use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/navigation#react-navigation"}),"React Navigation"),". React Navigation provides a straightforward navigation solution, with the ability to present common stack navigation and tabbed navigation patterns on both Android and iOS."),Object(r.b)("p",null,"If you'd like to achieve a native look and feel on both Android and iOS, or you're integrating React Native into an app that already manages navigation natively, the following library provides native navigation on both platforms: ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wix/react-native-navigation"}),"react-native-navigation"),"."),Object(r.b)("h2",{id:"react-navigation"},"React Navigation"),Object(r.b)("p",null,"The community solution to navigation is a standalone library that allows developers to set up the screens of an app with a few lines of code."),Object(r.b)("h3",{id:"installation-and-setup"},"Installation and setup"),Object(r.b)("p",null,"First, you need to install them in your project:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npm install @react-navigation/native @react-navigation/stack\n")),Object(r.b)("p",null,"The second step is to install the required peer dependencies. You need to run different commands depending on whether your projects is an Expo managed project or a bare React Native project."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you have an Expo managed project, install the dependencies with ",Object(r.b)("inlineCode",{parentName:"p"},"expo"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you have an bare React Native project, install the dependencies with ",Object(r.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view\n")),Object(r.b)("p",{parentName:"li"},"For iOS with bare React Native project, make sure you have ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://cocoapods.org/"}),"Cocoapods")," installed. Then install the pods to complete the installation:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"cd ios\npod install\ncd ..\n")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: You might get warnings related to peer dependencies after installation. They are usually caused my incorrect version ranges specified in some packages. You can safely ignore most warnings as long as your app builds.")),Object(r.b)("p",null,"To finalize installation of ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-gesture-handler"),", add the following at the ",Object(r.b)("strong",{parentName:"p"},"top")," (make sure it's at the top and there's nothing else before it) of your entry file, such as ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," or ",Object(r.b)("inlineCode",{parentName:"p"},"App.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import 'react-native-gesture-handler';\n")),Object(r.b)("p",null,"Now, you need to wrap the whole app in ",Object(r.b)("inlineCode",{parentName:"p"},"NavigationContainer"),". Usually you'd do this in your entry file, such as ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," or ",Object(r.b)("inlineCode",{parentName:"p"},"App.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import 'react-native-gesture-handler';\nimport * as React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      {/* Rest of your app code */}\n    </NavigationContainer>\n  );\n}\n")),Object(r.b)("p",null,"Now you are ready to build and run your app on the device/simulator."),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("p",null,"Now you can create an app with a home screen and a profile screen:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nconst Stack = createStackNavigator();\n\nfunction MyStack() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen\n          name=\"Home\"\n          component={Home}\n          options={{ title: 'Welcome' }}\n        />\n        <Stack.Screen name=\"Profile\" component={Profile} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n")),Object(r.b)("p",null,"In this example, there are 2 screens (",Object(r.b)("inlineCode",{parentName:"p"},"Home")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Profile"),") defined using the ",Object(r.b)("inlineCode",{parentName:"p"},"Stack.Screen")," component. Similarly, you can define as many screens as you like."),Object(r.b)("p",null,"You can set options such as the screen title for each screen in the ",Object(r.b)("inlineCode",{parentName:"p"},"options")," prop of ",Object(r.b)("inlineCode",{parentName:"p"},"Stack.Screen"),"."),Object(r.b)("p",null,"Each screen takes a ",Object(r.b)("inlineCode",{parentName:"p"},"component")," prop that is a React component. Those components receive a prop called ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," which has various methods to link to other screens. For example, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"navigation.navigate")," to go to the ",Object(r.b)("inlineCode",{parentName:"p"},"Profile")," screen:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"function HomeScreen({ navigation }) {\n  return (\n    <Button\n      title=\"Go to Jane's profile\"\n      onPress={() =>\n        navigation.navigate('Profile', { name: 'Jane' })\n      }\n    />\n  );\n}\n")),Object(r.b)("p",null,"The views in the stack navigator use native components and the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.61/animated"}),Object(r.b)("inlineCode",{parentName:"a"},"Animated"))," library to deliver 60fps animations that are run on the native thread. Plus, the animations and gestures can be customized."),Object(r.b)("p",null,"React Navigation also has packages for different kind of navigators such as tabs and drawer. You can use them to implement various patterns in your app."),Object(r.b)("p",null,"For a complete intro to React Navigation, follow the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/getting-started.html"}),"React Navigation Getting Started Guide"),"."))}p.isMDXComponent=!0}}]);