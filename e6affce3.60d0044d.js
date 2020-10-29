(window.webpackJsonp=window.webpackJsonp||[]).push([[840],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),O=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=O(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),i=O(a),u=n,s=i["".concat(l,".").concat(u)]||i[u]||j[u]||b;return a?r.a.createElement(s,c(c({ref:t},p),{},{components:a})):r.a.createElement(s,c({ref:t},p))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<b;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},909:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return O}));var n=a(2),r=a(7),b=(a(0),a(1006)),l={id:"alertios",title:"\ud83d\udea7 AlertIOS"},c={unversionedId:"alertios",id:"version-0.62/alertios",isDocsHomePage:!1,title:"\ud83d\udea7 AlertIOS",description:"Deprecated. Use Alert instead.",source:"@site/versioned_docs/version-0.62/alertios.md",slug:"/alertios",permalink:"/docs/0.62/alertios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/alertios.md",version:"0.62",lastUpdatedAt:1603945169},o=[{value:"Methods",id:"methods",children:[{value:"<code>alert()</code>",id:"alert",children:[]},{value:"<code>prompt()</code>",id:"prompt",children:[]}]},{value:"Type Definitions",id:"type-definitions",children:[{value:"AlertType",id:"alerttype",children:[]},{value:"AlertButtonStyle",id:"alertbuttonstyle",children:[]},{value:"ButtonsArray",id:"buttonsarray",children:[]}]}],p={rightToc:o};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"alert"}),Object(b.b)("inlineCode",{parentName:"a"},"Alert"))," instead.")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"AlertIOS")," provides functionality to create an iOS alert dialog with a message or create a prompt for user input."),Object(b.b)("p",null,"Creating an iOS alert:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"AlertIOS.alert(\n  'Sync Complete',\n  'All your data are belong to us.'\n);\n")),Object(b.b)("p",null,"Creating an iOS prompt:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"AlertIOS.prompt('Enter a value', null, (text) =>\n  console.log('You entered ' + text)\n);\n")),Object(b.b)("p",null,"We recommend using the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"alert"}),Object(b.b)("inlineCode",{parentName:"a"},"Alert.alert"))," method for cross-platform support if you don't need to create iOS-only prompts."),Object(b.b)("hr",null),Object(b.b)("h1",{id:"reference"},"Reference"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"alert"},Object(b.b)("inlineCode",{parentName:"h3"},"alert()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static alert(title: string, [message]: string, [callbackOrButtons]: ?(() => void), ButtonsArray, [type]: AlertType): [object Object]\n")),Object(b.b)("p",null,"Create and display a popup alert."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"title"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The dialog's title. Passing null or '' will hide the title.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"message"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An optional message that appears below the dialog's title.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callbackOrButtons"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"?(() => void),",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"alertios#buttonsarray"}),"ButtonsArray")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This optional argument should be either a single-argument function or an array of buttons. If passed a function, it will be called when the user taps 'OK'. If passed an array of button configurations, each button should include a ",Object(b.b)("inlineCode",{parentName:"td"},"text")," key, as well as optional ",Object(b.b)("inlineCode",{parentName:"td"},"onPress")," and ",Object(b.b)("inlineCode",{parentName:"td"},"style")," keys. ",Object(b.b)("inlineCode",{parentName:"td"},"style")," should be one of 'default', 'cancel' or 'destructive'.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"alertios#alerttype"}),"AlertType")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Deprecated, do not use.")))),Object(b.b)("p",null,"Example with custom buttons:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"AlertIOS.alert(\n  'Update available',\n  'Keep your app up to date to enjoy the latest features',\n  [\n    {\n      text: 'Cancel',\n      onPress: () => console.log('Cancel Pressed'),\n      style: 'cancel'\n    },\n    {\n      text: 'Install',\n      onPress: () => console.log('Install Pressed')\n    }\n  ]\n);\n")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"prompt"},Object(b.b)("inlineCode",{parentName:"h3"},"prompt()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static prompt(title: string, [message]: string, [callbackOrButtons]: ?((text: string) => void), ButtonsArray, [type]: AlertType, [defaultValue]: string, [keyboardType]: string): [object Object]\n")),Object(b.b)("p",null,"Create and display a prompt to enter some text."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"title"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The dialog's title.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"message"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An optional message that appears above the text input.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callbackOrButtons"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"?((text: string) => void),",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"alertios#buttonsarray"}),"ButtonsArray")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This optional argument should be either a single-argument function or an array of buttons. If passed a function, it will be called with the prompt's value when the user taps 'OK'. If passed an array of button configurations, each button should include a ",Object(b.b)("inlineCode",{parentName:"td"},"text")," key, as well as optional ",Object(b.b)("inlineCode",{parentName:"td"},"onPress")," and ",Object(b.b)("inlineCode",{parentName:"td"},"style")," keys (see example). ",Object(b.b)("inlineCode",{parentName:"td"},"style")," should be one of 'default', 'cancel' or 'destructive'.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"alertios#alerttype"}),"AlertType")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This configures the text input. One of 'plain-text', 'secure-text' or 'login-password'.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"defaultValue"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The default text in text input.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"keyboardType"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The keyboard type of first text field(if exists). One of 'default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter' or 'web-search'.")))),Object(b.b)("p",null,"Example with custom buttons:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"AlertIOS.prompt(\n  'Enter password',\n  'Enter your password to claim your $1.5B in lottery winnings',\n  [\n    {\n      text: 'Cancel',\n      onPress: () => console.log('Cancel Pressed'),\n      style: 'cancel'\n    },\n    {\n      text: 'OK',\n      onPress: (password) =>\n        console.log('OK Pressed, password: ' + password)\n    }\n  ],\n  'secure-text'\n);\n")),Object(b.b)("p",null,","),Object(b.b)("p",null,"Example with the default button and a custom callback:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"AlertIOS.prompt(\n  'Update username',\n  null,\n  (text) => console.log('Your username is ' + text),\n  null,\n  'default'\n);\n")),Object(b.b)("h2",{id:"type-definitions"},"Type Definitions"),Object(b.b)("h3",{id:"alerttype"},"AlertType"),Object(b.b)("p",null,"An Alert button type"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$Enum")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Constants:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default alert with no inputs")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"plain-text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Plain text input alert")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"secure-text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Secure text input alert")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"login-password"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Login and password alert")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"alertbuttonstyle"},"AlertButtonStyle"),Object(b.b)("p",null,"An Alert button style"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$Enum")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Constants:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default button style")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cancel"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cancel button style")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"destructive"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Destructive button style")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"buttonsarray"},"ButtonsArray"),Object(b.b)("p",null,"Array or buttons"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Properties:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[text]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Button label")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[onPress]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback function when button pressed")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[style]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"alertios#alertbuttonstyle"}),"AlertButtonStyle")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Button style")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Constants:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"text"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Button label")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onPress"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback function when button pressed")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"style"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Button style")))))}O.isMDXComponent=!0}}]);