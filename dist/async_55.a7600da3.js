(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{108:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"f6-demo f6-demo-flow",staticStyle:{background:"#fff"}},[i("div",{staticClass:"f6-demo-block"},[i("div",{staticClass:"f6-demo-block__hd"},[t._v("横向步骤条activeIndex="+t._s(t.activeIndex1))]),i("div",{staticClass:"f6-demo-block__bd"},[i("f6-flow",{attrs:{"active-index":t.activeIndex1}},t._l(t.list,function(e,n){return i("f6-flow-item",{key:n},[i("p",[t._v(t._s(e.title))]),i("p",[t._v(t._s(e.content))])])}),1),i("f6-button",{staticStyle:{"margin-top":"10px"},attrs:{size:"mini"},on:{click:function(e){return t.handleNext("activeIndex1",4)}}},[t._v("下一步")])],1)]),i("div",{staticClass:"f6-demo-block"},[i("div",{staticClass:"f6-demo-block__hd"},[t._v("竖向步骤条activeIndex="+t._s(t.activeIndex2))]),i("div",{staticClass:"f6-demo-block__bd"},[i("f6-flow",{attrs:{direction:"vertical","active-index":t.activeIndex2}},t._l(t.list,function(e,n){return i("f6-flow-item",{key:n},[i("p",[t._v(t._s(e.title))]),i("p",[t._v(t._s(e.content))])])}),1),i("f6-button",{staticStyle:{"margin-top":"10px"},attrs:{size:"mini"},on:{click:function(e){return t.handleNext("activeIndex2",4)}}},[t._v("下一步")])],1)]),i("div",{staticClass:"f6-demo-block"},[i("div",{staticClass:"f6-demo-block__hd"},[t._v("自定义ICON")]),i("div",{staticClass:"f6-demo-block__bd"},[i("f6-flow",{attrs:{"active-index":t.activeIndex3,finishIcon:"https://avatars0.githubusercontent.com/u/35128?s=64&v=4",processIcon:"https://avatars3.githubusercontent.com/u/34447750?s=40&v=4"}},t._l(t.list,function(e,n){return i("f6-flow-item",{key:n},[i("p",[t._v(t._s(e.title))]),i("p",[t._v(t._s(e.content))])])}),1),i("f6-button",{staticStyle:{"margin-top":"10px"},attrs:{size:"mini"},on:{click:function(e){return t.handleNext("activeIndex3",4)}}},[t._v("下一步")])],1),i("div",{staticClass:"list"})])])};n._withStripped=!0;var s={data:function(){return{activeIndex1:1,activeIndex2:1,activeIndex3:1,list:[{title:"用户下单",content:"2018-12-21"},{title:"系统接单",content:"2018-12-22"},{title:"商家发货",content:"2018-12-23"},{title:"客户签收",content:"2018-12-24"}]}},methods:{handleNext:function(t,e){var i=this[t]+1;i>e&&(i=0),this[t]=i}}},c=i(12),a=Object(c.a)(s,n,[],!1,null,null,null);a.options.__file="packages/flow/demo/index.vue";e.default=a.exports}}]);