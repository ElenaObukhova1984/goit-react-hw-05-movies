"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485],{485:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,c,u=e(433),o=e(861),s=e(439),i=e(757),f=e.n(i),p=e(791),v=e(87),d=e(689),h=e(14),l=e(690),x=e(168),m=e(444),Z=m.ZP.p(r||(r=(0,x.Z)(["\n  margin-bottom: 10px;\n  margin-left: 15px;\n  font-size: 25px;\n  font-weight: bold;\n"]))),g=m.ZP.ul(a||(a=(0,x.Z)(["\n \n"]))),w=m.ZP.li(c||(c=(0,x.Z)(["\n  font-size: 14px;\n  margin-bottom: 5px;\n  \n"]))),b=e(585),k=e(184),y=function(){var n=(0,p.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,p.useState)(!1),c=(0,s.Z)(a,2),i=c[0],x=c[1],m=(0,d.TH)();return(0,p.useEffect)((function(){function n(){return(n=(0,o.Z)(f().mark((function n(){var t,e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(!0),n.next=4,l.HI();case 4:t=n.sent,e=t.results,r((0,u.Z)(e)),x(!1),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),h.ZP.error("Oops! Not found! Please try again!");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,k.jsxs)(k.Fragment,{children:[i&&(0,k.jsx)(b.a,{}),(0,k.jsx)(Z,{children:"Trending today"}),(0,k.jsx)(g,{children:e.map((function(n){var t=n.title,e=n.id;return(0,k.jsx)(w,{children:(0,k.jsx)(v.rU,{to:"/movies/".concat(e),state:{from:m},children:t})},e)}))}),(0,k.jsx)(h.x7,{})]})}},690:function(n,t,e){e.d(t,{HI:function(){return s},Ku:function(){return f},Pg:function(){return i},Wf:function(){return v},fI:function(){return p}});var r=e(861),a=e(757),c=e.n(a),u=e(263),o=new URLSearchParams({api_key:"ee39ca8cad92a8b09ec7ae8a83a29296"});u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?".concat(o));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/reviews?").concat(o));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=485.324454d8.chunk.js.map