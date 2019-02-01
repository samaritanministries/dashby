(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{163:function(e,i,a){"use strict";a.r(i);var d=a(9),r=a.n(d),t=a(0),s=a.n(t),l=a(214),n=a(4),c=a.n(n),g=a(218),h=a(216),m=a(217),o=a(223),v="CSS Grid".toLowerCase(),u=function(e){function i(){return e.apply(this,arguments)||this}return r()(i,e),i.prototype.render=function(){var e=this.props.location;return s.a.createElement(g.a,null,s.a.createElement("header",{className:"subnav"},s.a.createElement("h1",null,"CSS Grid"),s.a.createElement(h.a,{pageName:v})),s.a.createElement(m.a,null,s.a.createElement("h4",{className:"grid-compatibility"},s.a.createElement("i",{className:"dashing-icon dashing-icon--white dashing-icon--alert-filled"})," You are viewing a grid fallback. This page will mimic grid as closely as it can."),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"column column--full"},s.a.createElement("h2",{className:"example-header",id:"gridWithPadding"},"Grid with Padding",s.a.createElement(l.Link,{to:e.pathname+"/#gridWithPadding",className:"button button--transparent button--copy-link"})),s.a.createElement("div",{className:"row example-container"},s.a.createElement("div",{className:"column column--full"},s.a.createElement("div",{className:"grid grid-highlight-blue grid-padding"},s.a.createElement("div",{className:"grid--full"},"Padded Grid Content")))),s.a.createElement(o.a,null,'\x3c!-- Grid with Padding --\x3e\n    <div class="app-content grid-wrapper">\n      <div class="grid grid-padding"></div>\n    </div>'),s.a.createElement("h2",{className:"example-header",id:"gridSeperations"},"Grid Seperations",s.a.createElement(l.Link,{to:e.pathname+"/#gridSeperations",className:"button button--transparent button--copy-link"})),s.a.createElement("div",{className:"row example-container"},s.a.createElement("div",{className:"column column--full"},s.a.createElement("div",{className:"grid grid--full grid-highlight-blue"},s.a.createElement("div",{className:"grid--full"},".grid--full"),s.a.createElement("div",{className:"grid--half"},".grid--half"),s.a.createElement("div",{className:"grid--half"},".grid--half"),s.a.createElement("div",{className:"grid--three-fourths"},".grid--three-fourths"),s.a.createElement("div",{className:"grid--fourth"},".grid--fourth"),s.a.createElement("div",{className:"grid--fourth"},".grid--fourth"),s.a.createElement("div",{className:"grid--fourth"},".grid--fourth"),s.a.createElement("div",{className:"grid--fourth"},".grid--fourth"),s.a.createElement("div",{className:"grid--fourth"},".grid--fourth"),s.a.createElement("div",{className:"grid--two-thirds"},".grid--two-thirds"),s.a.createElement("div",{className:"grid--third"},".grid--third"),s.a.createElement("div",{className:"grid--five-sixths"},".grid--five-sixths"),s.a.createElement("div",{className:"grid--sixth"},".grid--sixth"),s.a.createElement("div",{className:"grid--sixth"},".grid--sixth"),s.a.createElement("div",{className:"grid--sixth"},".grid--sixth"),s.a.createElement("div",{className:"grid--sixth"},".grid--sixth"),s.a.createElement("div",{className:"grid--sixth"},".grid--sixth"),s.a.createElement("div",{className:"grid--sixth"},".grid--sixth"),s.a.createElement("div",{className:"grid--sixth"},".grid--sixth")))),s.a.createElement(o.a,null,'\x3c!-- Grid Example --\x3e\n    <div class="grid">\n      <div class="grid--full">.grid--full</div>\n      <div class="grid--half">.grid--half</div>\n      <div class="grid--half">.grid--half</div>\n      <div class="grid--three-fourths">.grid--three-fourths</div>\n      <div class="grid--fourth">.grid--fourth</div>\n      <div class="grid--fourth">.grid--fourth</div>\n      <div class="grid--fourth">.grid--fourth</div>\n      <div class="grid--fourth">.grid--fourth</div>\n      <div class="grid--fourth">.grid--fourth</div>\n      <div class="grid--two-thirds">.grid--two-thirds</div>\n      <div class="grid--third">.grid--third</div>\n      <div class="grid--five-sixth">.grid--five-sixth</div>\n      <div class="grid--sixth">.grid--sixth</div>\n      <div class="grid--sixth">.grid--sixth</div>\n      <div class="grid--sixth">.grid--sixth</div>\n      <div class="grid--sixth">.grid--sixth</div>\n      <div class="grid--sixth">.grid--sixth</div>\n      <div class="grid--sixth">.grid--sixth</div>\n    </div>'),s.a.createElement("h2",{className:"example-header",id:"nestedGrids"},"Nested Grids",s.a.createElement(l.Link,{to:e.pathname+"/#nestedGrids",className:"button button--transparent button--copy-link"})),s.a.createElement("div",{className:"row example-container"},s.a.createElement("div",{className:"column column--full"},s.a.createElement("div",{className:"grid grid--full grid-highlight-blue"},s.a.createElement("div",{className:"grid--full"},".grid--full"),s.a.createElement("div",{className:"grid--half"},".grid--half"),s.a.createElement("div",{className:"grid--half"},".grid--half"),s.a.createElement("div",{className:"grid--three-fourths grid grid-highlight-green"},s.a.createElement("div",{className:"grid--half"},".grid--half"),s.a.createElement("div",{className:"grid--half"},".grid--half")),s.a.createElement("div",{className:"grid--fourth"},".grid--fourth"),s.a.createElement("div",{className:"grid--two-thirds"},".grid--two-thirds"),s.a.createElement("div",{className:"grid--third"},".grid--third"),s.a.createElement("div",{className:"grid--sixth"},".grid--sixth"),s.a.createElement("div",{className:"grid--five-sixths grid grid-highlight-green"},s.a.createElement("div",{className:"grid--third"},".grid--third"),s.a.createElement("div",{className:"grid--third"},".grid--third"),s.a.createElement("div",{className:"grid--third"},".grid--third"),s.a.createElement("div",{className:"grid--two-thirds"},".grid--two-thirds"),s.a.createElement("div",{className:"grid--third"},".grid--third"))))),s.a.createElement(o.a,null,'\x3c!-- Nested Grid Example --\x3e\n    <div class="grid">\n      <div class="grid--full">.grid--full</div>\n      <div class="grid--half">.grid--half</div>\n      <div class="grid--half">.grid--half</div>\n      <div class="grid grid--three-fourths">\n        <div class="grid--half">.grid--half</div>\n        <div class="grid--half">.grid--half</div>\n      </div>\n      <div class="grid--fourth">.grid--fourth</div>\n      <div class="grid--two-thirds">.grid--two-thirds</div>\n      <div class="grid--third">.grid--third</div>\n      <div class="grid--sixth">.grid--sixth</div>\n      <div class="grid grid--five-sixths">\n        <div class="grid--third">.grid--third</div>\n        <div class="grid--third">.grid--third</div>\n        <div class="grid--third">.grid--third</div>\n        <div class="grid--two-thirds">.grid--two-thirds</div>\n        <div class="grid--third">.grid--third</div>\n      </div>\n    </div>'),s.a.createElement("h2",{className:"example-header",id:"gridInAndWithCards"},"Grid in and with Cards",s.a.createElement(l.Link,{to:e.pathname+"/#gridInAndWithCards",className:"button button--transparent button--copy-link"})),s.a.createElement("div",{className:"row example-container"},s.a.createElement("div",{className:"column column--full"},s.a.createElement("div",{className:"grid grid--full grid-highlight"},s.a.createElement("div",{className:"grid--full"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card--header"},s.a.createElement("h3",null,"Card Header (.grid--full)")),s.a.createElement("div",{className:"card--content"},s.a.createElement("div",{className:"grid grid-highlight-blue"},s.a.createElement("div",{className:"grid--full"},".grid--full"),s.a.createElement("div",{className:"grid--half"},".grid--half"),s.a.createElement("div",{className:"grid--half"},".grid--half"))))),s.a.createElement("div",{className:"grid--half"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card--header"},s.a.createElement("h3",null,"Card Header (.grid--half)")),s.a.createElement("div",{className:"card--content"},s.a.createElement("div",{className:"grid grid-highlight-green"},s.a.createElement("div",{className:"grid--two-thirds"},".grid--two-thirds"),s.a.createElement("div",{className:"grid--third"},".grid--third"),s.a.createElement("div",{className:"grid--two-thirds"},".grid--two-thirds"),s.a.createElement("div",{className:"grid--third"},".grid--third"))))),s.a.createElement("div",{className:"grid--half"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card--header"},s.a.createElement("h3",null,"Card Header (.grid--half)")),s.a.createElement("div",{className:"card--content"},s.a.createElement("div",{className:"grid"},s.a.createElement("div",{className:"grid--two-thirds"},"Some Information"),s.a.createElement("div",{className:"grid--third align-right"},s.a.createElement(l.Link,{to:"/components/css-grid/code"},"LINK")),s.a.createElement("div",{className:"grid--two-thirds"},"More Information"),s.a.createElement("div",{className:"grid--third align-right"},s.a.createElement(l.Link,{to:"/components/css-grid/code"},"LINK"))))))))),s.a.createElement(o.a,null,'\x3c!-- Grid in and with Cards Example --\x3e\n    <div class="grid">\n\n      <div class="grid--full">\n        <div class="card">\n          <div class="card--header"><h3>Card Header (.grid--full)</h3></div>\n          <div class="card--content">\n            <div class="grid">\n              <div class="grid--full">.grid--full</div>\n              <div class="grid--half">.grid--half</div>\n              <div class="grid--half">.grid--half</div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="grid--half">\n        <div class="card">\n          <div class="card--header"><h3>Card Header (.grid--half)</h3></div>\n          <div class="card--content">\n            <div class="grid">\n              <div class="grid--two-thirds">.grid--two-thirds</div>\n              <div class="grid--third">.grid--third</div>\n              <div class="grid--two-thirds">.grid--two-thirds</div>\n              <div class="grid--third">.grid--third</div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="grid--half">\n        <div class="card">\n          <div class="card--header"><h3>Card Header (.grid--half)</h3></div>\n          <div class="card--content">\n            <div class="grid">\n              <div class="grid--two-thirds">Some Information</div>\n              <div class="grid--third align-right"><a href="#">LINK</a></div>\n              <div class="grid--two-thirds">More Information</div>\n              <div class="grid--third align-right"><a href="#">LINK</a></div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>')))))},i}(s.a.Component);u.propTypes={location:c.a.object.isRequired},i.default=u},216:function(e,i,a){"use strict";a(40);var d=a(0),r=a.n(d),t=a(214);i.a=function(e){var i=e.pageName,a=e.sectionName;null==a&&(a="components"),"css grid"===i?i="css-grid":"progress stepper"===i?i="progress-stepper":"radio buttons"===i&&(i="radio-buttons");var d=i,s=a,l=function(e){return e.isPartiallyCurrent?{className:"active"}:{className:""}},n=function(e){return r.a.createElement(t.Link,Object.assign({getProps:l},e),e.children)};return r.a.createElement("div",{className:"subnav-links"},r.a.createElement(n,{to:s+"/"+d+"/code"},"Code"),r.a.createElement(n,{to:s+"/"+d+"/guidelines"},"Guidelines"))}},223:function(e,i,a){"use strict";a(58),a(220);var d=a(9),r=a.n(d),t=a(56),s=a.n(t),l=a(0),n=a.n(l),c=a(228),g=a.n(c),h=(a(224),function(e){function i(i){var a;return(a=e.call(this,i)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(s()(s()(a))),a}r()(i,e);var a=i.prototype;return a.toggleCode=function(){this.setState(function(e){return{showCode:!e.showCode}})},a.componentDidMount=function(){g.a.highlightAll()},a.render=function(){return g.a.plugins.customClass.map({tag:"exampletag"}),n.a.createElement("div",{className:this.state.showCode?"group-open":""},n.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},n.a.createElement("i",{className:"icon--code"})),n.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},n.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},i}(n.a.Component));i.a=h},224:function(e,i,a){(function(e){!function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var i={classMap:{}};Prism.plugins.customClass={map:function(e){i.classMap=e},prefix:function(e){i.prefixString=e}},Prism.hooks.add("wrap",function(e){(i.classMap||i.prefixString)&&(e.classes=e.classes.map(function(e){return(i.prefixString||"")+(i.classMap[e]||e)}))})}}()}).call(this,a(232))}}]);
//# sourceMappingURL=component---src-pages-components-css-grid-code-js-51b651d34ada1de62fa3.js.map