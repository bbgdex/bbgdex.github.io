(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29402318","chunk-2d0c2308"],{"097a":function(t,e,s){t.exports=s.p+"img/router.e489826a.svg"},"12ef":function(t,e,s){},"48f4":function(t,e,s){"use strict";function n(t){return"NavigationDuplicated"===t.name||t.message&&-1!==t.message.indexOf("redundant navigation")}function a(t,e){var s=e.to,a=e.url,i=e.replace;if(s&&t){var o=t[i?"replace":"push"](s);o&&o.catch&&o.catch((function(t){if(t&&!n(t))throw t}))}else a&&(i?location.replace(a):location.href=a)}function i(t){a(t.parent&&t.parent.$router,t.props)}s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return o}));var o={url:String,replace:Boolean,to:[String,Object]}},"66b9":function(t,e,s){"use strict";s("68ef"),s("9d70"),s("3743"),s("e3b3"),s("bc1b")},7085:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"swap"},[e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("div",{staticClass:"note"},[e("h2",[t._v(t._s(t.$t("swap.text1")))]),e("span",[t._v(t._s(t.$t("swap.text2")))])]),e("div",{staticClass:"setting"},[e("img",{attrs:{src:s("cc6c")},on:{click:t.openSetting}}),t.canTrade?e("svg",{staticClass:"sc-eaf7e66-0 bXujD",attrs:{id:"arrow_loading",viewBox:"0 0 24 24",color:"textSubtle",width:"27px",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.reload}},[e("path",{attrs:{stroke:"none",fill:"#4B0A67",d:"M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"}}),e("defs",[e("path",{attrs:{id:"arrow",stroke:"none",fill:"none",d:"M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"}}),e("clipPath",{attrs:{id:"arrow-clip"}},[e("use",{attrs:{"xlink:href":"#arrow"}})])]),e("g",{attrs:{"clip-path":"url(#arrow-clip)"}},[e("circle",{attrs:{cx:"12",cy:"12",r:"5",transform:"rotate(365,12,12)",fill:"none",stroke:"#D7CAEC","stroke-width":"16","stroke-dasharray":"30","stroke-dashoffset":"0"}},[e("animate",{attrs:{attributeName:"stroke-dashoffset",values:"0;-30",begin:"arrow_loading.click; 0.7s",repeatCount:"indefinite",dur:"6.3s"}})])]),e("use",{attrs:{"xlink:href":"#arrow"}}),e("animateTransform",{attrs:{id:"transform_0",attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 0 0",to:"-10 0 0",dur:"0.07s",begin:"arrow_loading.click;",repeatCount:"1"}}),e("animateTransform",{attrs:{id:"transform_1",attributeName:"transform",attributeType:"XML",type:"rotate",from:"-45 0 0",to:"390 0 0",dur:"0.6s",begin:"transform_0.end",repeatCount:"1"}}),e("animateTransform",{attrs:{id:"transform_2",attributeName:"transform",attributeType:"XML",type:"rotate",from:"390 0 0",to:"360 0 0",dur:"0.15s",begin:"transform_1.end",repeatCount:"1"}})],1):e("svg",{staticClass:"sc-eaf7e66-0 bXujD",attrs:{id:"arrow_loading",viewBox:"0 0 24 24",color:"textSubtle",width:"27px",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{stroke:"none",fill:"#D7CAEC",d:"M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"}}),e("defs",[e("path",{attrs:{id:"arrow",stroke:"none",fill:"none",d:"M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"}}),e("clipPath",{attrs:{id:"arrow-clip"}},[e("use",{attrs:{"xlink:href":"#arrow"}})])])])])]),e("div",{staticClass:"input-container"},[e("div",{staticClass:"balance"},[e("span",[t._v(t._s(t.$t("swap.text3")))]),e("div",{on:{click:function(e){t.amount0=t.balance}}},[e("span",[t._v(t._s(t.$t("swap.text12")))]),e("span",[t._v(t._s(t.balance.toFixed(4)))])])]),e("div",{class:t.token0?"has":"none"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount0,expression:"amount0"}],attrs:{type:"number",placeholder:t.$t("swap.text6")},domProps:{value:t.amount0},on:{input:[function(e){e.target.composing||(t.amount0=e.target.value)},t.input]}}),t.token0?e("div",{staticClass:"select-btn",on:{click:function(e){return t.openSearch(0)}}},[e("img",{attrs:{src:t.token0.logoURI}}),e("span",{domProps:{textContent:t._s(t.token0.symbol)}}),e("img",{attrs:{src:s("1d4a")}})]):e("div",{staticClass:"select-btn",on:{click:function(e){return t.openSearch(0)}}},[e("span",[t._v(t._s(t.$t("swap.text5")))]),e("img",{attrs:{src:s("1d4a")}})])])]),e("img",{attrs:{src:s("7a79")},on:{click:t.switchToken}}),e("div",{staticClass:"input-container"},[e("div",{staticClass:"balance"},[e("span",[t._v(t._s(t.$t("swap.text4")))]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.token1,expression:"token1"}]},[e("span",[t._v(t._s(t.$t("swap.text12")))]),e("span",[t._v(t._s(t.balance1.toFixed(4)))])])]),e("div",{class:t.token1?"has":"none"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount1,expression:"amount1"}],attrs:{type:"number",readonly:"",placeholder:t.$t("swap.text6")},domProps:{value:t.amount1},on:{input:function(e){e.target.composing||(t.amount1=e.target.value)}}}),t.token1?e("div",{staticClass:"select-btn",on:{click:function(e){return t.openSearch(1)}}},[e("img",{attrs:{src:t.token1.logoURI}}),e("span",{domProps:{textContent:t._s(t.token1.symbol)}}),e("img",{attrs:{src:s("1d4a")}})]):e("div",{staticClass:"select-btn",on:{click:function(e){return t.openSearch(1)}}},[e("span",[t._v(t._s(t.$t("swap.text5")))]),e("img",{attrs:{src:s("1d4a")}})])])]),e("div",{staticClass:"exchange-info"},[t.token0&&t.token1?e("div",{staticClass:"rate"},[t.rateChange?e("span",[t._v(t._s(t.$t("swap.text10"))+" 1 "+t._s(t.token1.symbol)+" ≈ "+t._s(t.rate0)+" "+t._s(t.token0.symbol))]):e("span",[t._v(t._s(t.$t("swap.text10"))+" 1 "+t._s(t.token0.symbol)+" ≈ "+t._s(t.rate1)+" "+t._s(t.token1.symbol))]),e("img",{attrs:{src:s("ab45")},on:{click:function(e){t.rateChange=!t.rateChange}}})]):t._e(),t.token0&&t.token1?e("div",{staticClass:"path"},[t.path.length>0?e("div",[e("span",[t._v(t._s(t.$t("swap.text13")))]),e("div",[e("span",[t._v(t._s(t.token0.symbol))]),e("img",{attrs:{src:s("097a")}}),t.path.length>2?e("span",[t._v(t._s(t.path[1].symbol))]):t._e(),t.path.length>2?e("img",{attrs:{src:s("097a")}}):t._e(),t.path.length>3?e("span",[t._v(t._s(t.path[2].symbol))]):t._e(),t.path.length>3?e("img",{attrs:{src:s("097a")}}):t._e(),e("span",[t._v(t._s(t.token1.symbol))])])]):t._e()]):t._e(),e("span",[t._v(t._s(t.$t("swap.text11"))+" "+t._s(t.gasPrice))]),e("span",{directives:[{name:"show",rawName:"v-show",value:"BBG"===t.token0.symbol,expression:"token0.symbol === 'BBG'"}]},[t._v(t._s(t.$t("swap.text14"))+" "+t._s(t.burn))])]),e("van-button",{attrs:{disabled:!t.canTrade},on:{click:t.openConfirm}},[t._v(t._s(t.$t("swap.text1")))])],1),e("img",{attrs:{src:s("c5f5")}}),e("search-tokens",{ref:"searchTokens",on:{select:t.selectToken}}),e("slippage-setting",{ref:"setting"}),e("trading-confirm",{ref:"confirm",attrs:{confirmInfo:t.confirmInfo},on:{swap:t.exchange}}),e("transation-state",{attrs:{state:t.transactionState,from:{amount:t.amount0,...t.token0},to:{amount:t.amount1.toFixed(4),...t.token1},"slip-point":t.slippage,min:t.amountOutMin,"to-price":t.rate1,"from-price":t.rate0},on:{exchange:t.exchange,close:t.close}})],1)},a=[],i=(s("e7e5"),s("d399")),o=(s("66b9"),s("b650")),r=(s("caad"),s("2f62")),c=s("b4e9"),d=s("b9cc"),l=s("e549"),h={components:{[o["a"].name]:o["a"],"search-tokens":()=>Promise.all([s.e("chunk-12484184"),s.e("chunk-2d0c0be3")]).then(s.bind(null,"bab4")),"slippage-setting":()=>s.e("chunk-c2422ffa").then(s.bind(null,"515d")),"trading-confirm":()=>s.e("chunk-1c20d11a").then(s.bind(null,"282a")),"transation-state":()=>s.e("chunk-7c6e33ec").then(s.bind(null,"5942"))},data(){return{token0:c["b"],token1:c["c"],balance:0,balance1:0,pairAddress:null,pairContract:null,reserve0:"0".toBN(),reserve1:"0".toBN(),rate0:"--",rate1:"--",rateChange:!1,records:[],amount0:"",amount1:"",poolToggle:!1,setupToggle:!1,assetsPool:[],changed:!0,transactionState:"",allowance:0,gasPrice:"0.25%",burn:"5%",path:[],inputing:!1,interval:-1}},computed:{...Object(r["b"])(["slippage","deadline"]),canTrade(){return this.token0&&this.token1&&this.path.length>0&&this.amount0>0},confirmInfo(){return this.canTrade?{amount0:this.amount0,amount1:this.amount1,token0:this.token0,token1:this.token1,amountOutMin:this.amountOutMin,price:this.rate1,gasPrice:this.gasPrice}:null},amountOutMin(){if(!this.canTrade)return 0;const t=this.amount1.toWei(this.token1.decimals).toBN(),e=t.minus(t.div(100).times(this.slippage)).toFixed(0);return e.fromWei(this.token1.decimals).toFixed(this.token1.decimals)}},created(){this.$contracts&&this.init(),this.interval=setInterval(()=>{this.canTrade&&this.reload()},5e3)},methods:{reload(){this.selectToken(this.token1)},switchToken(){const t=this.token0;this.token0=this.token1,this.token1=t,this.token0&&this.token1&&this.selectToken(t)},openSearch(t){this.$refs.searchTokens.open(t)},openSetting(){this.$refs.setting.open()},openConfirm(){this.$refs.confirm.open()},close(){this.amount0="",this.amount1="",this.transactionState="none",this.init()},init(){const t=this.$route.query.token;t?this.selectToken(JSON.parse(t)):this.selectToken(this.token1)},exchange(){if(this.amount0.toBN().gt(this.balance))return i["a"].fail(this.$t("swap.text7"));this.token0.symbol===c["a"].symbol?this.swapExactETHForTokens():this.amount0.toBN().gt(this.allowance)?this.approve():this.sendTokenTransaction()},sendTokenTransaction(){this.token1.symbol===c["a"].symbol?this.swapExactTokensForETH():this.swapExactTokensForTokens()},input(){if(!this.canTrade)return this.amount1="",this.gasPrice="0.25%",this.burn="5%",this.inputing=!1,!1;if(this.inputing)return!1;if(Number(this.amount0)<=0)return this.amount1="",this.gasPrice="0.25%",this.burn="5%",void(this.inputing=!1);this.inputing=!0;const t=setTimeout(()=>{if(Number(this.amount0)<=0)return this.amount1="",this.gasPrice="0.25%",this.burn="5%",this.inputing=!1,clearTimeout(t),!1;this.getAmountsOut(this.amount0,this.path).then(e=>{if(Number(this.amount0)<=0)return this.amount1="",this.gasPrice="0.25%",this.burn="5%",this.inputing=!1,clearTimeout(t),!1;this.amount1=e,this.inputing=!1,clearTimeout(t)})},500);this.gasPrice=`${this.amount0.toBN().times(.0025).toFixed().toFixed(6)} ${this.token0.symbol}`,this.burn=`${this.amount0.toBN().times(.05).toFixed().toFixed(6)} ${this.token0.symbol}`},selectToken(t,e=1){const s=this["token"+Number(!e)];if(null!==s&&s.symbol===t.symbol)return this.switchToken();this["token"+e]=t;const n=JSON.parse(localStorage.getItem("tradeSetting"));if(n?this.$store.commit("slippage","PIN"===this.token0.symbol?"10":n.slippage):this.$store.commit("slippage","PIN"===this.token0.symbol?"10":"0.1"),this.token0){const t=new this.$web3.BatchRequest,e=new this.$web3.eth.Contract(d,this.token0.address),s=new this.$web3.eth.Contract(d,this.token1.address);this.token0.symbol===c["a"].symbol?t.add(this.$web3.eth.getBalance.request(this.$address,"latest")):t.add(e.methods.balanceOf(this.$address).call.request({from:this.$address})),t.add(e.methods.allowance(this.$address,this.$contracts.Router.options.address).call.request({from:this.$address})),this.token1&&t.add(this.$contracts.Factory.methods.getPair(this.token0.address,this.token1.address).call.request({from:this.$address})),this.token1.symbol===c["a"].symbol?t.add(this.$web3.eth.getBalance.request(this.$address,"latest")):t.add(s.methods.balanceOf(this.$address).call.request({from:this.$address})),t.requestManager.sendBatch(t.requests,(t,e)=>{if(!t&&(this.balance=("string"===typeof e[0]?e[0]:e[0].result).fromWei(this.token0.decimals),this.balance1=e[3].result.fromWei(this.token0.decimals),this.allowance=e[1].result.fromWei(this.token0.decimals),this.token1)){const t=e[2].result.decode(["address"]);this.pairAddress=0!==Number(t)?t:null,this.pairContract=0!==Number(t)?new this.$web3.eth.Contract(l,t):null,this.searchRouter()}})}},async searchRouter(){const t=Object(c["g"])(this.token0,this.token1),e=[];for(let s=0;s<t.length;s++)e.push([this.$contracts.Router.options.address,this.$contracts.Router.methods.getAmountsOut("1".toWei(this.token0.decimals),t[s].map(t=>t.address)).encodeABI()]);this.$contracts.Multicall.methods.tryAggregate(!1,e).call({from:this.$address},(e,s)=>{if(!e){let e="0".toBN(),n=-1;for(let t=0;t<s.length;t++){if(!s[t][0])continue;const a=s[t][1].decode(["uint256[]"]);e.lt(a[a.length-1])&&(e=a[a.length-1].toBN(),n=t)}if(-1===n)this.pairAddress=null,this.pairContract=null;else{this.path=t[n],this.pairAddress=this.token0.address,this.getAmountsOut(1,this.path).then(t=>{this.rate1=t.toFixed(4)});const e=[...this.path];this.getAmountsOut(1,e.reverse()).then(t=>{this.rate0=t.toFixed(4)}),this.input()}}})},async getAmountsOut(t,e){const s=await this.$contracts.Router.methods.getAmountsOut(t.toWei(e[0].decimals),e.map(t=>t.address)).call({from:this.$address}),n=e.length-1;return s[n].fromWei(e[n].decimals).toFixed(e[n].decimals)},approve(){if(this.amount0.toBN().gt(this.balance))return i["a"].fail(this.$t("swap.text7"));const t=new this.$web3.eth.Contract(d,this.token0.address);t.methods.approve(this.$contracts.Router.options.address,this.amount0.toWei(this.token0.decimals).toBN().times(10).toFixed()).send({from:this.$address}).on("transactionHash",t=>{this.transactionState="approve"}).on("receipt",async e=>{this.allowance=await t.methods.allowance(this.$address,this.$contracts.Router.options.address).call.request({from:this.$address}),this.transactionState="approved"}).on("error",t=>{this.transactionState="none",i["a"].fail(this.$t("swap.text8"))})},swapExactTokensForTokens(){[this.token0.symbol,this.token1.symbol].includes("BBG")&&this.$store.commit("slippage","10");const t=Math.floor((new Date).getTime()/1e3)+Number(this.deadline),e=this.amount1.toWei(this.token1.decimals).toBN(),s=e.minus(e.div(100).times(this.slippage)).toFixed(0);this.$contracts.Router.methods.swapExactTokensForTokensSupportingFeeOnTransferTokens(this.amount0.toWei(this.token0.decimals),s,this.path.map(t=>t.address),this.$address,t).send({from:this.$address}).on("transactionHash",t=>{this.transactionState="in"}).on("receipt",t=>{this.transactionState="done",this.$store.commit("slippage","0.1")}).on("error",t=>{this.transactionState="none",i["a"].fail(this.$t("swap.text9"))})},swapExactTokensForETH(){[this.token0.symbol,this.token1.symbol].includes("BBG")&&this.$store.commit("slippage","10");const t=Math.floor((new Date).getTime()/1e3)+Number(this.deadline),e=this.amount1.toWei(this.token1.decimals).toBN(),s=e.minus(e.div(100).times(this.slippage)).toFixed(0);this.$contracts.Router.methods.swapExactTokensForETHSupportingFeeOnTransferTokens(this.amount0.toWei(this.token0.decimals),s,this.path.map(t=>t.address),this.$address,t).send({from:this.$address}).on("transactionHash",t=>{this.transactionState="in"}).on("receipt",t=>{this.transactionState="done",this.$store.commit("slippage","0.1")}).on("error",t=>{this.transactionState="none",i["a"].fail(this.$t("swap.text9"))})},swapExactETHForTokens(){[this.token0.symbol,this.token1.symbol].includes("BBG")&&this.$store.commit("slippage","10");const t=Math.floor((new Date).getTime()/1e3)+Number(this.deadline),e=this.amount1.toWei(this.token1.decimals).toBN(),s=e.minus(e.div(100).times(this.slippage)).toFixed(0);this.$contracts.Router.methods.swapExactETHForTokensSupportingFeeOnTransferTokens(s,this.path.map(t=>t.address),this.$address,t).send({from:this.$address,value:this.amount0.toWei(this.token0.decimals)}).on("transactionHash",t=>{this.transactionState="in"}).on("receipt",t=>{this.transactionState="done",this.$store.commit("slippage","0.1")}).on("error",t=>{this.transactionState="none",i["a"].fail(this.$t("swap.text9"))})},async getTradeList(){const t=[],e=(await Object(c["h"])(this.$address)).slice(0,3);e.forEach(e=>{let s;s="0x7ff36ab5"===e.input.slice(0,10)?{...e.input.slice(10).decode([{type:"uint",name:"amountOutMin"},{type:"address[]",name:"path"}]),amountIn:e.value,date:this.formatDate(e.timeStamp)}:{...e.input.slice(10).decode([{type:"uint",name:"amountIn"},{type:"uint",name:"amountOutMin"},{type:"address[]",name:"path"}]),date:this.formatDate(e.timeStamp)},t.push(s)});const s=new this.$web3.BatchRequest;s.add(this.$web3.eth.getBlockNumber.request()),t.forEach(t=>{const e=new this.$web3.eth.Contract(d,t.path[0]),n=new this.$web3.eth.Contract(d,t.path[t.path.length-1]);s.add(e.methods.symbol().call.request({from:this.address})),s.add(e.methods.decimals().call.request({from:this.address})),s.add(n.methods.symbol().call.request({from:this.address})),s.add(n.methods.decimals().call.request({from:this.address}))}),s.requestManager.sendBatch(s.requests,async(e,s)=>{if(!e){const e=[];let n=0;for(let a=1;a<s.length;a+=4){const i=s[a].result.decode(["string"]),o=s[a+2].result.decode(["string"]);e.push({amount0:t[n].amountIn.fromWei(s[a+1].result.decode(["uint8"])).toFixed(6),symbol0:i==="W"+c["a"].symbol?c["a"].symbol:i,amount1:t[n].amountOutMin.fromWei(s[a+3].result.decode(["uint8"])).toFixed(6),symbol1:o==="W"+c["a"].symbol?c["a"].symbol:o,date:t[n].date}),n++}this.records=e}})},formatDate(t){function e(t){return t<10?"0"+t:t}let s=new Date(1e3*t),n=s.getFullYear(),a=e(s.getMonth()+1),i=e(s.getDate()),o=e(s.getHours()),r=e(s.getMinutes());return`${n}/${a}/${i} ${o}:${r}`}},destroyed(){clearInterval(this.interval)}},u=h,m=u,p=(s("83ca"),s("2877")),f=Object(p["a"])(m,n,a,!1,null,"1eb6f084",null);e["default"]=f.exports},"7a79":function(t,e,s){t.exports=s.p+"img/switch-token.19d35b4c.svg"},"83ca":function(t,e,s){"use strict";s("12ef")},ab45:function(t,e,s){t.exports=s.p+"img/rate.d3f91f92.svg"},b1d2:function(t,e,s){"use strict";s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return a}));var n="van-hairline",a=n+"--surround"},b4e9:function(t,e,s){"use strict";s.d(e,"h",(function(){return c})),s.d(e,"f",(function(){return d})),s.d(e,"d",(function(){return l})),s.d(e,"e",(function(){return h})),s.d(e,"a",(function(){return p})),s.d(e,"b",(function(){return f})),s.d(e,"c",(function(){return g})),s.d(e,"i",(function(){return b})),s.d(e,"g",(function(){return C}));s("caad");const n=t=>`https://api.bscscan.com/api?module=account&action=txlist&address=${t}&startblock=0&endblock=latest&sort=desc&apikey=YourApiKeyToken`,a="https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2",i=["0x18cbafe5","0x7ff36ab5","0x38ed1739"];async function o(t,e){const s=e?await fetch(t,{cache:"reload",method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:e}):await fetch(t,{cache:"reload"});return await s.json()}async function r(t){return(await o(n(t))).result}async function c(t){const e=await r(t);return e.filter(t=>i.includes(t.input.slice(0,10)))}async function d(t){const e=JSON.stringify({query:`query pair {\n            pair(id: "${t}") {\n                reserveUSD\n            }\n        }`});return(await o(a,e)).data.pair}async function l(t){const e=await o(a,m(t));return e.errors?null:e.data.pair}async function h(t){return(await o(a,u(t))).data}function u(t){return JSON.stringify({query:"query poolTransactions($address: Bytes!) {\n            mints(first: 35, orderBy: timestamp, orderDirection: desc, where: {\n                pair: $address\n            }) {\n                id\n                timestamp\n                amount0\n                amount1\n            }\n            swaps(first: 35, orderBy: timestamp, orderDirection: desc, where: {\n                pair: $address\n            }) {\n                id\n                timestamp\n                amount0In\n                amount1In\n                amount0Out\n                amount1Out\n            }\n            burns(first: 35, orderBy: timestamp, orderDirection: desc, where: {\n                pair: $address\n            }) {\n                id\n                timestamp\n                amount0\n                amount1\n            }\n        }",variables:{address:t}})}function m(t){const e=3600*Math.floor((new Date).getTime()/1e3/3600);return JSON.stringify({query:`query pair {\n            pair(id: "${t}") {\n                pairHourData(\n                    where: {\n                        hourStartUnix_gte: ${e-86400}\n                        hourStartUnix_lte: ${e}\n                    }\n                ) {\n                    hourlyVolumeUSD\n                    hourlyTxns\n                }\n            }\n        }`})}const p={address:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",chainId:56,decimals:18,logoURI:"https://chainconfig.github.io/bsc/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png",name:"BNB",symbol:"BNB"},f={name:"Binance Pegged USDT",address:"0x55d398326f99059fF775485246999027B3197955",decimals:18,chainId:56,logoURI:"https://chainconfig.github.io/bsc/tokens/0x55d398326f99059fF775485246999027B3197955.png",symbol:"USDT"},g={name:"Big Bang Token",address:"0x81460AD24eAFa7e77623de607584719aF435Acd3",decimals:18,chainId:56,logoURI:"https://chainconfig.github.io/bsc/tokens/0x81460AD24eAFa7e77623de607584719aF435Acd3.png",symbol:"BBG"},b=[{symbol:"BNB",address:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"},{symbol:"BUSD",address:"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"},{symbol:"USDT",address:"0x55d398326f99059fF775485246999027B3197955"},{symbol:"USDC",address:"0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"},{symbol:"ETH",address:"0x2170Ed0880ac9A755fd29B2688956BD959F933F8"},{symbol:"CAKE",address:"0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"}];function C(t,e){const s=b.filter(s=>![t.symbol,e.symbol].includes(s.symbol)),n=[[t,e]];for(let a=0;a<s.length;a++){n.push([t,s[a],e]);for(let i=a+1;i<s.length;i++)n.push([t,s[a],s[i],e]),n.push([t,s[i],s[a],e])}return n}},b650:function(t,e,s){"use strict";var n=s("c31d"),a=s("2638"),i=s.n(a),o=s("d282"),r=s("ba31"),c=s("b1d2"),d=s("48f4"),l=s("ad06"),h=s("543e"),u=Object(o["a"])("button"),m=u[0],p=u[1];function f(t,e,s,n){var a,o=e.tag,u=e.icon,m=e.type,f=e.color,g=e.plain,b=e.disabled,C=e.loading,k=e.hairline,w=e.loadingText,y=e.iconPosition,v={};function x(t){e.loading&&t.preventDefault(),C||b||(Object(r["a"])(n,"click",t),Object(d["a"])(n))}function $(t){Object(r["a"])(n,"touchstart",t)}f&&(v.color=g?f:"white",g||(v.background=f),-1!==f.indexOf("gradient")?v.border=0:v.borderColor=f);var B=[p([m,e.size,{plain:g,loading:C,disabled:b,hairline:k,block:e.block,round:e.round,square:e.square}]),(a={},a[c["b"]]=k,a)];function T(){return C?s.loading?s.loading():t(h["a"],{class:p("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}}):s.icon?t("div",{class:p("icon")},[s.icon()]):u?t(l["a"],{attrs:{name:u,classPrefix:e.iconPrefix},class:p("icon")}):void 0}function _(){var n,a=[];return"left"===y&&a.push(T()),n=C?w:s.default?s.default():e.text,n&&a.push(t("span",{class:p("text")},[n])),"right"===y&&a.push(T()),a}return t(o,i()([{style:v,class:B,attrs:{type:e.nativeType,disabled:b},on:{click:x,touchstart:$}},Object(r["b"])(n)]),[t("div",{class:p("content")},[_()])])}f.props=Object(n["a"])({},d["b"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"},iconPosition:{type:String,default:"left"}}),e["a"]=m(f)},bc1b:function(t,e,s){},c5f5:function(t,e,s){t.exports=s.p+"img/not-trade.42aa2a3c.svg"}}]);