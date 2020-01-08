(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{178:function(a,e,l){"use strict";l.r(e);var d=l(7),t=l.n(d),i=l(0),r=l.n(i),n=l(214),o=l(4),c=l.n(o),s=l(219),m=l(218),p=l(217),u=l(223),b=l(227),E="Radio Buttons".toLowerCase(),f=function(a){function e(){return a.apply(this,arguments)||this}return t()(e,a),e.prototype.render=function(){var a=this.props.location;return r.a.createElement(s.a,null,r.a.createElement("header",{className:"subnav"},r.a.createElement("h1",null,"Radio Buttons"),r.a.createElement(m.a,{pageName:E})),r.a.createElement(p.a,null,r.a.createElement("div",{className:"grid grid-padding"},r.a.createElement("p",{className:"intro"},"Radio buttons are used to allow for exactly one choice in a short list of two or more options. Selecting one option will deselect any previously selected option."),r.a.createElement("h2",{id:"RadioButtonStyles"},"Styles",r.a.createElement(n.a,{to:a.pathname+"/#RadioButtonStyles",className:"button button--transparent button--copy-link"})),r.a.createElement("p",null,"To make a radio button flow inline, apply the ",r.a.createElement("code",{className:"example-text"},".inline")," class to each ",r.a.createElement("code",{className:"example-text"},"radio-custom")," element"),r.a.createElement("div",{className:"example-container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Radio Buttons"),r.a.createElement("div",{className:"radio--custom"},r.a.createElement("input",{type:"radio",name:"radio",id:"radio1",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"radio1"},"Option 1")),r.a.createElement("div",{className:"radio--custom"},r.a.createElement("input",{type:"radio",name:"radio",id:"radio2"}),r.a.createElement("label",{htmlFor:"radio2"},"Option 2")),r.a.createElement("div",{className:"radio--custom"},r.a.createElement("input",{type:"radio",name:"radio",id:"radio3"}),r.a.createElement("label",{htmlFor:"radio3"},"Option 3"))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Inline Radio Buttons"),r.a.createElement("div",{className:"radio--custom inline"},r.a.createElement("input",{type:"radio",name:"inline-radio",id:"inline-radio1",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"inline-radio1"},"Option 1")),r.a.createElement("div",{className:"radio--custom inline"},r.a.createElement("input",{type:"radio",name:"inline-radio",id:"inline-radio2"}),r.a.createElement("label",{htmlFor:"inline-radio2"},"Option 2")),r.a.createElement("div",{className:"radio--custom inline"},r.a.createElement("input",{type:"radio",name:"inline-radio",id:"inline-radio3"}),r.a.createElement("label",{htmlFor:"inline-radio3"},"Option 3"))))),r.a.createElement(u.a,null,'\x3c!-- Default --\x3e\n<fieldset>\n  <label>Radio Buttons</label>\n  <div class="radio--custom">\n    <input type="radio" name="radio" id="radio1" checked/>\n    <label for="radio1">Option 1</label>\n  </div>\n  <div class="radio--custom">\n    <input type="radio" name="radio" id="radio2"/>\n    <label for="radio2">Option 2</label>\n  </div>\n  <div class="radio--custom">\n    <input type="radio" name="radio" id="radio3"/>\n    <label for="radio3">Option 3</label>\n  </div>\n</fieldset>\n\n\x3c!-- Inline --\x3e\n<fieldset>\n  <label>Inline Radio Buttons</label>\n  <div class="radio--custom inline">\n    <input type="radio" name="inline-radio" id="inline-radio1" checked/>\n    <label for="inline-radio1">Option 1</label>\n  </div>\n  <div class="radio--custom inline">\n    <input type="radio" name="inline-radio" id="inline-radio2"/>\n    <label for="inline-radio2">Option 2</label>\n  </div>\n  <div class="radio--custom inline">\n    <input type="radio" name="inline-radio" id="inline-radio3"/>\n    <label for="inline-radio3">Option 3</label>\n  </div>\n</fieldset>')),r.a.createElement("h2",{className:"mt-space-xl",id:"RadioButtonStates"},"States",r.a.createElement(n.a,{to:a.pathname+"/#RadioButtonStates",className:"button button--transparent button--copy-link"})),r.a.createElement("div",{className:"example-container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Default Radio Buttons"),r.a.createElement("div",{className:"radio--custom"},r.a.createElement("input",{type:"radio",name:"default-radio",id:"default-radio1",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"default-radio1"},"Option 1")),r.a.createElement("div",{className:"radio--custom"},r.a.createElement("input",{type:"radio",name:"default-radio",id:"default-radio2"}),r.a.createElement("label",{htmlFor:"default-radio2"},"Option 2")),r.a.createElement("div",{className:"radio--custom"},r.a.createElement("input",{type:"radio",name:"default-radio",id:"default-radio3"}),r.a.createElement("label",{htmlFor:"default-radio3"},"Option 3"))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Disabled Radio Buttons"),r.a.createElement("div",{className:"radio--custom"},r.a.createElement("input",{type:"radio",name:"disabled-radio",id:"disabled-radio1",disabled:!0,defaultChecked:!0}),r.a.createElement("label",{htmlFor:"disabled-radio1"},"Option 1")),r.a.createElement("div",{className:"radio--custom"},r.a.createElement("input",{type:"radio",name:"disabled-radio",id:"disabled-radio2",disabled:!0}),r.a.createElement("label",{htmlFor:"disabled-radio2"},"Option 2")),r.a.createElement("div",{className:"radio--custom"},r.a.createElement("input",{type:"radio",name:"disabled-radio",id:"disabled-radio3",disabled:!0}),r.a.createElement("label",{htmlFor:"disabled-radio3"},"Option 3"))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("fieldset",{className:"has-error"},r.a.createElement("label",null,"Error Radio Buttons"),r.a.createElement("div",{className:"radio--custom"},r.a.createElement("input",{type:"radio",name:"error-radio",id:"error-radio1",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"error-radio1"},"Option 1")),r.a.createElement("div",{className:"radio--custom"},r.a.createElement("input",{type:"radio",name:"error-radio",id:"error-radio2"}),r.a.createElement("label",{htmlFor:"error-radio2"},"Option 2")),r.a.createElement("div",{className:"radio--custom"},r.a.createElement("input",{type:"radio",name:"error-radio",id:"error-radio3"}),r.a.createElement("label",{htmlFor:"error-radio3"},"Option 3"))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("fieldset",{className:"has-warning"},r.a.createElement("label",null,"Warning Radio Buttons"),r.a.createElement("div",{className:"radio--custom"},r.a.createElement("input",{type:"radio",name:"warning-radio",id:"warning-radio1",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"warning-radio1"},"Option 1")),r.a.createElement("div",{className:"radio--custom"},r.a.createElement("input",{type:"radio",name:"warning-radio",id:"warning-radio2"}),r.a.createElement("label",{htmlFor:"warning-radio2"},"Option 2")),r.a.createElement("div",{className:"radio--custom"},r.a.createElement("input",{type:"radio",name:"warning-radio",id:"warning-radio3"}),r.a.createElement("label",{htmlFor:"warning-radio3"},"Option 3"))))),r.a.createElement(u.a,null,'\x3c!-- Default --\x3e\n<fieldset>\n  <label>Default Radio Buttons</label>\n  <div class="radio--custom">\n    <input type="radio" name="default-radio" id="default-radio1" checked/>\n    <label for="default-radio1">Option 1</label>\n  </div>\n  <div class="radio--custom">\n    <input type="radio" name="default-radio" id="default-radio2"/>\n    <label for="default-radio2">Option 2</label>\n  </div>\n  <div class="radio--custom">\n    <input type="radio" name="default-radio" id="default-radio3"/>\n    <label for="default-radio3">Option 3</label>\n  </div>\n</fieldset>\n\n\x3c!-- Disabled --\x3e\n<fieldset>\n  <label>Disabled Radio Buttons</label>\n  <div class="radio--custom">\n    <input type="radio" name="disabled-radio" id="disabled-radio1" disabled checked/>\n    <label for="disabled-radio1">Option 1</label>\n  </div>\n  <div class="radio--custom">\n    <input type="radio" name="disabled-radio" id="disabled-radio2" disabled/>\n    <label for="disabled-radio2">Option 2</label>\n  </div>\n  <div class="radio--custom">\n    <input type="radio" name="disabled-radio" id="disabled-radio3" disabled/>\n    <label for="disabled-radio3">Option 3</label>\n  </div>\n</fieldset>\n\n\x3c!-- Error --\x3e\n<fieldset class="has-error">\n  <label>Error Radio Buttons</label>\n  <div class="radio--custom">\n    <input type="radio" name="error-radio" id="error-radio1" checked/>\n    <label for="error-radio1">Option 1</label>\n  </div>\n  <div class="radio--custom">\n    <input type="radio" name="error-radio" id="error-radio2"/>\n    <label for="error-radio2">Option 2</label>\n  </div>\n  <div class="radio--custom">\n    <input type="radio" name="error-radio" id="error-radio3"/>\n    <label for="error-radio3">Option 3</label>\n  </div>\n</fieldset>\n\n\x3c!-- Warning --\x3e\n<fieldset class="has-warning">\n  <label>Warning Radio Buttons</label>\n  <div class="radio--custom">\n    <input type="radio" name="warning-radio" id="warning-radio1" checked/>\n    <label for="warning-radio1">Option 1</label>\n  </div>\n  <div class="radio--custom">\n    <input type="radio" name="warning-radio" id="warning-radio2"/>\n    <label for="warning-radio2">Option 2</label>\n  </div>\n  <div class="radio--custom">\n    <input type="radio" name="warning-radio" id="warning-radio3"/>\n    <label for="warning-radio3">Option 3</label>\n  </div>\n</fieldset>')),r.a.createElement("h1",{className:"mt-space-xl"},"Radio Card"),r.a.createElement("h2",{className:"mt-space-xl",id:"RadioCardStates"},"States",r.a.createElement(n.a,{to:a.pathname+"/#RadioCardStates",className:"button button--transparent button--copy-link"})),r.a.createElement("div",{className:"example-container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Default Radio Card"),r.a.createElement("div",{className:"radio-card"},r.a.createElement("input",{type:"radio",name:"radio-card",id:"radio-card1",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"radio-card1",className:"card"},"Option 1")),r.a.createElement("div",{className:"radio-card"},r.a.createElement("input",{type:"radio",name:"radio-card",id:"radio-card2"}),r.a.createElement("label",{htmlFor:"radio-card2",className:"card"},"Option 2")),r.a.createElement("div",{className:"radio-card"},r.a.createElement("input",{type:"radio",name:"radio-card",id:"radio-card3"}),r.a.createElement("label",{htmlFor:"radio-card3",className:"card"},"Option 3"))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Disabled Radio Card"),r.a.createElement("div",{className:"radio-card"},r.a.createElement("input",{type:"radio",name:"disabled-radio-card",id:"disabled-radio-card1",disabled:!0,defaultChecked:!0}),r.a.createElement("label",{htmlFor:"disabled-radio-card1",className:"card"},"Option 1")),r.a.createElement("div",{className:"radio-card"},r.a.createElement("input",{type:"radio",name:"disabled-radio-card",id:"disabled-radio-card2",disabled:!0}),r.a.createElement("label",{htmlFor:"disabled-radio-card2",className:"card"},"Option 2")),r.a.createElement("div",{className:"radio-card"},r.a.createElement("input",{type:"radio",name:"disabled-radio-card",id:"disabled-radio-card3",disabled:!0}),r.a.createElement("label",{htmlFor:"disabled-radio-card3",className:"card"},"Option 3"))))),r.a.createElement(u.a,null,'\x3c!-- Radio Cards --\x3e\n<fieldset>\n  <label>Default Radio Card</label>\n  <div class="radio-card">\n    <input type="radio" name="radio-card" id="radio-card1" checked/>\n    <label for="radio-card1" class="card">Option 1</label>\n  </div>\n  <div class="radio-card">\n    <input type="radio" name="radio-card" id="radio-card2" />\n    <label for="radio-card2" class="card">Option 2</label>\n  </div>\n  <div class="radio-card">\n    <input type="radio" name="radio-card" id="radio-card3" />\n    <label for="radio-card3" class="card">Option 3</label>\n  </div>\n</fieldset>\n\n\x3c!-- Disabled Radio Cards --\x3e\n<fieldset>\n  <label>Disabled Radio Card</label>\n  <div class="radio-card">\n    <input type="radio" name="disabled-radio-card" id="disabled-radio-card1" disabled checked/>\n    <label for="disabled-radio-card1" class="card">Option 1</label>\n  </div>\n  <div class="radio-card">\n    <input type="radio" name="disabled-radio-card" id="disabled-radio-card2" disabled/>\n    <label for="disabled-radio-card2" class="card">Option 2</label>\n  </div>\n  <div class="radio-card">\n    <input type="radio" name="disabled-radio-card" id="disabled-radio-card3" disabled/>\n    <label for="disabled-radio-card3" class="card">Option 3</label>\n  </div>\n</fieldset>')),r.a.createElement("h2",{className:"mt-space-xl",id:"RadioCardSizes"},"Sizes",r.a.createElement(n.a,{to:a.pathname+"/#RadioCardSizes",className:"button button--transparent button--copy-link"})),r.a.createElement("div",{className:"example-container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Small Radio Card"),r.a.createElement("div",{className:"radio-card radio-card--small"},r.a.createElement("input",{type:"radio",name:"radio-small",id:"radio-small1",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"radio-small1",className:"card"},"Option 1")),r.a.createElement("div",{className:"radio-card radio-card--small"},r.a.createElement("input",{type:"radio",name:"radio-small",id:"radio-small2"}),r.a.createElement("label",{htmlFor:"radio-small2",className:"card"},"Option 2")),r.a.createElement("div",{className:"radio-card radio-card--small"},r.a.createElement("input",{type:"radio",name:"radio-small",id:"radio-small3"}),r.a.createElement("label",{htmlFor:"radio-small3",className:"card"},"Option 3"))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Default Radio Card"),r.a.createElement("div",{className:"radio-card"},r.a.createElement("input",{type:"radio",name:"radio-normal",id:"radio-normal1",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"radio-normal1",className:"card"},"Option 1")),r.a.createElement("div",{className:"radio-card"},r.a.createElement("input",{type:"radio",name:"radio-normal",id:"radio-normal2"}),r.a.createElement("label",{htmlFor:"radio-normal2",className:"card"},"Option 2")),r.a.createElement("div",{className:"radio-card"},r.a.createElement("input",{type:"radio",name:"radio-normal",id:"radio-normal3"}),r.a.createElement("label",{htmlFor:"radio-normal3",className:"card"},"Option 3"))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content flex-content"},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Flex Radio Card"),r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"radio-card"},r.a.createElement("input",{type:"radio",name:"radio-flex",id:"radio-flex1",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"radio-flex1",className:"card"},"Option 1")),r.a.createElement("div",{className:"radio-card"},r.a.createElement("input",{type:"radio",name:"radio-flex",id:"radio-flex2"}),r.a.createElement("label",{htmlFor:"radio-flex2",className:"card"},"Option 2")),r.a.createElement("div",{className:"radio-card"},r.a.createElement("input",{type:"radio",name:"radio-flex",id:"radio-flex3"}),r.a.createElement("label",{htmlFor:"radio-flex3",className:"card"},"Option 3")))))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Block Radio Card"),r.a.createElement("div",{className:"radio-card radio-card--block"},r.a.createElement("input",{type:"radio",name:"radio-block",id:"radio-block1",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"radio-block1",className:"card"},"Option 1")),r.a.createElement("div",{className:"radio-card radio-card--block"},r.a.createElement("input",{type:"radio",name:"radio-block",id:"radio-block2"}),r.a.createElement("label",{htmlFor:"radio-block2",className:"card"},"Option 2")),r.a.createElement("div",{className:"radio-card radio-card--block"},r.a.createElement("input",{type:"radio",name:"radio-block",id:"radio-block3"}),r.a.createElement("label",{htmlFor:"radio-block3",className:"card"},"Option 3"))))),r.a.createElement(u.a,null,'\x3c!-- Small Radio Card --\x3e\n<fieldset>\n  <label>Small Radio Card</label>\n  <div class="radio-card radio-card--small">\n    <input type="radio" name="radio-small" id="radio-small1" checked/>\n    <label for="radio-small1" class="card">Option 1</label>\n  </div>\n  <div class="radio-card radio-card--small">\n    <input type="radio" name="radio-small" id="radio-small2" />\n    <label for="radio-small2" class="card">Option 2</label>\n  </div>\n  <div class="radio-card radio-card--small">\n    <input type="radio" name="radio-small" id="radio-small3" />\n    <label for="radio-small3" class="card">Option 3</label>\n  </div>\n</fieldset>\n\n\x3c!-- Default Radio Card --\x3e\n<fieldset>\n  <label>Default Radio Card</label>\n  <div class="radio-card">\n    <input type="radio" name="radio-normal" id="radio-normal1" checked/>\n    <label for="radio-normal1" class="card">Option 1</label>\n  </div>\n  <div class="radio-card">\n    <input type="radio" name="radio-normal" id="radio-normal2" />\n    <label for="radio-normal2" class="card">Option 2</label>\n  </div>\n  <div class="radio-card">\n    <input type="radio" name="radio-normal" id="radio-normal3" />\n    <label for="radio-normal3" class="card">Option 3</label>\n  </div>\n</fieldset>\n\n\x3c!-- Flex Radio Card --\x3e\n<div class="card">\n  <div class="card-content flex-content">\n    <fieldset>\n      <label>Flex Radio Card</label>\n      <div class="flex-row">\n        <div class="radio-card">\n          <input type="radio" name="radio-flex" id="radio-flex1" checked/>\n          <label for="radio-flex1" class="card">Option 1</label>\n        </div>\n        <div class="radio-card">\n          <input type="radio" name="radio-flex" id="radio-flex2" />\n          <label for="radio-flex2" class="card">Option 2</label>\n        </div>\n        <div class="radio-card">\n          <input type="radio" name="radio-flex" id="radio-flex3" />\n          <label for="radio-flex3" class="card">Option 3</label>\n        </div>\n      </div>\n    </fieldset>\n  </div>\n</div>\n\n\x3c!-- Block Radio Card --\x3e\n<fieldset>\n  <label>Block Radio Card</label>\n  <div class="radio-card radio-card--block">\n    <input type="radio" name="radio-block" id="radio-block1" checked/>\n    <label for="radio-block1" class="card">Option 1</label>\n  </div>\n  <div class="radio-card radio-card--block">\n    <input type="radio" name="radio-block" id="radio-block2" />\n    <label for="radio-block2" class="card">Option 2</label>\n  </div>\n  <div class="radio-card radio-card--block">\n    <input type="radio" name="radio-block" id="radio-block3" />\n    <label for="radio-block3" class="card">Option 3</label>\n  </div>\n</fieldset>')),r.a.createElement("h1",{className:"mt-space-xl"},"Theme"),r.a.createElement("h2",{className:"mt-space-xl",id:"RadioButtonTheme"},"Radio Button Theme",r.a.createElement(n.a,{to:a.pathname+"/#RadioButtonTheme",className:"button button--transparent button--copy-link"})),r.a.createElement("div",{className:"example-container"},r.a.createElement("div",{className:"card hide-HTML-code"},r.a.createElement("div",{className:"card-content"},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Radio Buttons"),r.a.createElement("div",{className:"radio--custom"},r.a.createElement("input",{type:"radio",name:"radio-theme",id:"radio-theme1",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"radio-theme1"},"Option 1")),r.a.createElement("div",{className:"radio--custom"},r.a.createElement("input",{type:"radio",name:"radio-theme",id:"radio-theme2"}),r.a.createElement("label",{htmlFor:"radio-theme2"},"Option 2"))))),r.a.createElement(u.a,null),r.a.createElement(b.a,null,"//Include these variables in your theme file\n$radio--active: $blue !default; //Color of radio button when checked\n$radio--icon: $white !default; //Color of radio icon when checked\n$radio--focus: $blue-300 !default; //Color of border around radio when focused\n$radio--disabled: $gray-150 !default; //Color of radio when checked and disabled\n$radio--icon-disabled: $gray-500 !default; //Color of radio icon when checked and disabled")),r.a.createElement("h2",{className:"mt-space-xl",id:"RadioCardTheme"},"Radio Card Theme",r.a.createElement(n.a,{to:a.pathname+"/#RadioCardTheme",className:"button button--transparent button--copy-link"})),r.a.createElement("div",{className:"example-container"},r.a.createElement("div",{className:"card hide-HTML-code"},r.a.createElement("div",{className:"card-content"},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Radio Buttons"),r.a.createElement("div",{className:"radio-card"},r.a.createElement("input",{type:"radio",name:"radio-card-theme",id:"radio-card-theme1",defaultChecked:!0}),r.a.createElement("label",{htmlFor:"radio-card-theme1",className:"card"},"Option 1")),r.a.createElement("div",{className:"radio-card"},r.a.createElement("input",{type:"radio",name:"radio-card-theme",id:"radio-card-theme2"}),r.a.createElement("label",{htmlFor:"radio-card-theme2",className:"card"},"Option 2"))))),r.a.createElement(u.a,null),r.a.createElement(b.a,null,"//Include these variables in your theme file\n$card-checkbox--active: $blue !default; //Color of checkbox and card when checked\n$card-checkbox--focus: $blue-300 !default; //Color of border around card-checkbox when focused\n$card-checkbox--padding: 1rem !default; //Padding of checkbox")))))},e}(r.a.Component);f.propTypes={location:c.a.object.isRequired},e.default=f},218:function(a,e,l){"use strict";l(34);var d=l(0),t=l.n(d),i=l(214);e.a=function(a){var e=a.pageName,l=a.sectionName;null==l&&(l="components"),"css grid"===e?e="css-grid":"progress stepper"===e?e="progress-stepper":"radio buttons"===e&&(e="radio-buttons");var d=e,r=l,n=function(a){return a.isPartiallyCurrent?{className:"active"}:{className:""}},o=function(a){return t.a.createElement(i.a,Object.assign({getProps:n},a),a.children)};return t.a.createElement("div",{className:"subnav-links"},t.a.createElement(o,{to:r+"/"+d+"/code"},"Code"),t.a.createElement(o,{to:r+"/"+d+"/guidelines"},"Guidelines"))}},223:function(a,e,l){"use strict";var d=l(35),t=l.n(d),i=l(7),r=l.n(i),n=l(0),o=l.n(n),c=l(225),s=l.n(c),m=(l(224),function(a){function e(e){var l;return(l=a.call(this,e)||this).state={showCode:!1},l.toggleCode=l.toggleCode.bind(t()(l)),l}r()(e,a);var l=e.prototype;return l.toggleCode=function(){this.setState(function(a){return{showCode:!a.showCode}})},l.componentDidMount=function(){s.a.highlightAll()},l.render=function(){return s.a.plugins.customClass.map({tag:"exampletag"}),o.a.createElement("div",{className:this.state.showCode?"group-open":""},o.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},o.a.createElement("i",{className:"icon--code"})),o.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},o.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},e}(o.a.Component));e.a=m},224:function(a,e,l){(function(a){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==a&&a.Prism){var e={classMap:{}};Prism.plugins.customClass={map:function(a){e.classMap=a},prefix:function(a){e.prefixString=a}},Prism.hooks.add("wrap",function(a){(e.classMap||e.prefixString)&&(a.classes=a.classes.map(function(a){return(e.prefixString||"")+(e.classMap[a]||a)}))})}}()}).call(this,l(76))}}]);
//# sourceMappingURL=component---src-pages-components-radio-buttons-code-js-e4c170981858164df985.js.map