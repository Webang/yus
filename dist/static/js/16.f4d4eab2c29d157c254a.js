webpackJsonp([16],{Kegi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("xnKZ"),s=n("jyDz"),i={name:"ym-actionsheet",components:{Backdrop:n("aOWK").a},props:{value:Boolean,title:String,cancelText:String,showCancel:Boolean,menus:{type:[Object,Array],default:function(){return{}}},closeOnClickMenu:{type:Boolean,default:!0},closeOnClickBackdrop:{type:Boolean,default:!0}},data:function(){return{show:!1,hasHeaderSlot:!1}},watch:{show:function(t){console.log(t)},value:{handler:function(t){this.show=t},immediate:!0}},methods:{onTransitionEnd:function(t){this.$refs.menuWrapper===t.target&&this.$emit(this.show?"on-after-show":"on-after-hide")},onBackdropClick:function(){this.$emit("on-click-backdrop"),this.closeOnClickBackdrop&&this.$emit("input",!1)},onMenuItemClick:function(t,e){t.disabled||(this.$emit("on-menu-click",t,e),this.closeOnClickMenu&&this.$emit("input",!1))},onCancelClick:function(){this.$emit("input",!1)}},mounted:function(){var t=this;this.hasHeaderSlot=!!this.$slots.header,this.$nextTick(function(){t.$refs.menuWrapper.addEventListener("transitionend",t.onTransitionEnd)})},beforeDestroy:function(){this.$refs.menuWrapper.removeEventListener("transitionend",this.onTransitionEnd)}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ym-actionsheet"},[n("Backdrop",{attrs:{value:t.value},on:{click:t.onBackdropClick}}),t._v(" "),n("div",{ref:"menuWrapper",staticClass:"ym-actionsheet__content",class:{"ym-actionsheet__content--show":t.value}},[!t.hasHeaderSlot&&t.title?n("div",{staticClass:"ym-actionsheet__head ym-actionsheet__cell"},[n("span",[t._v(t._s(t.title))])]):t._e(),t._v(" "),t.hasHeaderSlot?n("div",{staticClass:"ym-actionsheet__head ym-actionsheet__cell"},[t._t("header")],2):t._e(),t._v(" "),n("div",{staticClass:"ym-actionsheet__menu"},[t._l(t.menus,function(e,o){return n("div",{key:o,staticClass:"ym-actionsheet__cell",class:{"ym-actionsheet__cell--disabled":e.disabled},on:{click:function(n){t.onMenuItemClick(e,o)}}},[n("span",[t._v(t._s(e.text))])])}),t._v(" "),t.showCancel?n("div",{staticClass:"ym-actionsheet__cell ym-actionsheet__cancel",on:{click:t.onCancelClick}},[n("span",[t._v(t._s(t.cancelText||"取消"))])]):t._e()],2)])],1)},staticRenderFns:[]};var a=n("C7Lr")(i,l,!1,function(t){n("RSlr")},null,null).exports;a.install=function(t){t.component(a.name,a)};var c=a,r={components:{Cell:o.a,CellGroup:s.a,Actionsheet:c},data:function(){return{option1:{show:!1,title:"选择图片来源",showCancel:!0,menus:[{text:"从相册中选择"},{text:"从相机中选择"}]},option2:{show:!1,title:"选择图片来源",showCancel:!0,menus:[{text:"从相册中选择",disabled:!0},{text:"从相机中选择"}]},option3:{show:!1,title:"选择图片来源",showCancel:!0,menus:[{text:"从相册中选择",disabled:!0},{text:"从相机中选择"}]}}},methods:{onMenuClick:function(t,e){console.log(t,e)},handleAfterShow:function(){console.log("handleAfterShow")},handleAfterHide:function(){console.log("handleAfterHide")}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-actionsheet"},[n("div",{staticClass:"ym-doc-block"},[n("div",{staticClass:"ym-doc-block__title"},[t._v("基本用法")]),t._v(" "),n("div",{staticClass:"ym-doc-block__content list"},[n("CellGroup",[n("Cell",{attrs:{title:"警用选项"}},[n("button",{attrs:{slot:"value"},on:{click:function(e){t.option2.show=!t.option2.show}},slot:"value"},[t._v("切换")])]),t._v(" "),n("Cell",{attrs:{title:"自定义标题"}},[n("button",{attrs:{slot:"value"},on:{click:function(e){t.option3.show=!t.option3.show}},slot:"value"},[t._v("切换")])]),t._v(" "),n("Cell",{attrs:{title:"点击幕布不关闭"}},[n("button",{attrs:{slot:"value"},on:{click:function(e){t.option1.show=!t.option1.show}},slot:"value"},[t._v("切换")])])],1)],1)]),t._v(" "),n("Actionsheet",{attrs:{menus:t.option1.menus,title:t.option1.title,showCancel:t.option1.showCancel,"close-on-click-backdrop":!1,"close-on-click-menu":!1},on:{"on-menu-click":t.onMenuClick},model:{value:t.option1.show,callback:function(e){t.$set(t.option1,"show",e)},expression:"option1.show"}}),t._v(" "),n("Actionsheet",{attrs:{menus:t.option2.menus,title:t.option2.title,showCancel:t.option2.showCancel},model:{value:t.option2.show,callback:function(e){t.$set(t.option2,"show",e)},expression:"option2.show"}}),t._v(" "),n("Actionsheet",{attrs:{menus:t.option3.menus,title:t.option3.title,showCancel:t.option3.showCancel},on:{"on-after-show":t.handleAfterShow,"on-after-hide":t.handleAfterHide},model:{value:t.option3.show,callback:function(e){t.$set(t.option3,"show",e)},expression:"option3.show"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("div",[n("p",[t._v("I Miss You")]),t._v(" "),n("p",[t._v("idiot")])])])])],1)},staticRenderFns:[]},u=n("C7Lr")(r,h,!1,null,null,null);e.default=u.exports},RSlr:function(t,e){}});
//# sourceMappingURL=16.f4d4eab2c29d157c254a.js.map