webpackJsonp([12],{"1/oy":function(e,t){},Id91:function(e,t){},KELc:function(e,t){e.exports={"cs-CZ":{header_name:"Volební kalkulačka - prezident 2018",YES:"ANO",NO:"NE",yes:"Ano",no:"Ne",dont_know:"Nevím",not_important:"Je mi to jedno",skip:"Přeskočit",result:"Výsledek",back:"Zpět",select_extra_important_questions:"Vyberte otázky, které jsou pro vás extra důležité:",clicking_detailed_match:"Tip: kliknutím na jméno kandidáta dostanete Vaši podrobnou shodu s ním",match:"Shoda",close:"Zavřít",question:"Otázka",me:"Já",candidate_comment:"Komentář kandidáta",no_replies:"Oslovili jsme všechny kandidáty, zatím na otázky neodpověděli:",fb_1:"Volební kalkulačka 2018. U mě největší shoda: ",fb_2:" nejmenší ",share_on_fb:"Řekněte o tom na ",sent_by_email:"Pošlete emailem",email_1:"Zkus si volební kalkulačku. Ukáže ti kandiáty na prezidenta, kteří jsou ti nejbližší.",email_2:"\n\nVolební kalkulačka je zde:\nhttps://volebnikalkulacka.cz/?from="},"hu-HU":{header_name:"Voksmonitor - 2018",YES:"IGEN",NO:"NEM",yes:"Igen",no:"Nem",dont_know:"Nem tudom",not_important:"Nem fontos",skip:"Ugrás",result:"Eredmény",back:"Vissza",select_extra_important_questions:"Válaszd ki a számodra legfontosabb kérdéseket:",clicking_detailed_match:"A párt nevére kattintva láthatod a részletes eredményeket",match:"Egyezés",close:"Bezárás",question:"Kérdés",me:"Te",candidate_comment:"A párt vagy a K-Monitor kommentje",no_replies:"Az alábbi pártok nem válaszoltak eddig:",fb_1:"A Voksmonitor 2018 szerint ezek a pártok állnak hozzám a legközelebb: ",fb_2:" Legkevésbé ",share_on_fb:"Oszd meg Facebookon ",sent_by_email:"Küldd el emailben",email_1:"Próbáld ki a Voksmonitort, és tudd meg, hogy melyik párt áll hozzád a legközelebb",email_2:"\n\n2018-as Voksmonitor itt érhető el:\nhttp://voksmonitor.hu/?from="}}},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"app"},o,!1,function(e){n("v+vK")},null,null).exports,i=n("/ocq");function r(e){return function(){return n("mUJ2")("./"+e+".vue")}}s.a.use(i.a);var l=new i.a({base:"/hu/2018-es-orszaggyulesi-valasztas/",mode:"history",routes:[{path:"/helloworld",name:"HelloWorld",component:r("HelloWorld")},{path:"/",name:"VAA",component:r("VAA")},{path:"/selection",name:"Selection",component:r("Selection")},{path:"/results",name:"Results",component:r("Results")},{path:"/wall",name:"Wall",component:r("Wall")}]}),u=n("TXmL"),c=n("e6fC"),m=(n("qb6w"),n("Rive"),n("NYxO"));s.a.use(m.a);var p=new m.a.Store({state:{count:1,answers:{},weights:{},results:[]},mutations:{increment:function(e){e.count++},decrement:function(e){e.count--},addAnswer:function(e,t){e.answers[t.key]=t.value},storeWeights:function(e,t){e.weights=t},storeAnswers:function(e,t){e.answers=t},resetAnswers:function(e){e.answers={}},resetWeights:function(e){e.weights={}},storeResults:function(e,t){e.results=t},storeAnswersStored:function(e,t){e.answers_stored=t}},actions:{},getters:{getCount:function(e){return e.count},getAnswers:function(e){return e.answers},getWeights:function(e){return e.weights},getResults:function(e){return e.results},getAnswersStored:function(e){return e.answers_stored}}}),d=n("ppUw"),k=n.n(d),h=n("k0KG"),v=n.n(h),g=n("mtWM"),_=n.n(g),f={install:function(e){e.prototype.$beep=function(){console.log("beep")},e.prototype.$settings=v.a,e.prototype.$getSetCookie=function(e){var t="";return this.$cookies.isKey(e)?t=this.$cookies.get(e):(t="vk."+Date.now()+"."+Math.round(1e15*Math.random()),this.$cookies.set(e,t,432e6)),t},e.prototype.$clicked=function(e,t){var n={vkid:this.$getSetCookie(this.$settings.cookie),calc:this.$settings.calc,campaign:e,attributes:t};_.a.get(this.$settings.url+this.$settings.save_path+"match/click.php",{params:n})},e.prototype.$action=function(e){var t={vkid:this.$getSetCookie(this.$settings.cookie),calc:this.$settings.calc,action:e};_.a.get(this.$settings.url+this.$settings.save_path+"match/action.php",{params:t})},e.prototype.$save_results=function(e){var t={vkid:this.$getSetCookie(this.$settings.cookie),calc:this.$settings.calc,answer:e};_.a.get(this.$settings.url+this.$settings.save_path+"match/results.php",{params:t})}}},b=f;"undefined"!=typeof window&&window.Vue&&window.Vue.use(f);var w=n("KELc"),y=n("k0KG");s.a.config.productionTip=!1,s.a.use(u.a),s.a.use(c.a),s.a.use(k.a),s.a.use(b);var z=new u.a({locale:y.locale,messages:w});new s.a({el:"#app",router:l,i18n:z,store:p,template:"<App/>",components:{App:a}}),setTimeout(function(){document.getElementById("alternative").innerHTML=""},2e3),setTimeout(function(){document.getElementById("alternative").innerHTML=""},5e3),setTimeout(function(){document.getElementById("alternative").innerHTML=""},2e4)},k0KG:function(e,t){e.exports={url:"https://voksmonitor.hu/",__url:"http://192.168.1.4:8080/",_url:"http://voksmonitor.votewiki.org/",cookie:"vkid",calc:"hu2018",locale:"hu-HU",__cdn:"http://192.168.1.4/michal/project/voksmonitor.hu/vue/",cdn:"https://voksmonitor.azureedge.net/",_cdn:"http://voksmonitor.hu/",_path:"vue/2018-es-orszaggyulesi-valasztas/src/",path:"hu/2018-es-orszaggyulesi-valasztas/",save_path:"2018-es-orszaggyulesi-valasztas/",api_path_:"http://localhost:3003/",api_path:"https://api.volebnikalkulacka.cz/",fb_app_id:"297106463778572",pic_path_small:"statics/pictures/64x64/",pic_path_large:"statics/pictures/90x90/"}},mUJ2:function(e,t,n){var s={"./Analytics.vue":["msRV",0],"./Footer.vue":["TVmP",0],"./Header.vue":["teIl",0],"./HelloWorld.vue":["gORT",8],"./Progress.vue":["wd1N",6],"./Results.vue":["YTlo",0,1],"./ResultsModal.vue":["LyJu",0],"./ResultsNoreply.vue":["OHOL",0,4],"./ResultsPrezident21.vue":["50VC",9],"./ResultsTable.vue":["3vJC",0,10],"./ResultsWinners.vue":["VPHt",0,5],"./Selection.vue":["bupt",0,7],"./Stars.vue":["WmC7",0],"./VAA.vue":["k5sO",0,2],"./Wall.vue":["+nVT",0,3]};function o(e){var t=s[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}o.keys=function(){return Object.keys(s)},o.id="mUJ2",e.exports=o},qb6w:function(e,t){},"v+vK":function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.289feed392cac6ef109c.js.map