(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35ab247e","chunk-073889ee"],{"036c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.results[t.index]?n("div",{staticClass:"modal-dialog modal-lg"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header row m-2"},[t._m(0),n("div",{staticClass:"card col-12"},[n("div",{staticClass:"card-body pb-1"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-8"},[n("h4",{staticClass:"card-title"},[t._v(t._s(t.results[t.index].info.name))]),n("div",{staticClass:"card-text"},[n("span",[t._v(t._s(t.results[t.index].info.abbreviation))]),n("br")]),n("div",{staticClass:"card-text text-muted"},[t._v(t._s(t.$t("match"))+": "+t._s(t.results[t.index].result_percent)+"%")])]),n("div",{staticClass:"col-4 text-right"},[n("img",{staticClass:"picture mr-2",attrs:{src:"pictures/200x200/"+t.results[t.index].info.picture}})])])])]),n("button",{staticClass:"btn btn-secondary btn-lg btn-block mt-2",attrs:{type:"button","data-dismiss":"modal"}},[t._v(t._s(t.$t("close")))])]),n("div",{staticClass:"modal-body"},[n("table",{staticClass:"table-striped w-100"},[n("thead",[n("th",{staticClass:"text-left"},[t._v("\n                        "+t._s(t.$t("question"))+"\n                    ")]),n("th",{staticClass:"text-center"},[t._v("\n                        "+t._s(t.$t("me"))+"\n                    ")]),n("th",{staticClass:"text-center"},[t._v("\n                        x\n                    ")]),n("th",{staticClass:"text-center"},[t._v("\n                        "+t._s(t.results[t.index].info.name)+"\n                    ")]),n("th",{staticClass:"text-center"},[t._v("\n                        "+t._s(t.$t("candidate_comment"))+"\n                    ")])]),n("tbody",t._l(t.questions,(function(e,r){return n("tr",{class:[t.compared(t.answers[e.id],t.results[t.index]["info"]["votes"][e.id]),t.weighted(t.weights[e.id])]},[n("td",[t.weights[e.id]?n("i",{staticClass:"fa fa-star stars"}):t._e(),t.weights[e.id]?n("font-awesome-icon",{attrs:{icon:"star"}}):t._e(),t._v("\n                            "+t._s(e.name)+"\n                            "),n("font-awesome-icon",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.top",value:e.question,expression:"question.question",modifiers:{hover:!0,top:!0}}],attrs:{icon:"info-circle"}})],1),n("td",{staticClass:"text-center"},[t._v("\n                            "+t._s(t.answer2Text(t.answers[e.id]))+"\n                        ")]),n("td",{staticClass:"text-center"},[t._v("\n                            "+t._s(t.compare(t.answers[e.id],t.results[t.index]["info"]["votes"][e.id]))+"\n                        ")]),n("td",{staticClass:"text-center"},[t._v("\n                            "+t._s(t.answer2TextThem(t.results[t.index]["info"]["votes"][e.id]))+"\n                        ")]),n("td",{staticClass:"text-center comment p-2"},[t._v("\n                            "+t._s(t.shortenText(t.results[t.index]["info"]["details"][e.id]))+"\n                            "),t.shortened(t.results[t.index]["info"]["details"][e.id])?n("font-awesome-icon",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.top",value:t.results[t.index]["info"]["details"][e.id],expression:"results[index]['info']['details'][question.id]",modifiers:{hover:!0,top:!0}}],attrs:{icon:"info-circle"}}):t._e()],1)])})),0)])]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary btn-lg mt-2",attrs:{type:"button","data-dismiss":"modal"}},[t._v(t._s(t.$t("close")))])])])]):t._e()},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],i=n("ecee"),o=n("c074"),a=n("ad3d");i["c"].add(o["a"]),i["c"].add(o["b"]),i["c"].add(o["d"]);var c={props:["index","questions","results","answers","weights"],mounted:function(){"undefined"!==typeof $&&$((function(){$('[data-toggle="popover"]').popover()}))},computed:{stars:function(){var t=Math.floor(this.results[this.index].rating),e=0;t<this.results[this.index].rating&&(e=1);var n=5-t-e;return{full:t,half:e,empty:n}}},methods:{send:function(t){return t},answer2Text:function(t){return 1===t?this.$t("yes"):-1===t?this.$t("no"):0===t?this.$t("dont_know"):"--"},answer2TextThem:function(t){return 1===t?this.$t("yes"):-1===t?this.$t("no"):0===t?this.$t("not_voted"):"--"},compare:function(t,e){return t*e===-1?"x":""},compared:function(t,e){return void 0===t?"text-muted":t*e===-1?"text-danger":t*e===1?"text-success":""},weighted:function(t){return t?"strong":""},shortenText:function(t){if(!t)return"";var e=window.innerWidth,n=0;return n=e<576?20:400,t.length>n?t.substr(0,n-3)+"...":t},shortened:function(t){if(!t)return!1;var e=window.innerWidth,n=0;return n=e<576?20:400,t.length>n}},components:{"font-awesome-icon":a["a"]}},u=c,f=(n("580c"),n("2877")),l=Object(f["a"])(u,r,s,!1,null,"0d8d7b90",null);e["default"]=l.exports},"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"11e9":function(t,e,n){var r=n("52a7"),s=n("4630"),i=n("6821"),o=n("6a99"),a=n("69a8"),c=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=i(t),e=o(e,!0),c)try{return u(t,e)}catch(n){}if(a(t,e))return s(!r.f.call(t,e),t[e])}},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,s;if(e&&"function"==typeof(n=t.toString)&&!r(s=n.call(t)))return s;if("function"==typeof(n=t.valueOf)&&!r(s=n.call(t)))return s;if(!e&&"function"==typeof(n=t.toString)&&!r(s=n.call(t)))return s;throw TypeError("Can't convert object to primitive value")}},"1dae":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row result-winners justify-center m-1"},[n("div",{staticClass:"card-group"},t._l(t.results.slice(0,3),(function(e,r){return n("div",{staticClass:"card",attrs:{"data-toggle":"modal","data-target":"#modal-winners"},on:{click:function(n){return t.clicked("result_winners",{rank:r,id:e.info.id})}}},[n("div",{staticClass:"card-body"},[n("img",{staticClass:"picture mr-2",attrs:{src:"pictures/200x200/"+e.info.picture}}),n("h4",{staticClass:"card-title"},[t._v(t._s(e.info.name))]),n("h6",{staticClass:"card-title"},[t._v(t._s(e.info.abbreviation))])]),n("div",{staticClass:"card-footer"},[n("component-stars",{attrs:{stars:e.rating}}),n("div",{staticClass:"card-text text-muted"},[t._v(t._s(t.$t("match"))+": "+t._s(e.result_percent)+"%")]),n("span",{staticClass:"badge badge-secondary"},[t._v(t._s(r+1))])],1)])})),0),n("div",{staticClass:"modal fade",attrs:{id:"modal-winners",tabindex:"-1",role:"dialog","aria-labelledby":"modalLabel","aria-hidden":"true"}},[n("component-results-modal",{attrs:{index:t.index,questions:t.questions,results:t.results,answers:t.answers,weights:t.weights}})],1)])},s=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),o=n("2f62"),a=n("76e5"),c=n("036c");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={props:["questions"],data:function(){return{index:0}},computed:f({},Object(o["b"])({results:"getResults",answers:"getAnswers",weights:"getWeights"})),methods:{clicked:function(t,e){this.openingModal(e["rank"]),this.$clicked(t,e)},getResults:function(){return this.$store.state.results},openingModal:function(t){this.index=t}},components:{"component-stars":a["default"],"component-results-modal":c["default"]}},d=l,p=(n("e01f"),n("2877")),v=Object(p["a"])(d,r,s,!1,null,"347f16d4",null);e["default"]=v.exports},"1ec9":function(t,e,n){var r=n("f772"),s=n("e53d").document,i=r(s)&&r(s.createElement);t.exports=function(t){return i?s.createElement(t):{}}},2871:function(t,e,n){},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,n){var r=n("d9f6"),s=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"456d":function(t,e,n){var r=n("4bf8"),s=n("0d58");n("5eda")("keys",(function(){return function(t){return s(r(t))}}))},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"580c":function(t,e,n){"use strict";var r=n("6969"),s=n.n(r);s.a},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"5eda":function(t,e,n){var r=n("5ca1"),s=n("8378"),i=n("79e5");t.exports=function(t,e){var n=(s.Object||{})[t]||Object[t],o={};o[t]=e(n),r(r.S+r.F*i((function(){n(1)})),"Object",o)}},"63b6":function(t,e,n){var r=n("e53d"),s=n("584a"),i=n("d864"),o=n("35e8"),a=n("07e3"),c="prototype",u=function(t,e,n){var f,l,d,p=t&u.F,v=t&u.G,b=t&u.S,h=t&u.P,m=t&u.B,w=t&u.W,x=v?s:s[e]||(s[e]={}),g=x[c],y=v?r:b?r[e]:(r[e]||{})[c];for(f in v&&(n=e),n)l=!p&&y&&void 0!==y[f],l&&a(x,f)||(d=l?y[f]:n[f],x[f]=v&&"function"!=typeof y[f]?n[f]:m&&l?i(d,r):w&&y[f]==d?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(d):h&&"function"==typeof d?i(Function.call,d):d,h&&((x.virtual||(x.virtual={}))[f]=d,t&u.R&&g&&!g[f]&&o(g,f,d)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},6969:function(t,e,n){},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")((function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"85f2":function(t,e,n){t.exports=n("454f")},"8e60":function(t,e,n){t.exports=!n("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"8e6e":function(t,e,n){var r=n("5ca1"),s=n("990b"),i=n("6821"),o=n("11e9"),a=n("f1ae");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,r=i(t),c=o.f,u=s(r),f={},l=0;while(u.length>l)n=c(r,e=u[l++]),void 0!==n&&a(f,e,n);return f}})},9093:function(t,e,n){var r=n("ce10"),s=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},"990b":function(t,e,n){var r=n("9093"),s=n("2621"),i=n("cb7c"),o=n("7726").Reflect;t.exports=o&&o.ownKeys||function(t){var e=r.f(i(t)),n=s.f;return n?e.concat(n(t)):e}},ac6a:function(t,e,n){for(var r=n("cadf"),s=n("0d58"),i=n("2aba"),o=n("7726"),a=n("32e9"),c=n("84f2"),u=n("2b4c"),f=u("iterator"),l=u("toStringTag"),d=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=s(p),b=0;b<v.length;b++){var h,m=v[b],w=p[m],x=o[m],g=x&&x.prototype;if(g&&(g[f]||a(g,f,d),g[l]||a(g,l,m),c[m]=d,w))for(h in r)g[h]||i(g,h,r[h],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},bd86:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("85f2"),s=n.n(r);function i(t,e,n){return e in t?s()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,s){return t.call(e,n,r,s)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),s=n("794b"),i=n("1bc3"),o=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),s)try{return o(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e01f:function(t,e,n){"use strict";var r=n("2871"),s=n.n(r);s.a},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f1ae:function(t,e,n){"use strict";var r=n("86cc"),s=n("4630");t.exports=function(t,e,n){e in t?r.f(t,e,s(0,n)):t[e]=n}},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);
//# sourceMappingURL=chunk-35ab247e.d93ec968.js.map