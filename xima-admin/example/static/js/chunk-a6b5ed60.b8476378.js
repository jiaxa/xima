(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6b5ed60"],{"0860":function(t,e,a){},"817d":function(t,e,a){var i,s,n;(function(l,r){s=[e,a("313e")],i=r,n="function"===typeof i?i.apply(e,s):i,void 0===n||(t.exports=n)})(0,(function(t,e){var a=function(t){"undefined"!==typeof console&&console&&console.error&&console.error(t)};if(e){var i=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],s={color:i,title:{textStyle:{fontWeight:"normal",color:"#008acd"}},visualMap:{itemWidth:15,color:["#5ab1ef","#e0ffff"]},toolbox:{iconStyle:{normal:{borderColor:i[0]}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},categoryAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitLine:{lineStyle:{color:["#eee"]}}},valueAxis:{axisLine:{lineStyle:{color:"#008acd"}},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0.1)","rgba(200,200,200,0.1)"]}},splitLine:{lineStyle:{color:["#eee"]}}},timeline:{lineStyle:{color:"#008acd"},controlStyle:{normal:{color:"#008acd"},emphasis:{color:"#008acd"}},symbol:"emptyCircle",symbolSize:3},line:{smooth:!0,symbol:"emptyCircle",symbolSize:3},candlestick:{itemStyle:{normal:{color:"#d87a80",color0:"#2ec7c9",lineStyle:{color:"#d87a80",color0:"#2ec7c9"}}}},scatter:{symbol:"circle",symbolSize:4},map:{label:{normal:{textStyle:{color:"#d87a80"}}},itemStyle:{normal:{borderColor:"#eee",areaColor:"#ddd"},emphasis:{areaColor:"#fe994e"}}},graph:{color:i},gauge:{axisLine:{lineStyle:{color:[[.2,"#2ec7c9"],[.8,"#5ab1ef"],[1,"#d87a80"]],width:10}},axisTick:{splitNumber:10,length:15,lineStyle:{color:"auto"}},splitLine:{length:22,lineStyle:{color:"auto"}},pointer:{width:5}}};e.registerTheme("macarons",s)}else a("ECharts is not Loaded")}))},c228:function(t,e,a){"use strict";var i=a("0860"),s=a.n(i);s.a},c644:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"default-container"},[a("el-row",{staticClass:"def-row",attrs:{gutter:25}},[a("el-col",{attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"box-card"},[a("h4",[t._v("总计")]),a("h3",[t._v("4536232532 "),a("span",{staticClass:"unit"},[t._v("单")])]),a("h3",[t._v("10202323453.34 "),a("span",{staticClass:"unit"},[t._v("元")])])])]),a("el-col",{attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"box-card"},[a("h4",[t._v("本年")]),a("h3",[t._v("85746202 "),a("span",{staticClass:"unit"},[t._v("单")])]),a("h3",[t._v("234212454.23 "),a("span",{staticClass:"unit"},[t._v("元")])])])]),a("el-col",{attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"box-card"},[a("h4",[t._v("本月")]),a("h3",[t._v("23415 "),a("span",{staticClass:"unit"},[t._v("单")])]),a("h3",[t._v("6938604.12 "),a("span",{staticClass:"unit"},[t._v("元")])])])]),a("el-col",{attrs:{xs:12,sm:12,lg:6}},[a("div",{staticClass:"box-card"},[a("h4",[t._v("昨日")]),a("h3",[t._v("862 "),a("span",{staticClass:"unit"},[t._v("单")])]),a("h3",[t._v("234173.65 "),a("span",{staticClass:"unit"},[t._v("元")])])])])],1),a("el-row",{staticClass:"def-row",attrs:{gutter:20}},[a("el-col",{attrs:{xs:12,sm:12,lg:12}},[a("div",{staticClass:"box-card"},[a("line-chart")],1)]),a("el-col",{attrs:{xs:12,sm:12,lg:12}},[a("div",{staticClass:"box-card"},[a("pcd-chart")],1)])],1),a("el-row",{staticClass:"def-row",attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,sm:24,lg:24}},[a("div",{staticClass:"box-card"},[a("month-chart")],1)])],1),a("el-row",{staticClass:"def-row",attrs:{gutter:20}},[a("el-col",{attrs:{xs:12,sm:12,lg:12}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("昨日部门")])]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"date",label:"部门"}}),a("el-table-column",{attrs:{prop:"name",label:"总数",align:"right"}}),a("el-table-column",{attrs:{prop:"address",label:"总额",align:"right"}})],1)],1)],1),a("el-col",{attrs:{xs:12,sm:12,lg:12}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("本月部门")])]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"date",label:"部门"}}),a("el-table-column",{attrs:{prop:"name",label:"总数（单）",align:"right"}}),a("el-table-column",{attrs:{prop:"address",label:"总额（¥）",align:"right"}})],1)],1)],1)],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},l=[],r=a("313e"),o=a.n(r),c=a("ed08"),d={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var t=this;this.$_resizeHandler=Object(c["b"])((function(){t.chart&&t.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}};a("817d");var h={name:"lineChat",mixins:[d],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=o.a.init(this.$el,"macarons"),this.setOptions(this.chartData)},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.expectedData,t.actualData;this.chart.setOption({title:{text:"运输单位",textStyle:{color:"#333",fontSize:16}},color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["环球","大田","聚盟","成都宅急送","春秋诺达","无锡"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"昨日",type:"bar",data:[101,77,60,180,90,120]},{name:"本月",type:"bar",data:[312,463,581,800,760,643]}]})}}},u=h,p=a("2877"),m=Object(p["a"])(u,n,l,!1,null,null,null),f=m.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},y=[];a("817d");var v={name:"lineChat",mixins:[d],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=o.a.init(this.$el,"macarons"),this.setOptions(this.chartData)},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.expectedData,t.actualData;this.chart.setOption({title:{text:"仓库统计",textStyle:{color:"#333",fontSize:16}},color:["#34C7C9","#2F4554"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["北京","无锡","东莞","成都"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"昨日",type:"bar",width:"20%",data:[101,77,60,180]},{name:"本月",type:"bar",width:"20%",data:[312,463,581,800]}]})}}},g=v,x=Object(p["a"])(g,b,y,!1,null,null,null),_=x.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},S=[];a("817d");var w={name:"lineChat",mixins:[d],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0}},data:function(){return{chart:null}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=o.a.init(this.$el,"macarons"),this.setOptions(this.chartData)},setOptions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.expectedData,t.actualData;this.chart.setOption({title:{text:"快递走势",textStyle:{color:"#333",fontSize:16}},tooltip:{trigger:"axis"},legend:{data:["环球","大田","聚盟","宅急送","无锡"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["8.1","8.2","8.3","8.4","8.5","8.6","8.7","8.8","8.9","8.10","8.11","8.12","8.13","8.14","8.15"]},yAxis:{type:"value"},series:[{name:"环球",type:"line",data:[369,651,790,734,343,542,854,932,357,893,446,933,685,970,353]},{name:"大田",type:"line",data:[232,604,111,68,71,590,23,181,476,105,299,907,289,166,324]},{name:"聚盟",type:"line",data:[787,789,226,353,403,177,589,362,552,82,861,829,924,797,395]},{name:"宅急送",type:"line",data:[199,907,659,271,717,389,985,365,329,415,850,511,368,718,413]},{name:"无锡",type:"line",data:[327,708,559,620,412,760,739,486,506,835,553,338,931,88,219]}]})}}},$=w,z=Object(p["a"])($,C,S,!1,null,null,null),E=z.exports,D={components:{LineChart:f,PcdChart:_,MonthChart:E},data:function(){return{content:"I am Example",tableData:[{date:"北京天猫团队部门",name:"56",address:"500"},{date:"京东团队部门",name:"78",address:"1923"},{date:"拼夕夕部门",name:"96",address:"318"},{date:"微商网红部门",name:"23",address:"756"},{date:"线下地板流部门",name:"12",address:"625"}]}},computed:{},mounted:function(){},methods:{}},R=D,L=(a("c228"),Object(p["a"])(R,i,s,!1,null,"a420dd06",null));e["default"]=L.exports}}]);