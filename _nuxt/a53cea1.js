(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2],{292:function(t,e,n){"use strict";n.r(e);var r=n(293),c=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e.default=c.a},293:function(t,e,n){var i,s,r,c,a,o;i=window,s=document,r="script",c="ga",i.GoogleAnalyticsObject=c,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,a=s.createElement(r),o=s.getElementsByTagName(r)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",o.parentNode.insertBefore(a,o),ga("create","UA-49538088-1","auto"),ga("send","pageview"),function(t,e,s,n,i){t[n]=t[n]||[],t[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var r=e.getElementsByTagName(s)[0],c=e.createElement(s);c.async=!0,c.src="https://www.googletagmanager.com/gtm.js?id=GTM-K33BBGX",r.parentNode.insertBefore(c,r)}(window,document,"script","dataLayer"),function(t,e,n,r,i,c,a){t.ym=t.ym||function(){(t.ym.a=t.ym.a||[]).push(arguments)},t.ym.l=1*new Date,c=e.createElement(n),a=e.getElementsByTagName(n)[0],c.async=1,c.src="https://mc.yandex.ru/metrika/tag.js",a.parentNode.insertBefore(c,a)}(window,document,"script"),ym(88052570,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0})},294:function(t,e,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("18cfe3f0",content,!0,{sourceMap:!1})},295:function(t,e,n){"use strict";n.r(e);var r=n(298),c=n(292);for(var o in c)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(o);n(296);var l=n(54),component=Object(l.a)(c.default,r.a,r.b,!1,null,"68840076",null);e.default=component.exports},296:function(t,e,n){"use strict";n(294)},297:function(t,e,n){var r=n(81)(!1);r.push([t.i,".no-height[data-v-68840076]{max-height:0}",""]),t.exports=r},298:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"no-height"},[n("iframe",{attrs:{src:"https://voksmonitor.hu/session/",width:"0",height:"0",frameborder:"0"}}),t._v(" "),n("noscript",[n("div",[n("img",{staticStyle:{position:"absolute",left:"-9999px"},attrs:{src:"https://mc.yandex.ru/watch/88052570",alt:""}})])]),t._v(" "),n("noscript",[n("iframe",{staticStyle:{display:"none",visibility:"hidden"},attrs:{src:"https://www.googletagmanager.com/ns.html?id=GTM-K33BBGX",height:"0",width:"0"}})])])}]},321:function(t,e,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("2af84ede",content,!0,{sourceMap:!1})},333:function(t,e,n){"use strict";n(321)},334:function(t,e,n){var r=n(81)(!1);r.push([t.i,".page[data-v-7d545010]{min-height:calc(100vh - 58px)}",""]),t.exports=r},368:function(t,e,n){"use strict";n.r(e);var r=n(7),c=(n(34),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("answers_classic").only(["id"]).fetch();case 3:return r=e.sent,e.abrupt("return",{answers:r});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{radio:1}},head:function(){return{title:"Volební kalkulačka 2021 - výběr stran",meta:[{hid:"compare",name:"Výběr stran",description:"Volební kalkulačka 2021 - výběr stran"}]}},methods:{next:function(){var t=!1;2==parseInt(this.radio)&&(t=!0),this.$store.commit("storeComparableSwitch",t),this.$router.push({path:"/results/"})}},components:{Analytics:n(295).default}}),o=(n(333),n(54)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2"}),t._v(" "),n("div",{staticClass:"col-12 col-md-8 list-group-item list-group-item-action m-1"},[n("label",{staticClass:"checkbox inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.radio,expression:"radio"}],staticClass:"form-check-input",attrs:{type:"radio",name:"options",id:"1",autocomplete:"off",value:"1",checked:""},domProps:{checked:t._q(t.radio,"1")},on:{change:function(e){t.radio="1"}}}),t._v("\n           Devět největších stran dle "),n("a",{attrs:{href:"https://mandaty.cz/",target:"_blank"}},[t._v("Mandáty.cz")])])])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2"}),t._v(" "),n("div",{staticClass:"list-group-item list-group-item-action m-1"},[n("label",{staticClass:"checkbox inline"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.radio,expression:"radio"}],staticClass:"form-check-input",attrs:{type:"radio",name:"options",id:"1",autocomplete:"off",value:"2"},domProps:{checked:t._q(t.radio,"2")},on:{change:function(e){t.radio="2"}}}),t._v("\n           Všechny kandidující strany\n        ")])])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-2"}),t._v(" "),n("div",{staticClass:"col-12 col-md-8 d-grid"},[n("button",{staticClass:"btn btn-lg btn-primary",on:{click:t.next}},[t._v(">> Dále >>")])])])]),t._v(" "),n("Analytics")],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",{staticClass:"p-2"},[t._v("\n      Vyberte strany, s kterými se chcete porovnat:"),n("br"),t._v(" "),n("small",[t._v("(svůj výběr můžete později změnit)")])])}],!1,null,"7d545010",null);e.default=component.exports;installComponents(component,{Analytics:n(295).default})}}]);