(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),o=a(27),i=a(14),u=a(13),s=a(149),m=a(148),d=a(12),h=a.n(d),p=a(22),E=a(45),f=a.n(E),v=a(150),g=a(142),b=a(111),w=a(152),k=a(147),y=a(67),j=a.n(y),O=a(66),S=a.n(O),x=a(146),C=a(69),_=a.n(C),N=a(68),W=a.n(N),A=function(e){var t=e.searching,a=e.value,l=e.setSearching,c=Object(n.useState)(""),o=Object(u.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),E=d[0],y=d[1],O=Object(n.useState)(""),C=Object(u.a)(O,2),N=C[0],A=C[1],P=Object(n.useState)("info"),F=Object(u.a)(P,2),I=F[0],R=F[1],D=function(e){var t=Object(u.a)(e,3),a=t[0],n=t[1],l=t[2],c=a.avatar_url,o=a.html_url,i=a.location,s=a.name,m=a.followers,d=a.public_repos,h=a.company,p=a.public_gists,E=a.bio;return r.a.createElement("div",{id:"result"},r.a.createElement("div",{id:"user-info"},r.a.createElement("img",{class:"user-logo",src:c,alt:s}),r.a.createElement("h1",null,s),E,r.a.createElement("a",{className:"link",href:o,rel:"noopener noreferrer",target:"_blank"},"Check profile on GitHub ",r.a.createElement(S.a,null)),r.a.createElement("h2",null,"Followers (",m,")"),r.a.createElement(k.a,{max:6},Array(m).fill().map((function(e,t){if(t<6&&n[t]){var a=n[t],l=a.login,c=a.id;return r.a.createElement(b.a,{key:t,alt:l,src:"https://avatars2.githubusercontent.com/u/".concat(c)})}return r.a.createElement(b.a,{key:t})}))),r.a.createElement("div",{className:"icons"},i?r.a.createElement("div",{className:"location"},r.a.createElement(j.a,null),i):null,h?r.a.createElement("div",{className:"company"},r.a.createElement(W.a,null),h):null),r.a.createElement("h2",null,"Repositiories (",d,")"),r.a.createElement("h2",null,"Gits (",p,")")),r.a.createElement("div",{id:"repositories"},l.map((function(e,t){var a=e.html_url,n=e.name,l=e.description,c=e.created_at,o=e.updated_at,i=e.language,u=e.license,s=e.homepage,m=Math.round((Date.now()-new Date(o).getTime())/1e3/60/60/24),d=new Date(c).toLocaleDateString();return r.a.createElement("div",null,r.a.createElement("a",{href:a,rel:"noopener noreferrer",key:t,title:n,target:"_blank",className:"name"},n),r.a.createElement("div",{class:"descr"},l),r.a.createElement("div",{class:"icons"},r.a.createElement("div",null,r.a.createElement("span",null),"\xa0",i||"No language"),u?r.a.createElement("div",null,"License: ",u.name):"",s?r.a.createElement("div",null,r.a.createElement("a",{href:s,rel:"noopener noreferrer",key:t,title:s,target:"_blank"},r.a.createElement(_.a,null),s.match(/[a-z0-9-.]+/g)[1])):"",r.a.createElement("div",null,"Updated ",m," days ago"),r.a.createElement("div",null,"Created in ",d)))}))))},L=function(){var e=Object(p.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){setTimeout(Object(p.a)(h.a.mark((function n(){var r,l,c,o,i,u,s,m,d;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://api.github.com/users/".concat(a),n.prev=1,n.next=4,f.a.get(r);case 4:return l=n.sent,c=l.data,o=c.followers_url,i=c.repos_url,n.next=9,f.a.get(o);case 9:return u=n.sent,s=u.data,n.next=13,f.a.get(i);case 13:m=n.sent,d=m.data,e([c,s,d]),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(1),t("Not Found");case 21:case"end":return n.stop()}}),n,null,[[1,18]])}))),500)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t&&Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,new Promise((function(e,t){a||t("Input can not be empty"),/^[a-z0-9-]+$/i.test(a)||t('Input can have only "A-z","0-9" and "-" characters'),e()}));case 4:return s(r.a.createElement(g.a,{elevation:3,id:"skeleton"},r.a.createElement(x.a,{variant:"rect",width:300,height:300}),r.a.createElement(x.a,{variant:"rect",width:250,height:100}),r.a.createElement(x.a,{variant:"rect",width:.9*document.body.offsetWidth,height:500}))),R("info"),A("Searching ..."),e.next=9,L();case 9:t=e.sent,s(D(t)),y(!1),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(0),s(null),R("error"),A(e.t0);case 19:return e.prev=19,l(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[0,14,19,22]])})))()}),[t]),r.a.createElement(r.a.Fragment,null,i,r.a.createElement(w.a,{open:E,onClose:function(){y(!1)}},r.a.createElement(v.a,{onClose:function(){y(!1)},severity:I,variant:"filled",elevation:6},N)))};function P(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(u.a)(c,2),i=o[0],d=o[1];return r.a.createElement("div",{id:"api-github"},r.a.createElement("div",{id:"searcher"},r.a.createElement(s.a,{label:"Search user",variant:"outlined",value:a,onChange:function(e){return l(e.target.value)}}),r.a.createElement(m.a,{variant:"contained",color:"primary",disabled:i,onClick:function(){return d(!0)}},"Search")),r.a.createElement("main",null,r.a.createElement(A,{value:a,searching:i,setSearching:d})))}a(109);function F(){var e=Object(i.g)();return console.log(e),r.a.createElement("div",null,r.a.createElement("h2",null,"Forms"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"".concat(e.url,"/components")},"Components")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"".concat(e.url,"/props-v-state")},"Props v. State"))),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"".concat(e.path,"/:topicId")},r.a.createElement(I,null)),r.a.createElement(i.a,{path:e.path},r.a.createElement("h3",null,"Please select a topic."))))}function I(){var e=Object(i.f)().topicId;return r.a.createElement("h3",null,"Requested topic ID: ",e)}function R(){return r.a.createElement(r.a.Fragment,null,"Home Component")}function D(){return r.a.createElement(o.a,null,r.a.createElement("header",null,"Projects in React"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/github"},"Github")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/forms"},"Forms")))),r.a.createElement("main",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(R,null)),r.a.createElement(i.a,{path:"/github"},r.a.createElement(P,null)),r.a.createElement(i.a,{path:"/forms"},r.a.createElement(F,null)))),r.a.createElement("footer",null,"\xa9 Copyright Krychaxp 2020"))}var L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(107);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("container")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()},78:function(e,t,a){e.exports=a(108)}},[[78,1,2]]]);
//# sourceMappingURL=main.bfde58b7.chunk.js.map