/*!
zepto.tab.js v1.0.0 yanhaijing.com license.txt
*/
(function(a){a.fn.tab=function(d){var e=a.extend({tabHeaderWrap:".js-tab-header",tabHeader:"li",tabBodyWrap:".js-tab-body",tabBody:"li",curClass:"cur",speed:500,startIndex:0,touchAnimation:false},d),b=e.startIndex,j=a(this),l=j,f=a(e.tabHeaderWrap,l),h=a(e.tabHeader,f),k=a(e.tabBodyWrap,j),g=a(e.tabBody,k),i=h.length,c=k.width();return a(this).each(function(){function m(){function n(p){var q=0,o=0;if(p<0){p=0;}if(p>=i){p=i-1;}b=p;q=-(p*c)+"px";h.removeClass(e.curClass).eq(p).addClass(e.curClass);k.css({"-webkit-transform":"translate("+q+")","-webkit-transition":e.speed+"ms linear"});}l.addClass("js-tab");f.addClass("js-tab-header");h.addClass("js-tab-header-li");k.addClass("js-tab-body");g.addClass("js-tab-body-li");k.width(c*i);g.width(c);h.tap(function(){n(a(this).index());});k.swipeLeft(function(o){n(b+1);});k.swipeRight(function(o){n(b-1);});if(e.touchAnimation){k.on("touchstart",function(o){var p;o.preventDefault();p=o.touches[0];startX=p.pageX;});k.on("touchmove",function(q){var u=q.touches[0],o=u.pageX-startX,p=k.css("-webkit-transform").match(/translate\((.*)\)/),t=(parseInt(p&&p[1],10))||0,s=(t<-c*(i-1)||t>0)?0.4:1,r=t+o*s;startX=u.pageX;event.preventDefault();k.css({"-webkit-transform":"translate("+r+"px)","-webkit-transition":"0ms"});});k.on("touchend",function(o){o.preventDefault();n(b);});}a(window).on("resize",function(o){k.css("display","none");c=l.width();k.width(c*i);g.width(c);k.css("display","block");n(b);});}m();});};}(Zepto));