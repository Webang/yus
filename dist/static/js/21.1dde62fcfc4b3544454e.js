webpackJsonp([21],{"0K8X":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{counter:0}},methods:{onChange:function(e){console.log("on-change",e)},onEnd:function(){console.log("on-end")},convertToStr:function(e){var t=new Date(1e3*e);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},getRelativeDay:function(e){var t=new Date,a=t.getFullYear(),n=t.getMonth(),o=t.getDate()+e;return parseInt((new Date).setFullYear(a,n,o)/1e3)},willBeOvered:function(){return this.getRelativeDay(0)+10}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo-countdown-date"},[a("div",{staticClass:"ymu-doc-block__hd"},[e._v("还未开始")]),e._v(" "),a("div",{staticClass:"ymu-doc-block__bd"},[a("ul",[a("li",[a("p",[e._v("开始时间："+e._s(e.convertToStr(e.getRelativeDay(2))))]),e._v(" "),a("p",[e._v("结束时间："+e._s(e.convertToStr(e.getRelativeDay(4))))]),e._v(" "),a("ymu-countdown-date",{attrs:{startTime:e.getRelativeDay(2),endTime:e.getRelativeDay(4)}})],1)])]),e._v(" "),a("div",{staticClass:"ymu-doc-block__hd"},[e._v("已经开始")]),e._v(" "),a("div",{staticClass:"ymu-doc-block__bd"},[a("ul",[a("li",[a("p",[e._v("开始时间："+e._s(e.convertToStr(e.getRelativeDay(-1))))]),e._v(" "),a("p",[e._v("结束时间："+e._s(e.convertToStr(e.getRelativeDay(1))))]),e._v(" "),a("ymu-countdown-date",{attrs:{startTime:e.getRelativeDay(-1),endTime:e.getRelativeDay(1)}})],1)])]),e._v(" "),a("div",{staticClass:"ymu-doc-block__hd"},[e._v("马上结束")]),e._v(" "),a("div",{staticClass:"ymu-doc-block__bd"},[a("ul",[a("li",[a("p",[e._v("开始时间："+e._s(e.convertToStr(e.getRelativeDay(-1))))]),e._v(" "),a("p",[e._v("结束时间："+e._s(e.convertToStr(e.willBeOvered())))]),e._v(" "),a("ymu-countdown-date",{attrs:{startTime:e.getRelativeDay(-1),endTime:e.willBeOvered()},on:{"on-end":e.onEnd,"on-change":e.onChange}})],1)])]),e._v(" "),a("div",{staticClass:"ymu-doc-block__hd"},[e._v("已经结束")]),e._v(" "),a("div",{staticClass:"ymu-doc-block__bd"},[a("ul",[a("li",[a("p",[e._v("开始时间："+e._s(e.convertToStr(e.getRelativeDay(-2))))]),e._v(" "),a("p",[e._v("结束时间："+e._s(e.convertToStr(e.getRelativeDay(-1))))]),e._v(" "),a("ymu-countdown-date",{attrs:{startTime:e.getRelativeDay(-2),endTime:e.getRelativeDay(-1)}})],1)])]),e._v(" "),a("div",{staticClass:"ymu-doc-block__hd"},[e._v("马上结束")]),e._v(" "),a("div",{staticClass:"ymu-doc-block__bd"},[a("ul",[a("li",[a("p",[e._v("开始时间："+e._s(e.convertToStr(e.getRelativeDay(-1))))]),e._v(" "),a("p",[e._v("结束时间："+e._s(e.convertToStr(e.willBeOvered())))]),e._v(" "),a("ymu-countdown-date",{attrs:{startTime:e.getRelativeDay(-1),endTime:e.willBeOvered()},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t)+"\n            ")]}}])})],1)])])])},staticRenderFns:[]};var v=a("VU/8")(n,o,!1,function(e){a("4liE")},"data-v-2d14638a",null);t.default=v.exports},"4liE":function(e,t){}});
//# sourceMappingURL=21.1dde62fcfc4b3544454e.js.map