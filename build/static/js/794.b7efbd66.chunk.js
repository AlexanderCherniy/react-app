"use strict";(self.webpackChunkreact_first=self.webpackChunkreact_first||[]).push([[794],{9794:function(e,r,n){n.r(r),n.d(r,{default:function(){return _}});var t=n(1413),o=n(8687),u=n(5732),s={photo:"Users_photo__g6PAL",activeNum:"Users_activeNum__XekHT",noactiveNum:"Users_noactiveNum__uxypF",numsContainer:"Users_numsContainer__TdemI",unfollow:"Users_unfollow__rhz4s",unfollowDisabled:"Users_unfollowDisabled__ghkeY",follow:"Users_follow__VEKMR",followDisabled:"Users_followDisabled__EEHrG",loaderSpin:"Users_loaderSpin__IfroU",cyrcle:"Users_cyrcle__ovxqc",error:"Users_error__Yl9Ve"},i=n(2791),l=n(3504),a=n(184),c=function(e){var r=e.u,n=e.isBlocked,t=e.unfollowUsers,o=e.followUsers;return!0===r.followed?(0,a.jsx)("button",{disabled:n.some((function(e){return e===r.id})),className:s.unfollow,onClick:function(){t(r.id)},children:"UNFOLLOWED"}):(0,a.jsx)("button",{disabled:n.some((function(e){return e===r.id})),className:s.follow,onClick:function(){o(r.id)},children:"FOLLOWED"})},f=function(e){return e.usersState.map((function(r){return(0,a.jsxs)("div",{className:s.user,children:[(0,a.jsx)(l.OL,{to:"/profile/"+r.id,children:(0,a.jsx)("img",{className:s.photo,src:null===r.photos.small?"https://images.theconversation.com/files/449089/original/file-20220301-25-ckck4y.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop":r.photos.small,alt:"userPhoto"})}),(0,a.jsx)("span",{children:r.id}),(0,a.jsx)("span",{children:r.name}),(0,a.jsx)("span",{children:r.status}),(0,a.jsx)(c,(0,t.Z)({u:r},e))]},r.id)}))},d=function(e){for(var r=Math.ceil(e.totalCount/e.pageSize),n=[],t=1;t<=r;t++)n.push(t);var o=e.currentPage,u=o-5<0?0:o-5,i=o+5,l=n.slice(u,i);return(0,a.jsx)(a.Fragment,{children:l.map((function(r){return(0,a.jsx)("span",{onClick:function(){e.checkUsers(r)},className:e.currentPage===r?s.activeNum:s.noactiveNum,children:r},r)}))})},p=function(e){return!0===e.error?(setTimeout((function(){e.toggleErrorStatus(!1)}),5e3),(0,a.jsx)("div",{className:s.error,children:"OOPS! ERROR OCCURRED, TRY AGAIN..."})):(0,a.jsx)("div",{})},v=function(e){return(0,a.jsxs)("div",{className:s.users,children:[(0,a.jsx)("div",{className:"title",children:"USERS"}),(0,a.jsx)(p,{toggleErrorStatus:e.toggleErrorStatus,error:e.error}),(0,a.jsx)("div",{className:s.numsContainer,children:(0,a.jsx)(d,{totalCount:e.totalCount,pageSize:e.pageSize,currentPage:e.currentPage,checkUsers:e.checkUsers})}),(0,a.jsx)("div",{className:s.loaderContainer,children:!0===e.loaderState?(0,a.jsx)("div",{className:s.loaderSpin}):""}),(0,a.jsx)(f,{isBlocked:e.isBlocked,usersState:e.usersState,followUsers:e.followUsers,unfollowUsers:e.unfollowUsers})]})},g=n(6916),h=(0,g.P1)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return"karas518"!==e.name}))})),m=(0,g.P1)((function(e){return e.usersPage.GlovalError}),(function(e){return e})),_=(0,o.$j)((function(e){return{usersState:h(e),pageSize:e.usersPage.pageSize,totalCount:e.usersPage.totalCount,currentPage:e.usersPage.currentPage,loaderState:e.usersPage.loader,isBlocked:e.usersPage.isBlocked,error:m(e)}}),{blocked:u.IN,fillUsers:u.i2,downloadUsers:u.Yg,followUsers:u.cQ,unfollowUsers:u.Oi,toggleErrorStatus:u.u7})((function(e){(0,i.useEffect)((function(){e.downloadUsers(e.usersState.length,e.currentPage,e.pageSize)}),[e.usersState]);return(0,a.jsx)(v,(0,t.Z)((0,t.Z)({},e),{},{checkUsers:function(r){return e.fillUsers(r,e.pageSize)}}))}))},6916:function(e,r,n){n.d(r,{P1:function(){return l}});var t="NOT_FOUND";var o=function(e,r){return e===r};function u(e,r){var n="object"===typeof r?r:{equalityCheck:r},u=n.equalityCheck,s=void 0===u?o:u,i=n.maxSize,l=void 0===i?1:i,a=n.resultEqualityCheck,c=function(e){return function(r,n){if(null===r||null===n||r.length!==n.length)return!1;for(var t=r.length,o=0;o<t;o++)if(!e(r[o],n[o]))return!1;return!0}}(s),f=1===l?function(e){var r;return{get:function(n){return r&&e(r.key,n)?r.value:t},put:function(e,n){r={key:e,value:n}},getEntries:function(){return r?[r]:[]},clear:function(){r=void 0}}}(c):function(e,r){var n=[];function o(e){var o=n.findIndex((function(n){return r(e,n.key)}));if(o>-1){var u=n[o];return o>0&&(n.splice(o,1),n.unshift(u)),u.value}return t}return{get:o,put:function(r,u){o(r)===t&&(n.unshift({key:r,value:u}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(l,c);function d(){var r=f.get(arguments);if(r===t){if(r=e.apply(null,arguments),a){var n=f.getEntries(),o=n.find((function(e){return a(e.value,r)}));o&&(r=o.value)}f.put(arguments,r)}return r}return d.clearCache=function(){return f.clear()},d}function s(e){var r=Array.isArray(e[0])?e[0]:e;if(!r.every((function(e){return"function"===typeof e}))){var n=r.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return r}function i(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];var o=function(){for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];var u,i=0,l={memoizeOptions:void 0},a=t.pop();if("object"===typeof a&&(l=a,a=t.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var c=l,f=c.memoizeOptions,d=void 0===f?n:f,p=Array.isArray(d)?d:[d],v=s(t),g=e.apply(void 0,[function(){return i++,a.apply(null,arguments)}].concat(p)),h=e((function(){for(var e=[],r=v.length,n=0;n<r;n++)e.push(v[n].apply(null,arguments));return u=g.apply(null,e)}));return Object.assign(h,{resultFunc:a,memoizedResultFunc:g,dependencies:v,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return o}var l=i(u)}}]);
//# sourceMappingURL=794.b7efbd66.chunk.js.map