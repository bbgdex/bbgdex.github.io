(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b74166cc","chunk-c2422ffa","chunk-7724694f","chunk-2d0c2308"],{"011a":function(e,t,i){},"0161":function(e,t,i){"use strict";i("770a")},"068c":function(e,t,i){"use strict";i("011a")},"48f4":function(e,t,i){"use strict";function a(e){return"NavigationDuplicated"===e.name||e.message&&-1!==e.message.indexOf("redundant navigation")}function n(e,t){var i=t.to,n=t.url,s=t.replace;if(i&&e){var l=e[s?"replace":"push"](i);l&&l.catch&&l.catch((function(e){if(e&&!a(e))throw e}))}else n&&(s?location.replace(n):location.href=n)}function s(e){n(e.parent&&e.parent.$router,e.props)}i.d(t,"a",(function(){return s})),i.d(t,"b",(function(){return l}));var l={url:String,replace:Boolean,to:[String,Object]}},"515d":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("van-overlay",{attrs:{show:e.show}},[t("div",{staticClass:"slippage-setting"},[t("div",{staticClass:"header"},[t("h2",[e._v(e._s(e.$t("slippageSetting.text1")))]),t("van-icon",{attrs:{name:"cross"},on:{click:e.close}})],1),t("div",{staticClass:"content"},[t("span",{staticClass:"title"},[e._v(e._s(e.$t("slippageSetting.text2")))]),t("div",{staticClass:"buttons"},[t("van-button",{class:.1==e.slippagePlaceholder?"active":"",attrs:{disabled:e.checked},on:{click:function(t){e.slippagePlaceholder=.1}}},[e._v("0.1%")]),t("van-button",{class:.5==e.slippagePlaceholder?"active":"",attrs:{disabled:e.checked},on:{click:function(t){e.slippagePlaceholder=.5}}},[e._v("0.5%")]),t("van-button",{class:1==e.slippagePlaceholder?"active":"",attrs:{disabled:e.checked},on:{click:function(t){e.slippagePlaceholder=1}}},[e._v("1%")])],1),t("div",{staticClass:"input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.slippage,expression:"slippage"}],attrs:{type:"number",readonly:e.checked,placeholder:e.slippagePlaceholder},domProps:{value:e.slippage},on:{input:[function(t){t.target.composing||(e.slippage=t.target.value)},e.input]}}),t("span",[e._v("%")])]),t("span",{staticClass:"title"},[e._v(e._s(e.$t("slippageSetting.text3")))]),t("div",{staticClass:"deadline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.deadline,expression:"deadline"}],attrs:{type:"number",placeholder:e.deadlinePlaceholder},domProps:{value:e.deadline},on:{input:function(t){t.target.composing||(e.deadline=t.target.value)}}}),t("span",[e._v(e._s(e.$t("slippageSetting.text4")))])]),t("div",{staticClass:"audio"},[t("span",[e._v(e._s(e.$t("slippageSetting.text5")))]),t("van-switch",{attrs:{size:"20px","inactive-color":"#E4E4E4","active-color":"#5D2A74"},on:{change:e.switchChange},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1)])])])},n=[],s=(i("68ef"),i("e3b3"),i("d9d2"),i("d282")),l=i("ea8e"),c={size:[Number,String],value:null,loading:Boolean,disabled:Boolean,activeColor:String,inactiveColor:String,activeValue:{type:null,default:!0},inactiveValue:{type:null,default:!1}},o=i("78eb"),r=i("543e"),d=Object(s["a"])("switch"),p=d[0],h=d[1],u=p({mixins:[o["a"]],props:c,computed:{checked:function(){return this.value===this.activeValue},style:function(){return{fontSize:Object(l["a"])(this.size),backgroundColor:this.checked?this.activeColor:this.inactiveColor}}},methods:{onClick:function(e){if(this.$emit("click",e),!this.disabled&&!this.loading){var t=this.checked?this.inactiveValue:this.activeValue;this.$emit("input",t),this.$emit("change",t)}},genLoading:function(){var e=this.$createElement;if(this.loading){var t=this.checked?this.activeColor:this.inactiveColor;return e(r["a"],{class:h("loading"),attrs:{color:t}})}}},render:function(){var e=arguments[0],t=this.checked,i=this.loading,a=this.disabled;return e("div",{class:h({on:t,loading:i,disabled:a}),attrs:{role:"switch","aria-checked":String(t)},style:this.style,on:{click:this.onClick}},[e("div",{class:h("node")},[this.genLoading()])])}}),g=(i("66b9"),i("b650")),v=(i("c3a6"),i("ad06")),f=(i("f1dc"),i("6e47")),b=(i("caad"),{components:{[f["a"].name]:f["a"],[v["a"].name]:v["a"],[g["a"].name]:g["a"],[u.name]:u},data(){return{show:!1,checked:!1,slippage:"",slippagePlaceholder:"0.1",slippageStore:"",deadline:"",deadlinePlaceholder:"20"}},created(){const e=JSON.parse(localStorage.getItem("tradeSetting"));e&&(this.slippagePlaceholder=e.slippage,this.deadlinePlaceholder=e.deadline,this.checked=e.checked,this.$store.commit("slippage",e.slippage),this.$store.commit("deadline",e.deadline.toBN().times(60).toFixed()))},methods:{open(){this.show=!0},close(){const e=this.slippage.length>0?this.slippage:this.slippagePlaceholder,t=this.deadline.length>0?this.deadline:this.deadlinePlaceholder;this.$store.commit("slippage",e),this.$store.commit("deadline",t.toBN().times(60).toFixed()),localStorage.setItem("tradeSetting",JSON.stringify({slippage:e,deadline:t,checked:this.checked})),this.show=!1},input(){return this.slippage.length<=0&&this.slippageStore.length<=0?(this.slippagePlaceholder="0.5",!1):this.slippage.length<=0?(this.slippagePlaceholder=this.slippageStore,this.slippageStore="",!1):(["0.1","0.5","1"].includes(this.slippage)?this.slippageStore=this.slippage:this.slippageStore.length<=0&&(this.slippageStore=this.slippagePlaceholder),void(this.slippagePlaceholder=this.slippage))},switchChange(){this.slippage=this.checked?"100":"",this.input()}}}),m=b,k=m,S=(i("068c"),i("0161"),i("2877")),P=Object(S["a"])(k,a,n,!1,null,"585c1a01",null);t["default"]=P.exports},"66b9":function(e,t,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("e3b3"),i("bc1b")},"770a":function(e,t,i){},"78eb":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var a={inject:{vanField:{default:null}},watch:{value:function(){var e=this.vanField;e&&(e.resetValidation(),e.validateWithTrigger("onChange"))}},created:function(){var e=this.vanField;e&&!e.children&&(e.children=this)}}},b1d2:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return n}));var a="van-hairline",n=a+"--surround"},b650:function(e,t,i){"use strict";var a=i("c31d"),n=i("2638"),s=i.n(n),l=i("d282"),c=i("ba31"),o=i("b1d2"),r=i("48f4"),d=i("ad06"),p=i("543e"),h=Object(l["a"])("button"),u=h[0],g=h[1];function v(e,t,i,a){var n,l=t.tag,h=t.icon,u=t.type,v=t.color,f=t.plain,b=t.disabled,m=t.loading,k=t.hairline,S=t.loadingText,P=t.iconPosition,x={};function y(e){t.loading&&e.preventDefault(),m||b||(Object(c["a"])(a,"click",e),Object(r["a"])(a))}function C(e){Object(c["a"])(a,"touchstart",e)}v&&(x.color=f?v:"white",f||(x.background=v),-1!==v.indexOf("gradient")?x.border=0:x.borderColor=v);var w=[g([u,t.size,{plain:f,loading:m,disabled:b,hairline:k,block:t.block,round:t.round,square:t.square}]),(n={},n[o["b"]]=k,n)];function _(){return m?i.loading?i.loading():e(p["a"],{class:g("loading"),attrs:{size:t.loadingSize,type:t.loadingType,color:"currentColor"}}):i.icon?e("div",{class:g("icon")},[i.icon()]):h?e(d["a"],{attrs:{name:h,classPrefix:t.iconPrefix},class:g("icon")}):void 0}function O(){var a,n=[];return"left"===P&&n.push(_()),a=m?S:i.default?i.default():t.text,a&&n.push(e("span",{class:g("text")},[a])),"right"===P&&n.push(_()),n}return e(l,s()([{style:x,class:w,attrs:{type:t.nativeType,disabled:b},on:{click:y,touchstart:C}},Object(c["b"])(a)]),[e("div",{class:g("content")},[O()])])}v.props=Object(a["a"])({},r["b"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"},iconPosition:{type:String,default:"left"}}),t["a"]=u(v)},bc1b:function(e,t,i){},c3a6:function(e,t,i){"use strict";i("68ef"),i("9d70"),i("3743")},d9d2:function(e,t,i){},f1dc:function(e,t,i){"use strict";i("68ef"),i("a71a")}}]);