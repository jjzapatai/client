(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{92:function(e,n,t){},95:function(e,n,t){},99:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(4),s=t.n(a),i=t(27),r=t(8),o=t(25),j=t.n(o),l=t(5),d=t(128),b=t(129),h=t(130),u=t(131),O=t(133),m=t.p+"static/media/b.57bdda0c.svg",f=(t(91),t(92),t(1)),x=j.a.connect("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",{path:"/flights"}),p=function(){var e=Object(c.useState)([]),n=Object(r.a)(e,2),t=n[0],a=n[1],s=Object(c.useState)([]),o=Object(r.a)(s,2),j=o[0],p=o[1];Object(c.useEffect)((function(){x.on("POSITION",(function(e){p((function(n){return[].concat(Object(i.a)(n),[e])}))}))}),[]),Object(c.useEffect)((function(){x.emit("FLIGHTS"),x.on("FLIGHTS",(function(e){a(e)}))}),[]);var g=new l.Icon({iconUrl:m,iconSize:[30,30],iconAnchor:null,shadowUrl:null,shadowSize:null,shadowAnchor:null});return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{id:"leaflet-container",children:Object(f.jsxs)(u.a,{center:[0,0],zoom:3.1,scrollWheelZoom:!1,children:[Object(f.jsx)(O.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),j.map((function(e){var n=[e.position[0],e.position[1]];return Object(f.jsx)(d.a,{position:n,icon:g,children:Object(f.jsx)(b.a,{code:e.code,children:Object(f.jsx)("code",{children:e.code})})})})),t.map((function(e){var n=[[e.origin[0],e.origin[1]],[e.destination[0],e.destination[1]]];return Object(f.jsx)(h.a,{pathOptions:{color:"red"},positions:n})}))]})}),Object(f.jsxs)("div",{className:"flight-information-container",children:[Object(f.jsx)("h2",{children:"Informaci\xf3n de vuelos"}),t.map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:e.code}),Object(f.jsxs)("p",{children:["Aerol\xednea:       ",e.airline]}),Object(f.jsxs)("p",{children:["Origen:          ",e.origin[0]," ; ",e.origin[1]]}),Object(f.jsxs)("p",{children:["Destino:         ",e.destination[0]," ; ",e.destination[1]]}),Object(f.jsxs)("p",{children:["Avi\xf3n:           ",e.plane]}),Object(f.jsxs)("p",{children:["N\xfamero asientos: ",e.seats]}),e.passengers.map((function(e){return Object(f.jsxs)("li",{children:[e.name,", edad:",e.age," "]})}))]})}))]})]})},g=t(26),v=t(7),S=t(132),w=t(51),C=t.n(w),M=(t(95),j.a.connect("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",{path:"/flights"})),N=function(){var e=Object(c.useState)({message:"",date:"",name:""}),n=Object(r.a)(e,2),t=n[0],a=n[1],s=Object(c.useState)([]),o=Object(r.a)(s,2),j=o[0],l=o[1];Object(c.useEffect)((function(){M.on("CHAT",(function(e){var n=e.name,t=e.date,c=e.message;l([].concat(Object(i.a)(j),[{name:n,date:t,message:c}]))}))}),[j]);var d=function(e){a(Object(v.a)(Object(v.a)({},t),{},Object(g.a)({},e.target.name,e.target.value)))};return Object(f.jsxs)("div",{className:"card",children:[Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.name,c=t.message;M.emit("CHAT",{name:n,message:c}),a({message:"",name:n})},children:[Object(f.jsx)("h2",{children:"Chat"}),Object(f.jsx)("div",{className:"name-field",children:Object(f.jsx)(S.a,{name:"name",onChange:function(e){return d(e)},value:t.name,label:"Name"})}),Object(f.jsx)("div",{children:Object(f.jsx)(S.a,{name:"message",onChange:function(e){return d(e)},value:t.message,id:"outlined-multiline-static",variant:"outlined",label:"Message"})}),Object(f.jsx)("button",{children:"Send Message"})]}),Object(f.jsxs)("div",{className:"render-chat",children:[Object(f.jsx)("h2",{children:"Centro de Control"}),j.map((function(e,n){var t=e.name,c=e.date,a=e.message;return Object(f.jsx)("div",{children:Object(f.jsxs)("h3",{children:[t,": ",C()(new Date(c)).format("MMMM Do YYYY, h:mm:ss a"),":",Object(f.jsx)("span",{children:a})]})},n)}))]})]})},A=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Mapa en Vivo"}),Object(f.jsx)(p,{}),Object(f.jsx)("h1",{children:"Chat de Control"}),Object(f.jsx)(N,{})]})};s.a.render(Object(f.jsx)(A,{}),document.querySelector("#root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.910ca4bd.chunk.js.map