(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2383d6ae"],{"0789":function(t,e,r){"use strict";var i=r("80d2"),n=r("ade3"),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e?"width":"height",a="offset".concat(Object(i["r"])(r));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(n["a"])({transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow},r,t.style[r])},enter:function(e){var i=e._initialStyle,n="".concat(e[a],"px");e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=i.visibility,e.style.overflow="hidden",e.style[r]="0",e.offsetHeight,e.style.transition=i.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[r]=n}))},afterEnter:o,enterCancelled:o,leave:function(t){t._initialStyle=Object(n["a"])({transition:"",visibility:"",overflow:t.style.overflow},r,t.style[r]),t.style.overflow="hidden",t.style[r]="".concat(t[a],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[r]="0"}))},afterLeave:s,leaveCancelled:s};function s(e){t&&e._parent&&e._parent.classList.remove(t),o(e)}function o(t){var e=t._initialStyle[r];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[r]=e),delete t._initialStyle}};r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return c}));Object(i["i"])("carousel-transition"),Object(i["i"])("carousel-reverse-transition"),Object(i["i"])("tab-transition"),Object(i["i"])("tab-reverse-transition"),Object(i["i"])("menu-transition"),Object(i["i"])("fab-transition","center center","out-in"),Object(i["i"])("dialog-transition"),Object(i["i"])("dialog-bottom-transition");var s=Object(i["i"])("fade-transition"),o=(Object(i["i"])("scale-transition"),Object(i["i"])("scroll-x-transition"),Object(i["i"])("scroll-x-reverse-transition"),Object(i["i"])("scroll-y-transition"),Object(i["i"])("scroll-y-reverse-transition"),Object(i["i"])("slide-x-transition")),c=(Object(i["i"])("slide-x-reverse-transition"),Object(i["i"])("slide-y-transition"),Object(i["i"])("slide-y-reverse-transition"),Object(i["g"])("expand-transition",a()));Object(i["g"])("expand-x-transition",a("",!0))},"615b":function(t,e,r){},"6ece":function(t,e,r){},"7a74":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{staticClass:"blue-grey darken-4",attrs:{padless:""}},[r("v-container",{staticClass:"pa-0 d-flex-column text-center"},[r("v-card",{staticClass:"transparent",attrs:{flat:"",tile:""}},[r("v-card-subtitle",{staticClass:"px-2 pt-2 pb-0 white--text"},[t._v("Contact:")]),r("v-card-text",{staticClass:"overline px-2 pb-1 white--text",domProps:{innerHTML:t._s(t.agent)}}),r("v-card-text",{staticClass:"overline px-2 py-1 white--text",domProps:{innerHTML:t._s(t.contact)}}),0!==t.icons.length?r("v-card-actions",{staticClass:"pa-2 pt-1 d-flex justify-center"},t._l(t.icons,(function(e,i){return r("v-btn",{key:i,staticClass:"ma-0",attrs:{icon:"","x-small":""}},[r("v-icon",{domProps:{textContent:t._s(e)}})],1)})),1):t._e(),r("v-divider",{staticClass:"white my-2",staticStyle:{width:"37.5%",margin:"auto"}}),r("v-card-text",{staticClass:"overline pa-2 pt-1 white--text",domProps:{innerHTML:t._s(t.copyright)}})],1)],1)],1)},n=[],a=(r("0d03"),{name:"Footer",data:function(){return{icons:[],agent:"Cam Talent Agency<br/>1350 W 5th Ave #25<br/>Columbus, OH 43212",contact:'<a href="tel:7402745583" style="color:white; text-decoration:none;">(740) 274-5583</a><br/><a style="color:white; text-decoration:none;" href="mailto:nigelsalvador@gmail.com">nigelsalvador@gmail.com</a>',copyright:"Website built with <a target='_blank' href='https://vuejs.org/' style=\"color:white;\">Vue.js</a> &amp; <a target='_blank' href='https://vuetifyjs.com/en/' style=\"color:white;\">Vuetify</a><br/>Copyright &copy; ".concat((new Date).getFullYear(),"<br/>Nigel Salvador, Actor & Entrepreneur")}}}),s=a,o=r("2877"),c=r("6544"),l=r.n(c),u=r("8336"),d=r("b0af"),h=r("99d9"),f=r("a523"),p=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),b=(r("8ce9"),r("7560"));function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function g(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(p["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var y=b["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:g({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:g({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),m=(r("a9e3"),r("e25e"),r("c7cd"),r("b5b6"),r("3a66")),O=r("8dd9"),j=r("d10f"),_=r("58df"),w=r("80d2");function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){Object(p["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var x=Object(_["a"])(O["a"],Object(m["a"])("footer",["height","inset"]),j["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return P({},O["a"].options.computed.classes.call(this),{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return P({},O["a"].options.computed.styles.call(this),{height:isNaN(t)?t:Object(w["f"])(t),left:Object(w["f"])(this.computedLeft),right:Object(w["f"])(this.computedRight),bottom:Object(w["f"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}}),B=r("132d"),k=Object(o["a"])(s,i,n,!1,null,"78c7b119",null);e["default"]=k.exports;l()(k,{VBtn:u["a"],VCard:d["a"],VCardActions:h["a"],VCardSubtitle:h["b"],VCardText:h["c"],VContainer:f["a"],VDivider:y,VFooter:x,VIcon:B["a"]})},"8ce9":function(t,e,r){},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return c}));var i=r("b0af"),n=r("80d2"),a=Object(n["h"])("v-card__actions"),s=Object(n["h"])("v-card__subtitle"),o=Object(n["h"])("v-card__text"),c=Object(n["h"])("v-card__title");i["a"]},a452:function(t,e,r){"use strict";var i=r("ade3"),n=r("2b0e");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return n["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(i["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(i["a"])({},t,(function(t){this.internalLazyValue=t}))})}var s=a();e["a"]=s},b0af:function(t,e,r){"use strict";r("a4d3"),r("4de4"),r("0481"),r("4160"),r("4069"),r("a9e3"),r("e439"),r("dbb4"),r("b64b"),r("159b");var i=r("ade3"),n=(r("615b"),r("10d2")),a=r("2b0e"),s=(r("acd8"),r("c7cd"),r("6ece"),r("0789")),o=r("a9ad"),c=r("fe6c"),l=r("a452"),u=r("7560"),d=r("80d2"),h=r("58df");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b=Object(h["a"])(o["a"],Object(c["b"])(["absolute","fixed","top","bottom"]),l["a"],u["a"]),v=b.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(i["a"])(t,this.$vuetify.rtl?"right":"left",Object(d["f"])(this.normalizedValue,"%")),Object(i["a"])(t,"width",Object(d["f"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return p({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?s["b"]:s["c"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(d["l"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(i["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),r=e.width;this.internalValue=t.offsetX/r*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),g=v,y=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(g,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),m=r("1c87");function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){Object(i["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e["a"]=Object(h["a"])(y,m["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return j({"v-card":!0},m["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},n["a"].options.computed.classes.call(this))},styles:function(){var t=j({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=y.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},b5b6:function(t,e,r){}}]);
//# sourceMappingURL=chunk-2383d6ae.b047ad69.js.map