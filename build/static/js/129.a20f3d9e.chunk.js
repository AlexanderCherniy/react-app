"use strict";(self.webpackChunkreact_first=self.webpackChunkreact_first||[]).push([[129],{8414:function(e,t,n){n.d(t,{Gr:function(){return d},II:function(){return f},gx:function(){return u}});var r=n(1413),o=n(5987),s=n(5705),i=n(7866),a=n(184),c=["field","form","placeholder","className","children"],l=function(e){e.field,e.form,e.placeholder,e.className;var t=e.children;(0,o.Z)(e,c);return(0,a.jsxs)("div",{className:i.Z.postFlexContainer,children:[t,(0,a.jsx)(s.Bc,{className:i.Z.errorLogin,name:t.props.name,component:"div"})]})},u=function(e){var t=Object.assign({},e);return(0,a.jsx)(l,(0,r.Z)((0,r.Z)({},t),{},{children:(0,a.jsx)("textarea",(0,r.Z)((0,r.Z)({},t.field),t))}))},f=function(e){var t=Object.assign({},e);return(0,a.jsx)(l,(0,r.Z)((0,r.Z)({},t),{},{children:(0,a.jsx)("input",(0,r.Z)((0,r.Z)({},t.field),t))}))};function d(e,t,n,r,o){return(0,a.jsx)(s.gN,{className:e,component:n,placeholder:r,type:o,name:t})}},9129:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var r=n(1413),o=n(2791),s=n(8687),i=n(6871),a=n(184),c=function(e){return(0,s.$j)((function(e){return{isAuth:e.auth.isAuth}}))((function(t){return t.isAuth?(0,a.jsx)(e,(0,r.Z)({},t)):(0,a.jsx)(i.Fg,{to:"/login"})}))},l=n(5861),u=n(7757),f=n.n(u),d=n(81),m=function(e){return(0,a.jsxs)("div",{className:"post",children:[(0,a.jsxs)("div",{className:"post__avatar",children:[" ",(0,a.jsx)("img",{src:e.img,alt:"avatar"})," "]}),(0,a.jsx)("div",{className:"post__comment",children:e.comment})]})},h=n(7866),p=n(1774),x=n(5705),P=n(8414),_={newPost:""},v=function(e){return(0,a.jsx)(x.J9,{initialValues:_,validate:p.MR,onSubmit:function(t){e.changeNewPost(t.newPost),e.addPosts(null===e.userData.photo?"https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop":e.userData.photo),t.newPost=""},children:(0,a.jsxs)(x.l0,{children:[(0,P.Gr)(h.Z.PostInputForm,"newPost",P.gx,"Your comment..."),(0,a.jsx)("button",{type:"submit",className:h.Z.sendButton,children:"Send"})]})})},g=function(e){return localStorage.setItem("posts",JSON.stringify(e.post)),(0,a.jsxs)("div",{className:h.Z.posts,children:[(0,a.jsxs)("div",{className:h.Z.container,children:[(0,a.jsxs)("h2",{className:h.Z.title,children:["Posts ",(0,a.jsx)("img",{className:h.Z.cross,onClick:function(){return e.deletePosts()},src:"https://icon-library.com/images/cross-png-icon/cross-png-icon-3.jpg",alt:"cross"})]}),(0,a.jsx)(v,{userData:e.userData,changeNewPost:e.changeNewPost,addPosts:e.addPosts})]}),(0,a.jsx)("div",{className:h.Z.flexReverse,children:null===e.post?(0,a.jsx)("div",{children:"No Comments"}):e.post.map((function(e){return(0,a.jsx)(m,{img:e.img,comment:e.comment},e.id)}))})]})},j=(0,s.$j)((function(e){return{post:e.profilePage.post,newPost:e.profilePage.newPost,userData:e.auth}}),(function(e){return{changeNewPost:function(t){return e(d.Nw.changePostsCreateAction(t))},addPosts:function(t){return e(d.Nw.addPostsCreateAction(t))},deletePosts:function(){var t=(0,l.Z)(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(d.Nw.deletePosts());case 2:e(d.Nw.checkPosts());case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}}))(g),N=j,C={title:"Profile_title__XHrQy",Profile:"Profile_Profile__vfELr",Profile__name:"Profile_Profile__name__6aP-v",ProfileTextStyle:"Profile_ProfileTextStyle__gTYF9",ProfileTextHeader:"Profile_ProfileTextHeader__YAa-t",ContactTitle:"Profile_ContactTitle__K1yv-",ProfileJobSearchTitle:"Profile_ProfileJobSearchTitle__Zcafd",ProfileMega:"Profile_ProfileMega__loabJ",Profile__img:"Profile_Profile__img__oRgxk",usedZoomImg:"Profile_usedZoomImg__Mm1YW",noUsedZoomImg:"Profile_noUsedZoomImg__7Uj+3",selectedPhoto:"Profile_selectedPhoto__3+nu7",jobSearchIcon:"Profile_jobSearchIcon__kixfC",ContactLink:"Profile_ContactLink__S0O9a",ContactLinkHeader:"Profile_ContactLinkHeader__CGhpt",changeButton:"Profile_changeButton__eXDz2",ProfileJobSearch:"Profile_ProfileJobSearch__I32tm",ContactsFormContainer:"Profile_ContactsFormContainer__2Ctn5",active:"Profile_active__BRuU1",plus:"Profile_plus__dy9Cn",minus:"Profile_minus__dWi1b",status:"Profile_status__pLPfV",penIcon:"Profile_penIcon__6kjp2",form:"Profile_form__peI+f",statusText:"Profile_statusText__O0PyT"},b=n(4942),I=n(885),Z=function(e){return!0===e.lookingForAJob?(0,a.jsx)("img",{className:C.jobSearchIcon,src:"https://uxwing.com/wp-content/themes/uxwing/download/48-checkmark-cross/success-green-check-mark.png",alt:"Check Mark"}):(0,a.jsx)("img",{className:C.jobSearchIcon,src:"https://img.cppng.com/download/2020-06/5-2-red-cross-mark-download-png.png",alt:"Cross"})},k=function(e){return null===e.lookingForAJobDescription?"No Information":e.lookingForAJobDescription},y=function(e){return null===e.aboutMe?"No Information":e.aboutMe},w=function(e){var t=o.useRef(null);return(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:C.status,children:"Status: "}),e.item.userId===e.userData.id?!1===e.changeText?(0,a.jsx)("span",{className:C.statusText,onDoubleClick:e.addChangeText,children:e.statusText}):(0,a.jsx)("input",{ref:t,autoFocus:!0,onBlur:e.removeChangeText,onChange:function(){e.changeTextFunc(t)},value:e.statusText}):(0,a.jsx)("span",{children:null!==e.item.aboutMe?e.item.aboutMe:"\u042f ".concat(e.item.fullName," \u0438 \u044f \u043a\u0440\u0443\u0442 :)")})]})},T=n(7781),S=(0,T.qC)((0,s.$j)((function(e){return{usersState:e.usersPage.users}}),{changeStatus:d.Nw.changeStatus}))((function(e){var t=(0,o.useState)(!1),n=(0,I.Z)(t,2),s=n[0],i=n[1];(0,o.useEffect)((function(){e.getStatus(e.userData.id)}),[e.userData.id]);return(0,a.jsx)(w,(0,r.Z)((0,r.Z)({},e),{},{addChangeText:function(){return i(!0)},removeChangeText:function(){i(!1),e.updateStatus(e.statusText)},changeTextFunc:function(t){e.changeStatus(t.current.value)},changeText:s}))})),F=function(e){var t=e.contactTitle,n=e.contactValue,r=e.props;return(0,a.jsxs)("div",{className:!0===r.activeContacts?C.ContactsFormContainer:C.ContactsFormContainer+" "+C.active,children:[(0,a.jsxs)("span",{className:C.ContactLinkHeader,children:[t,": "]}),(0,a.jsx)("span",{children:n})]})},A=function(e){var t=e.userProfile.map((function(t){return(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:C.Profile__text,children:(0,a.jsxs)("div",{className:C.ProfileInfo,children:[(0,a.jsxs)("div",{className:C.Id,children:[" ",(0,a.jsx)("span",{className:C.ProfileTextHeader,children:"ID:"})," ",e.userProfile[0].userId," "]}),(0,a.jsxs)("div",{className:C.Profile__name,children:[(0,a.jsx)("span",{className:C.ProfileTextHeader,children:"UserName:"})," ",e.userProfile[0].fullName]}),(0,a.jsxs)("div",{className:C.ProfileTextStyle,children:[(0,a.jsx)("span",{className:C.ProfileTextHeader,children:"AboutMe:"})," ",y(t)]}),(0,a.jsxs)("div",{className:C.ProfileJobSearch,children:[(0,a.jsx)("span",{className:C.ProfileJobSearchTitle,children:"Job Search:"}),k(t)," ",Z(t)]}),(0,a.jsx)("div",{onClick:function(){return e.setActiveContacts(!e.activeContacts)},className:C.ContactTitle,children:(0,a.jsxs)("span",{children:["Contacts ",(0,a.jsx)("span",{children:!1===e.activeContacts?"+":"-"})]})}),Object.keys(t.contacts).map((function(n){return(0,a.jsx)(F,{contactTitle:n,contactValue:t.contacts[n],props:e},n)}))]})})},t.userId)}));return(0,a.jsx)("div",{children:t})},M=function(e){var t=e.contactTitle,n=e.contactValue,r=e.activeContacts;return(0,a.jsxs)("div",{className:!0===r?C.ContactsFormContainer:C.ContactsFormContainer+" "+C.active,children:[(0,a.jsxs)("span",{className:C.ContactLinkHeader,children:[n,": "]}),(0,P.Gr)(C.form,t,P.II,n)]})},J=function(e){(0,p.zk)(e.item);return(0,a.jsx)(x.J9,{initialValues:(0,r.Z)((0,r.Z)({},e.userProfile[0]),{},{someUrlIsWrong:""}),onSubmit:function(){var t=(0,l.Z)(f().mark((function t(n){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateAccountProfile(n);case 2:e.setChangeMode(!1);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:h.Z.Profile__text,children:(0,a.jsx)("div",{className:h.Z.ProfileInfo,children:(0,a.jsx)("div",{className:h.Z.ProfileTextStyle,children:(0,a.jsxs)(x.l0,{children:[(0,a.jsxs)("div",{className:C.Id,children:[(0,a.jsx)("span",{className:C.ProfileTextHeader,children:"ID:"}),e.userProfile[0].userId]}),(0,a.jsxs)("div",{className:C.Profile__name,children:[(0,a.jsx)("span",{className:C.ProfileTextHeader,children:"UserName:"}),(0,P.Gr)(C.form,"fullName",P.II,"FullName")]}),(0,a.jsx)(S,(0,r.Z)((0,r.Z)({},e),{},{item:e.userProfile[0]})),(0,a.jsxs)("div",{className:C.ProfileTextStyle,children:[(0,a.jsx)("span",{className:C.ProfileTextHeader,children:"AboutMe:"})," ",(0,P.Gr)(C.form,"aboutMe",P.II,"AboutMe")]}),(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:C.ProfileJobSearch,children:[(0,a.jsx)("span",{className:C.ProfileJobSearchTitle,children:"Job Search:"}),(0,P.Gr)(C.form,"lookingForAJob",P.II,"LookingForAJob","checkbox"),(0,P.Gr)(C.form,"lookingForAJobDescription",P.II,"LookingForAJobDescription")]})}),(0,a.jsx)(x.Bc,{className:h.Z.errorLogin,name:"someUrlIsWrong",component:"div"}),(0,a.jsx)("div",{onClick:function(){return e.setActiveContacts(!e.activeContacts)},className:C.ProfileTextHeader,children:(0,a.jsxs)("span",{children:["Contacts ",(0,a.jsx)("span",{children:!1===e.activeContacts?"+":"-"})]})}),Object.keys(e.userProfile[0].contacts).map((function(t){return(0,a.jsx)(M,{contactTitle:"contacts."+t,contactValue:t,activeContacts:e.activeContacts},t)})),(0,a.jsx)("button",{className:C.changeButton,type:"submit",children:"GO FORM"})]})})})})},e.item.userId)})},D=function(e){return!0===e.isMyProfile?(0,a.jsx)("input",{className:C.selectedPhoto,type:"file",onChange:e.selectedPhoto}):(0,a.jsx)("div",{})},L=function(e,t){if(e.userData.id===e.userProfile[0].userId)return(0,a.jsx)("button",{className:C.changeButton,onClick:function(){return t(!0)},children:"CHANGE"})},R=n(1694),U=n.n(R),H=function(e){var t,n=(0,o.useState)(!1),s=(0,I.Z)(n,2),i=s[0],c=s[1],l=(0,o.useState)(!1),u=(0,I.Z)(l,2),f=u[0],d=u[1],m=(0,o.useState)(!1),h=(0,I.Z)(m,2),p=h[0],x=h[1],P=U()((0,b.Z)({},C.usedZoomImg,!0===i),(0,b.Z)({},C.noUsedZoomImg,!1===i)),_=function(){return!1===f?(0,a.jsxs)("div",{children:[(0,a.jsx)(A,(0,r.Z)({changeMode:f,setChangeMode:d,activeContacts:p,setActiveContacts:x},e)),L(e,d)]}):(0,a.jsx)("div",{children:(0,a.jsx)(J,(0,r.Z)((0,r.Z)({item:e.userProfile[0],setChangeMode:d,changeMode:f},e),{},{activeContacts:p,setActiveContacts:x}))})};return 0===e.userProfile.length?(0,a.jsx)("div",{children:"Profile Loading..."}):(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:C.Profile,children:[(0,a.jsxs)("div",{className:C.Profile__img,children:[(0,a.jsx)("img",{className:P,onPointerLeave:function(){return c(!1)},onClick:function(){return c(!0)},src:(t=e.userProfile[0].photos.small,null===t?"https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop":t),alt:"profilePhoto"}),(0,a.jsx)(S,(0,r.Z)((0,r.Z)({},e),{},{item:e.userProfile[0]})),(0,a.jsx)(D,(0,r.Z)((0,r.Z)({},e),{},{selectedPhoto:function(t){e.updatePhoto(t.target.files[0])}}))]}),(0,a.jsx)("div",{className:C.Profile__text,children:(0,a.jsx)("div",{className:C.ProfileInfo,children:(0,a.jsx)(_,{})})})]})},e.userProfile[0].userId)})},O=c((function(e){return(0,a.jsxs)("main",{className:C.main,children:[(0,a.jsx)("div",{className:C.container,children:(0,a.jsx)(H,(0,r.Z)({},e))}),(0,a.jsx)(N,{})]})})),B=(0,n(6916).P1)((function(e){return e.profilePage.profile}),(function(e){return e})),G=n(3218),E=function(e){return function(t){var n=(0,i.TH)(),o=(0,i.s0)(),s=(0,i.UO)();return(0,a.jsx)(e,(0,r.Z)((0,r.Z)({},t),{},{router:{location:n,navigate:o,params:s}}))}},q=(0,T.qC)((0,s.$j)((function(e){return{userProfile:B(e),userData:e.auth,statusText:e.profilePage.statusText}}),{updateAccountProfile:d.Gn,updatePhoto:d.tU,getStatus:d.lR,updateStatus:d.Nf,updateProfile:d.Nw.updateProfile}),E,c)((function(e){var t=e.router.params.userId;return(0,o.useEffect)((function(){t||(t=e.userData.id),G.R5.getProfile(t).then((function(t){return e.updateProfile(t)}))}),[t]),(0,a.jsx)(O,(0,r.Z)({isMyProfile:!e.router.params.userId},e))}))},1774:function(e,t,n){n.d(t,{MR:function(){return r},_D:function(){return o},zk:function(){return s}});var r=function(e){var t={};return e.newPost?e.newPost.length>50&&(t.newPost="Must be 50 characters or less!"):t.newPost="error!",t},o=function(e){var t={};return e.login?e.login.length>30&&(t.login="Must be 30 characters or less"):t.login="Login Request!",e.passoword?e.passoword.length>20&&(t.passoword="Must be 20 characters or less"):t.passoword="Password Request!",t},s=function(e){var t={};e.aboutMe.length>65&&(t.aboutMe="Must be 65 characters or less"),e.fullName.length>30&&(t.fullName="Must be 30 characters or less"),e.lookingForAJobDescription.length>50&&(t.lookingForAJobDescription="Must be 50 characters or less");var n=Object.values(e.contacts).filter((function(e){return e.length>50}));return n.length>0&&(t.someUrlIsWrong="Some URL (".concat(n,") Is Wrong")),t}},6916:function(e,t,n){n.d(t,{P1:function(){return c}});var r="NOT_FOUND";var o=function(e,t){return e===t};function s(e,t){var n="object"===typeof t?t:{equalityCheck:t},s=n.equalityCheck,i=void 0===s?o:s,a=n.maxSize,c=void 0===a?1:a,l=n.resultEqualityCheck,u=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,o=0;o<r;o++)if(!e(t[o],n[o]))return!1;return!0}}(i),f=1===c?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:r},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(u):function(e,t){var n=[];function o(e){var o=n.findIndex((function(n){return t(e,n.key)}));if(o>-1){var s=n[o];return o>0&&(n.splice(o,1),n.unshift(s)),s.value}return r}return{get:o,put:function(t,s){o(t)===r&&(n.unshift({key:t,value:s}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,u);function d(){var t=f.get(arguments);if(t===r){if(t=e.apply(null,arguments),l){var n=f.getEntries(),o=n.find((function(e){return l(e.value,t)}));o&&(t=o.value)}f.put(arguments,t)}return t}return d.clearCache=function(){return f.clear()},d}function i(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function a(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var s,a=0,c={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(c=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var u=c,f=u.memoizeOptions,d=void 0===f?n:f,m=Array.isArray(d)?d:[d],h=i(r),p=e.apply(void 0,[function(){return a++,l.apply(null,arguments)}].concat(m)),x=e((function(){for(var e=[],t=h.length,n=0;n<t;n++)e.push(h[n].apply(null,arguments));return s=p.apply(null,e)}));return Object.assign(x,{resultFunc:l,memoizedResultFunc:p,dependencies:h,lastResult:function(){return s},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),x};return o}var c=a(s)},7866:function(e,t){t.Z={posts:"Posts_posts__YJ7uB",container:"Posts_container__vc4F3",title:"Posts_title__UICKL",cross:"Posts_cross__V6vMY",form:"Posts_form__zIL9X",forms:"Posts_forms__uBc3I",flexReverse:"Posts_flexReverse__pKQyx",errorPost:"Posts_errorPost__UbB-W",errorLogin:"Posts_errorLogin__ls34U",postFlexContainer:"Posts_postFlexContainer__FpBKn",formsContainer:"Posts_formsContainer__QPpTe",PostInputForm:"Posts_PostInputForm__t0uui",sendButton:"Posts_sendButton__79+rA"}}}]);
//# sourceMappingURL=129.a20f3d9e.chunk.js.map