(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Redemption","chunk-2d0c2308"],{"332e":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"redemption"},[e("div",{staticClass:"box"},[e("div",{staticClass:"logos"},[e("div",[e("img",{attrs:{src:t.info.logo0}}),e("img",{attrs:{src:t.info.logo1}})]),e("span",[t._v(t._s(`${t.info.symbol0}/${t.info.symbol1}`))])]),e("div",{staticClass:"info"},[e("div",[e("span",[t._v(t._s(t.info.symbol0))]),e("span",[t._v(t._s(t.info.amount0.toFixed(6)))])]),e("div",[e("span",[t._v(t._s(t.info.symbol1))]),e("span",[t._v(t._s(t.info.amount1.toFixed(6)))])]),e("div",[e("span",[t._v(t._s(t.$t("redemption.text1")))]),e("span",{domProps:{textContent:t._s(t.info.lp.toFixed(6))}})])]),e("div",{staticClass:"setting"},[e("span",[t._v(t._s(t.$t("redemption.text2")))]),e("span",[t._v(t._s(t.value)+"%")]),e("van-slider",{attrs:{"active-color":"#892DB2","inactive-color":"#E4E4E4"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),e("div",{staticClass:"steps"},[e("span",{on:{click:function(e){t.value=0}}},[t._v("0")]),e("span",{on:{click:function(e){t.value=25}}},[t._v("25%")]),e("span",{on:{click:function(e){t.value=50}}},[t._v("50%")]),e("span",{on:{click:function(e){t.value=75}}},[t._v("75%")]),e("span",{on:{click:function(e){t.value=100}}},[t._v("100%")])])],1),e("div",{staticClass:"rate"},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.rateToggle,expression:"!rateToggle"}]},[t._v(t._s(`${t.$t("redemption.text3")} 1 ${t.info.symbol0}≈${t.rate.toFixed(6)} ${t.info.symbol1}`))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.rateToggle,expression:"rateToggle"}]},[t._v(t._s(`${t.$t("redemption.text3")} 1 ${t.info.symbol1}≈${t.reRate.toFixed(6)} ${t.info.symbol0}`))]),e("img",{attrs:{src:n("5605")},on:{click:function(e){t.rateToggle=!t.rateToggle}}})]),e("div",{staticClass:"coin"},[e("img",{attrs:{src:t.info.logo0}}),e("span",[t._v(t._s(`${t.amount0.toFixed(6)} ${t.info.symbol0}`))])]),e("div",{staticClass:"coin"},[e("img",{attrs:{src:t.info.logo1}}),e("span",[t._v(t._s(`${t.amount1.toFixed(6)} ${t.info.symbol1}`))])]),e("van-button",{on:{click:t.removeLiquidity}},[t._v(t._s(t.$t("redemption.text4")))])],1),e("redeem-state",{attrs:{amount0:t.amount0,amount1:t.amount1,symbol0:t.info.symbol0,symbol1:t.info.symbol1,lpAmount:t.lpAmount.toFixed(),tradeState:t.tradeState,rate:t.rate,reRate:t.reRate},on:{remove:t.removeLiquidity,close:function(e){return t.$router.back()}}})],1)},a=[],o=(n("66b9"),n("b650")),s=(n("68ef"),n("9617"),n("d282")),r=n("ea8e"),c=n("a142");function d(t){if(!Object(c["c"])(t))return t;if(Array.isArray(t))return t.map((function(t){return d(t)}));if("object"===typeof t){var e={};return Object.keys(t).forEach((function(n){e[n]=d(t[n])})),e}return t}var u=n("1325"),l=n("482d"),h=n("3875"),f=n("78eb"),m=Object(s["a"])("slider"),b=m[0],p=m[1],v=function(t,e){return JSON.stringify(t)===JSON.stringify(e)},g=b({mixins:[h["a"],f["a"]],props:{disabled:Boolean,vertical:Boolean,range:Boolean,barHeight:[Number,String],buttonSize:[Number,String],activeColor:String,inactiveColor:String,min:{type:[Number,String],default:0},max:{type:[Number,String],default:100},step:{type:[Number,String],default:1},value:{type:[Number,Array],default:0}},data:function(){return{dragStatus:""}},computed:{scope:function(){return this.max-this.min},buttonStyle:function(){if(this.buttonSize){var t=Object(r["a"])(this.buttonSize);return{width:t,height:t}}}},created:function(){this.updateValue(this.value)},mounted:function(){this.range?(this.bindTouchEvent(this.$refs.wrapper0),this.bindTouchEvent(this.$refs.wrapper1)):this.bindTouchEvent(this.$refs.wrapper)},methods:{onTouchStart:function(t){this.disabled||(this.touchStart(t),this.currentValue=this.value,this.range?this.startValue=this.value.map(this.format):this.startValue=this.format(this.value),this.dragStatus="start")},onTouchMove:function(t){if(!this.disabled){"start"===this.dragStatus&&this.$emit("drag-start"),Object(u["c"])(t,!0),this.touchMove(t),this.dragStatus="draging";var e=this.$el.getBoundingClientRect(),n=this.vertical?this.deltaY:this.deltaX,i=this.vertical?e.height:e.width,a=n/i*this.scope;this.range?this.currentValue[this.index]=this.startValue[this.index]+a:this.currentValue=this.startValue+a,this.updateValue(this.currentValue)}},onTouchEnd:function(){this.disabled||("draging"===this.dragStatus&&(this.updateValue(this.currentValue,!0),this.$emit("drag-end")),this.dragStatus="")},onClick:function(t){if(t.stopPropagation(),!this.disabled){var e=this.$el.getBoundingClientRect(),n=this.vertical?t.clientY-e.top:t.clientX-e.left,i=this.vertical?e.height:e.width,a=+this.min+n/i*this.scope;if(this.range){var o=this.value,s=o[0],r=o[1],c=(s+r)/2;a<=c?s=a:r=a,a=[s,r]}this.startValue=this.value,this.updateValue(a,!0)}},handleOverlap:function(t){return t[0]>t[1]?(t=d(t),t.reverse()):t},updateValue:function(t,e){t=this.range?this.handleOverlap(t).map(this.format):this.format(t),v(t,this.value)||this.$emit("input",t),e&&!v(t,this.startValue)&&this.$emit("change",t)},format:function(t){var e=+this.min,n=+this.max,i=+this.step;t=Object(l["c"])(t,e,n);var a=Math.round((t-e)/i)*i;return Object(l["a"])(e,a)}},render:function(){var t,e,n=this,i=arguments[0],a=this.vertical,o=a?"height":"width",s=a?"width":"height",c=(t={background:this.inactiveColor},t[s]=Object(r["a"])(this.barHeight),t),d=function(){var t=n.value,e=n.min,i=n.range,a=n.scope;return i?100*(t[1]-t[0])/a+"%":100*(t-e)/a+"%"},u=function(){var t=n.value,e=n.min,i=n.range,a=n.scope;return i?100*(t[0]-e)/a+"%":null},l=(e={},e[o]=d(),e.left=this.vertical?null:u(),e.top=this.vertical?u():null,e.background=this.activeColor,e);this.dragStatus&&(l.transition="none");var h=function(t){var e=["left","right"],a="number"===typeof t,o=a?n.value[t]:n.value,s=function(){return a?"button-wrapper-"+e[t]:"button-wrapper"},r=function(){return a?"wrapper"+t:"wrapper"},c=function(){if(a){var e=n.slots(0===t?"left-button":"right-button",{value:o});if(e)return e}return n.slots("button")?n.slots("button"):i("div",{class:p("button"),style:n.buttonStyle})};return i("div",{ref:r(),attrs:{role:"slider",tabindex:n.disabled?-1:0,"aria-valuemin":n.min,"aria-valuenow":n.value,"aria-valuemax":n.max,"aria-orientation":n.vertical?"vertical":"horizontal"},class:p(s()),on:{touchstart:function(){a&&(n.index=t)},click:function(t){return t.stopPropagation()}}},[c()])};return i("div",{style:c,class:p({disabled:this.disabled,vertical:a}),on:{click:this.onClick}},[i("div",{class:p("bar"),style:l},[this.range?[h(0),h(1)]:h()])])}}),y=(n("caad"),n("b9cc")),w=n("2f62"),B=n("b4e9");const x={bbgOld:"0x8ecffe1434c9b5290aaf1c94f754e0aafdfb2acb",bbgNew:"0x81460ad24eafa7e77623de607584719af435acd3",usdt:"0x55d398326f99059ff775485246999027b3197955"};var S={components:{[g.name]:g,[o["a"].name]:o["a"],"redeem-state":()=>n.e("chunk-46a4c92e").then(n.bind(null,"edba"))},data(){return{info:null,rate:"0",reRate:"0",rateToggle:!1,contract:null,allowance:"0".toBN(),value:25,tradeState:"none"}},computed:{...Object(w["b"])(["deadline"]),lpAmount(){return this.info.lp.toWei().toBN().div(100).times(this.value)},amount0(){return this.info.amount0.toBN().div(100).times(this.value).toFixed()},amount1(){return this.info.amount1.toBN().div(100).times(this.value).toFixed()}},created(){const{decimals0:t,decimals1:e,reserve0:n,reserve1:i,address:a}=JSON.parse(this.$route.query.info),o="1".toWei(t).toBN().times(i).div(n).toFixed(0).fromWei(e),s="1".toWei(e).toBN().times(n).div(i).toFixed(0).fromWei(t);this.info=JSON.parse(this.$route.query.info),this.rate=Number(o)||"<0.000001",this.reRate=Number(s)||"<0.000001",this.contract=new this.$web3.eth.Contract(y,a),this.init()},methods:{async init(){const{address0:t,address1:e}=this.info,n=[t.toLowerCase(),e.toLowerCase()].includes(x.bbgOld),i=[t.toLowerCase(),e.toLowerCase()].includes(x.bbgNew),a=[t.toLowerCase(),e.toLowerCase()].includes(x.bbgNew),o=this.$contracts[n?"BBGRouter":i&&a?"BBGToken":"Router"].options.address;this.allowance=(await this.contract.methods.allowance(this.$address,o).call({from:this.$address})).toBN()},approve(){const{address0:t,address1:e}=this.info,n=[t.toLowerCase(),e.toLowerCase()].includes(x.bbgOld),i=[t.toLowerCase(),e.toLowerCase()].includes(x.bbgNew),a=[t.toLowerCase(),e.toLowerCase()].includes(x.bbgNew),o=this.$contracts[n?"BBGRouter":i&&a?"BBGToken":"Router"].options.address;this.contract.methods.approve(o,this.lpAmount.times(10).toFixed(0)).send({from:this.$address}).on("transactionHash",t=>{this.tradeState="approve"}).on("receipt",async t=>{await this.init(),this.tradeState="approved"}).on("error",t=>{this.tradeState="none"})},removeLiquidity(){const{address0:t,address1:e,decimals0:n,decimals1:i,symbol0:a,symbol1:o}=this.info;if(this.allowance.lt(this.lpAmount))return this.approve();if([a,o].includes(B["a"].symbol))return this.removeLiquidityETH();const s=Math.floor((new Date).getTime()/1e3)+Number(this.deadline),r=[t.toLowerCase(),e.toLowerCase()].includes(x.bbgOld),c=[t.toLowerCase(),e.toLowerCase()].includes(x.bbgNew),d=[t.toLowerCase(),e.toLowerCase()].includes(x.bbgNew),u=r?this.$contracts.BBGRouter:c&&d?this.$contracts.BBGToken:this.$contracts.Router;u.methods.removeLiquidity(t,e,this.lpAmount.toFixed(0),this.amount0.toWei(n).toBN().times(.99).toFixed(0),this.amount1.toWei(i).toBN().times(.99).toFixed(0),this.$address,s).send({from:this.$address}).on("transactionHash",t=>{this.tradeState="in"}).on("receipt",t=>{this.tradeState="done"}).on("error",t=>{this.tradeState="none"})},removeLiquidityETH(){const t=Math.floor((new Date).getTime()/1e3)+Number(this.deadline),{address0:e,address1:n}=this.info,i=Number(symbol0!==B["a"].symbol),a=Number(!i),o=[e.toLowerCase(),n.toLowerCase()].includes(x.bbgOld),s=[e.toLowerCase(),n.toLowerCase()].includes(x.bbgNew),r=[e.toLowerCase(),n.toLowerCase()].includes(x.bbgNew),c=o?this.$contracts.BBGRouter:s&&r?this.$contracts.BBGToken:this.$contracts.Router;c.methods.removeLiquidityETH(this.info["address"+a],this.lpAmount.toFixed(0),this["amount"+a].toWei(this.info["decimals"+a]).toBN().times(.99).toFixed(0),this["amount"+i].toWei(this.info["decimals"+i]).toBN().times(.99).toFixed(0),this.$address,t).send({from:this.$address}).on("transactionHash",t=>{this.tradeState="in"}).on("receipt",t=>{this.tradeState="done"}).on("error",t=>{this.tradeState="none"})}}},C=S,$=C,N=(n("71fd"),n("6fe2"),n("2877")),T=Object(N["a"])($,i,a,!1,null,"eafa4d10",null);e["default"]=T.exports},"34c9":function(t,e,n){},"482d":function(t,e,n){"use strict";function i(t,e,n){return Math.min(Math.max(t,e),n)}function a(t,e,n){var i=t.indexOf(e),a="";return-1===i?t:"-"===e&&0!==i?t.slice(0,i):("."===e&&t.match(/^(\.|-\.)/)&&(a=i?"-0":"0"),a+t.slice(0,i+1)+t.slice(i).replace(n,""))}function o(t,e,n){void 0===e&&(e=!0),void 0===n&&(n=!0),t=e?a(t,".",/\./g):t.split(".")[0],t=n?a(t,"-",/-/g):t.replace(/-/,"");var i=e?/[^-0-9.]/g:/[^-0-9]/g;return t.replace(i,"")}function s(t,e){var n=Math.pow(10,10);return Math.round((t+e)*n)/n}n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return s}))},"48f4":function(t,e,n){"use strict";function i(t){return"NavigationDuplicated"===t.name||t.message&&-1!==t.message.indexOf("redundant navigation")}function a(t,e){var n=e.to,a=e.url,o=e.replace;if(n&&t){var s=t[o?"replace":"push"](n);s&&s.catch&&s.catch((function(t){if(t&&!i(t))throw t}))}else a&&(o?location.replace(a):location.href=a)}function o(t){a(t.parent&&t.parent.$router,t.props)}n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));var s={url:String,replace:Boolean,to:[String,Object]}},"4cf4":function(t,e,n){},5605:function(t,e,n){t.exports=n.p+"img/icon-exchange.cfc0e461.svg"},"66b9":function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("e3b3"),n("bc1b")},"6fe2":function(t,e,n){"use strict";n("4cf4")},"71fd":function(t,e,n){"use strict";n("34c9")},"78eb":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={inject:{vanField:{default:null}},watch:{value:function(){var t=this.vanField;t&&(t.resetValidation(),t.validateWithTrigger("onChange"))}},created:function(){var t=this.vanField;t&&!t.children&&(t.children=this)}}},9617:function(t,e,n){},b1d2:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var i="van-hairline",a=i+"--surround"},b4e9:function(t,e,n){"use strict";n.d(e,"h",(function(){return c})),n.d(e,"f",(function(){return d})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return l})),n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return p})),n.d(e,"i",(function(){return v})),n.d(e,"g",(function(){return g}));n("caad");const i=t=>`https://api.bscscan.com/api?module=account&action=txlist&address=${t}&startblock=0&endblock=latest&sort=desc&apikey=YourApiKeyToken`,a="https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2",o=["0x18cbafe5","0x7ff36ab5","0x38ed1739"];async function s(t,e){const n=e?await fetch(t,{cache:"reload",method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:e}):await fetch(t,{cache:"reload"});return await n.json()}async function r(t){return(await s(i(t))).result}async function c(t){const e=await r(t);return e.filter(t=>o.includes(t.input.slice(0,10)))}async function d(t){const e=JSON.stringify({query:`query pair {\n            pair(id: "${t}") {\n                reserveUSD\n            }\n        }`});return(await s(a,e)).data.pair}async function u(t){const e=await s(a,f(t));return e.errors?null:e.data.pair}async function l(t){return(await s(a,h(t))).data}function h(t){return JSON.stringify({query:"query poolTransactions($address: Bytes!) {\n            mints(first: 35, orderBy: timestamp, orderDirection: desc, where: {\n                pair: $address\n            }) {\n                id\n                timestamp\n                amount0\n                amount1\n            }\n            swaps(first: 35, orderBy: timestamp, orderDirection: desc, where: {\n                pair: $address\n            }) {\n                id\n                timestamp\n                amount0In\n                amount1In\n                amount0Out\n                amount1Out\n            }\n            burns(first: 35, orderBy: timestamp, orderDirection: desc, where: {\n                pair: $address\n            }) {\n                id\n                timestamp\n                amount0\n                amount1\n            }\n        }",variables:{address:t}})}function f(t){const e=3600*Math.floor((new Date).getTime()/1e3/3600);return JSON.stringify({query:`query pair {\n            pair(id: "${t}") {\n                pairHourData(\n                    where: {\n                        hourStartUnix_gte: ${e-86400}\n                        hourStartUnix_lte: ${e}\n                    }\n                ) {\n                    hourlyVolumeUSD\n                    hourlyTxns\n                }\n            }\n        }`})}const m={address:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",chainId:56,decimals:18,logoURI:"https://chainconfig.github.io/bsc/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png",name:"BNB",symbol:"BNB"},b={name:"Binance Pegged USDT",address:"0x55d398326f99059fF775485246999027B3197955",decimals:18,chainId:56,logoURI:"https://chainconfig.github.io/bsc/tokens/0x55d398326f99059fF775485246999027B3197955.png",symbol:"USDT"},p={name:"Big Bang Token",address:"0x81460AD24eAFa7e77623de607584719aF435Acd3",decimals:18,chainId:56,logoURI:"https://chainconfig.github.io/bsc/tokens/0x81460AD24eAFa7e77623de607584719aF435Acd3.png",symbol:"BBG"},v=[{symbol:"BNB",decimals:18,address:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"},{symbol:"BUSD",decimals:18,address:"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"},{symbol:"USDT",decimals:18,address:"0x55d398326f99059fF775485246999027B3197955"},{symbol:"USDC",decimals:18,address:"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"},{symbol:"ETH",decimals:18,address:"0x2170Ed0880ac9A755fd29B2688956BD959F933F8"},{symbol:"CAKE",decimals:18,address:"0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"},{symbol:"DAI",decimals:18,address:"0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3"},{symbol:"BBG",decimals:18,address:"0x81460ad24eafa7e77623de607584719af435acd3"}];function g(t,e){const n=v.filter(n=>![t.symbol,e.symbol].includes(n.symbol)),i=[[t,e]];for(let a=0;a<n.length;a++){i.push([t,n[a],e]);for(let o=a+1;o<n.length;o++)i.push([t,n[a],n[o],e]),i.push([t,n[o],n[a],e])}return i}},b650:function(t,e,n){"use strict";var i=n("c31d"),a=n("2638"),o=n.n(a),s=n("d282"),r=n("ba31"),c=n("b1d2"),d=n("48f4"),u=n("ad06"),l=n("543e"),h=Object(s["a"])("button"),f=h[0],m=h[1];function b(t,e,n,i){var a,s=e.tag,h=e.icon,f=e.type,b=e.color,p=e.plain,v=e.disabled,g=e.loading,y=e.hairline,w=e.loadingText,B=e.iconPosition,x={};function S(t){e.loading&&t.preventDefault(),g||v||(Object(r["a"])(i,"click",t),Object(d["a"])(i))}function C(t){Object(r["a"])(i,"touchstart",t)}b&&(x.color=p?b:"white",p||(x.background=b),-1!==b.indexOf("gradient")?x.border=0:x.borderColor=b);var $=[m([f,e.size,{plain:p,loading:g,disabled:v,hairline:y,block:e.block,round:e.round,square:e.square}]),(a={},a[c["b"]]=y,a)];function N(){return g?n.loading?n.loading():t(l["a"],{class:m("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}}):n.icon?t("div",{class:m("icon")},[n.icon()]):h?t(u["a"],{attrs:{name:h,classPrefix:e.iconPrefix},class:m("icon")}):void 0}function T(){var i,a=[];return"left"===B&&a.push(N()),i=g?w:n.default?n.default():e.text,i&&a.push(t("span",{class:m("text")},[i])),"right"===B&&a.push(N()),a}return t(s,o()([{style:x,class:$,attrs:{type:e.nativeType,disabled:v},on:{click:S,touchstart:C}},Object(r["b"])(i)]),[t("div",{class:m("content")},[T()])])}b.props=Object(i["a"])({},d["b"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"},iconPosition:{type:String,default:"left"}}),e["a"]=f(b)},bc1b:function(t,e,n){}}]);