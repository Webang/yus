(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,n){var a=n(165);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(16)(a,o);a.locals&&(e.exports=a.locals)},164:function(e,t,n){"use strict";var a=n(141);n.n(a).a},165:function(e,t,n){(e.exports=n(14)(!1)).push([e.i,".demo-welcome[data-v-6f3fa7ca] {\n  padding: 12px;\n}\n.item[data-v-6f3fa7ca] {\n  margin-bottom: 10px;\n}\n.floor-cells[data-v-6f3fa7ca] {\n  margin-top: 50px;\n}\n",""])},212:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-welcome"},[n("div",{staticClass:"floor-cells"},[n("yus-accordion",{attrs:{value:e.menu[0].groupName,accordion:""}},e._l(e.menu,function(t,a){return n("yus-accordion-item",{key:a,staticClass:"item",attrs:{header:t.groupName,name:t.groupName}},e._l(t.list,function(t,a){return n("yus-cell",{key:a,attrs:{title:e.uppercamelize(t.name)+" "+t.cName,"is-link":""},on:{click:function(n){return e.switchPage(t.name)}}})}),1)}),1)],1)])};a._withStripped=!0;var o=n(8),i={data:function(){return{menu:o.a}},methods:{uppercamelize:n(18),switchPage:function(e){this.$router.push(e)}}},r=(n(164),n(13)),c=Object(r.a)(i,a,[],!1,null,"6f3fa7ca",null);c.options.__file="docs/mobile/views/welcome.vue";t.default=c.exports}}]);