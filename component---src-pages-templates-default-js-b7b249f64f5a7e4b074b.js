(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(215);a(223);t.default=function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"header"},r.a.createElement(i.Link,{to:"/templates/mobile",className:"button--mobile-sidebar",id:"close-button"},r.a.createElement("i",{className:"dashing-icon dashing-icon--menu"})),r.a.createElement("div",{className:"logo"},r.a.createElement("p",{className:"text-color--white"},"LOGO")),r.a.createElement("nav",{className:"header-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/",className:"active"},"Page 1")),r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/"},"Page 2")),r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/"},"Page 3")))),r.a.createElement("div",{className:"alert"},r.a.createElement("i",{className:"dashing-icon dashing-icon--notification"}),r.a.createElement("div",{className:"count"},"100")),r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile-image"},r.a.createElement("span",{className:"initials"},"RF")),r.a.createElement("span",{className:"profile-name"},"Ryan Fitzgerald"),r.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-down"}))),r.a.createElement("nav",{className:"sub-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/",className:"active"},"Option 1")),r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/"},"Option 2")),r.a.createElement("li",null,r.a.createElement(i.Link,{to:"/"},"Option 3")))),r.a.createElement("main",{className:"content"},r.a.createElement("div",{className:"grid grid-padding"},r.a.createElement("div",null,r.a.createElement("h1",null,"Primary Header"),r.a.createElement("p",null,"Header description"),r.a.createElement(i.Link,{to:"/templates/overpanel"},"Full Page")))))}},214:function(e,t,a){"use strict";var n=a(10);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(234)),i=n(a(235)),o=n(a(9)),l=n(a(56)),c=n(a(59)),s=n(a(4)),u=n(a(0)),d=a(16),p=a(215);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var a;a=e.call(this,t)||this,(0,c.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,l=t.onClick,c=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]),v=f(a);return u.default.createElement(d.Link,(0,i.default)({to:v,state:s,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,p.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:s,replace:m})),!0}},h))},t}(u.default.Component);h.propTypes=(0,i.default)({},m,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var v=u.default.forwardRef(function(e,t){return u.default.createElement(h,(0,i.default)({innerRef:t},e))});t.default=v;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var E=function(e){window.___push(f(e))};t.push=E;t.replace=function(e){window.___replace(f(e))};t.navigateTo=function(e){return E(e)}},215:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(214),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(29);a.d(t,"waitForRouteChange",function(){return s.c});var u=a(216),d=a.n(u);a.d(t,"PageRenderer",function(){return d.a});var p=a(41);a.d(t,"parsePath",function(){return p.a});var f=r.a.createContext({}),m=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},216:function(e,t,a){var n;e.exports=(n=a(220))&&n.default||n},220:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(57),c=a(1),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},234:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},235:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a}}]);
//# sourceMappingURL=component---src-pages-templates-default-js-b7b249f64f5a7e4b074b.js.map