"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5926],{4188:function(e,t,n){var o=n(1055),a=n(5117),s=n(2893),l=n(824),i=n(5777),c=n(9870),r=n(2486),d=n(9636),h=n(3814);class u extends c.Z{constructor(e){e=e||{},super({element:document.createElement("div"),target:e.target}),this.extent=e.extent?e.extent:null;const t=void 0!==e.className?e.className:"ol-zoom-extent",n=void 0!==e.label?e.label:"E",o=void 0!==e.tipLabel?e.tipLabel:"Fit to extent",a=document.createElement("button");a.setAttribute("type","button"),a.title=o,a.appendChild("string"==typeof n?document.createTextNode(n):n),a.addEventListener(r.Z.CLICK,this.handleClick_.bind(this),!1);const s=t+" "+d.XV+" "+d.hg,l=this.element;l.className=s,l.appendChild(a)}handleClick_(e){e.preventDefault(),this.handleZoomToExtent()}handleZoomToExtent(){const e=this.getMap().getView(),t=this.extent?this.extent:e.getProjection().getExtent();e.fitInternal((0,h.oJ)(t))}}var m=u;new o.Z({controls:(0,i.c)().extend([new m({extent:[813079.7791264898,5929220.284081122,848966.9639063801,5936863.986909639]})]),layers:[new s.Z({source:new a.Z})],target:"map",view:new l.ZP({center:[0,0],zoom:2})})}},function(e){var t;t=4188,e(e.s=t)}]);
//# sourceMappingURL=navigation-controls.js.map