(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),i=n(5),r=n(8),a=n(1),u=n(3),l=n.n(u),b=(n(13),n(14),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var h=function(t){var e=t.onClick,n=Object(a.useState)(!1),c=Object(i.a)(n,2),s=c[0],o=c[1];return Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!s}),onClick:function(){o(!s),e&&e()},children:"Reverse"})},O=function(){var t=Object(a.useState)(c.NONE),e=Object(i.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(!1),u=Object(i.a)(o,2),O=u[0],d=u[1],N=function(t,e){var n=e.sortType,s=e.isReversed,o=Object(r.a)(t);switch(n){case c.ALPHABET:o.sort((function(t,e){return t.localeCompare(e)}));break;case c.LENGTH:o.sort((function(t,e){return t.length-e.length}))}return s&&o.reverse(),o}(j,{sortType:n,isReversed:O}),f=n!==c.NONE;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==c.ALPHABET}),onClick:function(){return s(c.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":n!==c.LENGTH}),onClick:function(){return s(c.LENGTH)},children:"Sort by length"}),Object(b.jsx)(h,{onClick:function(){d(!O)}}),f&&Object(b.jsx)("button",{type:"button",className:l()("button is-danger",{"is-light":f}),onClick:function(){s(c.NONE),d(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:N.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a926f07b.chunk.js.map