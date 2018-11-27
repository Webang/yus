webpackJsonp([9],{OZoq:function(t,e){},fQyn:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"ym-slider",props:{value:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:100},"track-height":{type:Number,default:2},step:{type:Number,default:1},disabled:{type:Boolean,default:!1}},data:function(){return{startPoint:null,movePoint:null,runWidth:0,points:[]}},computed:{ratio:function(){var t=this.value;return((t=(t=t>this.max?this.max:t)<this.min?this.min:t)-this.min)/(this.max-this.min)*100+"%"},contentStyle:function(){return{height:this.trackHeight+"px"}}},methods:{getRect:function(t){return t.getBoundingClientRect()},onTouchStart:function(t){var e=t.changedTouches[0];this.disabled||(this.startPoint=e,this.trackRect=this.getRect(this.$refs.track),this.contentRect=this.getRect(this.$refs.content))},onTouchMove:function(t){var e=t.changedTouches[0];if(!this.disabled){var a=e.pageX-this.startPoint.pageX,s=(this.trackRect.width+a)/this.contentRect.width,i=(s=(s=s<0?0:s)>1?1:s)*(this.max-this.min)+this.min;this.movePoint=e,this.$emit("input",Math.round(i))}},onTouchEnd:function(t){this.disabled||(this.startPoint=null)}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ym-slider",class:[{"ym-slider--disabled":t.disabled}]},[t.$slots.start?a("div",{staticClass:"ym-slider__hd"},[t._t("start")],2):t._e(),t._v(" "),a("div",{ref:"content",staticClass:"ym-slider__bd",style:t.contentStyle},[a("div",{ref:"runway",staticClass:"ym-slider__runway"}),t._v(" "),a("div",{ref:"track",staticClass:"ym-slider__track",style:{width:t.ratio}}),t._v(" "),a("div",{staticClass:"ym-slider__thumb",style:{left:t.ratio},on:{touchstart:t.onTouchStart,touchmove:t.onTouchMove,touchend:t.onTouchEnd}})]),t._v(" "),t.$slots.end?a("div",{staticClass:"ym-slider__ft"},[t._t("end")],2):t._e()])},staticRenderFns:[]};var n=a("C7Lr")(s,i,!1,function(t){a("OZoq")},null,null).exports;n.install=function(t){t.component(n.name,Range)};var d={components:{Slider:n},data:function(){return{d1:{min:50,max:100,value:60,trackHeight:2,disabled:!1},d2:{min:50,max:100,value:70,trackHeight:2,disabled:!0},d3:{min:50,max:100,value:80,trackHeight:2,disabled:!1},d4:{min:100,max:200,value:160,trackHeight:2,disabled:!1}}},methods:{setRangeValue:function(t){var e=parseInt(t.target.value);isNaN(e)&&(e=0),this.rangeValue1=e}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page page-progress"},[a("div",{staticClass:"ym-doc-title"},[t._v("基础用法("+t._s(t.d1.value)+")")]),t._v(" "),a("div",{staticClass:"ym-doc-content"},[a("Slider",{attrs:{"track-height":t.d1.trackHeight,max:t.d1.max,min:t.d1.min},model:{value:t.d1.value,callback:function(e){t.$set(t.d1,"value",e)},expression:"d1.value"}})],1),t._v(" "),a("div",{staticClass:"ym-doc-title"},[t._v("禁用状态("+t._s(t.d2.value)+")")]),t._v(" "),a("div",{staticClass:"ym-doc-content"},[a("Slider",{attrs:{"track-height":t.d2.trackHeight,max:t.d2.max,min:t.d2.min,disabled:t.d2.disabled},model:{value:t.d2.value,callback:function(e){t.$set(t.d2,"value",e)},expression:"d2.value"}})],1),t._v(" "),a("div",{staticClass:"ym-doc-title"},[t._v("设置start和end("+t._s(t.d3.value)+")")]),t._v(" "),a("div",{staticClass:"ym-doc-content"},[a("Slider",{attrs:{"track-height":t.d3.trackHeight,max:t.d3.max,min:t.d3.min,disabled:t.d3.disabled},model:{value:t.d3.value,callback:function(e){t.$set(t.d3,"value",e)},expression:"d3.value"}},[a("span",{staticClass:"number",attrs:{slot:"start"},slot:"start"},[t._v(t._s(t.d3.min))]),t._v(" "),a("span",{staticClass:"number",attrs:{slot:"end"},slot:"end"},[t._v(t._s(t.d3.max))])])],1),t._v(" "),a("div",{staticClass:"ym-doc-title"},[t._v("设置区间("+t._s(t.d4.value)+")")]),t._v(" "),a("div",{staticClass:"ym-doc-content"},[a("Slider",{attrs:{"track-height":t.d4.trackHeight,max:t.d4.max,min:t.d4.min,disabled:t.d4.disabled},model:{value:t.d4.value,callback:function(e){t.$set(t.d4,"value",e)},expression:"d4.value"}},[a("span",{staticClass:"number",attrs:{slot:"start"},slot:"start"},[t._v(t._s(t.d4.min))]),t._v(" "),a("span",{staticClass:"number",attrs:{slot:"end"},slot:"end"},[t._v(t._s(t.d4.max))])])],1)])},staticRenderFns:[]};var r=a("C7Lr")(d,l,!1,function(t){a("s8Ly")},"data-v-b69d3682",null);e.default=r.exports},s8Ly:function(t,e){}});
//# sourceMappingURL=9.dfc9c10b4c9d3f0d9ce6.js.map