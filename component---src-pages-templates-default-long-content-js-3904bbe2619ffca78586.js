(window.webpackJsonp=window.webpackJsonp||[]).push([[71,33,35,36,74],{"3d4j":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));var n=a("q1tI"),i=a.n(n);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return i.a.createElement("footer",{className:"footer-container","data-id":"footer-container"},i.a.createElement("div",{className:"footer"},i.a.createElement("nav",{className:"footer-nav"},i.a.createElement("ul",{className:"footer-nav-links"},i.a.createElement("li",null,i.a.createElement("a",{href:""},"Contact Us")),i.a.createElement("li",null,i.a.createElement("a",{href:""},"What's New")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://samaritanministries.org/uploads/documents/Samaritan_Given_Guidelines.pdf",rel:"noopener noreferrer",target:"_blank"},"Guidelines ",i.a.createElement("i",{className:"dashing-icon dashing-icon--new-tab dashing-icon--blue"})))))))},n}(i.a.Component)},"6oEm":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("TSYQ"),i=a.n(n),l=a("q1tI"),r=a.n(l);var s=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={hideMenu:!0},a.toggleMenu=a.toggleMenu.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.render=function(){var e=this.SubNavigation.bind(this);return r.a.createElement(e,null)},l.SubNavigation=function(){var e,t,a=this.SubNavTitle.bind(this),n=this.props,l=n.children,s=n.className,c=n.listClassName,o=n.title;return r.a.createElement("nav",{className:i()("sub-nav",(e={},e[s]=!!s,e["has-title"]=null!=o,e))},null!=o&&r.a.createElement(a,null),r.a.createElement("ul",{className:i()((t={},t[c]=!!c,t["hide-menu"]=this.state.hideMenu,t))},l))},l.SubNavTitle=function(){var e=this.props.title;this.toggleMenu.bind(this);return r.a.createElement("div",{className:"sub-nav--title",onClick:this.toggleMenu},e,r.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-down dashing-icon--purple sub-nav--icon"}))},l.toggleMenu=function(){this.setState((function(e){return{hideMenu:!e.hideMenu}}))},n}(r.a.Component);s.defaultProps={className:void 0,listClassName:void 0,message:void 0}},"9QA0":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),l=a("Wbzz"),r=a("3d4j"),s=a("tz0Y");a("EfUI"),a("yAO8");t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.default,null),i.a.createElement("main",{className:"content"},i.a.createElement("div",{className:"grid grid-padding"},i.a.createElement("div",{className:"grid--full grid--half_desktop"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content"},i.a.createElement("h1",null,"Primary Header"),i.a.createElement("p",null,"Header description"),i.a.createElement(l.a,{to:"/templates/default"},"Default Page"))),i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content"},i.a.createElement("h1",null,"Primary Header"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate massa sed lacus aliquet, nec placerat neque pellentesque. Ut aliquet gravida lacus quis aliquam. Aenean placerat tellus a ipsum hendrerit, nec bibendum elit pharetra. Pellentesque eleifend felis vitae elit maximus convallis. Donec rhoncus est ut arcu auctor, sit amet aliquam sapien malesuada. Suspendisse potenti. Fusce tortor massa, pharetra eu ligula laoreet, ultrices faucibus elit. Donec eget tortor pharetra, tincidunt libero nec, dictum metus. Nam vitae placerat dolor. Vivamus in leo bibendum, iaculis lectus sed, mollis lorem. Donec viverra ex et luctus facilisis. Aenean orci mi, efficitur quis feugiat in, venenatis ut turpis. In mattis accumsan accumsan. Aliquam vel sapien euismod, malesuada odio non, ullamcorper magna. Aliquam a egestas enim, vitae imperdiet nulla. Suspendisse maximus nunc non lorem congue lacinia et ut ligula. Curabitur blandit porta tellus, a maximus lacus luctus non. Donec posuere gravida diam non tempor. Phasellus sed purus nunc. Morbi eu odio blandit, aliquet leo sit amet, blandit lorem. Nulla lorem nibh, molestie sit amet justo eu, ullamcorper mattis elit. Sed ac urna mollis, varius erat non, pharetra mi. Nam molestie arcu diam, vitae dignissim lacus tristique eu. In aliquam tristique dui sed sagittis. Proin tincidunt faucibus dolor, nec condimentum dui ultrices sit amet. Nam mattis magna felis, eget consectetur dui gravida at.")))))),i.a.createElement(r.default,null))}},DqTS:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("TSYQ"),i=a.n(n),l=a("q1tI"),r=a.n(l);var s=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.render=function(){var e=this.MobileMenu.bind(this);return r.a.createElement(e,null)},l.MobileMenu=function(){var e=this.SubNavLinks.bind(this),t=this.props.disableClick;return this.toggleMenuOpen=this.toggleMenuOpen.bind(this),r.a.createElement("div",{className:"mobile-menu_container"},r.a.createElement("button",{type:"button",style:{position:"absolute"},onClick:this.toggleMenuOpen,className:i()({"mobile-menu_toggle":!0,"is-open":this.state.isOpen,"disable-click":t})},r.a.createElement("i",{"data-id":"menu-icon",className:"dashing-icon no-margin "+(this.state.isOpen?"dashing-icon--close":"dashing-icon--menu")})),r.a.createElement(e,null))},l.SubNavLinks=function(){return r.a.createElement("section",{className:"mobile-menu_overlay "+(this.state.isOpen?"":"is-collapsed")},r.a.createElement("aside",{className:"mobile-sidebar"},r.a.createElement("div",{className:"mobile-sidebar_header"}),r.a.createElement("nav",{className:"mobile-sidebar_nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Page 1")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Page 2")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Page 3"))))))},l.toggleMenuOpen=function(){this.setState((function(e){return{isOpen:!e.isOpen}}))},n}(r.a.Component);s.defaultProps={disableClick:!1}},TSYQ:function(e,t,a){var n;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var r=i.apply(null,n);r&&e.push(r)}else if("object"===l)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},tz0Y:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var n=a("Wbzz"),i=a("q1tI"),l=a.n(i),r=a("DqTS"),s=a("6oEm");var c=function(e){var t,a;function i(t){return e.call(this,t)||this}a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=i.prototype;return c.render=function(){var e=this.MainHeader.bind(this),t=this.props.hasSubNav;return l.a.createElement(l.a.Fragment,null,l.a.createElement(e,null),t&&l.a.createElement(s.default,null,l.a.createElement("li",null,l.a.createElement(n.a,{to:"/",className:"active"},"Option 1")),l.a.createElement("li",null,l.a.createElement(n.a,{to:"/"},"Option 2")),l.a.createElement("li",null,l.a.createElement(n.a,{to:"/"},"Option 3"))))},c.MainHeader=function(){return l.a.createElement("header",{className:"header"},l.a.createElement(r.default,null),l.a.createElement("div",{className:"logo"},l.a.createElement("p",{className:"text-color--purple"},"LOGO")),l.a.createElement("nav",{className:"header-nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(n.a,{to:"/",className:"active"},"Page 1")),l.a.createElement("li",null,l.a.createElement(n.a,{to:"/"},"Page 2")),l.a.createElement("li",null,l.a.createElement(n.a,{to:"/"},"Page 3")))),l.a.createElement("div",{className:"alert"},l.a.createElement("i",{className:"dashing-icon dashing-icon--notification"}),l.a.createElement("div",{className:"count"},"100")),l.a.createElement("div",{className:"profile"},l.a.createElement("div",{className:"profile-image"},l.a.createElement("span",{className:"initials"},"RF")),l.a.createElement("span",{className:"profile-name"},"Ryan Fitzgerald"),l.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-down dashing-icon--black"})))},c.toggleMenuOpen=function(){this.setState((function(e){return{isOpen:!e.isOpen}}))},i}(l.a.Component);c.defaultProps={hasSubNav:!1}}}]);
//# sourceMappingURL=component---src-pages-templates-default-long-content-js-3904bbe2619ffca78586.js.map