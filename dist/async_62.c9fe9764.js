(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{103:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"f6-demo f6-demo-toast"},[a("div",{staticClass:"f6-demo-block__hd"},[t._v("基本使用")]),a("div",{staticClass:"f6-demo-block__bd"},[a("f6-cell",{attrs:{title:"从底部弹出"}},[a("f6-button",{attrs:{slot:"value",size:"mini",type:"primary",plain:"",text:"显示Toast"},on:{click:t.toastFromBottom},slot:"value"})],1),a("f6-cell",{attrs:{title:"从中间弹出"}},[a("f6-button",{attrs:{slot:"value",size:"mini",type:"primary",plain:"",text:"显示Toast"},on:{click:t.toastFromMiddle},slot:"value"})],1),a("f6-cell",{attrs:{title:"从顶部弹出"}},[a("f6-button",{attrs:{slot:"value",size:"mini",type:"primary",plain:"",text:"显示Toast"},on:{click:t.toastFromTop},slot:"value"})],1),a("f6-cell",{attrs:{title:"loading"}},[a("f6-button",{attrs:{slot:"value",size:"mini",type:"primary",plain:"",text:"显示Toast"},on:{click:function(e){return t.toast({type:"loading",message:"加载中..."})}},slot:"value"})],1),a("f6-cell",{attrs:{title:"success"}},[a("f6-button",{attrs:{slot:"value",size:"mini",type:"primary",plain:"",text:"显示Toast"},on:{click:function(e){return t.toast({type:"success",message:""})}},slot:"value"})],1),a("f6-cell",{attrs:{title:"fail"}},[a("f6-button",{attrs:{slot:"value",size:"mini",type:"primary",plain:"",text:"显示Toast"},on:{click:function(e){return t.toast({type:"fail",message:""})}},slot:"value"})],1),a("f6-cell",{attrs:{title:"warn"}},[a("f6-button",{attrs:{slot:"value",size:"mini",type:"primary",plain:"",text:"显示Toast"},on:{click:function(e){return t.toast({type:"warn",message:""})}},slot:"value"})],1)],1),a("div",{staticClass:"f6-demo-block__hd"},[t._v("使用遮罩")]),a("div",{staticClass:"f6-demo-block__bd"},[a("div",{staticClass:"f6-demo-row"},[a("f6-button",{attrs:{slot:"value",block:"",type:"primary",text:"显示Toast(幕布不透明)"},on:{click:function(e){return t.toast({type:"loading",message:"加载中...",backdrop:!0,transparent:!1})}},slot:"value"})],1),a("div",{staticClass:"f6-demo-row"},[a("f6-button",{attrs:{slot:"value",block:"",type:"primary",text:"显示Toast(幕布透明色)"},on:{click:function(e){return t.toast({type:"loading",message:"加载中...",backdrop:!0,transparent:!0})}},slot:"value"})],1)])])};o._withStripped=!0;var s=a(9),i={methods:{toastFromBottom:function(){var t=Object(s.a)({message:"发送短信成功",position:"bottom"});setTimeout(function(){t.clear()},1e3)},toastFromTop:function(){var t=Object(s.a)({message:"发送短信成功",position:"top"});setTimeout(function(){t.clear()},1e3)},toastFromMiddle:function(){var t=Object(s.a)({message:"发送短信成功"});setTimeout(function(){t.clear()},1e3)},toastLoading:function(){var t=Object(s.a)({message:"加载中...",type:"loading"});setTimeout(function(){t.clear()},1e3)},toast:function(t){var e=Object(s.a)(t);setTimeout(function(){e.clear()},1e3)}}},l=a(12),n=Object(l.a)(i,o,[],!1,null,null,null);n.options.__file="packages/toast/demo/index.vue";e.default=n.exports}}]);