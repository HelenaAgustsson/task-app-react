(this["webpackJsonptask-list"]=this["webpackJsonptask-list"]||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(21),s=n.n(a),o=(n(29),n(14)),i=n(24),u=n(6),j=n.n(u),l=n(10),d=n(9),b=n(1),h=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(b.jsx)("button",{className:"btn",onClick:r,style:{backgroundColor:t},children:n})},f=n(2),p=function(e){var t=e.title,n=e.onAdd,r=e.showAdd,c=Object(f.e)();return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("h1",{children:t}),"/"===c.pathname&&Object(b.jsx)(h,{color:"green",text:r?"Close":"Add",onClick:n})]})},O=n(23),x=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(b.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""," "),onDoubleClick:function(){r(t.id)},children:[Object(b.jsxs)("h3",{children:[t.text," ",Object(b.jsx)(O.a,{onClick:function(){return n(t.id)},style:{cursor:"pointer"}})," "]}),Object(b.jsx)("p",{children:t.day})]})},m=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)(x,{task:e,onDelete:n,onToggle:r},e.id)}))})},v=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),u=i[0],j=i[1],l=Object(r.useState)(!1),h=Object(d.a)(l,2),f=h[0],p=h[1];return Object(b.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:f}),s(""),j(""),p(!1)):alert("Please add a task")},children:[Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Task"}),Object(b.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Day & Time"}),Object(b.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control form-control-check",children:[Object(b.jsx)("label",{children:"Set Reminder"}),Object(b.jsx)("input",{type:"checkbox",checked:f,value:f,onChange:function(e){return p(e.currentTarget.checked)}})]}),Object(b.jsx)("input",{type:"submit",value:"Save task",className:"btn btn-block"})]})},k=n(11),g=function(){return Object(b.jsxs)("footer",{children:[Object(b.jsx)("p",{children:"2021"}),Object(b.jsx)(k.b,{to:"/about",children:"About"})]})},y=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:"Version 1.0.0"}),Object(b.jsx)(k.b,{to:"/",children:"Home"})]})};var w=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(d.a)(a,2),u=s[0],h=s[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,h([].concat(Object(i.a)(u),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:h(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,h(u.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(k.a,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(p,{title:"God dag",onAdd:function(){return c(!n)},showAdd:n}),Object(b.jsx)(f.a,{path:"/",exact:!0,render:function(e){return Object(b.jsxs)("div",{children:[n&&Object(b.jsx)(v,{onAdd:w}),Object(b.jsx)(m,{tasks:u,onDelete:C,onToggle:T})]})}}),Object(b.jsx)(f.a,{path:"/about",component:y}),Object(b.jsx)(g,{})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),C()}},[[37,1,2]]]);
//# sourceMappingURL=main.96f39fd0.chunk.js.map