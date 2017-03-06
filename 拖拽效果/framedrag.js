'use strict'
function Framedrag(id){
    Drag.apply(this,arguments);
    this.oldDiv=null;
    this.newDiv=null;
}
Framedrag.prototype=new Drag();
Framedrag.prototype.constructor=Framedrag;
var oldfn={};
for(var name in Framedrag.prototype){
    oldfn[name]=Framedrag.prototype[name]
}
Framedrag.prototype.fndown=function(ev){
    oldfn['fndown'].call(this,ev);
    this.newDiv=this.oDiv.cloneNode(true);
    this.newDiv.style.opacity=0.3;
    this.newDiv.removeAttribute('id');
    document.body.appendChild(this.newDiv);
    this.oldDiv=this.oDiv;
    this.oDiv=this.newDiv;
};
Framedrag.prototype.fnup=function() {
    oldfn['fnup'].call(this);
    this.oldDiv.style.left=this.oDiv.offsetLeft+'px';
    this.oldDiv.style.top=this.oDiv.offsetTop+'px';
    this.oDiv=this.oldDiv;
    document.body.removeChild(this.newDiv)
};