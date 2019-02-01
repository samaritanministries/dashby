(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{173:function(e,t,a){"use strict";a.r(t);var s=a(9),n=a.n(s),l=a(0),i=a.n(l),o=a(216),r=a(4),c=a.n(r),u=a(220),m=a(218),d=a(219),p=a(225),h=a(232),g="Lists".toLowerCase(),f=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.location;return i.a.createElement(u.a,null,i.a.createElement("header",{className:"subnav"},i.a.createElement("h1",null,"Lists"),i.a.createElement(m.a,{pageName:g})),i.a.createElement(d.a,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"column column--full"},i.a.createElement("h2",{className:"example-header no-margin--top",id:"orderedLists"},"Ordered Lists",i.a.createElement(o.Link,{to:e.pathname+"/#orderedLists",className:"button button--transparent button--copy-link"})),i.a.createElement("div",{className:"row example-container"},i.a.createElement("div",{className:"column column--full",style:{overflow:"auto"}},i.a.createElement("ol",{className:"ordered-list--custom"},i.a.createElement("li",null,"This is the first item"),i.a.createElement("li",null,"This is the second item"),i.a.createElement("li",null,"This is the third item"),i.a.createElement("li",null,"This is the fourth item")))),i.a.createElement(p.a,null,'<ol class="ordered-list--custom">\n  <li>This is the first item</li>\n  <li>This is the second item</li>\n  <li>This is the third item</li>\n  <li>This is the fourth item</li>\n</ol>'),i.a.createElement("h2",{className:"example-header",id:"customColoredLists"},"Custom Colored Lists",i.a.createElement(o.Link,{to:e.pathname+"/#customColoredLists",className:"button button--transparent button--copy-link"})),i.a.createElement("div",{className:"row example-container"},i.a.createElement("div",{className:"column column--full",style:{overflow:"auto"}},i.a.createElement("ol",{className:"ordered-list--custom ordered-list--sharing-blue"},i.a.createElement("li",null,"This is a custom colored list item")))),i.a.createElement(p.a,null,'<ol class="ordered-list--custom ordered-list--sharing-blue">\n  <li>This is a custom colored list item</li>\n</ol>'),i.a.createElement(h.a,null,"//Example: Custom Colored Lists\n.ordered-list--sharing-blue {\n  @include ordered-list($sharing-blue, $white);\n}")))))},t}(i.a.Component);f.propTypes={location:c.a.object.isRequired},t.default=f},218:function(e,t,a){"use strict";var s=a(0),n=a.n(s),l=a(216);t.a=function(e){var t=e.pageName,a=e.sectionName;null==a&&(a="components"),"css grid"===t?t="css-grid":"progress stepper"===t?t="progress-stepper":"radio buttons"===t&&(t="radio-buttons");var s=t,i=a;return n.a.createElement("div",{className:"subnav-links"},n.a.createElement(l.Link,{to:i+"/"+s+"/code",activeClassName:"active"},"Code"),n.a.createElement(l.Link,{to:i+"/"+s+"/guidelines",activeClassName:"active"},"Guidelines"))}},225:function(e,t,a){"use strict";a(58),a(222);var s=a(9),n=a.n(s),l=a(56),i=a.n(l),o=a(0),r=a.n(o),c=a(230),u=a.n(c),m=(a(226),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(i()(i()(a))),a}n()(t,e);var a=t.prototype;return a.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},a.componentDidMount=function(){u.a.highlightAll()},a.render=function(){return u.a.plugins.customClass.map({tag:"exampletag"}),r.a.createElement("div",{className:this.state.showCode?"group-open":""},r.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},r.a.createElement("i",{className:"icon--code"})),r.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},r.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},t}(r.a.Component));t.a=m},226:function(e,t,a){(function(e){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var t={classMap:{}};Prism.plugins.customClass={map:function(e){t.classMap=e},prefix:function(e){t.prefixString=e}},Prism.hooks.add("wrap",function(e){(t.classMap||t.prefixString)&&(e.classes=e.classes.map(function(e){return(t.prefixString||"")+(t.classMap[e]||e)}))})}}()}).call(this,a(234))},232:function(e,t,a){"use strict";a(222);var s=a(9),n=a.n(s),l=a(56),i=a.n(l),o=a(0),r=a.n(o),c=a(230),u=a.n(c),m=(a(233),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(i()(i()(a))),a}n()(t,e);var a=t.prototype;return a.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},a.componentDidMount=function(){u.a.highlightAll()},a.render=function(){return r.a.createElement("pre",{className:"language-scss"},r.a.createElement("code",{className:"language-scss"},this.props.children))},t}(r.a.Component));t.a=m},233:function(e,t){Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.scss.property={pattern:/(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}},Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss}}]);
//# sourceMappingURL=component---src-pages-components-lists-code-js-0ced117cfde63ae116b1.js.map