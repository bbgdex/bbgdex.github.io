(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7299bc42"],{"0b95":function(e,t,n){"use strict";n("ceb6")},"5eba":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mining-container"},[n("span",[e._v(e._s(e.$t("pledgeMining.text1")))]),n("div",{staticClass:"pledge-mining"},[n("div",{staticClass:"pledge-lp"},[n("h2",[e._v(e._s(e.$t("pledgeMining.text2")))]),n("span",[e._v(e._s(e.$t("pledgeMining.text3")))]),n("div",{staticClass:"apy"},[n("span",[e._v("apy")]),n("span",[e._v(e._s(e.apy)+"%")])])]),n("div",{staticClass:"tags"},[n("span",{class:"pledge"===e.showPopup?"active":"",on:{click:function(t){return e.$store.commit("showPopup","pledge")}}},[e._v(e._s(e.$t("pledgeMining.text4")))]),n("span",{class:"redeem"===e.showPopup?"active":"",on:{click:function(t){return e.$store.commit("showPopup","redeem")}}},[e._v(e._s(e.$t("pledgeMining.text5")))])]),n("participate-pledge",{directives:[{name:"show",rawName:"v-show",value:"pledge"===e.showPopup,expression:"showPopup === 'pledge'"}],ref:"ParticipatePledge",on:{reload:function(t){return e.$emit("reload")}}}),n("redeem-pledge",{directives:[{name:"show",rawName:"v-show",value:"redeem"===e.showPopup,expression:"showPopup === 'redeem'"}],attrs:{pledgeLp:e.pledgeLp},on:{reload:e.reload}})],1)])},s=[],r=(n("a9e3"),n("b680"),n("d3b7"),n("96cf"),n("1da1")),i=n("5530"),o=n("2f62"),c=n("598d"),d={props:{pledgeLp:[Number,String]},components:{"participate-pledge":function(){return n.e("chunk-7af66389").then(n.bind(null,"cc0f"))},"redeem-pledge":function(){return n.e("chunk-0a702188").then(n.bind(null,"949c"))}},data:function(){return{apy:0}},computed:Object(i["a"])({},Object(o["b"])(["showPopup"])),created:function(){this.$contracts&&this.init()},methods:{reload:function(){this.$emit("reload"),this.$refs.ParticipatePledge.init()},init:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=Math.floor(new Date/1e3),e.$contracts.TokenBiggings.methods.getNode(n).call({from:e.$address},(function(t,n){if(!t){var a=new e.$web3.BatchRequest;a.add(e.$contracts.TokenBiggings.methods.nodeInfos(n).call.request({from:e.$address})),a.add(e.$contracts.TokenBiggings.methods.pools(0).call.request({from:e.$address})),a.add(e.$contracts.TokenBiggings.methods.totalAllocPoint().call.request({from:e.$address})),a.add(e.$contracts.USDTToken.methods.balanceOf(e.$contracts.Pair._address).call.request({from:e.$address})),a.requestManager.sendBatch(a.requests,(function(t,n){if(!t){var a=(n[0].result||n[0]).decode([{name:"startTime",type:"uint256"},{name:"startReward",type:"uint256"},{name:"endTime",type:"uint256"},{name:"totalReward",type:"uint256"}]),s=a.totalReward,r=n[1].result.decode([{name:"token",type:"address"},{name:"allocPoint",type:"uint256"},{name:"lastTime",type:"uint256"},{name:"totalSupply",type:"uint256"},{name:"accTokenPerShare",type:"uint256"}]),i=r.allocPoint,o=r.totalSupply,c=n[2].result.decode(["uint256"]),d=n[3].result.decode(["uint256"]).toBN().times(2),u=d.div(o).toFixed().toWei().toFixed(0);e.BBGturnUSDT(1).then((function(t){e.apy=s.toBN().times(t).times(i).div(o.toBN().times(u).times(c)).div(100).toFixed().toFixed(2)}))}}))}}));case 2:case"end":return t.stop()}}),t)})))()},BBGturnUSDT:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,s,r,i,o,d,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a="0xA8E06a0c42ef12d1d07b9Db1E64586d20737ebab",s=new t.$web3.eth.Contract(c,a),r="0x55d398326f99059fF775485246999027B3197955",i="0x8ecFfe1434C9B5290Aaf1C94F754E0aAfdfB2acb",o=[i,r],n.next=7,s.methods.getAmountsOut(e.toWei(),o).call();case 7:return d=n.sent,u=o.length-1,n.abrupt("return",d[u]);case 10:case"end":return n.stop()}}),n)})))()}}},u=d,p=u,l=(n("0b95"),n("2877")),m=Object(l["a"])(p,a,s,!1,null,"c8a18c8a",null);t["default"]=m.exports},ceb6:function(e,t,n){}}]);