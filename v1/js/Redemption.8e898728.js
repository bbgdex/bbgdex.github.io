(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Redemption","chunk-2d0c2308"],{"332e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"redemption"},[e("div",{staticClass:"box"},[e("div",{staticClass:"logos"},[e("div",[e("img",{attrs:{src:t.info.logo0}}),e("img",{attrs:{src:t.info.logo1}})]),e("span",[t._v(t._s(`${t.info.symbol0}/${t.info.symbol1}`))])]),e("div",{staticClass:"info"},[e("div",[e("span",[t._v(t._s(t.info.symbol0))]),e("span",[t._v(t._s(t.info.amount0.toFixed(6)))])]),e("div",[e("span",[t._v(t._s(t.info.symbol1))]),e("span",[t._v(t._s(t.info.amount1.toFixed(6)))])]),e("div",[e("span",[t._v(t._s(t.$t("redemption.text1")))]),e("span",{domProps:{textContent:t._s(t.info.lp.toFixed(6))}})])]),e("div",{staticClass:"setting"},[e("span",[t._v(t._s(t.$t("redemption.text2")))]),e("span",[t._v(t._s(t.value)+"%")]),e("van-slider",{attrs:{"active-color":"#892DB2","inactive-color":"#E4E4E4"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),e("div",{staticClass:"steps"},[e("span",{on:{click:function(e){t.value=0}}},[t._v("0")]),e("span",{on:{click:function(e){t.value=25}}},[t._v("25%")]),e("span",{on:{click:function(e){t.value=50}}},[t._v("50%")]),e("span",{on:{click:function(e){t.value=75}}},[t._v("75%")]),e("span",{on:{click:function(e){t.value=100}}},[t._v("100%")])])],1),e("div",{staticClass:"rate"},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.rateToggle,expression:"!rateToggle"}]},[t._v(t._s(`${t.$t("redemption.text3")} 1 ${t.info.symbol0}≈${t.rate.toFixed(6)} ${t.info.symbol1}`))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.rateToggle,expression:"rateToggle"}]},[t._v(t._s(`${t.$t("redemption.text3")} 1 ${t.info.symbol1}≈${t.reRate.toFixed(6)} ${t.info.symbol0}`))]),e("img",{attrs:{src:i("5605")},on:{click:function(e){t.rateToggle=!t.rateToggle}}})]),e("div",{staticClass:"coin"},[e("img",{attrs:{src:t.info.logo0}}),e("span",[t._v(t._s(`${t.amount0.toFixed(6)} ${t.info.symbol0}`))])]),e("div",{staticClass:"coin"},[e("img",{attrs:{src:t.info.logo1}}),e("span",[t._v(t._s(`${t.amount1.toFixed(6)} ${t.info.symbol1}`))])]),e("van-button",{on:{click:t.removeLiquidity}},[t._v(t._s(t.$t("redemption.text4")))])],1),e("redeem-state",{attrs:{amount0:t.amount0,amount1:t.amount1,symbol0:t.info.symbol0,symbol1:t.info.symbol1,lpAmount:t.lpAmount.toFixed(),tradeState:t.tradeState,rate:t.rate,reRate:t.reRate},on:{remove:t.removeLiquidity,close:function(e){return t.$router.back()}}})],1)},a=[],o=(i("66b9"),i("b650")),r=(i("68ef"),i("9617"),i("d282")),s=i("ea8e"),c=i("a142");function u(t){if(!Object(c["c"])(t))return t;if(Array.isArray(t))return t.map((function(t){return u(t)}));if("object"===typeof t){var e={};return Object.keys(t).forEach((function(i){e[i]=u(t[i])})),e}return t}var l=i("1325"),d=i("482d"),h=i("3875"),f=i("78eb"),v=Object(r["a"])("slider"),p=v[0],m=v[1],b=function(t,e){return JSON.stringify(t)===JSON.stringify(e)},g=p({mixins:[h["a"],f["a"]],props:{disabled:Boolean,vertical:Boolean,range:Boolean,barHeight:[Number,String],buttonSize:[Number,String],activeColor:String,inactiveColor:String,min:{type:[Number,String],default:0},max:{type:[Number,String],default:100},step:{type:[Number,String],default:1},value:{type:[Number,Array],default:0}},data:function(){return{dragStatus:""}},computed:{scope:function(){return this.max-this.min},buttonStyle:function(){if(this.buttonSize){var t=Object(s["a"])(this.buttonSize);return{width:t,height:t}}}},created:function(){this.updateValue(this.value)},mounted:function(){this.range?(this.bindTouchEvent(this.$refs.wrapper0),this.bindTouchEvent(this.$refs.wrapper1)):this.bindTouchEvent(this.$refs.wrapper)},methods:{onTouchStart:function(t){this.disabled||(this.touchStart(t),this.currentValue=this.value,this.range?this.startValue=this.value.map(this.format):this.startValue=this.format(this.value),this.dragStatus="start")},onTouchMove:function(t){if(!this.disabled){"start"===this.dragStatus&&this.$emit("drag-start"),Object(l["c"])(t,!0),this.touchMove(t),this.dragStatus="draging";var e=this.$el.getBoundingClientRect(),i=this.vertical?this.deltaY:this.deltaX,n=this.vertical?e.height:e.width,a=i/n*this.scope;this.range?this.currentValue[this.index]=this.startValue[this.index]+a:this.currentValue=this.startValue+a,this.updateValue(this.currentValue)}},onTouchEnd:function(){this.disabled||("draging"===this.dragStatus&&(this.updateValue(this.currentValue,!0),this.$emit("drag-end")),this.dragStatus="")},onClick:function(t){if(t.stopPropagation(),!this.disabled){var e=this.$el.getBoundingClientRect(),i=this.vertical?t.clientY-e.top:t.clientX-e.left,n=this.vertical?e.height:e.width,a=+this.min+i/n*this.scope;if(this.range){var o=this.value,r=o[0],s=o[1],c=(r+s)/2;a<=c?r=a:s=a,a=[r,s]}this.startValue=this.value,this.updateValue(a,!0)}},handleOverlap:function(t){return t[0]>t[1]?(t=u(t),t.reverse()):t},updateValue:function(t,e){t=this.range?this.handleOverlap(t).map(this.format):this.format(t),b(t,this.value)||this.$emit("input",t),e&&!b(t,this.startValue)&&this.$emit("change",t)},format:function(t){var e=+this.min,i=+this.max,n=+this.step;t=Object(d["c"])(t,e,i);var a=Math.round((t-e)/n)*n;return Object(d["a"])(e,a)}},render:function(){var t,e,i=this,n=arguments[0],a=this.vertical,o=a?"height":"width",r=a?"width":"height",c=(t={background:this.inactiveColor},t[r]=Object(s["a"])(this.barHeight),t),u=function(){var t=i.value,e=i.min,n=i.range,a=i.scope;return n?100*(t[1]-t[0])/a+"%":100*(t-e)/a+"%"},l=function(){var t=i.value,e=i.min,n=i.range,a=i.scope;return n?100*(t[0]-e)/a+"%":null},d=(e={},e[o]=u(),e.left=this.vertical?null:l(),e.top=this.vertical?l():null,e.background=this.activeColor,e);this.dragStatus&&(d.transition="none");var h=function(t){var e=["left","right"],a="number"===typeof t,o=a?i.value[t]:i.value,r=function(){return a?"button-wrapper-"+e[t]:"button-wrapper"},s=function(){return a?"wrapper"+t:"wrapper"},c=function(){if(a){var e=i.slots(0===t?"left-button":"right-button",{value:o});if(e)return e}return i.slots("button")?i.slots("button"):n("div",{class:m("button"),style:i.buttonStyle})};return n("div",{ref:s(),attrs:{role:"slider",tabindex:i.disabled?-1:0,"aria-valuemin":i.min,"aria-valuenow":i.value,"aria-valuemax":i.max,"aria-orientation":i.vertical?"vertical":"horizontal"},class:m(r()),on:{touchstart:function(){a&&(i.index=t)},click:function(t){return t.stopPropagation()}}},[c()])};return n("div",{style:c,class:m({disabled:this.disabled,vertical:a}),on:{click:this.onClick}},[n("div",{class:m("bar"),style:d},[this.range?[h(0),h(1)]:h()])])}}),y=(i("caad"),i("b9cc")),w=i("2f62"),x=i("b4e9");const S={old:"0x8ecffe1434c9b5290aaf1c94f754e0aafdfb2acb",new:"0x81460ad24eafa7e77623de607584719af435acd3"};var $={components:{[g.name]:g,[o["a"].name]:o["a"],"redeem-state":()=>i.e("chunk-46a4c92e").then(i.bind(null,"edba"))},data(){return{info:null,rate:"0",reRate:"0",rateToggle:!1,contract:null,allowance:"0".toBN(),value:25,tradeState:"none"}},computed:{...Object(w["b"])(["deadline"]),lpAmount(){return this.info.lp.toWei().toBN().div(100).times(this.value)},amount0(){return this.info.amount0.toBN().div(100).times(this.value).toFixed()},amount1(){return this.info.amount1.toBN().div(100).times(this.value).toFixed()}},created(){const{decimals0:t,decimals1:e,reserve0:i,reserve1:n,address:a}=JSON.parse(this.$route.query.info),o="1".toWei(t).toBN().times(n).div(i).toFixed(0).fromWei(e),r="1".toWei(e).toBN().times(i).div(n).toFixed(0).fromWei(t);this.info=JSON.parse(this.$route.query.info),this.rate=Number(o)||"<0.000001",this.reRate=Number(r)||"<0.000001",this.contract=new this.$web3.eth.Contract(y,a),this.init()},methods:{async init(){const{address0:t,address1:e}=this.info,i=[t.toLowerCase(),e.toLowerCase()].includes(S.old),n=[t.toLowerCase(),e.toLowerCase()].includes(S.new),a=this.$contracts[i?"BBGToken":n?"NewBBGToken":"Router"].options.address;this.allowance=(await this.contract.methods.allowance(this.$address,a).call({from:this.$address})).toBN()},approve(){const{address0:t,address1:e}=this.info,i=[t.toLowerCase(),e.toLowerCase()].includes(S.old),n=[t.toLowerCase(),e.toLowerCase()].includes(S.new),a=this.$contracts[i?"BBGToken":n?"NewBBGToken":"Router"].options.address;this.contract.methods.approve(a,this.lpAmount.times(10).toFixed(0)).send({from:this.$address}).on("transactionHash",t=>{this.tradeState="approve"}).on("receipt",async t=>{await this.init(),this.tradeState="approved"}).on("error",t=>{this.tradeState="none"})},removeLiquidity(){const{address0:t,address1:e,decimals0:i,decimals1:n,symbol0:a,symbol1:o}=this.info;if(this.allowance.lt(this.lpAmount))return this.approve();if([a,o].includes(x["c"].symbol))return this.removeLiquidityETH();const r=Math.floor((new Date).getTime()/1e3)+Number(this.deadline),s=[t.toLowerCase(),e.toLowerCase()].includes(S.old),c=[t.toLowerCase(),e.toLowerCase()].includes(S.new),u=s?this.$contracts.BBGToken:c?this.$contracts.NewBBGToken:this.$contracts.Router;u.methods.removeLiquidity(t,e,this.lpAmount.toFixed(0),this.amount0.toWei(i).toBN().times(.99).toFixed(0),this.amount1.toWei(n).toBN().times(.99).toFixed(0),this.$address,r).send({from:this.$address}).on("transactionHash",t=>{this.tradeState="in"}).on("receipt",t=>{this.tradeState="done"}).on("error",t=>{this.tradeState="none"})},removeLiquidityETH(){const t=Math.floor((new Date).getTime()/1e3)+Number(this.deadline),{symbol0:e,symbol1:i}=this.info,n=Number(e!==x["c"].symbol),a=Number(!n),o=[address0.toLowerCase(),address1.toLowerCase()].includes(S.old),r=[address0.toLowerCase(),address1.toLowerCase()].includes(S.new),s=o?this.$contracts.BBGToken:r?this.$contracts.NewBBGToken:this.$contracts.Router;s.methods.removeLiquidityETH(this.info["address"+a],this.lpAmount.toFixed(0),this["amount"+a].toWei(this.info["decimals"+a]).toBN().times(.99).toFixed(0),this["amount"+n].toWei(this.info["decimals"+n]).toBN().times(.99).toFixed(0),this.$address,t).send({from:this.$address}).on("transactionHash",t=>{this.tradeState="in"}).on("receipt",t=>{this.tradeState="done"}).on("error",t=>{this.tradeState="none"})}}},B=$,C=B,N=(i("71fd"),i("6fe2"),i("2877")),_=Object(N["a"])(C,n,a,!1,null,"eafa4d10",null);e["default"]=_.exports},"34c9":function(t,e,i){},"482d":function(t,e,i){"use strict";function n(t,e,i){return Math.min(Math.max(t,e),i)}function a(t,e,i){var n=t.indexOf(e),a="";return-1===n?t:"-"===e&&0!==n?t.slice(0,n):("."===e&&t.match(/^(\.|-\.)/)&&(a=n?"-0":"0"),a+t.slice(0,n+1)+t.slice(n).replace(i,""))}function o(t,e,i){void 0===e&&(e=!0),void 0===i&&(i=!0),t=e?a(t,".",/\./g):t.split(".")[0],t=i?a(t,"-",/-/g):t.replace(/-/,"");var n=e?/[^-0-9.]/g:/[^-0-9]/g;return t.replace(n,"")}function r(t,e){var i=Math.pow(10,10);return Math.round((t+e)*i)/i}i.d(e,"c",(function(){return n})),i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return r}))},"48f4":function(t,e,i){"use strict";function n(t){return"NavigationDuplicated"===t.name||t.message&&-1!==t.message.indexOf("redundant navigation")}function a(t,e){var i=e.to,a=e.url,o=e.replace;if(i&&t){var r=t[o?"replace":"push"](i);r&&r.catch&&r.catch((function(t){if(t&&!n(t))throw t}))}else a&&(o?location.replace(a):location.href=a)}function o(t){a(t.parent&&t.parent.$router,t.props)}i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return r}));var r={url:String,replace:Boolean,to:[String,Object]}},"4cf4":function(t,e,i){},"543e":function(t,e,i){"use strict";var n=i("2638"),a=i.n(n),o=i("d282"),r=i("ea8e"),s=i("ba31"),c=Object(o["a"])("loading"),u=c[0],l=c[1];function d(t,e){if("spinner"===e.type){for(var i=[],n=0;n<12;n++)i.push(t("i"));return i}return t("svg",{class:l("circular"),attrs:{viewBox:"25 25 50 50"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])}function h(t,e,i){if(i.default){var n,a={fontSize:Object(r["a"])(e.textSize),color:null!=(n=e.textColor)?n:e.color};return t("span",{class:l("text"),style:a},[i.default()])}}function f(t,e,i,n){var o=e.color,c=e.size,u=e.type,f={color:o};if(c){var v=Object(r["a"])(c);f.width=v,f.height=v}return t("div",a()([{class:l([u,{vertical:e.vertical}])},Object(s["b"])(n,!0)]),[t("span",{class:l("spinner",u),style:f},[d(t,e)]),h(t,e,i)])}f.props={color:String,size:[Number,String],vertical:Boolean,textSize:[Number,String],textColor:String,type:{type:String,default:"circular"}},e["a"]=u(f)},5605:function(t,e,i){t.exports=i.p+"img/icon-exchange.cfc0e461.svg"},"66b9":function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("e3b3"),i("bc1b")},"6fe2":function(t,e,i){"use strict";i("4cf4")},"71fd":function(t,e,i){"use strict";i("34c9")},"78eb":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n={inject:{vanField:{default:null}},watch:{value:function(){var t=this.vanField;t&&(t.resetValidation(),t.validateWithTrigger("onChange"))}},created:function(){var t=this.vanField;t&&!t.children&&(t.children=this)}}},9617:function(t,e,i){},b1d2:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}));var n="van-hairline",a=n+"--surround"},b650:function(t,e,i){"use strict";var n=i("c31d"),a=i("2638"),o=i.n(a),r=i("d282"),s=i("ba31"),c=i("b1d2"),u=i("48f4"),l=i("ad06"),d=i("543e"),h=Object(r["a"])("button"),f=h[0],v=h[1];function p(t,e,i,n){var a,r=e.tag,h=e.icon,f=e.type,p=e.color,m=e.plain,b=e.disabled,g=e.loading,y=e.hairline,w=e.loadingText,x=e.iconPosition,S={};function $(t){e.loading&&t.preventDefault(),g||b||(Object(s["a"])(n,"click",t),Object(u["a"])(n))}function B(t){Object(s["a"])(n,"touchstart",t)}p&&(S.color=m?p:"white",m||(S.background=p),-1!==p.indexOf("gradient")?S.border=0:S.borderColor=p);var C=[v([f,e.size,{plain:m,loading:g,disabled:b,hairline:y,block:e.block,round:e.round,square:e.square}]),(a={},a[c["b"]]=y,a)];function N(){return g?i.loading?i.loading():t(d["a"],{class:v("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}}):i.icon?t("div",{class:v("icon")},[i.icon()]):h?t(l["a"],{attrs:{name:h,classPrefix:e.iconPrefix},class:v("icon")}):void 0}function _(){var n,a=[];return"left"===x&&a.push(N()),n=g?w:i.default?i.default():e.text,n&&a.push(t("span",{class:v("text")},[n])),"right"===x&&a.push(N()),a}return t(r,o()([{style:S,class:C,attrs:{type:e.nativeType,disabled:b},on:{click:$,touchstart:B}},Object(s["b"])(n)]),[t("div",{class:v("content")},[_()])])}p.props=Object(n["a"])({},u["b"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"},iconPosition:{type:String,default:"left"}}),e["a"]=f(p)},bc1b:function(t,e,i){},e3b3:function(t,e,i){}}]);