!function(a,n){var e={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",parentTag:"a",closeOnClick:!1,allowParentLinks:!1},t="slicknav",i="slicknav";a.fn[t]=function(t){return this.each(function(){function r(a){var n=a.data("menu");n||(n={},n.arrow=a.children("."+i+"_arrow"),n.ul=a.next("ul"),n.parent=a.parent(),a.data("menu",n)),a.parent().hasClass(i+"_collapsed")?(n.arrow.html(u.openedSymbol),n.parent.removeClass(i+"_collapsed"),l(n.ul,!0)):(n.arrow.html(u.closedSymbol),n.parent.addClass(i+"_collapsed"),l(n.ul,!0))}function l(a,n){var e=d(a),t=0;n&&(t=u.duration),a.hasClass(i+"_hidden")?(a.removeClass(i+"_hidden"),a.slideDown(t,u.easingOpen),a.attr("aria-hidden","false"),e.attr("tabindex","0"),s(a,!1)):(a.addClass(i+"_hidden"),a.slideUp(t,u.easingClose,function(){a.attr("aria-hidden","true"),e.attr("tabindex","-1"),s(a,!0),a.hide()}))}function s(n,e){var t=n.children("li").children("ul").not("."+i+"_hidden");t.each(e?function(){var n=a(this);n.attr("aria-hidden","true");var t=d(n);t.attr("tabindex","-1"),s(n,e)}:function(){var n=a(this);n.attr("aria-hidden","false");var t=d(n);t.attr("tabindex","0"),s(n,e)})}function d(a){var n=a.data("menu");if(!n){n={};var e=a.children("li"),t=e.children("a");n.links=t.add(e.children("."+i+"_item")),a.data("menu",n)}return n.links}function o(n){n?a("."+i+"_item, ."+i+"_btn").css("outline",""):a("."+i+"_item, ."+i+"_btn").css("outline","none")}var c=a(this),u=a.extend({},e,t);if(u.duplicate){var p=c.clone();p.removeAttr("id"),p.find("*").each(function(n,e){a(e).removeAttr("id")})}else var p=c;var h=i+"_icon";""==u.label&&(h+=" "+i+"_no-text"),"a"==u.parentTag&&(u.parentTag='a href="#"'),p.attr("class",i+"_nav");var f=a('<div class="'+i+'_menu"></div>'),v=a("<"+u.parentTag+' aria-haspopup="true" tabindex="0" class="'+i+'_btn"><span class="'+i+'_menutxt">'+u.label+'</span><span class="'+h+'"><span class="'+i+'_icon-bar"></span><span class="'+i+'_icon-bar"></span><span class="'+i+'_icon-bar"></span></span></a>');a(f).append(v),a(u.prependTo).prepend(f),f.append(p);var m=p.find("li");a(m).each(function(){var n=a(this);if(data={},data.children=n.children("ul").attr("role","menu"),n.data("menu",data),data.children.length>0){var e=n.contents(),t=[];a(e).each(function(){return a(this).is("ul")?!1:void t.push(this)});{a(t).wrapAll("<"+u.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+i+'_item"/>').parent()}n.addClass(i+"_collapsed"),n.addClass(i+"_parent"),a(t).last().after('<span class="'+i+'_arrow">'+u.closedSymbol+"</span>")}else 0==n.children().length&&n.addClass(i+"_txtnode");n.children("a").attr("role","menuitem").click(function(){u.closeOnClick&&a(v).click()})}),a(m).each(function(){var n=a(this).data("menu");l(n.children,!1)}),l(p,!1),p.attr("role","menu"),a(n).mousedown(function(){o(!1)}),a(n).keyup(function(){o(!0)}),a(v).click(function(a){a.preventDefault(),l(p,!0)}),p.on("click","."+i+"_item",function(n){n.preventDefault(),r(a(this))}),a(v).keydown(function(a){var n=a||event;13==n.keyCode&&(a.preventDefault(),l(p,!0))}),p.on("keydown","."+i+"_item",function(n){var e=n||event;13==e.keyCode&&(n.preventDefault(),r(a(n.target)))}),u.allowParentLinks&&a("."+i+"_item a").click(function(a){a.stopImmediatePropagation()})})}}(jQuery,document,window);