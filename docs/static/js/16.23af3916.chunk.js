(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{137:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_popover",function(){return h});var n=o(2),r=o(23),i=(o(3),o(19),o(17)),s=o(185),a=o(189),c=o(190),l=function(e,t,o){var n="top",r="left",i=t.querySelector(".popover-content"),s=i.getBoundingClientRect(),a=s.width,c=s.height,l=t.ownerDocument.defaultView.innerWidth,u=t.ownerDocument.defaultView.innerHeight,d=o&&o.target&&o.target.getBoundingClientRect(),v=null!=d&&"top"in d?d.top:u/2-c/2,f=null!=d&&"left"in d?d.left:l/2,h=d&&d.width||0,m=d&&d.height||0,b=t.querySelector(".popover-arrow"),w=b.getBoundingClientRect(),g=w.width,y=w.height;null==d&&(b.style.display="none");var x={top:v+m,left:f+h/2-g/2},E={top:v+m+(y-1),left:f+h/2-a/2},k=!1,O=!1;E.left<p+25?(k=!0,E.left=p):a+p+E.left+25>l&&(O=!0,E.left=l-a-p,r="right"),v+m+c>u&&v-c>0?(x.top=v-(y+1),E.top=v-c-(y-1),t.className=t.className+" popover-bottom",n="bottom"):v+m+c>u&&(i.style.bottom=p+"%"),b.style.top=x.top+"px",b.style.left=x.left+"px",i.style.top=E.top+"px",i.style.left=E.left+"px",k&&(i.style.left="calc("+E.left+"px + var(--ion-safe-area-left, 0px))"),O&&(i.style.left="calc("+E.left+"px - var(--ion-safe-area-right, 0px))"),i.style.transformOrigin=n+" "+r;var D=new e,P=new e;P.addElement(t.querySelector("ion-backdrop")),P.fromTo("opacity",.01,.08);var j=new e;return j.addElement(t.querySelector(".popover-wrapper")),j.fromTo("opacity",.01,1),Promise.resolve(D.addElement(t).easing("ease").duration(100).add(P).add(j))},p=5,u=function(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(r))},d=function(e,t,o){var n=t.ownerDocument,r="rtl"===n.dir,i="top",s=r?"right":"left",a=t.querySelector(".popover-content"),c=a.getBoundingClientRect(),l=c.width,p=c.height,u=n.defaultView.innerWidth,d=n.defaultView.innerHeight,f=o&&o.target&&o.target.getBoundingClientRect(),h=null!=f&&"bottom"in f?f.bottom:d/2-p/2,m=null!=f&&"left"in f?r?f.left-l+f.width:f.left:u/2-l/2,b=f&&f.height||0,w={top:h,left:m};w.left<v?(w.left=v,s="left"):l+v+w.left>u&&(w.left=u-l-v,s="right"),h+b+p>d&&h-p>0?(w.top=h-p-b,t.className=t.className+" popover-bottom",i="bottom"):h+b+p>d&&(a.style.bottom=v+"px"),a.style.top=w.top+"px",a.style.left=w.left+"px",a.style.transformOrigin=i+" "+s;var g=new e,y=new e;y.addElement(t.querySelector("ion-backdrop")),y.fromTo("opacity",.01,.32);var x=new e;x.addElement(t.querySelector(".popover-wrapper")),x.fromTo("opacity",.01,1);var E=new e;E.addElement(t.querySelector(".popover-content")),E.fromTo("scale",.001,1);var k=new e;return k.addElement(t.querySelector(".popover-viewport")),k.fromTo("opacity",.01,1),Promise.resolve(g.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(y).add(x).add(E).add(k))},v=12,f=function(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.32,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(r))},h=function(){function e(e){Object(r.m)(this,e),this.presented=!1,this.mode=Object(r.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.didPresent=Object(r.d)(this,"ionPopoverDidPresent",7),this.willPresent=Object(r.d)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(r.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(r.d)(this,"ionPopoverDidDismiss",7)}return e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,i.a)},e.prototype.lifecycle=function(e){var t=this.usersElement,o=m[e.type];if(t&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(n)}},e.prototype.present=function(){return n.a(this,void 0,void 0,function(){var e,t,o;return n.c(this,function(n){switch(n.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return t=Object.assign({},this.componentProps,{popover:this.el}),o=this,[4,Object(a.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:return o.usersElement=n.sent(),[4,Object(c.a)(this.usersElement)];case 2:return n.sent(),[2,Object(i.e)(this,"popoverEnter",l,d,this.event)]}})})},e.prototype.dismiss=function(e,t){return n.a(this,void 0,void 0,function(){var o;return n.c(this,function(n){switch(n.label){case 0:return[4,Object(i.f)(this,e,t,"popoverLeave",u,f,this.event)];case 1:return(o=n.sent())?[4,Object(a.b)(this.delegate,this.usersElement)]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2,o]}})})},e.prototype.onDidDismiss=function(){return Object(i.g)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(i.g)(this.el,"ionPopoverWillDismiss")},e.prototype.hostData=function(){var e,t=Object(r.e)(this);return{"aria-modal":"true","no-router":!0,style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},Object(s.b)(this.cssClass),(e={},e[t]=!0,e["popover-translucent"]=this.translucent,e))}},e.prototype.__stencil_render=function(){return[Object(r.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(r.i)("div",{class:"popover-wrapper"},Object(r.i)("div",{class:"popover-arrow"}),Object(r.i)("div",{class:"popover-content"}))]},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),e.prototype.render=function(){return Object(r.i)(r.a,this.hostData(),this.__stencil_render())},Object.defineProperty(e,"style",{get:function(){return'.sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}'},enumerable:!0,configurable:!0}),e}(),m={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}},185:function(e,t,o){"use strict";o.d(t,"a",function(){return i}),o.d(t,"b",function(){return s}),o.d(t,"c",function(){return r}),o.d(t,"d",function(){return c});var n=o(2),r=function(e,t){return null!==t.closest(e)},i=function(e){var t;return"string"===typeof e&&e.length>0?((t={"ion-color":!0})["ion-color-"+e]=!0,t):void 0},s=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(function(e){return null!=e}).map(function(e){return e.trim()}).filter(function(e){return""!==e}):[]}(e).forEach(function(e){return t[e]=!0}),t},a=/^[a-z][a-z0-9+\-.]*:/,c=function(e,t,o){return n.a(void 0,void 0,void 0,function(){var r;return n.c(this,function(n){switch(n.label){case 0:return null==e||"#"===e[0]||a.test(e)?[3,2]:(r=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[4,r.componentOnReady()]):[3,2];case 1:return n.sent(),[2,r.push(e,o)];case 2:return[2,!1]}})})}},189:function(e,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"b",function(){return i});var n=o(2),r=function(e,t,o,r,i){return n.a(void 0,void 0,void 0,function(){var s;return n.c(this,function(n){switch(n.label){case 0:if(e)return[2,e.attachViewToDom(t,o,i,r)];if("string"!==typeof o&&!(o instanceof HTMLElement))throw new Error("framework delegate is missing");return s="string"===typeof o?t.ownerDocument&&t.ownerDocument.createElement(o):o,r&&r.forEach(function(e){return s.classList.add(e)}),i&&Object.assign(s,i),t.appendChild(s),s.componentOnReady?[4,s.componentOnReady()]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2,s]}})})},i=function(e,t){if(t){if(e){var o=t.parentElement;return e.removeViewFromDom(o,t)}t.remove()}return Promise.resolve()}},190:function(e,t,o){"use strict";o.d(t,"a",function(){return y}),o.d(t,"b",function(){return w}),o.d(t,"c",function(){return x}),o.d(t,"d",function(){return s});var n=o(2),r=o(23),i=o(19),s=function(e){return new Promise(function(t,o){Object(r.n)(function(){a(e),c(e).then(function(o){o.animation&&o.animation.destroy(),l(e),t(o)},function(t){l(e),o(t)})})})},a=function(e){var t=e.enteringEl,o=e.leavingEl;E(t,o,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),x(t,!1),o&&x(o,!1)},c=function(e){return n.a(void 0,void 0,void 0,function(){var t;return n.c(this,function(o){switch(o.label){case 0:return[4,p(e)];case 1:return t=o.sent(),[2,t?u(t,e):d(e)]}})})},l=function(e){var t=e.enteringEl,o=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==o&&o.classList.remove("ion-page-invisible")},p=function(e){return n.a(void 0,void 0,void 0,function(){var t;return n.c(this,function(n){switch(n.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,o.e(92).then(o.bind(null,192))]:[2,void 0];case 1:return t=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,o.e(93).then(o.bind(null,193))];case 3:t=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,t]}})})},u=function(e,t){return n.a(void 0,void 0,void 0,function(){var r;return n.c(this,function(n){switch(n.label){case 0:return[4,v(t,!0)];case 1:return n.sent(),[4,o.e(1).then(o.bind(null,90)).then(function(o){return o.create(e,t.baseEl,t)})];case 2:return r=n.sent(),m(t.enteringEl,t.leavingEl),[4,h(r,t)];case 3:return n.sent(),t.progressCallback&&t.progressCallback(void 0),r.hasCompleted&&b(t.enteringEl,t.leavingEl),[2,{hasCompleted:r.hasCompleted,animation:r}]}})})},d=function(e){return n.a(void 0,void 0,void 0,function(){var t,o;return n.c(this,function(n){switch(n.label){case 0:return t=e.enteringEl,o=e.leavingEl,[4,v(e,!1)];case 1:return n.sent(),m(t,o),b(t,o),[2,{hasCompleted:!0}]}})})},v=function(e,t){return n.a(void 0,void 0,void 0,function(){var o,r;return n.c(this,function(n){switch(n.label){case 0:return o=void 0!==e.deepWait?e.deepWait:t,r=o?[y(e.enteringEl),y(e.leavingEl)]:[g(e.enteringEl),g(e.leavingEl)],[4,Promise.all(r)];case 1:return n.sent(),[4,f(e.viewIsReady,e.enteringEl)];case 2:return n.sent(),[2]}})})},f=function(e,t){return n.a(void 0,void 0,void 0,function(){return n.c(this,function(o){switch(o.label){case 0:return e?[4,e(t)]:[3,2];case 1:o.sent(),o.label=2;case 2:return[2]}})})},h=function(e,t){var o=t.progressCallback,n=new Promise(function(t){return e.onFinish(t)});return o?(e.progressStart(),o(e)):e.play(),n},m=function(e,t){w(t,i.c),w(e,i.a)},b=function(e,t){w(e,i.b),w(t,i.d)},w=function(e,t){if(e){var o=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(o)}},g=function(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()},y=function e(t){return n.a(void 0,void 0,void 0,function(){var o;return n.c(this,function(n){switch(n.label){case 0:return(o=t)?null==o.componentOnReady?[3,2]:[4,o.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(o.children).map(e))];case 3:n.sent(),n.label=4;case 4:return[2]}})})},x=function(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},E=function(e,t,o){void 0!==e&&(e.style.zIndex="back"===o?"99":"101"),void 0!==t&&(t.style.zIndex="100")}}}]);
//# sourceMappingURL=16.23af3916.chunk.js.map