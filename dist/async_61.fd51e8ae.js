(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{99:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"demo-tab"},[e("div",{staticClass:"f6-demo-block__hd"},[t._v("基本用法")]),e("div",{staticClass:"f6-demo-block__bd"},[e("f6-tab",{model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[e("f6-tab-item",[t._v("物理")]),e("f6-tab-item",[t._v("化学")]),e("f6-tab-item",[t._v("数学")]),e("f6-tab-item",[t._v("外语")]),e("f6-tab-item",[t._v("音乐")])],1)],1),e("div",{staticClass:"f6-demo-block__hd"},[t._v("禁用选项")]),e("div",{staticClass:"f6-demo-block__bd"},[e("f6-tab",{model:{value:t.active2,callback:function(a){t.active2=a},expression:"active2"}},[e("f6-tab-item",{attrs:{disabled:""}},[t._v("物理")]),e("f6-tab-item",[t._v("化学")]),e("f6-tab-item",[t._v("数学")]),e("f6-tab-item",[t._v("外语")]),e("f6-tab-item",[t._v("音乐")])],1)],1),e("div",{staticClass:"f6-demo-block__hd"},[t._v("滚动")]),e("div",{staticClass:"f6-demo-block__bd"},[e("div",{ref:"wrapper",staticClass:"wrapper"},[e("f6-tab",{ref:"scrollTab",attrs:{scrollable:""},model:{value:t.active3,callback:function(a){t.active3=a},expression:"active3"}},[e("f6-tab-item",[t._v("物理")]),e("f6-tab-item",[t._v("化学")]),e("f6-tab-item",[t._v("数学")]),e("f6-tab-item",[t._v("外语")]),e("f6-tab-item",[t._v("音乐")]),e("f6-tab-item",[t._v("结构力学")]),e("f6-tab-item",[t._v("数学分析")])],1)],1)]),e("f6-button",{staticStyle:{"margin-top":"10px","margin-left":"12px"},on:{click:t.scrollTo}},[t._v("scrollTo")])],1)};i._withStripped=!0;var c={data:function(){return{active:0,active2:0,active3:1}},methods:{scrollTo:function(){this.$refs.scrollTab.scrolltoView(this.active3)}}},l=e(12),s=Object(l.a)(c,i,[],!1,null,null,null);s.options.__file="packages/tab/demo/index.vue";a.default=s.exports}}]);