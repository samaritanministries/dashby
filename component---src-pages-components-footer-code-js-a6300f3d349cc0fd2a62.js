(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{158:function(e,t,a){"use strict";a.r(t);var o=a(7),n=a.n(o),r=a(0),s=a.n(r),l=a(213),i=a(4),c=a.n(i),u=a(218),m=a(217),p=a(216),f=a(222),d=a(226),h="Footer".toLowerCase(),g=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.location;return s.a.createElement(u.a,null,s.a.createElement("header",{className:"subnav"},s.a.createElement("h1",null,"Footer"),s.a.createElement(m.a,{pageName:h})),s.a.createElement(p.a,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"column column--full"},s.a.createElement("h2",{className:"example-header no-margin--top",id:"footer"},"Footer",s.a.createElement(l.a,{to:e.pathname+"/#footer",className:"button button--transparent button--copy-link"})),s.a.createElement("div",{className:"row example-container"},s.a.createElement("div",{className:"column column--full",style:{overflow:"auto"}},s.a.createElement("footer",{className:"app-footer example--footer",style:{position:"relative"}},s.a.createElement("div",{className:"row no-padding"},s.a.createElement("button",{className:"button button--primary float-left"},"Save"),s.a.createElement("button",{className:"button button--primary button--green float-right"},"Submit"))))),s.a.createElement(f.a,null,'\x3c!-- Apply the fixed class to the app-footer element to fix it to the bottom --\x3e\n<footer class="app-footer fixed">\n  <div class="row no-padding">\n    <button class="float-left">Save</button>\n    <button class="button--green float-right">Submit</button>\n  </div>\n</footer>'),s.a.createElement(d.a,null,"//Include these variables in your theme file to change the color theme of your footer\n$footer-color: $white !default; //Override this variable to change the color of your footer\n$footer-border-color: $gray-200 !default; //Override this variable to change the color of the top border of your footer")))))},t}(s.a.Component);g.propTypes={location:c.a.object.isRequired},t.default=g},217:function(e,t,a){"use strict";a(34);var o=a(0),n=a.n(o),r=a(213);t.a=function(e){var t=e.pageName,a=e.sectionName;null==a&&(a="components"),"css grid"===t?t="css-grid":"progress stepper"===t?t="progress-stepper":"radio buttons"===t&&(t="radio-buttons");var o=t,s=a,l=function(e){return e.isPartiallyCurrent?{className:"active"}:{className:""}},i=function(e){return n.a.createElement(r.a,Object.assign({getProps:l},e),e.children)};return n.a.createElement("div",{className:"subnav-links"},n.a.createElement(i,{to:s+"/"+o+"/code"},"Code"),n.a.createElement(i,{to:s+"/"+o+"/guidelines"},"Guidelines"))}},222:function(e,t,a){"use strict";var o=a(35),n=a.n(o),r=a(7),s=a.n(r),l=a(0),i=a.n(l),c=a(224),u=a.n(c),m=(a(223),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(n()(a)),a}s()(t,e);var a=t.prototype;return a.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},a.componentDidMount=function(){u.a.highlightAll()},a.render=function(){return u.a.plugins.customClass.map({tag:"exampletag"}),i.a.createElement("div",{className:this.state.showCode?"group-open":""},i.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},i.a.createElement("i",{className:"icon--code"})),i.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},i.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},t}(i.a.Component));t.a=m},223:function(e,t,a){(function(e){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var t={classMap:{}};Prism.plugins.customClass={map:function(e){t.classMap=e},prefix:function(e){t.prefixString=e}},Prism.hooks.add("wrap",function(e){(t.classMap||t.prefixString)&&(e.classes=e.classes.map(function(e){return(t.prefixString||"")+(t.classMap[e]||e)}))})}}()}).call(this,a(76))}}]);
//# sourceMappingURL=component---src-pages-components-footer-code-js-a6300f3d349cc0fd2a62.js.map