(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{DOjo:function(e,a,n){(function(e){n("bWfx"),n("LK8F"),function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var a,n,t="";Prism.plugins.customClass={add:function(e){a=e},map:function(e){n="function"==typeof e?e:function(a){return e[a]||a}},prefix:function(e){t=e||""}},Prism.hooks.add("wrap",(function(e){if(a){var l=a({content:e.content,type:e.type,language:e.language});Array.isArray(l)?e.classes.push.apply(e.classes,l):l&&e.classes.push(l)}(n||t)&&(e.classes=e.classes.map((function(a){return t+(n?n(a,e.language):a)})))}))}}()}).call(this,n("eKGF"))},bkyT:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),l=n.n(t),i=n("Wbzz"),r=n("Bl7J"),o=n("VGxr"),s=n("OmYv"),c=n("xBU5");function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m="Tables".toLowerCase(),d=function(e){var a,n;function t(a){var n;return(n=e.call(this,a)||this).state={expandRow1:!1,expandRow2:!1,expandRow3:!1},n.toggleRow1=n.toggleRow1.bind(u(n)),n.toggleRow2=n.toggleRow2.bind(u(n)),n.toggleRow3=n.toggleRow3.bind(u(n)),n}n=e,(a=t).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n;var d=t.prototype;return d.toggleRow1=function(){this.setState((function(e){return{expandRow1:!e.expandRow1}})),this.setState({expandRow2:!1}),this.setState({expandRow3:!1})},d.toggleRow2=function(){this.setState((function(e){return{expandRow2:!e.expandRow2}})),this.setState({expandRow1:!1}),this.setState({expandRow3:!1})},d.toggleRow3=function(){this.setState((function(e){return{expandRow3:!e.expandRow3}})),this.setState({expandRow1:!1}),this.setState({expandRow2:!1})},d.render=function(){var e=this.props.location;return l.a.createElement(r.a,null,l.a.createElement("header",{className:"subnav"},l.a.createElement("h1",null,"Tables"),l.a.createElement(o.a,{pageName:m})),l.a.createElement(s.a,null,l.a.createElement("div",{className:"grid grid-padding"},l.a.createElement("h2",{id:"flex-table"},"Flex Table",l.a.createElement(i.a,{to:e.pathname+"/#flex-table",className:"button button--transparent button--copy-link"})),l.a.createElement("p",{className:"no-margin"},"Use ",l.a.createElement("code",{className:"example-text"},".is-condensed")," to make the padding for the rows half the size."),l.a.createElement("p",null,"Use ",l.a.createElement("code",{className:"example-text"},".font-small")," to make the font 0.9rem."),l.a.createElement("div",{className:"example-container"},l.a.createElement("div",{className:"flex-table is-condensed font-small"},l.a.createElement("h3",{className:"flex-table--title"},"Flex Table Title"),l.a.createElement("ol",{className:"table-row--header"},l.a.createElement("li",null,"Column 1"),l.a.createElement("li",null,"Column 2"),l.a.createElement("li",null,"Column 3"),l.a.createElement("li",null,"Column 4")),l.a.createElement("ol",{className:"table-row"},l.a.createElement("li",null,"Column 1"),l.a.createElement("li",null,"Column 2"),l.a.createElement("li",null,"Column 3"),l.a.createElement("li",null,"Column 4")),l.a.createElement("ol",{className:"table-row"},l.a.createElement("li",null,"Column 1"),l.a.createElement("li",null,"Column 2"),l.a.createElement("li",null,"Column 3"),l.a.createElement("li",null,"Column 4")),l.a.createElement("ol",{className:"table-row"},l.a.createElement("li",null,"Column 1"),l.a.createElement("li",null,"Column 2"),l.a.createElement("li",null,"Column 3"),l.a.createElement("li",null,"Column 4"))),l.a.createElement(c.a,null,'<div className="flex-table is-condensed font-small">\n  <h3 className="flex-table--title">Flex Table Title</h3>\n  <ol className="table-row--header">\n    <li>Column 1</li>\n    <li>Column 2</li>\n    <li>Column 3</li>\n    <li>Column 4</li>\n  </ol>\n  <ol className="table-row">\n    <li>Column 1</li>\n    <li>Column 2</li>\n    <li>Column 3</li>\n    <li>Column 4</li>\n  </ol>\n  <ol className="table-row">\n    <li>Column 1</li>\n    <li>Column 2</li>\n    <li>Column 3</li>\n    <li>Column 4</li>\n  </ol>\n  <ol className="table-row">\n    <li>Column 1</li>\n    <li>Column 2</li>\n    <li>Column 3</li>\n    <li>Column 4</li>\n  </ol>\n</div>')),l.a.createElement("h2",{className:"mt-space-xl",id:"flex-table-selectable"},"Flex Table - Selectable",l.a.createElement(i.a,{to:e.pathname+"/#flex-table-selectable",className:"button button--transparent button--copy-link"})),l.a.createElement("div",{className:"example-container"},l.a.createElement("div",{className:"flex-table row-selectable"},l.a.createElement("ol",{className:"table-row--header"},l.a.createElement("li",null,"Column 1"),l.a.createElement("li",null,"Column 2"),l.a.createElement("li",null,"Column 3"),l.a.createElement("li",null,"Column 4")),l.a.createElement(i.a,{to:"#"},l.a.createElement("ol",{className:"table-row"},l.a.createElement("li",null,"Column 1"),l.a.createElement("li",null,"Column 2"),l.a.createElement("li",null,"Column 3"),l.a.createElement("li",null,"Column 4"),l.a.createElement("li",null,l.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-right"})))),l.a.createElement(i.a,{to:"#"},l.a.createElement("ol",{className:"table-row"},l.a.createElement("li",null,"Column 1"),l.a.createElement("li",null,"Column 2"),l.a.createElement("li",null,"Column 3"),l.a.createElement("li",null,"Column 4"),l.a.createElement("li",null,l.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-right"})))),l.a.createElement(i.a,{to:"#"},l.a.createElement("ol",{className:"table-row"},l.a.createElement("li",null,"Column 1"),l.a.createElement("li",null,"Column 2"),l.a.createElement("li",null,"Column 3"),l.a.createElement("li",null,"Column 4"),l.a.createElement("li",null,l.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-right"}))))),l.a.createElement(c.a,null,'\x3c!-- Use row-selectable to give space for the dashing-icon --\x3e\n<div className="flex-table row-selectable">\n  <ol className="table-row--header">\n    <li>Column 1</li>\n    <li>Column 2</li>\n    <li>Column 3</li>\n    <li>Column 4</li>\n  </ol>\n  <a>\n    <ol className="table-row">\n      <li>Column 1</li>\n      <li>Column 2</li>\n      <li>Column 3</li>\n      <li>Column 4</li>\n      <li>\n        <i className="dashing-icon dashing-icon--arrow-right"></i>\n      </li>\n    </ol>\n  </a>\n  <a>\n    <ol className="table-row">\n      <li>Column 1</li>\n      <li>Column 2</li>\n      <li>Column 3</li>\n      <li>Column 4</li>\n      <li>\n        <i className="dashing-icon dashing-icon--arrow-right"></i>\n      </li>\n    </ol>\n  </a>\n  <a>\n    <ol className="table-row">\n      <li>Column 1</li>\n      <li>Column 2</li>\n      <li>Column 3</li>\n      <li>Column 4</li>\n      <li>\n        <i className="dashing-icon dashing-icon--arrow-right"></i>\n      </li>\n    </ol>\n  </a>\n</div>')),l.a.createElement("h2",{className:"mt-space-xl",id:"flex-table-expandable"},"Flex Table - Expandable",l.a.createElement(i.a,{to:e.pathname+"/#flex-table-expandable",className:"button button--transparent button--copy-link"})),l.a.createElement("div",{className:"example-container"},l.a.createElement("div",{className:"flex-table row-expandable"},l.a.createElement("ol",{className:"table-row--header"},l.a.createElement("li",null,"Column 1"),l.a.createElement("li",null,"Column 2"),l.a.createElement("li",null,"Column 3"),l.a.createElement("li",null,"Column 4")),l.a.createElement("ol",{onClick:this.toggleRow1,className:"table-row "+(this.state.expandRow1?"expanded":"")},l.a.createElement("li",null,l.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-right"})),l.a.createElement("li",null,"Column 1"),l.a.createElement("li",null,"Column 2"),l.a.createElement("li",null,"Column 3"),l.a.createElement("li",null,"Column 4")),l.a.createElement("section",{className:"table-row--content"},l.a.createElement("button",{onClick:this.toggleRow1,className:"tablet-hide desktop-hide"},"Close"),l.a.createElement("p",{className:"p-space-m"},"Content inside the expandable row")),l.a.createElement("ol",{onClick:this.toggleRow2,className:"table-row "+(this.state.expandRow2?"expanded":"")},l.a.createElement("li",null,l.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-right"})),l.a.createElement("li",null,"Column 1"),l.a.createElement("li",null,"Column 2"),l.a.createElement("li",null,"Column 3"),l.a.createElement("li",null,"Column 4")),l.a.createElement("section",{className:"table-row--content"},l.a.createElement("button",{onClick:this.toggleRow2,className:"tablet-hide desktop-hide"},"Close"),l.a.createElement("p",{className:"p-space-m"},"Content inside the expandable row")),l.a.createElement("ol",{onClick:this.toggleRow3,className:"table-row "+(this.state.expandRow3?"expanded":"")},l.a.createElement("li",null,l.a.createElement("i",{className:"dashing-icon dashing-icon--arrow-right"})),l.a.createElement("li",null,"Column 1"),l.a.createElement("li",null,"Column 2"),l.a.createElement("li",null,"Column 3"),l.a.createElement("li",null,"Column 4")),l.a.createElement("section",{className:"table-row--content"},l.a.createElement("button",{onClick:this.toggleRow3,className:"tablet-hide desktop-hide"},"Close"),l.a.createElement("p",{className:"p-space-m"},"Content inside the expandable row"))),l.a.createElement(c.a,null,'\x3c!-- Use row-expandable to give space for the dashing-icon --\x3e\n<div className="flex-table row-expandable">\n  <ol className="table-row--header">\n    <li>Column 1</li>\n    <li>Column 2</li>\n    <li>Column 3</li>\n    <li>Column 4</li>\n  </ol>\n  <ol className="table-row">\n    <li>\n      <i className="dashing-icon dashing-icon--arrow-right"></i>\n    </li>\n    <li>Column 1</li>\n    <li>Column 2</li>\n    <li>Column 3</li>\n    <li>Column 4</li>\n  </ol>\n  <ol className="table-row">\n    <li>\n      <i className="dashing-icon dashing-icon--arrow-right"></i>\n    </li>\n    <li>Column 1</li>\n    <li>Column 2</li>\n    <li>Column 3</li>\n    <li>Column 4</li>\n  </ol>\n  <ol className="table-row">\n    <li>\n      <i className="dashing-icon dashing-icon--arrow-right"></i>\n    </li>\n    <li>Column 1</li>\n    <li>Column 2</li>\n    <li>Column 3</li>\n    <li>Column 4</li>\n  </ol>\n</div>')),l.a.createElement("h2",{className:"mt-space-xl",id:"flex-table"},"Flex Table - Loading",l.a.createElement(i.a,{to:e.pathname+"/#flex-table-loading",className:"button button--transparent button--copy-link"})),l.a.createElement("div",{className:"example-container"},l.a.createElement("div",{className:"flex-table is-loading"},l.a.createElement("ol",{className:"table-row--header"},l.a.createElement("li",null,"Column 1"),l.a.createElement("li",null,"Column 2"),l.a.createElement("li",null,"Column 3"),l.a.createElement("li",null,"Column 4")),l.a.createElement("ol",{className:"table-row"},l.a.createElement("li",null," "),l.a.createElement("li",null," "),l.a.createElement("li",null," "),l.a.createElement("li",null," ")),l.a.createElement("ol",{className:"table-row"},l.a.createElement("li",null," "),l.a.createElement("li",null," "),l.a.createElement("li",null," "),l.a.createElement("li",null," ")),l.a.createElement("ol",{className:"table-row"},l.a.createElement("li",null," "),l.a.createElement("li",null," "),l.a.createElement("li",null," "),l.a.createElement("li",null," ")))),l.a.createElement(c.a,null,'<div className="flex-table is-loading">\n<ol className="table-row--header">\n  <li>Column 1</li>\n  <li>Column 2</li>\n  <li>Column 3</li>\n  <li>Column 4</li>\n</ol>\n<ol className="table-row">\n  <li>&nbsp;</li>\n  <li>&nbsp;</li>\n  <li>&nbsp;</li>\n  <li>&nbsp;</li>\n</ol>\n<ol className="table-row">\n  <li>&nbsp;</li>\n  <li>&nbsp;</li>\n  <li>&nbsp;</li>\n  <li>&nbsp;</li>\n</ol>\n<ol className="table-row">\n  <li>&nbsp;</li>\n  <li>&nbsp;</li>\n  <li>&nbsp;</li>\n  <li>&nbsp;</li>\n</ol>\n</div>'))))},t}(l.a.Component);a.default=d},wZee:function(e,a,n){(function(a){n("rGqo"),n("yt8O"),n("RW0V"),n("Oyvg"),n("SRfc"),n("8+KV"),n("HAE/"),n("a1Th"),n("h7Nl"),n("Btvt"),n("pIFo"),n("bWfx"),n("LK8F");var t=function(e){var a=/\blang(?:uage)?-([\w-]+)\b/i,n=0,t={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof l?new l(e.type,t.util.encode(e.content),e.alias):Array.isArray(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(a,n){var l,i,r=t.util.type(a);switch(n=n||{},r){case"Object":if(i=t.util.objId(a),n[i])return n[i];for(var o in l={},n[i]=l,a)a.hasOwnProperty(o)&&(l[o]=e(a[o],n));return l;case"Array":return i=t.util.objId(a),n[i]?n[i]:(l=[],n[i]=l,a.forEach((function(a,t){l[t]=e(a,n)})),l);default:return a}},getLanguage:function(e){for(;e&&!a.test(e.className);)e=e.parentElement;return e?(e.className.match(a)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(t){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(t.stack)||[])[1];if(e){var a=document.getElementsByTagName("script");for(var n in a)if(a[n].src==e)return a[n]}return null}}},languages:{extend:function(e,a){var n=t.util.clone(t.languages[e]);for(var l in a)n[l]=a[l];return n},insertBefore:function(e,a,n,l){var i=(l=l||t.languages)[e],r={};for(var o in i)if(i.hasOwnProperty(o)){if(o==a)for(var s in n)n.hasOwnProperty(s)&&(r[s]=n[s]);n.hasOwnProperty(o)||(r[o]=i[o])}var c=l[e];return l[e]=r,t.languages.DFS(t.languages,(function(a,n){n===c&&a!=e&&(this[a]=r)})),r},DFS:function e(a,n,l,i){i=i||{};var r=t.util.objId;for(var o in a)if(a.hasOwnProperty(o)){n.call(a,o,a[o],l||o);var s=a[o],c=t.util.type(s);"Object"!==c||i[r(s)]?"Array"!==c||i[r(s)]||(i[r(s)]=!0,e(s,n,o,i)):(i[r(s)]=!0,e(s,n,null,i))}}},plugins:{},highlightAll:function(e,a){t.highlightAllUnder(document,e,a)},highlightAllUnder:function(e,a,n){var l={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};t.hooks.run("before-highlightall",l),l.elements=Array.prototype.slice.apply(l.container.querySelectorAll(l.selector)),t.hooks.run("before-all-elements-highlight",l);for(var i,r=0;i=l.elements[r++];)t.highlightElement(i,!0===a,l.callback)},highlightElement:function(n,l,i){var r=t.util.getLanguage(n),o=t.languages[r];n.className=n.className.replace(a,"").replace(/\s+/g," ")+" language-"+r;var s=n.parentNode;s&&"pre"===s.nodeName.toLowerCase()&&(s.className=s.className.replace(a,"").replace(/\s+/g," ")+" language-"+r);var c={element:n,language:r,grammar:o,code:n.textContent};function u(e){c.highlightedCode=e,t.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,t.hooks.run("after-highlight",c),t.hooks.run("complete",c),i&&i.call(c.element)}if(t.hooks.run("before-sanity-check",c),!c.code)return t.hooks.run("complete",c),void(i&&i.call(c.element));if(t.hooks.run("before-highlight",c),c.grammar)if(l&&e.Worker){var m=new Worker(t.filename);m.onmessage=function(e){u(e.data)},m.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(t.highlight(c.code,c.grammar,c.language));else u(t.util.encode(c.code))},highlight:function(e,a,n){var i={code:e,grammar:a,language:n};return t.hooks.run("before-tokenize",i),i.tokens=t.tokenize(i.code,i.grammar),t.hooks.run("after-tokenize",i),l.stringify(t.util.encode(i.tokens),i.language)},matchGrammar:function(e,a,n,i,r,o,s){for(var c in n)if(n.hasOwnProperty(c)&&n[c]){var u=n[c];u=Array.isArray(u)?u:[u];for(var m=0;m<u.length;++m){if(s&&s==c+","+m)return;var d=u[m],g=d.inside,p=!!d.lookbehind,h=!!d.greedy,f=0,b=d.alias;if(h&&!d.pattern.global){var w=d.pattern.toString().match(/[imsuy]*$/)[0];d.pattern=RegExp(d.pattern.source,w+"g")}d=d.pattern||d;for(var E=i,C=r;E<a.length;C+=a[E].length,++E){var x=a[E];if(a.length>e.length)return;if(!(x instanceof l)){if(h&&E!=a.length-1){if(d.lastIndex=C,!(A=d.exec(e)))break;for(var v=A.index+(p&&A[1]?A[1].length:0),y=A.index+A[0].length,N=E,F=C,k=a.length;N<k&&(F<y||!a[N].type&&!a[N-1].greedy);++N)v>=(F+=a[N].length)&&(++E,C=F);if(a[E]instanceof l)continue;S=N-E,x=e.slice(C,F),A.index-=C}else{d.lastIndex=0;var A=d.exec(x),S=1}if(A){p&&(f=A[1]?A[1].length:0);y=(v=A.index+f)+(A=A[0].slice(f)).length;var R=x.slice(0,v),_=x.slice(y),$=[E,S];R&&(++E,C+=R.length,$.push(R));var j=new l(c,g?t.tokenize(A,g):A,b,A,h);if($.push(j),_&&$.push(_),Array.prototype.splice.apply(a,$),1!=S&&t.matchGrammar(e,a,n,E,C,!0,c+","+m),o)break}else if(o)break}}}}},tokenize:function(e,a){var n=[e],l=a.rest;if(l){for(var i in l)a[i]=l[i];delete a.rest}return t.matchGrammar(e,n,a,0,0,!1),n},hooks:{all:{},add:function(e,a){var n=t.hooks.all;n[e]=n[e]||[],n[e].push(a)},run:function(e,a){var n=t.hooks.all[e];if(n&&n.length)for(var l,i=0;l=n[i++];)l(a)}},Token:l};function l(e,a,n,t,l){this.type=e,this.content=a,this.alias=n,this.length=0|(t||"").length,this.greedy=!!l}if(e.Prism=t,l.stringify=function(e,a){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return l.stringify(e,a)})).join("");var n={type:e.type,content:l.stringify(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a};if(e.alias){var i=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,i)}t.hooks.run("wrap",n);var r=Object.keys(n.attributes).map((function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(r?" "+r:"")+">"+n.content+"</"+n.tag+">"},!e.document)return e.addEventListener?(t.disableWorkerMessageHandler||e.addEventListener("message",(function(a){var n=JSON.parse(a.data),l=n.language,i=n.code,r=n.immediateClose;e.postMessage(t.highlight(i,t.languages[l],l)),r&&e.close()}),!1),t):t;var i=t.util.currentScript();if(i&&(t.filename=i.src,i.hasAttribute("data-manual")&&(t.manual=!0)),!t.manual){var r=function(){t.manual||t.highlightAll()},o=document.readyState;"loading"===o||"interactive"===o&&i&&i.defer?document.addEventListener("DOMContentLoaded",r):window.requestAnimationFrame?window.requestAnimationFrame(r):window.setTimeout(r,16)}return t}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),void 0!==a&&(a.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,a){var n={};n["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[a]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};l["language-"+a]={pattern:/[\s\S]+/,inside:t.languages[a]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:l},t.languages.insertBefore("markup","cdata",i)}}),t.languages.xml=t.languages.extend("markup",{}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,function(e){var a=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+a.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+a.source+")*?(?=\\s*\\{)"),string:{pattern:a,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.markup.tag.addInlined("script","javascript"),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var n,l=e.getAttribute("data-src"),i=e,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(n=(e.className.match(r)||[,""])[1]),!n){var o=(l.match(/\.(\w+)$/)||[,""])[1];n=a[o]||o}var s=document.createElement("code");s.className="language-"+n,e.textContent="",s.textContent="Loading…",e.appendChild(s);var c=new XMLHttpRequest;c.open("GET",l,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(s.textContent=c.responseText,t.highlightElement(s),e.setAttribute("data-src-loaded","")):c.status>=400?s.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:s.textContent="✖ Error: File does not exist or is empty")},c.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}).call(this,n("eKGF"))},xBU5:function(e,a,n){"use strict";var t=n("q1tI"),l=n.n(t),i=n("wZee"),r=n.n(i);n("DOjo");var o=function(e){var a,n;function t(a){var n;return(n=e.call(this,a)||this).state={showCode:!1},n.toggleCode=n.toggleCode.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(a=t).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n;var i=t.prototype;return i.toggleCode=function(){this.setState((function(e){return{showCode:!e.showCode}}))},i.componentDidMount=function(){r.a.highlightAll()},i.render=function(){return r.a.plugins.customClass.map({tag:"exampletag"}),l.a.createElement("div",{className:this.state.showCode?"group-open":""},l.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},l.a.createElement("i",{className:"icon--code"})),l.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},l.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},t}(l.a.Component);a.a=o}}]);
//# sourceMappingURL=component---src-pages-components-tables-code-js-a1c36999840ff31be8c7.js.map