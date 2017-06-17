!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VuePopup=e():t.VuePopup=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=3)}([function(t,e){t.exports={bind:function(t,e,i){var n=i.context.$refs[e.arg],o={el:t,value:e.value};n.$refs.reference instanceof Array?n.$refs.reference.push(o):n.$refs.reference=[o]}}},function(t,e,i){var n=i(4)(i(2),i(5),null,null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Popup",props:{appendToBody:{type:Boolean,default:!0},arrowClass:String,direction:{type:String,default:"bottom"},display:{type:Boolean,default:!1},padding:{type:Number,default:0}},data:function(){return{arrowStyle:{},directionMap:{top:"height",left:"width"},secondDirection:"",left:0,top:0,currentElement:null}},computed:{directionClass:function(){return""===this.secondDirection?"popup-"+this.direction:"popup-"+this.secondDirection}},mounted:function(){var t=this;this.appendToBody&&document.body.appendChild(this.$el),this.$refs.reference.forEach(function(e){e.el.addEventListener("mouseenter",t.handleMouseEnter.bind(t,e.value)),e.el.addEventListener("mouseleave",t.handleMouseLeave.bind(t,e.value)),t.bindScroll(e.el)}),this.$el.addEventListener("mouseenter",function(){t.$emit("update:display",!0)}),this.$el.addEventListener("mouseleave",function(){t.$emit("update:display",!1)})},methods:{bindScroll:function(t){for(t=t.parentNode;t;)t.addEventListener("scroll",this.handleScroll),t=t.parentNode},computePosition:function(t,e){t=t.getBoundingClientRect(),e=e.getBoundingClientRect();var i=0,n=0,o=e.top-t.height-this.padding,r=e.left+e.width+this.padding,s=e.top+e.height+this.padding,d=e.left-t.width-this.padding;"top"===this.direction||"bottom"===this.direction?(i=e.left+(e.width-t.width)/2,i<0?(i=0,this.arrowStyle={left:(e.left+e.right)/2+"px"}):i+t.width>window.innerWidth?(i=window.innerWidth-t.width,this.arrowStyle={left:(e.left+e.right)/2-i+"px"}):delete this.arrowStyle.left,"top"===this.direction?o<0&&s+t.height<=window.innerHeight?(n=s,this.secondDirection="bottom"):(n=o,this.secondDirection=""):s+t.height>window.innerHeight&&o>=0?(n=o,this.secondDirection="top"):(n=s,this.secondDirection="")):"left"!==this.direction&&"right"!==this.direction||(n=e.top+(e.height-t.height)/2,n<0?(n=0,this.arrowStyle={top:(e.top+e.bottom)/2+"px"}):n+t.height>window.innerHeight?(n=window.innerHeight-t.height,this.arrowStyle={top:(e.top+e.bottom)/2-n+"px"}):delete this.arrowStyle.top,"left"===this.direction?d<0&&r+t.width<=window.innerWidth?(i=r,this.secondDirection="right"):(i=d,this.secondDirection=""):r+t.width>window.innerWidth&&d>=0?(i=d,this.secondDirection="left"):(i=r,this.secondDirection="")),this.top=n,this.left=i},handleMouseEnter:function(t,e){var i=this;this.currentElement=e.target,this.$emit("update:display",!0),this.$emit("show",t),this.$nextTick(function(){i.computePosition(i.$el,e.target)})},handleMouseLeave:function(t,e){this.$emit("update:display",!1),this.$emit("hide",t)},handleScroll:function(){this.display&&this.computePosition(this.$el,this.currentElement)},isDirectionLine:function(t){return"top"===t||"bottom"===t?"top"===this.direction||"bottom"===this.direction:"left"===this.direction||"right"===this.direction}}}},function(t,e,i){var n=i(0),o=i(1);o.install=function(t){t.directive("popup",n),t.component(o.name,o)},t.exports=o},function(t,e){t.exports=function(t,e,i,n,o){var r,s=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(r=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),n&&(c._scopeId=n);var l;if(o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):i&&(l=i),l){var a=c.functional,p=a?c.render:c.beforeCreate;a?c.render=function(t,e){return l.call(e),p(t,e)}:c.beforeCreate=p?[].concat(p,l):[l]}return{esModule:r,exports:s,options:c}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.directionClass,style:{display:t.display?"block":"none",left:t.left+"px",top:t.top+"px"}},[t._t("default"),t._v(" "),i("span",{staticClass:"popup-arrow",class:t.arrowClass,style:t.arrowStyle})],2)},staticRenderFns:[]}}])});