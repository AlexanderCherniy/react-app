"use strict";(self.webpackChunkreact_first=self.webpackChunkreact_first||[]).push([[633],{6633:function(r,e,n){n.r(e),n.d(e,{default:function(){return x}});var t=n(5861),s=n(4687),o=n.n(s),a=n(5705),i=n(6871),l=n(9982),c=n(1774),u=n(7866),d=n(6376),h=n(8687),m=n(9318),p=n(435),g=n(8774),f=n(184),v=function(r){var e=(0,h.v9)((function(r){return r.auth})),n=(0,h.v9)((function(r){return r.auth.error})),s=(0,h.v9)((function(r){return r.auth.captcha})),v=(0,h.I0)(),x=function(r){return v(m.Nw.setError(r))};return null!=e.email&&null!=e.login?(0,f.jsx)(i.Fg,{to:"/profile"}):(0,f.jsx)(a.J9,{initialValues:{login:"",passoword:"",captcha:"",remebmerMe:!1},validate:c._D,onSubmit:function(){var r=(0,t.Z)(o().mark((function r(e){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,g.z.loginService(e.login,e.passoword,e.remebmerMe,e.captcha);case 2:0===(n=r.sent).resultCode?window.location.reload():(10===n.resultCode&&v((0,m.an)()),x(n.messages[0]));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),children:(0,f.jsxs)(a.l0,{children:[(0,f.jsx)("div",{children:(0,l.Gr)(d.Z.loginInputForm,"login",l.II,"Email")}),(0,f.jsx)("div",{children:(0,l.Gr)(d.Z.loginInputForm,"passoword",l.II,"Password")}),(0,f.jsx)("div",{children:(0,f.jsxs)("label",{className:d.Z.rememberMeForm,children:["RememberMe? ",(0,l.Gr)(void 0,"remebmerMe",l.II,void 0,"checkbox")]})}),(0,f.jsxs)("div",{children:[null!==s?(0,f.jsxs)("div",{className:u.Z.captchaContainer,children:[(0,l.Gr)(d.Z.loginInputForm,"captcha",l.II,"Captcha"),(0,f.jsx)("img",{className:d.Z.captchaImg,src:s,alt:"Captcha"})]}):"",(0,f.jsx)(p.Z,{type:"primary",htmlType:"submit",style:{backgroundColor:"#0077ff",width:"100%",borderRadius:"8px",marginBottom:"12px"},className:d.Z.sendButton,onBlur:function(){return x(null)},children:"LogIn"}),null===n?"":(0,f.jsx)("div",{className:u.Z.errorLogin,children:n})]})]})})},x=function(r){return(0,f.jsx)("div",{className:d.Z.ShieldWrapper,children:(0,f.jsxs)("div",{className:d.Z.wrapper,children:[(0,f.jsx)("img",{alt:"logo"}),(0,f.jsxs)("h2",{className:d.Z.title,children:[(0,f.jsx)("div",{style:{letterSpacing:"2px"},children:"Enter"})," ",(0,f.jsx)("div",{style:{fontWeight:"bold"},children:"Your"})," ",(0,f.jsx)("div",{children:"Email & Password"})]}),(0,f.jsx)(v,{})]})})}},1774:function(r,e,n){n.d(e,{MR:function(){return t},_D:function(){return s},zk:function(){return o}});var t=function(r){var e={};return r.newPost?r.newPost.length>50&&(e.newPost="Must be 50 characters or less!"):e.newPost="error!",e},s=function(r){var e={};return r.login?r.login.length>30&&(e.login="Must be 30 characters or less"):e.login="Login Request!",r.passoword?r.passoword.length>20&&(e.passoword="Must be 20 characters or less"):e.passoword="Password Request!",e},o=function(r){var e={};r.aboutMe.length>65&&(e.aboutMe="Must be 65 characters or less"),r.fullName.length>30&&(e.fullName="Must be 30 characters or less"),r.lookingForAJobDescription.length>50&&(e.lookingForAJobDescription="Must be 50 characters or less");var n=Object.values(r.contacts).filter((function(r){return r.length>50}));return n.length>0&&(e.someUrlIsWrong="Some URL (".concat(n,") Is Wrong")),e}}}]);
//# sourceMappingURL=633.93207f81.chunk.js.map