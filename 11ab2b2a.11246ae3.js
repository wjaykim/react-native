(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=d(a),p=n,m=u["".concat(l,".").concat(p)]||u[p]||s[p]||c;return a?r.a.createElement(m,i(i({ref:t},o),{},{components:a})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=p;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<c;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1007:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},1008:function(e,t,a){"use strict";var n=a(0),r=a(1009);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1009:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},1010:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1008),l=a(1007),i=a(54),b=a.n(i),o=37,d=39;t.a=function(e){var t=e.block,a=e.children,i=e.defaultValue,u=e.values,s=e.groupId,p=e.className,m=Object(c.a)(),O=m.tabGroupChoices,j=m.setTabGroupChoices,h=Object(n.useState)(i),f=h[0],g=h[1],N=Object(n.useState)(!1),v=N[0],y=N[1];if(null!=s){var D=O[s];null!=D&&D!==f&&u.some((function(e){return e.value===D}))&&g(D)}var w=function(e){g(e),null!=s&&j(s,e)},C=[],A=function(e){e.metaKey||e.altKey||e.ctrlKey||y(!0)},k=function(){y(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",A),window.addEventListener("mousedown",k),function(){window.removeEventListener("keydown",A),window.removeEventListener("mousedown",k)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},p)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(l.a)("tabs__item",b.a.tabItem,{"tabs__item--active":f===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),A(e)},onFocus:function(){return w(t)},onClick:function(){w(t),y(!1)},onPointerDown:function(){return y(!1)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===f}))[0]))}},1011:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},1012:function(e,t,a){"use strict";var n=a(6),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),c=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",i=r?"macos":c?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},1050:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/mode-089618b034a4d64bad0b39c4be929f4a.png"},157:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(7),c=(a(0),a(1006)),l=a(1010),i=a(1011),b=a(1012),o={id:"datepickerios",title:"\ud83d\udea7 DatePickerIOS"},d={unversionedId:"datepickerios",id:"datepickerios",isDocsHomePage:!1,title:"\ud83d\udea7 DatePickerIOS",description:"Deprecated. Use @react-native-community/datetimepicker instead.",source:"@site/../docs/datepickerios.md",slug:"/datepickerios",permalink:"/docs/next/datepickerios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/datepickerios.md",version:"current",lastUpdatedAt:1603945169},u=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>date</code>",id:"date",children:[]},{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>onDateChange</code>",id:"ondatechange",children:[]},{value:"<code>maximumDate</code>",id:"maximumdate",children:[]},{value:"<code>minimumDate</code>",id:"minimumdate",children:[]},{value:"<code>minuteInterval</code>",id:"minuteinterval",children:[]},{value:"<code>mode</code>",id:"mode",children:[]},{value:"<code>locale</code>",id:"locale",children:[]},{value:"<code>timeZoneOffsetInMinutes</code>",id:"timezoneoffsetinminutes",children:[]},{value:"<code>initialDate</code>",id:"initialdate",children:[]}]}],s={rightToc:u};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-datetimepicker"}),"@react-native-community/datetimepicker")," instead.")),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"DatePickerIOS")," to render a date/time picker (selector) on iOS. This is a controlled component, so you must hook in to the ",Object(c.b)("inlineCode",{parentName:"p"},"onDateChange")," callback and update the ",Object(c.b)("inlineCode",{parentName:"p"},"date")," prop in order for the component to update, otherwise the user's change will be reverted immediately to reflect ",Object(c.b)("inlineCode",{parentName:"p"},"props.date")," as the source of truth."),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)(l.a,{groupId:"syntax",defaultValue:b.a.defaultSyntax,values:b.a.syntax,mdxType:"Tabs"},Object(c.b)(i.a,{value:"functional",mdxType:"TabItem"},Object(c.b)("div",{className:"snack-player","data-snack-name":"DatePickerIOS","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7BuseState%7D%20from%20'react'%3B%0Aimport%20%7BDatePickerIOS%2C%20View%2C%20StyleSheet%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20%5BchosenDate%2C%20setChosenDate%5D%20%3D%20useState(new%20Date())%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CDatePickerIOS%0A%20%20%20%20%20%20%20%20date%3D%7BchosenDate%7D%0A%20%20%20%20%20%20%20%20onDateChange%3D%7BsetChosenDate%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true"})),Object(c.b)(i.a,{value:"classical",mdxType:"TabItem"},Object(c.b)("div",{className:"snack-player","data-snack-name":"DatePickerIOS","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7BComponent%7D%20from%20'react'%3B%0Aimport%20%7BDatePickerIOS%2C%20View%2C%20StyleSheet%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20App%20extends%20Component%20%7B%0A%20%20constructor(props)%20%7B%0A%20%20%20%20super(props)%3B%0A%20%20%20%20this.state%20%3D%20%7BchosenDate%3A%20new%20Date()%7D%3B%0A%0A%20%20%20%20this.setDate%20%3D%20this.setDate.bind(this)%3B%0A%20%20%7D%0A%0A%20%20setDate(newDate)%20%7B%0A%20%20%20%20this.setState(%7BchosenDate%3A%20newDate%7D)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CDatePickerIOS%0A%20%20%20%20%20%20%20%20%20%20date%3D%7Bthis.state.chosenDate%7D%0A%20%20%20%20%20%20%20%20%20%20onDateChange%3D%7Bthis.setDate%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%7D)%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true"}))),Object(c.b)("hr",null),Object(c.b)("h1",{id:"reference"},"Reference"),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("p",null,"Inherits ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/view#props"}),"View Props"),"."),Object(c.b)("h3",{id:"date"},Object(c.b)("inlineCode",{parentName:"h3"},"date")),Object(c.b)("p",null,"The currently selected date."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onchange"},Object(c.b)("inlineCode",{parentName:"h3"},"onChange")),Object(c.b)("p",null,"Date change handler."),Object(c.b)("p",null,"This is called when the user changes the date or time in the UI. The first and only argument is an Event. For getting the date the picker was changed to, use onDateChange instead."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"ondatechange"},Object(c.b)("inlineCode",{parentName:"h3"},"onDateChange")),Object(c.b)("p",null,"Date change handler."),Object(c.b)("p",null,"This is called when the user changes the date or time in the UI. The first and only argument is a Date object representing the new date and time."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"maximumdate"},Object(c.b)("inlineCode",{parentName:"h3"},"maximumDate")),Object(c.b)("p",null,"Maximum date."),Object(c.b)("p",null,"Restricts the range of possible date/time values."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("p",null,"Example with ",Object(c.b)("inlineCode",{parentName:"p"},"maximumDate")," set to December 31, 2017:"),Object(c.b)("center",null,Object(c.b)("img",{src:"/docs/assets/DatePickerIOS/maximumDate.gif",width:"360"})),Object(c.b)("hr",null),Object(c.b)("h3",{id:"minimumdate"},Object(c.b)("inlineCode",{parentName:"h3"},"minimumDate")),Object(c.b)("p",null,"Minimum date."),Object(c.b)("p",null,"Restricts the range of possible date/time values."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#maximumdate"}),Object(c.b)("inlineCode",{parentName:"a"},"maximumDate"))," for an example image."),Object(c.b)("hr",null),Object(c.b)("h3",{id:"minuteinterval"},Object(c.b)("inlineCode",{parentName:"h3"},"minuteInterval")),Object(c.b)("p",null,"The interval at which minutes can be selected."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("p",null,"Example with ",Object(c.b)("inlineCode",{parentName:"p"},"minuteInterval")," set to ",Object(c.b)("inlineCode",{parentName:"p"},"10"),":"),Object(c.b)("center",null,Object(c.b)("img",{src:"/docs/assets/DatePickerIOS/minuteInterval.png",width:"360"})),Object(c.b)("hr",null),Object(c.b)("h3",{id:"mode"},Object(c.b)("inlineCode",{parentName:"h3"},"mode")),Object(c.b)("p",null,"The date picker mode."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('date', 'time', 'datetime', 'countdown')"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("p",null,"Example with ",Object(c.b)("inlineCode",{parentName:"p"},"mode")," set to ",Object(c.b)("inlineCode",{parentName:"p"},"date"),", ",Object(c.b)("inlineCode",{parentName:"p"},"time"),", and ",Object(c.b)("inlineCode",{parentName:"p"},"datetime"),": ",Object(c.b)("img",{src:a(1050).default})),Object(c.b)("hr",null),Object(c.b)("h3",{id:"locale"},Object(c.b)("inlineCode",{parentName:"h3"},"locale")),Object(c.b)("p",null,"The locale for the date picker. Value needs to be a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html"}),"Locale ID"),"."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"timezoneoffsetinminutes"},Object(c.b)("inlineCode",{parentName:"h3"},"timeZoneOffsetInMinutes")),Object(c.b)("p",null,"Timezone offset in minutes."),Object(c.b)("p",null,"By default, the date picker will use the device's timezone. With this parameter, it is possible to force a certain timezone offset. For instance, to show times in Pacific Standard Time, pass -7 ","*"," 60."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"initialdate"},Object(c.b)("inlineCode",{parentName:"h3"},"initialDate")),Object(c.b)("p",null,"Provides an initial value that will change when the user starts selecting a date. It is useful for use-cases where you do not want to deal with listening to events and updating the date prop to keep the controlled state in sync. The controlled state has known bugs which causes it to go out of sync with native. The initialDate prop is intended to allow you to have native be source of truth."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))))}p.isMDXComponent=!0}}]);