(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-288d382e"],{"0a87":function(n,o,t){},"244d":function(n,o,t){"use strict";t("0a87")},"282a":function(n,o,t){"use strict";t.r(o);var s,i=function(){var n=this,o=n.$createElement,s=n._self._c||o;return n.confirmInfo?s("van-popup",{attrs:{position:"bottom"},model:{value:n.show,callback:function(o){n.show=o},expression:"show"}},[s("div",{staticClass:"header"},[s("h2",[n._v(n._s(n.$t("tradingConfirm.text1")))]),s("van-icon",{attrs:{name:"cross"},on:{click:function(o){n.show=!1}}})],1),s("div",{staticClass:"tokens"},[s("div",[s("div",[s("img",{attrs:{src:n.confirmInfo.token0.logoURI}}),s("span",[n._v(n._s(n.confirmInfo.amount0))])]),s("span",[n._v(n._s(n.confirmInfo.token0.symbol))])]),s("img",{attrs:{src:t("7a79")}}),s("div",[s("div",[s("img",{attrs:{src:n.confirmInfo.token1.logoURI}}),s("span",[n._v(n._s(n.confirmInfo.amount1.toFixed(6)))])]),s("span",[n._v(n._s(n.confirmInfo.token1.symbol))])]),s("span",[n._v(n._s(n.$t("tradingConfirm.text2",{amount:n.confirmInfo.amountOutMin.toFixed(6),symbol:n.confirmInfo.token1.symbol})))])]),s("div",{staticClass:"info"},[s("div",[s("span",[n._v(n._s(n.$t("tradingConfirm.text3")))]),s("span",[n._v(n._s(n.confirmInfo.price)+" "+n._s(n.confirmInfo.token1.symbol)+"/"+n._s(n.confirmInfo.token0.symbol))])]),s("div",[s("span",[n._v(n._s(n.$t("tradingConfirm.text4")))]),s("span",[n._v(n._s(n.confirmInfo.amountOutMin.toFixed(4))+" "+n._s(n.confirmInfo.token1.symbol))])]),s("div",[s("span",[n._v(n._s(n.$t("tradingConfirm.text5")))]),s("span",[n._v("<0.01%")])]),s("div",[s("span",[n._v(n._s(n.$t("tradingConfirm.text6")))]),s("span",[n._v(n._s(n.confirmInfo.gasPrice))])]),s("van-button",{on:{click:n.confirm}},[n._v(n._s(n.$t("tradingConfirm.text7")))])],1)]):n._e()},a=[],c=(t("b0c0"),t("ade3")),e=(t("66b9"),t("b650")),r=(t("c3a6"),t("ad06")),f=(t("8a58"),t("e41f")),m={components:(s={},Object(c["a"])(s,f["a"].name,f["a"]),Object(c["a"])(s,r["a"].name,r["a"]),Object(c["a"])(s,e["a"].name,e["a"]),s),props:["confirmInfo"],data:function(){return{show:!1}},methods:{open:function(){this.show=!0},confirm:function(){this.show=!1,this.$emit("swap")}}},d=m,_=d,v=(t("244d"),t("2877")),p=Object(v["a"])(_,i,a,!1,null,"4d1898f3",null);o["default"]=p.exports},c3a6:function(n,o,t){"use strict";t("68ef"),t("9d70"),t("3743")}}]);