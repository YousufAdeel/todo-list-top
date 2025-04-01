/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* src/style.css */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Segoe UI', sans-serif;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  height: 100vh;\r\n  background: #f0f4f8;\r\n}\r\n\r\n.sidebar {\r\n  width: 250px;\r\n  background: #1e293b;\r\n  color: white;\r\n  padding: 2rem 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.sidebar h1 {\r\n  font-size: 1.5rem;\r\n  color: #38bdf8;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.sidebar ul {\r\n  list-style: none;\r\n  padding-left: 0;\r\n}\r\n\r\n.sidebar li {\r\n  cursor: pointer;\r\n  padding: 0.5rem;\r\n  border-radius: 6px;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.sidebar li:hover,\r\n.sidebar li.active {\r\n  background: #334155;\r\n}\r\n\r\n.sidebar h2 {\r\n  margin-top: 1rem;\r\n  font-size: 1.1rem;\r\n  color: #94a3b8;\r\n}\r\n\r\n.sidebar button {\r\n  margin-top: 0.5rem;\r\n  padding: 0.5rem;\r\n  background: #475569;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n}\r\n\r\n.main {\r\n  flex: 1;\r\n  padding: 2rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n.main h2 {\r\n  margin-bottom: 1.5rem;\r\n  font-size: 2rem;\r\n  color: #0f172a;\r\n}\r\n\r\n#add-todo-form {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 0.5rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n#add-todo-form input,\r\n#add-todo-form select,\r\n#add-todo-form button {\r\n  padding: 0.5rem;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  font-size: 1rem;\r\n}\r\n\r\n#add-todo-form input[type=\"text\"] {\r\n  flex: 2;\r\n}\r\n\r\n.todo-card {\r\n  background: white;\r\n  padding: 1rem;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0,0,0,0.05);\r\n  margin-bottom: 1rem;\r\n  border-left: 5px solid #cbd5e1;\r\n}\r\n\r\n.todo-card.low {\r\n  border-color: #10b981;\r\n}\r\n.todo-card.medium {\r\n  border-color: #f59e0b;\r\n}\r\n.todo-card.high {\r\n  border-color: #ef4444;\r\n}\r\n\r\n.todo-card h3 {\r\n  margin-bottom: 0.5rem;\r\n  color: #1e293b;\r\n}\r\n\r\n.todo-card p {\r\n  color: #64748b;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.delete-btn {\r\n  background: none;\r\n  border: none;\r\n  color: crimson;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n/* Dark Mode */\r\nbody.dark {\r\n  background-color: #1e1e1e;\r\n  color: #eee;\r\n}\r\n\r\nbody.dark .sidebar {\r\n  background-color: #2a2a2a;\r\n  color: #ddd;\r\n}\r\n\r\nbody.dark .main {\r\n  background-color: #1e1e1e;\r\n}\r\n\r\nbody.dark input,\r\nbody.dark select,\r\nbody.dark button {\r\n  background-color: #333;\r\n  color: #fff;\r\n  border: 1px solid #444;\r\n}\r\n\r\nbody.dark .todo-card {\r\n  background-color: #2b2b2b;\r\n  border-color: #555;\r\n}\r\n\r\n/* Toggle button layout */\r\n.top-bar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n#dark-toggle {\r\n  background: none;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n  color: inherit;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Dark Mode Toggle */\r\n.dark-mode-toggle {\r\n  position: absolute;\r\n  bottom: 20px;\r\n  left: 20px;\r\n}\r\n\r\n#dark-toggle {\r\n  background: none;\r\n  border: none;\r\n  font-size: 1.6rem;\r\n  cursor: pointer;\r\n  color: #eee;\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n#dark-toggle:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n/* Light and dark theme styles */\r\nbody.dark {\r\n  background-color: #121212;\r\n  color: #eee;\r\n}\r\n\r\nbody.dark .sidebar {\r\n  background-color: #1c1c1c;\r\n}\r\n\r\nbody.dark .todo-card {\r\n  background-color: #2c2c2c;\r\n  border-color: #444;\r\n}\r\n\r\nbody.dark input,\r\nbody.dark select,\r\nbody.dark textarea {\r\n  background-color: #333;\r\n  color: #eee;\r\n  border-color: #555;\r\n}\r\n\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist-top/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist-top/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist-top/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist-top/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist-top/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist-top/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist-top/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist-top/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist-top/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\n // ✅ import this\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  (0,_project__WEBPACK_IMPORTED_MODULE_2__.loadProjects)(); // ✅ load saved todos\r\n  (0,_ui__WEBPACK_IMPORTED_MODULE_1__.renderLayout)(); // render everything\r\n});\r\n\n\n//# sourceURL=webpack://todolist-top/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodoToProject: () => (/* binding */ addTodoToProject),\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   getProjectByName: () => (/* binding */ getProjectByName),\n/* harmony export */   getProjects: () => (/* binding */ getProjects),\n/* harmony export */   getTodosFromProject: () => (/* binding */ getTodosFromProject),\n/* harmony export */   loadProjects: () => (/* binding */ loadProjects),\n/* harmony export */   saveProjects: () => (/* binding */ saveProjects)\n/* harmony export */ });\nlet projects = [];\r\n\r\n// Load from localStorage on startup\r\nfunction loadProjects() {\r\n  const saved = localStorage.getItem('todoProjects');\r\n  if (saved) {\r\n    projects = JSON.parse(saved);\r\n  } else {\r\n    // Default project if none exist\r\n    projects = [{ name: 'Home', todos: [] }];\r\n    saveProjects();\r\n  }\r\n}\r\n\r\n// Save to localStorage after every change\r\nfunction saveProjects() {\r\n  localStorage.setItem('todoProjects', JSON.stringify(projects));\r\n}\r\n\r\nfunction getProjects() {\r\n  return projects;\r\n}\r\n\r\nfunction getProjectByName(name) {\r\n  return projects.find(p => p.name === name);\r\n}\r\n\r\nfunction createProject(name) {\r\n  if (!projects.some(p => p.name === name)) {\r\n    projects.push({ name, todos: [] });\r\n    saveProjects();\r\n  }\r\n}\r\n\r\nfunction addTodoToProject(projectName, todo) {\r\n  const project = getProjectByName(projectName);\r\n  if (project) {\r\n    project.todos.push(todo);\r\n    saveProjects();\r\n  }\r\n}\r\n\r\nfunction getTodosFromProject(name) {\r\n  if (name === 'Today') {\r\n    const todayStr = new Date().toISOString().split('T')[0];\r\n    return projects.flatMap(p => p.todos).filter(todo => todo.dueDate === todayStr);\r\n  }\r\n  if (name === 'Important') {\r\n    return projects.flatMap(p => p.todos).filter(todo => todo.priority === 'high');\r\n  }\r\n  const project = getProjectByName(name);\r\n  return project ? project.todos : [];\r\n}\r\n\n\n//# sourceURL=webpack://todolist-top/./src/project.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist-top/./src/style.css?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\n// src/todo.js\r\n\r\nfunction createTodo(title, description, dueDate, priority) {\r\n  return {\r\n    title,\r\n    description,\r\n    dueDate,\r\n    priority,\r\n    completed: false,\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://todolist-top/./src/todo.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLayout: () => (/* binding */ renderLayout)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\r\n\r\n\r\nfunction renderLayout() {\r\n  const app = document.getElementById('app') || document.body;\r\n\r\n  app.innerHTML = `\r\n    <div class=\"sidebar\">\r\n      <div class=\"top-bar\">\r\n        <h1>// <span class=\"highlight\">TO-DO</span></h1>\r\n      </div>\r\n      <ul class=\"nav\">\r\n        <li id=\"home-view\">🏠 Home</li>\r\n        <li id=\"today-view\">🕒 Today</li>\r\n        <li id=\"important-view\">⭐ Important</li>\r\n      </ul>\r\n      <h2>Projects</h2>\r\n      <ul id=\"project-list\"></ul>\r\n      <button id=\"add-project\">+ Add Project</button>\r\n\r\n      <div class=\"dark-mode-toggle\">\r\n        <button id=\"dark-toggle\" title=\"Toggle Dark Mode\">🌙</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"main\">\r\n      <h2 id=\"current-title\">Home</h2>\r\n      <form id=\"add-todo-form\">\r\n        <input type=\"text\" id=\"todo-title\" placeholder=\"Title\" required />\r\n        <input type=\"text\" id=\"todo-desc\" placeholder=\"Description\" />\r\n        <input type=\"date\" id=\"todo-date\" required />\r\n        <select id=\"todo-priority\">\r\n          <option value=\"low\">Low</option>\r\n          <option value=\"medium\" selected>Medium</option>\r\n          <option value=\"high\">High</option>\r\n        </select>\r\n        <button type=\"submit\">Add Todo</button>\r\n      </form>\r\n      <div id=\"todos-container\"></div>\r\n    </div>\r\n  `;\r\n\r\n  setEventListeners();\r\n  renderProjects();\r\n  renderTodos('Home');\r\n  applyDarkModeFromStorage();\r\n}\r\n\r\nfunction setEventListeners() {\r\n  document.getElementById('home-view').addEventListener('click', () => renderTodos('Home'));\r\n  document.getElementById('today-view').addEventListener('click', () => renderTodos('Today'));\r\n  document.getElementById('important-view').addEventListener('click', () => renderTodos('Important'));\r\n\r\n  document.getElementById('add-project').addEventListener('click', () => {\r\n    const name = prompt('Project name:');\r\n    if (name) {\r\n      (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(name);\r\n      renderProjects();\r\n    }\r\n  });\r\n\r\n  document.getElementById('add-todo-form').addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    const title = document.getElementById('todo-title').value;\r\n    const description = document.getElementById('todo-desc').value;\r\n    const dueDate = document.getElementById('todo-date').value;\r\n    const priority = document.getElementById('todo-priority').value;\r\n\r\n    // 🔧 Fix: prevent disappearing todos in \"Today\" and \"Important\"\r\n    let currentProject = document.getElementById('current-title').textContent;\r\n    if (currentProject === 'Today' || currentProject === 'Important') {\r\n      currentProject = 'Home';\r\n    }\r\n\r\n    const todo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title, description, dueDate, priority);\r\n    (0,_project__WEBPACK_IMPORTED_MODULE_0__.addTodoToProject)(currentProject, todo);\r\n    renderTodos(document.getElementById('current-title').textContent); // re-render current view\r\n    e.target.reset();\r\n  });\r\n\r\n  // 🌙 Dark mode toggle with icon swap\r\n  const toggle = document.getElementById('dark-toggle');\r\n  toggle.addEventListener('click', () => {\r\n    const body = document.body;\r\n    body.classList.toggle('dark');\r\n    const isDark = body.classList.contains('dark');\r\n    toggle.textContent = isDark ? '☀️' : '🌙';\r\n    localStorage.setItem('theme', isDark ? 'dark' : 'light');\r\n  });\r\n}\r\n\r\nfunction applyDarkModeFromStorage() {\r\n  const isDark = localStorage.getItem('theme') === 'dark';\r\n  if (isDark) {\r\n    document.body.classList.add('dark');\r\n    const toggle = document.getElementById('dark-toggle');\r\n    if (toggle) toggle.textContent = '☀️';\r\n  }\r\n}\r\n\r\nfunction renderProjects() {\r\n  const projectList = document.getElementById('project-list');\r\n  projectList.innerHTML = '';\r\n  (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProjects)().forEach((project) => {\r\n    const li = document.createElement('li');\r\n    li.textContent = project.name;\r\n    li.addEventListener('click', () => renderTodos(project.name));\r\n    projectList.appendChild(li);\r\n  });\r\n}\r\n\r\nfunction renderTodos(projectName) {\r\n  document.getElementById('current-title').textContent = projectName;\r\n  const container = document.getElementById('todos-container');\r\n  container.innerHTML = '';\r\n\r\n  const todos = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getTodosFromProject)(projectName);\r\n  if (todos.length === 0) {\r\n    container.innerHTML = '<p>No tasks yet.</p>';\r\n    return;\r\n  }\r\n\r\n  todos.forEach((todo, index) => {\r\n    const card = document.createElement('div');\r\n    card.className = `todo-card ${todo.priority}`;\r\n\r\n    const title = document.createElement('h3');\r\n    title.textContent = todo.title;\r\n\r\n    const desc = document.createElement('p');\r\n    desc.textContent = todo.description;\r\n\r\n    const date = document.createElement('p');\r\n    date.textContent = `Due: ${todo.dueDate}`;\r\n\r\n    const priority = document.createElement('p');\r\n    priority.textContent = `Priority: ${todo.priority}`;\r\n\r\n    const delBtn = document.createElement('button');\r\n    delBtn.textContent = '❌';\r\n    delBtn.classList.add('delete-btn');\r\n    delBtn.addEventListener('click', () => {\r\n      const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.getProjects)().find(p => p.name === projectName || p.name === 'Home');\r\n      if (project) {\r\n        project.todos.splice(index, 1);\r\n        localStorage.setItem('todoProjects', JSON.stringify((0,_project__WEBPACK_IMPORTED_MODULE_0__.getProjects)()));\r\n        renderTodos(projectName);\r\n      }\r\n    });\r\n\r\n    card.append(title, desc, date, priority, delBtn);\r\n    container.appendChild(card);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://todolist-top/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;