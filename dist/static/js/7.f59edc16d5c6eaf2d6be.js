webpackJsonp([7],{"5WaM":function(e,c){},"8/rz":function(e,c){},JnhQ:function(e,c,l){"use strict";var t={name:"ym-checkbox-group",props:{value:[Array],min:Number,max:Number,useCell:Boolean}},a={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"ym-checkbox-group"},[this._t("default")],2)},staticRenderFns:[]},o=l("VU/8")(t,a,!1,null,null,null).exports;o.install=function(e){e.component(o.name,o)};c.a=o},qoUc:function(e,c,l){"use strict";var t={name:"ym-checkbox",mixins:[l("IWtR").a],props:{label:[String,Object,Number],value:Boolean,disabled:Boolean,checkedColor:String,checkedLabelStyle:Object,labelLeft:Boolean,useCell:Boolean,clickable:Boolean},computed:{iconClass:function(){return this.isChecked?"ios-checkmark-circle":"ios-radio-button-off"},currentValue:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.label):this.value},set:function(e){this.parent?this.updateParentNodeValue(e):this.$emit("input",e)}},isChecked:function(){return!!this.currentValue},isDisabled:function(){if(this.parent){var e=this.parent.value.length;return this.disabled||e<this.parent.min||e>this.parent.max}return this.disabled},inputStyle:function(){return this.isChecked&&this.checkedColor?{color:this.checkedColor}:{}},lableStyle:function(){return this.checkedLabelStyle||{}}},methods:{updateParentNodeValue:function(e){var c=this.parent.value.slice(),l=this.parent.value.length,t=void 0!==this.parent.max,a=void 0!==this.parent.min;if(e)-1===c.indexOf(this.label)&&(t&&l<this.parent.max||!t)&&c.push(this.label);else if(a&&l>this.parent.min||!a){var o=c.indexOf(this.label);c.splice(o,1)}this.parent.$emit("input",c)},toggleValue:function(){this.disabled||(this.currentValue=!this.currentValue,this.$emit("click"))}},mounted:function(){this.findParent("ym-checkbox-group")}},a={render:function(){var e=this,c=e.$createElement,l=e._self._c||c;return l("label",{staticClass:"ym-checkbox",class:[{"ym-checkbox--cell":e.useCell,"ym-checkbox--checked":e.currentValue,"ym-checkbox--disabled":e.disabled,"ym-checkbox--label-left":e.labelLeft,"ym-checkbox--clickable":!e.disabled&&e.clickable}],on:{click:e.toggleValue}},[l("div",{staticClass:"ym-checkbox__input",style:e.inputStyle},[l("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"ym-checkbox__control",attrs:{type:"checkbox",disabled:e.disabled},domProps:{value:e.label,checked:Array.isArray(e.currentValue)?e._i(e.currentValue,e.label)>-1:e.currentValue},on:{change:function(c){var l=e.currentValue,t=c.target,a=!!t.checked;if(Array.isArray(l)){var o=e.label,s=e._i(l,o);t.checked?s<0&&(e.currentValue=l.concat([o])):s>-1&&(e.currentValue=l.slice(0,s).concat(l.slice(s+1)))}else e.currentValue=a}}}),e._v(" "),e._t("icon",[l("i",{staticClass:"ym-checkbox__icon ymuicon",class:e.iconClass})],{checked:e.currentValue})],2),e._v(" "),l("div",{staticClass:"ym-checkbox__label",style:e.lableStyle},[e._t("default",[l("span",{staticClass:"ym-checkbox__text",domProps:{textContent:e._s(e.label)}})])],2)])},staticRenderFns:[]};var o=l("VU/8")(t,a,!1,function(e){l("8/rz")},null,null).exports;o.install=function(e){e.component(o.name,o)};c.a=o},xYtC:function(e,c,l){"use strict";Object.defineProperty(c,"__esModule",{value:!0});l("IwWi");var t=l("xnKZ"),a=l("jyDz"),o=l("lkey"),s=l("t9vs"),i=l("qoUc"),n=l("JnhQ"),u={components:{Cell:t.a,Field:s.a,Button:o.a,Checkbox:i.a,CellGroup:a.a,CheckboxGroup:n.a},data:function(){return{checkboxGroupValue1:!0,checkboxGroupValue2:!1,checkboxGroupValue3:!0,checkboxGroupValue4:!1,checkboxGroupValue5:!0,groupValue1:["深圳"],groupValue2:["香蕉"],groupValue5:["香蕉"]}}},r={render:function(){var e=this,c=e.$createElement,l=e._self._c||c;return l("div",{staticClass:"page-checkbox"},[l("div",{staticClass:"checkbox-demo-01"},[l("div",{staticClass:"ym-doc-block__hd"},[e._v("基础用法")]),e._v(" "),l("div",{staticClass:"ym-doc-block__bd"},[l("Checkbox",{attrs:{label:"深圳"},model:{value:e.checkboxGroupValue1,callback:function(c){e.checkboxGroupValue1=c},expression:"checkboxGroupValue1"}})],1)]),e._v(" "),l("div",{staticClass:"checkbox-demo-02"},[l("div",{staticClass:"ym-doc-block__hd"},[e._v("文字在左边")]),e._v(" "),l("div",{staticClass:"ym-doc-block__bd"},[l("Checkbox",{attrs:{label:"深圳","label-left":!0},model:{value:e.checkboxGroupValue1,callback:function(c){e.checkboxGroupValue1=c},expression:"checkboxGroupValue1"}})],1)]),e._v(" "),l("div",{staticClass:"checkbox-demo-03"},[l("div",{staticClass:"ym-doc-block__hd"},[e._v("禁用状态")]),e._v(" "),l("div",{staticClass:"ym-doc-block__bd"},[l("Checkbox",{attrs:{label:"深圳",disabled:!0},model:{value:e.checkboxGroupValue4,callback:function(c){e.checkboxGroupValue4=c},expression:"checkboxGroupValue4"}}),e._v(" "),l("Checkbox",{attrs:{label:"深圳",disabled:!0},model:{value:e.checkboxGroupValue5,callback:function(c){e.checkboxGroupValue5=c},expression:"checkboxGroupValue5"}})],1)]),e._v(" "),l("div",{staticClass:"checkbox-demo-04"},[l("div",{staticClass:"ym-doc-block__hd"},[e._v("复选框组(最多选2个，最少选1个)")]),e._v(" "),l("div",{staticClass:"ym-doc-block__bd"},[l("CheckboxGroup",{attrs:{min:1,max:2},model:{value:e.groupValue1,callback:function(c){e.groupValue1=c},expression:"groupValue1"}},[l("Checkbox",{attrs:{label:"深圳"}}),e._v(" "),l("Checkbox",{attrs:{label:"珠海"}})],1),e._v(" "),l("p",[e._v(e._s(e.groupValue1))])],1)]),e._v(" "),l("div",{staticClass:"checkbox-demo-05"},[l("div",{staticClass:"ym-doc-block__hd"},[e._v("使用useCell")]),e._v(" "),l("div",{staticClass:"ym-doc-block__bd"},[l("CheckboxGroup",{model:{value:e.groupValue5,callback:function(c){e.groupValue5=c},expression:"groupValue5"}},[l("Checkbox",{attrs:{"use-cell":!0,"label-left":!0,label:"香蕉",clickable:""}}),e._v(" "),l("Checkbox",{attrs:{"use-cell":!0,"label-left":!0,label:"苹果",clickable:""}})],1)],1)]),e._v(" "),l("div",{staticClass:"checkbox-demo-06",staticStyle:{"margin-bottom":"10px"}},[l("div",{staticClass:"ym-doc-block__hd"},[e._v("更改Icon")]),e._v(" "),l("div",{staticClass:"ym-doc-block__bd"},[l("CheckboxGroup",{model:{value:e.groupValue5,callback:function(c){e.groupValue5=c},expression:"groupValue5"}},[l("Checkbox",{attrs:{"use-cell":!0,"label-left":!0,label:"香蕉",clickable:""},scopedSlots:e._u([{key:"icon",fn:function(c){return[c.checked?l("i",{staticClass:"ymuicon ios-checkmark",staticStyle:{"font-size":"32px"}}):e._e()]}}])}),e._v(" "),l("Checkbox",{attrs:{"use-cell":!0,"label-left":!0,label:"苹果",clickable:""},scopedSlots:e._u([{key:"icon",fn:function(c){return[c.checked?l("i",{staticClass:"ymuicon ios-checkmark",staticStyle:{"font-size":"32px"}}):e._e()]}}])})],1)],1)])])},staticRenderFns:[]};var b=l("VU/8")(u,r,!1,function(e){l("5WaM")},"data-v-3b0000a8",null);c.default=b.exports}});
//# sourceMappingURL=7.f59edc16d5c6eaf2d6be.js.map