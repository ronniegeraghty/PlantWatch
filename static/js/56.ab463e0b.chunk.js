(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{148:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_reorder",function(){return s}),r.d(e,"ion_reorder_group",function(){return l});var n=r(2),o=r(23),i=(r(3),r(191)),s=function(){function t(t){Object(o.m)(this,t)}return t.prototype.onClick=function(t){t.preventDefault(),t.stopImmediatePropagation()},t.prototype.hostData=function(){var t;return{class:(t={},t[Object(o.e)(this)]=!0,t)}},t.prototype.__stencil_render=function(){return Object(o.i)("slot",null,Object(o.i)("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"}))},t.prototype.render=function(){return Object(o.i)(o.a,this.hostData(),this.__stencil_render())},Object.defineProperty(t,"style",{get:function(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:31px;opacity:.3}"},enumerable:!0,configurable:!0}),t}(),l=function(){function t(t){Object(o.m)(this,t),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=Object(o.d)(this,"ionItemReorder",7)}return t.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.componentDidLoad=function(){return n.a(this,void 0,void 0,function(){var t,e,o,i=this;return n.c(this,function(n){switch(n.label){case 0:return(t=this.el.closest("ion-content"))?[4,t.componentOnReady()]:[3,3];case 1:return n.sent(),e=this,[4,t.getScrollElement()];case 2:e.scrollEl=n.sent(),n.label=3;case 3:return o=this,[4,r.e(0).then(r.bind(null,187))];case 4:return o.gesture=n.sent().createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(t){return i.canStart(t)},onStart:function(t){return i.onStart(t)},onMove:function(t){return i.onMove(t)},onEnd:function(){return i.onEnd()}}),this.disabledChanged(),[2]}})})},t.prototype.componentDidUnload=function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.complete=function(t){return Promise.resolve(this.completeSync(t))},t.prototype.canStart=function(t){if(this.selectedItemEl||0!==this.state)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var r=c(e,this.el);return!!r&&(t.data=r,!0)},t.prototype.onStart=function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data,r=this.cachedHeights;r.length=0;var n=this.el,o=n.children;if(o&&0!==o.length){for(var s=0,l=0;l<o.length;l++){var c=o[l];s+=c.offsetHeight,r.push(s),c.$ionIndex=l}var h=n.getBoundingClientRect();if(this.containerTop=h.top,this.containerBottom=h.bottom,this.scrollEl){var p=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=p.top+u,this.scrollElBottom=p.bottom-u}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=a(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(d),Object(i.a)()}},t.prototype.onMove=function(t){var e=this.selectedItemEl;if(e){var r=this.autoscroll(t.currentY),n=this.containerTop-r,o=this.containerBottom-r,s=Math.max(n,Math.min(t.currentY,o)),l=r+s-t.startY,c=s-n,u=this.itemIndexForTop(c);if(u!==this.lastToIndex){var h=a(e);this.lastToIndex=u,Object(i.b)(),this.reorderMove(h,u)}e.style.transform="translateY("+l+"px)"}},t.prototype.onEnd=function(){var t=this,e=this.selectedItemEl;if(this.state=2,e){var r=this.lastToIndex,n=a(e);r===n?(e.style.transition="transform 200ms ease-in-out",setTimeout(function(){return t.completeSync()},200)):this.ionItemReorder.emit({from:n,to:r,complete:this.completeSync.bind(this)}),Object(i.c)()}else this.state=0},t.prototype.completeSync=function(t){var e=this.selectedItemEl;if(e&&2===this.state){var r=this.el.children,n=r.length,o=this.lastToIndex,i=a(e);if(!t||!0===t){var s=i<o?r[o+1]:r[o];this.el.insertBefore(e,s)}Array.isArray(t)&&(t=p(t,i,o));for(var l=0;l<n;l++)r[l].style.transform="";e.style.transition="",e.classList.remove(d),this.selectedItemEl=void 0,this.state=0}return t},t.prototype.itemIndexForTop=function(t){var e=this.cachedHeights,r=0;for(r=0;r<e.length&&!(e[r]>t);r++);return r},t.prototype.reorderMove=function(t,e){for(var r=this.selectedItemHeight,n=this.el.children,o=0;o<n.length;o++){var i="";o>t&&o<=e?i="translateY("+-r+"px)":o<t&&o>=e&&(i="translateY("+r+"px)"),n[o].style.transform=i}},t.prototype.autoscroll=function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-h:t>this.scrollElBottom&&(e=h),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial},t.prototype.hostData=function(){var t;return{class:(t={},t[Object(o.e)(this)]=!0,t["reorder-enabled"]=!this.disabled,t["reorder-list-active"]=0!==this.state,t)}},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),t.prototype.render=function(){return Object(o.i)(o.a,this.hostData())},Object.defineProperty(t,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"},enumerable:!0,configurable:!0}),t}(),a=function(t){return t.$ionIndex},c=function(t,e){for(var r;t;){if((r=t.parentElement)===e)return t;t=r}},u=60,h=10,d="reorder-selected",p=function(t,e,r){var n=t[e];return t.splice(e,1),t.splice(r,0,n),t.slice()}},191:function(t,e,r){"use strict";r.d(e,"a",function(){return o}),r.d(e,"b",function(){return i}),r.d(e,"c",function(){return s}),r.d(e,"d",function(){return n});var n=function(){var t=window.TapticEngine;t&&t.selection()},o=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},i=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},s=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}}}]);
//# sourceMappingURL=56.ab463e0b.chunk.js.map