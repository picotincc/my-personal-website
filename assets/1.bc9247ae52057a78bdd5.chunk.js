webpackJsonp([1],{267:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(92),o=u(r),i=n(93),a=u(i),f=function(){function e(){(0,o.default)(this,e)}return(0,a.default)(e,null,[{key:"isPC",value:function(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=!0,u=0;u<t.length;u++)if(e.indexOf(t[u])>0){n=!1;break}return n}}]),e}();t.default=f},269:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(92),o=u(r),i=n(93),a=u(i),f=n(117),l=u(f),d=n(116),c=u(d),s=n(14),p=u(s),v=n(183),_=n(267),P=u(_),y=function(e){function t(e){(0,o.default)(this,t);var n=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n.redirect(),n}return(0,c.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){}},{key:"redirect",value:function(){P.default.isPC()||v.browserHistory.push("/mobile")}},{key:"render",value:function(){return p.default.createElement("div",{className:"cs-pc-app"},"PC端")}}]),t}(s.Component);y.defaultProps={},y.propTypes={},t.default=y}});