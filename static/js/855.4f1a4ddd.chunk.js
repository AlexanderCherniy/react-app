"use strict";(self.webpackChunkreact_first=self.webpackChunkreact_first||[]).push([[855],{8414:function(e,r,n){n.d(r,{Gr:function(){return d},II:function(){return p},gx:function(){return u}});var s=n(1413),t=n(5987),o=n(5705),a=n(7866),c=n(184),i=["field","form","placeholder","className","children"],l=function(e){e.field,e.form,e.placeholder,e.className;var r=e.children;(0,t.Z)(e,i);return(0,c.jsxs)("div",{className:a.Z.postFlexContainer,children:[r,(0,c.jsx)(o.Bc,{className:a.Z.errorLogin,name:r.props.name,component:"div"})]})},u=function(e){var r=Object.assign({},e);return(0,c.jsx)(l,(0,s.Z)((0,s.Z)({},r),{},{children:(0,c.jsx)("textarea",(0,s.Z)((0,s.Z)({},r.field),r))}))},p=function(e){var r=Object.assign({},e);return(0,c.jsx)(l,(0,s.Z)((0,s.Z)({},r),{},{children:(0,c.jsx)("input",(0,s.Z)((0,s.Z)({},r.field),r))}))};function d(e,r,n,s,t){return(0,c.jsx)(o.gN,{className:e,component:n,placeholder:s,type:t,name:r})}},9855:function(e,r,n){n.r(r),n.d(r,{default:function(){return I}});var s=n(1413),t=(n(2791),n(8687)),o=n(7781),a=n(5861),c=n(5987),i=n(7757),l=n.n(i),u=n(5705),p=n(6871),d=n(3218),m=n(8414),h=n(1774),_=n(7866),f="Login_loginInputForm__aPVMD",g="Login_rememberMeForm__4Xpb8",x="Login_sendButton__93dTe",j="Login_captchaImg__njlW+",v=n(184),b=["captcha","error"],P=function(e){var r=e.captcha,n=e.error,s=(0,c.Z)(e,b);return null!=s.userData.email&&null!=s.userData.login?(0,v.jsx)(p.Fg,{to:"/profile"}):(0,v.jsx)(u.J9,{initialValues:{login:"",passoword:"",captcha:"",remebmerMe:!1},validate:h._D,onSubmit:function(){var e=(0,a.Z)(l().mark((function e(r){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.z9.loginService(r.login,r.passoword,r.remebmerMe,r.captcha);case 2:0===(n=e.sent).resultCode?window.location.reload():(10===n.resultCode&&s.getCaptcha(),s.setError(n.messages[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),children:(0,v.jsxs)(u.l0,{children:[(0,v.jsx)("div",{children:(0,v.jsx)(u.gN,{className:f,component:m.II,placeholder:"Login",name:"login"})}),(0,v.jsx)("div",{children:(0,v.jsx)(u.gN,{className:f,component:m.II,name:"passoword",placeholder:"Password"})}),(0,v.jsx)("div",{children:(0,v.jsxs)("label",{className:g,children:["RememberMe? ",(0,v.jsx)(u.gN,{component:m.II,name:"remebmerMe",type:"checkbox"})]})}),(0,v.jsxs)("div",{children:[null!==r?(0,v.jsxs)("div",{className:_.Z.captchaContainer,children:[(0,v.jsx)(u.gN,{className:f,component:m.II,name:"captcha",placeholder:"Captcha"}),(0,v.jsx)("img",{className:j,src:r,alt:"Captcha"})]}):"",(0,v.jsx)("button",{className:x,onBlur:function(){s.setError(null)},type:"submit",children:"GO FORM"}),null===n?"":(0,v.jsx)("div",{className:_.Z.errorLogin,children:n})]})]})})},N=function(e){return(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{className:"title",children:"LOGIN"}),(0,v.jsx)(P,(0,s.Z)({},e))]})},w=n(9318),I=(0,o.qC)((0,t.$j)((function(e){return{userData:e.auth,error:e.auth.error,captcha:e.auth.captcha}}),{setError:w.Nw.setError,getCaptcha:w.an}))((function(e){return(0,v.jsx)(N,(0,s.Z)({},e))}))},1774:function(e,r,n){n.d(r,{MR:function(){return s},_D:function(){return t},zk:function(){return o}});var s=function(e){var r={};return e.newPost?e.newPost.length>50&&(r.newPost="Must be 50 characters or less!"):r.newPost="error!",r},t=function(e){var r={};return e.login?e.login.length>30&&(r.login="Must be 30 characters or less"):r.login="Login Request!",e.passoword?e.passoword.length>20&&(r.passoword="Must be 20 characters or less"):r.passoword="Password Request!",r},o=function(e){var r={};e.aboutMe.length>65&&(r.aboutMe="Must be 65 characters or less"),e.fullName.length>30&&(r.fullName="Must be 30 characters or less"),e.lookingForAJobDescription.length>50&&(r.lookingForAJobDescription="Must be 50 characters or less");var n=Object.values(e.contacts).filter((function(e){return e.length>50}));return n.length>0&&(r.someUrlIsWrong="Some URL (".concat(n,") Is Wrong")),r}},7866:function(e,r){r.Z={posts:"Posts_posts__YJ7uB",container:"Posts_container__vc4F3",title:"Posts_title__UICKL",cross:"Posts_cross__V6vMY",form:"Posts_form__zIL9X",forms:"Posts_forms__uBc3I",flexReverse:"Posts_flexReverse__pKQyx",errorPost:"Posts_errorPost__UbB-W",errorLogin:"Posts_errorLogin__ls34U",postFlexContainer:"Posts_postFlexContainer__FpBKn",formsContainer:"Posts_formsContainer__QPpTe",PostInputForm:"Posts_PostInputForm__t0uui",sendButton:"Posts_sendButton__79+rA"}}}]);
//# sourceMappingURL=855.4f1a4ddd.chunk.js.map