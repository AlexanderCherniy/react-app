"use strict";(self.webpackChunkreact_first=self.webpackChunkreact_first||[]).push([[803],{8803:function(e,r,s){s.r(r),s.d(r,{default:function(){return O}});var n=s(5861),t=s(9439),i=s(4687),a=s.n(i),l={photo:"Users_photo__CmWrI",user:"Users_user__HMDbe",instructation:"Users_instructation__XnbWx",instructationTitle:"Users_instructationTitle__IxRFw",userInfo:"Users_userInfo__J45OZ",activeNum:"Users_activeNum__PlKV6",noactiveNum:"Users_noactiveNum__Aokck",AllUserInfo:"Users_AllUserInfo__D18jK",numsContainer:"Users_numsContainer__yRn4V",AllUserInfoItem:"Users_AllUserInfoItem__ZfjTQ",loaderSpin:"Users_loaderSpin__fKlPE",cyrcle:"Users_cyrcle__5x0-5",error:"Users_error__I1Ur0",findUsers:"Users_findUsers__86xhU"},o=s(1413),c=s(501),u=s(3142),d=s(713),h=s(184),f=function(e){var r=e.u,s=e.isBlocked,n=e.unfollowUsers,t=e.followUsers;return!0===r.followed?(0,h.jsx)("button",{disabled:s.some((function(e){return e===r.id})),className:l.unfollow,onClick:function(){n(r.id)},children:(0,h.jsx)(u.Z,{style:{fontSize:"23px",color:"rgb(240, 59, 59)"}})}):(0,h.jsx)("button",{disabled:s.some((function(e){return e===r.id})),className:l.follow,onClick:function(){t(r.id)},children:(0,h.jsx)(d.Z,{style:{fontSize:"23px",color:"rgb(41, 181, 41)"}})})},m=function(e){return e.usersState.map((function(r){return(0,h.jsxs)("div",{className:l.user,children:[(0,h.jsx)(c.OL,{to:"/profile/"+r.id,children:(0,h.jsx)("img",{className:l.photo,src:null===r.photos.small?"https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop":r.photos.small,alt:"userPhoto"})}),(0,h.jsxs)("div",{className:l.AllUserInfo,children:[(0,h.jsxs)("div",{className:l.userInfo,children:[(0,h.jsxs)("span",{className:l.AllUserInfoItem,children:["ID: ",r.id]}),(0,h.jsxs)("span",{className:l.AllUserInfoItem,children:["Name: ",r.name]}),(0,h.jsxs)("span",{className:l.AllUserInfoItem,children:["Status: ",null===r.status?"No Status :(":r.status]})]}),(0,h.jsx)("div",{children:(0,h.jsx)(f,(0,o.Z)({u:r},e))})]})]},r.id)}))},x=s(2791),g=s(7572),j=s(8687),p=function(e){for(var r=Math.ceil(e.totalCount/e.pageSize),s=[],n=1;n<=r;n++)s.push(n);var t=e.currentPage,i=t-5<0?0:t-5,a=t+5,o=s.slice(i,a);(0,j.I0)();return(0,h.jsx)(h.Fragment,{children:o.map((function(r){return(0,h.jsx)("span",{onClick:function(){e.checkUsers(r,e.term,e.searchParams)},className:e.currentPage===r?l.activeNum:l.noactiveNum,children:r},r)}))})},v=function(e){return!0===e.error?(setTimeout((function(){e.toggleErrorStatus(!1)}),5e3),(0,h.jsx)("div",{className:l.error,children:"OOPS! ERROR OCCURRED, TRY AGAIN..."})):(0,h.jsx)("div",{})},_=s(6916),U=(0,_.P1)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return"karas518"!==e.name}))})),P=(0,_.P1)((function(e){return e.usersPage.GlovalError}),(function(e){return e})),N=s(8180),w=s(9982),I=s(5705),y=s(7044),b=s(1380),k=s(9302),S=(s(6072),s(6871)),A=s(300),C=(0,N.W)((function(e){var r=y.P.Option,s=(0,x.useState)(!1),i=(0,t.Z)(s,2),o=i[0],u=i[1],d=(0,j.v9)(U),f=(0,j.v9)((function(e){return e.usersPage.pageSize})),_=(0,j.v9)((function(e){return e.usersPage.totalCount})),N=(0,j.v9)((function(e){return e.usersPage.currentPage})),C=(0,j.v9)((function(e){return e.usersPage.loader})),O=(0,j.v9)((function(e){return e.usersPage.isBlocked})),R=(0,j.v9)((function(e){return e.usersPage.term})),T=(0,j.v9)((function(e){return e.usersPage.searchParams})),D=(0,j.v9)(P),E=(0,j.I0)(),Z=function(e,r,s,n){return E((0,g.i2)(e,r,s,n))},W=(0,S.s0)(),F=(0,S.TH)(),z=(0,c.lr)(),M=(0,t.Z)(z,2),K=M[0],V=(M[1],K.get("term")||""),B=K.get("friend"),G=K.get("count")||9,Y=K.get("page")||N;return(0,x.useEffect)((function(){W("/users".concat(F.search)),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:+Y;E(g.Nw.pagesNums(e))}(+Y)}),[]),(0,x.useEffect)((function(){!function(e,r,s,n,t){E((0,g.Yg)(e,r,s,n,t))}(d.length,+Y,G,V,B),0===d.length?u(!0):u(!1),W("/users?page=".concat(N,"&count=").concat(G,"&term=").concat(V,"&friend=").concat("null"===B?"null":"true"===B?"true":"false"))}),[d,F.search,N]),(0,h.jsx)(I.J9,{initialValues:{term:V,searchParams:B},onSubmit:function(){var e=(0,n.Z)(a().mark((function e(r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z(1,f,r.term,r.searchParams),W("/users?page=".concat(Y,"&count=").concat(f,"&term=").concat(r.term,"&friend=").concat("null"===r.searchParams?"null":"true"===r.searchParams?"true":"false"));case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),children:(0,h.jsxs)("div",{children:[(0,h.jsx)(A.Z,{page:"Users",containerPage:"UsersPage"}),(0,h.jsx)(b.l,{children:(0,h.jsxs)("div",{style:window.innerWidth<=450?{}:{display:"flex",gap:5},children:[(0,w.Gr)(l.findUsers,"term",w.II,"Find Users..."),(0,h.jsxs)(y.P,{name:"searchParams",style:{width:"130px",marginRight:5},defaultValue:"null",children:[(0,h.jsx)(r,{value:"null",children:"All"}),(0,h.jsx)(r,{value:"true",children:"Only Followed"}),(0,h.jsx)(r,{value:"false",children:"Only UnFollowed"})]}),(0,h.jsx)(k.M,{children:"FIND"})]})}),!0===o?(0,h.jsx)("div",{children:"NOT FOUND"}):(0,h.jsxs)("div",{style:window.innerWidth<=1200?{display:"flex",flexDirection:"column",gap:"50px"}:{display:"flex",gap:"50px"},children:[(0,h.jsxs)("div",{style:{maxWidth:"650px"},className:l.users,children:[(0,h.jsx)(v,{toggleErrorStatus:function(e){return E(g.Nw.toggleErrorStatus(e))},error:D}),(0,h.jsx)("div",{className:l.numsContainer,children:(0,h.jsx)("div",{children:(0,h.jsx)(p,{searchParams:T,term:R,totalCount:_,pageSize:f,currentPage:N,checkUsers:function(e,r,s){return Z(e,f,r,s)}})})}),(0,h.jsx)("div",{className:l.loaderContainer,children:!0===C?(0,h.jsx)("div",{className:l.loaderSpin}):""}),(0,h.jsx)("div",{style:window.innerWidth<=597?{display:"flex",flexDirection:"column",alignItems:"center"}:{},children:(0,h.jsx)(m,{isBlocked:O,usersState:d,followUsers:function(e){return E((0,g.cQ)(e))},unfollowUsers:function(e){return E((0,g.Oi)(e))}})})]}),(0,h.jsxs)("div",{className:l.instructation,children:[(0,h.jsx)("h2",{className:l.instructationTitle,children:"Who are they?"}),(0,h.jsxs)("div",{children:["These are people from the ",(0,h.jsx)("b",{children:'"IT-KAMASUTRA"'})," channel who started learning ",(0,h.jsx)("b",{children:"React"})]}),(0,h.jsxs)("div",{children:["You can write to them in the ",(0,h.jsx)("b",{children:'"Messages"'})," section, find out their ",(0,h.jsx)("b",{children:"ID"})," here, or write to their social networks, which are in their ",(0,h.jsx)("b",{children:"Profile"})]}),(0,h.jsxs)("div",{style:{textAlign:"center"},children:["// Please note that some developers have not yet gotten around to customizing their profile using the ",(0,h.jsx)("b",{children:"API"}),", they may not have data //"]}),(0,h.jsxs)("div",{children:["If the user does not respond to messages or social networks indicated by him in the profile, you can try to write in the ",(0,h.jsx)("b",{children:"Chat"}),", he may see your message"]}),(0,h.jsx)("div",{children:"\u0421\u0434\u0435\u043b\u0430\u0439 \u043f\u043e\u0442\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u043d\u0430 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0445 \u044d\u043a\u0440\u0430\u043d\u0430\u0445, \u044d\u0442\u043e \u043f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u0435 \u0431\u044b\u043b\u043e \u0441\u0432\u0435\u0440\u0445\u0443, \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0435\u0433\u043e \u0441\u043a\u0440\u044b\u0442\u044c \u043d\u0430\u0436\u0430\u0432 \u043d\u0430 \u043a\u0440\u0435\u0441\u0442\u0438\u043a, \u0438 \u044d\u0442\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u043b\u043e\u0441\u044c \u0432 localStorage, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0442\u043e\u043c \u043d\u0435 \u043f\u043e\u044f\u0432\u043b\u044f\u043b\u043e\u0441\u044c"})]})]})]})})})),O=C}}]);
//# sourceMappingURL=803.8119304c.chunk.js.map