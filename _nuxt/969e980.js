(window.webpackJsonp=window.webpackJsonp||[]).push([[16,2,10],{292:function(t,e,n){"use strict";n.r(e);var l=n(293),c=n.n(l);for(var o in l)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return l[t]}))}(o);e.default=c.a},293:function(t,e,n){var i,s,l,c,a,o;i=window,s=document,l="script",c="ga",i.GoogleAnalyticsObject=c,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,a=s.createElement(l),o=s.getElementsByTagName(l)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",o.parentNode.insertBefore(a,o),ga("create","UA-8592359-7","auto"),ga("send","pageview"),function(t,e,n){(e[n]=e[n]||[]).push((function(){try{e.yaCounter35615280=new Ya.Metrika({id:35615280,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0})}catch(t){}}));var l=t.getElementsByTagName("script")[0],s=t.createElement("script"),c=function(){l.parentNode.insertBefore(s,l)};s.type="text/javascript",s.async=!0,s.src="https://mc.yandex.ru/metrika/watch.js","[object Opera]"==e.opera?t.addEventListener("DOMContentLoaded",c,!1):c()}(document,window,"yandex_metrika_callbacks")},294:function(t,e,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("0143b4dd",content,!0,{sourceMap:!1})},295:function(t,e,n){"use strict";n.r(e);var l=n(300),c=n(292);for(var o in c)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(o);n(296);var r=n(54),component=Object(r.a)(c.default,l.a,l.b,!1,null,"fe6a06ee",null);e.default=component.exports},296:function(t,e,n){"use strict";n(294)},297:function(t,e,n){var l=n(81)(!1);l.push([t.i,".no-height[data-v-fe6a06ee]{max-height:0}",""]),t.exports=l},300:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c}));var l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"no-height"},[n("iframe",{attrs:{src:"https://a.volebnikalkulacka.cz/session/",width:"0",height:"0",frameborder:"0"}}),t._v(" "),n("noscript",[n("div",[n("img",{staticStyle:{position:"absolute",left:"-9999px"},attrs:{src:"https://mc.yandex.ru/watch/35615280",alt:""}})])])])}]},303:function(t,e,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("549c97b9",content,!0,{sourceMap:!1})},310:function(t,e,n){"use strict";n(303)},311:function(t,e,n){var l=n(81)(!1);l.push([t.i,".page[data-v-6a234fbb]{min-height:calc(100vh - 58px);max-width:666px}.calc-inner[data-v-6a234fbb]{cursor:pointer}",""]),t.exports=l},323:function(t,e,n){var content=n(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("03cfa902",content,!0,{sourceMap:!1})},329:function(t,e,n){"use strict";n.r(e);n(35),n(9),n(210);var l={data:function(){var t=[];return void 0!==window.localStorage.calcs&&(t=JSON.parse(window.localStorage.calcs).filter((function(element){return"cz_psp_2021"==element.calc}))),{calcs:t}},computed:{noCalc:function(){var t=!1;return 0==this.calcs.length&&(t=!0),t}},methods:{removeCalc:function(i){this.calcs.splice(i,1),this.saveLocalStorage(this.calcs)},loadCalc:function(i){this.$store.commit("storeAnswers",this.calcs[i].answers),this.$store.commit("storeWeights",this.calcs[i].weights),this.$router.push({path:"/results/"})},saveLocalStorage:function(){window.localStorage.calcs=JSON.stringify(this.calcs)},localDate:function(s){Date.parse(s);var t=new Date(s);return[t.toLocaleDateString("cs-CZ"),t.toLocaleTimeString("cs-CZ")]},scrollToTop:function(){window.scrollTo(0,0)}},mounted:function(){this.scrollToTop()}},c=(n(310),n(54)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.noCalc?n("div",{staticClass:"alert alert-warning"},[t._v("\n    Není uložena žádná vyplnění volební kalkulačka.\n    "),n("br"),t._v(" "),n("NuxtLink",{attrs:{to:"/question/1/"}},[n("strong",[t._v("Spustit Volební kalkulačku")])])],1):t._e(),t._v(" "),t._l(t.calcs,(function(e,l){return n("div",{key:l,staticClass:"list-group"},[n("div",{staticClass:"list-group-item list-group-item-action flex-column align-items-start active mt-4"},[n("small",[n("button",{staticClass:"btn-close bg-danger",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeCalc(l)}}}),t._v(" "),n("span",{staticClass:"text-muted"},[t._v("Smazat")])]),t._v(" "),n("div",{staticClass:"text-white calc-inner",on:{click:function(e){return t.loadCalc(l)}}},[n("div",{staticClass:"d-flex w-100 justify-content-between"},[n("h5",{staticClass:"mb-1"},[t._v(t._s(e.name))])]),t._v(" "),n("p",{staticClass:"mb-1"},[t._v("\n          "+t._s(t.localDate(e.date)[0])+" \n          "),n("small",[t._v(t._s(t.localDate(e.date)[1]))])])])])])}))],2)}),[],!1,null,"6a234fbb",null);e.default=component.exports},341:function(t,e,n){"use strict";n(323)},342:function(t,e,n){var l=n(81)(!1);l.push([t.i,".page[data-v-bb07407e]{min-height:calc(100vh - 58px);max-width:666px}",""]),t.exports=l},372:function(t,e,n){"use strict";n.r(e);var l={head:function(){return{title:"Volební kalkulačka 2021 - moje vyplněné volební kalkulačky",meta:[{hid:"me",name:"Moje vyplněné volební kalkulačky",description:"Volební kalkulačka 2021 - moje vyplněné volební kalkulačky"}]}},components:{Analytics:n(295).default}},c=(n(341),n(54)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container page"},[t._m(0),t._v(" "),n("p",{staticClass:"alert alert-info"},[t._v("\n    Info: Tyto výsledky kalkulaček jsou uložené pouze v prohlížeči, nikam se neposílají.\n  ")]),t._v(" "),n("StoredCalcs"),t._v(" "),n("Analytics")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"pt-2"},[n("span",[t._v('Moje uložené vyplněné kalkulačky"')]),t._v(" "),n("small",[n("small",[n("sup",{staticClass:"badge rounded-pill bg-secondary"},[t._v("Experimentální")])])])])}],!1,null,"bb07407e",null);e.default=component.exports;installComponents(component,{StoredCalcs:n(329).default,Analytics:n(295).default})}}]);