(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{169:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),l=n(210),s=n(214),o=n(212),c=n(213),m=n(219),r="Navigation".toLowerCase();a.default=function(){return i.a.createElement(s.a,null,i.a.createElement("header",{className:"subnav"},i.a.createElement("h1",null,"Navigation"),i.a.createElement(o.a,{pageName:r})),i.a.createElement(c.a,null,i.a.createElement("div",{className:"grid grid-padding"},i.a.createElement("h2",null,"Default Navigation"),i.a.createElement("div",{className:"example-container relative"},i.a.createElement("header",{className:"header mb-space-m"},i.a.createElement(l.Link,{to:"/templates/mobile",className:"button--mobile-sidebar",id:"close-button"},i.a.createElement("i",{className:"dashing-icon dashing-icon--menu"})),i.a.createElement("nav",{className:"header-nav"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.Link,{to:"/components/navigation/code",className:"active"},"Page 1")),i.a.createElement("li",null,i.a.createElement(l.Link,{to:"/components/navigation/code"},"Page 2")),i.a.createElement("li",null,i.a.createElement(l.Link,{to:"/components/navigation/code"},"Page 3"))))),i.a.createElement(m.a,null,'<header className="header">\n<Link to={"/templates/mobile"} class="button--mobile-sidebar" id="close-button"><i className="dashing-icon dashing-icon--menu"></i></Link>\n<nav class="header-nav">\n  <ul>\n    <li><Link to={"/"} class="active">Page 1</Link></li>\n    <li><Link to={"/"}>Page 2</Link></li>\n    <li><Link to={"/"}>Page 3</Link></li>\n  </ul>\n</nav>\n</header>')),i.a.createElement("h2",{className:"mt-space-xl"},"Subnavigation"),i.a.createElement("div",{className:"example-container relative"},i.a.createElement("header",{className:"header"},i.a.createElement(l.Link,{to:"/templates/mobile",className:"button--mobile-sidebar",id:"close-button"},i.a.createElement("i",{className:"dashing-icon dashing-icon--menu"})),i.a.createElement("nav",{className:"header-nav"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.Link,{to:"/components/navigation/code",className:"active"},"Page 1")),i.a.createElement("li",null,i.a.createElement(l.Link,{to:"/components/navigation/code"},"Page 2")),i.a.createElement("li",null,i.a.createElement(l.Link,{to:"/components/navigation/code"},"Page 3"))))),i.a.createElement("nav",{className:"sub-nav mb-space-m"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.Link,{to:"/components/navigation/code",className:"active"},"Option 1")),i.a.createElement("li",null,i.a.createElement(l.Link,{to:"/components/navigation/code"},"Option 2")),i.a.createElement("li",null,i.a.createElement(l.Link,{to:"/components/navigation/code"},"Option 3")),i.a.createElement("li",null,i.a.createElement(l.Link,{to:"/components/navigation/code"},"Option 4")))),i.a.createElement(m.a,null,'<header className="header">\n<Link to={"/templates/mobile"} class="button--mobile-sidebar" id="close-button"><i className="dashing-icon dashing-icon--menu"></i></Link>\n<nav class="header-nav">\n  <ul>\n    <li><Link to={"/"} class="active">Page 1</Link></li>\n    <li><Link to={"/"}>Page 2</Link></li>\n    <li><Link to={"/"}>Page 3</Link></li>\n  </ul>\n</nav>\n</header>\n<nav class="sub-nav">\n<ul>\n  <li><Link to={"/"} class="active">Option 1</Link></li>\n  <li><Link to={"/"}>Option 2</Link></li>\n  <li><Link to={"/"}>Option 3</Link></li>\n  <li><Link to={"/"}>Option 4</Link></li>\n</ul>\n</nav>')))))}},212:function(e,a,n){"use strict";var t=n(0),i=n.n(t),l=n(210);a.a=function(e){var a=e.pageName,n=e.sectionName;null==n&&(n="components"),"css grid"===a?a="css-grid":"progress stepper"===a?a="progress-stepper":"radio buttons"===a&&(a="radio-buttons");var t=a,s=n;return i.a.createElement("div",{className:"subnav-links"},i.a.createElement(l.Link,{to:s+"/"+t+"/code",activeClassName:"active"},"Code"),i.a.createElement(l.Link,{to:s+"/"+t+"/guidelines",activeClassName:"active"},"Guidelines"))}},219:function(e,a,n){"use strict";n(54),n(216);var t=n(8),i=n.n(t),l=n(52),s=n.n(l),o=n(0),c=n.n(o),m=n(224),r=n.n(m),u=(n(220),function(e){function a(a){var n;return(n=e.call(this,a)||this).state={showCode:!1},n.toggleCode=n.toggleCode.bind(s()(s()(n))),n}i()(a,e);var n=a.prototype;return n.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},n.componentDidMount=function(){r.a.highlightAll()},n.render=function(){return r.a.plugins.customClass.map({tag:"exampletag"}),c.a.createElement("div",{className:this.state.showCode?"group-open":""},c.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},c.a.createElement("i",{className:"icon--code"})),c.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},c.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},a}(c.a.Component));a.a=u},220:function(e,a,n){(function(e){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var a={classMap:{}};Prism.plugins.customClass={map:function(e){a.classMap=e},prefix:function(e){a.prefixString=e}},Prism.hooks.add("wrap",function(e){(a.classMap||a.prefixString)&&(e.classes=e.classes.map(function(e){return(a.prefixString||"")+(a.classMap[e]||e)}))})}}()}).call(this,n(228))}}]);
//# sourceMappingURL=component---src-pages-components-navigation-code-js-9bd5ebfce23b41470dfb.js.map