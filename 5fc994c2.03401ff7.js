(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{449:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(1043),i=a(1044),c=a(1031),o=function(e,t){return r.a.createElement("div",{className:"showcase",key:t},r.a.createElement("div",null,r.a.createElement("a",{href:e.infoLink},s(e)),r.a.createElement("h3",null,e.name),m(e),u(e.infoTitle,e.infoLink)))},s=function(e){var t=e.icon;return e.icon.startsWith("http")||(t=Object(i.a)("img/showcase/"+e.icon)),r.a.createElement("img",{src:t,alt:e.name})},u=function(e,t){return t?r.a.createElement("p",{className:"info"},r.a.createElement("a",{href:t,target:"_blank"},e)):null},m=function(e){if(e.linkAppStore||e.linkPlayStore){var t=e.linkAppStore?r.a.createElement("a",{href:e.linkAppStore,target:"_blank"},"iOS"):null,a=e.linkPlayStore?r.a.createElement("a",{href:e.linkPlayStore,target:"_blank"},"Android"):null;return r.a.createElement("p",null,a,a&&t?" \u2022 ":"",t)}};t.default=function(){var e=Object(c.a)().siteConfig.customFields.users,t=e.filter((function(e){return e.pinned})),a=e.filter((function(e){return!e.pinned})).sort((function(e,t){return e.name.localeCompare(t.name)})),n=t.concat(a);return r.a.createElement(l.a,{title:"Who's using React Native?"},r.a.createElement("div",{className:"showcaseSection"},r.a.createElement("div",{className:"prose"},r.a.createElement("h1",null,"Who's using React Native?"),r.a.createElement("p",null,"Thousands of apps are using React Native, from established Fortune 500 companies to hot new startups. If you're curious to see what can be accomplished with React Native, check out these apps!")),r.a.createElement("div",{className:"logos"},n.map(o)),r.a.createElement("a",{class:"form-button",href:"https://forms.gle/BdNf3v5hemV9D5c86",target:"_blank"},"Fill out this form to apply to the customer spotlight."),r.a.createElement("p",null,"A curated list of"," ",r.a.createElement("a",{href:"https://github.com/ReactNativeNews/React-Native-Apps"},"open source React Native apps")," ","is also being kept by ",r.a.createElement("a",{href:"https://infinite.red/"},"Infinite Red"),".")))}}}]);