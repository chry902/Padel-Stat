"use strict";(self.webpackChunkpadel_stat=self.webpackChunkpadel_stat||[]).push([[16],{16:function(e,n,r){r.r(n),r.d(n,{default:function(){return x}});var t=r(885),s="styles_CardWrapper__yZyni",i="styles_pointWrapper__QhbdU",l=r(791),o="styles_point__F1p-L",a="styles_green__iIhWR",c="styles_redColor__+fypu",u="styles_bRadiusR__YR75R",d="styles_bRadiusL__DJdEZ",h=r(184),v=function(e){var n=e.item,r=(0,l.useState)(n.value),s=(0,t.Z)(r,2),i=s[0],v=s[1];return(0,h.jsxs)("div",{onClick:function(e){return n.value=n.value+1,void v(n.value)},className:"".concat(o," ").concat("ok"===n.name?a:c," ").concat("ok"===n.name?d:"").concat("griglia"===n.name?u:""),children:[(0,h.jsx)("h6",{children:n.name}),(0,h.jsx)("span",{children:i})]})},p=function(e){var n=e.tiro;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h3",{children:n.tiro}),(0,h.jsx)("div",{className:i,children:n.punto&&n.punto.map((function(e,n){return(0,h.jsx)(v,{item:e},n)}))})]})},m=function(e){var n=e.item,r=e.removePlayer,i=n.storico;i.reverse();var o=(0,l.useState)(n.storico.length-1),a=(0,t.Z)(o,1)[0],c=(0,l.useState)(n.storico[a].allenamento),u=(0,t.Z)(c,1)[0],d=(0,l.useState)(i),v=(0,t.Z)(d,1)[0];v.reverse();return console.log("prova",v.reverse()),(0,h.jsxs)("div",{className:s,children:[(0,h.jsx)("div",{children:(0,h.jsx)("h2",{children:(0,h.jsxs)("span",{children:[n.nome," ",n.cognome]})})}),(0,h.jsx)("div",{children:(0,h.jsx)("ul",{children:u&&u.map((function(e,n){return(0,h.jsx)("li",{children:(0,h.jsx)(p,{tiro:e,index:n})},n)}))})}),(0,h.jsx)("button",{onClick:function(){return e=n,void setTimeout((function(){console.log("eliminato"),r(e,"","")}),"2000");var e},children:"End the Challeng"})]})},_=r(87),x=function(e){var n=e.peopleTraining,r=e.removePlayer;return(0,h.jsxs)("div",{children:[n&&n.map((function(e,n){return(0,h.jsx)(m,{item:e,removePlayer:r},n)})),(0,h.jsx)("div",{children:(0,h.jsx)(_.rU,{to:"/SelectPeople",children:" Return to select people "})})]})}}}]);
//# sourceMappingURL=16.1af6d10e.chunk.js.map