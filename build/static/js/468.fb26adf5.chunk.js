"use strict";(self.webpackChunkreact_first=self.webpackChunkreact_first||[]).push([[468],{1446:function(e,t,n){n.d(t,{II:function(){return m},gx:function(){return d}});var r=n(8683),o=n(5987),s=n(5705),i=n(4465),a=n(184),c=["field","form"],l=["field","form"],u=["field","form"],f=function(e){e.field,e.form;var t=(0,o.Z)(e,c);return(0,a.jsxs)("div",{className:i.Z.postFlexContainer,children:[t.children,(0,a.jsx)(s.Bc,{className:i.Z.errorLogin,name:t.children.props.name,component:"div"})]})},d=function(e){var t=e.field,n=(e.form,(0,o.Z)(e,l));return(0,a.jsx)(f,(0,r.Z)((0,r.Z)({},n),{},{children:(0,a.jsx)("textarea",(0,r.Z)((0,r.Z)({},t),n))}))},m=function(e){var t=e.field,n=(e.form,(0,o.Z)(e,u));return(0,a.jsx)(f,(0,r.Z)((0,r.Z)({},n),{},{children:(0,a.jsx)("input",(0,r.Z)((0,r.Z)({},t),n))}))}},8468:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(8683),o=n(6472),s=n(8687),i=n(6070),a=n(2791),c=n(184),l=function(e){return(0,c.jsxs)("div",{className:"post",children:[(0,c.jsxs)("div",{className:"post__avatar",children:[" ",(0,c.jsx)("img",{src:e.img,alt:"avatar"})," "]}),(0,c.jsx)("div",{className:"post__comment",children:e.comment})]})},u=n(4465),f=n(6217),d=n(5705),m=n(1446),h=function(e){return(0,c.jsx)(d.J9,{initialValues:{newPost:""},validate:f.MR,onSubmit:function(t){e.changeNewPost(t.newPost),e.addPosts(e.newPost),t.newPost=""},children:(0,c.jsxs)(d.l0,{children:[(0,c.jsx)(d.gN,{className:u.Z.PostInputForm,placeholder:"Your comment...",component:m.gx,name:"newPost"}),(0,c.jsx)("button",{type:"submit",className:u.Z.sendButton,children:"Send"})]})})},p=function(e){var t=e.post.map((function(e){return(0,c.jsx)(l,{img:e.img,comment:e.comment},e.id)}));return(0,c.jsxs)("div",{className:u.Z.posts,children:[(0,c.jsxs)("div",{className:u.Z.container,children:[(0,c.jsx)("h2",{className:u.Z.title,children:"Posts"}),(0,c.jsx)(h,(0,r.Z)({},e))]}),(0,c.jsx)("div",{className:u.Z.flexReverse,children:t})]})},x=(0,s.$j)((function(e){return{post:e.profilePage.post,newPost:e.profilePage.newPost}}),(function(e){return{changeNewPost:function(t){return e((0,i.dt)(t))},addPosts:function(){return e((0,i.W5)())}}}))(p),_={title:"Profile_title__4N996",Profile:"Profile_Profile__qNsPX",Profile__name:"Profile_Profile__name__SeC8F",ProfileTextStyle:"Profile_ProfileTextStyle__gqroZ",ProfileTextHeader:"Profile_ProfileTextHeader__FP+Ti",ContactTitle:"Profile_ContactTitle__OGlXH",ProfileJobSearchTitle:"Profile_ProfileJobSearchTitle__14LKO",ProfileMega:"Profile_ProfileMega__iE5fp",Profile__img:"Profile_Profile__img__z3f7C",usedZoomImg:"Profile_usedZoomImg__jgweM",noUsedZoomImg:"Profile_noUsedZoomImg__mfDuC",selectedPhoto:"Profile_selectedPhoto__eKBpp",jobSearchIcon:"Profile_jobSearchIcon__CcbN0",ContactLink:"Profile_ContactLink__4K9qN",ContactLinkHeader:"Profile_ContactLinkHeader__86Xp-",changeButton:"Profile_changeButton__gLYrL",ProfileJobSearch:"Profile_ProfileJobSearch__wQQEf",ContactsFormContainer:"Profile_ContactsFormContainer__Fl3Hp",active:"Profile_active__uVFbY",plus:"Profile_plus__dWiGj",minus:"Profile_minus__-PMCn",status:"Profile_status__siZts",penIcon:"Profile_penIcon__XocaB",form:"Profile_form__DUSJ9",statusText:"Profile_statusText__z45GN"},P=n(885),v=function(e){return!0===e.lookingForAJob?(0,c.jsx)("img",{className:_.jobSearchIcon,src:"https://uxwing.com/wp-content/themes/uxwing/download/48-checkmark-cross/success-green-check-mark.png",alt:"Check Mark"}):(0,c.jsx)("img",{className:_.jobSearchIcon,src:"https://img.cppng.com/download/2020-06/5-2-red-cross-mark-download-png.png",alt:"Cross"})},g=function(e){return null===e.lookingForAJobDescription?"No Information":e.lookingForAJobDescription},j=function(e){return null===e.aboutMe?"No Information":e.aboutMe},N=function(e){var t=e.contactTitle,n=e.contactValue,r=e.props;return(0,c.jsxs)("div",{className:!0===r.activeContacts?_.ContactsFormContainer:_.ContactsFormContainer+" "+_.active,children:[(0,c.jsxs)("span",{className:_.ContactLinkHeader,children:[t,": "]}),(0,c.jsx)("span",{children:n})]})},C=function(e){var t=e.userProfile.map((function(t){return(0,c.jsx)("div",{children:(0,c.jsx)("div",{className:_.Profile__text,children:(0,c.jsxs)("div",{className:_.ProfileInfo,children:[(0,c.jsxs)("div",{className:_.Id,children:[" ",(0,c.jsx)("span",{className:_.ProfileTextHeader,children:"ID:"})," ",e.userProfile[0].userId," "]}),(0,c.jsxs)("div",{className:_.Profile__name,children:[(0,c.jsx)("span",{className:_.ProfileTextHeader,children:"UserName:"})," ",e.userProfile[0].fullName]}),(0,c.jsxs)("div",{className:_.ProfileTextStyle,children:[(0,c.jsx)("span",{className:_.ProfileTextHeader,children:"AboutMe:"})," ",j(t)]}),(0,c.jsxs)("div",{className:_.ProfileJobSearch,children:[(0,c.jsx)("span",{className:_.ProfileJobSearchTitle,children:"Job Search:"}),g(t)," ",v(t)]}),(0,c.jsx)("div",{onClick:function(){return e.setActiveContacts(!e.activeContacts)},className:_.ContactTitle,children:(0,c.jsxs)("span",{children:["Contacts ",(0,c.jsx)("span",{children:!1===e.activeContacts?"+":"-"})]})}),Object.keys(t.contacts).map((function(n){return(0,c.jsx)(N,{contactTitle:n,contactValue:t.contacts[n],props:e},n)}))]})})},t.userId)}));return(0,c.jsx)("div",{children:t})},b=n(5861),Z=n(7757),k=n.n(Z),I=function(e){var t=e.contactTitle,n=e.contactValue,r=e.props;return(0,c.jsxs)("div",{className:!0===r.activeContacts?_.ContactsFormContainer:_.ContactsFormContainer+" "+_.active,children:[(0,c.jsxs)("span",{className:_.ContactLinkHeader,children:[n,": "]}),(0,c.jsx)(d.gN,{className:_.form,component:m.II,placeholder:n,type:"text",name:t})]})},y=function(e){var t=(0,f.zk)(e);return(0,c.jsx)(d.J9,{initialValues:(0,r.Z)((0,r.Z)({},e.userProfile[0]),{},{someUrlIsWrong:""}),validate:t,onSubmit:function(){var t=(0,b.Z)(k().mark((function t(n){return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateAccountProfile(n);case 2:e.setChangeMode(!1);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:(0,c.jsx)("div",{children:(0,c.jsx)("div",{className:u.Z.Profile__text,children:(0,c.jsx)("div",{className:u.Z.ProfileInfo,children:(0,c.jsx)("div",{className:u.Z.ProfileTextStyle,children:(0,c.jsxs)(d.l0,{children:[(0,c.jsxs)("div",{className:_.Id,children:[(0,c.jsx)("span",{className:_.ProfileTextHeader,children:"ID:"}),e.userProfile[0].userId]}),(0,c.jsxs)("div",{className:_.Profile__name,children:[(0,c.jsx)("span",{className:_.ProfileTextHeader,children:"UserName:"}),(0,c.jsx)(d.gN,{className:_.form,component:m.II,placeholder:"FullName",type:"text",name:"fullName"})]}),(0,c.jsxs)("div",{className:_.ProfileTextStyle,children:[(0,c.jsx)("span",{className:_.ProfileTextHeader,children:"AboutMe:"})," ",(0,c.jsx)(d.gN,{className:_.form,component:m.II,placeholder:"AboutMe",type:"text",name:"aboutMe"})]}),(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:_.ProfileJobSearch,children:[(0,c.jsx)("span",{className:_.ProfileJobSearchTitle,children:"Job Search:"}),(0,c.jsx)(d.gN,{component:m.II,placeholder:"LookingForAJob",type:"checkbox",name:"lookingForAJob"}),(0,c.jsx)(d.gN,{className:_.form,component:m.II,placeholder:"LookingForAJobDescription",type:"text",name:"lookingForAJobDescription"})]})}),(0,c.jsx)(d.Bc,{className:u.Z.errorLogin,name:"someUrlIsWrong",component:"div"}),(0,c.jsx)("div",{onClick:function(){return e.setActiveContacts(!e.activeContacts)},className:_.ProfileTextHeader,children:(0,c.jsxs)("span",{children:["Contacts ",(0,c.jsx)("span",{children:!1===e.activeContacts?"+":"-"})]})}),Object.keys(e.userProfile[0].contacts).map((function(t){return(0,c.jsx)(I,{contactTitle:"contacts."+t,contactValue:t,props:e},t)})),(0,c.jsx)("div",{children:(0,c.jsx)("button",{className:_.changeButton,type:"submit",children:"GO FORM"})})]})})})})},e.item.userId)})},T=function(e,t){return!0===e?t.usedZoomImg:t.noUsedZoomImg},w=function(e,t){if(!0===e.isMyProfile)return(0,c.jsx)("input",{className:_.selectedPhoto,type:"file",onChange:t})},S=function(e,t){if(e.userData.id===e.userProfile[0].userId)return(0,c.jsx)("button",{className:_.changeButton,onClick:function(){return t(!0)},children:"CHANGE"})},F=a.createRef(),M=function(e){return(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{className:_.status,children:"Status: "}),e.item.userId===e.userData.id?!1===e.changeText?(0,c.jsx)("span",{className:_.statusText,onDoubleClick:e.addChangeText,children:e.statusText}):(0,c.jsx)("input",{ref:F,autoFocus:!0,onBlur:e.removeChangeText,onChange:function(){return e.changeTextFunc(F)},value:e.statusText}):(0,c.jsx)("span",{children:null!==e.item.aboutMe?e.item.aboutMe:"\u042f ".concat(e.item.fullName," \u0438 \u044f \u043a\u0440\u0443\u0442 :)")})]})},A=n(7781),J=(0,A.qC)((0,s.$j)((function(e){return{usersState:e.usersPage.users}}),{changeStatus:i.wv}))((function(e){var t=(0,a.useState)(!1),n=(0,P.Z)(t,2),o=n[0],s=n[1];(0,a.useEffect)((function(){e.getStatus(e.userData.id)}),[e.userData.id]);return(0,c.jsx)(M,(0,r.Z)((0,r.Z)({},e),{},{addChangeText:function(){return s(!0)},removeChangeText:function(){s(!1),e.updateStatus(e.statusText)},changeTextFunc:function(t){e.changeStatus(t.current.value)},changeText:o}))})),L=function(e){var t,n=(0,a.useState)(!1),o=(0,P.Z)(n,2),s=o[0],i=o[1],l=(0,a.useState)(!1),u=(0,P.Z)(l,2),f=u[0],d=u[1],m=(0,a.useState)(!1),h=(0,P.Z)(m,2),p=h[0],x=h[1],v=function(){return!1===f?(0,c.jsxs)("div",{children:[(0,c.jsx)(C,(0,r.Z)({changeMode:f,setChangeMode:d,activeContacts:p,setActiveContacts:x},e)),S(e,d)]}):(0,c.jsx)("div",{children:(0,c.jsx)(y,(0,r.Z)((0,r.Z)({item:e.userProfile[0],setChangeMode:d,changeMode:f},e),{},{activeContacts:p,setActiveContacts:x}))})};return 0===e.userProfile.length?(0,c.jsx)("div",{children:"Profile Loading..."}):(0,c.jsx)("div",{children:(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:_.Profile,children:[(0,c.jsxs)("div",{className:_.Profile__img,children:[(0,c.jsx)("img",{className:T(s,_),onPointerLeave:function(){return i(!1)},onClick:function(){return i(!0)},src:(t=e.userProfile[0].photos.small,null===t?"https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop":t),alt:"profilePhoto"}),(0,c.jsx)(J,(0,r.Z)((0,r.Z)({},e),{},{item:e.userProfile[0]})),w(e,(function(t){e.updatePhoto(t.target.files[0])}))]}),(0,c.jsx)("div",{className:_.Profile__text,children:(0,c.jsx)("div",{className:_.ProfileInfo,children:(0,c.jsx)(v,{})})})]})},e.userProfile[0].userId)})},D=(0,o.Z)((function(e){return(0,c.jsxs)("main",{className:_.main,children:[(0,c.jsx)("div",{className:_.container,children:(0,c.jsx)(L,(0,r.Z)({},e))}),(0,c.jsx)(x,{})]})})),H=(0,n(6916).P1)((function(e){return e.profilePage.profile}),(function(e){return e})),O=n(331),R=n(6871),U=function(e){return function(t){var n=(0,R.TH)(),o=(0,R.s0)(),s=(0,R.UO)();return(0,c.jsx)(e,(0,r.Z)((0,r.Z)({},t),{},{router:{location:n,navigate:o,params:s}}))}},E=(0,A.qC)((0,s.$j)((function(e){return{userProfile:H(e),userData:e.auth,statusText:e.profilePage.statusText}}),{updateAccountProfile:i.Gn,updatePhoto:i.tU,updateProfile:i.ck,getStatus:i.lR,updateStatus:i.Nf}),U,o.Z)((function(e){var t=e.router.params.userId;return(0,a.useEffect)((function(){t||(t=e.userData.id),O.R5.getProfile(t).then((function(t){return e.updateProfile(t)}))}),[t]),(0,c.jsx)(D,(0,r.Z)({isMyProfile:!e.router.params.userId},e))}))},6472:function(e,t,n){var r=n(8683),o=(n(2791),n(8687)),s=n(6871),i=n(184);t.Z=function(e){return(0,o.$j)((function(e){return{isAuth:e.auth.isAuth}}))((function(t){return t.isAuth?(0,i.jsx)(e,(0,r.Z)({},t)):(0,i.jsx)(s.Fg,{to:"/login"})}))}},6217:function(e,t,n){n.d(t,{MR:function(){return r},_D:function(){return o},zk:function(){return s}});var r=function(e){var t={};return e.newPost?e.newPost.length>50&&(t.newPost="Must be 50 characters or less!"):t.newPost="error!",t},o=function(e){var t={};return e.login?e.login.length>30&&(t.login="Must be 30 characters or less"):t.login="Login Request!",e.passoword?e.passoword.length>20&&(t.passoword="Must be 20 characters or less"):t.passoword="Password Request!",t},s=function(e){return function(e){var t={};e.aboutMe.length>65&&(t.aboutMe="Must be 65 characters or less"),e.fullName.length>30&&(t.fullName="Must be 30 characters or less"),e.lookingForAJobDescription.length>50&&(t.lookingForAJobDescription="Must be 50 characters or less");var n=Object.values(e.contacts).filter((function(e){return e.length>50}));return n.length>0&&(t.someUrlIsWrong="Some URL (".concat(n,") Is Wrong")),t}}},6916:function(e,t,n){n.d(t,{P1:function(){return c}});var r="NOT_FOUND";var o=function(e,t){return e===t};function s(e,t){var n="object"===typeof t?t:{equalityCheck:t},s=n.equalityCheck,i=void 0===s?o:s,a=n.maxSize,c=void 0===a?1:a,l=n.resultEqualityCheck,u=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}}(i),f=1===c?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:r},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(u):function(e,t){var n=[];function o(e){var o=n.findIndex((function(n){return t(e,n.key)}));if(o>-1){var s=n[o];return o>0&&(n.splice(o,1),n.unshift(s)),s.value}return r}return{get:o,put:function(t,s){o(t)===r&&(n.unshift({key:t,value:s}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,u);function d(){var t=f.get(arguments);if(t===r){if(t=e.apply(null,arguments),l){var n=f.getEntries(),o=n.find((function(e){return l(e.value,t)}));o&&(t=o.value)}f.put(arguments,t)}return t}return d.clearCache=function(){return f.clear()},d}function i(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function a(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var s,a=0,c={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(c=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var u=c,f=u.memoizeOptions,d=void 0===f?n:f,m=Array.isArray(d)?d:[d],h=i(r),p=e.apply(void 0,[function(){return a++,l.apply(null,arguments)}].concat(m)),x=e((function(){for(var e=[],t=h.length,n=0;n<t;n++)e.push(h[n].apply(null,arguments));return s=p.apply(null,e)}));return Object.assign(x,{resultFunc:l,memoizedResultFunc:p,dependencies:h,lastResult:function(){return s},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),x};return o}var c=a(s)},4465:function(e,t){t.Z={posts:"Posts_posts__X7YLm",container:"Posts_container__lUsCS",title:"Posts_title__J02oY",form:"Posts_form__Kusi0",forms:"Posts_forms__JOoGH",flexReverse:"Posts_flexReverse__okvb6",errorPost:"Posts_errorPost__3gEqY",errorLogin:"Posts_errorLogin__vdLjO",postFlexContainer:"Posts_postFlexContainer__TKkLE",formsContainer:"Posts_formsContainer__+hkZg",PostInputForm:"Posts_PostInputForm__w-w67",sendButton:"Posts_sendButton__h8atn"}}}]);
//# sourceMappingURL=468.fb26adf5.chunk.js.map