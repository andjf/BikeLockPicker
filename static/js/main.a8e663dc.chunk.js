(this["webpackJsonpbike-lock-picker"]=this["webpackJsonpbike-lock-picker"]||[]).push([[0],[,,,,,,,,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},,function(t,n,e){},,function(t,n,e){"use strict";e.r(n);var c=e(1),a=e.n(c),r=e(6),i=e.n(r),s=(e(11),e(2)),u=e(4),o=(e(12),e(13),e(0));var l=function(t){var n=t.inputStrings,e=t.inputChangeFunction,c=t.addInputFunction,a=t.removeInputFunction,r=t.checkButtonFunction,i=t.minimumInputs;return Object(o.jsxs)("div",{className:"inputs",children:[n.map((function(t,n){return Object(o.jsx)("input",{className:"dialInput "+n,onChange:e,type:"text"},n)})),Object(o.jsx)("hr",{}),Object(o.jsx)("button",{className:"inputButton",onClick:c,children:"Add Dial"}),Object(o.jsx)("button",{className:"inputButton",onClick:a,children:n.length===i?Object(o.jsx)("strike",{children:"Remove Dial"}):"Remove Dial"}),Object(o.jsx)("button",{className:"inputButton",onClick:r,children:"Check"})]})};e(15);var h=function(t){var n=t.englishWords,e=t.stringInputs,c=t.checkClicked,a=t.currentIndex,r=t.subtractFromCurrentIndexFunction,i=t.addToCurrentIndexFunction,s=t.changeSearchFunction,u=t.searchFunction;function l(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}return Object(o.jsx)("div",{className:"outputs",children:0===n.length?Object(o.jsx)("h1",{children:e.some((function(t){return""===t}))?"Fill Out Dials":c?"No Results":"Click Check"}):Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:[l(a+1)," of ",l(n.length)]}),Object(o.jsx)("h1",{children:n[a]}),Object(o.jsxs)("div",{className:"navContainer",children:[Object(o.jsx)("button",{onClick:r,className:"navButton leftButton",children:"<"}),Object(o.jsx)("button",{onClick:i,className:"navButton rightButton",children:">"})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"searchContainer",children:[Object(o.jsx)("input",{onChange:s,type:"text",className:"searchInput",id:"searchInput"}),Object(o.jsx)("button",{onClick:u,className:"searchButton",children:"Search"})]}),Object(o.jsx)("p",{className:"searchHelp",children:"Search word or position"})]})})};var d=function(){var t=e(16);function n(e){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(0===e.length)return[];if(e.length-1===c.length){var a,r=[],i=Object(u.a)(e[e.length-1]);try{for(i.s();!(a=i.n()).done;){var s=a.value,o=c+s;-1!==t.indexOf(o)&&r.push(o)}}catch(O){i.e(O)}finally{i.f()}return r}var l,h=[],d=Object(u.a)(e[c.length]);try{for(d.s();!(l=d.n()).done;){var j,b=l.value,p=Object(u.a)(n(e,c+b));try{for(p.s();!(j=p.n()).done;){var g=j.value;h.push(g)}}catch(O){p.e(O)}finally{p.f()}}}catch(O){d.e(O)}finally{d.f()}return h}var a=Object(c.useState)(Array.from(Array(4)).map((function(){return""}))),r=Object(s.a)(a,2),i=r[0],d=r[1],j=Object(c.useState)(""),b=Object(s.a)(j,2),p=b[0],g=b[1],O=Object(c.useState)(!1),f=Object(s.a)(O,2),v=f[0],m=f[1],x=Object(c.useState)([]),k=Object(s.a)(x,2),C=k[0],I=k[1],N=Object(c.useState)(0),F=Object(s.a)(N,2),B=F[0],S=F[1];return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)(l,{inputStrings:i,inputChangeFunction:function(t){m(!1),I([]);var n=parseInt(t.target.className.split(" ")[1]);d(i.slice(0,n).concat([t.target.value]).concat(i.slice(n+1,i.length)))},addInputFunction:function(){I([]),d(i.concat(""))},removeInputFunction:function(){I([]),i.length>2&&d(i.slice(0,i.length-1))},checkButtonFunction:function(){0===C.length&&(m(!0),I(n(i.map((function(t){return t.toLowerCase()})))))},minimumInputs:2}),Object(o.jsx)(h,{englishWords:C,stringInputs:i,checkClicked:v,currentIndex:B,subtractFromCurrentIndexFunction:function(){S(((B-1)%C.length+C.length)%C.length)},addToCurrentIndexFunction:function(){S((B+1)%C.length)},changeSearchFunction:function(t){isNaN(parseInt(t.target.value))?g(t.target.value):g(parseInt(t.target.value))},searchFunction:function(){if(p)if(isNaN(p)){var t=C.indexOf(p.toLowerCase());-1===t?document.getElementById("searchInput").value="Couldn't find that":S(t)}else S(((p-1)%C.length+C.length)%C.length)}})]})})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.a8e663dc.chunk.js.map