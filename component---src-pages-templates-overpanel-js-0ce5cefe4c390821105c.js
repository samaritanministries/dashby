(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{198:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(205);n(213);t.default=function(){return r.a.createElement("div",{className:"overpanel"},r.a.createElement("header",{className:"title-bar"},r.a.createElement("div",{className:"title-content"},r.a.createElement("div",null,r.a.createElement("h2",null,"Overpanel Title"),r.a.createElement("p",null,"Overpanel description")),r.a.createElement(o.Link,{to:"/templates/default"},r.a.createElement("button",{className:"button button--secondary"},r.a.createElement("i",{className:"dashing-icon dashing-icon--close"})," Close")))),r.a.createElement("section",{className:"content"},r.a.createElement("div",{className:"grid grid-padding"},r.a.createElement("h2",null,"Example Fullscreen Page"),r.a.createElement("p",null,"This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple! This example shows a fullscreen layout. Simple!"))))}},204:function(e,t,n){"use strict";var a=n(10);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(221)),o=a(n(222)),i=a(n(9)),s=a(n(56)),u=a(n(58)),l=a(n(4)),c=a(n(0)),p=n(16),d=n(205);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,u.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,s=t.onClick,u=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=f(n);return c.default.createElement(p.Link,(0,o.default)({to:v,state:l,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,d.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),y(n,{state:l,replace:h})),!0}},m))},t}(c.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var v=m;t.default=v;var y=function(e,t){window.___navigate(f(e),t)};t.navigate=y;var g=function(e){window.___push(f(e))};t.push=g;t.replace=function(e){window.___replace(f(e))};t.navigateTo=function(e){return g(e)}},205:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(204),u=n.n(s);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(29);n.d(t,"waitForRouteChange",function(){return l.c});var c=n(206),p=n.n(c);n.d(t,"PageRenderer",function(){return p.a});var d=n(40);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),h=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},206:function(e,t,n){var a;e.exports=(a=n(207))&&a.default||a},207:function(e,t,n){"use strict";n.r(t);n(41);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(57),u=n(1),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},221:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},222:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-templates-overpanel-js-0ce5cefe4c390821105c.js.map