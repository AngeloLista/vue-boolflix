(function(i){function e(e){for(var n,s,c=e[0],o=e[1],l=e[2],f=0,I=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&I.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(i[n]=o[n]);u&&u(e);while(I.length)I.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var i,e=0;e<a.length;e++){for(var t=a[e],n=!0,c=1;c<t.length;c++){var o=t[c];0!==r[o]&&(n=!1)}n&&(a.splice(e--,1),i=s(s.s=t[0]))}return i}var n={},r={app:0},a=[];function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=i,s.c=n,s.d=function(i,e,t){s.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:t})},s.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},s.t=function(i,e){if(1&e&&(i=s(i)),8&e)return i;if(4&e&&"object"===typeof i&&i&&i.__esModule)return i;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var n in i)s.d(t,n,function(e){return i[e]}.bind(null,n));return t},s.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return s.d(e,"a",e),e},s.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;a.push([0,"chunk-vendors"]),t()})({0:function(i,e,t){i.exports=t("56d7")},"17b5":function(i,e){i.exports="data:image/png;base64,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"},"2ff3":function(i,e,t){"use strict";t("a83b")},"56d7":function(i,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{attrs:{id:"app"}},[t("Header",{on:{search:i.search}}),t("Main",{attrs:{movies:i.movies,series:i.series}})],1)},a=[],s=(t("99af"),t("bc3a")),c=t.n(s),o=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("header",[t("div",{staticClass:"\n      container-fluid\n      d-flex\n      align-items-center\n      justify-content-between\n      h-100\n    "},[t("div",{staticClass:"logo h1"},[i._v("BOOLFLIX")]),t("Search",{on:{search:i.emitSearch}})],1)])},l=[],u=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"search-container d-flex align-items-center"},[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:i.searchText,expression:"searchText",modifiers:{trim:!0}}],staticClass:"search-input",attrs:{placeholder:"Cerca un film o una serie tv",type:"text"},domProps:{value:i.searchText},on:{keyup:function(e){return!e.type.indexOf("key")&&i._k(e.keyCode,"enter",13,e.key,"Enter")?null:i.emitSearch.apply(null,arguments)},input:function(e){e.target.composing||(i.searchText=e.target.value.trim())},blur:function(e){return i.$forceUpdate()}}}),t("button",{staticClass:"ms-1",on:{click:i.emitSearch}},[t("i",{staticClass:"fa-solid fa-magnifying-glass"})])])},f=[],I={name:"Search",data:function(){return{searchText:""}},methods:{emitSearch:function(){this.$emit("search",this.searchText)}}},v=I,A=(t("abd8"),t("2877")),p=Object(A["a"])(v,u,f,!1,null,"3eaf68c6",null),g=p.exports,d={name:"Header",components:{Search:g},methods:{emitSearch:function(i){this.$emit("search",i)}}},h=d,m=(t("2ff3"),Object(A["a"])(h,o,l,!1,null,"79a7fe22",null)),C=m.exports,w=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("main",[t("div",{staticClass:"container my-3"},[i.movies.length>0?t("section",{staticClass:"my-5",attrs:{id:"movies"}},[t("h2",{staticClass:"h1 text-center"},[i._v("Movies")]),t("div",{staticClass:"card-container d-flex flex-wrap justify-content-center"},i._l(this.movies,(function(i){return t("Card",{key:i.id,attrs:{item:i}})})),1)]):i._e(),i.series.length>0?t("section",{staticClass:"my-5",attrs:{id:"series"}},[t("h2",{staticClass:"h1 text-center"},[i._v("Series")]),t("div",{staticClass:"card-container d-flex flex-wrap justify-content-center"},i._l(this.series,(function(i){return t("Card",{key:i.id,attrs:{item:i}})})),1)]):i._e()])])},b=[],y=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"card d-flex justify-content-end",style:{"background-image":"url("+i.posterUrl+")"}},[t("div",{staticClass:"hover-description h-100"},[t("div",{staticClass:"title-container"},[t("p",{staticClass:"title mb-1"},[i._v(i._s(i.item.title||i.item.name))]),t("p",{staticClass:"original-title"},[i._v(" "+i._s(i.item.original_title||i.item.original_name)+" ")])]),t("div",[i.hasFlag?t("img",{staticClass:"flag",attrs:{src:i.flagSrc,alt:i.item.original_language}}):t("span",[i._v(i._s(i.item.original_language))]),t("div",{staticClass:"star-rating"},i._l(5,(function(e){return t("i",{key:e,staticClass:"fa-star",class:i.isThisIconSolidOrRegular(i.starVote,e)})})),0)]),t("div",{staticClass:"overview-container"},[i.item.overview?t("span",[t("strong",[i._v("Overview:")])]):i._e(),t("p",{staticClass:"overview"},[i._v(i._s(i.item.overview))])])])])},x=[],O=(t("caad"),t("2532"),t("5377"),{name:"Card",props:["item"],data:function(){return{flags:["it","en"],basePosterUrl:"https://image.tmdb.org/t/p/"}},methods:{isThisIconSolidOrRegular:function(i,e){return i>=e?"fa-solid":"fa-regular"}},computed:{starVote:function(){return Math.ceil(this.item.vote_average/2)},posterUrl:function(){return null!=this.item.poster_path?"".concat(this.basePosterUrl,"w342").concat(this.item.poster_path):"https://i.pinimg.com/originals/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg"},flagSrc:function(){return t("b967")("./".concat(this.item.original_language,".png"))},hasFlag:function(){return this.flags.includes(this.item.original_language)}}}),j=O,E=(t("71d1"),Object(A["a"])(j,y,x,!1,null,"2bc212e0",null)),M=E.exports,S={name:"Main",components:{Card:M},props:["movies","series"]},B=S,P=(t("f647"),Object(A["a"])(B,w,b,!1,null,"fcc08bd4",null)),U=P.exports,F={name:"App",components:{Header:C,Main:U},data:function(){return{movies:[],series:[],api:{language:"it-IT",key:"536914e634dd4cef9d03dbc7349c9e01",baseUri:"https://api.themoviedb.org/3"}}},methods:{search:function(i){if(!i)return this.movies=[],void(this.series=[]);var e=this.api,t=e.key,n=e.language,r={params:{language:n,api_key:t,query:i}};this.fetchApi("search/movie",r,"movies"),this.fetchApi("search/tv",r,"series")},fetchApi:function(i,e,t){var n=this;c.a.get("".concat(this.api.baseUri,"/").concat(i),e).then((function(i){n[t]=i.data.results})).catch((function(i){console.log(i)}))}}},Q=F,X=(t("5c0b"),Object(A["a"])(Q,r,a,!1,null,null,null)),D=X.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(i){return i(D)}}).$mount("#app")},"5c0b":function(i,e,t){"use strict";t("9c0c")},"71d1":function(i,e,t){"use strict";t("7fa4")},"7fa4":function(i,e,t){},"8c14":function(i,e,t){},"9c0c":function(i,e,t){},a83b:function(i,e,t){},abd8:function(i,e,t){"use strict";t("8c14")},b967:function(i,e,t){var n={"./en.png":"17b5","./it.png":"e33f"};function r(i){var e=a(i);return t(e)}function a(i){if(!t.o(n,i)){var e=new Error("Cannot find module '"+i+"'");throw e.code="MODULE_NOT_FOUND",e}return n[i]}r.keys=function(){return Object.keys(n)},r.resolve=a,i.exports=r,r.id="b967"},cdf3:function(i,e,t){},e33f:function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="},f647:function(i,e,t){"use strict";t("cdf3")}});
//# sourceMappingURL=app.88701e2a.js.map