'use strict'
function Limitdrag(id){
    Drag.call(this,id);
}
Limitdrag.prototype=new Drag();
Limitdrag.prototype.constructor=Limitdrag;
var oldfn=Drag.prototype.fnmove;
Limitdrag.prototype.fnmove=function(ev){
    oldfn.call(this,ev);
    if(this.oDiv.offsetLeft<=0){
        this.oDiv.style.left=0;
    }
    if(this.oDiv.offsetTop<=0){
        this.oDiv.style.top=0;
    }
};