webpackJsonp([2],{"2OTR":function(t,e){},GWgI:function(t,e){},IdB4:function(t,e){},WwU8:function(t,e){},bl4z:function(t,e,i){"use strict";var s={name:"ymu-progress",props:{percentage:{type:Number,default:0}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ymu-progress"},[this._t("start"),this._v(" "),e("div",{staticClass:"ymu-progress__bar"},[e("div",{staticClass:"ymu-progress__track",style:{width:this.percentage+"%"}})]),this._v(" "),this._t("end")],2)},staticRenderFns:[]};var a=i("VU/8")(s,n,!1,function(t){i("IdB4")},null,null).exports;a.install=function(t){t.component(a.name,a)};e.a=a},ruY1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("dyme"),n=i("xnKZ"),a=i("jyDz"),l=i("bl4z"),v=i("lkey"),c={name:"ymu-flow",props:{direction:{type:String,default:"horizontal"},"active-index":{type:Number,default:0}}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"ymu-flows",class:["ymu-flows--"+this.direction]},[this._t("default")],2)},staticRenderFns:[]};var r=i("VU/8")(c,o,!1,function(t){i("WwU8")},null,null).exports;r.install=function(t){t.component(r.name,r)};var _=r,u={render:function(){var t,e=this.$createElement,i=this._self._c||e;return i("div",{staticClass:"ymu-flow",class:["ymu-flow--"+this.direction,(t={},t["ymu-flow--"+this.status]=this.status,t)]},[this._m(0),this._v(" "),i("div",{staticClass:"ymu-flow-main"},[this._t("default")],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ymu-flow-head"},[e("div",{staticClass:"ymu-flow__icon"}),this._v(" "),e("div",{staticClass:"ymu-flow__line"})])}]};var d=i("VU/8")({name:"ymu-flow-item",computed:{currentIndex:function(){return this.$parent.$children.indexOf(this)},activeIndex:function(){return this.$parent.activeIndex},direction:function(){return this.$parent.direction},status:function(){return this.currentIndex<this.activeIndex?"finish":this.currentIndex===this.activeIndex?"process":void 0}}},u,!1,function(t){i("2OTR")},null,null).exports;d.install=function(t){t.component(d.name,d)};var p=d,m={components:{wSwitch:s.a,Cell:n.a,CellGroup:a.a,Progress:l.a,Button:v.a,Flow:_,FlowItem:p},data:function(){return{percentage:10}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page page-switch"},[i("div",{staticClass:"ymu-doc-block"},[i("div",{staticClass:"ymu-doc-block__title"},[t._v("竖向步骤条")]),t._v(" "),i("div",{staticClass:"ymu-doc-block__content"},[i("div",{staticClass:"list"},[i("Flow",{attrs:{"active-index":0}},[i("FlowItem",[i("p",[t._v("用户下单")])]),t._v(" "),i("FlowItem",[i("p",[t._v("系统接单")])]),t._v(" "),i("FlowItem",[i("p",[t._v("商家发货")])]),t._v(" "),i("FlowItem",[i("p",[t._v("付款成功")])])],1)],1),t._v(" "),i("div",{staticClass:"list"},[i("Flow",{attrs:{"active-index":1}},[i("FlowItem",[i("p",[t._v("用户下单")])]),t._v(" "),i("FlowItem",[i("p",[t._v("系统接单")])]),t._v(" "),i("FlowItem",[i("p",[t._v("商家发货")])]),t._v(" "),i("FlowItem",[i("p",[t._v("付款成功")])])],1)],1)])]),t._v(" "),i("div",{staticClass:"ymu-doc-block"},[i("div",{staticClass:"ymu-doc-block__title"},[t._v("竖向步骤条")]),t._v(" "),i("div",{staticClass:"ymu-doc-block__content"},[i("div",{staticClass:"list"},[i("Flow",{attrs:{direction:"vertical","active-index":0}},[i("FlowItem",[i("p",[t._v("广东-南山科技园")]),t._v(" "),i("p",[t._v("2016-07-12 12:40")])]),t._v(" "),i("FlowItem",[i("p",[t._v("深圳-南山科技园")]),t._v(" "),i("p",[t._v("2016-07-12 12:40")])]),t._v(" "),i("FlowItem",[i("p",[t._v("福田-南山科技园")]),t._v(" "),i("p",[t._v("2016-07-12 12:40")])]),t._v(" "),i("FlowItem",[i("p",[t._v("市民中心-南山科技园")]),t._v(" "),i("p",[t._v("2016-07-12 12:40")])])],1)],1),t._v(" "),i("div",{staticClass:"list"},[i("Flow",{attrs:{direction:"vertical","active-index":2}},[i("FlowItem",[i("p",[t._v("广东-南山科技园")]),t._v(" "),i("p",[t._v("2016-07-12 12:40")])]),t._v(" "),i("FlowItem",[i("p",[t._v("深圳-南山科技园")]),t._v(" "),i("p",[t._v("2016-07-12 12:40")])]),t._v(" "),i("FlowItem",[i("p",[t._v("福田-南山科技园")]),t._v(" "),i("p",[t._v("2016-07-12 12:40")])]),t._v(" "),i("FlowItem",[i("p",[t._v("市民中心-南山科技园")]),t._v(" "),i("p",[t._v("2016-07-12 12:40")])])],1)],1),t._v(" "),i("div",{staticClass:"list"},[i("Flow",{attrs:{direction:"vertical","active-index":4}},[i("FlowItem",[i("p",[t._v("广东-南山科技园")]),t._v(" "),i("p",[t._v("2016-07-12 12:40")])]),t._v(" "),i("FlowItem",[i("p",[t._v("深圳-南山科技园")]),t._v(" "),i("p",[t._v("2016-07-12 12:40")])]),t._v(" "),i("FlowItem",[i("p",[t._v("福田-南山科技园")]),t._v(" "),i("p",[t._v("2016-07-12 12:40")])]),t._v(" "),i("FlowItem",[i("p",[t._v("市民中心-南山科技园")]),t._v(" "),i("p",[t._v("2016-07-12 12:40")])])],1)],1)])])])},staticRenderFns:[]};var w=i("VU/8")(m,f,!1,function(t){i("GWgI")},"data-v-2b9a6c88",null);e.default=w.exports}});
//# sourceMappingURL=2.47cb2ca1976e9e8e1206.js.map