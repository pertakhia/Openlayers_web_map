"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3995],{4896:function(e,n,a){var t=a(9619),r=a(1055),s=a(7051),l=a(1733),i=a(4711),o=a(824),w=a(2776),c=a(5002),g=a(677),u=a(9243);const d=new w.Z({color:"black",width:2}),Z=new c.Z({color:"red"}),h={square:new g.ZP({image:new u.Z({fill:Z,stroke:d,points:4,radius:10,angle:Math.PI/4})}),rectangle:new g.ZP({image:new u.Z({fill:Z,stroke:d,radius:10/Math.SQRT2,radius2:10,points:4,angle:0,scale:[1,.5]})}),triangle:new g.ZP({image:new u.Z({fill:Z,stroke:d,points:3,radius:10,rotation:Math.PI/4,angle:0})}),star:new g.ZP({image:new u.Z({fill:Z,stroke:d,points:5,radius:10,radius2:4,angle:0})}),cross:new g.ZP({image:new u.Z({fill:Z,stroke:d,points:4,radius:10,radius2:0,angle:0})}),x:new g.ZP({image:new u.Z({fill:Z,stroke:d,points:4,radius:10,radius2:0,angle:Math.PI/4})}),stacked:[new g.ZP({image:new u.Z({fill:Z,stroke:d,points:4,radius:5,angle:Math.PI/4,displacement:[0,10]})}),new g.ZP({image:new u.Z({fill:Z,stroke:d,points:4,radius:10,angle:Math.PI/4})})]},m=["x","cross","star","triangle","square","rectangle","stacked"],f=new Array(250),k=45e5;for(let e=0;e<250;++e){const n=[2*k*Math.random()-k,2*k*Math.random()-k];f[e]=new t.Z(new s.Z(n)),f[e].setStyle(h[m[Math.floor(Math.random()*m.length)]])}const P=new i.Z({features:f}),p=new l.Z({source:P}),M=(new r.Z({layers:[p],target:"map",view:new o.ZP({center:[0,0],zoom:2})}),["blue","green","yellow","aqua","red"]);let I=0;document.getElementById("color-changer").addEventListener("click",(function(){h.square.getImage().setFill(new c.Z({color:M[I%M.length]})),p.changed(),I++}))}},function(e){var n;n=4896,e(e.s=n)}]);
//# sourceMappingURL=regularshape.js.map