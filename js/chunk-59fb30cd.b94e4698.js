(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59fb30cd"],{"13c9":function(t,a,i){"use strict";i("cf78")},5332:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t._self._c;t._self._setupProxy;return a("van-overlay",{attrs:{show:"award"===t.showPopup},on:{click:function(a){return t.$store.commit("showPopup","none")}}},[a("div",{staticClass:"mining-award",on:{click:function(t){t.stopPropagation()}}},[a("span",{staticClass:"title"},[t._v(t._s(t.$t("miningAward.text2")))]),a("div",{staticClass:"total-award"},[a("i"),a("i"),a("i"),a("i"),a("i"),a("i"),a("span",{staticClass:"amount"},[t._v(t._s(t.totalAward.toFixed(2)))])]),a("div",{staticClass:"award-item"},[a("div",[a("span",[t._v(t._s(t.$t("miningAward.text4")))]),a("span",[t._v(t._s(t.powerAward.toFixed(2))+" BBG")])]),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.takingPower,expression:"!takingPower"}],attrs:{disabled:t.powerAward<=0},on:{click:t.takeRewardPower}},[t._v(t._s(t.$t("miningAward.text7")))]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.takingPower,expression:"takingPower"}],staticClass:"taking"},[a("van-loading",{attrs:{size:"14"}}),a("span",[t._v(t._s(t.$t("miningAward.text8")))])],1)]),a("div",{staticClass:"award-item"},[a("div",[a("span",[t._v(t._s(t.$t("miningAward.text3")))]),a("span",[t._v(t._s(t.lpAward.toFixed(2))+" BBG")])]),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.takingLp,expression:"!takingLp"}],attrs:{disabled:t.lpAward<=0},on:{click:t.takeRewardLP}},[t._v(t._s(t.$t("miningAward.text7")))]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.takingLp,expression:"takingLp"}],staticClass:"taking"},[a("van-loading",{attrs:{size:"14"}}),a("span",[t._v(t._s(t.$t("miningAward.text8")))])],1)]),a("div",{staticClass:"award-item last"},[a("div",[a("span",[t._v(t._s(t.$t("miningAward.text5")))]),a("span",[t._v(t._s(t.nodeAward.toFixed(2))+" BBG")])]),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.takingNode,expression:"!takingNode"}],attrs:{disabled:t.nodeAward<=0},on:{click:t.takeRewardNode}},[t._v(t._s(t.$t("miningAward.text7")))]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.takingNode,expression:"takingNode"}],staticClass:"taking"},[a("van-loading",{attrs:{size:"14"}}),a("span",[t._v(t._s(t.$t("miningAward.text8")))])],1)]),a("van-button",{directives:[{name:"show",rawName:"v-show",value:!t.takingAll,expression:"!takingAll"}],attrs:{disabled:t.totalAward<=0},on:{click:t.takeRewardAll}},[t._v(t._s(t.$t("miningAward.text7")))]),a("van-button",{directives:[{name:"show",rawName:"v-show",value:t.takingAll,expression:"takingAll"}],attrs:{loading:"","loading-text":t.$t("miningAward.text8")}})],1)])},s=[],n=(i("e7e5"),i("d399")),r=(i("ac1e"),i("543e")),o=(i("f1dc"),i("6e47")),d=(i("66b9"),i("b650")),w=i("2f62"),c={components:{[d["a"].name]:d["a"],[o["a"].name]:o["a"],[r["a"].name]:r["a"]},props:{powerAward:[String,Number],lpAward:[String,Number],nodeAward:[String,Number]},data(){return{takingPower:!1,takingLp:!1,takingNode:!1,takingAll:!1}},computed:{...Object(w["b"])(["showPopup"]),totalAward(){return this.powerAward.toBN().plus(this.lpAward).plus(this.nodeAward).toFixed()}},methods:{async takeRewardPower(){const t=await this.takeReward(1);t.on("transactionHash",t=>{this.takingPower=!0}).on("receipt",t=>{this.$emit("reload"),n["a"].success(this.$t("miningAward.text10")),this.takingPower=!1}).on("error",t=>{n["a"].fail(this.$t("miningAward.text11")),this.takingPower=!1})},async takeRewardLP(){const t=await this.takeReward(0);t.on("transactionHash",t=>{this.takingLp=!0}).on("receipt",t=>{this.$emit("reload"),n["a"].success(this.$t("miningAward.text10")),this.takingLp=!1}).on("error",t=>{n["a"].fail(this.$t("miningAward.text11")),this.takingLp=!1})},async takeRewardNode(){const t=await this.takeReward(2);t.on("transactionHash",t=>{this.takingNode=!0}).on("receipt",t=>{this.$emit("reload"),n["a"].success(this.$t("miningAward.text10")),this.takingNode=!1}).on("error",t=>{n["a"].fail(this.$t("miningAward.text11")),this.takingNode=!1})},takeReward(t){return new Promise(a=>{const i=this.$contracts.TokenBiggings.methods.takeReward(t);i.call({from:this.$address},(t,e)=>{t||a(i.send({from:this.$address}))})})},takeRewardAll(){const t=this.$contracts.TokenBiggings.methods.takeRewardAll();t.call({frmo:this.$address},(a,i)=>{a||t.send({from:this.$address}).on("transactionHash",t=>{this.takingAll=!0}).on("receipt",t=>{this.$emit("reload"),n["a"].success(this.$t("miningAward.text10")),this.takingAll=!1}).on("error",t=>{n["a"].fail(this.$t("miningAward.text11")),this.takingAll=!1})})}}},l=c,g=l,h=(i("13c9"),i("2877")),m=Object(h["a"])(g,e,s,!1,null,"91adfa38",null);a["default"]=m.exports},ac1e:function(t,a,i){"use strict";i("68ef"),i("e3b3")},cf78:function(t,a,i){}}]);