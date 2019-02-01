(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{195:function(e,t,a){"use strict";a.r(t);var M=a(0),n=a.n(M),s=a(215),i=a(219),o=a(217),c=a(218),r="Accessibility".toLowerCase();t.default=function(){return n.a.createElement(i.a,null,n.a.createElement("header",{className:"subnav"},n.a.createElement("h1",null,"Accessibility"),n.a.createElement(o.a,{pageName:r,sectionName:"style"})),n.a.createElement(c.a,null,n.a.createElement("div",{className:"grid grid-padding"},n.a.createElement("p",{className:"intro"},"Samaritan web products are built to be consistent, clean, and confident. This is achieved through accessible design, which allows members of all abilites to successfully navigate and interact with our UI."),n.a.createElement("h2",{className:"has-number has-number--one no-margin--top"},"Color"),n.a.createElement("p",null,"Color is an important design element used to highlight valuable information to our users. When used correctly, it allows users to quickly navigate the page and find what they're looking for."),n.a.createElement("div",null,n.a.createElement("h3",null,"Contrast Ratios"),n.a.createElement("p",null,"Color used within buttons, links, and navigation elements must pass the WCAG 2.1 AA rating for accessibility.")),n.a.createElement("div",{className:"example-container"},n.a.createElement("div",{className:"grid x-accessibility-color-container"},n.a.createElement("div",{className:"grid--half x-accessibility-colorBlack"},n.a.createElement("div",{className:"space-between"},n.a.createElement("h2",null,"Light on Dark"),n.a.createElement("span",{className:"tag tag--no-link tag--solid tag--green"},"PASS")),n.a.createElement("p",null,"Light on Dark")),n.a.createElement("div",{className:"grid--half x-accessibility-colorWhite"},n.a.createElement("div",{className:"space-between"},n.a.createElement("h2",null,"Light on Dark"),n.a.createElement("span",{className:"tag tag--no-link tag--solid tag--green"},"PASS")),n.a.createElement("p",null,"Dark on Light"))),n.a.createElement("div",{className:"grid x-accessibility-color-container mt-space-s"},n.a.createElement("div",{className:"grid--half x-accessibility-colorOffBlack"},n.a.createElement("div",{className:"space-between"},n.a.createElement("h2",null,"Light on Dark"),n.a.createElement("span",{className:"tag tag--no-link tag--solid tag--red"},"FAIL")),n.a.createElement("p",null,"Light on Dark")),n.a.createElement("div",{className:"grid--half x-accessibility-colorOffWhite"},n.a.createElement("div",{className:"space-between"},n.a.createElement("h2",null,"Light on Dark"),n.a.createElement("span",{className:"tag tag--no-link tag--solid tag--red"},"FAIL")),n.a.createElement("p",null,"Dark on Light")))),n.a.createElement("blockquote",{className:"tips"},n.a.createElement("strong",null,"Tip: Understanding Web Content Accessibility Guidelines (WCAG)"),n.a.createElement("p",null,"WCAG 2.1 level AA standards require contrast ratios of 4.5:1 for normal text and 3:1 for large text. Level AAA require contrast ratios of 7:1 for normal text and 4.5:1 for large text. Use these helpful resources to learn more and test your designs:"),n.a.createElement("ul",{className:"tips-list"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html",target:"_blank",rel:"noopener noreferrer"},"WCAG Standards")),n.a.createElement("li",null,n.a.createElement("a",{href:"http://webaim.org/resources/contrastchecker/",target:"_blank",rel:"noopener noreferrer"},"Contrast Checker")))),n.a.createElement("div",null,n.a.createElement("h3",null,"Color Blindness"),n.a.createElement("p",null,"Don't rely on color alone to communicate important information to your user. Support key information with related icons and accurate messaging to ensure every user receives the same information.")),n.a.createElement("div",{className:"example-container"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-content"},n.a.createElement("fieldset",{className:"has-error"},n.a.createElement("label",{htmlFor:"password-error"},"Password"),n.a.createElement("input",{type:"password",id:"password-error",autocomplete:"off",value:"fdas"}),n.a.createElement("div",{className:"message"},n.a.createElement("i",{className:"dashing-icon dashing-icon--alert-filled"}),"The password you've entered isn't incorrect."))))),n.a.createElement("blockquote",{className:"tips"},n.a.createElement("strong",null,"Tip: Test Your Colors"),n.a.createElement("p",null,"Use accessiblity tools like ",n.a.createElement("a",{href:"https://michelf.ca/projects/sim-daltonism/",target:"_blank",rel:"noopener noreferrer"},"Sim Daltonism")," or ",n.a.createElement("a",{href:"https://github.com/oftheheadland/Colorblindly",target:"_blank",rel:"noopener noreferrer"},"Colorblindly")," to simulate how your designs can be affected by color blindness.")),n.a.createElement("h2",{className:"has-number has-number--two"},"Layout"),n.a.createElement("div",null,n.a.createElement("h3",null,"Mobile First"),n.a.createElement("p",null,"Samaritan products must be responsive and mobile-friendly. As of 2019, roughly 35% of our membership access the Dashboard from a touch device. For this reason, it is important that you offer a clean, consisent experience throughout every form factor. Utilize the ",n.a.createElement(s.Link,{to:"/components/css-grid/code"},"CSS grid")," system built into the Paragon Framework to get a head start on designing a mobile first layout.")),n.a.createElement("h2",{className:"has-number has-number--three"},"Icons & Images"),n.a.createElement("div",null,n.a.createElement("h3",null,"Touch Targets"),n.a.createElement("p",null,"Paragon buttons and actions are designed for function. According to a study by the ",n.a.createElement("a",{href:"http://touchlab.mit.edu/publications/2003_009.pdf",target:"_blank",rel:"noopener noreferrer"},"MIT Touch Lab"),", the average width of a pointer finger equates to about 45-57 pixels. It is important that the size of interactive targets don't cause users to make touch errors. For this reason, interactive actions and icons have a touch target size of at least 34px.")),n.a.createElement("div",{className:"example-container"},n.a.createElement("fieldset",null,n.a.createElement("button",{className:"mr-space-m"},"Button"),n.a.createElement("button",{className:"button--icon button--icon--small button--transparent button--close mr-space-l"}),n.a.createElement("div",{className:"checkbox--custom inline"},n.a.createElement("input",{type:"checkbox",id:"touch-target-checkbox",defaultChecked:!0}),n.a.createElement("label",{htmlFor:"touch-target-checkbox"},"Checkbox")))),n.a.createElement("h2",{className:"has-number has-number--four"},"Language"),n.a.createElement("p",null,"When adding text to your app or website, pay careful attention to the size that it is displayed. Body text should be 16px - 18px in size, and labels should be no smaller than 12px. Using anything smaller can cause strain and frustration for your user."),n.a.createElement("blockquote",{className:"caution"},n.a.createElement("strong",null,"Caution: Don't Save Text as an Image"),n.a.createElement("p",null,"Displaying text as an image can cause pixelation and make sentences difficult to read. Additionally, this prevents screen readers from seeing and reading text to your user.")))))}},215:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return T}),a.d(t,"StaticQueryContext",function(){return l}),a.d(t,"StaticQuery",function(){return j});var M=a(0),n=a.n(M),s=a(4),i=a.n(s),o=a(214),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var r=a(29);a.d(t,"waitForRouteChange",function(){return r.c});var u=a(216),L=a.n(u);a.d(t,"PageRenderer",function(){return L.a});var N=a(41);a.d(t,"parsePath",function(){return N.a});var l=n.a.createContext({}),j=function(e){return n.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function T(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}j.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},216:function(e,t,a){var M;e.exports=(M=a(220))&&M.default||M},217:function(e,t,a){"use strict";a(40);var M=a(0),n=a.n(M),s=a(215);t.a=function(e){var t=e.pageName,a=e.sectionName;null==a&&(a="components"),"css grid"===t?t="css-grid":"progress stepper"===t?t="progress-stepper":"radio buttons"===t&&(t="radio-buttons");var M=t,i=a,o=function(e){return e.isPartiallyCurrent?{className:"active"}:{className:""}},c=function(e){return n.a.createElement(s.Link,Object.assign({getProps:o},e),e.children)};return n.a.createElement("div",{className:"subnav-links"},n.a.createElement(c,{to:i+"/"+M+"/code"},"Code"),n.a.createElement(c,{to:i+"/"+M+"/guidelines"},"Guidelines"))}},218:function(e,t,a){"use strict";var M=a(0),n=a.n(M);t.a=function(e){var t=e.children;return n.a.createElement("main",{className:"content content-m content--example-page"},t)}},219:function(e,t,a){"use strict";var M=a(0),n=a.n(M),s=(a(227),a(228),a(221),a(9)),i=a.n(s),o=a(56),c=a.n(o),r=a(215),u=a(226),L=a.n(u),N=a(222),l=a.n(N),j=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={showSidebar:!1,showParagon:!0,showComponents:!0,showStyle:!0},a.handleClick=a.handleClick.bind(c()(c()(a))),a.toggleParagon=a.toggleParagon.bind(c()(c()(a))),a.toggleComponents=a.toggleComponents.bind(c()(c()(a))),a.toggleStyle=a.toggleStyle.bind(c()(c()(a))),a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.loadStateWithLocalStorage();var e=window.location.href;L()(".menu-group a").each(function(){var t=L()(this).text().toLowerCase();e.includes("css-grid")?L()("#css-grid").addClass("active"):e.includes("progress-stepper")?L()("#progress-stepper").addClass("active"):e.includes("radio-buttons")?L()("#radio-buttons").addClass("active"):e.includes(t)&&L()(this).addClass("active")})},a.handleClick=function(){this.setState(function(e){return{showSidebar:!e.showSidebar}})},a.toggleParagon=function(){this.setState(function(e){return{showParagon:!e.showParagon}}),localStorage.setItem("showParagon",JSON.stringify(!this.state.showParagon))},a.toggleComponents=function(){this.setState(function(e){return{showComponents:!e.showComponents}}),localStorage.setItem("showComponents",JSON.stringify(!this.state.showComponents))},a.toggleStyle=function(){this.setState(function(e){return{showStyle:!e.showStyle}}),localStorage.setItem("showStyle",JSON.stringify(!this.state.showStyle))},a.loadStateWithLocalStorage=function(){for(var e in this.state)if(localStorage.hasOwnProperty(e)){var t=localStorage.getItem(e);try{var a;t=JSON.parse(t),this.setState(((a={})[e]=t,a))}catch(a){var M;this.setState(((M={})[e]=t,M))}}},a.render=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:this.state.showSidebar?"example-mobile-sidebar expanded":"example-mobile-sidebar"},n.a.createElement("button",{className:"button--gray button--sidebar-icon",onClick:this.handleClick},n.a.createElement("i",{className:this.state.showSidebar?"dashing-icon dashing-icon--close":"dashing-icon"}))),n.a.createElement("div",{className:this.state.showSidebar?"example-sidebar show":"example-sidebar"},n.a.createElement("ul",null,n.a.createElement("div",{className:"logo-container"},n.a.createElement("img",{src:l.a,alt:"Paragon Logo"})),n.a.createElement("div",{className:this.state.showParagon?"group-container expanded":"group-container"},n.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleParagon},"Get Started"),n.a.createElement("i",{className:this.state.showParagon?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),n.a.createElement("div",{className:"menu-group"},n.a.createElement(r.Link,{to:"/",activeClassName:"active"},"Principles"),n.a.createElement(r.Link,{to:"/setup",activeClassName:"active"},"Setup"),n.a.createElement(r.Link,{to:"/templates"},"Templates"),n.a.createElement(r.Link,{to:"/resources"},"Resources"))),n.a.createElement("div",{className:this.state.showStyle?"group-container expanded":"group-container"},n.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleStyle},"Foundations"),n.a.createElement("i",{onClick:this.toggleStyle,className:this.state.showStyle?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),n.a.createElement("div",{className:"menu-group"},n.a.createElement(r.Link,{to:"/style/accessibility/code"},"Accessibility"),n.a.createElement(r.Link,{to:"/style/color/code"},"Color"),n.a.createElement(r.Link,{to:"/style/typography/code"},"Typography"))),n.a.createElement("div",{className:this.state.showComponents?"group-container expanded":"group-container"},n.a.createElement("h4",{className:"group-title no-margin",onClick:this.toggleComponents},"Components"),n.a.createElement("i",{onClick:this.toggleComponents,className:this.state.showComponents?"dashing-icon dashing-icon--arrow-down":"dashing-icon dashing-icon--arrow-right"}),n.a.createElement("div",{className:"menu-group"},n.a.createElement(r.Link,{to:"/components/accordion/code"},"Accordion"),n.a.createElement(r.Link,{to:"/components/actions/code"},"Actions"),n.a.createElement(r.Link,{to:"/components/banner/code"},"Banner"),n.a.createElement(r.Link,{to:"/components/cards/code"},"Cards"),n.a.createElement(r.Link,{to:"/components/checkboxes/code"},"Checkboxes"),n.a.createElement(r.Link,{to:"/components/footer/code"},"Footer"),n.a.createElement(r.Link,{to:"/components/forms/code"},"Forms"),n.a.createElement(r.Link,{to:"/components/css-grid/code",id:"css-grid"},"CSS Grid"),n.a.createElement(r.Link,{to:"/components/grid/code"},"Grid"),n.a.createElement(r.Link,{to:"/components/icons/code"},"Icons"),n.a.createElement(r.Link,{to:"/components/lists/code"},"Lists"),n.a.createElement(r.Link,{to:"/components/navigation/code"},"Navigation"),n.a.createElement(r.Link,{to:"/components/overpanel/code"},"Overpanel"),n.a.createElement(r.Link,{to:"/components/progress-stepper/code",id:"progress-stepper"},"Progress Stepper"),n.a.createElement(r.Link,{to:"/components/radio-buttons/code",id:"radio-buttons"},"Radio Buttons"),n.a.createElement(r.Link,{to:"/components/spinner/code"},"Spinner"),n.a.createElement(r.Link,{to:"/components/tables/code"},"Tables"),n.a.createElement(r.Link,{to:"/components/tags/code"},"Tags"),n.a.createElement(r.Link,{to:"/components/toggle/code"},"Toggle"))),n.a.createElement("a",{href:"https://badge.fury.io/js/paragon-framework"},n.a.createElement("img",{src:"https://badge.fury.io/js/paragon-framework.svg",alt:"npm version",height:"18"})))))},t}(n.a.Component);a(223),t.a=function(e){var t=e.children;return n.a.createElement("div",null,n.a.createElement(j,null),n.a.createElement("div",{className:"app-content"},t,n.a.createElement("footer",null,n.a.createElement("div",{className:"copyright"},"© 2019 Samaritan Ministries International"),n.a.createElement("a",{href:"https://github.com/samaritanministries/paragon",target:"_blank",rel:"noopener noreferrer"},"Download on GitHub"))))}},220:function(e,t,a){"use strict";a.r(t);a(40);var M=a(0),n=a.n(M),s=a(4),i=a.n(s),o=a(57),c=a(1),r=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};r.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=r},222:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAyLjM1MiAzNjIuMzU1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAyLjM1MiAzNjIuMzU1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGw6I0Y5Q0Y1Njt9Cgkuc3Qye2ZpbGw6IzRENEQ2ODt9Cgkuc3Qze2ZpbGw6I0E5OEY2RTt9Cgkuc3Q0e2ZpbGw6bm9uZTtzdHJva2U6IzRENEQ2ODtzdHJva2Utd2lkdGg6MTA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0NXtmaWxsOiNGNkNENjY7fQoJLnN0NntmaWxsOiMyNzM0NkQ7fQoJLnN0N3tmaWxsOm5vbmU7c3Ryb2tlOiMyNzM0NkQ7c3Ryb2tlLXdpZHRoOjEwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDh7ZmlsbDojNzM1NjlCO30KCS5zdDl7ZmlsbDojRTk2OTYzO30KPC9zdHlsZT4KPGcgaWQ9IlhNTElEXzJfIj4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Ik0xMjUuNTg1LDEwMy43MTFjLTAuMTU2LDEuNDM5LTAuMzcxLDIuODc5LTAuNjU3LDQuMzA3TDEwNS4xNDcsODguMDhjLTYuNDY0LTYuNTE2LTE2Ljk4NC02LjU1OC0yMy41MS0wLjA5MwoJCQljNi41MjYtNi40NjQsNi41NjgtMTYuOTk0LDAuMDkzLTIzLjUxTDYwLjM4Niw0Mi45NjFjMTcuNDEzLTMuMTkxLDM2LjA0MiwxLjk4Myw0OS40MzksMTUuNDk3CgkJCUMxMjIuMTI1LDcwLjg1NywxMjcuMzc5LDg3LjYwOCwxMjUuNTg1LDEwMy43MTF6Ii8+CgkJPHBhdGggY2xhc3M9InN0NSIgZD0iTTcwLjU3NywyNTYuNDg0bC0zNi45MTUsNDguOTY0Yy02LjM5NCw4LjQ4NS0xOS45MTYsMy45MzEtMTkuODc0LTYuNjk5bDAuMDU1LTEzLjlsMC4zOSwwLjAwMmw0NS44OTItNjAuODc4CgkJCWM2LjkwNi05LjE0MywxMC42NjEtMjAuMjg4LDEwLjcwNi0zMS43NDhsMC4xNDUtMzYuMzdsLTAuMDI5LTIuOGMxMy45NjEtMC4xMjQsMjcuODgyLTUuNDg5LDM4LjU2NC0xNi4wOTcKCQkJYzguMjUzLTguMTc3LDEzLjM5My0xOC4zMTcsMTUuNDE1LTI4LjkzOWwwLjYzNywwLjY0M2wtMC4yMjksNTcuNjRjLTAuMDQ2LDExLjQ2LTMuOCwyMi41OTUtMTAuNjk2LDMxLjc0OGwtMjQuMjI4LDMyLjEzNAoJCQlMNzAuNTc3LDI1Ni40ODR6Ii8+CgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyNS41ODUsMTAzLjcxMWwtMC4wMiw0Ljk1bC0wLjYzNy0wLjY0M0MxMjUuMjEzLDEwNi41OSwxMjUuNDI5LDEwNS4xNTEsMTI1LjU4NSwxMDMuNzExeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik05Mi4yNTcsMTA1LjYzOWM0LjMzMyw0LjM2Nyw0LjMwNSwxMS4zOTctMC4wNjMsMTUuNzNjLTQuMzU3LDQuMzIzLTExLjM5Nyw0LjI5NS0xNS43Mi0wLjA2MwoJCQljLTQuMzIzLTQuMzY3LTQuMjk1LTExLjM5NywwLjA2My0xNS43M0M4MC44OTQsMTAxLjI1NCw4Ny45MzQsMTAxLjI4Miw5Mi4yNTcsMTA1LjYzOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNNzAuOTc3LDE1NS44NTVsLTAuMTQ1LDM2LjM3Yy0wLjA0NiwxMS40Ni0zLjgsMjIuNjA1LTEwLjcwNiwzMS43NDhMMTQuMjMzLDI4NC44NWwtMC4zOS0wLjAwMkwxNC41ODYsOTguMTIKCQkJbDAuMzMsMC4wMDFjMC4xMzUsMTMuOTUxLDUuNDk5LDI3Ljg1MiwxNi4wOTcsMzguNTI0YzEwLjk4NiwxMS4wNzQsMjUuNDg0LDE2LjU1MSwzOS45MzUsMTYuNDA5TDcwLjk3NywxNTUuODU1eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik02OC4yOTUsMTAzLjQwM2wtMC4wMzIsOC4xN2MtMC4wMDQsMC45LTAuNTY3LDEuNzA4LTEuNDE4LDIuMDM0bC0xNC40MjIsNS40NjMKCQkJYy0xLjMyMiwwLjQ5NS0yLjYwNy0wLjgtMi4wOTItMi4xMThsNS41NjctMTQuMzc4YzAuMzMzLTAuODQ5LDEuMTQ2LTEuNDA1LDIuMDU2LTEuNDAybDguMTYsMC4wMzIKCQkJQzY3LjMyNCwxMDEuMjEsNjguMywxMDIuMTkzLDY4LjI5NSwxMDMuNDAzeiIvPgoJCTxjaXJjbGUgY2xhc3M9InN0NiIgY3g9IjU2LjE3OCIgY3k9Ijg1LjA1NSIgcj0iMTEuMTE2Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNMTI0LjkyNywxMDguMDE5Yy0yLjAyMiwxMC42MjItNy4xNjMsMjAuNzYyLTE1LjQxNSwyOC45MzljLTEwLjY4MiwxMC42MDgtMjQuNjA0LDE1Ljk3Mi0zOC41NjQsMTYuMDk3CgkJCWMtMTQuNDUxLDAuMTQzLTI4Ljk0OS01LjMzNS0zOS45MzUtMTYuNDA5Yy0xMC41OTgtMTAuNjcyLTE1Ljk2Mi0yNC41NzQtMTYuMDk3LTM4LjUyNGMtMC4xNTItMTQuNDYxLDUuMzI1LTI4Ljk3OSwxNi40MDktMzkuOTc1CgkJCWM4LjI1My04LjE4NywxOC40MzMtMTMuMjQ3LDI5LjA2MS0xNS4xODVjMTcuNDEzLTMuMTkxLDM2LjA0MiwxLjk4Myw0OS40MzksMTUuNDk3YzEyLjMwMSwxMi4zOTksMTcuNTU0LDI5LjE1LDE1Ljc2LDQ1LjI1MwoJCQlDMTI1LjQyOSwxMDUuMTUxLDEyNS4yMTMsMTA2LjU5LDEyNC45MjcsMTA4LjAxOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNNjMuNDA1LDE1LjUxM2wtMy40NDQsMy40MTZjLTYuNTE2LDYuNDY0LTYuNTU4LDE2Ljk5NC0wLjA5MywyMy41MWwwLjUxOCwwLjUyMkw4MS43Myw2NC40NzcKCQkJYzYuNDc0LDYuNTE2LDYuNDMyLDE3LjA0Ni0wLjA5MywyMy41MSIvPgoJCTxwYXRoIGNsYXNzPSJzdDciIGQ9Ik0xNTMuOTYzLDEwNi43OTRsLTMuNDQ0LDMuNDE2Yy02LjUxNiw2LjQ2NC0xNy4wMzYsNi40MjItMjMuNTEtMC4wOTNsLTEuNDQ0LTEuNDU2bC0wLjYzNy0wLjY0MwoJCQlMMTA1LjE0Nyw4OC4wOGMtNi40NjQtNi41MTYtMTYuOTg0LTYuNTU4LTIzLjUxLTAuMDkzIi8+CgkJPHBhdGggY2xhc3M9InN0NyIgZD0iTTE0LjU4Niw5OC4xMmwtMC43NDMsMTg2LjcyOWwtMC4wNTUsMTMuOWMtMC4wNDIsMTAuNjMsMTMuNDgsMTUuMTg0LDE5Ljg3NCw2LjY5OWwzNi45MTUtNDguOTY0CgkJCWwxOS44MzUtMjYuMzAxbDI0LjIyOC0zMi4xMzRjNi44OTYtOS4xNTMsMTAuNjUxLTIwLjI4OCwxMC42OTYtMzEuNzQ4bDAuMjI5LTU3LjY0bDAuMDItNC45NWwwLjAyLTUuMTUiLz4KCQk8cGF0aCBjbGFzcz0ic3Q3IiBkPSJNMTQuMjMzLDI4NC44NWw0NS44OTItNjAuODc4YzYuOTA2LTkuMTQzLDEwLjY2MS0yMC4yODgsMTAuNzA2LTMxLjc0OGwwLjE0NS0zNi4zNyIvPgoJCTxwb2x5bGluZSBjbGFzcz0ic3Q3IiBwb2ludHM9IjM4LjA2NywzNDYuODQ1IDcxLjk0NiwzMDEuOSA5MS43MiwyNzUuNjc4IDEyNy4zNTksMjI4LjQwOSAJCSIvPgoJCTxwb2x5bGluZSBjbGFzcz0ic3Q3IiBwb2ludHM9IjcwLjU3NywyNTYuMzc0IDcwLjU3NywyNTYuNDg0IDcwLjQwMSwzMDAuNzMzIAkJIi8+CgkJPGxpbmUgY2xhc3M9InN0NyIgeDE9IjkwLjcxIiB5MT0iMjMwLjQxNCIgeDI9IjkwLjUzNCIgeTI9IjI3NC43ODMiLz4KCTwvZz4KPC9nPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik05ODkuOTY1LDIxNy44MzRjLTYuNTM2LDAtMTIuNzg5LDAtMTkuNjc2LDBjMC0yLjExMywwLjAwNS00LjA1OS0wLjAwMS02LjAwNgoJCWMtMC4wNTItMTguNDgxLDAuMzM3LTM2Ljk3OC0wLjI4Ny01NS40NGMtMC42MDEtMTcuNzc1LTE5LjE0NC0yOS4wOTgtMzUuNjc4LTIyLjQ1NWMtMTIuMzEyLDQuOTQ3LTIwLjE2NCwxNi4zOTQtMjAuMjQzLDI5Ljk0MgoJCWMtMC4xMDQsMTcuODA5LTAuMDI2LDM1LjYyLTAuMDI2LDUzLjgxNWMtNi41ODUsMC0xMi45NjQsMC0xOS42NjksMGMwLTMyLjkwMSwwLTY1LjgwMiwwLTk5LjEzOGM2LjIyNSwwLDEyLjYxMiwwLDE5LjM4MSwwCgkJYzAuMTQ1LDEuMzUyLDAuMzE0LDIuOTMyLDAuNTc3LDUuMzg1YzEuODQxLTEuMzQ0LDMuMzI4LTIuNDY0LDQuODUtMy41MzVjMTMuODYxLTkuNzU4LDI4LjczMy0xMC45ODYsNDMuOTEtNC4wMzYKCQljMTUuNDc2LDcuMDg3LDI1LjU3NSwxOS40NjUsMjYuNTYzLDM2LjQ4MUM5OTAuOTA3LDE3NC4yNDYsOTg5Ljk2NSwxOTUuNzcxLDk4OS45NjUsMjE3LjgzNHoiLz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik02NDcuNDY5LDI2Ny4yNjVjNC43MTYtNC42NzQsOS4yMjctOS4xNDQsMTMuNzc0LTEzLjY1YzE0LjkyNywxMi41NjEsMzEuMjkxLDE1LjA5MSw0OC4yMSw0LjQ1NQoJCQljMTYuMjg3LTEwLjIzOCwxOS4wOC0yNi40NzgsMTcuMjM2LTQ0LjQyOWMtMTMuMjA1LDEwLjA4Mi0yNy45MzksMTMuMTg5LTQ0LjAwNyw5Ljg5MmMtMTMuMzgzLTIuNzQ2LTI0LjI3NC05LjY3OC0zMi42NzktMjAuMzk3CgkJCWMtMTYuNDUzLTIwLjk4My0xNS40ODEtNTEuMDk3LDEuNzMzLTcxLjExN2MxNi45ODctMTkuNzU2LDUwLjkwOC0yNy4zNjEsNzUuMTYxLTguMTY4YzAtMS43NDUsMC0zLjI5NCwwLTUuMDI4CgkJCWM2LjcwNywwLDEzLjEzOCwwLDE5LjgzNCwwYzAuMDUxLDAuNzAzLDAuMTU3LDEuNDcyLDAuMTU3LDIuMjQyYzAuMDA4LDM0Ljg4MSwwLjExMyw2OS43NjItMC4wMjYsMTA0LjY0MgoJCQljLTAuMTExLDI3LjkzNi0xOC44MTEsNTEuMjgtNDYuMTQ5LDU3LjEzM2MtMTkuNTQxLDQuMTgzLTM3LjAxNC0wLjYyNy01MS45MS0xNC4xNjYKCQkJQzY0OC4zNDUsMjY4LjI1OCw2NDcuOTQ4LDI2Ny43NzMsNjQ3LjQ2OSwyNjcuMjY1eiBNNzI3LjAxOCwxNjguNjI3YzAtMS4wNzksMC0yLjE1NywwLTMuMjM2CgkJCWMtMC4wMDQtMjAuMjM3LTE3LjI2Mi0zNS4zNDktMzcuMzE2LTMyLjY3NmMtMTUuNDUzLDIuMDYtMjcuOTg0LDEzLjY5My0zMS4xMDgsMjguODc5Yy0zLjAzMiwxNC43NCwzLjc3NSwzMC4xMDcsMTYuOTA3LDM4LjE2OQoJCQljMTMuMDU3LDguMDE2LDMwLjA0MSw2Ljg0NSw0MC41ODItMi45OTZDNzI0LjIwMSwxODkuMTg3LDcyNy41OTksMTc5LjY1LDcyNy4wMTgsMTY4LjYyN3oiLz4KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNMjA4LjkwNywyMTMuMzY0YzAsMjMuNzk4LDAsNDcuMTI4LDAsNzAuNjczYy02LjYyMiwwLTEzLjAzNSwwLTE5LjY0NCwwYzAtNTQuOTY2LDAtMTEwLjAwNCwwLTE2NS4yMgoJCQljNi40MDEsMCwxMi44MTgsMCwxOS40NSwwYzAuMTAyLDEuNjYsMC4yMDMsMy4zMDEsMC4zMjgsNS4zMzdjMTMuNDc3LTEwLjQ5NywyOC4zNzctMTMuNTUsNDQuNjMtMTAuMTIyCgkJCWMxMy4yNDksMi43OTQsMjQuMTU3LDkuNTQ4LDMyLjQ1NiwyMC4yNDRjMTYuNjgzLDIxLjUsMTUuNSw1MS4wMTktMi4zMzEsNzEuMzgzQzI2Ni4zNDQsMjI1LjU5MSwyMzEuOTY4LDIzMS43MTcsMjA4LjkwNywyMTMuMzY0CgkJCXogTTIwOC44NzQsMTY4LjMwNWMwLDEuMDc5LTAuMDE3LDIuMTU3LDAuMDAzLDMuMjM2YzAuMjk2LDE2LjM3LDEyLjY2OCwzNS44NDEsMzcuNTQ3LDMyLjczMQoJCQljMjUuMjQ3LTMuMTU2LDM5LjA5NC0yOS45MDIsMjcuNTA3LTUyLjU2MWMtOS4zNzMtMTguMzMtMzQuNjgzLTI1LjE2OC01MC44OTQtMTMuNTQ2CgkJCUMyMTIuODA0LDE0NS41MDEsMjA4LjcyMSwxNTUuOTY3LDIwOC44NzQsMTY4LjMwNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNNDAwLjcxMiwyMTIuOTk0Yy0yOC4zNzMsMjEuOTUtNjMuMTk4LDguNDAxLTc3LjQxMy0xMC40ODNjLTE1LjgwOC0yMS0xNC45MDktNTAuNzU5LDIuOTYxLTcxLjI5NQoJCQljMTUuOTQtMTguMzE4LDQ5LjE3OS0yNi45NjYsNzQuMjAzLTcuMTcyYzAuMDk0LTEuODcsMC4xNzUtMy40ODgsMC4yNjMtNS4yNDVjNi41ODEsMCwxMi45OTQsMCwxOS41NTgsMAoJCQljMCwzMy4xNzksMCw2Ni4yMTIsMCw5OS40MzdjLTYuNDc0LDAtMTIuODg3LDAtMTkuNTczLDBDNDAwLjcxMiwyMTYuNjQ3LDQwMC43MTIsMjE1LjA2OSw0MDAuNzEyLDIxMi45OTR6IE00MDAuNjEsMTY4Ljc1NwoJCQljMC0xLjE2OCwwLjA1Mi0yLjMzOC0wLjAwOC0zLjUwM2MtMS4wMjMtMjAuMTMtMTcuNzUyLTM3LjQ2Ni00MS4zMzQtMzEuNjEyYy0xNS4wNDYsMy43MzUtMjQuMzQ1LDEzLjcwNi0yNi44OTcsMjguOTUxCgkJCWMtMi41MSwxNC45OTEsMi45NTcsMjcuMTk3LDE1LjQ1MiwzNS45N2MxMS44NzksOC4zNCwyOS4xMDgsOC4wNjIsMzkuODE5LTAuNjQ2QzM5Ni44NDQsMTkwLjQzNyw0MDAuNzUyLDE4MC40NjMsNDAwLjYxLDE2OC43NTd6CgkJCSIvPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik02MTkuNDUsMjE4LjI4M2MtNi41NjgsMC0xMi45MTksMC0xOS4zNzMsMGMtMC4wODYtMS43MjUtMC4xNjUtMy4zMTItMC4yNjgtNS4zODgKCQkJYy0xNC44ODEsMTEuNTM0LTMxLjIxMiwxNC4xMDgtNDguNzMzLDkuMTA4Yy0xMi4zNDUtMy41MjItMjIuMjMxLTEwLjc5OS0yOS42MTctMjEuMjkxCgkJCWMtMTUuMjg3LTIxLjcxNy0xMy4yMDQtNTAuMzk2LDQuNTI4LTcwLjA1NGMxNS42MjUtMTcuMzIzLDQ4LjYwNS0yNi41OTgsNzMuNzg2LTYuNjExYzAuMTE4LTEuODM0LDAuMjIzLTMuNDgsMC4zMzgtNS4yNjMKCQkJYzYuNDUxLDAsMTIuNzk3LDAsMTkuMzM5LDBDNjE5LjQ1LDE1MS45MDUsNjE5LjQ1LDE4NS4wMDQsNjE5LjQ1LDIxOC4yODN6IE02MDAuMTEyLDE2Ny41MzMKCQkJYy0wLjI1NC0yLjA4NS0wLjM4Ny01LjMzNS0xLjA3Ni04LjQ2M2MtMy45MS0xNy43NS0xOC44OTMtMjguNTQ2LTM2LjM4Ni0yNi4zNjJjLTI0LjA5MiwzLjAwOC0zOC40MDksMjguNTU2LTI4LjQxNSw1MC43MDgKCQkJYzguNTY5LDE4Ljk5NSwzMi4yNzQsMjcuMTUsNDkuNDE2LDE2LjcyOEM1OTUuMzI4LDE5My4wNDMsNTk5LjczNSwxODEuODczLDYwMC4xMTIsMTY3LjUzM3oiLz4KCQk8cGF0aCBjbGFzcz0ic3Q2IiBkPSJNODc1Ljk1LDE2OC41NjFjLTAuMDI0LDMxLjExMy0yNC45MTgsNTUuODM1LTU2LjE3Niw1NS43ODdjLTMwLjQ1OS0wLjA0Ni01NS40MzYtMjUuMjA3LTU1LjQwNi01NS44MTIKCQkJYzAuMDMxLTMwLjg1NywyNS4xMDYtNTUuODY1LDU1Ljk3LTU1LjgyMUM4NTEuMDgzLDExMi43Niw4NzUuOTczLDEzNy43NTUsODc1Ljk1LDE2OC41NjF6IE04MjAuMzcsMjA0LjY3NQoJCQljMjAuMDU3LDAuMDE1LDM2LjE5OC0xNi4wMDgsMzYuMzItMzYuMDUzYzAuMTIxLTE5Ljg3Ni0xNi4xMDgtMzYuMTAzLTM2LjE3OC0zNi4xNzNjLTE5Ljk4MS0wLjA3LTM2LjI0OSwxNi4wNzMtMzYuMzExLDM2LjAzMgoJCQlDNzg0LjEzOSwxODguMzg1LDgwMC40MDIsMjA0LjY2LDgyMC4zNywyMDQuNjc1eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik01MDkuNzY3LDEyMS4xMDhjLTQuMjQyLDUuMTcyLTguMzIzLDEwLjE0Ny0xMi4xMTYsMTQuNzcxYy0zLjI5Ny0xLjE3Ni02LjE0My0yLjc4My05LjE0LTMuMTQ5CgkJCWMtOC44MS0xLjA3NS0xNS44MjEsMy41LTE5LjQ0MiwxMi4xMzZjLTIuNTc0LDYuMTQtMy42MTksMTIuNjI5LTMuNjgsMTkuMjA5Yy0wLjE1NywxNi44OTgtMC4wODQsMzMuNzk3LTAuMTAzLDUwLjY5NgoJCQljLTAuMDAxLDEuMDc1LDAsMi4xNSwwLDMuNDQxYy02LjU4MywwLTEzLjA2NiwwLTE5LjY5MywwYzAtMzMuMTIzLDAtNjYuMTYsMC05OS41NzJjNS4wODQsMCwxMC4wODItMC4wNjQsMTUuMDc3LDAuMDI3CgkJCWMyLjQ3LDAuMDQ1LDQuNjE5LTAuNTAzLDYuOTA0LTEuNTljMTMuMDQ5LTYuMjA1LDI1Ljk4NS02LjEzMiwzOC41OCwxLjRDNTA3LjM2MSwxMTkuMTk4LDUwOC40NCwxMjAuMTMzLDUwOS43NjcsMTIxLjEwOHoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-style-accessibility-guidelines-js-a80fffa9533433ee210f.js.map