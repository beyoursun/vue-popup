!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VuePopup=e():t.VuePopup=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=3)}([function(t,e){t.exports={inserted:function(t,e,i){var n=i.context.$refs[e.arg];n&&n.addItem({el:t,value:e.value})},unbind:function(t,e,i){var n=i.context.$refs[e.arg];n&&n.removeItem({el:t,value:e.value})}}},function(t,e,i){var n=i(4)(i(2),i(5),null,null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Popup",props:{appendToBody:{type:Boolean,default:!0},arrowClass:String,direction:{type:String,default:"bottom"},display:{type:Boolean,default:!1},padding:{type:Number,default:0},trigger:{type:String,default:"hover"},scrollShow:{type:Boolean,default:!0}},data:function(){return{arrowStyle:{},delay:100,directionMap:{top:"height",left:"width"},secondDirection:"",left:0,top:0,currentElement:null,willHide:!1}},computed:{directionClass:function(){var t=/(top)|(bottom)|(left)|(right)/i,e=t.exec(this.direction)||[],i=this.secondDirection?t.exec(this.secondDirection)[0]:"",n=e[0]||"";return""===i?"popup-"+n:"popup-"+i},triggerEvent:function(){switch(this.trigger){case"hover":return"mouseenter";case"focus":return"focus";case"click":return"click"}},unTriggerEl:function(){return"click"===this.trigger?document:this.$el},unTriggerEvent:function(){switch(this.trigger){case"hover":return"mouseleave";case"focus":return"blur";case"click":return"click"}}},mounted:function(){this.appendToBody&&document.body.appendChild(this.$el),this.$el.addEventListener(this.triggerEvent,this.handlePopupVisible),this.unTriggerEl.addEventListener(this.unTriggerEvent,this.handlePopupInvisible)},beforeDestroy:function(){this.$el.removeEventListener(this.triggerEvent,this.handlePopupVisible),this.unTriggerEl.removeEventListener(this.unTriggerEvent,this.handlePopupInvisible)},destroyed:function(){this.appendToBody&&this.$el&&document.body.hasChildNodes(this.$el)&&document.body.removeChild(this.$el)},methods:{addItem:function(t){t.el.handleVisible=this.handleVisible.bind(this,t.value,t.el),t.el.addEventListener(this.triggerEvent,t.el.handleVisible),"click"!==this.trigger&&(t.el.handleInvisible=this.handleInvisible.bind(this,t.value),t.el.addEventListener(this.unTriggerEvent,t.el.handleInvisible)),this.bindScroll(t.el)},removeItem:function(t){t.el.removeEventListener(this.triggerEvent,t.el.handleVisible),"click"!==this.trigger&&t.el.removeEventListener(this.unTriggerEvent,t.el.handleInvisible),this.unbindScroll(t.el)},bindScroll:function(t){for(t=t.parentNode;t;)t.addEventListener("scroll",this.handleScroll),t=t.parentNode},unbindScroll:function(t){for(t=t.parentNode;t;)t.removeEventListener("scroll",this.handleScroll),t=t.parentNode},computePosition:function(t,e){t=t.getBoundingClientRect(),e=e.getBoundingClientRect();var i=0,n=0,o=e.top-t.height-this.padding,r=e.left+e.width+this.padding,s=e.top+e.height+this.padding,l=e.left-t.width-this.padding,h=/(top)|(bottom)/i,d=/(left)|(right)/i;h.test(this.direction)?(i=e.left+(e.width-t.width)/2,"bottomStart"!==this.direction&&"topStart"!==this.direction||(i=e.left),"bottomEnd"!==this.direction&&"topEnd"!==this.direction||(i=e.left-t.width+e.width),i<0?(i=0,this.arrowStyle={left:(e.left+e.right)/2+"px"}):i+t.width>window.innerWidth?(i=window.innerWidth-t.width,this.arrowStyle={left:(e.left+e.right)/2-i+"px"}):this.arrowStyle={left:(e.left+e.right)/2-i+"px"},"top"===this.direction||"topStart"===this.direction||"topEnd"===this.direction?o<0&&s+t.height<=window.innerHeight?(n=s,this.secondDirection="bottom","topStart"===this.direction&&(this.secondDirection="bottomStart",this.arrowStyle={left:(e.left+e.right)/2-i+"px"}),"topEnd"===this.direction&&(this.secondDirection="bottomEnd",this.arrowStyle={left:(e.left+e.right)/2-i+"px"})):(n=o,this.secondDirection="",this.arrowStyle={left:(e.left+e.right)/2-i+"px"}):s+t.height>window.innerHeight&&o>=0?(n=o,this.secondDirection="top","bottomStart"===this.direction&&(this.secondDirection="topStart",this.arrowStyle={left:(e.left+e.right)/2-i+"px"}),"bottomEnd"===this.direction&&(this.secondDirection="topEnd",this.arrowStyle={left:(e.left+e.right)/2-i+"px"})):(n=s,this.secondDirection="",this.arrowStyle={left:(e.left+e.right)/2-i+"px"})):d.test(this.direction)&&(n=e.top+(e.height-t.height)/2,"leftStart"!==this.direction&&"rightStart"!==this.direction||(n=e.top),"leftEnd"!==this.direction&&"rightEnd"!==this.direction||(n=e.top-t.height+e.height),n<0?(n=0,this.arrowStyle={top:(e.top+e.bottom)/2+"px"}):n+t.height>window.innerHeight?(n=window.innerHeight-t.height,this.arrowStyle={top:(e.top+e.bottom)/2-n+"px"}):this.arrowStyle={top:(e.top+e.bottom)/2-n+"px"},"left"===this.direction||"leftStart"===this.direction||"leftEnd"===this.direction?l<0&&r+t.width<=window.innerWidth?(i=r,this.secondDirection="right","leftStart"===this.direction&&(this.secondDirection="rightStart",this.arrowStyle={top:(e.top+e.bottom)/2-n+"px"}),"leftEnd"===this.direction&&(this.secondDirection="rightEnd",this.arrowStyle={top:(e.top+e.bottom)/2-n+"px"})):(i=l,this.secondDirection="",this.arrowStyle={top:(e.top+e.bottom)/2-n+"px"}):r+t.width>window.innerWidth&&l>=0?(i=l,this.secondDirection="left","rightStart"===this.direction&&(this.secondDirection="leftStart",this.arrowStyle={top:(e.top+e.bottom)/2-n+"px"}),"rightEnd"===this.direction&&(this.secondDirection="leftEnd",this.arrowStyle={top:(e.top+e.bottom)/2-n+"px"})):(i=r,this.secondDirection="",this.arrowStyle={top:(e.top+e.bottom)/2-n+"px"})),this.top=n,this.left=i},handleVisible:function(t,e,i){var n=this;this.willHide=!1,this.currentElement=e,"click"===this.trigger?(this.$emit("update:display",!this.display),this.$emit(this.display?"hide":"show",t)):(this.$emit("update:display",!0),this.$emit("show",t)),this.$nextTick(function(){n.computePosition(n.$el,n.currentElement)})},handleInvisible:function(t,e){var i=this;"click"===this.trigger?(this.$emit("update:display",!1),this.$emit("hide",t)):(this.willHide=!0,setTimeout(function(){i.willHide&&(i.$emit("update:display",!1),i.$emit("hide",t))},this.delay))},handleScroll:function(){this.scrollShow?this.display&&this.computePosition(this.$el,this.currentElement):(this.$emit("update:display",!1),this.$emit("hide"))},handlePopupVisible:function(t){t.stopPropagation(),this.willHide=!1,this.$emit("update:display",!0),this.$emit("show",this.value)},handlePopupInvisible:function(t){var e=this;"click"===this.trigger&&this.isClosest(t.target,this.currentElement)||("click"===this.trigger?(this.$emit("update:display",!1),this.$emit("hide",this.value)):(this.willHide=!0,setTimeout(function(){e.willHide&&(e.$emit("update:display",!1),e.$emit("hide",e.value))},this.delay)))},show:function(t,e){this.handleVisible(e,t)},hide:function(){this.handleInvisible()},isDirectionLine:function(t){return"top"===t||"bottom"===t?"top"===this.direction||"bottom"===this.direction:"left"===this.direction||"right"===this.direction},isClosest:function(t,e){return t!==document&&(t===e||this.isClosest(t.parentNode,e))}}}},function(t,e,i){var n=i(0),o=i(1);o.install=function(t){t.directive("popup",n),t.component(o.name,o)},t.exports=o},function(t,e){t.exports=function(t,e,i,n,o){var r,s=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(r=t,s=t.default);var h="function"==typeof s?s.options:s;e&&(h.render=e.render,h.staticRenderFns=e.staticRenderFns),n&&(h._scopeId=n);var d;if(o?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},h._ssrRegister=d):i&&(d=i),d){var c=h.functional,a=c?h.render:h.beforeCreate;c?h.render=function(t,e){return d.call(e),a(t,e)}:h.beforeCreate=a?[].concat(a,d):[d]}return{esModule:r,exports:s,options:h}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.directionClass,style:{display:t.display?"block":"none",left:t.left+"px",top:t.top+"px"},attrs:{tabindex:"999"}},[t._t("default"),t._v(" "),i("span",{staticClass:"popup-arrow",class:t.arrowClass,style:t.arrowStyle})],2)},staticRenderFns:[]}}])});