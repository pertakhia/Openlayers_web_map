"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1180],{4297:function(t,n,e){var o=e(9619),c=e(5925),i=e(1055),s=e(1733),a=e(4711),r=e(824);const u=1e7,h=Math.cos(Math.PI/6),f=u*Math.sin(Math.PI/6),l=u*h,p=new c.Z([[0,u],[l,-f],[-l,-f],[0,u]]),w=new o.Z(p),x=new s.Z({source:new a.Z({features:[w]})});new i.Z({layers:[x],target:"map",view:new r.ZP({center:[0,0],zoom:1})});function m(t){const n=t.next,e=t.point,o=t.next.point,c=o[0]-e[0],i=o[1]-e[1],s={point:[e[0]+c/3,e[1]+i/3]},a=Math.sqrt(c*c+i*i)/(2*h),r=Math.atan2(i,c)+Math.PI/6,u={point:[e[0]+a*Math.cos(r),e[1]+a*Math.sin(r)]},f={point:[o[0]-c/3,o[1]-i/3]};t.next=s,s.next=u,u.next=f,f.next=n}const M=document.getElementById("depth");function d(){!function(t){const n=p.clone(),e=function(t){const n={point:t[0]},e=t.length;for(let o=0,c=n;o<e-1;++o)c.next={point:t[o+1]},c=c.next;return n}(n.getCoordinates());for(let n=0;n<t;++n){let t=e;for(;t.next;){const n=t.next;m(t),t=n}}const o=function(t){const n=[t.point];for(let e=t,o=1;e.next;e=e.next,++o)n[o]=e.next.point;return n}(e);document.getElementById("count").innerHTML=o.length,n.setCoordinates(o),w.setGeometry(n)}(Number(M.value))}let g;M.onchange=function(){window.clearTimeout(g),g=window.setTimeout(d,200)},d()}},function(t){var n;n=4297,t(t.s=n)}]);
//# sourceMappingURL=fractal.js.map