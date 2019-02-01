(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{167:function(e,t,a){"use strict";a.r(t);var n=a(9),l=a.n(n),s=a(0),i=a.n(s),r=a(214),o=a(4),c=a.n(o),d=a(218),m=a(216),p=a(217),u=a(223),f="Forms".toLowerCase(),h=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.location;return i.a.createElement(d.a,null,i.a.createElement("header",{className:"subnav"},i.a.createElement("h1",null,"Forms"),i.a.createElement(m.a,{pageName:f})),i.a.createElement(p.a,null,i.a.createElement("div",{className:"grid grid-padding"},i.a.createElement("h2",{id:"forms"},"Forms",i.a.createElement(r.Link,{to:e.pathname+"/#forms",className:"button button--transparent button--copy-link"})),i.a.createElement("div",{className:"example-container"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content"},i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"form-text"},"Text Input"),i.a.createElement("input",{type:"text",id:"form-text"})),i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"form-text-disabled"},"Text Input disabled"),i.a.createElement("input",{type:"text",id:"form-text-disabled",value:"This input is disabled",disabled:!0})),i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"form-textarea"},"Textarea"),i.a.createElement("textarea",{id:"form-textarea"})))),i.a.createElement(u.a,null,'\x3c!-- Default Input --\x3e\n<div class="card">\n<div class="card-content">\n  <fieldset>\n    <label for="form-text">Text Input</label>\n    <input type="text" id="form-text"/>\n  </fieldset>\n\n  <fieldset>\n    <label for="form-text-disabled">Text Input disabled</label>\n    <input type="text" id="form-text-disabled" value="This input is disabled" disabled />\n  </fieldset>\n\n  <fieldset>\n    <label for="form-textarea">Textarea</label>\n    <textarea id="form-textarea"></textarea>\n  </fieldset>\n</div>\n</div>')),i.a.createElement("h2",{className:"mt-space-xl",id:"selectMenu"},"Select Menu",i.a.createElement(r.Link,{to:e.pathname+"/#selectMenu",className:"button button--transparent button--copy-link"})),i.a.createElement("p",null,"To add the drop-down icon, add the ",i.a.createElement("code",{className:"example-text"},".select--has-icon")," class to the parent container. Ensure you also have the dashing-icon font library properly installed."),i.a.createElement("div",{className:"example-container"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content"},i.a.createElement("fieldset",{className:"select--has-icon"},i.a.createElement("label",{htmlFor:"form-add-on-menu"},"Select Menu"),i.a.createElement("select",{id:"form-add-on-menu"},i.a.createElement("option",null,"Option 1"),i.a.createElement("option",null,"Option 2"),i.a.createElement("option",null,"Option 3"))))),i.a.createElement(u.a,null,'\x3c!-- Select Element with custom icon --\x3e\n<div card="card">\n<div card="card-content">\n  <fieldset class="select--has-icon">\n    <label for="form-add-on-menu">Select Menu</label>\n    <select id="form-add-on-menu">\n      <option>Option 1</option>\n      <option>Option 2</option>\n      <option>Option 3</option>\n    </select>\n  </fieldset>\n</div>\n</div>')),i.a.createElement("h2",{className:"mt-space-xl",id:"inputGroups"},"Input Groups",i.a.createElement(r.Link,{to:e.pathname+"/#inputGroups",className:"button button--transparent button--copy-link"})),i.a.createElement("div",{className:"example-container"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content flex-content"},i.a.createElement("div",{className:"flex-row"},i.a.createElement("fieldset",{className:"select--has-icon"},i.a.createElement("label",{htmlFor:"form-input-group"},"Input Group"),i.a.createElement("div",{className:"input--add-on"},i.a.createElement("input",{type:"text",className:"add-on--before",id:"form-input-group",placeholder:"e.g. (481) 516-2342"}),i.a.createElement("select",{type:"text",className:"add-on--after"},i.a.createElement("option",null,"Home"),i.a.createElement("option",null,"Mobile"),i.a.createElement("option",null,"Work"))))),i.a.createElement("div",{className:"flex-row"},i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"form-input-action1"},"Add-on button"),i.a.createElement("div",{className:"input--add-on"},i.a.createElement("input",{type:"text",className:"add-on--before",id:"form-input-action1"}),i.a.createElement("input",{type:"submit",className:"button button--green add-on--after",value:"Submit"}))),i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"form-input-action4"},"Add-on border icon"),i.a.createElement("div",{className:"input--add-on"},i.a.createElement("input",{type:"text",className:"add-on--before",id:"form-input-action4"}),i.a.createElement("button",{className:"button--icon button--border add-on--after"},i.a.createElement("i",{className:"dashing-icon dashing-icon--search"}))))))),i.a.createElement(u.a,null,'\x3c!-- This is an example of an add-on --\x3e\n<div class="card">\n<div class="card-content flex-content">\n  <div class="flex-row">\n    <fieldset class="select--has-icon">\n      <label for="form-input-group">Input Group</label>\n      <div class="input--add-on">\n        <input type="text" class="add-on--before" id="form-input-group" placeholder="e.g. (481) 516-2342"/>\n        <select type="text" class="add-on--after">\n          <option>Home</option>\n          <option>Mobile</option>\n          <option>Work</option>\n        </select>\n      </div>\n    </fieldset>\n  </div>\n  <div class="flex-row">\n    <fieldset>\n      <label for="form-input-action1">Add-on button</label>\n      <div class="input--add-on">\n        <input type="text" class="add-on--before" id="form-input-action1"/>\n        <input type="submit" class="button button--green add-on--after" value="Submit" />\n      </div>\n    </fieldset>\n    <fieldset>\n      <label for="form-input-action4">Add-on border icon</label>\n      <div class="input--add-on">\n        <input type="text" class="add-on--before" id="form-input-action4"/>\n        <button class="button--icon button--border add-on--after">\n          <i class="dashing-icon dashing-icon--search"></i>\n        </button>\n      </div>\n    </fieldset>\n  </div>\n</div>\n</div>')),i.a.createElement("h2",{className:"mt-space-xl",id:"inputMessageStates"},"Input Message States",i.a.createElement(r.Link,{to:e.pathname+"/#inputMessageStates",className:"button button--transparent button--copy-link"})),i.a.createElement("div",{className:"example-container"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content"},i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"dashing-text-message"},"Dashing Text Input with message"),i.a.createElement("input",{type:"text",id:"dashing-text-message"}),i.a.createElement("div",{className:"message"},"Default messages can be used to give additional information about an input.")),i.a.createElement("fieldset",{className:"has-error"},i.a.createElement("label",{htmlFor:"dashing-text-error"},"Dashing Text Input with error"),i.a.createElement("input",{type:"text",id:"dashing-text-error"}),i.a.createElement("div",{className:"message"},"Error messages are used to explain system failures or user errors.")),i.a.createElement("fieldset",{className:"has-warning"},i.a.createElement("label",{htmlFor:"dashing-text-warning"},"Dashing Text Input with warning"),i.a.createElement("input",{type:"text",id:"dashing-text-warning"}),i.a.createElement("div",{className:"message"},"Use warnings to convey important messages to your user.")))),i.a.createElement(u.a,null,'\x3c!-- Default Message --\x3e\n<div class="card">\n<div class="card-content">\n  <fieldset>\n    <label for="dashing-text-message">Dashing Text Input with message</label>\n    <input type="text" id="dashing-text-message"/>\n    <div class="message">Default messages can be used to give additional information about an input.</div>\n  </fieldset>\n\n  <fieldset class="has-error">\n    <label for="dashing-text-error">Dashing Text Input with error</label>\n    <input type="text" id="dashing-text-error"/>\n    <div class="message">Error messages are used to explain system failures or user errors.</div>\n  </fieldset>\n\n  <fieldset class="has-warning">\n    <label for="dashing-text-warning">Dashing Text Input with warning</label>\n    <input type="text" id="dashing-text-warning"/>\n    <div class="message">Use warnings to convey important messages to your user.</div>\n  </fieldset>\n</div>\n</div>')),i.a.createElement("h2",{className:"mt-space-xl",id:"otherSupportedInputTypes"},"Other Supported Input Types",i.a.createElement(r.Link,{to:e.pathname+"/#otherSupportedInputTypes",className:"button button--transparent button--copy-link"})),i.a.createElement("div",{className:"example-container"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content"},i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"dashing-date"},"Dashing Date"),i.a.createElement("input",{type:"date",id:"dashing-date"})),i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"dashing-time"},"Dashing Time"),i.a.createElement("input",{type:"time",id:"dashing-time"})),i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"dashing-month"},"Dashing Month"),i.a.createElement("input",{type:"month",id:"dashing-month"})),i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"dashing-email"},"Dashing Email"),i.a.createElement("input",{type:"email",id:"dashing-email",placeholder:"e.g. ryan@fitzinator.com"})),i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"dashing-password"},"Dashing Password"),i.a.createElement("input",{type:"password",id:"dashing-password"})),i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"dashing-number"},"Dashing Number"),i.a.createElement("input",{type:"number",id:"dashing-number"})),i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"dashing-tel"},"Dashing Tel"),i.a.createElement("input",{type:"tel",id:"dashing-tel"})),i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"dashing-file"},"Dashing File"),i.a.createElement("input",{type:"file",id:"dashing-file"})))),i.a.createElement(u.a,null,'<div class="card">\n<div class="card-content">\n  <fieldset>\n    <label for="dashing-date">Dashing Date</label>\n    <input type="date" id="dashing-date"/>\n  </fieldset>\n\n  <fieldset>\n    <label for="dashing-time">Dashing Time</label>\n    <input type="time" id="dashing-time"/>\n  </fieldset>\n\n  <fieldset>\n    <label for="dashing-month">Dashing Month</label>\n    <input type="month" id="dashing-month"/>\n  </fieldset>\n\n  <fieldset>\n    <label for="dashing-email">Dashing Email</label>\n    <input type="email" id="dashing-email" placeholder="e.g. ryan@fitzinator.com"/>\n  </fieldset>\n\n  <fieldset>\n    <label for="dashing-password">Dashing Password</label>\n    <input type="password" id="dashing-password"/>\n  </fieldset>\n\n  <fieldset>\n    <label for="dashing-number">Dashing Number</label>\n    <input type="number" id="dashing-number"/>\n  </fieldset>\n\n  <fieldset>\n    <label for="dashing-tel">Dashing Tel</label>\n    <input type="tel" id="dashing-tel"/>\n  </fieldset>\n\n  <fieldset>\n    <label for="dashing-file">Dashing File</label>\n    <input type="file" id="dashing-file"/>\n  </fieldset>\n</div>\n</div>')),i.a.createElement("h2",{className:"mt-space-xl",id:"customRangeSlider"},"Custom Range Slider",i.a.createElement(r.Link,{to:e.pathname+"/#customRangeSlider",className:"button button--transparent button--copy-link"})),i.a.createElement("p",{className:"text-color--red"},"Not supported in Internet Explorer"),i.a.createElement("div",{className:"example-container"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content"},i.a.createElement("fieldset",{className:"range--custom"},i.a.createElement("label",{htmlFor:"dashing-range"},"Dashing Range"),i.a.createElement("input",{type:"range",id:"dashing-range"})))),i.a.createElement(u.a,null,'\x3c!-- Custom Range Slider --\x3e\n<fieldset class="range--custom">\n<label for="dashing-range">Dashing Range</label>\n<input type="range" id="dashing-range"/>\n</fieldset>')),i.a.createElement("h2",{className:"mt-space-xl",id:"formExample"},"Form Example",i.a.createElement(r.Link,{to:e.pathname+"/#formExample",className:"button button--transparent button--copy-link"})),i.a.createElement("div",{className:"example-container"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header has-border"},i.a.createElement("h2",{className:"no-margin"},"Card Header")),i.a.createElement("div",{className:"card-content flex-content"},i.a.createElement("div",{className:"flex-row"},i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"form-text"},"Text Input"),i.a.createElement("input",{type:"text",id:"form-text"})),i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"form-text2"},"Text Input"),i.a.createElement("input",{type:"text",id:"form-text2"}))),i.a.createElement("div",{className:"flex-row"},i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"form-date"},"Date Input"),i.a.createElement("input",{type:"date",id:"form-date"})),i.a.createElement("fieldset",{className:"select--has-icon"},i.a.createElement("label",{htmlfor:"form-select"},"Select"),i.a.createElement("select",{id:"form-select"},i.a.createElement("option",null,"Option 1"),i.a.createElement("option",null,"Option 2"))),i.a.createElement("fieldset",{className:"spacer"})),i.a.createElement("div",{className:"flex-row"},i.a.createElement("fieldset",null,i.a.createElement("label",{htmlFor:"form-textarea"},"Textarea"),i.a.createElement("textarea",{id:"form-textarea"})))),i.a.createElement("div",{className:"card-footer"},i.a.createElement("button",{className:"mr-space-xs"},"Submit"),i.a.createElement("button",{className:"button--transparent button--gray"},"Cancel"))),i.a.createElement(u.a,null,'\x3c!-- Custom Range Slider --\x3e\n<div class="card">\n<div class="card-header has-border">\n  <h2 class="no-margin">Card Header</h2>\n</div>\n\n<div class="card-content flex-content">\n  <div class="flex-row">\n    <fieldset>\n      <label for="form-text">Text Input</label>\n      <input type="text" id="form-text"/>\n    </fieldset>\n    <fieldset>\n      <label for="form-text2">Text Input</label>\n      <input type="text" id="form-text2"/>\n    </fieldset>\n  </div>\n  <div class="flex-row">\n    <fieldset>\n      <label for="form-date">Date Input</label>\n      <input type="date" id="form-date"/>\n    </fieldset>\n    <fieldset class="select--has-icon">\n      <label for="form-select">Select</label>\n      <select id="form-select">\n        <option>Option 1</option>\n        <option>Option 2</option>\n      </select>\n    </fieldset>\n    <fieldset class="spacer"></fieldset>\n  </div>\n  <div class="flex-row">\n    <fieldset>\n      <label for="form-textarea">Textarea</label>\n      <textarea id="form-textarea"></textarea>\n    </fieldset>\n  </div>\n</div>\n<div class="card-footer">\n  <button class="mr-space-xs">Submit</button>\n  <button class="button--transparent button--gray">Cancel</button>\n</div>\n</div>')))))},t}(i.a.Component);h.propTypes={location:c.a.object.isRequired},t.default=h},216:function(e,t,a){"use strict";a(40);var n=a(0),l=a.n(n),s=a(214);t.a=function(e){var t=e.pageName,a=e.sectionName;null==a&&(a="components"),"css grid"===t?t="css-grid":"progress stepper"===t?t="progress-stepper":"radio buttons"===t&&(t="radio-buttons");var n=t,i=a,r=function(e){return e.isPartiallyCurrent?{className:"active"}:{className:""}},o=function(e){return l.a.createElement(s.Link,Object.assign({getProps:r},e),e.children)};return l.a.createElement("div",{className:"subnav-links"},l.a.createElement(o,{to:i+"/"+n+"/code"},"Code"),l.a.createElement(o,{to:i+"/"+n+"/guidelines"},"Guidelines"))}},223:function(e,t,a){"use strict";a(58),a(220);var n=a(9),l=a.n(n),s=a(56),i=a.n(s),r=a(0),o=a.n(r),c=a(228),d=a.n(c),m=(a(224),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(i()(i()(a))),a}l()(t,e);var a=t.prototype;return a.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},a.componentDidMount=function(){d.a.highlightAll()},a.render=function(){return d.a.plugins.customClass.map({tag:"exampletag"}),o.a.createElement("div",{className:this.state.showCode?"group-open":""},o.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},o.a.createElement("i",{className:"icon--code"})),o.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},o.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},t}(o.a.Component));t.a=m},224:function(e,t,a){(function(e){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var t={classMap:{}};Prism.plugins.customClass={map:function(e){t.classMap=e},prefix:function(e){t.prefixString=e}},Prism.hooks.add("wrap",function(e){(t.classMap||t.prefixString)&&(e.classes=e.classes.map(function(e){return(t.prefixString||"")+(t.classMap[e]||e)}))})}}()}).call(this,a(232))}}]);
//# sourceMappingURL=component---src-pages-components-forms-code-js-1766f20046c3e0493868.js.map