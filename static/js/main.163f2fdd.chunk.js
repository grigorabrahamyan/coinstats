(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(10),a=c.n(r),i=(c(17),c(4)),l=c.n(i),o=c(6),j=c(8),d=c(12),u=c(2),b=(c(19),c(0)),p=function(e){var t=e.className;return Object(b.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"thumbs-up",className:"svg-inline--fa fa-thumbs-up fa-w-16 favorites ".concat(t),role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(b.jsx)("path",{d:"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z"})})};var O=function(e){var t=e.menuTabs,c=e.setMenuTabs,n=e.currectData,s=void 0===n?[]:n,r=e.lastTicketRef,a=e.handleAddFavorites,i=e.favoritesObj,l=e.handleChagePage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"project__menu-wrapper",children:[Object(b.jsx)("span",{className:"all"===t?"underline":"",onClick:function(){return c("all")},children:"ALL"}),Object(b.jsx)("span",{className:"favorites"===t?"underline":"",onClick:function(){return c("favorites")},children:"FAVORITES"})]}),Object(b.jsxs)("div",{className:"project__middleWrapper",children:[Object(b.jsxs)("div",{className:"project__rows",children:[Object(b.jsx)("div",{className:"project__item"}),Object(b.jsx)("div",{className:"project__item",children:Object(b.jsx)("p",{children:"NAME"})}),Object(b.jsx)("div",{className:"project__item",children:Object(b.jsx)("p",{children:"24H CHANGE"})}),Object(b.jsx)("div",{className:"project__item",children:Object(b.jsx)("p",{children:"PRICE"})}),Object(b.jsx)("div",{className:"project__item",children:Object(b.jsx)("p",{children:"PRICE IN BTC"})}),Object(b.jsx)("div",{className:"project__item",children:Object(b.jsx)("p",{children:"MARKET CAP"})}),Object(b.jsx)("div",{className:"project__item",children:Object(b.jsx)("p",{children:"VOLUME 24H"})})]}),s.map((function(e,c){return Object(b.jsxs)("div",{ref:r,className:"project__rows no_cancel",onClick:function(){return l(e)},children:[Object(b.jsx)("div",{className:"project__item",children:Object(b.jsxs)("div",{onClick:function(t){return a(t,e.id,e,c+1)},className:"project__item-favorites",children:[Object(b.jsx)("p",{children:"all"===t?c+1:e.num}),Object(b.jsx)(p,{className:i[e.id]?"red":""})]})}),Object(b.jsx)("div",{className:"project__item",children:Object(b.jsxs)("div",{className:"project__itemGroup",children:[Object(b.jsx)("img",{src:e.icon,alt:"img"}),Object(b.jsx)("p",{children:e.name}),Object(b.jsx)("p",{className:"project__itemGroupAfter itemGroupAfter",children:e.symbol})]})}),Object(b.jsx)("div",{className:"project__item ".concat(e.priceChange1d<0?"red":"green"),children:Object(b.jsx)("p",{children:e.priceChange1d})}),Object(b.jsx)("div",{className:"project__item",children:Object(b.jsxs)("p",{children:["$",e.totalSupply]})}),Object(b.jsx)("div",{className:"project__item",children:Object(b.jsx)("p",{children:e.rank})}),Object(b.jsx)("div",{className:"project__item",children:Object(b.jsx)("p",{children:e.marketCap})}),Object(b.jsx)("div",{className:"project__item",children:Object(b.jsx)("p",{children:e.volume})})]},c)}))]})]})},m=c(3),h=c.n(m),x=c(11),f=c.n(x);c(21);var v=function(e){var t=e.isPage,c=Object(n.useState)([]),s=Object(u.a)(c,2),r=s[0],a=s[1],i=Object(n.useState)("1m"),d=Object(u.a)(i,2),p=d[0],O=d[1],m=Object(n.useMemo)((function(){var e=Object(o.a)(r),t=[];return e.forEach((function(e){return t.push(e[1])})),t}),[r]),x={chart:{zoomType:"x",backgroundColor:"#1c1b1b"},title:{text:""},xAxis:{type:"datetime"},yAxis:{title:{text:""}},legend:{enabled:!0},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,h.a.getOptions().colors[0]],[1,h.a.color(h.a.getOptions().colors[0]).setOpacity(0).get("rgba")]]},lineWidth:.5,states:{hover:{lineWidth:.5}},threshold:null}},series:[{type:"area",name:"USD",data:m}],tooltip:{backgroundColor:h.a.getOptions().colors[0],borderColor:"black",borderRadius:10,borderWidth:3}};return Object(n.useEffect)((function(){Object(j.a)(l.a.mark((function e(){var c,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coinstats.app/public/v1/charts?period=".concat(p,"&coinId=").concat(t.id));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,s=n.chart,a(s);case 8:case"end":return e.stop()}}),e)})))()}),[p]),Object(b.jsxs)("div",{className:"project__chart",children:[Object(b.jsx)(f.a,{highcharts:h.a,options:x}),Object(b.jsxs)("div",{className:"project__chart-date",children:[Object(b.jsx)("span",{className:"24h"===p?"red":"",onClick:function(){return O("24h")},children:"24H"}),Object(b.jsx)("span",{className:"1w"===p?"red":"",onClick:function(){return O("1w")},children:"1W"}),Object(b.jsx)("span",{className:"1m"===p?"red":"",onClick:function(){return O("1m")},children:"1M"}),Object(b.jsx)("span",{className:"3m"===p?"red":"",onClick:function(){return O("3m")},children:"3M"}),Object(b.jsx)("span",{className:"6m"===p?"red":"",onClick:function(){return O("6m")},children:"6M"}),Object(b.jsx)("span",{className:"1y"===p?"red":"",onClick:function(){return O("1y")},children:"1Y"}),Object(b.jsx)("span",{className:"all"===p?"red":"",onClick:function(){return O("all")},children:"ALL"})]})]})};var _=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(20),a=Object(u.a)(r,2),i=a[0],p=a[1],m=Object(n.useState)("USD"),h=Object(u.a)(m,2),x=h[0],f=(h[1],Object(n.useState)(!0)),_=Object(u.a)(f,2),N=_[0],g=_[1],C=Object(n.useState)("all"),k=Object(u.a)(C,2),S=k[0],w=k[1],y=Object(n.useState)(null),M=Object(u.a)(y,2),T=M[0],A=M[1],I=Object(n.useRef)(null),E=Object(n.useCallback)((function(e){setTimeout((function(){I.current&&I.current.disconnect(),I.current=new IntersectionObserver((function(e){Object(u.a)(e,1)[0].isIntersecting&&p((function(e){return e+20}))})),e&&I.current.observe(e)}),0)}),[]),P=Object(n.useMemo)((function(){var e=JSON.parse(localStorage.getItem("ids"));return e||[]}),[N]),F=Object(n.useMemo)((function(){if("all"===S)return c;var e=Object(d.a)({},P);return Object.values(e).sort((function(e,t){return e.num-t.num}))}),[S,c,P]);Object(n.useEffect)((function(){Object(j.a)(l.a.mark((function e(){var t,n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.coinstats.app/public/v1/coins?skip=".concat(i-20,"&limit=").concat(20,"&currency=").concat(x));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r=n.coins,a=[].concat(Object(o.a)(c),Object(o.a)(r)),s(a);case 9:case"end":return e.stop()}}),e)})))()}),[i,x]);var R=function(e){A(e)};return Object(b.jsx)("div",{className:"wrapper__project",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("header",{}),Object(b.jsxs)("section",{className:"project__middle",children:[Object(b.jsx)("div",{className:"project__title",children:Object(b.jsx)("h1",{className:T?"cursor":"",onClick:function(){return R(null)},children:"Crypto Tracker"})}),T?Object(b.jsx)(v,{isPage:T}):Object(b.jsx)(O,{menuTabs:S,setMenuTabs:w,currectData:F,lastTicketRef:E,handleAddFavorites:function(e,t,c,n){var s=JSON.parse(localStorage.getItem("ids"));if(c.num=n,s)s[t]?delete s[t]:s[t]=c,localStorage.setItem("ids",JSON.stringify(s));else{var r={};r[t]=c,localStorage.setItem("ids",JSON.stringify(r))}g((function(e){return!e})),e.stopPropagation()},favoritesObj:P,handleChagePage:R})]})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root")),N()}},[[23,1,2]]]);
//# sourceMappingURL=main.163f2fdd.chunk.js.map