(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15df4390","chunk-2d0c0be3"],{"01da":function(t,s,e){t.exports=e.p+"img/miningBall.4efd2391.svg"},"097a":function(t,s,e){t.exports=e.p+"img/router.e489826a.svg"},1116:function(t,s,e){t.exports=e.p+"img/addLiquidity.ca7385a4.svg"},"16b3c":function(t,s,e){t.exports=e.p+"img/mining-info.0255d7fe.svg"},"16e0":function(t,s,e){t.exports=e.p+"img/invitationCard.397cced3.svg"},"1f2a":function(t,s,e){"use strict";e("28f5")},"21eb":function(t,s,e){t.exports=e.p+"img/takeAwardBg.d461a2d0.svg"},2764:function(t,s,e){t.exports=e.p+"img/success.b3bc2311.svg"},"28f5":function(t,s,e){},"2db2":function(t,s,e){t.exports=e.p+"img/bbglogo.0ebf23de.svg"},"2f0b":function(t,s,e){t.exports=e.p+"img/exchange.030b46fc.svg"},"31e8":function(t,s,e){var n={"./Bnb.svg":"9b7f","./QRcodelogo.svg":"507c","./activationlogo.svg":"489a","./add.svg":"eef4","./addLiquidity.svg":"1116","./apy-bg.svg":"5dc4","./arraw.svg":"1d4a","./award-bg.svg":"66a7","./bbglogo.svg":"2db2","./buy.svg":"f3f6","./copy.svg":"553b","./countdown.svg":"ceca","./downarrow.svg":"4995","./en.svg":"bc04","./exchange.svg":"2f0b","./icon-exchange.svg":"5605","./info.svg":"07e6","./invalid.svg":"9b42","./invitationCard.svg":"16e0","./invitationCardBg.svg":"813c","./invitelistAddress.svg":"8dd5","./ja.svg":"19ca","./ko.svg":"ed4a","./la.svg":"9696","./liquidity.svg":"6501","./logo.svg":"9b19","./menu.svg":"36be","./mining-info.svg":"16b3c","./miningBall.svg":"01da","./miningBottom.svg":"f9d4","./miningBubbleTop.svg":"da4c","./miningMenus.svg":"e46f","./my.svg":"ab65","./next-light.svg":"949e","./next.svg":"b2f3","./not-trade.svg":"c5f5","./note.svg":"6e4d","./overlayBg.svg":"b746","./pools.svg":"92c4","./prev-dark.svg":"e9c3","./prev.svg":"9336","./rate.svg":"ab45","./reload.svg":"b318","./remove.svg":"7e18","./round.svg":"86ef","./router.svg":"097a","./sell.svg":"46d3","./setting.svg":"cc6c","./success.svg":"2764","./superman.svg":"9d40","./swap.svg":"3fb0","./swapTo.svg":"8242","./switch-token.svg":"7a79","./takeAwardBg.svg":"21eb","./time.svg":"f490","./tokens-empty.svg":"42a0","./topBg.svg":"8a0c","./usdtlogo.svg":"870d","./valid.svg":"e530","./vi.svg":"2291","./wallet.svg":"bc38","./zh-hk.svg":"9115","./zh_hk.svg":"7671"};function o(t){var s=a(t);return e(s)}function a(t){if(!e.o(n,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=a,t.exports=o,o.id="31e8"},"42a0":function(t,s,e){t.exports=e.p+"img/tokens-empty.9bf14c1b.svg"},"46d3":function(t,s,e){t.exports=e.p+"img/sell.558b09b5.svg"},"489a":function(t,s,e){t.exports=e.p+"img/activationlogo.a4ed6da9.svg"},4995:function(t,s,e){t.exports=e.p+"img/downarrow.3dc9d2e1.svg"},"507c":function(t,s,e){t.exports=e.p+"img/QRcodelogo.fdf1ae12.svg"},"553b":function(t,s,e){t.exports=e.p+"img/copy.a4630235.svg"},5605:function(t,s,e){t.exports=e.p+"img/icon-exchange.cfc0e461.svg"},"5dc4":function(t,s,e){t.exports=e.p+"img/apy-bg.29d384e9.svg"},"66a7":function(t,s,e){t.exports=e.p+"img/award-bg.2b19480a.svg"},"6e4d":function(t,s,e){t.exports=e.p+"img/note.90fc27e8.svg"},"797b":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"info"},[s("div",{staticClass:"introduce"},[s("div",{staticClass:"header"},[s("div",{staticClass:"token"},[s("img",{attrs:{src:t.token1.logoURI}}),s("div",{staticClass:"token-info"},[s("div",{on:{click:t.openSearch}},[s("h2",[t._v(t._s(t.token1.symbol))]),s("img",{attrs:{src:e("1d4a")}})]),s("span",[t._v(t._s(t.token1.name))])])]),s("div",{staticClass:"address"},[s("span",{domProps:{textContent:t._s(`${t.token1.address.slice(0,5)}...${t.token1.address.slice(-5)}`)}}),s("img",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.token1.address,expression:"token1.address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copyDone,expression:"copyDone",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.copyError,expression:"copyError",arg:"error"}],attrs:{src:e("553b")}})])]),s("div",{staticClass:"liquidity"},[s("span",[t._v(t._s(t.$t("info.text1"))+" "),s("span",[t._v("$ "+t._s(t.reserveUSD))])]),s("div",{staticClass:"tokens"},[s("div",[s("div",{staticClass:"select",on:{click:function(s){t.showToken0Options=!0}}},[s("span",[t._v(t._s(t.token0.symbol))]),s("img",{attrs:{src:e("1d4a")}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showToken0Options,expression:"showToken0Options"}],staticClass:"options"},t._l(t.token0Options,(function(e){return s("span",{key:e.address,domProps:{textContent:t._s(e.symbol)},on:{click:function(s){return s.stopPropagation(),t.selectToken0(e)}}})})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showToken0Options,expression:"showToken0Options"}],staticClass:"overlay",on:{click:function(s){s.stopPropagation(),t.showToken0Options=!1}}})]),s("span",[t._v(t._s(t.reserve0))])]),s("div",[s("span",[t._v(t._s(t.token1.symbol))]),s("span",[t._v(t._s(t.reserve1))])])])])]),s("div",{staticClass:"datas"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isBBG,expression:"isBBG"}]},[s("span",[t._v(t._s(t.$t("info.text2")))]),s("span",[t._v(t._s(t.circulation))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isBBG,expression:"isBBG"}]},[s("span",[t._v(t._s(t.$t("info.text3")))]),s("span",[t._v(t._s(t.blackHoleAddress))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isBBG,expression:"isBBG"}]},[s("span",[t._v(t._s(t.$t("info.text4")))]),s("span",[t._v(t._s(t.miningPool))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isBBG,expression:"isBBG"}]},[s("span",[t._v(t._s(t.$t("info.text5")))]),s("span",[t._v(t._s(t.rewardsToday))])]),s("div",[s("span",[t._v(t._s(t.$t("info.text6")))]),s("span",[t._v(t._s(t.transactions))])]),s("div",[s("span",[t._v(t._s(t.$t("info.text7")))]),s("span",[t._v("$ "+t._s(t.volume))])])]),s("div",{staticClass:"latest-transactions"},[s("div",{staticClass:"header"},[s("span",[t._v(t._s(t.$t("info.text8")))]),s("div",{staticClass:"filter",on:{click:function(s){t.showOptions=!0}}},[s("img",{attrs:{src:e("1d4a")}}),s("span",[t._v(t._s(t.$t("info.text9")))]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showOptions,expression:"showOptions"}],staticClass:"options"},[s("span",{on:{click:function(s){return s.stopPropagation(),t.selectType("all")}}},[t._v(t._s(t.$t("info.text14")))]),s("span",{on:{click:function(s){return s.stopPropagation(),t.selectType("sell")}}},[t._v(t._s(t.$t("info.text11")))]),s("span",{on:{click:function(s){return s.stopPropagation(),t.selectType("buy")}}},[t._v(t._s(t.$t("info.text10")))]),s("span",{on:{click:function(s){return s.stopPropagation(),t.selectType("add")}}},[t._v(t._s(t.$t("info.text12")))]),s("span",{on:{click:function(s){return s.stopPropagation(),t.selectType("remove")}}},[t._v(t._s(t.$t("info.text13")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showOptions,expression:"showOptions"}],staticClass:"overlay",on:{click:function(s){s.stopPropagation(),t.showOptions=!1}}})]),s("img",{class:t.reloadClass,attrs:{src:e("b318")},on:{click:t.reload}})]),s("div",{staticClass:"transactions"},t._l(t.transactionsList[t.currentPage],(function(n,o){return s("div",{key:o},[s("div",[s("span",{directives:[{name:"show",rawName:"v-show",value:"buy"===n.type,expression:"item.type === 'buy'"}],class:n.type},[t._v(t._s(t.$t("info.text10")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:"sell"===n.type,expression:"item.type === 'sell'"}],class:n.type},[t._v(t._s(t.$t("info.text11")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:"add"===n.type,expression:"item.type === 'add'"}],class:n.type},[t._v(t._s(t.$t("info.text12")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:"remove"===n.type,expression:"item.type === 'remove'"}],class:n.type},[t._v(t._s(t.$t("info.text13")))]),s("span",[t._v(t._s(n.amount0.toFixed(4))+" "+t._s(t.token1.symbol))])]),s("img",{class:n.type,attrs:{src:e("31e8")(`./${n.type}.svg`)}}),s("div",[s("span",[t._v(t._s(n.time))]),s("span",[t._v(t._s(n.amount1.toFixed(4))+" "+t._s(t.token0.symbol))])])])})),0),s("div",{staticClass:"pagination"},[s("img",{attrs:{src:e("e9c3")},on:{click:t.prevPage}}),s("span",[t._v(t._s(t.currentPage+1)+"/"+t._s(t.totalPage))]),s("img",{attrs:{src:e("949e")},on:{click:t.nextPage}})])]),s("search-tokens",{ref:"searchTokens",on:{select:t.selectToken1}})],1)},o=[],a=(e("e7e5"),e("d399")),i=(e("caad"),e("b9cc")),r=e("b4e9"),c={components:{"search-tokens":()=>Promise.all([e.e("chunk-12484184"),e.e("chunk-2d0c2308")]).then(e.bind(null,"bab4"))},data(){return{reloadClass:"",token0:r["a"],token1:r["b"],reserve0:0,reserve1:0,reserveUSD:0,transactions:0,volume:0,type:"all",tradeList:[],currentPage:0,pairAddress:null,flag:!0,showOptions:!1,token0Options:r["i"],showToken0Options:!1,circulation:0,blackHoleAddress:0,miningPool:0,rewardsToday:0}},computed:{transactionsList(){const t="all"===this.type?this.tradeList:this.tradeList.filter(t=>t.type===this.type),s=[];for(let e=0;e<t.length;e+=10)s.push(t.slice(e,e+10));return s},totalPage(){return this.transactionsList.length},isBBG(){return this.token1.address.toLowerCase()===this.$contracts.BBGToken.options.address.toLowerCase()}},created(){this.$contracts&&this.init()},methods:{copyDone(){a["a"].success("复制成功！")},copyError(t){console.log(t),a["a"].fail("复制失败！")},selectType(t){this.type=t,this.showOptions=!1},openSearch(){this.$refs.searchTokens.open()},selectToken0(t){if(this.showToken0Options=!1,t.symbol===this.token1.symbol)return!1;this.token0=t,this.init()},selectToken1(t){if(t.symbol===this.token0.symbol)return!1;this.token1=t;const s=[];for(let e=0;e<r["i"].length;e++)s.push([this.$contracts.Factory.options.address,this.$contracts.Factory.methods.getPair(r["i"][e].address,t.address).encodeABI()]);this.$contracts.Multicall.methods.aggregate(s).call({from:this.$address},(t,s)=>{if(!t){const t=[],e=[];for(let n=0;n<s.returnData.length;n++){if(s.returnData[n].toBN().lte(0))continue;const o=new this.$web3.eth.Contract(i,s.returnData[n].decode(["address"]));t.push(r["i"][n]),e.push([o.options.address,o.methods.totalSupply().encodeABI()])}this.$contracts.Multicall.methods.aggregate(e).call({from:this.$address},(s,e)=>{if(!s){let s,n="0".toBN();for(let o=0;o<e.returnData.length;o++)n.lt(e.returnData[o])&&(n=e.returnData[o].toBN(),s=t[o]);s.symbol!==this.token0.symbol?this.selectToken0(s):this.init()}})}})},reload(){this.reloadClass="reload",this.getTransactions(this.pairAddress,this.flag);const t=setTimeout(()=>{this.type="all",this.currentPage=0,this.reloadClass="",clearTimeout(t)},1e3)},prevPage(){if(0===this.currentPage)return!1;this.currentPage--},nextPage(){if(this.currentPage+1===this.totalPage)return!1;this.currentPage++},init(){if(this.tradeList=[],this.$contracts.Factory.methods.getPair(this.token0.address,this.token1.address).call({from:this.$address},(t,s)=>{if(!t){if(0===Number(s))return!1;this.flag=this.token0.address.toLowerCase().toBN().lt(this.token1.address.toLowerCase()),this.pairAddress=s.toLowerCase(),this.reserveUSD="loading...",this.transactions="loading...",this.volume="loading...",Object(r["f"])(this.pairAddress).then(t=>{t&&(this.reserveUSD=t.reserveUSD.toFixed(0))}),Object(r["d"])(this.pairAddress).then(t=>{if(t){let s="0".toBN(),e="0".toBN();t.pairHourData.forEach(t=>{s=s.plus(t.hourlyTxns),e=e.plus(t.hourlyVolumeUSD)}),this.transactions=s.toFixed(),this.volume=e.toFixed().toFixed(0)}});const t=new this.$web3.BatchRequest,e=new this.$web3.eth.Contract(i,this.token0.address),n=new this.$web3.eth.Contract(i,this.token1.address);t.add(e.methods.balanceOf(this.pairAddress).call.request({from:this.$address})),t.add(n.methods.balanceOf(this.pairAddress).call.request({from:this.$address})),t.requestManager.sendBatch(t.requests,(t,s)=>{t||(this.reserve0=("string"===typeof s[0]?s[0]:s[0].result).decode(["uint256"]).fromWei(this.token0.decimals).toFixed(0),this.reserve1=s[1].result.decode(["uint256"]).fromWei(this.token1.decimals).toFixed(0))}),this.getTransactions(this.pairAddress,this.flag)}}),this.isBBG){const t=new this.$web3.BatchRequest;t.add(this.$contracts.BBGToken.methods.totalSupply().call.request({from:this.$address})),t.add(this.$contracts.BBGToken.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call.request({from:this.$address})),t.add(this.$contracts.BBGToken.methods.balanceOf(this.$contracts.TokenBiggings.options.address).call.request({from:this.$address})),t.add(this.$contracts.TokenBiggings.methods.getTodayOutPut().call.request({from:this.$address})),t.requestManager.sendBatch(t.requests,(t,s)=>{if(!t){const t=("string"===typeof s[0]?s[0]:s[0].result).toBN();this.circulation=t.minus(s[1].result).minus(s[2].result).toFixed().fromWei().toFixed(2),this.blackHoleAddress=s[1].result.fromWei().toFixed(2),this.miningPool=s[2].result.fromWei().toFixed(2),this.rewardsToday=s[3].result.fromWei().toFixed(0)}})}},formatData(t){const s=Math.floor(new Date/1e3)-Number(t);return s<60?s+"秒前":Math.floor(s/60)<60?Math.floor(s/60)+"分钟前":Math.floor(s/3600)<24?Math.floor(s/3600)+"小时前":Math.floor(s/3600/24)+"天前"},async getTransactions(t,s){const{burns:e,mints:n,swaps:o}=await Object(r["e"])(t),a=[];function i(t){return!t.includes(".")&&t.length>=10?t.fromWei():t}e.forEach(t=>{a.push({type:"remove",amount0:i(t["amount"+Number(s)]),amount1:i(t["amount"+Number(!s)]),timestamp:Number(t.timestamp),hash:t.id.split("-")[0],time:this.formatData(t.timestamp)})}),n.forEach(t=>{a.push({type:"add",amount0:i(t["amount"+Number(s)]),amount1:i(t["amount"+Number(!s)]),timestamp:Number(t.timestamp),hash:t.id.split("-")[0],time:this.formatData(t.timestamp)})}),s?o.forEach(t=>{t.amount0In>0?a.push({type:"buy",amount0:i(t.amount1Out),amount1:i(t.amount0In),timestamp:Number(t.timestamp),hash:t.id.split("-")[0],time:this.formatData(t.timestamp)}):a.push({type:"sell",amount0:i(t.amount1In),amount1:i(t.amount0Out),timestamp:Number(t.timestamp),hash:t.id.split("-")[0],time:this.formatData(t.timestamp)})}):o.forEach(t=>{t.amount1In>0?a.push({type:"buy",amount0:i(t.amount0Out),amount1:i(t.amount1In),timestamp:Number(t.timestamp),hash:t.id.split("-")[0],time:this.formatData(t.timestamp)}):a.push({type:"sell",amount0:i(t.amount0In),amount1:i(t.amount1Out),timestamp:Number(t.timestamp),hash:t.id.split("-")[0],time:this.formatData(t.timestamp)})}),this.tradeList=a.sort((t,s)=>s.timestamp-t.timestamp)}}},d=c,p=d,u=(e("1f2a"),e("2877")),l=Object(u["a"])(p,n,o,!1,null,"273abbb5",null);s["default"]=l.exports},"7a79":function(t,s,e){t.exports=e.p+"img/switch-token.19d35b4c.svg"},"7e18":function(t,s,e){t.exports=e.p+"img/remove.65da57dd.svg"},"813c":function(t,s,e){t.exports=e.p+"img/invitationCardBg.8a3b974b.svg"},8242:function(t,s,e){t.exports=e.p+"img/swapTo.1f92de35.svg"},"86ef":function(t,s,e){t.exports=e.p+"img/round.f457c6f9.svg"},"870d":function(t,s,e){t.exports=e.p+"img/usdtlogo.bb5274f9.svg"},"8a0c":function(t,s,e){t.exports=e.p+"img/topBg.f5b537f7.svg"},"8dd5":function(t,s,e){t.exports=e.p+"img/invitelistAddress.7e9b5f0c.svg"},9115:function(t,s,e){t.exports=e.p+"img/zh-hk.81f85ea1.svg"},9336:function(t,s,e){t.exports=e.p+"img/prev.02eca9ef.svg"},"949e":function(t,s,e){t.exports=e.p+"img/next-light.d7551722.svg"},"9b42":function(t,s,e){t.exports=e.p+"img/invalid.780e7e17.svg"},"9d40":function(t,s,e){t.exports=e.p+"img/superman.7c6740db.svg"},ab45:function(t,s,e){t.exports=e.p+"img/rate.d3f91f92.svg"},b2f3:function(t,s,e){t.exports=e.p+"img/next.444b2b15.svg"},b318:function(t,s,e){t.exports=e.p+"img/reload.7b00303a.svg"},b4e9:function(t,s,e){"use strict";e.d(s,"h",(function(){return c})),e.d(s,"f",(function(){return d})),e.d(s,"d",(function(){return p})),e.d(s,"e",(function(){return u})),e.d(s,"a",(function(){return g})),e.d(s,"b",(function(){return v})),e.d(s,"c",(function(){return f})),e.d(s,"i",(function(){return h})),e.d(s,"g",(function(){return b}));e("caad");const n=t=>`https://api.bscscan.com/api?module=account&action=txlist&address=${t}&startblock=0&endblock=latest&sort=desc&apikey=YourApiKeyToken`,o="https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2",a=["0x18cbafe5","0x7ff36ab5","0x38ed1739"];async function i(t,s){const e=s?await fetch(t,{cache:"reload",method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:s}):await fetch(t,{cache:"reload"});return await e.json()}async function r(t){return(await i(n(t))).result}async function c(t){const s=await r(t);return s.filter(t=>a.includes(t.input.slice(0,10)))}async function d(t){const s=JSON.stringify({query:`query pair {\n            pair(id: "${t}") {\n                reserveUSD\n            }\n        }`});return(await i(o,s)).data.pair}async function p(t){const s=await i(o,m(t));return s.errors?null:s.data.pair}async function u(t){return(await i(o,l(t))).data}function l(t){return JSON.stringify({query:"query poolTransactions($address: Bytes!) {\n            mints(first: 35, orderBy: timestamp, orderDirection: desc, where: {\n                pair: $address\n            }) {\n                id\n                timestamp\n                amount0\n                amount1\n            }\n            swaps(first: 35, orderBy: timestamp, orderDirection: desc, where: {\n                pair: $address\n            }) {\n                id\n                timestamp\n                amount0In\n                amount1In\n                amount0Out\n                amount1Out\n            }\n            burns(first: 35, orderBy: timestamp, orderDirection: desc, where: {\n                pair: $address\n            }) {\n                id\n                timestamp\n                amount0\n                amount1\n            }\n        }",variables:{address:t}})}function m(t){const s=3600*Math.floor((new Date).getTime()/1e3/3600);return JSON.stringify({query:`query pair {\n            pair(id: "${t}") {\n                pairHourData(\n                    where: {\n                        hourStartUnix_gte: ${s-86400}\n                        hourStartUnix_lte: ${s}\n                    }\n                ) {\n                    hourlyVolumeUSD\n                    hourlyTxns\n                }\n            }\n        }`})}const g={address:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",chainId:56,decimals:18,logoURI:"https://chainconfig.github.io/bsc/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png",name:"BNB",symbol:"BNB"},v={name:"Binance Pegged USDT",address:"0x55d398326f99059fF775485246999027B3197955",decimals:18,chainId:56,logoURI:"https://chainconfig.github.io/bsc/tokens/0x55d398326f99059fF775485246999027B3197955.png",symbol:"USDT"},f={name:"Big Bang Token",address:"0x81460AD24eAFa7e77623de607584719aF435Acd3",decimals:18,chainId:56,logoURI:"https://chainconfig.github.io/bsc/tokens/0x81460AD24eAFa7e77623de607584719aF435Acd3.png",symbol:"BBG"},h=[{symbol:"BNB",decimals:18,address:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"},{symbol:"BUSD",decimals:18,address:"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"},{symbol:"USDT",decimals:18,address:"0x55d398326f99059fF775485246999027B3197955"},{symbol:"USDC",decimals:18,address:"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"},{symbol:"ETH",decimals:18,address:"0x2170Ed0880ac9A755fd29B2688956BD959F933F8"},{symbol:"CAKE",decimals:18,address:"0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"},{symbol:"DAI",decimals:18,address:"0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3"},{symbol:"BBG",decimals:18,address:"0x81460ad24eafa7e77623de607584719af435acd3"}];function b(t,s){const e=h.filter(e=>![t.symbol,s.symbol].includes(e.symbol)),n=[[t,s]];for(let o=0;o<e.length;o++){n.push([t,e[o],s]);for(let a=o+1;a<e.length;a++)n.push([t,e[o],e[a],s]),n.push([t,e[a],e[o],s])}return n}},b746:function(t,s,e){t.exports=e.p+"img/overlayBg.67546935.svg"},bc38:function(t,s,e){t.exports=e.p+"img/wallet.da5c6071.svg"},c5f5:function(t,s,e){t.exports=e.p+"img/not-trade.42aa2a3c.svg"},ceca:function(t,s,e){t.exports=e.p+"img/countdown.3c671008.svg"},da4c:function(t,s,e){t.exports=e.p+"img/miningBubbleTop.a333b9eb.svg"},e46f:function(t,s,e){t.exports=e.p+"img/miningMenus.b44774a2.svg"},e530:function(t,s,e){t.exports=e.p+"img/valid.b0b9f38f.svg"},e9c3:function(t,s,e){t.exports=e.p+"img/prev-dark.d356c407.svg"},eef4:function(t,s,e){t.exports=e.p+"img/add.5ea1c9f6.svg"},f3f6:function(t,s,e){t.exports=e.p+"img/buy.eda5a5bf.svg"},f490:function(t,s,e){t.exports=e.p+"img/time.e08ffb60.svg"},f9d4:function(t,s,e){t.exports=e.p+"img/miningBottom.2527cb40.svg"}}]);