(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2],{292:function(t,e,n){"use strict";n.r(e);var r=n(293),o=n.n(r);for(var c in r)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},293:function(t,e,n){var i,s,r,o,a,c;i=window,s=document,r="script",o="ga",i.GoogleAnalyticsObject=o,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,a=s.createElement(r),c=s.getElementsByTagName(r)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",c.parentNode.insertBefore(a,c),ga("create","UA-49538088-1","auto"),ga("send","pageview"),function(t,e,s,n,i){t[n]=t[n]||[],t[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var r=e.getElementsByTagName(s)[0],o=e.createElement(s);o.async=!0,o.src="https://www.googletagmanager.com/gtm.js?id=GTM-K33BBGX",r.parentNode.insertBefore(o,r)}(window,document,"script","dataLayer"),function(t,e,n,r,i,o,a){t.ym=t.ym||function(){(t.ym.a=t.ym.a||[]).push(arguments)},t.ym.l=1*new Date,o=e.createElement(n),a=e.getElementsByTagName(n)[0],o.async=1,o.src="https://mc.yandex.ru/metrika/tag.js",a.parentNode.insertBefore(o,a)}(window,document,"script"),ym(88052570,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0})},294:function(t,e,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("18cfe3f0",content,!0,{sourceMap:!1})},295:function(t,e,n){"use strict";n.r(e);var r=n(298),o=n(292);for(var c in o)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n(296);var l=n(54),component=Object(l.a)(o.default,r.a,r.b,!1,null,"68840076",null);e.default=component.exports},296:function(t,e,n){"use strict";n(294)},297:function(t,e,n){var r=n(81)(!1);r.push([t.i,".no-height[data-v-68840076]{max-height:0}",""]),t.exports=r},298:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"no-height"},[n("iframe",{attrs:{src:"https://voksmonitor.hu/session/",width:"0",height:"0",frameborder:"0"}}),t._v(" "),n("noscript",[n("div",[n("img",{staticStyle:{position:"absolute",left:"-9999px"},attrs:{src:"https://mc.yandex.ru/watch/88052570",alt:""}})])]),t._v(" "),n("noscript",[n("iframe",{staticStyle:{display:"none",visibility:"hidden"},attrs:{src:"https://www.googletagmanager.com/ns.html?id=GTM-K33BBGX",height:"0",width:"0"}})])])}]},323:function(t,e,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("1c28df12",content,!0,{sourceMap:!1})},339:function(t,e,n){"use strict";n(323)},340:function(t,e,n){var r=n(81)(!1);r.push([t.i,".page[data-v-122ef856]{min-height:calc(100vh - 58px)}",""]),t.exports=r},370:function(t,e,n){"use strict";n.r(e);var r=n(7),o=(n(9),n(31),n(36),n(34),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("questions_classic").fetch();case 3:return r=e.sent,e.abrupt("return",{questions:r});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Voksmonitor 2022 - fontos kérdések ",meta:[{hid:"extra",name:"Fontos kérdések ",description:"Voksmonitor 2022 - fontos kérdések "}]}},computed:{answered:function(){var t=this,e={};return this.questions.forEach((function(n){var a=t.$store.getters.getAnswer(n.id);1==Math.abs(a)?e[n.id]=!0:e[n.id]=!1})),e},weights:function(){return this.$store.getters.getWeights},zeroAnswers:function(){return 0==Object.keys(this.$store.getters.getAnswers)}},methods:{answer:function(t){var a=this.$store.getters.getAnswer(t);return 1==a?"Igen":-1==a?"Nem":""},next:function(){var t=!1;2==parseInt(this.radio)&&(t=!0),this.$store.commit("storeComparableSwitch",t),this.$store.commit("storeWeights",this.weights),this.$router.push({path:"/results/"})}},components:{Analytics:n(295).default}}),c=(n(339),n(54)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"container"},[n("h4",{staticClass:"p-2"},[t._v("\n      Válassza ki azokat a kérdéseket, amelyek különösen fontosak az Ön számára :\n    ")]),t._v(" "),t.zeroAnswers?t._e():n("div",[n("div",{staticClass:"d-grid p-2"},[n("NuxtLink",{staticClass:"btn btn-secondary",attrs:{to:"/results/"},nativeOn:{click:function(e){return t.next.apply(null,arguments)}}},[t._v(">> Kihagyás >>")])],1),t._v(" "),t._l(t.questions,(function(e){return n("div",{key:e.id,staticClass:"list-group"},[t.answered[e.id]?n("div",{staticClass:"list-group-item list-group-item-action m-1"},[n("label",{staticClass:"checkbox inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.weights[e.id],expression:"weights[question.id]"}],staticClass:"custom-control-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.weights[e.id])?t._i(t.weights[e.id],null)>-1:t.weights[e.id]},on:{change:function(n){var r=t.weights[e.id],o=n.target,c=!!o.checked;if(Array.isArray(r)){var l=t._i(r,null);o.checked?l<0&&t.$set(t.weights,e.id,r.concat([null])):l>-1&&t.$set(t.weights,e.id,r.slice(0,l).concat(r.slice(l+1)))}else t.$set(t.weights,e.id,c)}}}),t._v("\n              "+t._s(e.name)+" "),n("small",[t._v("("+t._s(t.answer(e.id))+")")])])]):t._e()])}))],2),t._v(" "),t.zeroAnswers?n("div",[n("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v("\n        Nincsenek megválaszolt kérdések:"),n("br"),t._v(" "),n("NuxtLink",{attrs:{to:"/question/1/"}},[t._v("Futtassa a választási kalkulátort az elejétől")])],1)]):t._e(),t._v(" "),n("div",{staticClass:"d-grid p-2"},[n("NuxtLink",{staticClass:"btn btn-primary",attrs:{to:"/results/"},nativeOn:{click:function(e){return t.next.apply(null,arguments)}}},[t._v(">> Eredményeim  >>")])],1)]),t._v(" "),n("Analytics")],1)}),[],!1,null,"122ef856",null);e.default=component.exports;installComponents(component,{Analytics:n(295).default})}}]);