'use strict'
function Drag(id){
    if(!id)return;
    this.oDiv=document.getElementById(id);
    this.disX=0;
    this.disY=0;
    this.init();
}
Drag.prototype.init=function(){
    var _this=this;
    this.oDiv.onmousedown=function(ev){
        var oEvent=ev||event;
        _this.fndown(oEvent);
        this.setCapture&&this.setCapture();
        return false
    }
};
Drag.prototype.fndown=function(ev){
    this.disX=ev.clientX-this.oDiv.offsetLeft;
    this.disY=ev.clientY-this.oDiv.offsetTop;
    var _this=this;
    document.onmousemove=function(ev){
        var oEvent=ev||event;
        _this.fnmove(oEvent);
    };
    document.onmouseup=function(){
        _this.fnup();
    }
};
Drag.prototype.fnmove=function(ev){
    this.oDiv.style.left=ev.clientX-this.disX+'px';
    this.oDiv.style.top=ev.clientY-this.disY+'px';
};
Drag.prototype.fnup=function(){
    document.onmousemove=null;
    document.onmouseup=null;
    this.oDiv.releaseCapture&&this.oDiv.releaseCapture()
};