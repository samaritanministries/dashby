(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{158:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(203),s=a(204),i=a(202),c=a(212),l="Grid".toLowerCase();t.default=function(){return o.a.createElement(r.a,null,o.a.createElement("header",{className:"subnav"},o.a.createElement("h1",null,"Grid"),o.a.createElement(s.a,{pageName:l})),o.a.createElement(i.a,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"column column--full"},o.a.createElement(c.a,null)))))}},198:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return g}),a.d(t,"StaticQuery",function(){return p});var n=a(0),o=a.n(n),r=a(4),s=a.n(r),i=a(197),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var l=a(27);a.d(t,"waitForRouteChange",function(){return l.c});var m=a(199),d=a.n(m);a.d(t,"PageRenderer",function(){return d.a});var u=a(38);a.d(t,"parsePath",function(){return u.a});var g=o.a.createContext({}),p=function(e){return o.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},199:function(e,t,a){var n;e.exports=(n=a(200))&&n.default||n},200:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),o=a.n(n),r=a(4),s=a.n(r),i=a(53),c=a(1),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(i.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},201:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjMuNjIiIGhlaWdodD0iMTIzLjYzIiB2aWV3Qm94PSIwIDAgMTIzLjYyIDEyMy42MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0NzZmYjY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Bc3NldCAyPC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ3LjI0LDg2LjE5VjYxLjgySDBhNjEuODEsNjEuODEsMCwwLDAsMTIzLjYyLjY4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc1LjY1LDU0LjcyaDQ3LjU3YTYxLjgxLDYxLjgxLDAsMCwwLTEyMywyLjE1TDc1LjY1LDM3LjQ1WiIvPjwvZz48L2c+PC9zdmc+"},202:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){var t=e.children;return o.a.createElement("section",{className:"content-container"},t)}},203:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(208),s=(a(209),a(210),a(205),a(8)),i=a.n(s),c=a(52),l=a.n(c),m=a(198),d=a(207),u=a.n(d),g=a(201),p=a.n(g),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showSidebar:!1,showParagon:!0,showComponents:!0,showStyle:!0},a.handleClick=a.handleClick.bind(l()(l()(a))),a.toggleParagon=a.toggleParagon.bind(l()(l()(a))),a.toggleComponents=a.toggleComponents.bind(l()(l()(a))),a.toggleStyle=a.toggleStyle.bind(l()(l()(a))),a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.loadStateWithLocalStorage();var e=window.location.href;u()(".menu-group a").each(function(){var t=u()(this).text().toLowerCase();e.includes("css-grid")?u()("#css-grid").addClass("active"):e.includes("progress-stepper")?u()("#progress-stepper").addClass("active"):e.includes("radio-buttons")?u()("#radio-buttons").addClass("active"):e.includes(t)&&u()(this).addClass("active")})},a.handleClick=function(){this.setState(function(e){return{showSidebar:!e.showSidebar}})},a.toggleParagon=function(){this.setState(function(e){return{showParagon:!e.showParagon}}),localStorage.setItem("showParagon",JSON.stringify(!this.state.showParagon))},a.toggleComponents=function(){this.setState(function(e){return{showComponents:!e.showComponents}}),localStorage.setItem("showComponents",JSON.stringify(!this.state.showComponents))},a.toggleStyle=function(){this.setState(function(e){return{showStyle:!e.showStyle}}),localStorage.setItem("showStyle",JSON.stringify(!this.state.showStyle))},a.loadStateWithLocalStorage=function(){for(var e in this.state)if(localStorage.hasOwnProperty(e)){var t=localStorage.getItem(e);try{var a;t=JSON.parse(t),this.setState(((a={})[e]=t,a))}catch(a){var n;this.setState(((n={})[e]=t,n))}}},a.render=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:this.state.showSidebar?"example-mobile-sidebar expanded":"example-mobile-sidebar"},o.a.createElement("button",{className:"button--gray button--sidebar-icon",onClick:this.handleClick},o.a.createElement("i",{className:this.state.showSidebar?"dashing-icon dashing-icon--close":"dashing-icon"}))),o.a.createElement("div",{className:this.state.showSidebar?"example-sidebar show":"example-sidebar"},o.a.createElement("ul",null,o.a.createElement("div",{className:"logo-container"},o.a.createElement("img",{src:p.a,alt:"Paragon Logo"})),o.a.createElement("div",{className:this.state.showParagon?"group-container expanded":"group-container"},o.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleParagon},"Paragon"),o.a.createElement("i",{className:this.state.showParagon?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),o.a.createElement("div",{className:"menu-group"},o.a.createElement(m.Link,{to:"/",activeClassName:"active"},"Principles"),o.a.createElement(m.Link,{to:"/get-started",activeClassName:"active"},"Get Started"),o.a.createElement(m.Link,{to:"/templates"},"Templates"),o.a.createElement(m.Link,{to:"/resources"},"Resources"))),o.a.createElement("div",{className:this.state.showStyle?"group-container expanded":"group-container"},o.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleStyle},"Foundations"),o.a.createElement("i",{onClick:this.toggleStyle,className:this.state.showStyle?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),o.a.createElement("div",{className:"menu-group"},o.a.createElement(m.Link,{to:"/style/accessibility"},"Accessibility"),o.a.createElement(m.Link,{to:"/style/color/code"},"Color"),o.a.createElement(m.Link,{to:"/style/typography/code"},"Typography"))),o.a.createElement("div",{className:this.state.showComponents?"group-container expanded":"group-container"},o.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleComponents},"Components"),o.a.createElement("i",{onClick:this.toggleComponents,className:this.state.showComponents?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),o.a.createElement("div",{className:"menu-group"},o.a.createElement(m.Link,{to:"/components/accordion/code"},"Accordion"),o.a.createElement(m.Link,{to:"/components/actions/code"},"Actions"),o.a.createElement(m.Link,{to:"/components/banner/code"},"Banner"),o.a.createElement(m.Link,{to:"/components/cards/code"},"Cards"),o.a.createElement(m.Link,{to:"/components/checkboxes/code"},"Checkboxes"),o.a.createElement(m.Link,{to:"/components/footer/code"},"Footer"),o.a.createElement(m.Link,{to:"/components/forms/code"},"Forms"),o.a.createElement(m.Link,{to:"/components/css-grid/code",id:"css-grid"},"CSS Grid"),o.a.createElement(m.Link,{to:"/components/grid/code"},"Grid"),o.a.createElement(m.Link,{to:"/components/icons/code"},"Icons"),o.a.createElement(m.Link,{to:"/components/lists/code"},"Lists"),o.a.createElement(m.Link,{to:"/components/navigation/code"},"Navigation"),o.a.createElement(m.Link,{to:"/components/progress-stepper/code",id:"progress-stepper"},"Progress Stepper"),o.a.createElement(m.Link,{to:"/components/radio-buttons/code",id:"radio-buttons"},"Radio Buttons"),o.a.createElement(m.Link,{to:"/components/spinner/code"},"Spinner"),o.a.createElement(m.Link,{to:"/components/tables/code"},"Tables"),o.a.createElement(m.Link,{to:"/components/tags/code"},"Tags"),o.a.createElement(m.Link,{to:"/components/toggle/code"},"Toggle"))))))},t}(o.a.Component);a(206),t.a=function(e){var t=e.children;return o.a.createElement("div",null,o.a.createElement(r.Helmet,null,o.a.createElement("script",{src:"/static/prism.js",type:"application/javascript"})),o.a.createElement(h,null),o.a.createElement("div",{className:"app-content"},t,o.a.createElement("footer",null,o.a.createElement("div",{className:"copyright"},"© 2018 Samaritan Ministries International"),o.a.createElement("a",{href:"https://github.com/samaritanministries/paragon",target:"_blank",rel:"noopener noreferrer"},"Download on GitHub"))))}},204:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(198);t.a=function(e){var t=e.pageName,a=e.sectionName;null==a&&(a="components"),"css grid"===t?t="css-grid":"progress stepper"===t?t="progress-stepper":"radio buttons"===t&&(t="radio-buttons");var n=t,s=a;return o.a.createElement("div",{className:"subnav-links"},o.a.createElement(r.Link,{to:s+"/"+n+"/code",activeClassName:"active"},"Code"),o.a.createElement(r.Link,{to:s+"/"+n+"/guidelines",activeClassName:"active"},"Guidelines"))}},212:function(e,t,a){"use strict";var n=a(0),o=a.n(n);a(206);t.a=function(){return o.a.createElement("div",{className:"follow-message"},o.a.createElement("div",{className:"follow-message-inner"},o.a.createElement("h3",null,"Guidelines coming soon!")))}}}]);
//# sourceMappingURL=component---src-pages-components-grid-guidelines-js-665289fd200b065cf318.js.map