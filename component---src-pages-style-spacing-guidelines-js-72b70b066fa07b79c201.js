(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"50Tl":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("Bl7J"),s=a("VGxr"),o=a("OmYv"),l=a("xBU5"),u="Spacing".toLowerCase();t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("header",{className:"subnav"},r.a.createElement("h1",null,"Spacing"),r.a.createElement(s.a,{pageName:u,sectionName:"style"})),r.a.createElement(o.a,null,r.a.createElement("div",{className:"grid grid-padding"},r.a.createElement("h2",null,"Built-in structure"),r.a.createElement("p",null,"The spacing utility removes the need for pixel pushing through inline styles, and adds some structure to common elements that require margin and padding adjustments."),r.a.createElement("div",{className:"example-container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("h1",{className:"h1-spacing"},"Header"),r.a.createElement("p",{className:"p-spacing"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),r.a.createElement("fieldset",{className:"input-spacing"},r.a.createElement("label",null,"Label"),r.a.createElement("input",{type:"text"})),r.a.createElement("button",{type:"button",className:""},"Submit"))),r.a.createElement(l.a,null,'<div class="card">\n  <div class="card-content">\n    <h1>Header</h1>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n    <fieldset>\n      <label>Label</label>\n      <input type="text" />\n    </fieldset>\n    <button type="button">Submit</button>\n  </div>\n</div>')))))}},DOjo:function(e,t,a){(function(e){a("bWfx"),function(){if("undefined"!=typeof self&&self.Prism||void 0!==e&&e.Prism){var t={classMap:{}};Prism.plugins.customClass={map:function(e){t.classMap=e},prefix:function(e){t.prefixString=e}},Prism.hooks.add("wrap",(function(e){(t.classMap||t.prefixString)&&(e.classes=e.classes.map((function(e){return(t.prefixString||"")+(t.classMap[e]||e)})))}))}}()}).call(this,a("yLpj"))},wZee:function(e,t,a){(function(t){a("rGqo"),a("yt8O"),a("RW0V"),a("Oyvg"),a("8+KV"),a("HAE/"),a("a1Th"),a("h7Nl"),a("Btvt"),a("SRfc"),a("pIFo"),a("bWfx");var n="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},r=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a=n.Prism={manual:n.Prism&&n.Prism.manual,disableWorkerMessageHandler:n.Prism&&n.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):"Array"===a.util.type(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var n=a.util.type(e);switch(t=t||{},n){case"Object":if(t[a.util.objId(e)])return t[a.util.objId(e)];i={};for(var r in t[a.util.objId(e)]=i,e)e.hasOwnProperty(r)&&(i[r]=a.util.clone(e[r],t));return i;case"Array":if(t[a.util.objId(e)])return t[a.util.objId(e)];var i=[];return t[a.util.objId(e)]=i,e.forEach((function(e,n){i[n]=a.util.clone(e,t)})),i}return e}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e];if(2==arguments.length){for(var s in n=arguments[1])n.hasOwnProperty(s)&&(i[s]=n[s]);return i}var o={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var s in n)n.hasOwnProperty(s)&&(o[s]=n[s]);o[l]=i[l]}return a.languages.DFS(a.languages,(function(t,a){a===r[e]&&t!=e&&(this[t]=o)})),r[e]=o},DFS:function(e,t,n,r){for(var i in r=r||{},e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],n||i),"Object"!==a.util.type(e[i])||r[a.util.objId(e[i])]?"Array"!==a.util.type(e[i])||r[a.util.objId(e[i])]||(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,i,r)):(r[a.util.objId(e[i])]=!0,a.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r);for(var i,s=r.elements||e.querySelectorAll(r.selector),o=0;i=s[o++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(t,r,i){for(var s,o,l=t;l&&!e.test(l.className);)l=l.parentNode;l&&(s=(l.className.match(e)||[,""])[1].toLowerCase(),o=a.languages[s]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,t.parentNode&&(l=t.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+s));var u={element:t,language:s,grammar:o,code:t.textContent};if(a.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return u.code&&(a.hooks.run("before-highlight",u),u.element.textContent=u.code,a.hooks.run("after-highlight",u)),void a.hooks.run("complete",u);if(a.hooks.run("before-highlight",u),r&&n.Worker){var c=new Worker(a.filename);c.onmessage=function(e){u.highlightedCode=e.data,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(u.element),a.hooks.run("after-highlight",u),a.hooks.run("complete",u)},c.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=a.highlight(u.code,u.grammar,u.language),a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i&&i.call(t),a.hooks.run("after-highlight",u),a.hooks.run("complete",u)},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),r.stringify(a.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,n,r,i,s,o){var l=a.Token;for(var u in n)if(n.hasOwnProperty(u)&&n[u]){if(u==o)return;var c=n[u];c="Array"===a.util.type(c)?c:[c];for(var g=0;g<c.length;++g){var d=c[g],p=d.inside,h=!!d.lookbehind,m=!!d.greedy,f=0,b=d.alias;if(m&&!d.pattern.global){var y=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,y+"g")}d=d.pattern||d;for(var v=r,w=i;v<t.length;w+=t[v].length,++v){var k=t[v];if(t.length>e.length)return;if(!(k instanceof l)){if(m&&v!=t.length-1){if(d.lastIndex=w,!(j=d.exec(e)))break;for(var x=j.index+(h?j[1].length:0),F=j.index+j[0].length,E=v,S=w,A=t.length;E<A&&(S<F||!t[E].type&&!t[E-1].greedy);++E)x>=(S+=t[E].length)&&(++v,w=S);if(t[v]instanceof l)continue;N=E-v,k=e.slice(w,S),j.index-=w}else{d.lastIndex=0;var j=d.exec(k),N=1}if(j){h&&(f=j[1]?j[1].length:0);F=(x=j.index+f)+(j=j[0].slice(f)).length;var C=k.slice(0,x),P=k.slice(F),O=[v,N];C&&(++v,w+=C.length,O.push(C));var L=new l(u,p?a.tokenize(j,p):j,b,j,m);if(O.push(L),P&&O.push(P),Array.prototype.splice.apply(t,O),1!=N&&a.matchGrammar(e,t,n,v,w,!0,u),s)break}else if(s)break}}}}},tokenize:function(e,t,n){var r=[e],i=t.rest;if(i){for(var s in i)t[s]=i[s];delete t.rest}return a.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}}},r=a.Token=function(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r};if(r.stringify=function(e,t,n){if("string"==typeof e)return e;if("Array"===a.util.type(e))return e.map((function(a){return r.stringify(a,t,e)})).join("");var i={type:e.type,content:r.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var s="Array"===a.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}a.hooks.run("wrap",i);var o=Object.keys(i.attributes).map((function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!n.document)return n.addEventListener?(a.disableWorkerMessageHandler||n.addEventListener("message",(function(e){var t=JSON.parse(e.data),r=t.language,i=t.code,s=t.immediateClose;n.postMessage(a.highlight(i,a.languages[r],r)),s&&n.close()}),!1),n.Prism):n.Prism;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(a.filename=i.src,a.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),n.Prism}();e.exports&&(e.exports=r),void 0!==t&&(t.Prism=r),r.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),r.languages.xml=r.languages.markup,r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},r.languages.css.atrule.inside.rest=r.languages.css,r.languages.markup&&(r.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:r.languages.css,alias:"language-css",greedy:!0}}),r.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:r.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:r.languages.css}},alias:"language-css"}},r.languages.markup.tag)),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),r.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),r.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),r.languages.javascript["template-string"].inside.interpolation.inside.rest=r.languages.javascript,r.languages.markup&&r.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:r.languages.javascript,alias:"language-javascript",greedy:!0}}),r.languages.js=r.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach((function(t){for(var a,n=t.getAttribute("data-src"),i=t,s=/\blang(?:uage)?-([\w-]+)\b/i;i&&!s.test(i.className);)i=i.parentNode;if(i&&(a=(t.className.match(s)||[,""])[1]),!a){var o=(n.match(/\.(\w+)$/)||[,""])[1];a=e[o]||o}var l=document.createElement("code");l.className="language-"+a,t.textContent="",l.textContent="Loading…",t.appendChild(l);var u=new XMLHttpRequest;u.open("GET",n,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(l.textContent=u.responseText,r.highlightElement(l)):u.status>=400?l.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:l.textContent="✖ Error: File does not exist or is empty")},u.send(null)})),r.plugins.toolbar&&r.plugins.toolbar.registerButton("download-file",(function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var a=t.getAttribute("data-src"),n=document.createElement("a");return n.textContent=t.getAttribute("data-download-link-label")||"Download",n.setAttribute("download",""),n.href=a,n}}))},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}).call(this,a("yLpj"))},xBU5:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("wZee"),s=a.n(i);a("DOjo");var o=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={showCode:!1},a.toggleCode=a.toggleCode.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.toggleCode=function(){this.setState((function(e){return{showCode:!e.showCode}}))},i.componentDidMount=function(){s.a.highlightAll()},i.render=function(){return s.a.plugins.customClass.map({tag:"exampletag"}),r.a.createElement("div",{className:this.state.showCode?"group-open":""},r.a.createElement("div",{onClick:this.toggleCode,className:this.state.showCode?"code-toggle is-open":"code-toggle"},r.a.createElement("i",{className:"icon--code"})),r.a.createElement("pre",{className:this.state.showCode?"language-html show":"language-html"},r.a.createElement("code",{className:this.state.showCode?"language-html show":"language-html"},this.props.children)))},n}(r.a.Component);t.a=o},yLpj:function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(n){"object"==typeof window&&(a=window)}e.exports=a}}]);
//# sourceMappingURL=component---src-pages-style-spacing-guidelines-js-72b70b066fa07b79c201.js.map