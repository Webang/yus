(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{35:function(i,l,e){"use strict";e.r(l);var s=function(){var i=this,l=i.$createElement,e=i._self._c||l;return e("div",{staticClass:"f6-demo f6-demo-picker"},[e("div",{staticClass:"f6-demo-block"},[e("div",{staticClass:"f6-demo-block__hd"},[i._v("基本用法")]),e("div",{staticClass:"f6-demo-block__bd"},[e("div",{staticClass:"f6-demo-row"},[e("f6-picker",{attrs:{"column-list":i.list1,header:!1}})],1)]),e("div",{staticClass:"f6-demo-block__hd"},[i._v("popup模式")]),e("div",{staticClass:"f6-demo-block__bd"},[e("div",{staticClass:"f6-demo-row"},[e("f6-cell",[e("div",{attrs:{slot:"title"},slot:"title"},[i.v1?e("span",[i._v(i._s(i.v1))]):e("span",{staticStyle:{color:"#ccc"}},[i._v("请选择")])]),e("f6-switch",{attrs:{slot:"value",title:"切换显示"},slot:"value",model:{value:i.visible2,callback:function(l){i.visible2=l},expression:"visible2"}})],1),e("f6-picker",{attrs:{popup:"","column-list":i.list1},on:{"on-confirm":i.handleConfirm1,"on-cancel":i.handleCcancel1,"on-column-change":i.handleColumnChange1},model:{value:i.visible2,callback:function(l){i.visible2=l},expression:"visible2"}})],1)])])])};s._withStripped=!0;var t={data:function(){return{v1:"",visible2:!1,list1:[{values:["苹果","香蕉","荔枝","雪梨","桂圆","桔子"]}]}},methods:{handleConfirm1:function(i,l,e){this.v1=l.join(" "),this.visible2=!1},handleCcancel1:function(){this.visible2=!1},handleColumnChange1:function(i,l,e){console.log(l,e)}}},o=e(5),n=Object(o.a)(t,s,[],!1,null,null,null);n.options.__file="packages/picker/demo/index.vue";l.default=n.exports}}]);