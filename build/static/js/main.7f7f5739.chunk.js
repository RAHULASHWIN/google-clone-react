(this["webpackJsonpgoogle-clone1"]=this["webpackJsonpgoogle-clone1"]||[]).push([[0],{59:function(e,c,s){},60:function(e,c,s){},61:function(e,c,s){},62:function(e,c,s){},69:function(e,c,s){},72:function(e,c,s){"use strict";s.r(c);var t=s(2),a=s(0),n=s.n(a),r=s(22),i=s.n(r),o=(s(59),s(60),s(61),s(6)),l=s(44),j=s.n(l),d=s(87),h=s(21),b=(s(62),s(32)),u=s.n(b),m=s(43),x=s.n(m),O=s(86),g=s(4),v=Object(a.createContext)(),_=function(e){var c=e.reducer,s=e.initialState,n=e.children;return Object(t.jsx)(v.Provider,{value:Object(a.useReducer)(c,s),children:n})},p=function(){return Object(a.useContext)(v)},f=s(38),N="SET_SEARCH_TERM",P=function(e,c){switch(console.log(c),c.type){case N:return Object(f.a)(Object(f.a)({},e),{},{term:c.term});default:return e}};var S=function(e){var c=e.hideButtons,s=void 0!==c&&c,n=p(),r=Object(h.a)(n,2),i=(r[0],r[1]),o=Object(a.useState)(""),l=Object(h.a)(o,2),j=l[0],d=l[1],b=Object(g.f)(),m=function(e){e.preventDefault(),console.log("you hit the search button",j),i({type:N,term:j}),b.push("/search")};return Object(t.jsxs)("form",{className:"search",children:[Object(t.jsxs)("div",{className:"search__input",children:[Object(t.jsx)(u.a,{className:"search__inputIcon"}),Object(t.jsx)("input",{value:j,onChange:function(e){return d(e.target.value)}}),Object(t.jsx)(x.a,{})]}),s?Object(t.jsxs)("div",{className:"search__buttons",children:[Object(t.jsx)(O.a,{className:"search__buttonsHidden",type:"submit",onClick:m,variant:"outlined",children:"Google Search"}),Object(t.jsx)(O.a,{className:"search__buttonsHidden",variant:"outlined",children:"I'm Feeling lucky"})]}):Object(t.jsxs)("div",{className:"search__buttons",children:[Object(t.jsx)(O.a,{type:"submit",onClick:m,variant:"outlined",children:"Google Search"}),Object(t.jsx)(O.a,{variant:"outlined",children:" I'm Feeling lucky"})]})]})};var y=function(){return Object(t.jsxs)("div",{className:"home",children:[Object(t.jsxs)("div",{className:"home__header",children:[Object(t.jsxs)("div",{className:"home__headerLeft",children:[Object(t.jsx)(o.b,{to:"/about",children:"About"}),Object(t.jsx)(o.b,{to:"/store",children:"Store"})]}),Object(t.jsxs)("div",{className:"home__headerRight",children:[Object(t.jsx)(o.b,{to:"/gmail",children:"Gmail"}),Object(t.jsx)(o.b,{to:"/images",children:"Images"}),Object(t.jsx)(j.a,{}),Object(t.jsx)(d.a,{})]})]}),Object(t.jsxs)("div",{className:"home__body",children:[Object(t.jsx)("img",{src:"https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",alt:""}),Object(t.jsx)(S,{})]})]})},k=(s(69),s(37)),I=s.n(k),w=s(45),C=function(e){var c=Object(a.useState)(null),s=Object(h.a)(c,2),t=s[0],n=s[1];return Object(a.useEffect)((function(){(function(){var c=Object(w.a)(I.a.mark((function c(){return I.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyDTHJVPJwlhctLHId-udfMpCvv3Pe1WuVk","&cx=").concat("fee20f39a3f86ae92","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){n(e)}));case 1:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}})()()}),[e]),{data:t}},H=s(46),T=s.n(H),A=s(47),R=s.n(A),E=s(48),G=s.n(E),L=s(49),B=s.n(L),J=s(50),V=s.n(J);var M=function(){var e=p(),c=Object(h.a)(e,2),s=c[0].term,a=(c[1],C(s).data);return console.log(a),Object(t.jsxs)("div",{className:"searchPage",children:[Object(t.jsxs)("div",{className:"searchPage__header",children:[Object(t.jsx)(o.b,{to:"/",children:Object(t.jsx)("img",{className:"searchPage__logo",src:"https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",alt:""})}),Object(t.jsxs)("div",{className:"searchPage__headerBody",children:[Object(t.jsx)(S,{hideButtons:!0}),Object(t.jsxs)("div",{className:"searchPage__optionsLeft",children:[Object(t.jsxs)("div",{className:"searchPage__options",children:[Object(t.jsx)(u.a,{}),Object(t.jsx)(o.b,{to:"/all",children:"All"})]}),Object(t.jsxs)("div",{className:"searchPage__options",children:[Object(t.jsx)(T.a,{}),Object(t.jsx)(o.b,{to:"/news",children:"News"})]}),Object(t.jsxs)("div",{className:"searchPage__options",children:[Object(t.jsx)(R.a,{}),Object(t.jsx)(o.b,{to:"/images",children:"Images"})]}),Object(t.jsxs)("div",{className:"searchPage__options",children:[Object(t.jsx)(G.a,{}),Object(t.jsx)(o.b,{to:"/shopping",children:"Shopping"})]}),Object(t.jsxs)("div",{className:"searchPage__options",children:[Object(t.jsx)(B.a,{}),Object(t.jsx)(o.b,{to:"/maps",children:"maps"})]}),Object(t.jsxs)("div",{className:"searchPage__options",children:[Object(t.jsx)(V.a,{}),Object(t.jsx)(o.b,{to:"/more",children:"more"})]})]}),Object(t.jsxs)("div",{className:"searchPage__optionsRight",children:[Object(t.jsx)("div",{className:"searchPage__options",children:Object(t.jsx)(o.b,{to:"/settings",children:"Settings"})}),Object(t.jsx)("div",{className:"searchPage__options",children:Object(t.jsx)(o.b,{to:"/tools",children:"Tools"})})]})]})]}),s&&Object(t.jsxs)("div",{className:"searchPage__results",children:[Object(t.jsxs)("p",{className:"searchPage__resultCount",children:["About ",null===a||void 0===a?void 0:a.searchInformation.formattedTotalResults," results (",null===a||void 0===a?void 0:a.searchInformation.formattedSearchTime,") for ",s]}),null===a||void 0===a?void 0:a.items.map((function(e){var c,s,a,n,r,i;return Object(t.jsxs)("div",{className:"searchPage__result ",children:[Object(t.jsxs)("a",{className:"searchPage__resultLink",href:e.link,children:[(null===(c=e.pagemap)||void 0===c||null===(s=c.cse_image)||void 0===s?void 0:s.length)>0&&(null===(a=e.pagemap)||void 0===a||null===(n=a.cse_image[0])||void 0===n?void 0:n.src)&&Object(t.jsx)("img",{className:"searchPage__resultImage",src:null===(r=e.pagemap)||void 0===r||null===(i=r.cse_image[0])||void 0===i?void 0:i.src,alt:""}),e.displayLink]}),Object(t.jsx)("a",{className:"searchPage_-result Title",href:e.link,children:Object(t.jsx)("h2",{children:e.title})}),Object(t.jsx)("p",{className:"searchPage__result Snippet",children:e.snippet})]})}))]})]})};var D=function(){return Object(t.jsx)("div",{className:"App",children:Object(t.jsx)(o.a,{children:Object(t.jsxs)(g.c,{children:[Object(t.jsx)(g.a,{path:"/search",children:Object(t.jsx)(M,{})}),Object(t.jsx)(g.a,{path:"/",children:Object(t.jsx)(y,{})})]})})})};i.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(_,{initialState:{term:null},reducer:P,children:Object(t.jsx)(D,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.7f7f5739.chunk.js.map