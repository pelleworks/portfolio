"use strict";$(".rein").hover(function(){$("body").css("background-color","#AF1105")},function(){$("body").css("background-color","black")}),$(".triss").hover(function(){$("body").css("background-color","#D8D8D8")},function(){$("body").css("background-color","black")}),$(".sodastream").hover(function(){$("body").css("background-color","#9C6AB2")},function(){$("body").css("background-color","black")}),$(".smycka").hover(function(){$("body").css("background-color","#C8A973")},function(){$("body").css("background-color","black")});var TxtType=function(t,o,s){this.toRotate=o,this.el=t,this.loopNum=0,this.period=parseInt(s,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};TxtType.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,o=this.toRotate[t];this.isDeleting?this.txt=o.substring(0,this.txt.length-1):this.txt=o.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var s=this,i=200-100*Math.random();this.isDeleting&&(i/=2),this.isDeleting||this.txt!==o?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,i=500):(i=this.period,this.isDeleting=!0),setTimeout(function(){s.tick()},i)},window.onload=function(){for(var t=document.getElementsByClassName("typewrite"),o=0;o<t.length;o++){var s=t[o].getAttribute("data-type"),i=t[o].getAttribute("data-period");s&&new TxtType(t[o],JSON.parse(s),i)}};