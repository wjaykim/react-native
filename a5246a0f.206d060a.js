(window.webpackJsonp=window.webpackJsonp||[]).push([[598],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,j=d["".concat(b,".").concat(s)]||d[s]||O[s]||l;return n?r.a.createElement(j,i(i({ref:t},c),{},{components:n})):r.a.createElement(j,i({ref:t},c))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var c=2;c<l;c++)b[c]=n[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},679:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),l=(n(0),n(1006)),b={id:"modal",title:"Modal"},i={unversionedId:"modal",id:"version-0.60/modal",isDocsHomePage:!1,title:"Modal",description:"The Modal component is a basic way to present content above an enclosing view.",source:"@site/versioned_docs/version-0.60/modal.md",slug:"/modal",permalink:"/docs/0.60/modal",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/modal.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/components",previous:{title:"\ud83d\udea7 MaskedViewIOS",permalink:"/docs/0.60/maskedviewios"},next:{title:"Picker",permalink:"/docs/0.60/picker"}},o=[{value:"Props",id:"props",children:[{value:"<code>visible</code>",id:"visible",children:[]},{value:"<code>supportedOrientations</code>",id:"supportedorientations",children:[]},{value:"<code>onRequestClose</code>",id:"onrequestclose",children:[]},{value:"<code>onShow</code>",id:"onshow",children:[]},{value:"<code>transparent</code>",id:"transparent",children:[]},{value:"<code>animationType</code>",id:"animationtype",children:[]},{value:"<code>hardwareAccelerated</code>",id:"hardwareaccelerated",children:[]},{value:"<code>onDismiss</code>",id:"ondismiss",children:[]},{value:"<code>onOrientationChange</code>",id:"onorientationchange",children:[]},{value:"<code>presentationStyle</code>",id:"presentationstyle",children:[]},{value:"<code>animated</code>",id:"animated",children:[]}]}],c={rightToc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The Modal component is a basic way to present content above an enclosing view."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Note: If you need more control over how to present modals over the rest of your app, then consider using a top-level Navigator.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react';\nimport {\n  Modal,\n  Text,\n  TouchableHighlight,\n  View,\n  Alert\n} from 'react-native';\n\nclass ModalExample extends Component {\n  state = {\n    modalVisible: false\n  };\n\n  setModalVisible(visible) {\n    this.setState({ modalVisible: visible });\n  }\n\n  render() {\n    return (\n      <View style={{ marginTop: 22 }}>\n        <Modal\n          animationType=\"slide\"\n          transparent={false}\n          visible={this.state.modalVisible}\n          onRequestClose={() => {\n            Alert.alert('Modal has been closed.');\n          }}>\n          <View style={{ marginTop: 22 }}>\n            <View>\n              <Text>Hello World!</Text>\n\n              <TouchableHighlight\n                onPress={() => {\n                  this.setModalVisible(!this.state.modalVisible);\n                }}>\n                <Text>Hide Modal</Text>\n              </TouchableHighlight>\n            </View>\n          </View>\n        </Modal>\n\n        <TouchableHighlight\n          onPress={() => {\n            this.setModalVisible(true);\n          }}>\n          <Text>Show Modal</Text>\n        </TouchableHighlight>\n      </View>\n    );\n  }\n}\n")),Object(l.b)("hr",null),Object(l.b)("h1",{id:"reference"},"Reference"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("h3",{id:"visible"},Object(l.b)("inlineCode",{parentName:"h3"},"visible")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"visible")," prop determines whether your modal is visible."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"supportedorientations"},Object(l.b)("inlineCode",{parentName:"h3"},"supportedOrientations")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"supportedOrientations")," prop allows the modal to be rotated to any of the specified orientations. On iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field. When using ",Object(l.b)("inlineCode",{parentName:"p"},"presentationStyle")," of ",Object(l.b)("inlineCode",{parentName:"p"},"pageSheet")," or ",Object(l.b)("inlineCode",{parentName:"p"},"formSheet"),", this property will be ignored by iOS."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"array of enum('portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right')"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iOS")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onrequestclose"},Object(l.b)("inlineCode",{parentName:"h3"},"onRequestClose")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"onRequestClose")," callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. Because of this required prop, be aware that ",Object(l.b)("inlineCode",{parentName:"p"},"BackHandler")," events will not be emitted as long as the modal is open."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Android, Platform.isTVOS")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"(Others)")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onshow"},Object(l.b)("inlineCode",{parentName:"h3"},"onShow")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"onShow")," prop allows passing a function that will be called once the modal has been shown."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"transparent"},Object(l.b)("inlineCode",{parentName:"h3"},"transparent")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"transparent")," prop determines whether your modal will fill the entire view. Setting this to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," will render the modal over a transparent background."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"animationtype"},Object(l.b)("inlineCode",{parentName:"h3"},"animationType")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"animationType")," prop controls how the modal animates."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"slide")," slides in from the bottom"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fade")," fades into view"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"none")," appears without an animation")),Object(l.b)("p",null,"Default is set to ",Object(l.b)("inlineCode",{parentName:"p"},"none"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enum('none', 'slide', 'fade')"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"hardwareaccelerated"},Object(l.b)("inlineCode",{parentName:"h3"},"hardwareAccelerated")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"hardwareAccelerated")," prop controls whether to force hardware acceleration for the underlying window."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Android")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"ondismiss"},Object(l.b)("inlineCode",{parentName:"h3"},"onDismiss")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"onDismiss")," prop allows passing a function that will be called once the modal has been dismissed."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iOS")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onorientationchange"},Object(l.b)("inlineCode",{parentName:"h3"},"onOrientationChange")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"onOrientationChange")," callback is called when the orientation changes while the modal is being displayed. The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iOS")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"presentationstyle"},Object(l.b)("inlineCode",{parentName:"h3"},"presentationStyle")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"presentationStyle")," prop controls how the modal appears (generally on larger devices such as iPad or plus-sized iPhones). See ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.apple.com/reference/uikit/uimodalpresentationstyle"}),"https://developer.apple.com/reference/uikit/uimodalpresentationstyle")," for details."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"fullScreen")," covers the screen completely"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pageSheet")," covers portrait-width view centered (only on larger devices)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"formSheet")," covers narrow-width view centered (only on larger devices)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"overFullScreen")," covers the screen completely, but allows transparency")),Object(l.b)("p",null,"Default is set to ",Object(l.b)("inlineCode",{parentName:"p"},"overFullScreen")," or ",Object(l.b)("inlineCode",{parentName:"p"},"fullScreen")," depending on ",Object(l.b)("inlineCode",{parentName:"p"},"transparent")," property."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Platform"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enum('fullScreen', 'pageSheet', 'formSheet', 'overFullScreen')"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iOS")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"animated"},Object(l.b)("inlineCode",{parentName:"h3"},"animated")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Deprecated.")," Use the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.60/modal#animationtype"}),Object(l.b)("inlineCode",{parentName:"a"},"animationType"))," prop instead.")))}p.isMDXComponent=!0}}]);