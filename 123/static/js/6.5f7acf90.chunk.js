(this["webpackJsonpfirst-react"]=this["webpackJsonpfirst-react"]||[]).push([[6],{232:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(8);function a(e,t){if(null==e)return{};var n,a,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},234:function(e,t,n){"use strict";var r=n(32);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(34),i=n(33),s=n(35),u=n(0),c=n.n(u),l=n(19),p=n(15);n.d(t,"a",(function(){return f}));var g=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){function n(){return Object(r.a)(this,n),Object(o.a)(this,Object(i.a)(n).apply(this,arguments))}var u,p,g;return Object(s.a)(n,t),u=n,(p=[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(l.a,{to:"/login"})}}])&&a(u.prototype,p),g&&a(u,g),n}(c.a.Component);return Object(p.b)(g,{})(t)}},240:function(e,t,n){e.exports=n.p+"static/media/default-avatar.57cba6c6.png"},309:function(e,t,n){},310:function(e,t,n){e.exports={list:"User_list__24jNz"}},311:function(e,t,n){e.exports={user:"Person_user__oyhUs",avatar:"Person_avatar__Yc3Rm",info:"Person_info__1bSyT",friendButton:"Person_friendButton__2T3oO"}},312:function(e,t,n){e.exports={breadCramps:"Pagination_breadCramps__3Ikwc",pages:"Pagination_pages__2tCrO",currantPage:"Pagination_currantPage__2-s0g",page:"Pagination_page__2_zzt",next:"Pagination_next__2flcp",prev:"Pagination_prev__3FQ88"}},323:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(309),i=n.n(o),s=n(32),u=n(34),c=n(33),l=n(35),p=n(15),g=n(310),f=n.n(g),m=n(233),d=n(311),P=n.n(d),b=n(20),h=n(240),_=n.n(h),v=function(e){var t=e.user,n=e.isFollowingInProgress,r=e.createFriendship,o=e.deleteFriend;Object(m.a)(e,["user","isFollowingInProgress","createFriendship","deleteFriend"]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:P.a.user},a.a.createElement(b.b,{to:"/profile/"+t.id},a.a.createElement("img",{alt:"avatar",className:P.a.avatar,src:null!=t.photos.small?t.photos.small:_.a})),t.friend?a.a.createElement("button",{className:P.a.friendButton,disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"To enemy"):a.a.createElement("button",{className:P.a.friendButton,disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"To friend"),a.a.createElement("p",{className:P.a.info},a.a.createElement("span",null,t.name),a.a.createElement("span",null,t.status))))},F=n(232),E=n(312),y=n.n(E),C=function(e){for(var t=Math.ceil(e.totalItemsCount/e.pageSize),n=[],o=1;o<=t;o++)n.push(o);var i=Math.ceil(t/e.portionSize),s=Object(r.useState)(1),u=Object(F.a)(s,2),c=u[0],l=u[1],p=(c-1)*e.portionSize+1,g=c*e.portionSize,f=n.filter((function(e){return e>=p&&e<=g})).map((function(t){return a.a.createElement("li",null,a.a.createElement("button",{onClick:function(){return e.onPageChanged(t)},className:e.currantPage===t?y.a.currantPage:y.a.page},t))}));return a.a.createElement("ul",{className:y.a.breadCramps},c>1&&a.a.createElement("button",{className:y.a.prev,onClick:function(){l(c-1)}},"prev"),a.a.createElement("ul",{className:y.a.pages},f),i>e.portionSize&&a.a.createElement("button",{className:y.a.next,onClick:function(){l(c+1)}},"next"))},O=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",{className:f.a.list},e.usersList.map((function(t){return a.a.createElement("li",{key:t.id},a.a.createElement(v,{user:t,isFollowingInProgress:e.isFollowingInProgress,createFriendship:e.createFriendship,deleteFriend:e.deleteFriend}))}))),a.a.createElement(C,{totalItemsCount:e.totalItemsCount,portionSize:e.portionSize,pageSize:e.pageSize,onPageChanged:e.onPageChanged,currantPage:e.currantPage}))},S=n(36),j=n(83),z=function(e){return e.usersPage.usersData},I=function(e){return e.usersPage.currantPage},w=function(e){return e.usersPage.pageSize},N=function(e){return e.usersPage.totalItemsCount},k=function(e){return e.usersPage.isFetching},x=function(e){return e.usersPage.isFollowingInProgress},A=function(e){return e.usersPage.portionSize},T=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(e){n.props.getUsers(n.props.currantPage,n.props.pageSize)},n.onPageChanged=function(e){n.props.getUsers(e,n.props.pageSize),n.props.changeCurrantPage(e)},n.render=function(){return a.a.createElement(a.a.Fragment,null,n.props.isFetching?a.a.createElement(S.a,null):null,a.a.createElement(O,{pageSize:n.props.pageSize,totalItemsCount:n.props.totalItemsCount,onPageChanged:n.onPageChanged,currantPage:n.props.currantPage,usersList:n.props.usersList,createFriendship:n.props.createFriendship,deleteFriend:n.props.deleteFriend,isFollowingInProgress:n.props.isFollowingInProgress,toggleAddFriendInProgress:n.props.toggleAddFriendInProgress,portionSize:n.props.portionSize}))},n}return Object(l.a)(t,e),t}(a.a.Component),U=Object(p.b)((function(e){return{usersList:z(e),currantPage:I(e),pageSize:w(e),totalItemsCount:N(e),isFetching:k(e),isFollowingInProgress:x(e),portionSize:A(e)}}),{createFriendship:j.b,deleteFriend:j.d,changeCurrantPage:j.a,toggleAddFriendInProgress:j.f,getUsers:j.e})(T),B=function(e){return a.a.createElement("section",{className:i.a.usersPage},a.a.createElement(U,null))},L=n(17),M=n(234);t.default=Object(L.d)(M.a)((function(e){return a.a.createElement(B,null)}))}}]);
//# sourceMappingURL=6.5f7acf90.chunk.js.map