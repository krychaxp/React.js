(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,t,a){e.exports=a(131)},130:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(14),o=a.n(l),c=a(35),i=a(15),u="https://wl-api.mf.gov.pl/api/search/",s=window.localStorage.lang,m=["pl","en"],p=a(56),d=a(174),f=a(8),h=a(175),b=a(20),v=a.n(b),g=a(7),E=a.n(g),y=a(16),w=a(25),_=a.n(w),k=a(176),x=a(177),j=a(178),N=a(171),O=(new Date).toLocaleDateString().split(".").reverse().join("-"),S=function(e){for(var t=e.replace(/\D/g,"").slice(0,26),a=0;a<5.2;a++){var n=2+5*a;t.length>=n&&(t=t.slice(0,n)+" "+t.slice(n))}return t.trim()},z=function(){var e=Object(y.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("".concat(u,"bank-account/").concat(t.replace(/\D/g,""),"?date=").concat(O));case 3:return console.log("account Number is Ok"),e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),A=function(e){var t=e.type,a=e.text,l=Object(n.useState)(!0),o=Object(f.a)(l,2),c=o[0],i=o[1];return r.a.createElement(x.a,{open:c,autoHideDuration:6e3,onClose:function(){i(!1)}},r.a.createElement(k.a,{onClose:function(){i(!1)},severity:t,variant:"filled",elevation:6},a))},P=function(e){var t=e.open;return r.a.createElement(j.a,{open:t,style:{zIndex:9999}},r.a.createElement(N.a,{color:"inherit"}))},L=function(e){var t=Object(n.useState)(null),a=Object(f.a)(t,2),l=a[0],o=a[1],c=function(e,t){return o(r.a.createElement(A,{type:e,text:t}))};return window.onoffline=function(){return c("warning","Stracono po\u0142\u0105czenie z internetem.")},window.ononline=function(){return c("info","Ponownie po\u0142\u0105czono z internetem.")},l},q=function(){return window.localStorage.lang=window.localStorage.lang||"en",r.a.createElement(r.a.Fragment,null)},C=a(133),I=a(172),T=a(86),R=a.n(T),W=a(85),B=a.n(W),D=a(84),F=a.n(D),M=a(83),V=a.n(M),$=function(e){var t=Object(f.a)(e.userData,3),a=t[0],n=t[1],l=t[2],o=a.avatar_url,c=a.html_url,i=a.location,u=a.name,s=a.followers,m=a.public_repos,p=a.company,d=a.public_gists,h=a.bio;return r.a.createElement("div",{className:v.a.result},r.a.createElement("div",{className:v.a.userInfo},r.a.createElement("img",{className:v.a.u_logo,src:o,alt:u}),r.a.createElement("h1",null,u),h,r.a.createElement("a",{className:v.a.u_link,href:c,rel:"noopener noreferrer",target:"_blank"},"Check profile on GitHub ",r.a.createElement(V.a,null)),r.a.createElement("h2",null,"Followers (",s,")"),r.a.createElement(I.a,{max:6},Array(s).fill().map((function(e,t){if(t<6&&n[t]){var a=n[t],l=a.login,o=a.id;return r.a.createElement(C.a,{key:t,alt:l,src:"https://avatars2.githubusercontent.com/u/".concat(o)})}return r.a.createElement(C.a,{key:t})}))),r.a.createElement("div",{className:v.a.u_icons},i&&r.a.createElement("div",{className:v.a.u_location},r.a.createElement(F.a,null),i),p&&r.a.createElement("div",null,r.a.createElement(B.a,null),p)),r.a.createElement("h2",null,"Repositiories (",m,")"),r.a.createElement("h2",null,"Gits (",d,")")),r.a.createElement("div",{className:v.a.repo},l.map((function(e,t){var a=e.html_url,n=e.name,l=e.description,o=e.created_at,c=e.updated_at,i=e.language,u=e.license,s=e.homepage,m=Math.round((Date.now()-new Date(c).getTime())/1e3/60/60/24),p=new Date(o).toLocaleDateString();return r.a.createElement("div",{key:t},r.a.createElement("a",{href:a,rel:"noopener noreferrer",title:n,target:"_blank",className:v.a.r_name},n),r.a.createElement("div",null,l),r.a.createElement("div",{className:v.a.r_icons},r.a.createElement("div",null,r.a.createElement("span",{className:v.a.r_ico}),"\xa0",i||"No language"),u?r.a.createElement("div",null,"License: ",u.name):"",s?r.a.createElement("div",{className:v.a.r_website},r.a.createElement("a",{href:s,rel:"noopener noreferrer",key:t,title:s,target:"_blank"},r.a.createElement(R.a,null),s.match(/[a-z0-9-.]+/g)[1])):"",r.a.createElement("div",null,"Updated ",m," days ago"),r.a.createElement("div",null,"Created in ",p)))}))))},U=a(173),G=function(){return r.a.createElement("div",{className:v.a.result},r.a.createElement("div",{className:v.a.userInfo},r.a.createElement(U.a,{variant:"rect",width:400,height:400}),r.a.createElement(U.a,{variant:"text",width:300,height:50}),r.a.createElement(U.a,{variant:"text",width:200,height:30}),r.a.createElement(U.a,{variant:"text",width:250,height:30}),r.a.createElement(U.a,{variant:"text",width:200,height:50}),r.a.createElement(U.a,{variant:"text",width:250,height:70}),r.a.createElement(U.a,{variant:"text",width:250,height:30}),r.a.createElement(U.a,{variant:"text",width:200,height:50})),r.a.createElement("div",{className:v.a.repo},Array(6).fill().map((function(e,t){var a=Math.floor(100*Math.random())+100,n=Math.floor(100*Math.random())+150;return r.a.createElement("div",{key:t},r.a.createElement(U.a,{variant:"text",width:a,height:40}),r.a.createElement(U.a,{variant:"text",width:n,height:20}),r.a.createElement("div",{className:v.a.r_icons},Array(5).fill().map((function(e,t){var a=Math.floor(100*Math.random())%50+50;return r.a.createElement(U.a,{key:t,variant:"text",width:a,height:20})}))))}))))},K=function(){var e=Object(i.f)().userNick,t=Object(n.useState)(null),a=Object(f.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(!0),u=Object(f.a)(c,2),s=u[0],m=u[1],p=function(){var t=Object(y.a)(E.a.mark((function t(){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,new Promise((function(t,a){e||a("<h3>Input can not be empty</h3>"),/^[a-z0-9-]+$/i.test(e)||a('Input can have only "A-z","0-9" and "-" characters'),t()}));case 4:return t.next=6,new Promise(function(){var t=Object(y.a)(E.a.mark((function t(a,n){var r,l,o,c,i,u,s,m,p;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,navigator.onLine||n("<h3>You are offiline! Check your internet!</h3>"),r="https://api.github.com/users/".concat(e),t.next=5,_.a.get(r);case 5:return l=t.sent,o=l.data,c=o.followers_url,i=o.repos_url,t.next=10,_.a.get(c);case 10:return u=t.sent,s=u.data,t.next=14,_.a.get(i);case 14:m=t.sent,p=m.data,a([o,s,p]),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(0),n("<h3>User not Found</h3>");case 22:case"end":return t.stop()}}),t,null,[[0,19]])})));return function(e,a){return t.apply(this,arguments)}}());case 6:a=t.sent,o(r.a.createElement($,{userData:a})),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),o(t.t0);case 13:return t.prev=13,m(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){p()}),[]),r.a.createElement(r.a.Fragment,null,s?r.a.createElement(G,null):l,r.a.createElement(P,{open:s}))},Z=function(){var e=Object(i.g)(),t=e.path,a=e.url,l=Object(n.useState)(""),o=Object(f.a)(l,2),u=o[0],s=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:v.a.searcher},r.a.createElement(h.a,{label:"Search user",variant:"outlined",onChange:function(e){return s(e.target.value)}}),r.a.createElement(c.b,{to:"".concat(a,"/").concat(u)},r.a.createElement(d.a,{variant:"contained",color:"primary"},"Search"))),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:t},r.a.createElement("h3",null,"Write someone nick on github")),r.a.createElement(i.a,{path:"".concat(t,"/:userNick")},r.a.createElement(K,null))))},H=a(95),J=a(57),Y=a(179),X=a(180),Q={pl:"Warto\u015b\u0107 nie mo\u017ce by\u0107 pusta",en:"This input is required"},ee=function(e){return{pl:"Podana warto\u015b\u0107 musi zawiera\u0107 ".concat(e," cyfr"),en:"This input must have ".concat(e," digits")}},te=function(e){return{pl:"Podana warto\u015b\u0107 musi zawiera\u0107 min. ".concat(e," znaki"),en:"This input must have min ".concat(e," characters")}},ae={form:{status:{person:{pl:"Osoba fizyczna",en:"Person"},company:{pl:"Firma",en:"Company"},label:{pl:"Wybierz sw\xf3j status",en:"Select your status"}},pesel:{e:{required:Q,pattern:{pl:ee(11).pl,en:ee(11).en}}},sex:{label:{pl:"P\u0142e\u0107",en:"Sex"},placeholder:{pl:"m\u0119\u017cczyzna/kobieta",en:"male/female"}},birth:{label:{pl:"Data urodzenia",en:"Date of birth"}},nip:{e:{required:Q,pattern:ee(10)}},company:{label:{pl:"Nazwa firmy",en:"Company name"}},firstName:{label:{pl:"Imi\u0119",en:"First name"},e:{required:Q,pattern:te(3)}},lastName:{label:{pl:"Nazwisko",en:"Last name"},e:{required:Q,pattern:te(3)}},city:{label:{pl:"Miasto",en:"City name"},e:{required:Q,pattern:te(3)}},street:{label:{pl:"Ulica",en:"Street"},e:{required:Q,pattern:te(3)}},codeAddress:{label:{pl:"Kod pocztowy",en:"Code Address"},e:{required:Q,pattern:{pl:"Wz\xf3r musi by\u0107 typu 00-000",en:"Only pattern like 00-000"}}},bank:{label:{pl:"Number konta bankowego",en:"Account Number"},e:{required:Q,pattern:ee(26),validate:{pl:"Podany numer nie istnieje",en:"This number not exist"}}}}},ne=a(88),re=a(87),le=a.n(re),oe=function(){var e,t,a,l,o,c,i,m,p,b,v,g,w,k,x,j,N=Object(H.a)(),A=N.register,L=N.handleSubmit,q=N.setValue,C=N.getValues,I=N.watch,T=N.errors,R=N.triggerValidation,W=I("status",!1),B=Object(n.useState)([]),D=Object(f.a)(B,2),F=(D[0],D[1]),M=Object(n.useState)(!1),V=Object(f.a)(M,2),$=V[0],U=V[1],G=function(){var e=C("pesel")||"";return!!Object(J.c)(e)&&(q("sex",Object(J.a)(e)),q("birth",Object(J.b)(e).split("/").reverse().join("-")),!0)},K=function(){var e=Object(y.a)(E.a.mark((function e(){var t,a,n,r,l,o,c,i,s,m,p,d;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.prev=1,U(!0),a=C("nip"),e.next=6,_.a.get("".concat(u,"nip/").concat(a,"?date=").concat(O));case 6:if(n=e.sent,!(r=n.data).result.subject){e.next=21;break}l=r.result.subject,o=l.name,c=l.krs,i=l.regon,s=l.workingAddress,m=l.residenceAddress,p=l.accountNumbers,d=m||s,q("company",o,{shouldValidate:!0}),q("krs",c,{shouldValidate:!0}),q("regon",i,{shouldValidate:!0}),q("street",d.split(",")[0],{shouldValidate:!0}),q("codeAddress",d.match(/\d{2}-\d{3}/)[0],{shouldValidate:!0}),q("city",d.match(/\d{2}-\d{3} (.*)/)[1],{shouldValidate:!0}),F(p.map((function(e){return S(e)}))),t=!0,e.next=22;break;case 21:throw new Error("something goes wrong no 'subject'");case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(1),alert("Invalid NIP");case 27:return e.prev=27,U(!1),e.abrupt("return",t);case 31:case"end":return e.stop()}}),e,null,[[1,24,27,31]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:le.a.form,onSubmit:L((function(e){console.log(e),"person"===C("status")&&G()||"company"===C("status")&&K()?alert("values was send:"+JSON.stringify(e)):alert("Something went wrong (probably you change nochanges values)")}))},r.a.createElement(h.a,{label:ae.form.status.label[s]+" *",name:"status",select:!0,InputProps:{startAdornment:r.a.createElement(Y.a,{position:"start"},r.a.createElement(ne.a,null))},onChange:function(e){console.log(e,I()),A("status"),q("status",e.target.value)}},r.a.createElement(X.a,null),r.a.createElement(X.a,{value:"person"},ae.form.status.person[s]),r.a.createElement(X.a,{value:"company"},ae.form.status.company[s])),"person"===W&&r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{label:"PESEL *",type:"number",placeholder:"00112233444",name:"pesel",inputRef:A({required:!0,pattern:/^\d{11}$/}),onChange:function(e){e.target.value=e.target.value.replace(/\D/g,"").slice(0,11),G()},onBlur:function(e){return R(e.currentTarget.name)},InputLabelProps:{shrink:!0},error:!!T.pesel,helperText:"required"===(null===(e=T.pesel)||void 0===e?void 0:e.type)&&ae.form.pesel.e.required[s]||"pattern"===(null===(t=T.pesel)||void 0===t?void 0:t.type)&&ae.form.pesel.e.pattern[s]}),r.a.createElement(h.a,{label:ae.form.sex.label[s]+" *",name:"sex",placeholder:ae.form.sex.placeholder[s],disabled:!0,inputRef:A,InputLabelProps:{shrink:!0}}),r.a.createElement(h.a,{label:ae.form.birth.label[s]+" *",name:"birth",placeholder:"01-01-1900",disabled:!0,inputRef:A,InputLabelProps:{shrink:!0}})),"company"===W&&r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{label:"NIP *",type:"number",onBlur:function(e){return R(e.currentTarget.name)},placeholder:"0123456789",name:"nip",inputRef:A({required:!0,pattern:/^\d{10}$/}),onChange:function(e){var t=10===e.target.value.length;e.target.value=e.target.value.replace(/\D/g,"").slice(0,10),t&&10===e.target.value.length&&K()},error:!!T.nip,helperText:"required"===(null===(a=T.nip)||void 0===a?void 0:a.type)&&ae.form.nip.e.required[s]||"pattern"===(null===(l=T.nip)||void 0===l?void 0:l.type)&&ae.form.nip.e.pattern[s]}),r.a.createElement(h.a,{label:ae.form.company.label[s]+" *",name:"company",disabled:!0,inputRef:A,InputLabelProps:{shrink:!0}}),r.a.createElement(h.a,{label:"Regon *",name:"regon",disabled:!0,inputRef:A,InputLabelProps:{shrink:!0}}),r.a.createElement(h.a,{label:"KRS",name:"krs",disabled:!0,inputRef:A,InputLabelProps:{shrink:!0}})),W&&r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{label:ae.form.firstName.label[s]+" *",name:"firstName",onBlur:function(e){return R(e.currentTarget.name)},inputRef:A({required:!0,pattern:/^.{3,}$/}),error:!!T.firstName,InputLabelProps:{shrink:!0},helperText:"required"===(null===(o=T.firstName)||void 0===o?void 0:o.type)&&ae.form.firstName.e.required[s]||"pattern"===(null===(c=T.firstName)||void 0===c?void 0:c.type)&&ae.form.firstName.e.pattern[s]}),r.a.createElement(h.a,{label:ae.form.lastName.label[s]+" *",name:"lastName",inputRef:A({required:!0,pattern:/^.{3,}$/}),error:!!T.lastName,helperText:"required"===(null===(i=T.lastName)||void 0===i?void 0:i.type)&&ae.form.lastName.e.required[s]||"pattern"===(null===(m=T.lastName)||void 0===m?void 0:m.type)&&ae.form.lastName.e.pattern[s],InputLabelProps:{shrink:!0}}),r.a.createElement(h.a,{label:ae.form.city.label[s]+" *",name:"city",onBlur:function(e){return R(e.currentTarget.name)},inputRef:A({required:!0,pattern:/^.{3,}$/}),error:!!T.city,disabled:"company"===C("status"),helperText:"required"===(null===(p=T.city)||void 0===p?void 0:p.type)&&ae.form.city.e.required[s]||"pattern"===(null===(b=T.city)||void 0===b?void 0:b.type)&&ae.form.city.e.pattern[s],InputLabelProps:{shrink:!0}}),r.a.createElement(h.a,{label:ae.form.street.label[s]+" *",name:"street",onBlur:function(e){return R(e.currentTarget.name)},inputRef:A({required:!0,pattern:/^.{3,}$/}),error:!!T.street,disabled:"company"===C("status"),helperText:"required"===(null===(v=T.street)||void 0===v?void 0:v.type)&&ae.form.street.e.required[s]||"pattern"===(null===(g=T.street)||void 0===g?void 0:g.type)&&ae.form.street.e.pattern[s],InputLabelProps:{shrink:!0}}),r.a.createElement(h.a,{label:ae.form.codeAddress.label[s]+" *",placeholder:"00-000",name:"codeAddress",onBlur:function(e){return R(e.currentTarget.name)},inputRef:A({required:!0,pattern:/^\d{2}-\d{3}$/}),error:!!T.codeAddress,disabled:"company"===C("status"),helperText:"required"===(null===(w=T.codeAddress)||void 0===w?void 0:w.type)&&ae.form.codeAddress.e.required[s]||"pattern"===(null===(k=T.codeAddress)||void 0===k?void 0:k.type)&&ae.form.codeAddress.e.pattern[s],onChange:function(e){return e.target.value=((t=(t=e.target.value).replace(/\D/g,"").slice(0,5)).length>=2&&(t=t.slice(0,2)+"-"+t.slice(2)),t);var t},InputLabelProps:{shrink:!0}}),r.a.createElement(h.a,{label:ae.form.bank.label[s],name:"bank",onBlur:function(e){return R(e.currentTarget.name)},placeholder:"00 0000 0000 0000 0000 0000 0000",error:!!T.bank,helperText:"pattern"===(null===(x=T.bank)||void 0===x?void 0:x.type)&&ae.form.bank.e.pattern[s]||"validate"===(null===(j=T.bank)||void 0===j?void 0:j.type)&&ae.form.bank.e.validate[s],onChange:function(e){e.target.value=S(e.target.value)},inputRef:A({pattern:/^(\d{2}( \d{4}){6})?$/,validate:function(){var e=Object(y.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!t,e.t0){e.next=5;break}return e.next=4,z(t);case 4:e.t0=e.sent;case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})}),r.a.createElement(d.a,{type:"submit"},"Submit"))),r.a.createElement(P,{open:$}))},ce=a(54),ie=a(89),ue={chart:{title:{pl:"Zanieczyszczenie powietrza w Poznaniu",en:"Air pollution in Pozna\u0144"},subtitle:{pl:function(e){return"Ostatnie ".concat(e," zarejestrowanych pomiar\xf3w")},en:function(e){return"Last ".concat(e," recorded measurements")}}}},se=function(){return ie(ce),Object(y.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("http://cfg.krychaxp.pl/data.php?json=pm");case 2:t=e.sent,a=t.data,ce.chart("chart",{title:{text:ue.chart.title[s],style:{fontSize:"25px"}},subtitle:{text:ue.chart.subtitle[s](a.length)},yAxis:{title:{text:"x \xb5g/m<sup>3</sup>",useHTML:!0}},xAxis:[{categories:a.map((function(e,t){return"".concat(e.date,"<br>").concat(e.time)})),crosshair:!0}],legend:{layout:"horizontal",align:"center",verticalAlign:"top"},plotOptions:{series:{label:{connectorAllowed:!1}}},tooltip:{shared:!0,valueSuffix:"{value} \xb5g/m<sup>3</sup>",useHTML:!0},series:[{name:"PM1",data:a.map((function(e){return+e.pm1}))},{name:"PM10",data:a.map((function(e){return+e.pm10}))},{name:"PM25",data:a.map((function(e){return+e.pm25}))}]});case 5:case"end":return e.stop()}}),e)})))(),r.a.createElement("div",{id:"chart"})},me=function(){return r.a.createElement(d.a,{variant:"contained",color:"primary",type:"submit",style:{margin:"5px"}},"Submit")},pe=a(13),de=a(90),fe=a(91),he=a.n(fe),be=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(!1),c=Object(f.a)(o,2),i=c[0],u=c[1];Object(n.useEffect)((function(){Object(y.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;capital;region;population;area;nativeName;flag",e.next=3,_.a.get("https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;capital;region;population;area;nativeName;flag");case 3:t=e.sent,a=(a=t.data).map((function(e){return Object.fromEntries(Object.entries(e).sort((function(e,t){return e[0]>t[0]?1:-1})))})),l(a);case 7:case"end":return e.stop()}}),e)})))()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{class:he.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,a.length?Object.keys(a[0]).map((function(e,t){return r.a.createElement("th",{key:t,"data-sort":"none",onClick:function(t){return function(e,t){u(!0);var n="asc"===t.target.dataset.sort?"asc":"desc";setTimeout((function(){Object(de.a)(a)[n]((function(t){return t[e]})),l(Object(pe.a)(a)),u(!1)}),700),t.target.dataset.sort="asc"===n?"desc":"asc"}(e,t)}},e)})):null)),r.a.createElement("tbody",null,a.length?a.map((function(e,t){var a=e.name,n=e.alpha2Code,l=e.capital,o=e.region,c=e.population,i=e.area,u=e.nativeName,s=e.flag;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,n),r.a.createElement("td",null,i),r.a.createElement("td",null,l),r.a.createElement("td",null,r.a.createElement("img",{src:s,width:"80",height:"40",alt:"".concat(a," flag")})),r.a.createElement("td",null,a),r.a.createElement("td",null,u),r.a.createElement("td",null,c),r.a.createElement("td",null,o))})):null)),r.a.createElement(P,{open:i}))},ve=a(61),ge=a(92),Ee=a.n(ge),ye=a(93),we=a(94);function _e(){var e=Object(n.useState)({}),t=Object(f.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)({}),c=Object(f.a)(o,2),i=c[0],u=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ve.GoogleLogin,{clientId:"965500718724-s0jg5bdi7aed0lvcts2ks02ad8mcvv0s.apps.googleusercontent.com",onSuccess:function(e){var t=e.profileObj,a=t.email,n=t.name,r=t.imageUrl;l({name:n,email:a,icon:r}),alert("Pomy\u015blnie zalogowano google")},onFailure:function(e){console.log("failGoogle",e),alert("nie uda\u0142o si\u0119 zalogowa\u0107")}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ve.GoogleLogout,{clientId:"965500718724-s0jg5bdi7aed0lvcts2ks02ad8mcvv0s.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(e){alert("Pomy\u015blnie wylogowano"),l({})}}),r.a.createElement("div",null,"icon: ",r.a.createElement("img",{src:a.icon||"/favicon.ico",alt:"icon"}),r.a.createElement("br",null),"name: ",r.a.createElement("span",null,a.name),r.a.createElement("br",null),"e-mail:",a.email),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(Ee.a,{appId:"981341145633931",fields:"name,email,picture",callback:function(e){if(console.log("Xddxdx",e,!e.status),!e.status){var t=e.name,a=e.email,n=e.picture;u({name:t,email:a,icon:n.data.url})}},scope:"public_profile, email, user_birthday"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(e){console.log(e),u({})}},"Logout"),r.a.createElement("div",null,"icon: ",r.a.createElement("img",{src:i.icon||"/favicon.ico",alt:"icon"}),r.a.createElement("br",null),"name: ",r.a.createElement("span",null,i.name),r.a.createElement("br",null),"e-mail:",i.email),r.a.createElement("div",{style:{fontSize:"80px",color:"red"}},r.a.createElement(ye.a,null),r.a.createElement(we.a,null)))}var ke={pageNot:{pl:"Nie znaleziono strony",en:"Page not found"},backButton:{pl:"Wr\xf3\u0107",en:"Back"},routing:[{title:{pl:"Wykresy",en:"Charts"},component:r.a.createElement(se,null)},{title:{pl:"Formularze",en:"Forms"},component:r.a.createElement(oe,null)},{title:{pl:"Logowanie",en:"Login"},component:r.a.createElement(_e,null)},{title:{pl:"Wyszukiwarka",en:"Searcher"},component:r.a.createElement(Z,null)},{title:{pl:"Tabela",en:"Table"},component:r.a.createElement(be,null)},{title:{pl:"Zdj\u0119cia",en:"Images"},component:r.a.createElement(me,null)}]},xe=a(47),je=a.n(xe),Ne=function(){return r.a.createElement(c.a,null,r.a.createElement("header",{className:je.a.header},r.a.createElement(i.a,{path:"/(.+)"},r.a.createElement(c.b,{to:"/"},r.a.createElement(d.a,{variant:"contained",color:"primary"},ke.backButton[s]))),r.a.createElement("div",null),r.a.createElement("div",null,m.map((function(e,t){return r.a.createElement(d.a,{key:t,variant:e===s?"contained":"outlined",color:"primary",onClick:function(){return t=e,window.localStorage.lang=t,void window.location.reload();var t}},e.toUpperCase())})))),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement("nav",{className:je.a.nav},ke.routing.map((function(e,t){var a=e.title;return r.a.createElement(c.b,{key:t,to:"/"+a[s].toLowerCase()},r.a.createElement("span",null,a[s]))}))),r.a.createElement(p.a,null,r.a.createElement("title",null,"Krychaxp React App"))),r.a.createElement(i.a,null)),r.a.createElement("main",{className:je.a.main},r.a.createElement(i.c,null,ke.routing.map((function(e,t){return Object.entries(e.title).map((function(a,n){return r.a.createElement(i.a,{key:t*a.length+n,path:"/"+a[1].toLowerCase()},r.a.createElement(p.a,null,r.a.createElement("title",null,a[1]," - Krychaxp React App")),e.component)}))})),r.a.createElement(i.a,{path:"/(.+)"},r.a.createElement(p.a,null,r.a.createElement("title",null,ke.pageNot[s])),r.a.createElement("h3",null,ke.pageNot[s])))),r.a.createElement("footer",{className:je.a.footer},"\xa9 Copyright ",r.a.createElement("a",{href:"https://krychaxp.pl"},"Krychaxp 2020")))},Oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Se(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(130);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ne,null),r.a.createElement(L,null),r.a.createElement(q,null)),document.getElementById("container")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Oe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Se(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Se(t,e)}))}}()},20:function(e,t,a){e.exports={searcher:"search_searcher__1RjZq",result:"search_result__3uYmt",userInfo:"search_userInfo__mZGB4",u_logo:"search_u_logo__8-2ly",u_location:"search_u_location__1WPZn",u_link:"search_u_link__29kmo",u_icons:"search_u_icons__3VfdK",repo:"search_repo__1BvOL",r_name:"search_r_name__3KarW",r_website:"search_r_website__1tRsm",r_icons:"search_r_icons__1xI4i",skel:"search_skel__24ovG",r_ico:"search_r_ico__1nBAd"}},47:function(e,t,a){e.exports={nav:"App_nav__2bY_L",main:"App_main__3yma_",header:"App_header__1Izlb",footer:"App_footer__Qn6r9"}},87:function(e,t,a){e.exports={form:"forms_form__bmwM7"}},91:function(e,t,a){e.exports={table:"table_table__2CXBR"}}},[[102,1,2]]]);
//# sourceMappingURL=main.680e1816.chunk.js.map