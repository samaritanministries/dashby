(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(e,a,t){"use strict";t.r(a);var n=t(9),o=t.n(n),i=t(0),s=t.n(i),c=t(4),r=t.n(c),l=t(227),d=t.n(l),m=t(216),u=t(220),p=t(218),g=t(219),h=t(225),f="Accordion".toLowerCase(),v=function(e){function a(){return e.apply(this,arguments)||this}o()(a,e);var t=a.prototype;return t.componentDidMount=function(){d()("#toggleAccordion").click(function(){this.parentElement.classList.toggle("expanded"),d()(".accordion--content").slideToggle(200)})},t.render=function(){var e=this.props.location;return s.a.createElement(u.a,null,s.a.createElement("header",{className:"subnav"},s.a.createElement("h1",null,"Accordion"),s.a.createElement(p.a,{pageName:f})),s.a.createElement(g.a,null,s.a.createElement("div",{className:"grid grid-padding"},s.a.createElement("h2",{id:"defaultAccordian"},"Default Accordion",s.a.createElement(m.Link,{to:e.pathname+"/#defaultAccordian",className:"button button--transparent button--copy-link"})),s.a.createElement("div",{className:"example-container"},s.a.createElement("div",{className:"accordion",style:{marginBottom:"1rem"}},s.a.createElement("div",{className:"accordion--header",id:"toggleAccordion",tabIndex:"0"},s.a.createElement("i",{className:"dashing-icon accordion--arrow"}),s.a.createElement("h3",{className:"title"},"Accordion Title"),s.a.createElement("h3",{className:"secondary-title"},"$100.00")),s.a.createElement("div",{className:"accordion--content"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),s.a.createElement(h.a,null,'<div class="accordion">\n<div class="accordion--header" id="toggleAccordion" tabindex="0">\n  <i class="dashing-icon accordion--arrow"></i>\n  <h3 class="title">Accordion Title</h3>\n</div>\n\n<div class="accordion--content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>\n\n</div>')))))},a}(s.a.Component);v.propTypes={location:r.a.object.isRequired},a.default=v},218:function(e,a,t){"use strict";var n=t(0),o=t.n(n),i=t(216);a.a=function(e){var a=e.pageName,t=e.sectionName;null==t&&(t="components"),"css grid"===a?a="css-grid":"progress stepper"===a?a="progress-stepper":"radio buttons"===a&&(a="radio-buttons");var n=a,s=t;return o.a.createElement("div",{className:"subnav-links"},o.a.createElement(i.Link,{to:s+"/"+n+"/code",activeClassName:"active"},"Code"),o.a.createElement(i.Link,{to:s+"/"+n+"/guidelines",activeClassName:"active"},"Guidelines"))}},225:function(e,a,t){"use strict";t(58),t(222);var n=t(9),o=t.n(n),i=t(56),s=t.n(i),c=t(0),r=t.n(c),l=t(230),d=t.n(l),m=(t(226),function(e){function a(a){var t;return(t=e.call(this,a)||this).state={showCode:!1},t.toggleCode=t.toggleCode.bind(s()(s()(t))),t}o()(a,e);var t=a.prototype;return t.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},t.componentDidMount=function(){d.a.highlightAll()},t.render=function(){return d.a.plugins.customClass.map({tag:"exampletag"}),r.a.createElement("div",{className:this.state.showCode?"group-open":""},r.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},r.a.createElement("i",{className:"icon--code"})),r.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},r.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},a}(r.a.Component));a.a=m},226:function(e,a,t){(function(e){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var a={classMap:{}};Prism.plugins.customClass={map:function(e){a.classMap=e},prefix:function(e){a.prefixString=e}},Prism.hooks.add("wrap",function(e){(a.classMap||a.prefixString)&&(e.classes=e.classes.map(function(e){return(a.prefixString||"")+(a.classMap[e]||e)}))})}}()}).call(this,t(234))}}]);
//# sourceMappingURL=component---src-pages-components-accordion-code-js-f57b77bc1d6db0b931f6.js.map