(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{115:function(a,s,t){"use strict";t.r(s);var e=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"page page-progress"},[t("div",{staticClass:"yus-demo-block__hd"},[a._v("基础用法-"+a._s(a.d1.value))]),t("div",{staticClass:"yus-demo-block__bd"},[t("yus-region-slider",{attrs:{"track-height":a.d1.trackHeight,max:a.d1.max,min:a.d1.min},model:{value:a.d1.value,callback:function(s){a.$set(a.d1,"value",s)},expression:"d1.value"}})],1),t("div",{staticClass:"yus-demo-block__hd"},[a._v("禁用状态-"+a._s(a.d2.value))]),t("div",{staticClass:"yus-demo-block__bd"},[t("yus-region-slider",{attrs:{"track-height":a.d2.trackHeight,max:a.d2.max,min:a.d2.min,disabled:a.d2.disabled},model:{value:a.d2.value,callback:function(s){a.$set(a.d2,"value",s)},expression:"d2.value"}})],1),t("div",{staticClass:"yus-demo-block__hd"},[a._v("设置start和end-"+a._s(a.d3.value))]),t("div",{staticClass:"yus-demo-block__bd"},[t("yus-region-slider",{attrs:{"track-height":a.d3.trackHeight,max:a.d3.max,min:a.d3.min,disabled:a.d3.disabled},model:{value:a.d3.value,callback:function(s){a.$set(a.d3,"value",s)},expression:"d3.value"}},[t("span",{staticClass:"number",attrs:{slot:"start"},slot:"start"},[a._v(a._s(a.d3.min))]),t("span",{staticClass:"number",attrs:{slot:"end"},slot:"end"},[a._v(a._s(a.d3.max))])])],1),t("div",{staticClass:"yus-demo-block__hd"},[a._v("设置区间-"+a._s(a.d4.value))]),t("div",{staticClass:"yus-demo-block__bd"},[t("yus-region-slider",{attrs:{"track-height":a.d4.trackHeight,max:a.d4.max,min:a.d4.min,disabled:a.d4.disabled},model:{value:a.d4.value,callback:function(s){a.$set(a.d4,"value",s)},expression:"d4.value"}},[t("span",{staticClass:"number",attrs:{slot:"start"},slot:"start"},[a._v(a._s(a.d4.min))]),t("span",{staticClass:"number",attrs:{slot:"end"},slot:"end"},[a._v(a._s(a.d4.max))])])],1)])};e._withStripped=!0;var d={data:function(){return{d1:{min:0,max:100,value:[5,30],trackHeight:2,disabled:!1},d2:{min:0,max:100,value:[5,40],trackHeight:2,disabled:!0},d3:{min:0,max:100,value:[5,60],trackHeight:2,disabled:!1},d4:{min:0,max:200,value:[5,150],trackHeight:2,disabled:!1}}},methods:{setRangeValue:function(a){var s=parseInt(a.target.value);isNaN(s)&&(s=0),this.rangeValue1=s}}},i=(t(200),t(13)),n=Object(i.a)(d,e,[],!1,null,"62928dbf",null);n.options.__file="packages/region-slider/demo/index.vue";s.default=n.exports},157:function(a,s,t){var e=t(201);"string"==typeof e&&(e=[[a.i,e,""]]);var d={hmr:!0,transform:void 0,insertInto:void 0};t(16)(e,d);e.locals&&(a.exports=e.locals)},200:function(a,s,t){"use strict";var e=t(157);t.n(e).a},201:function(a,s,t){(a.exports=t(14)(!1)).push([a.i,"\n.form-control[data-v-62928dbf] {\r\n  height: 40px;\r\n  padding: 0 5px;\r\n  margin-left: 5px;\r\n  margin-top: 10px;\r\n  outline: none;\r\n  border: 1px #222 solid;\n}\n.yus-demo-content[data-v-62928dbf] {\r\n  padding-left: 12px;\r\n  padding-right: 12px;\n}\r\n",""])}}]);