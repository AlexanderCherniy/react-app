"use strict";(self.webpackChunkreact_first=self.webpackChunkreact_first||[]).push([[148],{1148:function(e,s,t){t.r(s),t.d(s,{default:function(){return T}});var r=t(5861),n=t(9439),a=t(4687),i=t.n(a),o="Messages_messages__kqKuC",c="Messages_container__pEiH8",d="Messages_containerSmallWidth__OEe3e",l="Messages_InputSearchUsers__jufk8",u="Messages_SearchUsersFlexContainer__V1WTh",h=t(2791),f=t(8687),g=t(9660),_=t(8180),m=t(9982),w=t(5705),x=t(7575),p=t(3097),v="UsersMessags_messageViewed__WY2eZ",j="UsersMessags_messageNotViewed__tcaGL",M="UsersMessags_myMessage__LMGDs",U="UsersMessags_myPhoto__R7kaI",I="UsersMessags_messageHelper__0hEsJ",N="UsersMessags_userMassage__g+4Os",S="UsersMessags_userPhoto__NWXKH",y=t(184),Z=0,P=function(e){var s=(0,f.v9)((function(e){return e.auth.photo})),t=(0,f.I0)(),n=function(){var e=(0,r.Z)(i().mark((function e(s,r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t((0,g.PM)(s,r));case 1:case"end":return e.stop()}}),e)})));return function(s,t){return e.apply(this,arguments)}}();return(0,h.useEffect)((function(){++Z<=3&&t((0,g.n3)(window.location.href.split("/")[5]))}),[window.location.href.split("/")[5]]),e.senderId===e.myId?(0,y.jsx)("div",{style:window.innerWidth<=450?{fontSize:16}:{fontSize:20},className:M,children:(0,y.jsxs)("span",{className:I,children:[(0,y.jsx)("img",{className:U,src:s,alt:"Avatar",title:"User Photo"}),(0,y.jsxs)("div",{children:[e.body,!0===e.viewed?(0,y.jsx)(x.Z,{className:v}):(0,y.jsx)(p.Z,{className:j})]}),(0,y.jsx)("div",{title:"Delete your message (only for you)",style:{marginLeft:30,cursor:"pointer"},onClick:function(){return n(e.id,e.userId)},children:"X"})]})}):(0,y.jsxs)("div",{style:window.innerWidth<=450?{fontSize:16}:{fontSize:20},className:N,children:[(0,y.jsx)("img",{className:S,src:e.photo,alt:"Avatar",title:"User Photo"}),e.body]})},k=t(9302),W=t(300),b=t(7923),L=t(7781),C=t(501),z="SelectUsers_user__DJ7aD",R="SelectUsers_activeUser__fDKT+",E="SelectUsers_online__VsGZl",D=function(e){var s=e.hasNewMessages;return s=!0===s?"#81b53e":"#f0ad4e",(0,y.jsx)("div",{onClick:function(){return e.setUserIdUrl("#"===window.location.href.split("/")[4]?window.location.href.split("/")[6]:window.location.href.split("/")[5])},className:z,children:(0,y.jsxs)(C.OL,{to:"/massages/"+e.userId,className:function(e){return e.isActive?R:z},children:[(0,y.jsx)("img",{src:e.userPhoto,alt:""}),e.userName,(0,y.jsx)("div",{style:{background:s},className:E})]})})},O="ShortUsers_users__VCgz3",V="ShortUsers_usersSmallWidth__N6hEB",A="ShortUsers_users990Width__h1dqM",F="ShortUsers_users750Width__Dbds7",G=function(e){var s=(0,f.v9)((function(s){return s.massagesPage.users.map((function(s){return(0,y.jsx)(D,{userIdURL:e.userIdURL,setUserIdUrl:e.setUserIdUrl,hasNewMessages:s.hasNewMessages,userPhoto:s.photos.small,userId:s.id,userName:s.userName},s.id)}))}));return(0,y.jsx)("div",{className:window.innerWidth<=1300?window.innerWidth<=990?window.innerWidth<=750?F:A:V:O,children:s})},B="ShortMessages_userMassages__-M0dE",H="ShortMessages_message__CVObn",K="ShortMessages_formsContainer__K9Qfg",Y="ShortMessages_textarea__inzo3",q="ShortMessages_button__8Nd-X",J=t(1380),X=function(e){return(0,y.jsxs)("div",{className:B,children:[(0,y.jsxs)("div",{className:H,children:[window.innerWidth<=900?(0,y.jsx)(C.OL,{onClick:function(){return e.setReloadesPage(e.reloadesPage+1)},to:"/massages",children:"Back"}):(0,y.jsx)(y.Fragment,{}),e.shortMassages]}),(0,y.jsx)(J.l,{children:(0,y.jsxs)("div",{className:K,children:[(0,m.Gr)(Y,"message",m.gx,"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435..."),(0,y.jsx)(k.M,{type:"default",className:q,children:(0,y.jsx)(p.Z,{style:{fontSize:21}})})]})})]})},Q=function(){var e=(0,h.useState)(window.location.href.split("/")[5]),s=(0,n.Z)(e,2),t=s[0],a=s[1],_=(0,h.useState)(1),x=(0,n.Z)(_,2),p=x[0],v=x[1],j=(0,f.v9)((function(e){return e.auth.id})),M=(0,f.v9)((function(e){return e.massagesPage.users})),U=(0,f.v9)((function(e){return e.massagesPage.massages}));M.map((function(e){U.map((function(s){if(e.id===s.senderId)return s.photo=e.photos.small}))}));var I=U.map((function(e,s){return(0,y.jsx)(P,{photo:e.photo,userId:t,id:e.id,viewed:e.viewed,myId:j,senderId:e.senderId,body:e.body},s)})),N=(0,f.I0)();return(0,h.useEffect)((function(){N((0,g.Y6)()),N((0,g.n3)(t))}),[t]),(0,y.jsx)(w.J9,{initialValues:{message:"",userId:""},onSubmit:function(){var e=(0,r.Z)(i().mark((function e(s){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===s.message||" "===s.message){e.next=6;break}return e.next=3,N((0,g.yQ)(t,s.message));case 3:s.message="",N((0,g.n3)(t)),N((0,g.Y6)());case 6:if(""===s.userId){e.next=10;break}return e.next=9,N((0,g.w6)(s.userId));case 9:N((0,g.Y6)());case 10:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),children:(0,y.jsxs)("main",{className:o,children:[(0,y.jsx)(W.Z,{page:"Messages",containerPage:"MessagesPage"}),(0,y.jsxs)(w.l0,{className:u,children:[(0,m.Gr)(l,"userId",m.II,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 ID \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043d\u0438\u043a\u0430"),(0,y.jsx)(k.M,{type:"default",children:"Find"})]}),(0,y.jsxs)("div",{className:window.innerWidth<=1300?d:c,children:[window.innerWidth<=900?"#"===window.location.href.split("/")[4]?void 0===window.location.href.split("/")[6]:void 0===window.location.href.split("/")[5]?(0,y.jsx)(G,{userIdURL:t,setUserIdUrl:a}):(0,y.jsx)(y.Fragment,{}):(0,y.jsx)(G,{userIdURL:t,setUserIdUrl:a}),window.innerWidth<=900?"#"===window.location.href.split("/")[4]?void 0!==window.location.href.split("/")[6]:void 0!==window.location.href.split("/")[5]?(0,y.jsx)(X,{setReloadesPage:v,reloadesPage:p,shortMassages:I}):(0,y.jsx)(y.Fragment,{}):(0,y.jsx)(X,{setReloadesPage:v,reloadesPage:p,shortMassages:I})]})]})})},T=(0,L.qC)(b.Z,_.W)(h.memo(Q))},7923:function(e,s,t){var r=t(1413),n=(t(2791),t(8687)),a=t(6871),i=t(184);s.Z=function(e){return(0,n.$j)((function(e){return{isAuth:e.auth.isAuth}}))((function(s){return s.isAuth?(0,i.jsx)(e,(0,r.Z)({},s)):(0,i.jsx)(a.Fg,{to:"/selectionPage"})}))}},7575:function(e,s,t){t.d(s,{Z:function(){return c}});var r=t(1413),n=t(2791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},i=t(9726),o=function(e,s){return n.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:s,icon:a}))};o.displayName="CheckOutlined";var c=n.forwardRef(o)},3097:function(e,s,t){t.d(s,{Z:function(){return c}});var r=t(1413),n=t(2791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2a15.99 15.99 0 00-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-.8 4.2-2.6 5-5 1.4-4.2-.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z"}}]},name:"send",theme:"outlined"},i=t(9726),o=function(e,s){return n.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:s,icon:a}))};o.displayName="SendOutlined";var c=n.forwardRef(o)}}]);
//# sourceMappingURL=148.7496b398.chunk.js.map