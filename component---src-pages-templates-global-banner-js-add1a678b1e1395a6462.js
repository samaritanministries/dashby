(window.webpackJsonp=window.webpackJsonp||[]).push([[75,33,35,36],{"6oEm":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("TSYQ"),l=a.n(n),r=a("q1tI"),i=a.n(r);var s=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={hideMenu:!0},a.toggleMenu=a.toggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.render=function(){var e=this.SubNavigation.bind(this);return i.a.createElement(e,null)},r.SubNavigation=function(){var e,t,a=this.SubNavTitle.bind(this),n=this.props,r=n.children,s=n.className,c=n.listClassName,o=n.title;return i.a.createElement("nav",{className:l()("sub-nav",(e={},e[s]=!!s,e["has-title"]=null!=o,e))},null!=o&&i.a.createElement(a,null),i.a.createElement("ul",{className:l()((t={},t[c]=!!c,t["hide-menu"]=this.state.hideMenu,t))},r))},r.SubNavTitle=function(){var e=this.props.title;this.toggleMenu.bind(this);return i.a.createElement("div",{className:"sub-nav--title",onClick:this.toggleMenu},e,i.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-down dashing-icon--purple sub-nav--icon"}))},r.toggleMenu=function(){this.setState((function(e){return{hideMenu:!e.hideMenu}}))},n}(i.a.Component);s.defaultProps={className:void 0,listClassName:void 0,message:void 0}},DqTS:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("TSYQ"),l=a.n(n),r=a("q1tI"),i=a.n(r);var s=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.render=function(){var e=this.MobileMenu.bind(this);return i.a.createElement(e,null)},r.MobileMenu=function(){var e=this.SubNavLinks.bind(this),t=this.props.disableClick;return this.toggleMenuOpen=this.toggleMenuOpen.bind(this),i.a.createElement("div",{className:"mobile-menu_container"},i.a.createElement("button",{type:"button",style:{position:"absolute"},onClick:this.toggleMenuOpen,className:l()({"mobile-menu_toggle":!0,"is-open":this.state.isOpen,"disable-click":t})},i.a.createElement("i",{"data-id":"menu-icon",className:"dashing-icon no-margin "+(this.state.isOpen?"dashing-icon--close":"dashing-icon--menu")})),i.a.createElement(e,null))},r.SubNavLinks=function(){return i.a.createElement("section",{className:"mobile-menu_overlay "+(this.state.isOpen?"":"is-collapsed")},i.a.createElement("aside",{className:"mobile-sidebar"},i.a.createElement("div",{className:"mobile-sidebar_header"}),i.a.createElement("nav",{className:"mobile-sidebar_nav"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Page 1")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Page 2")),i.a.createElement("li",null,i.a.createElement("a",{href:"#"},"Page 3"))))))},r.toggleMenuOpen=function(){this.setState((function(e){return{isOpen:!e.isOpen}}))},n}(i.a.Component);s.defaultProps={disableClick:!1}},FudC:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("tz0Y");a("EfUI"),a("yAO8");t.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.default,null),l.a.createElement("main",{className:"content"},l.a.createElement("div",{className:"grid grid-padding"},l.a.createElement("div",{className:"grid--full grid--half_desktop"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content"},l.a.createElement("h1",null,"Primary Header"),l.a.createElement("p",null,"Header description"),l.a.createElement(r.a,{to:"/templates/overpanel"},"Full Page")))))))}},TSYQ:function(e,t,a){var n;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var i=l.apply(null,n);i&&e.push(i)}else if("object"===r)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},tz0Y:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var n=a("Wbzz"),l=a("q1tI"),r=a.n(l),i=a("DqTS"),s=a("6oEm");var c=function(e){var t,a;function l(t){return e.call(this,t)||this}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=l.prototype;return c.render=function(){var e=this.MainHeader.bind(this),t=this.props.hasSubNav;return r.a.createElement(r.a.Fragment,null,r.a.createElement(e,null),t&&r.a.createElement(s.default,null,r.a.createElement("li",null,r.a.createElement(n.a,{to:"/",className:"active"},"Option 1")),r.a.createElement("li",null,r.a.createElement(n.a,{to:"/"},"Option 2")),r.a.createElement("li",null,r.a.createElement(n.a,{to:"/"},"Option 3"))))},c.MainHeader=function(){return r.a.createElement("header",{className:"header"},r.a.createElement(i.default,null),r.a.createElement("div",{className:"logo"},r.a.createElement("p",{className:"text-color--purple"},"LOGO")),r.a.createElement("nav",{className:"header-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(n.a,{to:"/",className:"active"},"Page 1")),r.a.createElement("li",null,r.a.createElement(n.a,{to:"/"},"Page 2")),r.a.createElement("li",null,r.a.createElement(n.a,{to:"/"},"Page 3")))),r.a.createElement("div",{className:"alert"},r.a.createElement("i",{className:"dashing-icon dashing-icon--notification"}),r.a.createElement("div",{className:"count"},"100")),r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile-image"},r.a.createElement("span",{className:"initials"},"RF")),r.a.createElement("span",{className:"profile-name"},"Ryan Fitzgerald"),r.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-down dashing-icon--black"})))},c.toggleMenuOpen=function(){this.setState((function(e){return{isOpen:!e.isOpen}}))},l}(r.a.Component);c.defaultProps={hasSubNav:!1}}}]);
//# sourceMappingURL=component---src-pages-templates-global-banner-js-add1a678b1e1395a6462.js.map