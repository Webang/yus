(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{104:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"yus-demo yus-demo-toast"},[a("div",{staticClass:"yus-demo-block__hd"},[t._v("基本使用")]),a("div",{staticClass:"yus-demo-block__bd"},[a("yus-cell",{attrs:{title:"从底部弹出"}},[a("yus-button",{attrs:{slot:"value",size:"mini",type:"primary",plain:"",text:"底部弹出"},on:{click:t.toastFromBottom},slot:"value"})],1),a("yus-cell",{attrs:{title:"从中间弹出"}},[a("yus-button",{attrs:{slot:"value",size:"mini",type:"primary",plain:"",text:"中间弹出"},on:{click:t.toastFromMiddle},slot:"value"})],1),a("yus-cell",{attrs:{title:"从顶部弹出"}},[a("yus-button",{attrs:{slot:"value",size:"mini",type:"primary",plain:"",text:"顶部弹出"},on:{click:t.toastFromTop},slot:"value"})],1),a("yus-cell",{attrs:{title:"loading"}},[a("yus-button",{attrs:{slot:"value",size:"mini",type:"primary",plain:"",text:"加载提示"},on:{click:t.loadingToast},slot:"value"})],1),a("yus-cell",{attrs:{title:"success"}},[a("yus-button",{attrs:{slot:"value",size:"mini",type:"primary",plain:"",text:"成功提示"},on:{click:t.successToast},slot:"value"})],1),a("yus-cell",{attrs:{title:"fail"}},[a("yus-button",{attrs:{slot:"value",size:"mini",type:"primary",plain:"",text:"失败提示"},on:{click:t.failToast},slot:"value"})],1),a("yus-cell",{attrs:{title:"warn"}},[a("yus-button",{attrs:{slot:"value",size:"mini",type:"primary",plain:"",text:"警告提示"},on:{click:t.warnToast},slot:"value"})],1)],1),a("div",{staticClass:"yus-demo-block__hd"},[t._v("使用幕布")]),a("div",{staticClass:"yus-demo-block__bd"},[a("div",{staticClass:"yus-demo-row"},[a("yus-button",{attrs:{slot:"value",block:"",type:"primary",text:"幕布不透明"},on:{click:t.toast1},slot:"value"})],1),a("div",{staticClass:"yus-demo-row"},[a("yus-button",{attrs:{slot:"value",block:"",type:"primary",text:"幕布透明加载"},on:{click:t.toast2},slot:"value"})],1)])])};e._withStripped=!0;var o=a(10),i={methods:{toastFromBottom:function(){Object(o.a)({message:"发送短信成功",position:"bottom",duration:1e4})},toast1:function(){Object(o.a)({type:"loading",message:"加载中...",backdrop:!0,transparent:!1})},toast2:function(){Object(o.a)({type:"loading",message:"加载中...",backdrop:!0,transparent:!0})},successToast:function(){Object(o.a)({type:"success",message:"下单成功",duration:2e4,className:"ui-success-toast"})},loadingToast:function(){Object(o.a)({type:"loading",message:"加载中...",duration:2e3})},failToast:function(){Object(o.a)({type:"fail",message:"登录失败",duration:2e3})},warnToast:function(){Object(o.a)({type:"fail",message:"登录失败",duration:2e3})},toastFromTop:function(){Object(o.a)({message:"发送短信成功",position:"top",duration:1e3})},toastFromMiddle:function(){Object(o.a)({message:"发送短信成功",duration:1e3})},toastLoading:function(){Object(o.a)({message:"加载中...",type:"loading"})},toast:function(t){var s=Object(o.a)(t);setTimeout((function(){s.clear()}),1e3)}}},l=a(13),n=Object(l.a)(i,e,[],!1,null,null,null);n.options.__file="packages/toast/demo/index.vue";s.default=n.exports}}]);