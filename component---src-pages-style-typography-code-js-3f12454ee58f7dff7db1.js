(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{198:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(212),r=t(216),c=t(214),i=t(215),o=t(221),u="Typography".toLowerCase();a.default=function(){return l.a.createElement(r.a,null,l.a.createElement("header",{className:"subnav"},l.a.createElement("h1",null,"Typography"),l.a.createElement(c.a,{pageName:u,sectionName:"style"})),l.a.createElement(i.a,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column column--full"},l.a.createElement("h2",{className:"example-header no-margin--top"},"Headers ",l.a.createElement("button",{className:"button button--transparent button--copy-link","data-id":"copyurl",id:"Headers"})),l.a.createElement("div",{className:"row example-container"},l.a.createElement("div",{className:"column column--full"},l.a.createElement("h1",null,"h1. Header 1"),l.a.createElement("h2",null,"h2. Header 2"),l.a.createElement("h3",null,"h3. Header 3"),l.a.createElement("h4",null,"h4. Header 4"))),l.a.createElement(o.a,null,"<h1>h1. Header 1</h1>\n<h2>h2. Header 2</h2>\n<h3>h3. Header 3</h3>\n<h4>h4. Header 4</h4>"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column column--full"},l.a.createElement("h2",{className:"example-header"},"Body Text ",l.a.createElement("button",{className:"button button--transparent button--copy-link","data-id":"copyurl",id:"Body_Text"})),l.a.createElement("div",{className:"row example-container"},l.a.createElement("div",{className:"column column--full"},l.a.createElement("p",null,"Nunc hendrerit lectus velit, vel fringilla sem molestie at. Etiam orci ipsum, iaculis eu magna vel, commodo efficitur metus. Praesent elementum justo eros, eu efficitur metus interdum ut. Morbi finibus eros in dolor condimentum bibendum."),l.a.createElement("p",null,"Aliquam luctus malesuada erat, a efficitur dolor consequat ac. Suspendisse sodales aliquet velit in elementum. Proin malesuada auctor libero, ut accumsan dolor tincidunt in."),l.a.createElement("p",null,l.a.createElement("strong",null,"Duis fermentum nisi nec ornare volutpat. Donec ultricies ante at nunc consectetur viverra. Pellentesque ac augue lorem. Nulla facilisi.")))),l.a.createElement(o.a,null,"<p>Nunc hendrerit lectus velit, vel fringilla sem molestie at. Etiam orci ipsum, iaculis eu magna vel, commodo efficitur metus. Praesent elementum justo eros, eu efficitur metus interdum ut. Morbi finibus eros in dolor condimentum bibendum.</p>\n<p>Aliquam luctus malesuada erat, a efficitur dolor consequat ac. Suspendisse sodales aliquet velit in elementum. Proin malesuada auctor libero, ut accumsan dolor tincidunt in.</p>\n<p><strong>Duis fermentum nisi nec ornare volutpat. Donec ultricies ante at nunc consectetur viverra. Pellentesque ac augue lorem. Nulla facilisi.</strong></p>"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"column column--full"},l.a.createElement("h2",{className:"example-header"},"Hyperlinks ",l.a.createElement("button",{className:"button button--transparent button--copy-link","data-id":"copyurl",id:"Hyperlinks"})),l.a.createElement("div",{className:"row example-container"},l.a.createElement("div",{className:"column column--full"},l.a.createElement(s.Link,{to:"style/typography/code"},"Click Here"),l.a.createElement("p",null,"Phasellus vel luctus libero. ",l.a.createElement(s.Link,{to:"style/typography/code"},"Maecenas sit")," amet leo vestibulum, vehicula arcu id, tempus dolor."))),l.a.createElement(o.a,null,"<a>Click Here</a>\n<p>Phasellus vel luctus libero. <a>Maecenas sit</a> amet leo vestibulum, vehicula arcu id, tempus dolor.</p>")))))}},214:function(e,a,t){"use strict";t(40);var n=t(0),l=t.n(n),s=t(212);a.a=function(e){var a=e.pageName,t=e.sectionName;null==t&&(t="components"),"css grid"===a?a="css-grid":"progress stepper"===a?a="progress-stepper":"radio buttons"===a&&(a="radio-buttons");var n=a,r=t,c=function(e){return e.isPartiallyCurrent?{className:"active"}:{className:""}},i=function(e){return l.a.createElement(s.Link,Object.assign({getProps:c},e),e.children)};return l.a.createElement("div",{className:"subnav-links"},l.a.createElement(i,{to:r+"/"+n+"/code"},"Code"),l.a.createElement(i,{to:r+"/"+n+"/guidelines"},"Guidelines"))}},221:function(e,a,t){"use strict";t(58),t(218);var n=t(9),l=t.n(n),s=t(56),r=t.n(s),c=t(0),i=t.n(c),o=t(226),u=t.n(o),m=(t(222),function(e){function a(a){var t;return(t=e.call(this,a)||this).state={showCode:!1},t.toggleCode=t.toggleCode.bind(r()(r()(t))),t}l()(a,e);var t=a.prototype;return t.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},t.componentDidMount=function(){u.a.highlightAll()},t.render=function(){return u.a.plugins.customClass.map({tag:"exampletag"}),i.a.createElement("div",{className:this.state.showCode?"group-open":""},i.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},i.a.createElement("i",{className:"icon--code"})),i.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},i.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},a}(i.a.Component));a.a=m},222:function(e,a,t){(function(e){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var a={classMap:{}};Prism.plugins.customClass={map:function(e){a.classMap=e},prefix:function(e){a.prefixString=e}},Prism.hooks.add("wrap",function(e){(a.classMap||a.prefixString)&&(e.classes=e.classes.map(function(e){return(a.prefixString||"")+(a.classMap[e]||e)}))})}}()}).call(this,t(230))}}]);
//# sourceMappingURL=component---src-pages-style-typography-code-js-3f12454ee58f7dff7db1.js.map