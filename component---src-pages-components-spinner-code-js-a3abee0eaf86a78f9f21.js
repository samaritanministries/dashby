(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{177:function(e,t,n){"use strict";n.r(t);n(216);var a=n(8),s=n.n(a),l=n(52),r=n.n(l),i=n(0),o=n.n(i),c=n(210),u=n(214),m=n(212),d=n(213),p=n(219),h=n(226),g="Spinner".toLowerCase(),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={addSpinner:!1},n.handleClick=n.handleClick.bind(r()(r()(n))),n}s()(t,e);var n=t.prototype;return n.handleClick=function(){this.setState(function(e){return{addSpinner:!e.addSpinner}})},n.render=function(){return o.a.createElement(u.a,null,o.a.createElement("header",{className:"subnav"},o.a.createElement("h1",null,"Spinner"),o.a.createElement(m.a,{pageName:g})),o.a.createElement(d.a,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"column column--full"},o.a.createElement("h2",{className:"example-header no-margin--top",id:"defaultSpinner"},"Default Spinner",o.a.createElement(c.Link,{to:window.location.pathname+"/#defaultSpinner",className:"button button--transparent button--copy-link"})),o.a.createElement("div",{className:"row example-container"},o.a.createElement("div",{className:"column column--full"},o.a.createElement("div",{className:"relative",style:{height:"8rem"}},o.a.createElement("div",{className:"dash-spinner"})))),o.a.createElement(p.a,null,'<div class="dash-spinner"></div>'),o.a.createElement(h.a,null,"//Include this variable in your theme file to change the color of your spinner\n$spinner-color: #000;"),o.a.createElement("h2",{className:"example-header"},"Small Spinner",o.a.createElement("button",{className:"button button--transparent button--copy-link","data-id":"copyurl",id:"Small_Spinner"})),o.a.createElement("div",{className:"row example-container"},o.a.createElement("div",{className:"column column--full"},o.a.createElement("div",{className:"relative",style:{height:"5rem"}},o.a.createElement("div",{className:"dash-spinner small"})))),o.a.createElement(p.a,null,'<div class="dash-spinner small"></div>'),o.a.createElement("h2",{className:"example-header",id:"buttonSpinner"},"Button Spinner",o.a.createElement(c.Link,{to:window.location.pathname+"/#buttonSpinner",className:"button button--transparent button--copy-link"})),o.a.createElement("div",{className:"row example-container"},o.a.createElement("div",{className:"column column--full"},o.a.createElement("button",{onClick:this.handleClick,className:this.state.addSpinner?"button button--blue has-spinner":"button button--blue"},"Click me"))),o.a.createElement(p.a,null,'<button class="button button--blue has-spinner">\n  Click Me\n</button>')))))},t}(o.a.Component);t.default=f},212:function(e,t,n){"use strict";var a=n(0),s=n.n(a),l=n(210);t.a=function(e){var t=e.pageName,n=e.sectionName;null==n&&(n="components"),"css grid"===t?t="css-grid":"progress stepper"===t?t="progress-stepper":"radio buttons"===t&&(t="radio-buttons");var a=t,r=n;return s.a.createElement("div",{className:"subnav-links"},s.a.createElement(l.Link,{to:r+"/"+a+"/code",activeClassName:"active"},"Code"),s.a.createElement(l.Link,{to:r+"/"+a+"/guidelines",activeClassName:"active"},"Guidelines"))}},219:function(e,t,n){"use strict";n(54),n(216);var a=n(8),s=n.n(a),l=n(52),r=n.n(l),i=n(0),o=n.n(i),c=n(224),u=n.n(c),m=(n(220),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showCode:!1},n.toggleCode=n.toggleCode.bind(r()(r()(n))),n}s()(t,e);var n=t.prototype;return n.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},n.componentDidMount=function(){u.a.highlightAll()},n.render=function(){return u.a.plugins.customClass.map({tag:"exampletag"}),o.a.createElement("div",{className:this.state.showCode?"group-open":""},o.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},o.a.createElement("i",{className:"icon--code"})),o.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},o.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},t}(o.a.Component));t.a=m},220:function(e,t,n){(function(e){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var t={classMap:{}};Prism.plugins.customClass={map:function(e){t.classMap=e},prefix:function(e){t.prefixString=e}},Prism.hooks.add("wrap",function(e){(t.classMap||t.prefixString)&&(e.classes=e.classes.map(function(e){return(t.prefixString||"")+(t.classMap[e]||e)}))})}}()}).call(this,n(228))},226:function(e,t,n){"use strict";n(216);var a=n(8),s=n.n(a),l=n(52),r=n.n(l),i=n(0),o=n.n(i),c=n(224),u=n.n(c),m=(n(227),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={showCode:!1},n.toggleCode=n.toggleCode.bind(r()(r()(n))),n}s()(t,e);var n=t.prototype;return n.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},n.componentDidMount=function(){u.a.highlightAll()},n.render=function(){return o.a.createElement("pre",{className:"language-scss"},o.a.createElement("code",{className:"language-scss"},this.props.children))},t}(o.a.Component));t.a=m},227:function(e,t){Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)*url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}}}),Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,{pattern:/( +)(?:from|through)(?= )/,lookbehind:!0}]}),Prism.languages.scss.property={pattern:/(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}},Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/}),Prism.languages.insertBefore("scss","function",{placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:true|false)\b/,null:/\bnull\b/,operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,lookbehind:!0}}),Prism.languages.scss.atrule.inside.rest=Prism.languages.scss}}]);
//# sourceMappingURL=component---src-pages-components-spinner-code-js-a3abee0eaf86a78f9f21.js.map