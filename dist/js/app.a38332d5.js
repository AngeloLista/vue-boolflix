(function(e){function t(t){for(var r,c,o=t[0],l=t[1],s=t[2],f=0,p=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&p.push(i[c][0]),i[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"45e3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"container d-flex align-items-center justify-content-between h-100"},[n("div",{staticClass:"logo h1"},[e._v("BOOLFLIX")]),n("div",{staticClass:"search-container d-flex align-items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],attrs:{placeholder:"Cerca un film",type:"text"},domProps:{value:e.searchText},on:{input:function(t){t.target.composing||(e.searchText=t.target.value)}}}),n("input",{staticClass:"ms-1",attrs:{type:"button"}})])])])},o=[],l={name:"Header",data:function(){return{searchText:""}}},s=l,u=(n("88d8"),n("2877")),f=Object(u["a"])(s,c,o,!1,null,"537cb92c",null),p=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("FilmCard",{attrs:{films:e.films}})],1)},m=[],v=n("bc3a"),h=n.n(v),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.films,(function(t){return n("div",{key:t.id,staticClass:"film-card"},[n("h3",[e._v(e._s(t.title))]),n("p",[e._v(e._s(t.original_title))]),n("p",[e._v(e._s(t.original_language))]),n("p",[e._v(e._s(t.vote_average))])])})),0)},g=[],_={props:["films"],name:"FilmCard"},y=_,x=(n("75fe"),Object(u["a"])(y,b,g,!1,null,null,null)),O=x.exports,j={name:"Main",components:{FilmCard:O},data:function(){return{films:[],query:"signore degli anelli",api_key:"536914e634dd4cef9d03dbc7349c9e01"}},methods:{fetchFilms:function(){var e=this;h.a.get("https://api.themoviedb.org/3/search/movie?api_key=536914e634dd4cef9d03dbc7349c9e01&language=it-IT&query=signore degli anelli").then((function(t){e.films=t.data.results}))}},created:function(){this.fetchFilms()}},w=j,C=Object(u["a"])(w,d,m,!1,null,"76f61b48",null),T=C.exports,P={name:"App",components:{Header:p,Main:T}},M=P,k=(n("5c0b"),Object(u["a"])(M,i,a,!1,null,null,null)),F=k.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(F)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"75fe":function(e,t,n){"use strict";n("45e3")},"88d8":function(e,t,n){"use strict";n("986a")},"986a":function(e,t,n){},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.a38332d5.js.map