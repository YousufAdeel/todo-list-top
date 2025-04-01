(()=>{"use strict";var n={56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var d={},a=[],i=0;i<n.length;i++){var c=n[i],s=o.base?c[0]+o.base:c[0],l=d[s]||0,u="".concat(s," ").concat(l);d[s]=l+1;var m=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=r(p,o);o.byIndex=i,e.splice(i,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var d=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<d.length;a++){var i=t(d[a]);e[i].references--}for(var c=o(n,r),s=0;s<d.length;s++){var l=t(d[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}d=c}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},208:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(601),r=t.n(o),d=t(314),a=t.n(d)()(r());a.push([n.id,"/* src/style.css */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Segoe UI', sans-serif;\n}\n\nbody {\n  display: flex;\n  height: 100vh;\n  background: #f0f4f8;\n}\n\n.sidebar {\n  width: 250px;\n  background: #1e293b;\n  color: white;\n  padding: 2rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.sidebar h1 {\n  font-size: 1.5rem;\n  color: #38bdf8;\n  margin-bottom: 1rem;\n}\n\n.sidebar ul {\n  list-style: none;\n  padding-left: 0;\n}\n\n.sidebar li {\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 6px;\n  transition: background 0.2s;\n}\n\n.sidebar li:hover,\n.sidebar li.active {\n  background: #334155;\n}\n\n.sidebar h2 {\n  margin-top: 1rem;\n  font-size: 1.1rem;\n  color: #94a3b8;\n}\n\n.sidebar button {\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n  background: #475569;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.main {\n  flex: 1;\n  padding: 2rem;\n  overflow-y: auto;\n}\n\n.main h2 {\n  margin-bottom: 1.5rem;\n  font-size: 2rem;\n  color: #0f172a;\n}\n\n#add-todo-form {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n\n#add-todo-form input,\n#add-todo-form select,\n#add-todo-form button {\n  padding: 0.5rem;\n  border-radius: 6px;\n  border: 1px solid #ccc;\n  font-size: 1rem;\n}\n\n#add-todo-form input[type=\"text\"] {\n  flex: 2;\n}\n\n.todo-card {\n  background: white;\n  padding: 1rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.05);\n  margin-bottom: 1rem;\n  border-left: 5px solid #cbd5e1;\n}\n\n.todo-card.low {\n  border-color: #10b981;\n}\n.todo-card.medium {\n  border-color: #f59e0b;\n}\n.todo-card.high {\n  border-color: #ef4444;\n}\n\n.todo-card h3 {\n  margin-bottom: 0.5rem;\n  color: #1e293b;\n}\n\n.todo-card p {\n  color: #64748b;\n  font-size: 0.9rem;\n}\n\n.delete-btn {\n  background: none;\n  border: none;\n  color: crimson;\n  font-size: 1.2rem;\n  cursor: pointer;\n  margin-top: 0.5rem;\n}\n\n/* Dark Mode */\nbody.dark {\n  background-color: #1e1e1e;\n  color: #eee;\n}\n\nbody.dark .sidebar {\n  background-color: #2a2a2a;\n  color: #ddd;\n}\n\nbody.dark .main {\n  background-color: #1e1e1e;\n}\n\nbody.dark input,\nbody.dark select,\nbody.dark button {\n  background-color: #333;\n  color: #fff;\n  border: 1px solid #444;\n}\n\nbody.dark .todo-card {\n  background-color: #2b2b2b;\n  border-color: #555;\n}\n\n/* Toggle button layout */\n.top-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#dark-toggle {\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  color: inherit;\n  cursor: pointer;\n}\n\n/* Dark Mode Toggle */\n.dark-mode-toggle {\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n}\n\n#dark-toggle {\n  background: none;\n  border: none;\n  font-size: 1.6rem;\n  cursor: pointer;\n  color: #eee;\n  transition: transform 0.3s ease;\n}\n\n#dark-toggle:hover {\n  transform: scale(1.2);\n}\n\n/* Light and dark theme styles */\nbody.dark {\n  background-color: #121212;\n  color: #eee;\n}\n\nbody.dark .sidebar {\n  background-color: #1c1c1c;\n}\n\nbody.dark .todo-card {\n  background-color: #2c2c2c;\n  border-color: #444;\n}\n\nbody.dark input,\nbody.dark select,\nbody.dark textarea {\n  background-color: #333;\n  color: #eee;\n  border-color: #555;\n}\n\n\n",""]);const i=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,d){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&a[l[0]]||(void 0!==d&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=d),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},601:n=>{n.exports=function(n){return n[1]}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var d=t.sourceMap;d&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var d=e[o]={id:o,exports:{}};return n[o](d,d.exports,t),d.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),r=t.n(o),d=t(825),a=t.n(d),i=t(659),c=t.n(i),s=t(56),l=t.n(s),u=t(540),m=t.n(u),p=t(113),f=t.n(p),b=t(208),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=m(),r()(b.A,g),b.A&&b.A.locals&&b.A.locals;let y=[];function v(){localStorage.setItem("todoProjects",JSON.stringify(y))}function h(){return y}function k(n){return y.find((e=>e.name===n))}function x(){const n=document.getElementById("project-list");n.innerHTML="",h().forEach((e=>{const t=document.createElement("li");t.textContent=e.name,t.addEventListener("click",(()=>E(e.name))),n.appendChild(t)}))}function E(n){document.getElementById("current-title").textContent=n;const e=document.getElementById("todos-container");e.innerHTML="";const t=function(n){if("Today"===n){const n=(new Date).toISOString().split("T")[0];return y.flatMap((n=>n.todos)).filter((e=>e.dueDate===n))}if("Important"===n)return y.flatMap((n=>n.todos)).filter((n=>"high"===n.priority));const e=k(n);return e?e.todos:[]}(n);0!==t.length?t.forEach(((t,o)=>{const r=document.createElement("div");r.className=`todo-card ${t.priority}`;const d=document.createElement("h3");d.textContent=t.title;const a=document.createElement("p");a.textContent=t.description;const i=document.createElement("p");i.textContent=`Due: ${t.dueDate}`;const c=document.createElement("p");c.textContent=`Priority: ${t.priority}`;const s=document.createElement("button");s.textContent="❌",s.classList.add("delete-btn"),s.addEventListener("click",(()=>{const e=h().find((e=>e.name===n||"Home"===e.name));e&&(e.todos.splice(o,1),localStorage.setItem("todoProjects",JSON.stringify(h())),E(n))})),r.append(d,a,i,c,s),e.appendChild(r)})):e.innerHTML="<p>No tasks yet.</p>"}document.addEventListener("DOMContentLoaded",(()=>{!function(){const n=localStorage.getItem("todoProjects");n?y=JSON.parse(n):(y=[{name:"Home",todos:[]}],v())}(),(document.getElementById("app")||document.body).innerHTML='\n    <div class="sidebar">\n      <div class="top-bar">\n        <h1>// <span class="highlight">TO-DO</span></h1>\n      </div>\n      <ul class="nav">\n        <li id="home-view">🏠 Home</li>\n        <li id="today-view">🕒 Today</li>\n        <li id="important-view">⭐ Important</li>\n      </ul>\n      <h2>Projects</h2>\n      <ul id="project-list"></ul>\n      <button id="add-project">+ Add Project</button>\n\n      <div class="dark-mode-toggle">\n        <button id="dark-toggle" title="Toggle Dark Mode">🌙</button>\n      </div>\n    </div>\n\n    <div class="main">\n      <h2 id="current-title">Home</h2>\n      <form id="add-todo-form">\n        <input type="text" id="todo-title" placeholder="Title" required />\n        <input type="text" id="todo-desc" placeholder="Description" />\n        <input type="date" id="todo-date" required />\n        <select id="todo-priority">\n          <option value="low">Low</option>\n          <option value="medium" selected>Medium</option>\n          <option value="high">High</option>\n        </select>\n        <button type="submit">Add Todo</button>\n      </form>\n      <div id="todos-container"></div>\n    </div>\n  ',function(){document.getElementById("home-view").addEventListener("click",(()=>E("Home"))),document.getElementById("today-view").addEventListener("click",(()=>E("Today"))),document.getElementById("important-view").addEventListener("click",(()=>E("Important"))),document.getElementById("add-project").addEventListener("click",(()=>{const n=prompt("Project name:");n&&(function(n){y.some((e=>e.name===n))||(y.push({name:n,todos:[]}),v())}(n),x())})),document.getElementById("add-todo-form").addEventListener("submit",(n=>{n.preventDefault();const e=document.getElementById("todo-title").value,t=document.getElementById("todo-desc").value,o=document.getElementById("todo-date").value,r=document.getElementById("todo-priority").value;let d=document.getElementById("current-title").textContent;"Today"!==d&&"Important"!==d||(d="Home");const a=function(n,e,t,o){return{title:n,description:e,dueDate:t,priority:o,completed:!1}}(e,t,o,r);!function(n,e){const t=k(n);t&&(t.todos.push(e),v())}(d,a),E(document.getElementById("current-title").textContent),n.target.reset()}));const n=document.getElementById("dark-toggle");n.addEventListener("click",(()=>{const e=document.body;e.classList.toggle("dark");const t=e.classList.contains("dark");n.textContent=t?"☀️":"🌙",localStorage.setItem("theme",t?"dark":"light")}))}(),x(),E("Home"),function(){if("dark"===localStorage.getItem("theme")){document.body.classList.add("dark");const n=document.getElementById("dark-toggle");n&&(n.textContent="☀️")}}()}))})();