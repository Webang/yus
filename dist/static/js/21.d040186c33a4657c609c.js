webpackJsonp([21],{LRBa:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={components:{CountdownDate:a("gGbG").s},data:function(){return{counter:0}},methods:{onChange:function(t){console.log("on-change",t)},onEnd:function(){console.log("on-end")},convertToStr:function(t){var e=new Date(1e3*t);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()},getRelativeDay:function(t){var e=new Date,a=e.getFullYear(),n=e.getMonth(),o=e.getDate()+t;return parseInt((new Date).setFullYear(a,n,o)/1e3)},willBeOvered:function(){return this.getRelativeDay(0)+10}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-countdown-date"},[a("div",{staticClass:"ymu-doc-block__title"},[t._v("还未开始")]),t._v(" "),a("div",{staticClass:"ymu-doc-block__bd"},[a("ul",[a("li",[a("p",[t._v("开始时间："+t._s(t.convertToStr(t.getRelativeDay(2))))]),t._v(" "),a("p",[t._v("结束时间："+t._s(t.convertToStr(t.getRelativeDay(4))))]),t._v(" "),a("CountdownDate",{attrs:{startTime:t.getRelativeDay(2),endTime:t.getRelativeDay(4)}})],1)])]),t._v(" "),a("div",{staticClass:"ymu-doc-block__title"},[t._v("已经开始")]),t._v(" "),a("div",{staticClass:"ymu-doc-block__bd"},[a("ul",[a("li",[a("p",[t._v("开始时间："+t._s(t.convertToStr(t.getRelativeDay(-1))))]),t._v(" "),a("p",[t._v("结束时间："+t._s(t.convertToStr(t.getRelativeDay(1))))]),t._v(" "),a("CountdownDate",{attrs:{startTime:t.getRelativeDay(-1),endTime:t.getRelativeDay(1)}})],1)])]),t._v(" "),a("div",{staticClass:"ymu-doc-block__title"},[t._v("马上结束")]),t._v(" "),a("div",{staticClass:"ymu-doc-block__bd"},[a("ul",[a("li",[a("p",[t._v("开始时间："+t._s(t.convertToStr(t.getRelativeDay(-1))))]),t._v(" "),a("p",[t._v("结束时间："+t._s(t.convertToStr(t.willBeOvered())))]),t._v(" "),a("CountdownDate",{attrs:{startTime:t.getRelativeDay(-1),endTime:t.willBeOvered()},on:{"on-end":t.onEnd,"on-change":t.onChange}})],1)])]),t._v(" "),a("div",{staticClass:"ymu-doc-block__title"},[t._v("已经结束")]),t._v(" "),a("div",{staticClass:"ymu-doc-block__bd"},[a("ul",[a("li",[a("p",[t._v("开始时间："+t._s(t.convertToStr(t.getRelativeDay(-2))))]),t._v(" "),a("p",[t._v("结束时间："+t._s(t.convertToStr(t.getRelativeDay(-1))))]),t._v(" "),a("CountdownDate",{attrs:{startTime:t.getRelativeDay(-2),endTime:t.getRelativeDay(-1)}})],1)])]),t._v(" "),a("div",{staticClass:"ymu-doc-block__title"},[t._v("马上结束")]),t._v(" "),a("div",{staticClass:"ymu-doc-block__bd"},[a("ul",[a("li",[a("p",[t._v("开始时间："+t._s(t.convertToStr(t.getRelativeDay(-1))))]),t._v(" "),a("p",[t._v("结束时间："+t._s(t.convertToStr(t.willBeOvered())))]),t._v(" "),a("CountdownDate",{attrs:{startTime:t.getRelativeDay(-1),endTime:t.willBeOvered()},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e)+"\n          ")]}}])})],1)])])])},staticRenderFns:[]};var v=a("C7Lr")(n,o,!1,function(t){a("xFaj")},"data-v-2ccf961f",null);e.default=v.exports},xFaj:function(t,e){}});
//# sourceMappingURL=21.d040186c33a4657c609c.js.map