(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_nav",function(){return p}),n.d(t,"ion_nav_pop",function(){return f}),n.d(t,"ion_nav_push",function(){return m}),n.d(t,"ion_nav_set_root",function(){return g});var i=n(2),r=n(23),o=n(3),s=n(19),a=n(186),u=n(189),c=n(190),l=1,d=function(){function e(e,t){this.component=e,this.params=t,this.state=l}return e.prototype.init=function(e){return i.a(this,void 0,void 0,function(){var t,n;return i.c(this,function(i){switch(i.label){case 0:return this.state=2,this.element?[3,2]:(t=this.component,n=this,[4,Object(u.a)(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)]);case 1:n.element=i.sent(),i.label=2;case 2:return[2]}})})},e.prototype._destroy=function(){Object(a.b)(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3},e}(),h=function(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var i=e.params;if(i===n)return!0;if(!i&&!n)return!0;if(!i||!n)return!1;var r=Object.keys(i),o=Object.keys(n);if(r.length!==o.length)return!1;for(var s=0,a=r;s<a.length;s++){var u=a[s];if(i[u]!==n[u])return!1}return!0},v=function(e,t){return e?e instanceof d?e:new d(e,t):null},p=function(){function e(e){Object(r.m)(this,e),this.transInstr=[],this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0,this.ionNavWillLoad=Object(r.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(r.d)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(r.d)(this,"ionNavDidChange",3)}return e.prototype.swipeGestureChanged=function(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)},e.prototype.rootChanged=function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},e.prototype.componentWillLoad=function(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){var e=Object(r.e)(this);this.swipeGesture=o.b.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()},e.prototype.componentDidLoad=function(){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(t){switch(t.label){case 0:return this.rootChanged(),e=this,[4,n.e(2).then(n.bind(null,194))];case 1:return e.gesture=t.sent().createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged(),[2]}})})},e.prototype.componentDidUnload=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];Object(c.b)(n.element,s.e),n._destroy()}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0},e.prototype.push=function(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},i)},e.prototype.insert=function(e,t,n,i,r){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:i},r)},e.prototype.insertPages=function(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)},e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},e.prototype.popTo=function(e,t,n){var i={removeStart:-1,removeCount:-1,opts:t};return"object"===typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"===typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)},e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},e.prototype.removeIndex=function(e,t,n,i){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:n},i)},e.prototype.setRoot=function(e,t,n,i){return this.setPages([{page:e,params:t}],n,i)},e.prototype.setPages=function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)},e.prototype.setRouteId=function(e,t,n){var r,o=this,s=this.getActiveSync();if(h(s,e,t))return Promise.resolve({changed:!1,element:s.element});var a,u=new Promise(function(e){return r=e}),c={updateURL:!1,viewIsReady:function(e){var t,n=new Promise(function(e){return t=e});return r({changed:!0,element:e,markVisible:function(){return i.a(o,void 0,void 0,function(){return i.c(this,function(e){switch(e.label){case 0:return t(),[4,a];case 1:return e.sent(),[2]}})})}}),n}};if("root"===n)a=this.setRoot(e,t,c);else{var l=this.views.find(function(n){return h(n,e,t)});l?a=this.popTo(l,Object.assign({},c,{direction:"back"})):"forward"===n?a=this.push(e,t,c):"back"===n&&(a=this.setRoot(e,t,Object.assign({},c,{direction:"back",animated:!0})))}return u},e.prototype.getRouteId=function(){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(t){return[2,(e=this.getActiveSync())?{id:e.element.tagName,params:e.params,element:e.element}:void 0]})})},e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())},e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])},e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))},e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))},e.prototype.getLength=function(){return this.views.length},e.prototype.getActiveSync=function(){return this.views[this.views.length-1]},e.prototype.canGoBackSync=function(e){return void 0===e&&(e=this.getActiveSync()),!(!e||!this.getPreviousSync(e))},e.prototype.getPreviousSync=function(e){if(void 0===e&&(e=this.getActiveSync()),e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}},e.prototype.queueTrns=function(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);var n=new Promise(function(t,n){e.resolve=t,e.reject=n});return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n},e.prototype.success=function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=document.querySelector("ion-router");if(n){var i="back"===e.direction?"back":"forward";n.navChanged(i)}}},e.prototype.failed=function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))},e.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},e.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},e.prototype.runTransition=function(e){return i.a(this,void 0,void 0,function(){var t,n,r,o,s;return i.c(this,function(i){switch(i.label){case 0:if(i.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),n=this.getEnteringView(e,t),!t&&!n)throw new Error("no views in the stack to be removed");return n&&n.state===l?[4,n.init(this.el)]:[3,2];case 1:i.sent(),i.label=2;case 2:return this.postViewInit(n,t,e),(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t?[4,this.transition(n,t,e)]:[3,4];case 3:return o=i.sent(),[3,5];case 4:o={hasCompleted:!0,requiresTransition:!1},i.label=5;case 5:return r=o,this.success(r,e),this.ionNavDidChange.emit(),[3,7];case 6:return s=i.sent(),this.failed(s,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}})})},e.prototype.prepareTI=function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(a.b)(void 0!==e.removeStart,"removeView needs removeStart"),Object(a.b)(void 0!==e.removeCount,"removeView needs removeCount");var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var i=e.insertViews;if(i){Object(a.b)(i.length>0,"length can not be zero");var r=i.map(function(e){return e instanceof d?e:"page"in e?v(e.page,e.params):v(e,void 0)}).filter(function(e){return null!==e});if(0===r.length)throw new Error("invalid views to insert");for(var o=0,s=r;o<s.length;o++){var u=s[o];u.delegate=e.opts.delegate;var c=u.nav;if(c&&c!==this)throw new Error("inserted view was already inserted");if(3===u.state)throw new Error("inserted view was already destroyed")}e.insertViews=r}},e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var i=e.removeStart;if(void 0!==i)for(var r=this.views,o=i+e.removeCount,s=r.length-1;s>=0;s--){var a=r[s];if((s<i||s>=o)&&a!==t)return a}},e.prototype.postViewInit=function(e,t,n){Object(a.b)(t||e,"Both leavingView and enteringView are null"),Object(a.b)(n.resolve,"resolve must be valid"),Object(a.b)(n.reject,"reject must be valid");var i,r=n.opts,o=n.insertViews,u=n.removeStart,l=n.removeCount;if(void 0!==u&&void 0!==l){Object(a.b)(u>=0,"removeStart can not be negative"),Object(a.b)(l>=0,"removeCount can not be negative"),i=[];for(var d=0;d<l;d++){(m=this.views[d+u])&&m!==e&&m!==t&&i.push(m)}r.direction=r.direction||"back"}var h=this.views.length+(void 0!==o?o.length:0)-(void 0!==l?l:0);if(Object(a.b)(h>=0,"final balance can not be negative"),0===h)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(o){for(var v=n.insertStart,p=0,f=o;p<f.length;p++){var m=f[p];this.insertViewAt(m,v),v++}n.enteringRequiresTransition&&(r.direction=r.direction||"forward")}if(i&&i.length>0){for(var g=0,b=i;g<b.length;g++){m=b[g];Object(c.b)(m.element,s.c),Object(c.b)(m.element,s.d),Object(c.b)(m.element,s.e)}for(var w=0,y=i;w<y.length;w++){m=y[w];this.destroyView(m)}}},e.prototype.transition=function(e,t,n){return i.a(this,void 0,void 0,function(){var s,a,u,l,d,h,v,p=this;return i.c(this,function(i){switch(i.label){case 0:return s=n.opts,a=s.progressAnimation?function(e){return p.sbAni=e}:void 0,u=Object(r.e)(this),l=e.element,d=t&&t.element,h=Object.assign({mode:u,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||s.animationBuilder||o.b.get("navAnimation"),progressCallback:a,animated:this.animated&&o.b.getBoolean("animated",!0),enteringEl:l,leavingEl:d},s),[4,Object(c.d)(h)];case 1:return v=i.sent().hasCompleted,[2,this.transitionFinish(v,e,t,s)]}})})},e.prototype.transitionFinish=function(e,t,n,i){var r=e?t:n;return r&&this.cleanup(r),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}},e.prototype.insertViewAt=function(e,t){var n=this.views,i=n.indexOf(e);i>-1?(Object(a.b)(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(i,1)[0])):(Object(a.b)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))},e.prototype.removeView=function(e){Object(a.b)(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,n=t.indexOf(e);Object(a.b)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)},e.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},e.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),i=t.length-1;i>=0;i--){var r=t[i],o=r.element;i>n?(Object(c.b)(o,s.e),this.destroyView(r)):i<n&&Object(c.c)(o,!0)}},e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.canGoBackSync()},e.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},e.prototype.onMove=function(e){this.sbAni&&this.sbAni.progressStep(e)},e.prototype.onEnd=function(e,t,n){this.sbAni&&this.sbAni.progressEnd(e,t,n)},e.prototype.render=function(){return Object(r.i)("slot",null)},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:!0,configurable:!0}),e}(),f=function(){function e(e){Object(r.m)(this,e)}return e.prototype.pop=function(){var e=this.el.closest("ion-nav");e&&e.pop({skipIfBusy:!0})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),e}(),m=function(){function e(e){Object(r.m)(this,e)}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),t=this.component;e&&void 0!==t&&e.push(t,this.componentProps,{skipIfBusy:!0})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),e}(),g=function(){function e(e){Object(r.m)(this,e)}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),t=this.component;e&&void 0!==t&&e.setRoot(t,this.componentProps,{skipIfBusy:!0})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),e}()},186:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return h}),n.d(t,"e",function(){return v}),n.d(t,"f",function(){return o}),n.d(t,"g",function(){return r}),n.d(t,"h",function(){return d}),n.d(t,"i",function(){return c}),n.d(t,"j",function(){return l}),n.d(t,"k",function(){return s});var i=function(e){"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,32)},r=function(e){return!!e.shadowRoot&&!!e.attachShadow},o=function(e){var t=e.closest("ion-item");return t?t.querySelector("ion-label"):null},s=function(e,t,n,i,o){if(e||r(t)){var s=t.querySelector("input.aux-input");s||((s=t.ownerDocument.createElement("input")).type="hidden",s.classList.add("aux-input"),t.appendChild(s)),s.disabled=o,s.name=n,s.value=i||""}},a=function(e,t,n){return Math.max(e,Math.min(t,n))},u=function(e,t){if(!e){var n="ASSERT: "+t;throw console.error(n),new Error(n)}},c=function(e){return e.timeStamp||Date.now()},l=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},d=function(e){var t="rtl"===document.dir;switch(e){case"start":return t;case"end":return!t;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}},h=function(e,t){var n=e._original||e;return{_original:e,emit:v(n.emit.bind(n),t)}},v=function(e,t){var n;return void 0===t&&(t=0),function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];clearTimeout(n),n=setTimeout.apply(void 0,[e,t].concat(i))}}},189:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var i=n(2),r=function(e,t,n,r,o){return i.a(void 0,void 0,void 0,function(){var s;return i.c(this,function(i){switch(i.label){case 0:if(e)return[2,e.attachViewToDom(t,n,o,r)];if("string"!==typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return s="string"===typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n,r&&r.forEach(function(e){return s.classList.add(e)}),o&&Object.assign(s,o),t.appendChild(s),s.componentOnReady?[4,s.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,s]}})})},o=function(e,t){if(t){if(e){var n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()}},190:function(e,t,n){"use strict";n.d(t,"a",function(){return y}),n.d(t,"b",function(){return b}),n.d(t,"c",function(){return O}),n.d(t,"d",function(){return s});var i=n(2),r=n(23),o=n(19),s=function(e){return new Promise(function(t,n){Object(r.n)(function(){a(e),u(e).then(function(n){n.animation&&n.animation.destroy(),c(e),t(n)},function(t){c(e),n(t)})})})},a=function(e){var t=e.enteringEl,n=e.leavingEl;S(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),O(t,!1),n&&O(n,!1)},u=function(e){return i.a(void 0,void 0,void 0,function(){var t;return i.c(this,function(n){switch(n.label){case 0:return[4,l(e)];case 1:return t=n.sent(),[2,t?d(t,e):h(e)]}})})},c=function(e){var t=e.enteringEl,n=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},l=function(e){return i.a(void 0,void 0,void 0,function(){var t;return i.c(this,function(i){switch(i.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,n.e(92).then(n.bind(null,192))]:[2,void 0];case 1:return t=i.sent().iosTransitionAnimation,[3,4];case 2:return[4,n.e(93).then(n.bind(null,193))];case 3:t=i.sent().mdTransitionAnimation,i.label=4;case 4:return[2,t]}})})},d=function(e,t){return i.a(void 0,void 0,void 0,function(){var r;return i.c(this,function(i){switch(i.label){case 0:return[4,v(t,!0)];case 1:return i.sent(),[4,n.e(1).then(n.bind(null,90)).then(function(n){return n.create(e,t.baseEl,t)})];case 2:return r=i.sent(),m(t.enteringEl,t.leavingEl),[4,f(r,t)];case 3:return i.sent(),t.progressCallback&&t.progressCallback(void 0),r.hasCompleted&&g(t.enteringEl,t.leavingEl),[2,{hasCompleted:r.hasCompleted,animation:r}]}})})},h=function(e){return i.a(void 0,void 0,void 0,function(){var t,n;return i.c(this,function(i){switch(i.label){case 0:return t=e.enteringEl,n=e.leavingEl,[4,v(e,!1)];case 1:return i.sent(),m(t,n),g(t,n),[2,{hasCompleted:!0}]}})})},v=function(e,t){return i.a(void 0,void 0,void 0,function(){var n,r;return i.c(this,function(i){switch(i.label){case 0:return n=void 0!==e.deepWait?e.deepWait:t,r=n?[y(e.enteringEl),y(e.leavingEl)]:[w(e.enteringEl),w(e.leavingEl)],[4,Promise.all(r)];case 1:return i.sent(),[4,p(e.viewIsReady,e.enteringEl)];case 2:return i.sent(),[2]}})})},p=function(e,t){return i.a(void 0,void 0,void 0,function(){return i.c(this,function(n){switch(n.label){case 0:return e?[4,e(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})},f=function(e,t){var n=t.progressCallback,i=new Promise(function(t){return e.onFinish(t)});return n?(e.progressStart(),n(e)):e.play(),i},m=function(e,t){b(t,o.c),b(e,o.a)},g=function(e,t){b(e,o.b),b(t,o.d)},b=function(e,t){if(e){var n=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(n)}},w=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},y=function e(t){return i.a(void 0,void 0,void 0,function(){var n;return i.c(this,function(i){switch(i.label){case 0:return(n=t)?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(null!=i.sent())return[2];i.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(e))];case 3:i.sent(),i.label=4;case 4:return[2]}})})},O=function(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},S=function(e,t,n){void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")}}}]);
//# sourceMappingURL=18.7019c5d9.chunk.js.map