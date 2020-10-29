(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=d(a),O=n,s=u["".concat(c,".").concat(O)]||u[O]||p[O]||b;return a?r.a.createElement(s,l(l({ref:t},i),{},{components:a})):r.a.createElement(s,l({ref:t},i))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},114:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(7),b=(a(0),a(1006)),c={id:"touchablenativefeedback",title:"TouchableNativeFeedback"},l={unversionedId:"touchablenativefeedback",id:"version-0.61/touchablenativefeedback",isDocsHomePage:!1,title:"TouchableNativeFeedback",description:"A wrapper for making views respond properly to touches (Android only). On Android this component uses native state drawable to display touch feedback.",source:"@site/versioned_docs/version-0.61/touchablenativefeedback.md",slug:"/touchablenativefeedback",permalink:"/docs/0.61/touchablenativefeedback",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/touchablenativefeedback.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/components",previous:{title:"TouchableHighlight",permalink:"/docs/0.61/touchablehighlight"},next:{title:"TouchableOpacity",permalink:"/docs/0.61/touchableopacity"}},o=[{value:"Props",id:"props",children:[{value:"<code>background</code>",id:"background",children:[]},{value:"<code>useForeground</code>",id:"useforeground",children:[]},{value:"<code>hasTVPreferredFocus</code>",id:"hastvpreferredfocus",children:[]},{value:"<code>nextFocusDown</code>",id:"nextfocusdown",children:[]},{value:"<code>nextFocusForward</code>",id:"nextfocusforward",children:[]},{value:"<code>nextFocusLeft</code>",id:"nextfocusleft",children:[]},{value:"<code>nextFocusRight</code>",id:"nextfocusright",children:[]},{value:"<code>nextFocusUp</code>",id:"nextfocusup",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>SelectableBackground()</code>",id:"selectablebackground",children:[]},{value:"<code>SelectableBackgroundBorderless()</code>",id:"selectablebackgroundborderless",children:[]},{value:"<code>Ripple()</code>",id:"ripple",children:[]},{value:"<code>canUseNativeForeground()</code>",id:"canusenativeforeground",children:[]}]}],i={rightToc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"A wrapper for making views respond properly to touches (Android only). On Android this component uses native state drawable to display touch feedback."),Object(b.b)("p",null,"At the moment it only supports having a single View instance as a child node, as it's implemented by replacing that View with another instance of RCTView node with some additional properties set."),Object(b.b)("p",null,"Background drawable of native feedback touchable can be customized with ",Object(b.b)("inlineCode",{parentName:"p"},"background")," property."),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"renderButton: function() {\n  return (\n    <TouchableNativeFeedback\n        onPress={this._onPressButton}\n        background={TouchableNativeFeedback.SelectableBackground()}>\n      <View style={{width: 150, height: 100, backgroundColor: 'red'}}>\n        <Text style={{margin: 30}}>Button</Text>\n      </View>\n    </TouchableNativeFeedback>\n  );\n},\n")),Object(b.b)("hr",null),Object(b.b)("h1",{id:"reference"},"Reference"),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("p",null,"Inherits ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.61/touchablewithoutfeedback#props"}),"TouchableWithoutFeedback Props"),"."),Object(b.b)("h3",{id:"background"},Object(b.b)("inlineCode",{parentName:"h3"},"background")),Object(b.b)("p",null,"Determines the type of background drawable that's going to be used to display feedback. It takes an object with ",Object(b.b)("inlineCode",{parentName:"p"},"type")," property and extra data depending on the ",Object(b.b)("inlineCode",{parentName:"p"},"type"),". It's recommended to use one of the static methods to generate that dictionary."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"backgroundPropType"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"useforeground"},Object(b.b)("inlineCode",{parentName:"h3"},"useForeground")),Object(b.b)("p",null,"Set to true to add the ripple effect to the foreground of the view, instead of the background. This is useful if one of your child views has a background of its own, or you're e.g. displaying images, and you don't want the ripple to be covered by them."),Object(b.b)("p",null,"Check TouchableNativeFeedback.canUseNativeForeground() first, as this is only available on Android 6.0 and above. If you try to use this on older versions you will get a warning and fallback to background."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hastvpreferredfocus"},Object(b.b)("inlineCode",{parentName:"h3"},"hasTVPreferredFocus")),Object(b.b)("p",null,"TV preferred focus (see documentation for the View component)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusdown"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusDown")),Object(b.b)("p",null,"TV next focus down (see documentation for the View component)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusforward"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusForward")),Object(b.b)("p",null,"TV next focus forward (see documentation for the View component)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusleft"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusLeft")),Object(b.b)("p",null,"TV next focus left (see documentation for the View component)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusright"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusRight")),Object(b.b)("p",null,"TV next focus right (see documentation for the View component)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusup"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusUp")),Object(b.b)("p",null,"TV next focus up (see documentation for the View component)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"selectablebackground"},Object(b.b)("inlineCode",{parentName:"h3"},"SelectableBackground()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static SelectableBackground()\n")),Object(b.b)("p",null,"Creates an object that represents android theme's default background for selectable elements (?android:attr/selectableItemBackground)."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"selectablebackgroundborderless"},Object(b.b)("inlineCode",{parentName:"h3"},"SelectableBackgroundBorderless()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static SelectableBackgroundBorderless()\n")),Object(b.b)("p",null,"Creates an object that represent android theme's default background for borderless selectable elements (?android:attr/selectableItemBackgroundBorderless). Available on android API level 21+."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ripple"},Object(b.b)("inlineCode",{parentName:"h3"},"Ripple()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static Ripple(color: string, borderless: boolean)\n")),Object(b.b)("p",null,"Creates an object that represents ripple drawable with specified color (as a string). If property ",Object(b.b)("inlineCode",{parentName:"p"},"borderless")," evaluates to true the ripple will render outside of the view bounds (see native actionbar buttons as an example of that behavior). This background type is available on Android API level 21+."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"color"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ripple color")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"borderless"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If the ripple can render outside its bounds")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"canusenativeforeground"},Object(b.b)("inlineCode",{parentName:"h3"},"canUseNativeForeground()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static canUseNativeForeground()\n")))}d.isMDXComponent=!0}}]);