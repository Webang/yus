webpackJsonp([2],{"9mVz":function(t,i){},Cazp:function(t,i){},EE9j:function(t,i){},JOlX:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n("o8IH"),o=n("xnKZ"),a=n("jyDz"),s=n("aOWK"),l={name:"ym-confirm",components:{Xdialog:n("zXdF").a,Backdrop:s.a},props:{value:Boolean,closeOnClickBackdrop:{type:Boolean,default:!0},title:String,content:String,"confirm-button-text":{type:String,default:"确定"},"cancle-button-text":{type:String,default:"取消"}},data:function(){return{visible:!1}},watch:{value:function(t){this.visible=t},visible:function(t){this.$emit("input",t)}},methods:{OnClickBackdrop:function(){this.closeOnClickBackdrop&&this.hide(),this.$emit("on-click-backdrop")},hide:function(){this.visible=!1},onCancleClick:function(){this.$emit("on-cancle")},onConfirmClick:function(){this.$emit("on-confirm")}},created:function(){this.visible=!!this.value}},c={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"ym-confirm"},[n("Xdialog",{staticClass:"ym-confirm__content",on:{"on-click-backdrop":t.OnClickBackdrop},model:{value:t.visible,callback:function(i){t.visible=i},expression:"visible"}},[t.title?n("div",{staticClass:"ym-dialog__hd"},[n("strong",{staticClass:"ym-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),n("div",{staticClass:"ym-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"ym-dialog__ft"},[n("a",{staticClass:"ym-dialog__btn",domProps:{textContent:t._s(t.cancleButtonText)},on:{click:t.onCancleClick}}),t._v(" "),n("a",{staticClass:"ym-dialog__btn ym-dialog__btn_primary",domProps:{textContent:t._s(t.confirmButtonText)},on:{click:t.onConfirmClick}})])])],1)},staticRenderFns:[]};var r=n("VU/8")(l,c,!1,function(t){n("9mVz")},null,null).exports;r.install=function(t){t.component(r.name,r)};var d=r,u=n("IwWi"),m={components:{Alert:e.a,Cell:o.a,CellGroup:a.a,Confirm:d},data:function(){return{demo1:{show:!1,title:"系统提示",showCancel:!0}}},methods:{onCancle:function(){Object(u.a)({message:"您选择了取消"}),this.demo1.show=!1},onConfirm:function(){Object(u.a)({message:"您选择了确定"}),this.demo1.show=!1}}},v={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"page-alert"},[n("div",{staticClass:"ym-doc-block"},[n("div",{staticClass:"ym-doc-block__title"},[t._v("基本用法")]),t._v(" "),n("div",{staticClass:"ym-doc-block__content list"},[n("CellGroup",[n("Cell",{attrs:{title:"基本用法"}},[n("button",{attrs:{slot:"value"},on:{click:function(i){t.demo1.show=!t.demo1.show}},slot:"value"},[t._v("切换")])])],1)],1)]),t._v(" "),n("Confirm",{attrs:{title:t.demo1.title},on:{"on-cancle":t.onCancle,"on-confirm":t.onConfirm},model:{value:t.demo1.show,callback:function(i){t.$set(t.demo1,"show",i)},expression:"demo1.show"}},[n("p",[t._v("确认要退出登录吗？")])])],1)},staticRenderFns:[]};var f=n("VU/8")(m,v,!1,function(t){n("EE9j")},"data-v-05170516",null);i.default=f.exports},Knx6:function(t,i){},o8IH:function(t,i,n){"use strict";var e=n("aOWK"),o={name:"ym-alert",components:{Xdialog:n("zXdF").a,Backdrop:e.a},props:{value:Boolean,closeOnClickBackdrop:{type:Boolean,default:!0},title:String,content:String,buttonText:{type:String,default:"确定"}},data:function(){return{visible:!1}},watch:{value:function(t){this.visible=t},visible:function(t){this.$emit("input",t)}},methods:{OnClickBackdrop:function(){this.closeOnClickBackdrop&&this.hide(),this.$emit("on-click-backdrop")},hide:function(){this.visible=!1}},created:function(){this.visible=!!this.value}},a={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"ym-alert"},[n("Xdialog",{staticClass:"ym-alert__content",on:{"on-click-backdrop":t.OnClickBackdrop},model:{value:t.visible,callback:function(i){t.visible=i},expression:"visible"}},[t.title?n("div",{staticClass:"ym-dialog__hd"},[n("strong",{staticClass:"ym-dialog__title"},[t._v(t._s(t.title))])]):t._e(),t._v(" "),n("div",{staticClass:"ym-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"ym-dialog__ft"},[n("a",{staticClass:"ym-dialog__btn ym-dialog__btn_primary",on:{click:t.hide}},[t._v(t._s(t.buttonText))])])])],1)},staticRenderFns:[]};var s=n("VU/8")(o,a,!1,function(t){n("Knx6")},null,null).exports;s.install=function(t){t.component(s.name,s)};i.a=s},zXdF:function(t,i,n){"use strict";var e={name:"ym-dialog",components:{Backdrop:n("aOWK").a},props:{value:Boolean,backdropTransition:{type:String,default:"ym-backdrop"},dialogTransition:{type:String,default:"ym-dialog"}},data:function(){return{visible:!1}},watch:{value:function(t){this.visible=t},visible:function(t){this.$emit("input",t)}},methods:{onClickBackdrop:function(){this.$emit("on-click-backdrop")},hide:function(){this.visible=!1}},created:function(){this.visible=!!this.value}},o={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("Backdrop",{attrs:{transition:this.backdropTransition,value:this.value},on:{click:this.onClickBackdrop}}),this._v(" "),i("transition",{attrs:{name:this.dialogTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:this.value,expression:"value"}],staticClass:"ym-dialog"},[this._t("default")],2)])],1)},staticRenderFns:[]};var a=n("VU/8")(e,o,!1,function(t){n("Cazp")},null,null).exports;a.install=function(t){t.component(a.name,a)};i.a=a}});
//# sourceMappingURL=2.c4fa3d44bcf70afddc11.js.map