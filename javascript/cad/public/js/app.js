webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';__webpack_require__(2);__webpack_require__(6);__webpack_require__(8);var _app=__webpack_require__(10);var _kernel=__webpack_require__(12);var _storageService=__webpack_require__(14);var _storageService2=_interopRequireDefault(_storageService);__webpack_require__(15);__webpack_require__(16);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/*** Инициализация приложения */var app=angular.module('cad',[]);app.component('appComponent',_app.AppComponent);app.component('kernel',_kernel.KernelComponent);app.service('storageService',_storageService2.default);app.directive('dropdown',function(){var directive={restrict:'A',link:link};return directive;function link($scope,element,attrs){setTimeout(function(){return $(element).dropdown();},200);}});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/resolve-url-loader/index.js!./../../../node_modules/sass-loader/index.js?sourceMap!./material.min.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/resolve-url-loader/index.js!./../../../node_modules/sass-loader/index.js?sourceMap!./material.min.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n\nhtml {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n.browserupgrade {\n  margin: .2em 0;\n  background: #ccc;\n  color: #000;\n  padding: .2em 0;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.visuallyhidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.visuallyhidden.focusable:active,\n.visuallyhidden.focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n\n.clearfix:after {\n  clear: both;\n}\n\n@media print {\n  *,\n  *:before,\n  *:after,\n  *:first-letter,\n  *:first-line {\n    background: 0 0 !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n\na,\n.mdl-accordion,\n.mdl-button,\n.mdl-card,\n.mdl-checkbox,\n.mdl-dropdown-menu,\n.mdl-icon-toggle,\n.mdl-item,\n.mdl-radio,\n.mdl-slider,\n.mdl-switch,\n.mdl-tabs__tab {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n}\n\nbody {\n  width: 100%;\n  min-height: 100%;\n  margin: 0;\n}\n\nmain {\n  display: block;\n}\n\n*[hidden] {\n  display: none !important;\n}\n\nhtml,\nbody {\n  font-family: \"Helvetica\",\"Arial\",sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  padding: 0;\n}\n\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small {\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  font-weight: 400;\n  line-height: 1.35;\n  letter-spacing: -.02em;\n  opacity: .54;\n  font-size: .6em;\n}\n\nh1 {\n  font-size: 56px;\n  line-height: 1.35;\n  letter-spacing: -.02em;\n  margin: 24px 0;\n}\n\nh1,\nh2 {\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  font-weight: 400;\n}\n\nh2 {\n  font-size: 45px;\n  line-height: 48px;\n}\n\nh2,\nh3 {\n  margin: 24px 0;\n}\n\nh3 {\n  font-size: 34px;\n  line-height: 40px;\n}\n\nh3,\nh4 {\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  font-weight: 400;\n}\n\nh4 {\n  font-size: 24px;\n  line-height: 32px;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 24px 0 16px;\n}\n\nh5 {\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: .02em;\n}\n\nh5,\nh6 {\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  margin: 24px 0 16px;\n}\n\nh6 {\n  font-size: 16px;\n  letter-spacing: .04em;\n}\n\nh6,\np {\n  font-weight: 400;\n  line-height: 24px;\n}\n\np {\n  font-size: 14px;\n  letter-spacing: 0;\n  margin: 0 0 16px;\n}\n\na {\n  color: #00acc1;\n  font-weight: 500;\n}\n\nblockquote {\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  position: relative;\n  font-size: 24px;\n  font-weight: 300;\n  font-style: italic;\n  line-height: 1.35;\n  letter-spacing: .08em;\n}\n\nblockquote:before {\n  position: absolute;\n  left: -.5em;\n  content: '\\201C';\n}\n\nblockquote:after {\n  content: '\\201D';\n  margin-left: -.05em;\n}\n\nmark {\n  background-color: #f4ff81;\n}\n\ndt {\n  font-weight: 700;\n}\n\naddress {\n  font-size: 12px;\n  line-height: 1;\n  font-style: normal;\n}\n\naddress,\nul,\nol {\n  font-weight: 400;\n  letter-spacing: 0;\n}\n\nul,\nol {\n  font-size: 14px;\n  line-height: 24px;\n}\n\n.mdl-typography--display-4,\n.mdl-typography--display-4-color-contrast {\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  font-size: 112px;\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: -.04em;\n}\n\n.mdl-typography--display-4-color-contrast {\n  opacity: .54;\n}\n\n.mdl-typography--display-3,\n.mdl-typography--display-3-color-contrast {\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  font-size: 56px;\n  font-weight: 400;\n  line-height: 1.35;\n  letter-spacing: -.02em;\n}\n\n.mdl-typography--display-3-color-contrast {\n  opacity: .54;\n}\n\n.mdl-typography--display-2,\n.mdl-typography--display-2-color-contrast {\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  font-size: 45px;\n  font-weight: 400;\n  line-height: 48px;\n}\n\n.mdl-typography--display-2-color-contrast {\n  opacity: .54;\n}\n\n.mdl-typography--display-1,\n.mdl-typography--display-1-color-contrast {\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  font-size: 34px;\n  font-weight: 400;\n  line-height: 40px;\n}\n\n.mdl-typography--display-1-color-contrast {\n  opacity: .54;\n}\n\n.mdl-typography--headline,\n.mdl-typography--headline-color-contrast {\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.mdl-typography--headline-color-contrast {\n  opacity: .87;\n}\n\n.mdl-typography--title,\n.mdl-typography--title-color-contrast {\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: .02em;\n}\n\n.mdl-typography--title-color-contrast {\n  opacity: .87;\n}\n\n.mdl-typography--subhead,\n.mdl-typography--subhead-color-contrast {\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: .04em;\n}\n\n.mdl-typography--subhead-color-contrast {\n  opacity: .87;\n}\n\n.mdl-typography--body-2,\n.mdl-typography--body-2-color-contrast {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 24px;\n  letter-spacing: 0;\n}\n\n.mdl-typography--body-2-color-contrast {\n  opacity: .87;\n}\n\n.mdl-typography--body-1,\n.mdl-typography--body-1-color-contrast {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0;\n}\n\n.mdl-typography--body-1-color-contrast {\n  opacity: .87;\n}\n\n.mdl-typography--body-2-force-preferred-font,\n.mdl-typography--body-2-force-preferred-font-color-contrast {\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: 0;\n}\n\n.mdl-typography--body-2-force-preferred-font-color-contrast {\n  opacity: .87;\n}\n\n.mdl-typography--body-1-force-preferred-font,\n.mdl-typography--body-1-force-preferred-font-color-contrast {\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 24px;\n  letter-spacing: 0;\n}\n\n.mdl-typography--body-1-force-preferred-font-color-contrast {\n  opacity: .87;\n}\n\n.mdl-typography--caption,\n.mdl-typography--caption-force-preferred-font {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1;\n  letter-spacing: 0;\n}\n\n.mdl-typography--caption-force-preferred-font {\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n}\n\n.mdl-typography--caption-color-contrast,\n.mdl-typography--caption-force-preferred-font-color-contrast {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1;\n  letter-spacing: 0;\n  opacity: .54;\n}\n\n.mdl-typography--caption-force-preferred-font-color-contrast,\n.mdl-typography--menu {\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n}\n\n.mdl-typography--menu {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: 0;\n}\n\n.mdl-typography--menu-color-contrast {\n  opacity: .87;\n}\n\n.mdl-typography--menu-color-contrast,\n.mdl-typography--button,\n.mdl-typography--button-color-contrast {\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: 0;\n}\n\n.mdl-typography--button,\n.mdl-typography--button-color-contrast {\n  text-transform: uppercase;\n}\n\n.mdl-typography--button-color-contrast {\n  opacity: .87;\n}\n\n.mdl-typography--text-left {\n  text-align: left;\n}\n\n.mdl-typography--text-right {\n  text-align: right;\n}\n\n.mdl-typography--text-center {\n  text-align: center;\n}\n\n.mdl-typography--text-justify {\n  text-align: justify;\n}\n\n.mdl-typography--text-nowrap {\n  white-space: nowrap;\n}\n\n.mdl-typography--text-lowercase {\n  text-transform: lowercase;\n}\n\n.mdl-typography--text-uppercase {\n  text-transform: uppercase;\n}\n\n.mdl-typography--text-capitalize {\n  text-transform: capitalize;\n}\n\n.mdl-typography--font-thin {\n  font-weight: 200 !important;\n}\n\n.mdl-typography--font-light {\n  font-weight: 300 !important;\n}\n\n.mdl-typography--font-regular {\n  font-weight: 400 !important;\n}\n\n.mdl-typography--font-medium {\n  font-weight: 500 !important;\n}\n\n.mdl-typography--font-bold {\n  font-weight: 700 !important;\n}\n\n.mdl-typography--font-black {\n  font-weight: 900 !important;\n}\n\n.mdl-color-text--red {\n  color: #f44336 !important;\n}\n\n.mdl-color--red {\n  background-color: #f44336 !important;\n}\n\n.mdl-color-text--red-50 {\n  color: #ffebee !important;\n}\n\n.mdl-color--red-50 {\n  background-color: #ffebee !important;\n}\n\n.mdl-color-text--red-100 {\n  color: #ffcdd2 !important;\n}\n\n.mdl-color--red-100 {\n  background-color: #ffcdd2 !important;\n}\n\n.mdl-color-text--red-200 {\n  color: #ef9a9a !important;\n}\n\n.mdl-color--red-200 {\n  background-color: #ef9a9a !important;\n}\n\n.mdl-color-text--red-300 {\n  color: #e57373 !important;\n}\n\n.mdl-color--red-300 {\n  background-color: #e57373 !important;\n}\n\n.mdl-color-text--red-400 {\n  color: #ef5350 !important;\n}\n\n.mdl-color--red-400 {\n  background-color: #ef5350 !important;\n}\n\n.mdl-color-text--red-500 {\n  color: #f44336 !important;\n}\n\n.mdl-color--red-500 {\n  background-color: #f44336 !important;\n}\n\n.mdl-color-text--red-600 {\n  color: #e53935 !important;\n}\n\n.mdl-color--red-600 {\n  background-color: #e53935 !important;\n}\n\n.mdl-color-text--red-700 {\n  color: #d32f2f !important;\n}\n\n.mdl-color--red-700 {\n  background-color: #d32f2f !important;\n}\n\n.mdl-color-text--red-800 {\n  color: #c62828 !important;\n}\n\n.mdl-color--red-800 {\n  background-color: #c62828 !important;\n}\n\n.mdl-color-text--red-900 {\n  color: #b71c1c !important;\n}\n\n.mdl-color--red-900 {\n  background-color: #b71c1c !important;\n}\n\n.mdl-color-text--red-A100 {\n  color: #ff8a80 !important;\n}\n\n.mdl-color--red-A100 {\n  background-color: #ff8a80 !important;\n}\n\n.mdl-color-text--red-A200 {\n  color: #ff5252 !important;\n}\n\n.mdl-color--red-A200 {\n  background-color: #ff5252 !important;\n}\n\n.mdl-color-text--red-A400 {\n  color: #ff1744 !important;\n}\n\n.mdl-color--red-A400 {\n  background-color: #ff1744 !important;\n}\n\n.mdl-color-text--red-A700 {\n  color: #d50000 !important;\n}\n\n.mdl-color--red-A700 {\n  background-color: #d50000 !important;\n}\n\n.mdl-color-text--pink {\n  color: #e91e63 !important;\n}\n\n.mdl-color--pink {\n  background-color: #e91e63 !important;\n}\n\n.mdl-color-text--pink-50 {\n  color: #fce4ec !important;\n}\n\n.mdl-color--pink-50 {\n  background-color: #fce4ec !important;\n}\n\n.mdl-color-text--pink-100 {\n  color: #f8bbd0 !important;\n}\n\n.mdl-color--pink-100 {\n  background-color: #f8bbd0 !important;\n}\n\n.mdl-color-text--pink-200 {\n  color: #f48fb1 !important;\n}\n\n.mdl-color--pink-200 {\n  background-color: #f48fb1 !important;\n}\n\n.mdl-color-text--pink-300 {\n  color: #f06292 !important;\n}\n\n.mdl-color--pink-300 {\n  background-color: #f06292 !important;\n}\n\n.mdl-color-text--pink-400 {\n  color: #ec407a !important;\n}\n\n.mdl-color--pink-400 {\n  background-color: #ec407a !important;\n}\n\n.mdl-color-text--pink-500 {\n  color: #e91e63 !important;\n}\n\n.mdl-color--pink-500 {\n  background-color: #e91e63 !important;\n}\n\n.mdl-color-text--pink-600 {\n  color: #d81b60 !important;\n}\n\n.mdl-color--pink-600 {\n  background-color: #d81b60 !important;\n}\n\n.mdl-color-text--pink-700 {\n  color: #c2185b !important;\n}\n\n.mdl-color--pink-700 {\n  background-color: #c2185b !important;\n}\n\n.mdl-color-text--pink-800 {\n  color: #ad1457 !important;\n}\n\n.mdl-color--pink-800 {\n  background-color: #ad1457 !important;\n}\n\n.mdl-color-text--pink-900 {\n  color: #880e4f !important;\n}\n\n.mdl-color--pink-900 {\n  background-color: #880e4f !important;\n}\n\n.mdl-color-text--pink-A100 {\n  color: #ff80ab !important;\n}\n\n.mdl-color--pink-A100 {\n  background-color: #ff80ab !important;\n}\n\n.mdl-color-text--pink-A200 {\n  color: #ff4081 !important;\n}\n\n.mdl-color--pink-A200 {\n  background-color: #ff4081 !important;\n}\n\n.mdl-color-text--pink-A400 {\n  color: #f50057 !important;\n}\n\n.mdl-color--pink-A400 {\n  background-color: #f50057 !important;\n}\n\n.mdl-color-text--pink-A700 {\n  color: #c51162 !important;\n}\n\n.mdl-color--pink-A700 {\n  background-color: #c51162 !important;\n}\n\n.mdl-color-text--purple {\n  color: #9c27b0 !important;\n}\n\n.mdl-color--purple {\n  background-color: #9c27b0 !important;\n}\n\n.mdl-color-text--purple-50 {\n  color: #f3e5f5 !important;\n}\n\n.mdl-color--purple-50 {\n  background-color: #f3e5f5 !important;\n}\n\n.mdl-color-text--purple-100 {\n  color: #e1bee7 !important;\n}\n\n.mdl-color--purple-100 {\n  background-color: #e1bee7 !important;\n}\n\n.mdl-color-text--purple-200 {\n  color: #ce93d8 !important;\n}\n\n.mdl-color--purple-200 {\n  background-color: #ce93d8 !important;\n}\n\n.mdl-color-text--purple-300 {\n  color: #ba68c8 !important;\n}\n\n.mdl-color--purple-300 {\n  background-color: #ba68c8 !important;\n}\n\n.mdl-color-text--purple-400 {\n  color: #ab47bc !important;\n}\n\n.mdl-color--purple-400 {\n  background-color: #ab47bc !important;\n}\n\n.mdl-color-text--purple-500 {\n  color: #9c27b0 !important;\n}\n\n.mdl-color--purple-500 {\n  background-color: #9c27b0 !important;\n}\n\n.mdl-color-text--purple-600 {\n  color: #8e24aa !important;\n}\n\n.mdl-color--purple-600 {\n  background-color: #8e24aa !important;\n}\n\n.mdl-color-text--purple-700 {\n  color: #7b1fa2 !important;\n}\n\n.mdl-color--purple-700 {\n  background-color: #7b1fa2 !important;\n}\n\n.mdl-color-text--purple-800 {\n  color: #6a1b9a !important;\n}\n\n.mdl-color--purple-800 {\n  background-color: #6a1b9a !important;\n}\n\n.mdl-color-text--purple-900 {\n  color: #4a148c !important;\n}\n\n.mdl-color--purple-900 {\n  background-color: #4a148c !important;\n}\n\n.mdl-color-text--purple-A100 {\n  color: #ea80fc !important;\n}\n\n.mdl-color--purple-A100 {\n  background-color: #ea80fc !important;\n}\n\n.mdl-color-text--purple-A200 {\n  color: #e040fb !important;\n}\n\n.mdl-color--purple-A200 {\n  background-color: #e040fb !important;\n}\n\n.mdl-color-text--purple-A400 {\n  color: #d500f9 !important;\n}\n\n.mdl-color--purple-A400 {\n  background-color: #d500f9 !important;\n}\n\n.mdl-color-text--purple-A700 {\n  color: #a0f !important;\n}\n\n.mdl-color--purple-A700 {\n  background-color: #a0f !important;\n}\n\n.mdl-color-text--deep-purple {\n  color: #673ab7 !important;\n}\n\n.mdl-color--deep-purple {\n  background-color: #673ab7 !important;\n}\n\n.mdl-color-text--deep-purple-50 {\n  color: #ede7f6 !important;\n}\n\n.mdl-color--deep-purple-50 {\n  background-color: #ede7f6 !important;\n}\n\n.mdl-color-text--deep-purple-100 {\n  color: #d1c4e9 !important;\n}\n\n.mdl-color--deep-purple-100 {\n  background-color: #d1c4e9 !important;\n}\n\n.mdl-color-text--deep-purple-200 {\n  color: #b39ddb !important;\n}\n\n.mdl-color--deep-purple-200 {\n  background-color: #b39ddb !important;\n}\n\n.mdl-color-text--deep-purple-300 {\n  color: #9575cd !important;\n}\n\n.mdl-color--deep-purple-300 {\n  background-color: #9575cd !important;\n}\n\n.mdl-color-text--deep-purple-400 {\n  color: #7e57c2 !important;\n}\n\n.mdl-color--deep-purple-400 {\n  background-color: #7e57c2 !important;\n}\n\n.mdl-color-text--deep-purple-500 {\n  color: #673ab7 !important;\n}\n\n.mdl-color--deep-purple-500 {\n  background-color: #673ab7 !important;\n}\n\n.mdl-color-text--deep-purple-600 {\n  color: #5e35b1 !important;\n}\n\n.mdl-color--deep-purple-600 {\n  background-color: #5e35b1 !important;\n}\n\n.mdl-color-text--deep-purple-700 {\n  color: #512da8 !important;\n}\n\n.mdl-color--deep-purple-700 {\n  background-color: #512da8 !important;\n}\n\n.mdl-color-text--deep-purple-800 {\n  color: #4527a0 !important;\n}\n\n.mdl-color--deep-purple-800 {\n  background-color: #4527a0 !important;\n}\n\n.mdl-color-text--deep-purple-900 {\n  color: #311b92 !important;\n}\n\n.mdl-color--deep-purple-900 {\n  background-color: #311b92 !important;\n}\n\n.mdl-color-text--deep-purple-A100 {\n  color: #b388ff !important;\n}\n\n.mdl-color--deep-purple-A100 {\n  background-color: #b388ff !important;\n}\n\n.mdl-color-text--deep-purple-A200 {\n  color: #7c4dff !important;\n}\n\n.mdl-color--deep-purple-A200 {\n  background-color: #7c4dff !important;\n}\n\n.mdl-color-text--deep-purple-A400 {\n  color: #651fff !important;\n}\n\n.mdl-color--deep-purple-A400 {\n  background-color: #651fff !important;\n}\n\n.mdl-color-text--deep-purple-A700 {\n  color: #6200ea !important;\n}\n\n.mdl-color--deep-purple-A700 {\n  background-color: #6200ea !important;\n}\n\n.mdl-color-text--indigo {\n  color: #3f51b5 !important;\n}\n\n.mdl-color--indigo {\n  background-color: #3f51b5 !important;\n}\n\n.mdl-color-text--indigo-50 {\n  color: #e8eaf6 !important;\n}\n\n.mdl-color--indigo-50 {\n  background-color: #e8eaf6 !important;\n}\n\n.mdl-color-text--indigo-100 {\n  color: #c5cae9 !important;\n}\n\n.mdl-color--indigo-100 {\n  background-color: #c5cae9 !important;\n}\n\n.mdl-color-text--indigo-200 {\n  color: #9fa8da !important;\n}\n\n.mdl-color--indigo-200 {\n  background-color: #9fa8da !important;\n}\n\n.mdl-color-text--indigo-300 {\n  color: #7986cb !important;\n}\n\n.mdl-color--indigo-300 {\n  background-color: #7986cb !important;\n}\n\n.mdl-color-text--indigo-400 {\n  color: #5c6bc0 !important;\n}\n\n.mdl-color--indigo-400 {\n  background-color: #5c6bc0 !important;\n}\n\n.mdl-color-text--indigo-500 {\n  color: #3f51b5 !important;\n}\n\n.mdl-color--indigo-500 {\n  background-color: #3f51b5 !important;\n}\n\n.mdl-color-text--indigo-600 {\n  color: #3949ab !important;\n}\n\n.mdl-color--indigo-600 {\n  background-color: #3949ab !important;\n}\n\n.mdl-color-text--indigo-700 {\n  color: #303f9f !important;\n}\n\n.mdl-color--indigo-700 {\n  background-color: #303f9f !important;\n}\n\n.mdl-color-text--indigo-800 {\n  color: #283593 !important;\n}\n\n.mdl-color--indigo-800 {\n  background-color: #283593 !important;\n}\n\n.mdl-color-text--indigo-900 {\n  color: #1a237e !important;\n}\n\n.mdl-color--indigo-900 {\n  background-color: #1a237e !important;\n}\n\n.mdl-color-text--indigo-A100 {\n  color: #8c9eff !important;\n}\n\n.mdl-color--indigo-A100 {\n  background-color: #8c9eff !important;\n}\n\n.mdl-color-text--indigo-A200 {\n  color: #536dfe !important;\n}\n\n.mdl-color--indigo-A200 {\n  background-color: #536dfe !important;\n}\n\n.mdl-color-text--indigo-A400 {\n  color: #3d5afe !important;\n}\n\n.mdl-color--indigo-A400 {\n  background-color: #3d5afe !important;\n}\n\n.mdl-color-text--indigo-A700 {\n  color: #304ffe !important;\n}\n\n.mdl-color--indigo-A700 {\n  background-color: #304ffe !important;\n}\n\n.mdl-color-text--blue {\n  color: #2196f3 !important;\n}\n\n.mdl-color--blue {\n  background-color: #2196f3 !important;\n}\n\n.mdl-color-text--blue-50 {\n  color: #e3f2fd !important;\n}\n\n.mdl-color--blue-50 {\n  background-color: #e3f2fd !important;\n}\n\n.mdl-color-text--blue-100 {\n  color: #bbdefb !important;\n}\n\n.mdl-color--blue-100 {\n  background-color: #bbdefb !important;\n}\n\n.mdl-color-text--blue-200 {\n  color: #90caf9 !important;\n}\n\n.mdl-color--blue-200 {\n  background-color: #90caf9 !important;\n}\n\n.mdl-color-text--blue-300 {\n  color: #64b5f6 !important;\n}\n\n.mdl-color--blue-300 {\n  background-color: #64b5f6 !important;\n}\n\n.mdl-color-text--blue-400 {\n  color: #42a5f5 !important;\n}\n\n.mdl-color--blue-400 {\n  background-color: #42a5f5 !important;\n}\n\n.mdl-color-text--blue-500 {\n  color: #2196f3 !important;\n}\n\n.mdl-color--blue-500 {\n  background-color: #2196f3 !important;\n}\n\n.mdl-color-text--blue-600 {\n  color: #1e88e5 !important;\n}\n\n.mdl-color--blue-600 {\n  background-color: #1e88e5 !important;\n}\n\n.mdl-color-text--blue-700 {\n  color: #1976d2 !important;\n}\n\n.mdl-color--blue-700 {\n  background-color: #1976d2 !important;\n}\n\n.mdl-color-text--blue-800 {\n  color: #1565c0 !important;\n}\n\n.mdl-color--blue-800 {\n  background-color: #1565c0 !important;\n}\n\n.mdl-color-text--blue-900 {\n  color: #0d47a1 !important;\n}\n\n.mdl-color--blue-900 {\n  background-color: #0d47a1 !important;\n}\n\n.mdl-color-text--blue-A100 {\n  color: #82b1ff !important;\n}\n\n.mdl-color--blue-A100 {\n  background-color: #82b1ff !important;\n}\n\n.mdl-color-text--blue-A200 {\n  color: #448aff !important;\n}\n\n.mdl-color--blue-A200 {\n  background-color: #448aff !important;\n}\n\n.mdl-color-text--blue-A400 {\n  color: #2979ff !important;\n}\n\n.mdl-color--blue-A400 {\n  background-color: #2979ff !important;\n}\n\n.mdl-color-text--blue-A700 {\n  color: #2962ff !important;\n}\n\n.mdl-color--blue-A700 {\n  background-color: #2962ff !important;\n}\n\n.mdl-color-text--light-blue {\n  color: #03a9f4 !important;\n}\n\n.mdl-color--light-blue {\n  background-color: #03a9f4 !important;\n}\n\n.mdl-color-text--light-blue-50 {\n  color: #e1f5fe !important;\n}\n\n.mdl-color--light-blue-50 {\n  background-color: #e1f5fe !important;\n}\n\n.mdl-color-text--light-blue-100 {\n  color: #b3e5fc !important;\n}\n\n.mdl-color--light-blue-100 {\n  background-color: #b3e5fc !important;\n}\n\n.mdl-color-text--light-blue-200 {\n  color: #81d4fa !important;\n}\n\n.mdl-color--light-blue-200 {\n  background-color: #81d4fa !important;\n}\n\n.mdl-color-text--light-blue-300 {\n  color: #4fc3f7 !important;\n}\n\n.mdl-color--light-blue-300 {\n  background-color: #4fc3f7 !important;\n}\n\n.mdl-color-text--light-blue-400 {\n  color: #29b6f6 !important;\n}\n\n.mdl-color--light-blue-400 {\n  background-color: #29b6f6 !important;\n}\n\n.mdl-color-text--light-blue-500 {\n  color: #03a9f4 !important;\n}\n\n.mdl-color--light-blue-500 {\n  background-color: #03a9f4 !important;\n}\n\n.mdl-color-text--light-blue-600 {\n  color: #039be5 !important;\n}\n\n.mdl-color--light-blue-600 {\n  background-color: #039be5 !important;\n}\n\n.mdl-color-text--light-blue-700 {\n  color: #0288d1 !important;\n}\n\n.mdl-color--light-blue-700 {\n  background-color: #0288d1 !important;\n}\n\n.mdl-color-text--light-blue-800 {\n  color: #0277bd !important;\n}\n\n.mdl-color--light-blue-800 {\n  background-color: #0277bd !important;\n}\n\n.mdl-color-text--light-blue-900 {\n  color: #01579b !important;\n}\n\n.mdl-color--light-blue-900 {\n  background-color: #01579b !important;\n}\n\n.mdl-color-text--light-blue-A100 {\n  color: #80d8ff !important;\n}\n\n.mdl-color--light-blue-A100 {\n  background-color: #80d8ff !important;\n}\n\n.mdl-color-text--light-blue-A200 {\n  color: #40c4ff !important;\n}\n\n.mdl-color--light-blue-A200 {\n  background-color: #40c4ff !important;\n}\n\n.mdl-color-text--light-blue-A400 {\n  color: #00b0ff !important;\n}\n\n.mdl-color--light-blue-A400 {\n  background-color: #00b0ff !important;\n}\n\n.mdl-color-text--light-blue-A700 {\n  color: #0091ea !important;\n}\n\n.mdl-color--light-blue-A700 {\n  background-color: #0091ea !important;\n}\n\n.mdl-color-text--cyan {\n  color: #00bcd4 !important;\n}\n\n.mdl-color--cyan {\n  background-color: #00bcd4 !important;\n}\n\n.mdl-color-text--cyan-50 {\n  color: #e0f7fa !important;\n}\n\n.mdl-color--cyan-50 {\n  background-color: #e0f7fa !important;\n}\n\n.mdl-color-text--cyan-100 {\n  color: #b2ebf2 !important;\n}\n\n.mdl-color--cyan-100 {\n  background-color: #b2ebf2 !important;\n}\n\n.mdl-color-text--cyan-200 {\n  color: #80deea !important;\n}\n\n.mdl-color--cyan-200 {\n  background-color: #80deea !important;\n}\n\n.mdl-color-text--cyan-300 {\n  color: #4dd0e1 !important;\n}\n\n.mdl-color--cyan-300 {\n  background-color: #4dd0e1 !important;\n}\n\n.mdl-color-text--cyan-400 {\n  color: #26c6da !important;\n}\n\n.mdl-color--cyan-400 {\n  background-color: #26c6da !important;\n}\n\n.mdl-color-text--cyan-500 {\n  color: #00bcd4 !important;\n}\n\n.mdl-color--cyan-500 {\n  background-color: #00bcd4 !important;\n}\n\n.mdl-color-text--cyan-600 {\n  color: #00acc1 !important;\n}\n\n.mdl-color--cyan-600 {\n  background-color: #00acc1 !important;\n}\n\n.mdl-color-text--cyan-700 {\n  color: #0097a7 !important;\n}\n\n.mdl-color--cyan-700 {\n  background-color: #0097a7 !important;\n}\n\n.mdl-color-text--cyan-800 {\n  color: #00838f !important;\n}\n\n.mdl-color--cyan-800 {\n  background-color: #00838f !important;\n}\n\n.mdl-color-text--cyan-900 {\n  color: #006064 !important;\n}\n\n.mdl-color--cyan-900 {\n  background-color: #006064 !important;\n}\n\n.mdl-color-text--cyan-A100 {\n  color: #84ffff !important;\n}\n\n.mdl-color--cyan-A100 {\n  background-color: #84ffff !important;\n}\n\n.mdl-color-text--cyan-A200 {\n  color: #18ffff !important;\n}\n\n.mdl-color--cyan-A200 {\n  background-color: #18ffff !important;\n}\n\n.mdl-color-text--cyan-A400 {\n  color: #00e5ff !important;\n}\n\n.mdl-color--cyan-A400 {\n  background-color: #00e5ff !important;\n}\n\n.mdl-color-text--cyan-A700 {\n  color: #00b8d4 !important;\n}\n\n.mdl-color--cyan-A700 {\n  background-color: #00b8d4 !important;\n}\n\n.mdl-color-text--teal {\n  color: #009688 !important;\n}\n\n.mdl-color--teal {\n  background-color: #009688 !important;\n}\n\n.mdl-color-text--teal-50 {\n  color: #e0f2f1 !important;\n}\n\n.mdl-color--teal-50 {\n  background-color: #e0f2f1 !important;\n}\n\n.mdl-color-text--teal-100 {\n  color: #b2dfdb !important;\n}\n\n.mdl-color--teal-100 {\n  background-color: #b2dfdb !important;\n}\n\n.mdl-color-text--teal-200 {\n  color: #80cbc4 !important;\n}\n\n.mdl-color--teal-200 {\n  background-color: #80cbc4 !important;\n}\n\n.mdl-color-text--teal-300 {\n  color: #4db6ac !important;\n}\n\n.mdl-color--teal-300 {\n  background-color: #4db6ac !important;\n}\n\n.mdl-color-text--teal-400 {\n  color: #26a69a !important;\n}\n\n.mdl-color--teal-400 {\n  background-color: #26a69a !important;\n}\n\n.mdl-color-text--teal-500 {\n  color: #009688 !important;\n}\n\n.mdl-color--teal-500 {\n  background-color: #009688 !important;\n}\n\n.mdl-color-text--teal-600 {\n  color: #00897b !important;\n}\n\n.mdl-color--teal-600 {\n  background-color: #00897b !important;\n}\n\n.mdl-color-text--teal-700 {\n  color: #00796b !important;\n}\n\n.mdl-color--teal-700 {\n  background-color: #00796b !important;\n}\n\n.mdl-color-text--teal-800 {\n  color: #00695c !important;\n}\n\n.mdl-color--teal-800 {\n  background-color: #00695c !important;\n}\n\n.mdl-color-text--teal-900 {\n  color: #004d40 !important;\n}\n\n.mdl-color--teal-900 {\n  background-color: #004d40 !important;\n}\n\n.mdl-color-text--teal-A100 {\n  color: #a7ffeb !important;\n}\n\n.mdl-color--teal-A100 {\n  background-color: #a7ffeb !important;\n}\n\n.mdl-color-text--teal-A200 {\n  color: #64ffda !important;\n}\n\n.mdl-color--teal-A200 {\n  background-color: #64ffda !important;\n}\n\n.mdl-color-text--teal-A400 {\n  color: #1de9b6 !important;\n}\n\n.mdl-color--teal-A400 {\n  background-color: #1de9b6 !important;\n}\n\n.mdl-color-text--teal-A700 {\n  color: #00bfa5 !important;\n}\n\n.mdl-color--teal-A700 {\n  background-color: #00bfa5 !important;\n}\n\n.mdl-color-text--green {\n  color: #4caf50 !important;\n}\n\n.mdl-color--green {\n  background-color: #4caf50 !important;\n}\n\n.mdl-color-text--green-50 {\n  color: #e8f5e9 !important;\n}\n\n.mdl-color--green-50 {\n  background-color: #e8f5e9 !important;\n}\n\n.mdl-color-text--green-100 {\n  color: #c8e6c9 !important;\n}\n\n.mdl-color--green-100 {\n  background-color: #c8e6c9 !important;\n}\n\n.mdl-color-text--green-200 {\n  color: #a5d6a7 !important;\n}\n\n.mdl-color--green-200 {\n  background-color: #a5d6a7 !important;\n}\n\n.mdl-color-text--green-300 {\n  color: #81c784 !important;\n}\n\n.mdl-color--green-300 {\n  background-color: #81c784 !important;\n}\n\n.mdl-color-text--green-400 {\n  color: #66bb6a !important;\n}\n\n.mdl-color--green-400 {\n  background-color: #66bb6a !important;\n}\n\n.mdl-color-text--green-500 {\n  color: #4caf50 !important;\n}\n\n.mdl-color--green-500 {\n  background-color: #4caf50 !important;\n}\n\n.mdl-color-text--green-600 {\n  color: #43a047 !important;\n}\n\n.mdl-color--green-600 {\n  background-color: #43a047 !important;\n}\n\n.mdl-color-text--green-700 {\n  color: #388e3c !important;\n}\n\n.mdl-color--green-700 {\n  background-color: #388e3c !important;\n}\n\n.mdl-color-text--green-800 {\n  color: #2e7d32 !important;\n}\n\n.mdl-color--green-800 {\n  background-color: #2e7d32 !important;\n}\n\n.mdl-color-text--green-900 {\n  color: #1b5e20 !important;\n}\n\n.mdl-color--green-900 {\n  background-color: #1b5e20 !important;\n}\n\n.mdl-color-text--green-A100 {\n  color: #b9f6ca !important;\n}\n\n.mdl-color--green-A100 {\n  background-color: #b9f6ca !important;\n}\n\n.mdl-color-text--green-A200 {\n  color: #69f0ae !important;\n}\n\n.mdl-color--green-A200 {\n  background-color: #69f0ae !important;\n}\n\n.mdl-color-text--green-A400 {\n  color: #00e676 !important;\n}\n\n.mdl-color--green-A400 {\n  background-color: #00e676 !important;\n}\n\n.mdl-color-text--green-A700 {\n  color: #00c853 !important;\n}\n\n.mdl-color--green-A700 {\n  background-color: #00c853 !important;\n}\n\n.mdl-color-text--light-green {\n  color: #8bc34a !important;\n}\n\n.mdl-color--light-green {\n  background-color: #8bc34a !important;\n}\n\n.mdl-color-text--light-green-50 {\n  color: #f1f8e9 !important;\n}\n\n.mdl-color--light-green-50 {\n  background-color: #f1f8e9 !important;\n}\n\n.mdl-color-text--light-green-100 {\n  color: #dcedc8 !important;\n}\n\n.mdl-color--light-green-100 {\n  background-color: #dcedc8 !important;\n}\n\n.mdl-color-text--light-green-200 {\n  color: #c5e1a5 !important;\n}\n\n.mdl-color--light-green-200 {\n  background-color: #c5e1a5 !important;\n}\n\n.mdl-color-text--light-green-300 {\n  color: #aed581 !important;\n}\n\n.mdl-color--light-green-300 {\n  background-color: #aed581 !important;\n}\n\n.mdl-color-text--light-green-400 {\n  color: #9ccc65 !important;\n}\n\n.mdl-color--light-green-400 {\n  background-color: #9ccc65 !important;\n}\n\n.mdl-color-text--light-green-500 {\n  color: #8bc34a !important;\n}\n\n.mdl-color--light-green-500 {\n  background-color: #8bc34a !important;\n}\n\n.mdl-color-text--light-green-600 {\n  color: #7cb342 !important;\n}\n\n.mdl-color--light-green-600 {\n  background-color: #7cb342 !important;\n}\n\n.mdl-color-text--light-green-700 {\n  color: #689f38 !important;\n}\n\n.mdl-color--light-green-700 {\n  background-color: #689f38 !important;\n}\n\n.mdl-color-text--light-green-800 {\n  color: #558b2f !important;\n}\n\n.mdl-color--light-green-800 {\n  background-color: #558b2f !important;\n}\n\n.mdl-color-text--light-green-900 {\n  color: #33691e !important;\n}\n\n.mdl-color--light-green-900 {\n  background-color: #33691e !important;\n}\n\n.mdl-color-text--light-green-A100 {\n  color: #ccff90 !important;\n}\n\n.mdl-color--light-green-A100 {\n  background-color: #ccff90 !important;\n}\n\n.mdl-color-text--light-green-A200 {\n  color: #b2ff59 !important;\n}\n\n.mdl-color--light-green-A200 {\n  background-color: #b2ff59 !important;\n}\n\n.mdl-color-text--light-green-A400 {\n  color: #76ff03 !important;\n}\n\n.mdl-color--light-green-A400 {\n  background-color: #76ff03 !important;\n}\n\n.mdl-color-text--light-green-A700 {\n  color: #64dd17 !important;\n}\n\n.mdl-color--light-green-A700 {\n  background-color: #64dd17 !important;\n}\n\n.mdl-color-text--lime {\n  color: #cddc39 !important;\n}\n\n.mdl-color--lime {\n  background-color: #cddc39 !important;\n}\n\n.mdl-color-text--lime-50 {\n  color: #f9fbe7 !important;\n}\n\n.mdl-color--lime-50 {\n  background-color: #f9fbe7 !important;\n}\n\n.mdl-color-text--lime-100 {\n  color: #f0f4c3 !important;\n}\n\n.mdl-color--lime-100 {\n  background-color: #f0f4c3 !important;\n}\n\n.mdl-color-text--lime-200 {\n  color: #e6ee9c !important;\n}\n\n.mdl-color--lime-200 {\n  background-color: #e6ee9c !important;\n}\n\n.mdl-color-text--lime-300 {\n  color: #dce775 !important;\n}\n\n.mdl-color--lime-300 {\n  background-color: #dce775 !important;\n}\n\n.mdl-color-text--lime-400 {\n  color: #d4e157 !important;\n}\n\n.mdl-color--lime-400 {\n  background-color: #d4e157 !important;\n}\n\n.mdl-color-text--lime-500 {\n  color: #cddc39 !important;\n}\n\n.mdl-color--lime-500 {\n  background-color: #cddc39 !important;\n}\n\n.mdl-color-text--lime-600 {\n  color: #c0ca33 !important;\n}\n\n.mdl-color--lime-600 {\n  background-color: #c0ca33 !important;\n}\n\n.mdl-color-text--lime-700 {\n  color: #afb42b !important;\n}\n\n.mdl-color--lime-700 {\n  background-color: #afb42b !important;\n}\n\n.mdl-color-text--lime-800 {\n  color: #9e9d24 !important;\n}\n\n.mdl-color--lime-800 {\n  background-color: #9e9d24 !important;\n}\n\n.mdl-color-text--lime-900 {\n  color: #827717 !important;\n}\n\n.mdl-color--lime-900 {\n  background-color: #827717 !important;\n}\n\n.mdl-color-text--lime-A100 {\n  color: #f4ff81 !important;\n}\n\n.mdl-color--lime-A100 {\n  background-color: #f4ff81 !important;\n}\n\n.mdl-color-text--lime-A200 {\n  color: #eeff41 !important;\n}\n\n.mdl-color--lime-A200 {\n  background-color: #eeff41 !important;\n}\n\n.mdl-color-text--lime-A400 {\n  color: #c6ff00 !important;\n}\n\n.mdl-color--lime-A400 {\n  background-color: #c6ff00 !important;\n}\n\n.mdl-color-text--lime-A700 {\n  color: #aeea00 !important;\n}\n\n.mdl-color--lime-A700 {\n  background-color: #aeea00 !important;\n}\n\n.mdl-color-text--yellow {\n  color: #ffeb3b !important;\n}\n\n.mdl-color--yellow {\n  background-color: #ffeb3b !important;\n}\n\n.mdl-color-text--yellow-50 {\n  color: #fffde7 !important;\n}\n\n.mdl-color--yellow-50 {\n  background-color: #fffde7 !important;\n}\n\n.mdl-color-text--yellow-100 {\n  color: #fff9c4 !important;\n}\n\n.mdl-color--yellow-100 {\n  background-color: #fff9c4 !important;\n}\n\n.mdl-color-text--yellow-200 {\n  color: #fff59d !important;\n}\n\n.mdl-color--yellow-200 {\n  background-color: #fff59d !important;\n}\n\n.mdl-color-text--yellow-300 {\n  color: #fff176 !important;\n}\n\n.mdl-color--yellow-300 {\n  background-color: #fff176 !important;\n}\n\n.mdl-color-text--yellow-400 {\n  color: #ffee58 !important;\n}\n\n.mdl-color--yellow-400 {\n  background-color: #ffee58 !important;\n}\n\n.mdl-color-text--yellow-500 {\n  color: #ffeb3b !important;\n}\n\n.mdl-color--yellow-500 {\n  background-color: #ffeb3b !important;\n}\n\n.mdl-color-text--yellow-600 {\n  color: #fdd835 !important;\n}\n\n.mdl-color--yellow-600 {\n  background-color: #fdd835 !important;\n}\n\n.mdl-color-text--yellow-700 {\n  color: #fbc02d !important;\n}\n\n.mdl-color--yellow-700 {\n  background-color: #fbc02d !important;\n}\n\n.mdl-color-text--yellow-800 {\n  color: #f9a825 !important;\n}\n\n.mdl-color--yellow-800 {\n  background-color: #f9a825 !important;\n}\n\n.mdl-color-text--yellow-900 {\n  color: #f57f17 !important;\n}\n\n.mdl-color--yellow-900 {\n  background-color: #f57f17 !important;\n}\n\n.mdl-color-text--yellow-A100 {\n  color: #ffff8d !important;\n}\n\n.mdl-color--yellow-A100 {\n  background-color: #ffff8d !important;\n}\n\n.mdl-color-text--yellow-A200 {\n  color: #ff0 !important;\n}\n\n.mdl-color--yellow-A200 {\n  background-color: #ff0 !important;\n}\n\n.mdl-color-text--yellow-A400 {\n  color: #ffea00 !important;\n}\n\n.mdl-color--yellow-A400 {\n  background-color: #ffea00 !important;\n}\n\n.mdl-color-text--yellow-A700 {\n  color: #ffd600 !important;\n}\n\n.mdl-color--yellow-A700 {\n  background-color: #ffd600 !important;\n}\n\n.mdl-color-text--amber {\n  color: #ffc107 !important;\n}\n\n.mdl-color--amber {\n  background-color: #ffc107 !important;\n}\n\n.mdl-color-text--amber-50 {\n  color: #fff8e1 !important;\n}\n\n.mdl-color--amber-50 {\n  background-color: #fff8e1 !important;\n}\n\n.mdl-color-text--amber-100 {\n  color: #ffecb3 !important;\n}\n\n.mdl-color--amber-100 {\n  background-color: #ffecb3 !important;\n}\n\n.mdl-color-text--amber-200 {\n  color: #ffe082 !important;\n}\n\n.mdl-color--amber-200 {\n  background-color: #ffe082 !important;\n}\n\n.mdl-color-text--amber-300 {\n  color: #ffd54f !important;\n}\n\n.mdl-color--amber-300 {\n  background-color: #ffd54f !important;\n}\n\n.mdl-color-text--amber-400 {\n  color: #ffca28 !important;\n}\n\n.mdl-color--amber-400 {\n  background-color: #ffca28 !important;\n}\n\n.mdl-color-text--amber-500 {\n  color: #ffc107 !important;\n}\n\n.mdl-color--amber-500 {\n  background-color: #ffc107 !important;\n}\n\n.mdl-color-text--amber-600 {\n  color: #ffb300 !important;\n}\n\n.mdl-color--amber-600 {\n  background-color: #ffb300 !important;\n}\n\n.mdl-color-text--amber-700 {\n  color: #ffa000 !important;\n}\n\n.mdl-color--amber-700 {\n  background-color: #ffa000 !important;\n}\n\n.mdl-color-text--amber-800 {\n  color: #ff8f00 !important;\n}\n\n.mdl-color--amber-800 {\n  background-color: #ff8f00 !important;\n}\n\n.mdl-color-text--amber-900 {\n  color: #ff6f00 !important;\n}\n\n.mdl-color--amber-900 {\n  background-color: #ff6f00 !important;\n}\n\n.mdl-color-text--amber-A100 {\n  color: #ffe57f !important;\n}\n\n.mdl-color--amber-A100 {\n  background-color: #ffe57f !important;\n}\n\n.mdl-color-text--amber-A200 {\n  color: #ffd740 !important;\n}\n\n.mdl-color--amber-A200 {\n  background-color: #ffd740 !important;\n}\n\n.mdl-color-text--amber-A400 {\n  color: #ffc400 !important;\n}\n\n.mdl-color--amber-A400 {\n  background-color: #ffc400 !important;\n}\n\n.mdl-color-text--amber-A700 {\n  color: #ffab00 !important;\n}\n\n.mdl-color--amber-A700 {\n  background-color: #ffab00 !important;\n}\n\n.mdl-color-text--orange {\n  color: #ff9800 !important;\n}\n\n.mdl-color--orange {\n  background-color: #ff9800 !important;\n}\n\n.mdl-color-text--orange-50 {\n  color: #fff3e0 !important;\n}\n\n.mdl-color--orange-50 {\n  background-color: #fff3e0 !important;\n}\n\n.mdl-color-text--orange-100 {\n  color: #ffe0b2 !important;\n}\n\n.mdl-color--orange-100 {\n  background-color: #ffe0b2 !important;\n}\n\n.mdl-color-text--orange-200 {\n  color: #ffcc80 !important;\n}\n\n.mdl-color--orange-200 {\n  background-color: #ffcc80 !important;\n}\n\n.mdl-color-text--orange-300 {\n  color: #ffb74d !important;\n}\n\n.mdl-color--orange-300 {\n  background-color: #ffb74d !important;\n}\n\n.mdl-color-text--orange-400 {\n  color: #ffa726 !important;\n}\n\n.mdl-color--orange-400 {\n  background-color: #ffa726 !important;\n}\n\n.mdl-color-text--orange-500 {\n  color: #ff9800 !important;\n}\n\n.mdl-color--orange-500 {\n  background-color: #ff9800 !important;\n}\n\n.mdl-color-text--orange-600 {\n  color: #fb8c00 !important;\n}\n\n.mdl-color--orange-600 {\n  background-color: #fb8c00 !important;\n}\n\n.mdl-color-text--orange-700 {\n  color: #f57c00 !important;\n}\n\n.mdl-color--orange-700 {\n  background-color: #f57c00 !important;\n}\n\n.mdl-color-text--orange-800 {\n  color: #ef6c00 !important;\n}\n\n.mdl-color--orange-800 {\n  background-color: #ef6c00 !important;\n}\n\n.mdl-color-text--orange-900 {\n  color: #e65100 !important;\n}\n\n.mdl-color--orange-900 {\n  background-color: #e65100 !important;\n}\n\n.mdl-color-text--orange-A100 {\n  color: #ffd180 !important;\n}\n\n.mdl-color--orange-A100 {\n  background-color: #ffd180 !important;\n}\n\n.mdl-color-text--orange-A200 {\n  color: #ffab40 !important;\n}\n\n.mdl-color--orange-A200 {\n  background-color: #ffab40 !important;\n}\n\n.mdl-color-text--orange-A400 {\n  color: #ff9100 !important;\n}\n\n.mdl-color--orange-A400 {\n  background-color: #ff9100 !important;\n}\n\n.mdl-color-text--orange-A700 {\n  color: #ff6d00 !important;\n}\n\n.mdl-color--orange-A700 {\n  background-color: #ff6d00 !important;\n}\n\n.mdl-color-text--deep-orange {\n  color: #ff5722 !important;\n}\n\n.mdl-color--deep-orange {\n  background-color: #ff5722 !important;\n}\n\n.mdl-color-text--deep-orange-50 {\n  color: #fbe9e7 !important;\n}\n\n.mdl-color--deep-orange-50 {\n  background-color: #fbe9e7 !important;\n}\n\n.mdl-color-text--deep-orange-100 {\n  color: #ffccbc !important;\n}\n\n.mdl-color--deep-orange-100 {\n  background-color: #ffccbc !important;\n}\n\n.mdl-color-text--deep-orange-200 {\n  color: #ffab91 !important;\n}\n\n.mdl-color--deep-orange-200 {\n  background-color: #ffab91 !important;\n}\n\n.mdl-color-text--deep-orange-300 {\n  color: #ff8a65 !important;\n}\n\n.mdl-color--deep-orange-300 {\n  background-color: #ff8a65 !important;\n}\n\n.mdl-color-text--deep-orange-400 {\n  color: #ff7043 !important;\n}\n\n.mdl-color--deep-orange-400 {\n  background-color: #ff7043 !important;\n}\n\n.mdl-color-text--deep-orange-500 {\n  color: #ff5722 !important;\n}\n\n.mdl-color--deep-orange-500 {\n  background-color: #ff5722 !important;\n}\n\n.mdl-color-text--deep-orange-600 {\n  color: #f4511e !important;\n}\n\n.mdl-color--deep-orange-600 {\n  background-color: #f4511e !important;\n}\n\n.mdl-color-text--deep-orange-700 {\n  color: #e64a19 !important;\n}\n\n.mdl-color--deep-orange-700 {\n  background-color: #e64a19 !important;\n}\n\n.mdl-color-text--deep-orange-800 {\n  color: #d84315 !important;\n}\n\n.mdl-color--deep-orange-800 {\n  background-color: #d84315 !important;\n}\n\n.mdl-color-text--deep-orange-900 {\n  color: #bf360c !important;\n}\n\n.mdl-color--deep-orange-900 {\n  background-color: #bf360c !important;\n}\n\n.mdl-color-text--deep-orange-A100 {\n  color: #ff9e80 !important;\n}\n\n.mdl-color--deep-orange-A100 {\n  background-color: #ff9e80 !important;\n}\n\n.mdl-color-text--deep-orange-A200 {\n  color: #ff6e40 !important;\n}\n\n.mdl-color--deep-orange-A200 {\n  background-color: #ff6e40 !important;\n}\n\n.mdl-color-text--deep-orange-A400 {\n  color: #ff3d00 !important;\n}\n\n.mdl-color--deep-orange-A400 {\n  background-color: #ff3d00 !important;\n}\n\n.mdl-color-text--deep-orange-A700 {\n  color: #dd2c00 !important;\n}\n\n.mdl-color--deep-orange-A700 {\n  background-color: #dd2c00 !important;\n}\n\n.mdl-color-text--brown {\n  color: #795548 !important;\n}\n\n.mdl-color--brown {\n  background-color: #795548 !important;\n}\n\n.mdl-color-text--brown-50 {\n  color: #efebe9 !important;\n}\n\n.mdl-color--brown-50 {\n  background-color: #efebe9 !important;\n}\n\n.mdl-color-text--brown-100 {\n  color: #d7ccc8 !important;\n}\n\n.mdl-color--brown-100 {\n  background-color: #d7ccc8 !important;\n}\n\n.mdl-color-text--brown-200 {\n  color: #bcaaa4 !important;\n}\n\n.mdl-color--brown-200 {\n  background-color: #bcaaa4 !important;\n}\n\n.mdl-color-text--brown-300 {\n  color: #a1887f !important;\n}\n\n.mdl-color--brown-300 {\n  background-color: #a1887f !important;\n}\n\n.mdl-color-text--brown-400 {\n  color: #8d6e63 !important;\n}\n\n.mdl-color--brown-400 {\n  background-color: #8d6e63 !important;\n}\n\n.mdl-color-text--brown-500 {\n  color: #795548 !important;\n}\n\n.mdl-color--brown-500 {\n  background-color: #795548 !important;\n}\n\n.mdl-color-text--brown-600 {\n  color: #6d4c41 !important;\n}\n\n.mdl-color--brown-600 {\n  background-color: #6d4c41 !important;\n}\n\n.mdl-color-text--brown-700 {\n  color: #5d4037 !important;\n}\n\n.mdl-color--brown-700 {\n  background-color: #5d4037 !important;\n}\n\n.mdl-color-text--brown-800 {\n  color: #4e342e !important;\n}\n\n.mdl-color--brown-800 {\n  background-color: #4e342e !important;\n}\n\n.mdl-color-text--brown-900 {\n  color: #3e2723 !important;\n}\n\n.mdl-color--brown-900 {\n  background-color: #3e2723 !important;\n}\n\n.mdl-color-text--grey {\n  color: #9e9e9e !important;\n}\n\n.mdl-color--grey {\n  background-color: #9e9e9e !important;\n}\n\n.mdl-color-text--grey-50 {\n  color: #fafafa !important;\n}\n\n.mdl-color--grey-50 {\n  background-color: #fafafa !important;\n}\n\n.mdl-color-text--grey-100 {\n  color: #f5f5f5 !important;\n}\n\n.mdl-color--grey-100 {\n  background-color: #f5f5f5 !important;\n}\n\n.mdl-color-text--grey-200 {\n  color: #eee !important;\n}\n\n.mdl-color--grey-200 {\n  background-color: #eee !important;\n}\n\n.mdl-color-text--grey-300 {\n  color: #e0e0e0 !important;\n}\n\n.mdl-color--grey-300 {\n  background-color: #e0e0e0 !important;\n}\n\n.mdl-color-text--grey-400 {\n  color: #bdbdbd !important;\n}\n\n.mdl-color--grey-400 {\n  background-color: #bdbdbd !important;\n}\n\n.mdl-color-text--grey-500 {\n  color: #9e9e9e !important;\n}\n\n.mdl-color--grey-500 {\n  background-color: #9e9e9e !important;\n}\n\n.mdl-color-text--grey-600 {\n  color: #757575 !important;\n}\n\n.mdl-color--grey-600 {\n  background-color: #757575 !important;\n}\n\n.mdl-color-text--grey-700 {\n  color: #616161 !important;\n}\n\n.mdl-color--grey-700 {\n  background-color: #616161 !important;\n}\n\n.mdl-color-text--grey-800 {\n  color: #424242 !important;\n}\n\n.mdl-color--grey-800 {\n  background-color: #424242 !important;\n}\n\n.mdl-color-text--grey-900 {\n  color: #212121 !important;\n}\n\n.mdl-color--grey-900 {\n  background-color: #212121 !important;\n}\n\n.mdl-color-text--blue-grey {\n  color: #607d8b !important;\n}\n\n.mdl-color--blue-grey {\n  background-color: #607d8b !important;\n}\n\n.mdl-color-text--blue-grey-50 {\n  color: #eceff1 !important;\n}\n\n.mdl-color--blue-grey-50 {\n  background-color: #eceff1 !important;\n}\n\n.mdl-color-text--blue-grey-100 {\n  color: #cfd8dc !important;\n}\n\n.mdl-color--blue-grey-100 {\n  background-color: #cfd8dc !important;\n}\n\n.mdl-color-text--blue-grey-200 {\n  color: #b0bec5 !important;\n}\n\n.mdl-color--blue-grey-200 {\n  background-color: #b0bec5 !important;\n}\n\n.mdl-color-text--blue-grey-300 {\n  color: #90a4ae !important;\n}\n\n.mdl-color--blue-grey-300 {\n  background-color: #90a4ae !important;\n}\n\n.mdl-color-text--blue-grey-400 {\n  color: #78909c !important;\n}\n\n.mdl-color--blue-grey-400 {\n  background-color: #78909c !important;\n}\n\n.mdl-color-text--blue-grey-500 {\n  color: #607d8b !important;\n}\n\n.mdl-color--blue-grey-500 {\n  background-color: #607d8b !important;\n}\n\n.mdl-color-text--blue-grey-600 {\n  color: #546e7a !important;\n}\n\n.mdl-color--blue-grey-600 {\n  background-color: #546e7a !important;\n}\n\n.mdl-color-text--blue-grey-700 {\n  color: #455a64 !important;\n}\n\n.mdl-color--blue-grey-700 {\n  background-color: #455a64 !important;\n}\n\n.mdl-color-text--blue-grey-800 {\n  color: #37474f !important;\n}\n\n.mdl-color--blue-grey-800 {\n  background-color: #37474f !important;\n}\n\n.mdl-color-text--blue-grey-900 {\n  color: #263238 !important;\n}\n\n.mdl-color--blue-grey-900 {\n  background-color: #263238 !important;\n}\n\n.mdl-color--black {\n  background-color: #000 !important;\n}\n\n.mdl-color-text--black {\n  color: #000 !important;\n}\n\n.mdl-color--white {\n  background-color: #fff !important;\n}\n\n.mdl-color-text--white {\n  color: #fff !important;\n}\n\n.mdl-color--primary {\n  background-color: #00bcd4 !important;\n}\n\n.mdl-color--primary-contrast {\n  background-color: #fff !important;\n}\n\n.mdl-color--primary-dark {\n  background-color: #0097a7 !important;\n}\n\n.mdl-color--accent {\n  background-color: #00acc1 !important;\n}\n\n.mdl-color--accent-contrast {\n  background-color: #fff !important;\n}\n\n.mdl-color-text--primary {\n  color: #00bcd4 !important;\n}\n\n.mdl-color-text--primary-contrast {\n  color: #fff !important;\n}\n\n.mdl-color-text--primary-dark {\n  color: #0097a7 !important;\n}\n\n.mdl-color-text--accent {\n  color: #00acc1 !important;\n}\n\n.mdl-color-text--accent-contrast {\n  color: #fff !important;\n}\n\n.mdl-ripple {\n  background: #000;\n  border-radius: 50%;\n  height: 50px;\n  left: 0;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 50px;\n  overflow: hidden;\n}\n\n.mdl-ripple.is-animating {\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0, 0, 0.2, 1), width 0.3s cubic-bezier(0, 0, 0.2, 1), height 0.3s cubic-bezier(0, 0, 0.2, 1), opacity 0.6s cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1), width 0.3s cubic-bezier(0, 0, 0.2, 1), height 0.3s cubic-bezier(0, 0, 0.2, 1), opacity 0.6s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdl-ripple.is-visible {\n  opacity: .3;\n}\n\n.mdl-animation--default,\n.mdl-animation--fast-out-slow-in {\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdl-animation--linear-out-slow-in {\n  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mdl-animation--fast-out-linear-in {\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n\n.mdl-badge {\n  position: relative;\n  white-space: nowrap;\n  margin-right: 24px;\n}\n\n.mdl-badge:not([data-badge]) {\n  margin-right: auto;\n}\n\n.mdl-badge[data-badge]:after {\n  content: attr(data-badge);\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-align-content: center;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  position: absolute;\n  top: -11px;\n  right: -24px;\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  font-weight: 600;\n  font-size: 12px;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #00acc1;\n  color: #fff;\n}\n\n.mdl-button .mdl-badge[data-badge]:after {\n  top: -10px;\n  right: -5px;\n}\n\n.mdl-badge.mdl-badge--no-background[data-badge]:after {\n  color: #00acc1;\n  background: #fff;\n  box-shadow: 0 0 1px gray;\n}\n\n.mdl-button {\n  background: 0 0;\n  border: none;\n  border-radius: 2px;\n  color: #000;\n  position: relative;\n  height: 36px;\n  min-width: 64px;\n  padding: 0 16px;\n  display: inline-block;\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0;\n  overflow: hidden;\n  will-change: box-shadow,transform;\n  -webkit-transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  text-align: center;\n  line-height: 36px;\n  vertical-align: middle;\n}\n\n.mdl-button::-moz-focus-inner {\n  border: 0;\n}\n\n.mdl-button:hover {\n  background-color: rgba(158, 158, 158, 0.2);\n}\n\n.mdl-button:focus:not(:active) {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n.mdl-button:active {\n  background-color: rgba(158, 158, 158, 0.4);\n}\n\n.mdl-button.mdl-button--colored {\n  color: #00bcd4;\n}\n\n.mdl-button.mdl-button--colored:focus:not(:active) {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\ninput.mdl-button[type=\"submit\"] {\n  -webkit-appearance: none;\n}\n\n.mdl-button--raised {\n  background: rgba(158, 158, 158, 0.2);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.mdl-button--raised:active {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n  background-color: rgba(158, 158, 158, 0.4);\n}\n\n.mdl-button--raised:focus:not(:active) {\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.36);\n  background-color: rgba(158, 158, 158, 0.4);\n}\n\n.mdl-button--raised.mdl-button--colored {\n  background: #00bcd4;\n  color: #fff;\n}\n\n.mdl-button--raised.mdl-button--colored:hover {\n  background-color: #00bcd4;\n}\n\n.mdl-button--raised.mdl-button--colored:active {\n  background-color: #00bcd4;\n}\n\n.mdl-button--raised.mdl-button--colored:focus:not(:active) {\n  background-color: #00bcd4;\n}\n\n.mdl-button--raised.mdl-button--colored .mdl-ripple {\n  background: #fff;\n}\n\n.mdl-button--fab {\n  border-radius: 50%;\n  font-size: 24px;\n  height: 56px;\n  margin: auto;\n  min-width: 56px;\n  width: 56px;\n  padding: 0;\n  overflow: hidden;\n  background: rgba(158, 158, 158, 0.2);\n  box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);\n  position: relative;\n  line-height: normal;\n}\n\n.mdl-button--fab .material-icons {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-12px, -12px);\n  -ms-transform: translate(-12px, -12px);\n  transform: translate(-12px, -12px);\n  line-height: 24px;\n  width: 24px;\n}\n\n.mdl-button--fab.mdl-button--mini-fab {\n  height: 40px;\n  min-width: 40px;\n  width: 40px;\n}\n\n.mdl-button--fab .mdl-button__ripple-container {\n  border-radius: 50%;\n  -webkit-mask-image: -webkit-radial-gradient(circle, #fff, #000);\n}\n\n.mdl-button--fab:active {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n  background-color: rgba(158, 158, 158, 0.4);\n}\n\n.mdl-button--fab:focus:not(:active) {\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.18), 0 8px 16px rgba(0, 0, 0, 0.36);\n  background-color: rgba(158, 158, 158, 0.4);\n}\n\n.mdl-button--fab.mdl-button--colored {\n  background: #00acc1;\n  color: #fff;\n}\n\n.mdl-button--fab.mdl-button--colored:hover {\n  background-color: #00acc1;\n}\n\n.mdl-button--fab.mdl-button--colored:focus:not(:active) {\n  background-color: #00acc1;\n}\n\n.mdl-button--fab.mdl-button--colored:active {\n  background-color: #00acc1;\n}\n\n.mdl-button--fab.mdl-button--colored .mdl-ripple {\n  background: #fff;\n}\n\n.mdl-button--icon {\n  border-radius: 50%;\n  font-size: 24px;\n  height: 32px;\n  margin-left: 0;\n  margin-right: 0;\n  min-width: 32px;\n  width: 32px;\n  padding: 0;\n  overflow: hidden;\n  color: inherit;\n  line-height: normal;\n}\n\n.mdl-button--icon .material-icons {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-12px, -12px);\n  -ms-transform: translate(-12px, -12px);\n  transform: translate(-12px, -12px);\n  line-height: 24px;\n  width: 24px;\n}\n\n.mdl-button--icon.mdl-button--mini-icon {\n  height: 24px;\n  min-width: 24px;\n  width: 24px;\n}\n\n.mdl-button--icon.mdl-button--mini-icon .material-icons {\n  top: 0;\n  left: 0;\n}\n\n.mdl-button--icon .mdl-button__ripple-container {\n  border-radius: 50%;\n  -webkit-mask-image: -webkit-radial-gradient(circle, #fff, #000);\n}\n\n.mdl-button__ripple-container {\n  display: block;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 0;\n  overflow: hidden;\n}\n\n.mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple,\n.mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple {\n  background-color: transparent;\n}\n\n.mdl-button--primary.mdl-button--primary {\n  color: #00bcd4;\n}\n\n.mdl-button--primary.mdl-button--primary .mdl-ripple {\n  background: #fff;\n}\n\n.mdl-button--primary.mdl-button--primary.mdl-button--raised,\n.mdl-button--primary.mdl-button--primary.mdl-button--fab {\n  color: #fff;\n  background-color: #00bcd4;\n}\n\n.mdl-button--accent.mdl-button--accent {\n  color: #00acc1;\n}\n\n.mdl-button--accent.mdl-button--accent .mdl-ripple {\n  background: #fff;\n}\n\n.mdl-button--accent.mdl-button--accent.mdl-button--raised,\n.mdl-button--accent.mdl-button--accent.mdl-button--fab {\n  color: #fff;\n  background-color: #00acc1;\n}\n\n.mdl-button[disabled][disabled],\n.mdl-button.mdl-button--disabled.mdl-button--disabled {\n  color: rgba(0, 0, 0, 0.26);\n  cursor: default;\n  background-color: transparent;\n}\n\n.mdl-button--fab[disabled][disabled],\n.mdl-button--fab.mdl-button--disabled.mdl-button--disabled,\n.mdl-button--raised[disabled][disabled],\n.mdl-button--raised.mdl-button--disabled.mdl-button--disabled {\n  background-color: rgba(0, 0, 0, 0.12);\n  color: rgba(0, 0, 0, 0.26);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.mdl-button--colored[disabled][disabled],\n.mdl-button--colored.mdl-button--disabled.mdl-button--disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n\n.mdl-button .material-icons {\n  vertical-align: middle;\n}\n\n.mdl-card {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  font-size: 16px;\n  font-weight: 400;\n  min-height: 200px;\n  overflow: hidden;\n  width: 330px;\n  z-index: 1;\n  position: relative;\n  background: #fff;\n  border-radius: 2px;\n  box-sizing: border-box;\n}\n\n.mdl-card__media {\n  background-color: #00acc1;\n  background-repeat: repeat;\n  background-position: 50% 50%;\n  background-size: cover;\n  background-origin: padding-box;\n  background-attachment: scroll;\n  box-sizing: border-box;\n}\n\n.mdl-card__title {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  color: #000;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: stretch;\n  -webkit-justify-content: stretch;\n  -ms-flex-pack: stretch;\n  justify-content: stretch;\n  line-height: normal;\n  padding: 16px;\n  -webkit-perspective-origin: 165px 56px;\n  perspective-origin: 165px 56px;\n  -webkit-transform-origin: 165px 56px;\n  -ms-transform-origin: 165px 56px;\n  transform-origin: 165px 56px;\n  box-sizing: border-box;\n}\n\n.mdl-card__title.mdl-card--border {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.mdl-card__title-text {\n  -webkit-align-self: flex-end;\n  -ms-flex-item-align: end;\n  align-self: flex-end;\n  color: inherit;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 24px;\n  font-weight: 300;\n  line-height: normal;\n  overflow: hidden;\n  -webkit-transform-origin: 149px 48px;\n  -ms-transform-origin: 149px 48px;\n  transform-origin: 149px 48px;\n  margin: 0;\n}\n\n.mdl-card__subtitle-text {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.54);\n  margin: 0;\n}\n\n.mdl-card__supporting-text {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 13px;\n  line-height: 18px;\n  overflow: hidden;\n  padding: 16px;\n  width: 90%;\n}\n\n.mdl-card__actions {\n  font-size: 16px;\n  line-height: normal;\n  width: 100%;\n  background-color: transparent;\n  padding: 8px;\n  box-sizing: border-box;\n}\n\n.mdl-card__actions.mdl-card--border {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\n.mdl-card--expand {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n}\n\n.mdl-card__menu {\n  position: absolute;\n  right: 16px;\n  top: 16px;\n}\n\n.mdl-checkbox {\n  position: relative;\n  z-index: 1;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 24px;\n  margin: 0;\n  padding: 0;\n}\n\n.mdl-checkbox.is-upgraded {\n  padding-left: 24px;\n}\n\n.mdl-checkbox__input {\n  line-height: 24px;\n}\n\n.mdl-checkbox.is-upgraded .mdl-checkbox__input {\n  position: absolute;\n  width: 0;\n  height: 0;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  -ms-appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  border: none;\n}\n\n.mdl-checkbox__box-outline {\n  position: absolute;\n  top: 3px;\n  left: 0;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 16px;\n  height: 16px;\n  margin: 0;\n  cursor: pointer;\n  overflow: hidden;\n  border: 2px solid rgba(0, 0, 0, 0.54);\n  border-radius: 2px;\n  z-index: 2;\n}\n\n.mdl-checkbox.is-checked .mdl-checkbox__box-outline {\n  border: 2px solid #00bcd4;\n}\n\n.mdl-checkbox.is-disabled .mdl-checkbox__box-outline {\n  border: 2px solid rgba(0, 0, 0, 0.26);\n  cursor: auto;\n}\n\n.mdl-checkbox__focus-helper {\n  position: absolute;\n  top: 3px;\n  left: 0;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background-color: transparent;\n}\n\n.mdl-checkbox.is-focused .mdl-checkbox__focus-helper {\n  box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.mdl-checkbox.is-focused.is-checked .mdl-checkbox__focus-helper {\n  box-shadow: 0 0 0 8px rgba(0, 188, 212, 0.26);\n  background-color: rgba(0, 188, 212, 0.26);\n}\n\n.mdl-checkbox__tick-outline {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  -webkit-mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==\");\n  mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==\");\n  background: 0 0;\n  -webkit-transition-duration: .28s;\n  transition-duration: .28s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-property: background;\n  transition-property: background;\n}\n\n.mdl-checkbox.is-checked .mdl-checkbox__tick-outline {\n  background: #00bcd4 url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K\");\n}\n\n.mdl-checkbox.is-checked.is-disabled .mdl-checkbox__tick-outline {\n  background: rgba(0, 0, 0, 0.26) url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K\");\n}\n\n.mdl-checkbox__label {\n  position: relative;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0;\n}\n\n.mdl-checkbox.is-disabled .mdl-checkbox__label {\n  color: rgba(0, 0, 0, 0.26);\n  cursor: auto;\n}\n\n.mdl-checkbox__ripple-container {\n  position: absolute;\n  z-index: 2;\n  top: -6px;\n  left: -10px;\n  box-sizing: border-box;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-mask-image: -webkit-radial-gradient(circle, #fff, #000);\n}\n\n.mdl-checkbox__ripple-container .mdl-ripple {\n  background: #00bcd4;\n}\n\n.mdl-checkbox.is-disabled .mdl-checkbox__ripple-container {\n  cursor: auto;\n}\n\n.mdl-checkbox.is-disabled .mdl-checkbox__ripple-container .mdl-ripple {\n  background: 0 0;\n}\n\n.mdl-data-table {\n  position: relative;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-collapse: collapse;\n  white-space: nowrap;\n  font-size: 13px;\n  background-color: #fff;\n}\n\n.mdl-data-table thead {\n  padding-bottom: 3px;\n}\n\n.mdl-data-table thead .mdl-data-table__select {\n  margin-top: 0;\n}\n\n.mdl-data-table tbody tr {\n  position: relative;\n  height: 48px;\n  -webkit-transition-duration: .28s;\n  transition-duration: .28s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-property: background-color;\n  transition-property: background-color;\n}\n\n.mdl-data-table tbody tr.is-selected {\n  background-color: #e0e0e0;\n}\n\n.mdl-data-table tbody tr:hover {\n  background-color: #eee;\n}\n\n.mdl-data-table td {\n  text-align: right;\n}\n\n.mdl-data-table th {\n  padding: 0 18px;\n  text-align: right;\n}\n\n.mdl-data-table td:first-of-type,\n.mdl-data-table th:first-of-type {\n  padding-left: 24px;\n}\n\n.mdl-data-table td:last-of-type,\n.mdl-data-table th:last-of-type {\n  padding-right: 24px;\n}\n\n.mdl-data-table td {\n  position: relative;\n  vertical-align: top;\n  height: 48px;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  padding: 12px 18px 0;\n  box-sizing: border-box;\n}\n\n.mdl-data-table td .mdl-data-table__select {\n  vertical-align: top;\n  position: absolute;\n  left: 24px;\n}\n\n.mdl-data-table th {\n  position: relative;\n  vertical-align: bottom;\n  text-overflow: ellipsis;\n  font-weight: 700;\n  line-height: 24px;\n  letter-spacing: 0;\n  height: 48px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.54);\n  padding-bottom: 8px;\n  box-sizing: border-box;\n}\n\n.mdl-data-table th .mdl-data-table__select {\n  position: absolute;\n  bottom: 8px;\n  left: 24px;\n}\n\n.mdl-data-table__select {\n  width: 16px;\n}\n\n.mdl-data-table__cell--non-numeric.mdl-data-table__cell--non-numeric {\n  text-align: left;\n}\n\n.mdl-mega-footer {\n  padding: 16px 40px;\n  color: #9e9e9e;\n  background-color: #424242;\n}\n\n.mdl-mega-footer--top-section:after,\n.mdl-mega-footer--middle-section:after,\n.mdl-mega-footer--bottom-section:after,\n.mdl-mega-footer__top-section:after,\n.mdl-mega-footer__middle-section:after,\n.mdl-mega-footer__bottom-section:after {\n  content: '';\n  display: block;\n  clear: both;\n}\n\n.mdl-mega-footer--left-section,\n.mdl-mega-footer__left-section,\n.mdl-mega-footer--right-section,\n.mdl-mega-footer__right-section {\n  margin-bottom: 16px;\n}\n\n.mdl-mega-footer--right-section a,\n.mdl-mega-footer__right-section a {\n  display: block;\n  margin-bottom: 16px;\n  color: inherit;\n  text-decoration: none;\n}\n\n@media screen and (min-width: 760px) {\n  .mdl-mega-footer--left-section,\n  .mdl-mega-footer__left-section {\n    float: left;\n  }\n\n  .mdl-mega-footer--right-section,\n  .mdl-mega-footer__right-section {\n    float: right;\n  }\n\n  .mdl-mega-footer--right-section a,\n  .mdl-mega-footer__right-section a {\n    display: inline-block;\n    margin-left: 16px;\n    line-height: 36px;\n    vertical-align: middle;\n  }\n}\n\n.mdl-mega-footer--social-btn,\n.mdl-mega-footer__social-btn {\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  margin: 0;\n  background-color: #9e9e9e;\n  border: none;\n}\n\n.mdl-mega-footer--drop-down-section,\n.mdl-mega-footer__drop-down-section {\n  display: block;\n  position: relative;\n}\n\n@media screen and (min-width: 760px) {\n  .mdl-mega-footer--drop-down-section,\n  .mdl-mega-footer__drop-down-section {\n    width: 33%;\n  }\n\n  .mdl-mega-footer--drop-down-section:nth-child(1),\n  .mdl-mega-footer--drop-down-section:nth-child(2),\n  .mdl-mega-footer__drop-down-section:nth-child(1),\n  .mdl-mega-footer__drop-down-section:nth-child(2) {\n    float: left;\n  }\n\n  .mdl-mega-footer--drop-down-section:nth-child(3),\n  .mdl-mega-footer__drop-down-section:nth-child(3) {\n    float: right;\n  }\n\n  .mdl-mega-footer--drop-down-section:nth-child(3):after,\n  .mdl-mega-footer__drop-down-section:nth-child(3):after {\n    clear: right;\n  }\n\n  .mdl-mega-footer--drop-down-section:nth-child(4),\n  .mdl-mega-footer__drop-down-section:nth-child(4) {\n    clear: right;\n    float: right;\n  }\n\n  .mdl-mega-footer--middle-section:after,\n  .mdl-mega-footer__middle-section:after {\n    content: '';\n    display: block;\n    clear: both;\n  }\n\n  .mdl-mega-footer--bottom-section,\n  .mdl-mega-footer__bottom-section {\n    padding-top: 0;\n  }\n}\n\n@media screen and (min-width: 1024px) {\n  .mdl-mega-footer--drop-down-section,\n  .mdl-mega-footer--drop-down-section:nth-child(3),\n  .mdl-mega-footer--drop-down-section:nth-child(4),\n  .mdl-mega-footer__drop-down-section,\n  .mdl-mega-footer__drop-down-section:nth-child(3),\n  .mdl-mega-footer__drop-down-section:nth-child(4) {\n    width: 24%;\n    float: left;\n  }\n}\n\n.mdl-mega-footer--heading-checkbox,\n.mdl-mega-footer__heading-checkbox {\n  position: absolute;\n  width: 100%;\n  height: 55.8px;\n  padding: 32px;\n  margin: -16px 0 0;\n  cursor: pointer;\n  z-index: 1;\n  opacity: 0;\n}\n\n.mdl-mega-footer--heading-checkbox + .mdl-mega-footer--heading:after,\n.mdl-mega-footer--heading-checkbox + .mdl-mega-footer__heading:after,\n.mdl-mega-footer__heading-checkbox + .mdl-mega-footer--heading:after,\n.mdl-mega-footer__heading-checkbox + .mdl-mega-footer__heading:after {\n  font-family: 'Material Icons';\n  content: '\\E5CE';\n}\n\n.mdl-mega-footer--heading-checkbox:checked ~ .mdl-mega-footer--link-list,\n.mdl-mega-footer--heading-checkbox:checked ~ .mdl-mega-footer__link-list,\n.mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer--heading + .mdl-mega-footer--link-list,\n.mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer__heading + .mdl-mega-footer__link-list,\n.mdl-mega-footer__heading-checkbox:checked ~ .mdl-mega-footer--link-list,\n.mdl-mega-footer__heading-checkbox:checked ~ .mdl-mega-footer__link-list,\n.mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer--heading + .mdl-mega-footer--link-list,\n.mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer__heading + .mdl-mega-footer__link-list {\n  display: none;\n}\n\n.mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer--heading:after,\n.mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer__heading:after,\n.mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer--heading:after,\n.mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer__heading:after {\n  font-family: 'Material Icons';\n  content: '\\E5CF';\n}\n\n.mdl-mega-footer--heading,\n.mdl-mega-footer__heading {\n  position: relative;\n  width: 100%;\n  padding-right: 39.8px;\n  margin-bottom: 16px;\n  box-sizing: border-box;\n  font-size: 14px;\n  line-height: 23.8px;\n  font-weight: 500;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  color: #e0e0e0;\n}\n\n.mdl-mega-footer--heading:after,\n.mdl-mega-footer__heading:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: block;\n  width: 23.8px;\n  height: 23.8px;\n  background-size: cover;\n}\n\n.mdl-mega-footer--link-list,\n.mdl-mega-footer__link-list {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 32px;\n}\n\n.mdl-mega-footer--link-list:after,\n.mdl-mega-footer__link-list:after {\n  clear: both;\n  display: block;\n  content: '';\n}\n\n.mdl-mega-footer--link-list li,\n.mdl-mega-footer__link-list li {\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  line-height: 20px;\n}\n\n.mdl-mega-footer--link-list a,\n.mdl-mega-footer__link-list a {\n  color: inherit;\n  text-decoration: none;\n  white-space: nowrap;\n}\n\n@media screen and (min-width: 760px) {\n  .mdl-mega-footer--heading-checkbox,\n  .mdl-mega-footer__heading-checkbox {\n    display: none;\n  }\n\n  .mdl-mega-footer--heading-checkbox + .mdl-mega-footer--heading:after,\n  .mdl-mega-footer--heading-checkbox + .mdl-mega-footer__heading:after,\n  .mdl-mega-footer__heading-checkbox + .mdl-mega-footer--heading:after,\n  .mdl-mega-footer__heading-checkbox + .mdl-mega-footer__heading:after {\n    background-image: none;\n  }\n\n  .mdl-mega-footer--heading-checkbox:checked ~ .mdl-mega-footer--link-list,\n  .mdl-mega-footer--heading-checkbox:checked ~ .mdl-mega-footer__link-list,\n  .mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer__heading + .mdl-mega-footer__link-list,\n  .mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer--heading + .mdl-mega-footer--link-list,\n  .mdl-mega-footer__heading-checkbox:checked ~ .mdl-mega-footer--link-list,\n  .mdl-mega-footer__heading-checkbox:checked ~ .mdl-mega-footer__link-list,\n  .mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer__heading + .mdl-mega-footer__link-list,\n  .mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer--heading + .mdl-mega-footer--link-list {\n    display: block;\n  }\n\n  .mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer--heading:after,\n  .mdl-mega-footer--heading-checkbox:checked + .mdl-mega-footer__heading:after,\n  .mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer--heading:after,\n  .mdl-mega-footer__heading-checkbox:checked + .mdl-mega-footer__heading:after {\n    content: '';\n  }\n}\n\n.mdl-mega-footer--bottom-section,\n.mdl-mega-footer__bottom-section {\n  padding-top: 16px;\n  margin-bottom: 16px;\n}\n\n.mdl-logo {\n  margin-bottom: 16px;\n  color: #fff;\n}\n\n.mdl-mega-footer--bottom-section .mdl-mega-footer--link-list li,\n.mdl-mega-footer__bottom-section .mdl-mega-footer__link-list li {\n  float: left;\n  margin-bottom: 0;\n  margin-right: 16px;\n}\n\n@media screen and (min-width: 760px) {\n  .mdl-logo {\n    float: left;\n    margin-bottom: 0;\n    margin-right: 16px;\n  }\n}\n\n.mdl-mini-footer {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n  -ms-flex-flow: row wrap;\n  flex-flow: row wrap;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 32px 16px;\n  color: #9e9e9e;\n  background-color: #424242;\n}\n\n.mdl-mini-footer:after {\n  content: '';\n  display: block;\n}\n\n.mdl-mini-footer .mdl-logo {\n  line-height: 36px;\n}\n\n.mdl-mini-footer--link-list,\n.mdl-mini-footer__link-list {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row nowrap;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.mdl-mini-footer--link-list li,\n.mdl-mini-footer__link-list li {\n  margin-bottom: 0;\n  margin-right: 16px;\n}\n\n@media screen and (min-width: 760px) {\n  .mdl-mini-footer--link-list li,\n  .mdl-mini-footer__link-list li {\n    line-height: 36px;\n  }\n}\n\n.mdl-mini-footer--link-list a,\n.mdl-mini-footer__link-list a {\n  color: inherit;\n  text-decoration: none;\n  white-space: nowrap;\n}\n\n.mdl-mini-footer--left-section,\n.mdl-mini-footer__left-section {\n  display: inline-block;\n  -webkit-box-ordinal-group: 1;\n  -webkit-order: 0;\n  -ms-flex-order: 0;\n  order: 0;\n}\n\n.mdl-mini-footer--right-section,\n.mdl-mini-footer__right-section {\n  display: inline-block;\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n.mdl-mini-footer--social-btn,\n.mdl-mini-footer__social-btn {\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  margin: 0;\n  background-color: #9e9e9e;\n  border: none;\n}\n\n.mdl-icon-toggle {\n  position: relative;\n  z-index: 1;\n  vertical-align: middle;\n  display: inline-block;\n  height: 32px;\n  margin: 0;\n  padding: 0;\n}\n\n.mdl-icon-toggle__input {\n  line-height: 32px;\n}\n\n.mdl-icon-toggle.is-upgraded .mdl-icon-toggle__input {\n  position: absolute;\n  width: 0;\n  height: 0;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  -ms-appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  border: none;\n}\n\n.mdl-icon-toggle__label {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 32px;\n  width: 32px;\n  min-width: 32px;\n  color: #616161;\n  border-radius: 50%;\n  padding: 0;\n  margin-left: 0;\n  margin-right: 0;\n  text-align: center;\n  background-color: transparent;\n  will-change: background-color;\n  -webkit-transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdl-icon-toggle__label.material-icons {\n  line-height: 32px;\n  font-size: 24px;\n}\n\n.mdl-icon-toggle.is-checked .mdl-icon-toggle__label {\n  color: #00bcd4;\n}\n\n.mdl-icon-toggle.is-disabled .mdl-icon-toggle__label {\n  color: rgba(0, 0, 0, 0.26);\n  cursor: auto;\n  -webkit-transition: none;\n  transition: none;\n}\n\n.mdl-icon-toggle.is-focused .mdl-icon-toggle__label {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n.mdl-icon-toggle.is-focused.is-checked .mdl-icon-toggle__label {\n  background-color: rgba(0, 188, 212, 0.26);\n}\n\n.mdl-icon-toggle__ripple-container {\n  position: absolute;\n  z-index: 2;\n  top: -2px;\n  left: -2px;\n  box-sizing: border-box;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-mask-image: -webkit-radial-gradient(circle, #fff, #000);\n}\n\n.mdl-icon-toggle__ripple-container .mdl-ripple {\n  background: #616161;\n}\n\n.mdl-icon-toggle.is-disabled .mdl-icon-toggle__ripple-container {\n  cursor: auto;\n}\n\n.mdl-icon-toggle.is-disabled .mdl-icon-toggle__ripple-container .mdl-ripple {\n  background: 0 0;\n}\n\n.mdl-menu__container {\n  display: block;\n  margin: 0;\n  padding: 0;\n  border: none;\n  position: absolute;\n  overflow: visible;\n  height: 0;\n  width: 0;\n  visibility: hidden;\n  z-index: -1;\n}\n\n.mdl-menu__container.is-visible,\n.mdl-menu__container.is-animating {\n  z-index: 999;\n  visibility: visible;\n}\n\n.mdl-menu__outline {\n  display: block;\n  background: #fff;\n  margin: 0;\n  padding: 0;\n  border: none;\n  border-radius: 2px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  opacity: 0;\n  -webkit-transform: scale(0);\n  -ms-transform: scale(0);\n  transform: scale(0);\n  -webkit-transform-origin: 0 0;\n  -ms-transform-origin: 0 0;\n  transform-origin: 0 0;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  will-change: transform;\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: -1;\n}\n\n.mdl-menu__container.is-visible .mdl-menu__outline {\n  opacity: 1;\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n  z-index: 999;\n}\n\n.mdl-menu__outline.mdl-menu--bottom-right {\n  -webkit-transform-origin: 100% 0;\n  -ms-transform-origin: 100% 0;\n  transform-origin: 100% 0;\n}\n\n.mdl-menu__outline.mdl-menu--top-left {\n  -webkit-transform-origin: 0 100%;\n  -ms-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n}\n\n.mdl-menu__outline.mdl-menu--top-right {\n  -webkit-transform-origin: 100% 100%;\n  -ms-transform-origin: 100% 100%;\n  transform-origin: 100% 100%;\n}\n\n.mdl-menu {\n  position: absolute;\n  list-style: none;\n  top: 0;\n  left: 0;\n  height: auto;\n  width: auto;\n  min-width: 124px;\n  padding: 8px 0;\n  margin: 0;\n  opacity: 0;\n  clip: rect(0 0 0 0);\n  z-index: -1;\n}\n\n.mdl-menu__container.is-visible .mdl-menu {\n  opacity: 1;\n  z-index: 999;\n}\n\n.mdl-menu.is-animating {\n  -webkit-transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), clip 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), clip 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdl-menu.mdl-menu--bottom-right {\n  left: auto;\n  right: 0;\n}\n\n.mdl-menu.mdl-menu--top-left {\n  top: auto;\n  bottom: 0;\n}\n\n.mdl-menu.mdl-menu--top-right {\n  top: auto;\n  left: auto;\n  bottom: 0;\n  right: 0;\n}\n\n.mdl-menu.mdl-menu--unaligned {\n  top: auto;\n  left: auto;\n}\n\n.mdl-menu__item {\n  display: block;\n  border: none;\n  color: rgba(0, 0, 0, 0.87);\n  background-color: transparent;\n  text-align: left;\n  margin: 0;\n  padding: 0 16px;\n  outline-color: #bdbdbd;\n  position: relative;\n  overflow: hidden;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0;\n  text-decoration: none;\n  cursor: pointer;\n  height: 48px;\n  line-height: 48px;\n  white-space: nowrap;\n  opacity: 0;\n  -webkit-transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.mdl-menu__container.is-visible .mdl-menu__item {\n  opacity: 1;\n}\n\n.mdl-menu__item::-moz-focus-inner {\n  border: 0;\n}\n\n.mdl-menu__item[disabled] {\n  color: #bdbdbd;\n  background-color: transparent;\n  cursor: auto;\n}\n\n.mdl-menu__item[disabled]:hover {\n  background-color: transparent;\n}\n\n.mdl-menu__item[disabled]:focus {\n  background-color: transparent;\n}\n\n.mdl-menu__item[disabled] .mdl-ripple {\n  background: 0 0;\n}\n\n.mdl-menu__item:hover {\n  background-color: #eee;\n}\n\n.mdl-menu__item:focus {\n  outline: none;\n  background-color: #eee;\n}\n\n.mdl-menu__item:active {\n  background-color: #e0e0e0;\n}\n\n.mdl-menu__item--ripple-container {\n  display: block;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 0;\n  overflow: hidden;\n}\n\n.mdl-progress {\n  display: block;\n  position: relative;\n  height: 4px;\n  width: 500px;\n}\n\n.mdl-progress > .bar {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 0%;\n  -webkit-transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdl-progress > .progressbar {\n  background-color: #00bcd4;\n  z-index: 1;\n  left: 0;\n}\n\n.mdl-progress > .bufferbar {\n  background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), -webkit-linear-gradient(left, #00bcd4, #00bcd4);\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), linear-gradient(to right, #00bcd4, #00bcd4);\n  z-index: 0;\n  left: 0;\n}\n\n.mdl-progress > .auxbar {\n  right: 0;\n}\n\n@supports (-webkit-appearance: none) {\n  .mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate) > .auxbar {\n    background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), -webkit-linear-gradient(left, #00bcd4, #00bcd4);\n    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), linear-gradient(to right, #00bcd4, #00bcd4);\n    -webkit-mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\");\n    mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\");\n  }\n}\n\n.mdl-progress:not(.mdl-progress__indeterminate) > .auxbar {\n  background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), -webkit-linear-gradient(left, #00bcd4, #00bcd4);\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), linear-gradient(to right, #00bcd4, #00bcd4);\n}\n\n.mdl-progress.mdl-progress__indeterminate > .bar1 {\n  -webkit-animation-name: indeterminate1;\n  animation-name: indeterminate1;\n}\n\n.mdl-progress.mdl-progress__indeterminate > .bar1,\n.mdl-progress.mdl-progress__indeterminate > .bar3 {\n  background-color: #00bcd4;\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n}\n\n.mdl-progress.mdl-progress__indeterminate > .bar3 {\n  background-image: none;\n  -webkit-animation-name: indeterminate2;\n  animation-name: indeterminate2;\n}\n\n@-webkit-keyframes indeterminate1 {\n  0% {\n    left: 0%;\n    width: 0%;\n  }\n\n  50% {\n    left: 25%;\n    width: 75%;\n  }\n\n  75% {\n    left: 100%;\n    width: 0%;\n  }\n}\n\n@keyframes indeterminate1 {\n  0% {\n    left: 0%;\n    width: 0%;\n  }\n\n  50% {\n    left: 25%;\n    width: 75%;\n  }\n\n  75% {\n    left: 100%;\n    width: 0%;\n  }\n}\n\n@-webkit-keyframes indeterminate2 {\n  0%, 50% {\n    left: 0%;\n    width: 0%;\n  }\n\n  75% {\n    left: 0%;\n    width: 25%;\n  }\n\n  100% {\n    left: 100%;\n    width: 0%;\n  }\n}\n\n@keyframes indeterminate2 {\n  0%, 50% {\n    left: 0%;\n    width: 0%;\n  }\n\n  75% {\n    left: 0%;\n    width: 25%;\n  }\n\n  100% {\n    left: 100%;\n    width: 0%;\n  }\n}\n\n.mdl-navigation {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: nowrap;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  box-sizing: border-box;\n}\n\n.mdl-navigation__link {\n  color: #424242;\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 13px;\n  margin: 0;\n}\n\n.mdl-layout {\n  width: 100%;\n  height: 100%;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n  -webkit-overflow-scrolling: touch;\n}\n\n.mdl-layout.is-small-screen .mdl-layout--large-screen-only {\n  display: none;\n}\n\n.mdl-layout:not(.is-small-screen) .mdl-layout--small-screen-only {\n  display: none;\n}\n\n.mdl-layout__container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.mdl-layout__title,\n.mdl-layout-title {\n  display: block;\n  position: relative;\n  font-family: \"Roboto\",\"Helvetica\",\"Arial\",sans-serif;\n  font-size: 20px;\n  line-height: 1;\n  letter-spacing: .02em;\n  font-weight: 400;\n  box-sizing: border-box;\n}\n\n.mdl-layout-spacer {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n}\n\n.mdl-layout__drawer {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex-wrap: nowrap;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  width: 240px;\n  height: 100%;\n  max-height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  border-right: 1px solid #e0e0e0;\n  background: #fafafa;\n  -webkit-transform: translateX(-250px);\n  -ms-transform: translateX(-250px);\n  transform: translateX(-250px);\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  will-change: transform;\n  -webkit-transition-duration: .2s;\n  transition-duration: .2s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-property: -webkit-transform;\n  transition-property: transform;\n  color: #424242;\n  overflow: visible;\n  overflow-y: auto;\n  z-index: 5;\n}\n\n.mdl-layout__drawer.is-visible {\n  -webkit-transform: translateX(0);\n  -ms-transform: translateX(0);\n  transform: translateX(0);\n}\n\n.mdl-layout__drawer.is-visible ~ .mdl-layout__content.mdl-layout__content {\n  overflow: hidden;\n}\n\n.mdl-layout__drawer > * {\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n\n.mdl-layout__drawer > .mdl-layout__title,\n.mdl-layout__drawer > .mdl-layout-title {\n  line-height: 64px;\n  padding-left: 40px;\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout__drawer > .mdl-layout__title,\n  .mdl-layout__drawer > .mdl-layout-title {\n    line-height: 56px;\n    padding-left: 16px;\n  }\n}\n\n.mdl-layout__drawer .mdl-navigation {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  padding-top: 16px;\n}\n\n.mdl-layout__drawer .mdl-navigation .mdl-navigation__link {\n  display: block;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding: 16px 40px;\n  margin: 0;\n  color: #757575;\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout__drawer .mdl-navigation .mdl-navigation__link {\n    padding: 16px;\n  }\n}\n\n.mdl-layout__drawer .mdl-navigation .mdl-navigation__link:hover {\n  background-color: #e0e0e0;\n}\n\n.mdl-layout__drawer .mdl-navigation .mdl-navigation__link--current {\n  background-color: #000;\n  color: #e0e0e0;\n}\n\n@media screen and (min-width: 1025px) {\n  .mdl-layout--fixed-drawer > .mdl-layout__drawer {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n.mdl-layout__drawer-button {\n  display: block;\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  border: 0;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  overflow: hidden;\n  text-align: center;\n  cursor: pointer;\n  font-size: 26px;\n  line-height: 50px;\n  font-family: Helvetica,Arial,sans-serif;\n  margin: 10px 12px;\n  top: 0;\n  left: 0;\n  color: #fff;\n  z-index: 4;\n}\n\n.mdl-layout__header .mdl-layout__drawer-button {\n  position: absolute;\n  color: #fff;\n  background-color: inherit;\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout__header .mdl-layout__drawer-button {\n    margin: 4px;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout__drawer-button {\n    margin: 4px;\n    color: rgba(0, 0, 0, 0.5);\n  }\n}\n\n@media screen and (min-width: 1025px) {\n  .mdl-layout--fixed-drawer > .mdl-layout__drawer-button {\n    display: none;\n  }\n}\n\n.mdl-layout__header {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex-wrap: nowrap;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  box-sizing: border-box;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border: none;\n  min-height: 64px;\n  max-height: 1000px;\n  z-index: 3;\n  background-color: #00bcd4;\n  color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  -webkit-transition-duration: .2s;\n  transition-duration: .2s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-property: max-height,box-shadow;\n  transition-property: max-height,box-shadow;\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout__header {\n    min-height: 56px;\n  }\n}\n\n.mdl-layout--fixed-drawer.is-upgraded:not(.is-small-screen) > .mdl-layout__header {\n  margin-left: 240px;\n  width: calc(100% - 240px);\n}\n\n@media screen and (min-width: 1025px) {\n  .mdl-layout--fixed-drawer > .mdl-layout__header .mdl-layout__header-row {\n    padding-left: 40px;\n  }\n}\n\n.mdl-layout__header > .mdl-layout-icon {\n  position: absolute;\n  left: 40px;\n  top: 16px;\n  height: 32px;\n  width: 32px;\n  overflow: hidden;\n  z-index: 3;\n  display: block;\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout__header > .mdl-layout-icon {\n    left: 16px;\n    top: 12px;\n  }\n}\n\n.mdl-layout.has-drawer .mdl-layout__header > .mdl-layout-icon {\n  display: none;\n}\n\n.mdl-layout__header.is-compact {\n  max-height: 64px;\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout__header.is-compact {\n    max-height: 56px;\n  }\n}\n\n.mdl-layout__header.is-compact.has-tabs {\n  height: 112px;\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout__header.is-compact.has-tabs {\n    min-height: 104px;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout__header {\n    display: none;\n  }\n\n  .mdl-layout--fixed-header > .mdl-layout__header {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n\n.mdl-layout__header--transparent.mdl-layout__header--transparent {\n  background-color: transparent;\n  box-shadow: none;\n}\n\n.mdl-layout__header--seamed,\n.mdl-layout__header--scroll {\n  box-shadow: none;\n}\n\n.mdl-layout__header--waterfall {\n  box-shadow: none;\n  overflow: hidden;\n}\n\n.mdl-layout__header--waterfall.is-casting-shadow {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.mdl-layout__header-row {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-flex-wrap: nowrap;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  -webkit-align-self: stretch;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  height: 64px;\n  margin: 0;\n  padding: 0 40px 0 80px;\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout__header-row {\n    height: 56px;\n    padding: 0 16px 0 72px;\n  }\n}\n\n.mdl-layout__header-row > * {\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n\n.mdl-layout__header--scroll .mdl-layout__header-row {\n  width: 100%;\n}\n\n.mdl-layout__header-row .mdl-navigation {\n  margin: 0;\n  padding: 0;\n  height: 64px;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout__header-row .mdl-navigation {\n    height: 56px;\n  }\n}\n\n.mdl-layout__header-row .mdl-navigation__link {\n  display: block;\n  color: #fff;\n  line-height: 64px;\n  padding: 0 24px;\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout__header-row .mdl-navigation__link {\n    line-height: 56px;\n    padding: 0 16px;\n  }\n}\n\n.mdl-layout__obfuscator {\n  background-color: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 4;\n  visibility: hidden;\n  -webkit-transition-property: background-color;\n  transition-property: background-color;\n  -webkit-transition-duration: .2s;\n  transition-duration: .2s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdl-layout__obfuscator.is-visible {\n  background-color: rgba(0, 0, 0, 0.5);\n  visibility: visible;\n}\n\n.mdl-layout__content {\n  -ms-flex: 0 1 auto;\n  display: inline-block;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  z-index: 1;\n  -webkit-overflow-scrolling: touch;\n}\n\n.mdl-layout--fixed-drawer > .mdl-layout__content {\n  margin-left: 240px;\n}\n\n.mdl-layout__container.has-scrolling-header .mdl-layout__content {\n  overflow: visible;\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout--fixed-drawer > .mdl-layout__content {\n    margin-left: 0;\n  }\n\n  .mdl-layout__container.has-scrolling-header .mdl-layout__content {\n    overflow-y: auto;\n    overflow-x: hidden;\n  }\n}\n\n.mdl-layout__tab-bar {\n  height: 96px;\n  margin: 0;\n  width: calc(100% - 112px);\n  padding: 0 0 0 56px;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #00bcd4;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n\n.mdl-layout__tab-bar::-webkit-scrollbar {\n  display: none;\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout__tab-bar {\n    width: calc(100% - 60px);\n    padding: 0 0 0 60px;\n  }\n}\n\n.mdl-layout--fixed-tabs .mdl-layout__tab-bar {\n  padding: 0;\n  overflow: hidden;\n  width: 100%;\n}\n\n.mdl-layout__tab-bar-container {\n  position: relative;\n  height: 48px;\n  width: 100%;\n  border: none;\n  margin: 0;\n  z-index: 2;\n  -webkit-box-flex: 0;\n  -webkit-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  overflow: hidden;\n}\n\n.mdl-layout__container > .mdl-layout__tab-bar-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.mdl-layout__tab-bar-button {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  height: 48px;\n  width: 56px;\n  z-index: 4;\n  text-align: center;\n  background-color: #00bcd4;\n  color: transparent;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout__tab-bar-button {\n    display: none;\n    width: 60px;\n  }\n}\n\n.mdl-layout--fixed-tabs .mdl-layout__tab-bar-button {\n  display: none;\n}\n\n.mdl-layout__tab-bar-button .material-icons {\n  line-height: 48px;\n}\n\n.mdl-layout__tab-bar-button.is-active {\n  color: #fff;\n}\n\n.mdl-layout__tab-bar-left-button {\n  left: 0;\n}\n\n.mdl-layout__tab-bar-right-button {\n  right: 0;\n}\n\n.mdl-layout__tab {\n  margin: 0;\n  border: none;\n  padding: 0 24px;\n  float: left;\n  position: relative;\n  display: block;\n  -webkit-box-flex: 0;\n  -webkit-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  text-decoration: none;\n  height: 48px;\n  line-height: 48px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.6);\n  overflow: hidden;\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout__tab {\n    padding: 0 12px;\n  }\n}\n\n.mdl-layout--fixed-tabs .mdl-layout__tab {\n  float: none;\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  padding: 0;\n}\n\n.mdl-layout.is-upgraded .mdl-layout__tab.is-active {\n  color: #fff;\n}\n\n.mdl-layout.is-upgraded .mdl-layout__tab.is-active::after {\n  height: 2px;\n  width: 100%;\n  display: block;\n  content: \" \";\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  background: #00acc1;\n  -webkit-animation: border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) 0.01s alternate forwards;\n  animation: border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) 0.01s alternate forwards;\n  -webkit-transition: all 1s cubic-bezier(0.4, 0, 1, 1);\n  transition: all 1s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.mdl-layout__tab .mdl-layout__tab-ripple-container {\n  display: block;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.mdl-layout__tab .mdl-layout__tab-ripple-container .mdl-ripple {\n  background-color: #fff;\n}\n\n.mdl-layout__tab-panel {\n  display: block;\n}\n\n.mdl-layout.is-upgraded .mdl-layout__tab-panel {\n  display: none;\n}\n\n.mdl-layout.is-upgraded .mdl-layout__tab-panel.is-active {\n  display: block;\n}\n\n.mdl-radio {\n  position: relative;\n  font-size: 16px;\n  line-height: 24px;\n  display: inline-block;\n  box-sizing: border-box;\n  margin: 0;\n  padding-left: 0;\n}\n\n.mdl-radio.is-upgraded {\n  padding-left: 24px;\n}\n\n.mdl-radio__button {\n  line-height: 24px;\n}\n\n.mdl-radio.is-upgraded .mdl-radio__button {\n  position: absolute;\n  width: 0;\n  height: 0;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  -ms-appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  border: none;\n}\n\n.mdl-radio__outer-circle {\n  position: absolute;\n  top: 4px;\n  left: 0;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 16px;\n  height: 16px;\n  margin: 0;\n  cursor: pointer;\n  border: 2px solid rgba(0, 0, 0, 0.54);\n  border-radius: 50%;\n  z-index: 2;\n}\n\n.mdl-radio.is-checked .mdl-radio__outer-circle {\n  border: 2px solid #00bcd4;\n}\n\n.mdl-radio.is-disabled .mdl-radio__outer-circle {\n  border: 2px solid rgba(0, 0, 0, 0.26);\n  cursor: auto;\n}\n\n.mdl-radio__inner-circle {\n  position: absolute;\n  z-index: 1;\n  margin: 0;\n  top: 8px;\n  left: 4px;\n  box-sizing: border-box;\n  width: 8px;\n  height: 8px;\n  cursor: pointer;\n  -webkit-transition-duration: .28s;\n  transition-duration: .28s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-property: -webkit-transform;\n  transition-property: transform;\n  -webkit-transform: scale3d(0, 0, 0);\n  transform: scale3d(0, 0, 0);\n  border-radius: 50%;\n  background: #00bcd4;\n}\n\n.mdl-radio.is-checked .mdl-radio__inner-circle {\n  -webkit-transform: scale3d(1, 1, 1);\n  transform: scale3d(1, 1, 1);\n}\n\n.mdl-radio.is-disabled .mdl-radio__inner-circle {\n  background: rgba(0, 0, 0, 0.26);\n  cursor: auto;\n}\n\n.mdl-radio.is-focused .mdl-radio__inner-circle {\n  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.mdl-radio__label {\n  cursor: pointer;\n}\n\n.mdl-radio.is-disabled .mdl-radio__label {\n  color: rgba(0, 0, 0, 0.26);\n  cursor: auto;\n}\n\n.mdl-radio__ripple-container {\n  position: absolute;\n  z-index: 2;\n  top: -9px;\n  left: -13px;\n  box-sizing: border-box;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-mask-image: -webkit-radial-gradient(circle, #fff, #000);\n}\n\n.mdl-radio__ripple-container .mdl-ripple {\n  background: #00bcd4;\n}\n\n.mdl-radio.is-disabled .mdl-radio__ripple-container {\n  cursor: auto;\n}\n\n.mdl-radio.is-disabled .mdl-radio__ripple-container .mdl-ripple {\n  background: 0 0;\n}\n\n_:-ms-input-placeholder,\n:root .mdl-slider.mdl-slider.is-upgraded {\n  -ms-appearance: none;\n  height: 32px;\n  margin: 0;\n}\n\n.mdl-slider {\n  width: calc(100% - 40px);\n  margin: 0 20px;\n}\n\n.mdl-slider.is-upgraded {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  height: 2px;\n  background: 0 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  outline: 0;\n  padding: 0;\n  color: #00bcd4;\n  -webkit-align-self: center;\n  -ms-flex-item-align: center;\n  align-self: center;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.mdl-slider.is-upgraded::-moz-focus-outer {\n  border: 0;\n}\n\n.mdl-slider.is-upgraded::-ms-tooltip {\n  display: none;\n}\n\n.mdl-slider.is-upgraded::-webkit-slider-runnable-track {\n  background: 0 0;\n}\n\n.mdl-slider.is-upgraded::-moz-range-track {\n  background: 0 0;\n  border: none;\n}\n\n.mdl-slider.is-upgraded::-ms-track {\n  background: 0 0;\n  color: transparent;\n  height: 2px;\n  width: 100%;\n  border: none;\n}\n\n.mdl-slider.is-upgraded::-ms-fill-lower {\n  padding: 0;\n  background: linear-gradient(to right, transparent, transparent 16px, #00bcd4 16px, #00bcd4 0);\n}\n\n.mdl-slider.is-upgraded::-ms-fill-upper {\n  padding: 0;\n  background: linear-gradient(to left, transparent, transparent 16px, rgba(0, 0, 0, 0.26) 16px, rgba(0, 0, 0, 0.26) 0);\n}\n\n.mdl-slider.is-upgraded::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  background: #00bcd4;\n  border: none;\n  -webkit-transition: -webkit-transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), border 0.18s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.18s cubic-bezier(0.4, 0, 0.2, 1), background 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), border 0.18s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.18s cubic-bezier(0.4, 0, 0.2, 1), background 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdl-slider.is-upgraded::-moz-range-thumb {\n  -moz-appearance: none;\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  background-image: none;\n  background: #00bcd4;\n  border: none;\n}\n\n.mdl-slider.is-upgraded:focus:not(:active)::-webkit-slider-thumb {\n  box-shadow: 0 0 0 10px rgba(0, 188, 212, 0.26);\n}\n\n.mdl-slider.is-upgraded:focus:not(:active)::-moz-range-thumb {\n  box-shadow: 0 0 0 10px rgba(0, 188, 212, 0.26);\n}\n\n.mdl-slider.is-upgraded:active::-webkit-slider-thumb {\n  background-image: none;\n  background: #00bcd4;\n  -webkit-transform: scale(1.5);\n  transform: scale(1.5);\n}\n\n.mdl-slider.is-upgraded:active::-moz-range-thumb {\n  background-image: none;\n  background: #00bcd4;\n  transform: scale(1.5);\n}\n\n.mdl-slider.is-upgraded::-ms-thumb {\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 50%;\n  background: #00bcd4;\n  -ms-transform: scale(0.375);\n  transform: scale(0.375);\n  transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), background 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdl-slider.is-upgraded:focus:not(:active)::-ms-thumb {\n  background: radial-gradient(circle closest-side, #00bcd4 0%, #00bcd4 37.5%, rgba(0, 188, 212, 0.26) 37.5%, rgba(0, 188, 212, 0.26) 100%);\n  -ms-transform: scale(1);\n  transform: scale(1);\n}\n\n.mdl-slider.is-upgraded:active::-ms-thumb {\n  background: #00bcd4;\n  -ms-transform: scale(0.5625);\n  transform: scale(0.5625);\n}\n\n.mdl-slider.is-upgraded.is-lowest-value::-webkit-slider-thumb {\n  border: 2px solid rgba(0, 0, 0, 0.26);\n  background: 0 0;\n}\n\n.mdl-slider.is-upgraded.is-lowest-value::-moz-range-thumb {\n  border: 2px solid rgba(0, 0, 0, 0.26);\n  background: 0 0;\n}\n\n.mdl-slider.is-upgraded.is-lowest-value + .mdl-slider__background-flex > .mdl-slider__background-upper {\n  left: 6px;\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-webkit-slider-thumb {\n  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.12);\n  background: rgba(0, 0, 0, 0.12);\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-moz-range-thumb {\n  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.12);\n  background: rgba(0, 0, 0, 0.12);\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:active::-webkit-slider-thumb {\n  border: 1.6px solid rgba(0, 0, 0, 0.26);\n  -webkit-transform: scale(1.5);\n  transform: scale(1.5);\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:active + .mdl-slider__background-flex > .mdl-slider__background-upper {\n  left: 9px;\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:active::-moz-range-thumb {\n  border: 1.5px solid rgba(0, 0, 0, 0.26);\n  transform: scale(1.5);\n}\n\n.mdl-slider.is-upgraded.is-lowest-value::-ms-thumb {\n  background: radial-gradient(circle closest-side, transparent 0%, transparent 66.67%, rgba(0, 0, 0, 0.26) 66.67%, rgba(0, 0, 0, 0.26) 100%);\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-ms-thumb {\n  background: radial-gradient(circle closest-side, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.12) 25%, rgba(0, 0, 0, 0.26) 25%, rgba(0, 0, 0, 0.26) 37.5%, rgba(0, 0, 0, 0.12) 37.5%, rgba(0, 0, 0, 0.12) 100%);\n  -ms-transform: scale(1);\n  transform: scale(1);\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:active::-ms-thumb {\n  -ms-transform: scale(0.5625);\n  transform: scale(0.5625);\n  background: radial-gradient(circle closest-side, transparent 0%, transparent 77.78%, rgba(0, 0, 0, 0.26) 77.78%, rgba(0, 0, 0, 0.26) 100%);\n}\n\n.mdl-slider.is-upgraded.is-lowest-value::-ms-fill-lower {\n  background: 0 0;\n}\n\n.mdl-slider.is-upgraded.is-lowest-value::-ms-fill-upper {\n  margin-left: 6px;\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:active::-ms-fill-upper {\n  margin-left: 9px;\n}\n\n.mdl-slider.is-upgraded:disabled:focus::-webkit-slider-thumb,\n.mdl-slider.is-upgraded:disabled:active::-webkit-slider-thumb,\n.mdl-slider.is-upgraded:disabled::-webkit-slider-thumb {\n  -webkit-transform: scale(0.667);\n  transform: scale(0.667);\n  background: rgba(0, 0, 0, 0.26);\n}\n\n.mdl-slider.is-upgraded:disabled:focus::-moz-range-thumb,\n.mdl-slider.is-upgraded:disabled:active::-moz-range-thumb,\n.mdl-slider.is-upgraded:disabled::-moz-range-thumb {\n  transform: scale(0.667);\n  background: rgba(0, 0, 0, 0.26);\n}\n\n.mdl-slider.is-upgraded:disabled + .mdl-slider__background-flex > .mdl-slider__background-lower {\n  background-color: rgba(0, 0, 0, 0.26);\n  left: -6px;\n}\n\n.mdl-slider.is-upgraded:disabled + .mdl-slider__background-flex > .mdl-slider__background-upper {\n  left: 6px;\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-webkit-slider-thumb,\n.mdl-slider.is-upgraded.is-lowest-value:disabled:active::-webkit-slider-thumb,\n.mdl-slider.is-upgraded.is-lowest-value:disabled::-webkit-slider-thumb {\n  border: 3px solid rgba(0, 0, 0, 0.26);\n  background: 0 0;\n  -webkit-transform: scale(0.667);\n  transform: scale(0.667);\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-moz-range-thumb,\n.mdl-slider.is-upgraded.is-lowest-value:disabled:active::-moz-range-thumb,\n.mdl-slider.is-upgraded.is-lowest-value:disabled::-moz-range-thumb {\n  border: 3px solid rgba(0, 0, 0, 0.26);\n  background: 0 0;\n  transform: scale(0.667);\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:disabled:active + .mdl-slider__background-flex > .mdl-slider__background-upper {\n  left: 6px;\n}\n\n.mdl-slider.is-upgraded:disabled:focus::-ms-thumb,\n.mdl-slider.is-upgraded:disabled:active::-ms-thumb,\n.mdl-slider.is-upgraded:disabled::-ms-thumb {\n  -ms-transform: scale(0.25);\n  transform: scale(0.25);\n  background: rgba(0, 0, 0, 0.26);\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-ms-thumb,\n.mdl-slider.is-upgraded.is-lowest-value:disabled:active::-ms-thumb,\n.mdl-slider.is-upgraded.is-lowest-value:disabled::-ms-thumb {\n  -ms-transform: scale(0.25);\n  transform: scale(0.25);\n  background: radial-gradient(circle closest-side, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.26) 50%, rgba(0, 0, 0, 0.26) 100%);\n}\n\n.mdl-slider.is-upgraded:disabled::-ms-fill-lower {\n  margin-right: 6px;\n  background: linear-gradient(to right, transparent, transparent 25px, rgba(0, 0, 0, 0.26) 25px, rgba(0, 0, 0, 0.26) 0);\n}\n\n.mdl-slider.is-upgraded:disabled::-ms-fill-upper {\n  margin-left: 6px;\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:disabled:active::-ms-fill-upper {\n  margin-left: 6px;\n}\n\n.mdl-slider__ie-container {\n  height: 18px;\n  overflow: visible;\n  border: none;\n  margin: none;\n  padding: none;\n}\n\n.mdl-slider__container {\n  height: 18px;\n  position: relative;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n\n.mdl-slider__container,\n.mdl-slider__background-flex {\n  background: 0 0;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.mdl-slider__background-flex {\n  position: absolute;\n  height: 2px;\n  width: calc(100% - 52px);\n  top: 50%;\n  left: 0;\n  margin: 0 26px;\n  overflow: hidden;\n  border: 0;\n  padding: 0;\n  -webkit-transform: translate(0, -1px);\n  -ms-transform: translate(0, -1px);\n  transform: translate(0, -1px);\n}\n\n.mdl-slider__background-lower {\n  background: #00bcd4;\n}\n\n.mdl-slider__background-lower,\n.mdl-slider__background-upper {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0;\n  -ms-flex: 0;\n  flex: 0;\n  position: relative;\n  border: 0;\n  padding: 0;\n}\n\n.mdl-slider__background-upper {\n  background: rgba(0, 0, 0, 0.26);\n  -webkit-transition: left 0.18s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: left 0.18s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdl-spinner {\n  display: inline-block;\n  position: relative;\n  width: 28px;\n  height: 28px;\n}\n\n.mdl-spinner:not(.is-upgraded).is-active:after {\n  content: \"Loading...\";\n}\n\n.mdl-spinner.is-upgraded.is-active {\n  -webkit-animation: mdl-spinner__container-rotate 1568.23529412ms linear infinite;\n  animation: mdl-spinner__container-rotate 1568.23529412ms linear infinite;\n}\n\n@-webkit-keyframes mdl-spinner__container-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes mdl-spinner__container-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.mdl-spinner__layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n\n.mdl-spinner__layer-1 {\n  border-color: #42a5f5;\n}\n\n.mdl-spinner--single-color .mdl-spinner__layer-1 {\n  border-color: #00bcd4;\n}\n\n.mdl-spinner.is-active .mdl-spinner__layer-1 {\n  -webkit-animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.mdl-spinner__layer-2 {\n  border-color: #f44336;\n}\n\n.mdl-spinner--single-color .mdl-spinner__layer-2 {\n  border-color: #00bcd4;\n}\n\n.mdl-spinner.is-active .mdl-spinner__layer-2 {\n  -webkit-animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.mdl-spinner__layer-3 {\n  border-color: #fdd835;\n}\n\n.mdl-spinner--single-color .mdl-spinner__layer-3 {\n  border-color: #00bcd4;\n}\n\n.mdl-spinner.is-active .mdl-spinner__layer-3 {\n  -webkit-animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.mdl-spinner__layer-4 {\n  border-color: #4caf50;\n}\n\n.mdl-spinner--single-color .mdl-spinner__layer-4 {\n  border-color: #00bcd4;\n}\n\n.mdl-spinner.is-active .mdl-spinner__layer-4 {\n  -webkit-animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n@-webkit-keyframes mdl-spinner__fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n    transform: rotate(135deg);\n  }\n\n  25% {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg);\n  }\n\n  37.5% {\n    -webkit-transform: rotate(405deg);\n    transform: rotate(405deg);\n  }\n\n  50% {\n    -webkit-transform: rotate(540deg);\n    transform: rotate(540deg);\n  }\n\n  62.5% {\n    -webkit-transform: rotate(675deg);\n    transform: rotate(675deg);\n  }\n\n  75% {\n    -webkit-transform: rotate(810deg);\n    transform: rotate(810deg);\n  }\n\n  87.5% {\n    -webkit-transform: rotate(945deg);\n    transform: rotate(945deg);\n  }\n\n  to {\n    -webkit-transform: rotate(1080deg);\n    transform: rotate(1080deg);\n  }\n}\n\n@keyframes mdl-spinner__fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n    transform: rotate(135deg);\n  }\n\n  25% {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg);\n  }\n\n  37.5% {\n    -webkit-transform: rotate(405deg);\n    transform: rotate(405deg);\n  }\n\n  50% {\n    -webkit-transform: rotate(540deg);\n    transform: rotate(540deg);\n  }\n\n  62.5% {\n    -webkit-transform: rotate(675deg);\n    transform: rotate(675deg);\n  }\n\n  75% {\n    -webkit-transform: rotate(810deg);\n    transform: rotate(810deg);\n  }\n\n  87.5% {\n    -webkit-transform: rotate(945deg);\n    transform: rotate(945deg);\n  }\n\n  to {\n    -webkit-transform: rotate(1080deg);\n    transform: rotate(1080deg);\n  }\n}\n\n@-webkit-keyframes mdl-spinner__layer-1-fade-in-out {\n  from, 25% {\n    opacity: .99;\n  }\n\n  26%, 89% {\n    opacity: 0;\n  }\n\n  90%, 100% {\n    opacity: .99;\n  }\n}\n\n@keyframes mdl-spinner__layer-1-fade-in-out {\n  from, 25% {\n    opacity: .99;\n  }\n\n  26%, 89% {\n    opacity: 0;\n  }\n\n  90%, 100% {\n    opacity: .99;\n  }\n}\n\n@-webkit-keyframes mdl-spinner__layer-2-fade-in-out {\n  from, 15% {\n    opacity: 0;\n  }\n\n  25%, 50% {\n    opacity: .99;\n  }\n\n  51% {\n    opacity: 0;\n  }\n}\n\n@keyframes mdl-spinner__layer-2-fade-in-out {\n  from, 15% {\n    opacity: 0;\n  }\n\n  25%, 50% {\n    opacity: .99;\n  }\n\n  51% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes mdl-spinner__layer-3-fade-in-out {\n  from, 40% {\n    opacity: 0;\n  }\n\n  50%, 75% {\n    opacity: .99;\n  }\n\n  76% {\n    opacity: 0;\n  }\n}\n\n@keyframes mdl-spinner__layer-3-fade-in-out {\n  from, 40% {\n    opacity: 0;\n  }\n\n  50%, 75% {\n    opacity: .99;\n  }\n\n  76% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes mdl-spinner__layer-4-fade-in-out {\n  from, 65% {\n    opacity: 0;\n  }\n\n  75%, 90% {\n    opacity: .99;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes mdl-spinner__layer-4-fade-in-out {\n  from, 65% {\n    opacity: 0;\n  }\n\n  75%, 90% {\n    opacity: .99;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n.mdl-spinner__gap-patch {\n  position: absolute;\n  box-sizing: border-box;\n  top: 0;\n  left: 45%;\n  width: 10%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit;\n}\n\n.mdl-spinner__gap-patch .mdl-spinner__circle {\n  width: 1000%;\n  left: -450%;\n}\n\n.mdl-spinner__circle-clipper {\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit;\n}\n\n.mdl-spinner__circle-clipper .mdl-spinner__circle {\n  width: 200%;\n}\n\n.mdl-spinner__circle {\n  box-sizing: border-box;\n  height: 100%;\n  border-width: 3px;\n  border-style: solid;\n  border-color: inherit;\n  border-bottom-color: transparent !important;\n  border-radius: 50%;\n  -webkit-animation: none;\n  animation: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.mdl-spinner__left .mdl-spinner__circle {\n  border-right-color: transparent !important;\n  -webkit-transform: rotate(129deg);\n  -ms-transform: rotate(129deg);\n  transform: rotate(129deg);\n}\n\n.mdl-spinner.is-active .mdl-spinner__left .mdl-spinner__circle {\n  -webkit-animation: mdl-spinner__left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: mdl-spinner__left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.mdl-spinner__right .mdl-spinner__circle {\n  left: -100%;\n  border-left-color: transparent !important;\n  -webkit-transform: rotate(-129deg);\n  -ms-transform: rotate(-129deg);\n  transform: rotate(-129deg);\n}\n\n.mdl-spinner.is-active .mdl-spinner__right .mdl-spinner__circle {\n  -webkit-animation: mdl-spinner__right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: mdl-spinner__right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n@-webkit-keyframes mdl-spinner__left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n    transform: rotate(130deg);\n  }\n\n  50% {\n    -webkit-transform: rotate(-5deg);\n    transform: rotate(-5deg);\n  }\n\n  to {\n    -webkit-transform: rotate(130deg);\n    transform: rotate(130deg);\n  }\n}\n\n@keyframes mdl-spinner__left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n    transform: rotate(130deg);\n  }\n\n  50% {\n    -webkit-transform: rotate(-5deg);\n    transform: rotate(-5deg);\n  }\n\n  to {\n    -webkit-transform: rotate(130deg);\n    transform: rotate(130deg);\n  }\n}\n\n@-webkit-keyframes mdl-spinner__right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n    transform: rotate(-130deg);\n  }\n\n  50% {\n    -webkit-transform: rotate(5deg);\n    transform: rotate(5deg);\n  }\n\n  to {\n    -webkit-transform: rotate(-130deg);\n    transform: rotate(-130deg);\n  }\n}\n\n@keyframes mdl-spinner__right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n    transform: rotate(-130deg);\n  }\n\n  50% {\n    -webkit-transform: rotate(5deg);\n    transform: rotate(5deg);\n  }\n\n  to {\n    -webkit-transform: rotate(-130deg);\n    transform: rotate(-130deg);\n  }\n}\n\n.mdl-switch {\n  position: relative;\n  z-index: 1;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 24px;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.mdl-switch.is-upgraded {\n  padding-left: 28px;\n}\n\n.mdl-switch__input {\n  line-height: 24px;\n}\n\n.mdl-switch.is-upgraded .mdl-switch__input {\n  position: absolute;\n  width: 0;\n  height: 0;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  -ms-appearance: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  border: none;\n}\n\n.mdl-switch__track {\n  background: rgba(0, 0, 0, 0.26);\n  position: absolute;\n  left: 0;\n  top: 5px;\n  height: 14px;\n  width: 36px;\n  border-radius: 14px;\n  cursor: pointer;\n}\n\n.mdl-switch.is-checked .mdl-switch__track {\n  background: rgba(0, 188, 212, 0.5);\n}\n\n.mdl-switch.is-disabled .mdl-switch__track {\n  background: rgba(0, 0, 0, 0.12);\n  cursor: auto;\n}\n\n.mdl-switch__thumb {\n  background: #fafafa;\n  position: absolute;\n  left: 0;\n  top: 2px;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  -webkit-transition-duration: .28s;\n  transition-duration: .28s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-property: left;\n  transition-property: left;\n}\n\n.mdl-switch.is-checked .mdl-switch__thumb {\n  background: #00bcd4;\n  left: 16px;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.12);\n}\n\n.mdl-switch.is-disabled .mdl-switch__thumb {\n  background: #bdbdbd;\n  cursor: auto;\n}\n\n.mdl-switch__focus-helper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-4px, -4px);\n  -ms-transform: translate(-4px, -4px);\n  transform: translate(-4px, -4px);\n  display: inline-block;\n  box-sizing: border-box;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: transparent;\n}\n\n.mdl-switch.is-focused .mdl-switch__focus-helper {\n  box-shadow: 0 0 0 20px rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.mdl-switch.is-focused.is-checked .mdl-switch__focus-helper {\n  box-shadow: 0 0 0 20px rgba(0, 188, 212, 0.26);\n  background-color: rgba(0, 188, 212, 0.26);\n}\n\n.mdl-switch__label {\n  position: relative;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 24px;\n  margin: 0;\n  left: 24px;\n}\n\n.mdl-switch.is-disabled .mdl-switch__label {\n  color: #bdbdbd;\n  cursor: auto;\n}\n\n.mdl-switch__ripple-container {\n  position: absolute;\n  z-index: 2;\n  top: -12px;\n  left: -14px;\n  box-sizing: border-box;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  cursor: pointer;\n  overflow: hidden;\n  -webkit-mask-image: -webkit-radial-gradient(circle, #fff, #000);\n  -webkit-transition-duration: .4s;\n  transition-duration: .4s;\n  -webkit-transition-timing-function: step-end;\n  transition-timing-function: step-end;\n  -webkit-transition-property: left;\n  transition-property: left;\n}\n\n.mdl-switch__ripple-container .mdl-ripple {\n  background: #00bcd4;\n}\n\n.mdl-switch.is-disabled .mdl-switch__ripple-container {\n  cursor: auto;\n}\n\n.mdl-switch.is-disabled .mdl-switch__ripple-container .mdl-ripple {\n  background: 0 0;\n}\n\n.mdl-switch.is-checked .mdl-switch__ripple-container {\n  cursor: auto;\n  left: 2px;\n}\n\n.mdl-tabs {\n  display: block;\n  width: 100%;\n}\n\n.mdl-tabs__tab-bar {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-align-content: space-between;\n  -ms-flex-line-pack: justify;\n  align-content: space-between;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  height: 48px;\n  padding: 0;\n  margin: 0;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.mdl-tabs__tab {\n  margin: 0;\n  border: none;\n  padding: 0 24px;\n  float: left;\n  position: relative;\n  display: block;\n  color: red;\n  text-decoration: none;\n  height: 48px;\n  line-height: 48px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: rgba(0, 0, 0, 0.54);\n  overflow: hidden;\n}\n\n.mdl-tabs.is-upgraded .mdl-tabs__tab.is-active {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.mdl-tabs.is-upgraded .mdl-tabs__tab.is-active:after {\n  height: 2px;\n  width: 100%;\n  display: block;\n  content: \" \";\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  background: #00bcd4;\n  -webkit-animation: border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) 0.01s alternate forwards;\n  animation: border-expand 0.2s cubic-bezier(0.4, 0, 0.4, 1) 0.01s alternate forwards;\n  -webkit-transition: all 1s cubic-bezier(0.4, 0, 1, 1);\n  transition: all 1s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.mdl-tabs__tab .mdl-tabs__ripple-container {\n  display: block;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.mdl-tabs__tab .mdl-tabs__ripple-container .mdl-ripple {\n  background: #00bcd4;\n}\n\n.mdl-tabs__panel {\n  display: block;\n}\n\n.mdl-tabs.is-upgraded .mdl-tabs__panel {\n  display: none;\n}\n\n.mdl-tabs.is-upgraded .mdl-tabs__panel.is-active {\n  display: block;\n}\n\n@-webkit-keyframes border-expand {\n  0% {\n    opacity: 0;\n    width: 0;\n  }\n\n  100% {\n    opacity: 1;\n    width: 100%;\n  }\n}\n\n@keyframes border-expand {\n  0% {\n    opacity: 0;\n    width: 0;\n  }\n\n  100% {\n    opacity: 1;\n    width: 100%;\n  }\n}\n\n.mdl-textfield {\n  position: relative;\n  font-size: 16px;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 300px;\n  max-width: 100%;\n  margin: 0;\n  padding: 20px 0;\n}\n\n.mdl-textfield .mdl-button {\n  position: absolute;\n  bottom: 20px;\n}\n\n.mdl-textfield--align-right {\n  text-align: right;\n}\n\n.mdl-textfield--full-width {\n  width: 100%;\n}\n\n.mdl-textfield--expandable {\n  min-width: 32px;\n  width: auto;\n  min-height: 32px;\n}\n\n.mdl-textfield__input {\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  display: block;\n  font-size: 16px;\n  margin: 0;\n  padding: 4px 0;\n  width: 100%;\n  background: 0 0;\n  text-align: left;\n  color: inherit;\n}\n\n.mdl-textfield.is-focused .mdl-textfield__input {\n  outline: none;\n}\n\n.mdl-textfield.is-invalid .mdl-textfield__input {\n  border-color: #de3226;\n  box-shadow: none;\n}\n\n.mdl-textfield.is-disabled .mdl-textfield__input {\n  background-color: transparent;\n  border-bottom: 1px dotted rgba(0, 0, 0, 0.12);\n  color: rgba(0, 0, 0, 0.26);\n}\n\n.mdl-textfield textarea.mdl-textfield__input {\n  display: block;\n}\n\n.mdl-textfield__label {\n  bottom: 0;\n  color: rgba(0, 0, 0, 0.26);\n  font-size: 16px;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  position: absolute;\n  display: block;\n  top: 24px;\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: left;\n}\n\n.mdl-textfield.is-dirty .mdl-textfield__label {\n  visibility: hidden;\n}\n\n.mdl-textfield--floating-label .mdl-textfield__label {\n  -webkit-transition-duration: .2s;\n  transition-duration: .2s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mdl-textfield.is-disabled.is-disabled .mdl-textfield__label {\n  color: rgba(0, 0, 0, 0.26);\n}\n\n.mdl-textfield--floating-label.is-focused .mdl-textfield__label,\n.mdl-textfield--floating-label.is-dirty .mdl-textfield__label {\n  color: #00bcd4;\n  font-size: 12px;\n  top: 4px;\n  visibility: visible;\n}\n\n.mdl-textfield--floating-label.is-focused .mdl-textfield__expandable-holder .mdl-textfield__label,\n.mdl-textfield--floating-label.is-dirty .mdl-textfield__expandable-holder .mdl-textfield__label {\n  top: -16px;\n}\n\n.mdl-textfield--floating-label.is-invalid .mdl-textfield__label {\n  color: #de3226;\n  font-size: 12px;\n}\n\n.mdl-textfield__label:after {\n  background-color: #00bcd4;\n  bottom: 20px;\n  content: '';\n  height: 2px;\n  left: 45%;\n  position: absolute;\n  -webkit-transition-duration: .2s;\n  transition-duration: .2s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  visibility: hidden;\n  width: 10px;\n}\n\n.mdl-textfield.is-focused .mdl-textfield__label:after {\n  left: 0;\n  visibility: visible;\n  width: 100%;\n}\n\n.mdl-textfield.is-invalid .mdl-textfield__label:after {\n  background-color: #de3226;\n}\n\n.mdl-textfield__error {\n  color: #de3226;\n  position: absolute;\n  font-size: 12px;\n  margin-top: 3px;\n  visibility: hidden;\n  display: block;\n}\n\n.mdl-textfield.is-invalid .mdl-textfield__error {\n  visibility: visible;\n}\n\n.mdl-textfield__expandable-holder {\n  position: relative;\n  margin-left: 32px;\n  -webkit-transition-duration: .2s;\n  transition-duration: .2s;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-block;\n  max-width: .1px;\n}\n\n.mdl-textfield.is-focused .mdl-textfield__expandable-holder,\n.mdl-textfield.is-dirty .mdl-textfield__expandable-holder {\n  max-width: 600px;\n}\n\n.mdl-textfield__expandable-holder .mdl-textfield__label:after {\n  bottom: 0;\n}\n\n.mdl-tooltip {\n  -webkit-transform: scale(0);\n  -ms-transform: scale(0);\n  transform: scale(0);\n  -webkit-transform-origin: top center;\n  -ms-transform-origin: top center;\n  transform-origin: top center;\n  will-change: transform;\n  z-index: 999;\n  background: rgba(97, 97, 97, 0.9);\n  border-radius: 2px;\n  color: #fff;\n  display: inline-block;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 14px;\n  max-width: 170px;\n  position: fixed;\n  top: -500px;\n  left: -500px;\n  padding: 8px;\n  text-align: center;\n}\n\n.mdl-tooltip.is-active {\n  -webkit-animation: pulse 200ms cubic-bezier(0, 0, 0.2, 1) forwards;\n  animation: pulse 200ms cubic-bezier(0, 0, 0.2, 1) forwards;\n}\n\n.mdl-tooltip--large {\n  line-height: 14px;\n  font-size: 14px;\n  padding: 16px;\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    opacity: 0;\n  }\n\n  50% {\n    -webkit-transform: scale(0.99);\n    transform: scale(0.99);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n    visibility: visible;\n  }\n}\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    opacity: 0;\n  }\n\n  50% {\n    -webkit-transform: scale(0.99);\n    transform: scale(0.99);\n  }\n\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1;\n    visibility: visible;\n  }\n}\n\n.mdl-shadow--2dp {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.mdl-shadow--3dp {\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.12);\n}\n\n.mdl-shadow--4dp {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n}\n\n.mdl-shadow--6dp {\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);\n}\n\n.mdl-shadow--8dp {\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\n}\n\n.mdl-shadow--16dp {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.mdl-grid {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n  -ms-flex-flow: row wrap;\n  flex-flow: row wrap;\n  margin: 0 auto;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n}\n\n.mdl-grid.mdl-grid--no-spacing {\n  padding: 0;\n}\n\n.mdl-cell {\n  box-sizing: border-box;\n}\n\n.mdl-cell--top {\n  -webkit-align-self: flex-start;\n  -ms-flex-item-align: start;\n  align-self: flex-start;\n}\n\n.mdl-cell--middle {\n  -webkit-align-self: center;\n  -ms-flex-item-align: center;\n  align-self: center;\n}\n\n.mdl-cell--bottom {\n  -webkit-align-self: flex-end;\n  -ms-flex-item-align: end;\n  align-self: flex-end;\n}\n\n.mdl-cell--stretch {\n  -webkit-align-self: stretch;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n}\n\n.mdl-grid.mdl-grid--no-spacing > .mdl-cell {\n  margin: 0;\n}\n\n@media (max-width: 479px) {\n  .mdl-grid {\n    padding: 0;\n  }\n\n  .mdl-cell {\n    margin: 16px;\n    width: calc(100% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell {\n    width: 100%;\n  }\n\n  .mdl-cell--hide-phone {\n    display: none !important;\n  }\n\n  .mdl-cell--1-col,\n  .mdl-cell--1-col-phone.mdl-cell--1-col-phone {\n    width: calc(25% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--1-col,\n  .mdl-grid--no-spacing > .mdl-cell--1-col-phone.mdl-cell--1-col-phone {\n    width: 25%;\n  }\n\n  .mdl-cell--2-col,\n  .mdl-cell--2-col-phone.mdl-cell--2-col-phone {\n    width: calc(50% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--2-col,\n  .mdl-grid--no-spacing > .mdl-cell--2-col-phone.mdl-cell--2-col-phone {\n    width: 50%;\n  }\n\n  .mdl-cell--3-col,\n  .mdl-cell--3-col-phone.mdl-cell--3-col-phone {\n    width: calc(75% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--3-col,\n  .mdl-grid--no-spacing > .mdl-cell--3-col-phone.mdl-cell--3-col-phone {\n    width: 75%;\n  }\n\n  .mdl-cell--4-col,\n  .mdl-cell--4-col-phone.mdl-cell--4-col-phone {\n    width: calc(100% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--4-col,\n  .mdl-grid--no-spacing > .mdl-cell--4-col-phone.mdl-cell--4-col-phone {\n    width: 100%;\n  }\n\n  .mdl-cell--5-col,\n  .mdl-cell--5-col-phone.mdl-cell--5-col-phone {\n    width: calc(100% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--5-col,\n  .mdl-grid--no-spacing > .mdl-cell--5-col-phone.mdl-cell--5-col-phone {\n    width: 100%;\n  }\n\n  .mdl-cell--6-col,\n  .mdl-cell--6-col-phone.mdl-cell--6-col-phone {\n    width: calc(100% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--6-col,\n  .mdl-grid--no-spacing > .mdl-cell--6-col-phone.mdl-cell--6-col-phone {\n    width: 100%;\n  }\n\n  .mdl-cell--7-col,\n  .mdl-cell--7-col-phone.mdl-cell--7-col-phone {\n    width: calc(100% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--7-col,\n  .mdl-grid--no-spacing > .mdl-cell--7-col-phone.mdl-cell--7-col-phone {\n    width: 100%;\n  }\n\n  .mdl-cell--8-col,\n  .mdl-cell--8-col-phone.mdl-cell--8-col-phone {\n    width: calc(100% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--8-col,\n  .mdl-grid--no-spacing > .mdl-cell--8-col-phone.mdl-cell--8-col-phone {\n    width: 100%;\n  }\n\n  .mdl-cell--9-col,\n  .mdl-cell--9-col-phone.mdl-cell--9-col-phone {\n    width: calc(100% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--9-col,\n  .mdl-grid--no-spacing > .mdl-cell--9-col-phone.mdl-cell--9-col-phone {\n    width: 100%;\n  }\n\n  .mdl-cell--10-col,\n  .mdl-cell--10-col-phone.mdl-cell--10-col-phone {\n    width: calc(100% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--10-col,\n  .mdl-grid--no-spacing > .mdl-cell--10-col-phone.mdl-cell--10-col-phone {\n    width: 100%;\n  }\n\n  .mdl-cell--11-col,\n  .mdl-cell--11-col-phone.mdl-cell--11-col-phone {\n    width: calc(100% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--11-col,\n  .mdl-grid--no-spacing > .mdl-cell--11-col-phone.mdl-cell--11-col-phone {\n    width: 100%;\n  }\n\n  .mdl-cell--12-col,\n  .mdl-cell--12-col-phone.mdl-cell--12-col-phone {\n    width: calc(100% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--12-col,\n  .mdl-grid--no-spacing > .mdl-cell--12-col-phone.mdl-cell--12-col-phone {\n    width: 100%;\n  }\n}\n\n@media (min-width: 480px) and (max-width: 839px) {\n  .mdl-grid {\n    padding: 0;\n  }\n\n  .mdl-cell {\n    margin: 16px;\n    width: calc(50% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell {\n    width: 50%;\n  }\n\n  .mdl-cell--hide-tablet {\n    display: none !important;\n  }\n\n  .mdl-cell--1-col,\n  .mdl-cell--1-col-tablet.mdl-cell--1-col-tablet {\n    width: calc(12.5% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--1-col,\n  .mdl-grid--no-spacing > .mdl-cell--1-col-tablet.mdl-cell--1-col-tablet {\n    width: 12.5%;\n  }\n\n  .mdl-cell--2-col,\n  .mdl-cell--2-col-tablet.mdl-cell--2-col-tablet {\n    width: calc(25% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--2-col,\n  .mdl-grid--no-spacing > .mdl-cell--2-col-tablet.mdl-cell--2-col-tablet {\n    width: 25%;\n  }\n\n  .mdl-cell--3-col,\n  .mdl-cell--3-col-tablet.mdl-cell--3-col-tablet {\n    width: calc(37.5% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--3-col,\n  .mdl-grid--no-spacing > .mdl-cell--3-col-tablet.mdl-cell--3-col-tablet {\n    width: 37.5%;\n  }\n\n  .mdl-cell--4-col,\n  .mdl-cell--4-col-tablet.mdl-cell--4-col-tablet {\n    width: calc(50% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--4-col,\n  .mdl-grid--no-spacing > .mdl-cell--4-col-tablet.mdl-cell--4-col-tablet {\n    width: 50%;\n  }\n\n  .mdl-cell--5-col,\n  .mdl-cell--5-col-tablet.mdl-cell--5-col-tablet {\n    width: calc(62.5% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--5-col,\n  .mdl-grid--no-spacing > .mdl-cell--5-col-tablet.mdl-cell--5-col-tablet {\n    width: 62.5%;\n  }\n\n  .mdl-cell--6-col,\n  .mdl-cell--6-col-tablet.mdl-cell--6-col-tablet {\n    width: calc(75% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--6-col,\n  .mdl-grid--no-spacing > .mdl-cell--6-col-tablet.mdl-cell--6-col-tablet {\n    width: 75%;\n  }\n\n  .mdl-cell--7-col,\n  .mdl-cell--7-col-tablet.mdl-cell--7-col-tablet {\n    width: calc(87.5% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--7-col,\n  .mdl-grid--no-spacing > .mdl-cell--7-col-tablet.mdl-cell--7-col-tablet {\n    width: 87.5%;\n  }\n\n  .mdl-cell--8-col,\n  .mdl-cell--8-col-tablet.mdl-cell--8-col-tablet {\n    width: calc(100% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--8-col,\n  .mdl-grid--no-spacing > .mdl-cell--8-col-tablet.mdl-cell--8-col-tablet {\n    width: 100%;\n  }\n\n  .mdl-cell--9-col,\n  .mdl-cell--9-col-tablet.mdl-cell--9-col-tablet {\n    width: calc(100% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--9-col,\n  .mdl-grid--no-spacing > .mdl-cell--9-col-tablet.mdl-cell--9-col-tablet {\n    width: 100%;\n  }\n\n  .mdl-cell--10-col,\n  .mdl-cell--10-col-tablet.mdl-cell--10-col-tablet {\n    width: calc(100% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--10-col,\n  .mdl-grid--no-spacing > .mdl-cell--10-col-tablet.mdl-cell--10-col-tablet {\n    width: 100%;\n  }\n\n  .mdl-cell--11-col,\n  .mdl-cell--11-col-tablet.mdl-cell--11-col-tablet {\n    width: calc(100% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--11-col,\n  .mdl-grid--no-spacing > .mdl-cell--11-col-tablet.mdl-cell--11-col-tablet {\n    width: 100%;\n  }\n\n  .mdl-cell--12-col,\n  .mdl-cell--12-col-tablet.mdl-cell--12-col-tablet {\n    width: calc(100% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--12-col,\n  .mdl-grid--no-spacing > .mdl-cell--12-col-tablet.mdl-cell--12-col-tablet {\n    width: 100%;\n  }\n}\n\n@media (min-width: 840px) {\n  .mdl-grid {\n    padding: 0;\n  }\n\n  .mdl-cell {\n    margin: 16px;\n    width: calc(33.3333333333% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell {\n    width: 33.3333333333%;\n  }\n\n  .mdl-cell--hide-desktop {\n    display: none !important;\n  }\n\n  .mdl-cell--1-col,\n  .mdl-cell--1-col-desktop.mdl-cell--1-col-desktop {\n    width: calc(8.3333333333% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--1-col,\n  .mdl-grid--no-spacing > .mdl-cell--1-col-desktop.mdl-cell--1-col-desktop {\n    width: 8.3333333333%;\n  }\n\n  .mdl-cell--2-col,\n  .mdl-cell--2-col-desktop.mdl-cell--2-col-desktop {\n    width: calc(16.6666666667% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--2-col,\n  .mdl-grid--no-spacing > .mdl-cell--2-col-desktop.mdl-cell--2-col-desktop {\n    width: 16.6666666667%;\n  }\n\n  .mdl-cell--3-col,\n  .mdl-cell--3-col-desktop.mdl-cell--3-col-desktop {\n    width: calc(25% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--3-col,\n  .mdl-grid--no-spacing > .mdl-cell--3-col-desktop.mdl-cell--3-col-desktop {\n    width: 25%;\n  }\n\n  .mdl-cell--4-col,\n  .mdl-cell--4-col-desktop.mdl-cell--4-col-desktop {\n    width: calc(33.3333333333% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--4-col,\n  .mdl-grid--no-spacing > .mdl-cell--4-col-desktop.mdl-cell--4-col-desktop {\n    width: 33.3333333333%;\n  }\n\n  .mdl-cell--5-col,\n  .mdl-cell--5-col-desktop.mdl-cell--5-col-desktop {\n    width: calc(41.6666666667% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--5-col,\n  .mdl-grid--no-spacing > .mdl-cell--5-col-desktop.mdl-cell--5-col-desktop {\n    width: 41.6666666667%;\n  }\n\n  .mdl-cell--6-col,\n  .mdl-cell--6-col-desktop.mdl-cell--6-col-desktop {\n    width: calc(50% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--6-col,\n  .mdl-grid--no-spacing > .mdl-cell--6-col-desktop.mdl-cell--6-col-desktop {\n    width: 50%;\n  }\n\n  .mdl-cell--7-col,\n  .mdl-cell--7-col-desktop.mdl-cell--7-col-desktop {\n    width: calc(58.3333333333% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--7-col,\n  .mdl-grid--no-spacing > .mdl-cell--7-col-desktop.mdl-cell--7-col-desktop {\n    width: 58.3333333333%;\n  }\n\n  .mdl-cell--8-col,\n  .mdl-cell--8-col-desktop.mdl-cell--8-col-desktop {\n    width: calc(66.6666666667% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--8-col,\n  .mdl-grid--no-spacing > .mdl-cell--8-col-desktop.mdl-cell--8-col-desktop {\n    width: 66.6666666667%;\n  }\n\n  .mdl-cell--9-col,\n  .mdl-cell--9-col-desktop.mdl-cell--9-col-desktop {\n    width: calc(75% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--9-col,\n  .mdl-grid--no-spacing > .mdl-cell--9-col-desktop.mdl-cell--9-col-desktop {\n    width: 75%;\n  }\n\n  .mdl-cell--10-col,\n  .mdl-cell--10-col-desktop.mdl-cell--10-col-desktop {\n    width: calc(83.3333333333% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--10-col,\n  .mdl-grid--no-spacing > .mdl-cell--10-col-desktop.mdl-cell--10-col-desktop {\n    width: 83.3333333333%;\n  }\n\n  .mdl-cell--11-col,\n  .mdl-cell--11-col-desktop.mdl-cell--11-col-desktop {\n    width: calc(91.6666666667% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--11-col,\n  .mdl-grid--no-spacing > .mdl-cell--11-col-desktop.mdl-cell--11-col-desktop {\n    width: 91.6666666667%;\n  }\n\n  .mdl-cell--12-col,\n  .mdl-cell--12-col-desktop.mdl-cell--12-col-desktop {\n    width: calc(100% - 32px);\n  }\n\n  .mdl-grid--no-spacing > .mdl-cell--12-col,\n  .mdl-grid--no-spacing > .mdl-cell--12-col-desktop.mdl-cell--12-col-desktop {\n    width: 100%;\n  }\n}\n\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/resolve-url-loader/index.js!./../../../node_modules/sass-loader/index.js?sourceMap!./template.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/resolve-url-loader/index.js!./../../../node_modules/sass-loader/index.js?sourceMap!./template.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\nhtml,\nbody {\n  font-family: 'Roboto', 'Helvetica', sans-serif;\n}\n\n.demo-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 24px;\n}\n\n.demo-layout .demo-header .mdl-textfield {\n  padding-top: 27px;\n}\n\n.demo-layout .mdl-layout__header .mdl-layout__drawer-button {\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.mdl-layout__drawer .avatar {\n  margin-bottom: 16px;\n}\n\n.demo-drawer {\n  border: none;\n}\n\n/* iOS Safari specific workaround */\n\n.demo-drawer .mdl-menu__container {\n  z-index: -1;\n}\n\n.demo-drawer .demo-navigation {\n  z-index: -2;\n}\n\n/* END iOS Safari specific workaround */\n\n.demo-drawer .mdl-menu .mdl-menu__item {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.demo-drawer-header {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  padding: 16px;\n  height: 151px;\n}\n\n.demo-avatar-dropdown {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n}\n\n.demo-navigation {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n}\n\n.demo-layout .demo-navigation .mdl-navigation__link {\n  display: -webkit-box !important;\n  display: -webkit-flex !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  color: rgba(255, 255, 255, 0.56);\n  font-weight: 500;\n}\n\n.demo-layout .demo-navigation .mdl-navigation__link:hover {\n  background-color: #00BCD4;\n  color: #37474F;\n}\n\n.demo-navigation .mdl-navigation__link .material-icons {\n  font-size: 24px;\n  color: rgba(255, 255, 255, 0.56);\n  margin-right: 32px;\n}\n\n.demo-content {\n  max-width: 1080px;\n}\n\n.demo-charts {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.demo-chart:nth-child(1) {\n  color: #ACEC00;\n}\n\n.demo-chart:nth-child(2) {\n  color: #00BBD6;\n}\n\n.demo-chart:nth-child(3) {\n  color: #BA65C9;\n}\n\n.demo-chart:nth-child(4) {\n  color: #EF3C79;\n}\n\n.demo-graphs {\n  padding: 16px 32px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n}\n\n/* TODO: Find a proper solution to have the graphs\n * not float around outside their container in IE10/11.\n * Using a browserhacks.com solution for now.\n */\n\n_:-ms-input-placeholder,\n:root .demo-graphs {\n  min-height: 664px;\n}\n\n_:-ms-input-placeholder,\n:root .demo-graph {\n  max-height: 300px;\n}\n\n/* TODO end */\n\n.demo-graph:nth-child(1) {\n  color: #00b9d8;\n}\n\n.demo-graph:nth-child(2) {\n  color: #d9006e;\n}\n\n.demo-cards {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  -webkit-align-content: flex-start;\n  -ms-flex-line-pack: start;\n  align-content: flex-start;\n}\n\n.demo-cards .demo-separator {\n  height: 32px;\n}\n\n.demo-cards .mdl-card__title.mdl-card__title {\n  color: white;\n  font-size: 24px;\n  font-weight: 400;\n}\n\n.demo-cards ul {\n  padding: 0;\n}\n\n.demo-cards h3 {\n  font-size: 1em;\n}\n\n.demo-updates .mdl-card__title {\n  min-height: 200px;\n  background-position: 90% 100%;\n  background-repeat: no-repeat;\n}\n\n.demo-cards .mdl-card__actions a {\n  color: #00BCD4;\n  text-decoration: none;\n}\n\n.demo-options h3 {\n  margin: 0;\n}\n\n.demo-options .mdl-checkbox__box-outline {\n  border-color: rgba(255, 255, 255, 0.89);\n}\n\n.demo-options ul {\n  margin: 0;\n  list-style-type: none;\n}\n\n.demo-options li {\n  margin: 4px 0;\n}\n\n.demo-options .material-icons {\n  color: rgba(255, 255, 255, 0.89);\n}\n\n.demo-options .mdl-card__actions {\n  height: 64px;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  box-sizing: border-box;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n", ""]);
	
	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/resolve-url-loader/index.js!./../../../node_modules/sass-loader/index.js?sourceMap!./custom.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/resolve-url-loader/index.js!./../../../node_modules/sass-loader/index.js?sourceMap!./custom.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * Materialize v0.97.7 (http://materializecss.com)\n * Copyright 2014-2015 Materialize\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\n */\n\n.materialize-red {\n  background-color: #e51c23 !important;\n}\n\n.materialize-red-text {\n  color: #e51c23 !important;\n}\n\n.materialize-red.lighten-5 {\n  background-color: #fdeaeb !important;\n}\n\n.materialize-red-text.text-lighten-5 {\n  color: #fdeaeb !important;\n}\n\n.materialize-red.lighten-4 {\n  background-color: #f8c1c3 !important;\n}\n\n.materialize-red-text.text-lighten-4 {\n  color: #f8c1c3 !important;\n}\n\n.materialize-red.lighten-3 {\n  background-color: #f3989b !important;\n}\n\n.materialize-red-text.text-lighten-3 {\n  color: #f3989b !important;\n}\n\n.materialize-red.lighten-2 {\n  background-color: #ee6e73 !important;\n}\n\n.materialize-red-text.text-lighten-2 {\n  color: #ee6e73 !important;\n}\n\n.materialize-red.lighten-1 {\n  background-color: #ea454b !important;\n}\n\n.materialize-red-text.text-lighten-1 {\n  color: #ea454b !important;\n}\n\n.materialize-red.darken-1 {\n  background-color: #d0181e !important;\n}\n\n.materialize-red-text.text-darken-1 {\n  color: #d0181e !important;\n}\n\n.materialize-red.darken-2 {\n  background-color: #b9151b !important;\n}\n\n.materialize-red-text.text-darken-2 {\n  color: #b9151b !important;\n}\n\n.materialize-red.darken-3 {\n  background-color: #a21318 !important;\n}\n\n.materialize-red-text.text-darken-3 {\n  color: #a21318 !important;\n}\n\n.materialize-red.darken-4 {\n  background-color: #8b1014 !important;\n}\n\n.materialize-red-text.text-darken-4 {\n  color: #8b1014 !important;\n}\n\n.red {\n  background-color: #F44336 !important;\n}\n\n.red-text {\n  color: #F44336 !important;\n}\n\n.red.lighten-5 {\n  background-color: #FFEBEE !important;\n}\n\n.red-text.text-lighten-5 {\n  color: #FFEBEE !important;\n}\n\n.red.lighten-4 {\n  background-color: #FFCDD2 !important;\n}\n\n.red-text.text-lighten-4 {\n  color: #FFCDD2 !important;\n}\n\n.red.lighten-3 {\n  background-color: #EF9A9A !important;\n}\n\n.red-text.text-lighten-3 {\n  color: #EF9A9A !important;\n}\n\n.red.lighten-2 {\n  background-color: #E57373 !important;\n}\n\n.red-text.text-lighten-2 {\n  color: #E57373 !important;\n}\n\n.red.lighten-1 {\n  background-color: #EF5350 !important;\n}\n\n.red-text.text-lighten-1 {\n  color: #EF5350 !important;\n}\n\n.red.darken-1 {\n  background-color: #E53935 !important;\n}\n\n.red-text.text-darken-1 {\n  color: #E53935 !important;\n}\n\n.red.darken-2 {\n  background-color: #D32F2F !important;\n}\n\n.red-text.text-darken-2 {\n  color: #D32F2F !important;\n}\n\n.red.darken-3 {\n  background-color: #C62828 !important;\n}\n\n.red-text.text-darken-3 {\n  color: #C62828 !important;\n}\n\n.red.darken-4 {\n  background-color: #B71C1C !important;\n}\n\n.red-text.text-darken-4 {\n  color: #B71C1C !important;\n}\n\n.red.accent-1 {\n  background-color: #FF8A80 !important;\n}\n\n.red-text.text-accent-1 {\n  color: #FF8A80 !important;\n}\n\n.red.accent-2 {\n  background-color: #FF5252 !important;\n}\n\n.red-text.text-accent-2 {\n  color: #FF5252 !important;\n}\n\n.red.accent-3 {\n  background-color: #FF1744 !important;\n}\n\n.red-text.text-accent-3 {\n  color: #FF1744 !important;\n}\n\n.red.accent-4 {\n  background-color: #D50000 !important;\n}\n\n.red-text.text-accent-4 {\n  color: #D50000 !important;\n}\n\n.pink {\n  background-color: #e91e63 !important;\n}\n\n.pink-text {\n  color: #e91e63 !important;\n}\n\n.pink.lighten-5 {\n  background-color: #fce4ec !important;\n}\n\n.pink-text.text-lighten-5 {\n  color: #fce4ec !important;\n}\n\n.pink.lighten-4 {\n  background-color: #f8bbd0 !important;\n}\n\n.pink-text.text-lighten-4 {\n  color: #f8bbd0 !important;\n}\n\n.pink.lighten-3 {\n  background-color: #f48fb1 !important;\n}\n\n.pink-text.text-lighten-3 {\n  color: #f48fb1 !important;\n}\n\n.pink.lighten-2 {\n  background-color: #f06292 !important;\n}\n\n.pink-text.text-lighten-2 {\n  color: #f06292 !important;\n}\n\n.pink.lighten-1 {\n  background-color: #ec407a !important;\n}\n\n.pink-text.text-lighten-1 {\n  color: #ec407a !important;\n}\n\n.pink.darken-1 {\n  background-color: #d81b60 !important;\n}\n\n.pink-text.text-darken-1 {\n  color: #d81b60 !important;\n}\n\n.pink.darken-2 {\n  background-color: #c2185b !important;\n}\n\n.pink-text.text-darken-2 {\n  color: #c2185b !important;\n}\n\n.pink.darken-3 {\n  background-color: #ad1457 !important;\n}\n\n.pink-text.text-darken-3 {\n  color: #ad1457 !important;\n}\n\n.pink.darken-4 {\n  background-color: #880e4f !important;\n}\n\n.pink-text.text-darken-4 {\n  color: #880e4f !important;\n}\n\n.pink.accent-1 {\n  background-color: #ff80ab !important;\n}\n\n.pink-text.text-accent-1 {\n  color: #ff80ab !important;\n}\n\n.pink.accent-2 {\n  background-color: #ff4081 !important;\n}\n\n.pink-text.text-accent-2 {\n  color: #ff4081 !important;\n}\n\n.pink.accent-3 {\n  background-color: #f50057 !important;\n}\n\n.pink-text.text-accent-3 {\n  color: #f50057 !important;\n}\n\n.pink.accent-4 {\n  background-color: #c51162 !important;\n}\n\n.pink-text.text-accent-4 {\n  color: #c51162 !important;\n}\n\n.purple {\n  background-color: #9c27b0 !important;\n}\n\n.purple-text {\n  color: #9c27b0 !important;\n}\n\n.purple.lighten-5 {\n  background-color: #f3e5f5 !important;\n}\n\n.purple-text.text-lighten-5 {\n  color: #f3e5f5 !important;\n}\n\n.purple.lighten-4 {\n  background-color: #e1bee7 !important;\n}\n\n.purple-text.text-lighten-4 {\n  color: #e1bee7 !important;\n}\n\n.purple.lighten-3 {\n  background-color: #ce93d8 !important;\n}\n\n.purple-text.text-lighten-3 {\n  color: #ce93d8 !important;\n}\n\n.purple.lighten-2 {\n  background-color: #ba68c8 !important;\n}\n\n.purple-text.text-lighten-2 {\n  color: #ba68c8 !important;\n}\n\n.purple.lighten-1 {\n  background-color: #ab47bc !important;\n}\n\n.purple-text.text-lighten-1 {\n  color: #ab47bc !important;\n}\n\n.purple.darken-1 {\n  background-color: #8e24aa !important;\n}\n\n.purple-text.text-darken-1 {\n  color: #8e24aa !important;\n}\n\n.purple.darken-2 {\n  background-color: #7b1fa2 !important;\n}\n\n.purple-text.text-darken-2 {\n  color: #7b1fa2 !important;\n}\n\n.purple.darken-3 {\n  background-color: #6a1b9a !important;\n}\n\n.purple-text.text-darken-3 {\n  color: #6a1b9a !important;\n}\n\n.purple.darken-4 {\n  background-color: #4a148c !important;\n}\n\n.purple-text.text-darken-4 {\n  color: #4a148c !important;\n}\n\n.purple.accent-1 {\n  background-color: #ea80fc !important;\n}\n\n.purple-text.text-accent-1 {\n  color: #ea80fc !important;\n}\n\n.purple.accent-2 {\n  background-color: #e040fb !important;\n}\n\n.purple-text.text-accent-2 {\n  color: #e040fb !important;\n}\n\n.purple.accent-3 {\n  background-color: #d500f9 !important;\n}\n\n.purple-text.text-accent-3 {\n  color: #d500f9 !important;\n}\n\n.purple.accent-4 {\n  background-color: #a0f !important;\n}\n\n.purple-text.text-accent-4 {\n  color: #a0f !important;\n}\n\n.deep-purple {\n  background-color: #673ab7 !important;\n}\n\n.deep-purple-text {\n  color: #673ab7 !important;\n}\n\n.deep-purple.lighten-5 {\n  background-color: #ede7f6 !important;\n}\n\n.deep-purple-text.text-lighten-5 {\n  color: #ede7f6 !important;\n}\n\n.deep-purple.lighten-4 {\n  background-color: #d1c4e9 !important;\n}\n\n.deep-purple-text.text-lighten-4 {\n  color: #d1c4e9 !important;\n}\n\n.deep-purple.lighten-3 {\n  background-color: #b39ddb !important;\n}\n\n.deep-purple-text.text-lighten-3 {\n  color: #b39ddb !important;\n}\n\n.deep-purple.lighten-2 {\n  background-color: #9575cd !important;\n}\n\n.deep-purple-text.text-lighten-2 {\n  color: #9575cd !important;\n}\n\n.deep-purple.lighten-1 {\n  background-color: #7e57c2 !important;\n}\n\n.deep-purple-text.text-lighten-1 {\n  color: #7e57c2 !important;\n}\n\n.deep-purple.darken-1 {\n  background-color: #5e35b1 !important;\n}\n\n.deep-purple-text.text-darken-1 {\n  color: #5e35b1 !important;\n}\n\n.deep-purple.darken-2 {\n  background-color: #512da8 !important;\n}\n\n.deep-purple-text.text-darken-2 {\n  color: #512da8 !important;\n}\n\n.deep-purple.darken-3 {\n  background-color: #4527a0 !important;\n}\n\n.deep-purple-text.text-darken-3 {\n  color: #4527a0 !important;\n}\n\n.deep-purple.darken-4 {\n  background-color: #311b92 !important;\n}\n\n.deep-purple-text.text-darken-4 {\n  color: #311b92 !important;\n}\n\n.deep-purple.accent-1 {\n  background-color: #b388ff !important;\n}\n\n.deep-purple-text.text-accent-1 {\n  color: #b388ff !important;\n}\n\n.deep-purple.accent-2 {\n  background-color: #7c4dff !important;\n}\n\n.deep-purple-text.text-accent-2 {\n  color: #7c4dff !important;\n}\n\n.deep-purple.accent-3 {\n  background-color: #651fff !important;\n}\n\n.deep-purple-text.text-accent-3 {\n  color: #651fff !important;\n}\n\n.deep-purple.accent-4 {\n  background-color: #6200ea !important;\n}\n\n.deep-purple-text.text-accent-4 {\n  color: #6200ea !important;\n}\n\n.indigo {\n  background-color: #3f51b5 !important;\n}\n\n.indigo-text {\n  color: #3f51b5 !important;\n}\n\n.indigo.lighten-5 {\n  background-color: #e8eaf6 !important;\n}\n\n.indigo-text.text-lighten-5 {\n  color: #e8eaf6 !important;\n}\n\n.indigo.lighten-4 {\n  background-color: #c5cae9 !important;\n}\n\n.indigo-text.text-lighten-4 {\n  color: #c5cae9 !important;\n}\n\n.indigo.lighten-3 {\n  background-color: #9fa8da !important;\n}\n\n.indigo-text.text-lighten-3 {\n  color: #9fa8da !important;\n}\n\n.indigo.lighten-2 {\n  background-color: #7986cb !important;\n}\n\n.indigo-text.text-lighten-2 {\n  color: #7986cb !important;\n}\n\n.indigo.lighten-1 {\n  background-color: #5c6bc0 !important;\n}\n\n.indigo-text.text-lighten-1 {\n  color: #5c6bc0 !important;\n}\n\n.indigo.darken-1 {\n  background-color: #3949ab !important;\n}\n\n.indigo-text.text-darken-1 {\n  color: #3949ab !important;\n}\n\n.indigo.darken-2 {\n  background-color: #303f9f !important;\n}\n\n.indigo-text.text-darken-2 {\n  color: #303f9f !important;\n}\n\n.indigo.darken-3 {\n  background-color: #283593 !important;\n}\n\n.indigo-text.text-darken-3 {\n  color: #283593 !important;\n}\n\n.indigo.darken-4 {\n  background-color: #1a237e !important;\n}\n\n.indigo-text.text-darken-4 {\n  color: #1a237e !important;\n}\n\n.indigo.accent-1 {\n  background-color: #8c9eff !important;\n}\n\n.indigo-text.text-accent-1 {\n  color: #8c9eff !important;\n}\n\n.indigo.accent-2 {\n  background-color: #536dfe !important;\n}\n\n.indigo-text.text-accent-2 {\n  color: #536dfe !important;\n}\n\n.indigo.accent-3 {\n  background-color: #3d5afe !important;\n}\n\n.indigo-text.text-accent-3 {\n  color: #3d5afe !important;\n}\n\n.indigo.accent-4 {\n  background-color: #304ffe !important;\n}\n\n.indigo-text.text-accent-4 {\n  color: #304ffe !important;\n}\n\n.blue {\n  background-color: #2196F3 !important;\n}\n\n.blue-text {\n  color: #2196F3 !important;\n}\n\n.blue.lighten-5 {\n  background-color: #E3F2FD !important;\n}\n\n.blue-text.text-lighten-5 {\n  color: #E3F2FD !important;\n}\n\n.blue.lighten-4 {\n  background-color: #BBDEFB !important;\n}\n\n.blue-text.text-lighten-4 {\n  color: #BBDEFB !important;\n}\n\n.blue.lighten-3 {\n  background-color: #90CAF9 !important;\n}\n\n.blue-text.text-lighten-3 {\n  color: #90CAF9 !important;\n}\n\n.blue.lighten-2 {\n  background-color: #64B5F6 !important;\n}\n\n.blue-text.text-lighten-2 {\n  color: #64B5F6 !important;\n}\n\n.blue.lighten-1 {\n  background-color: #42A5F5 !important;\n}\n\n.blue-text.text-lighten-1 {\n  color: #42A5F5 !important;\n}\n\n.blue.darken-1 {\n  background-color: #1E88E5 !important;\n}\n\n.blue-text.text-darken-1 {\n  color: #1E88E5 !important;\n}\n\n.blue.darken-2 {\n  background-color: #1976D2 !important;\n}\n\n.blue-text.text-darken-2 {\n  color: #1976D2 !important;\n}\n\n.blue.darken-3 {\n  background-color: #1565C0 !important;\n}\n\n.blue-text.text-darken-3 {\n  color: #1565C0 !important;\n}\n\n.blue.darken-4 {\n  background-color: #0D47A1 !important;\n}\n\n.blue-text.text-darken-4 {\n  color: #0D47A1 !important;\n}\n\n.blue.accent-1 {\n  background-color: #82B1FF !important;\n}\n\n.blue-text.text-accent-1 {\n  color: #82B1FF !important;\n}\n\n.blue.accent-2 {\n  background-color: #448AFF !important;\n}\n\n.blue-text.text-accent-2 {\n  color: #448AFF !important;\n}\n\n.blue.accent-3 {\n  background-color: #2979FF !important;\n}\n\n.blue-text.text-accent-3 {\n  color: #2979FF !important;\n}\n\n.blue.accent-4 {\n  background-color: #2962FF !important;\n}\n\n.blue-text.text-accent-4 {\n  color: #2962FF !important;\n}\n\n.light-blue {\n  background-color: #03a9f4 !important;\n}\n\n.light-blue-text {\n  color: #03a9f4 !important;\n}\n\n.light-blue.lighten-5 {\n  background-color: #e1f5fe !important;\n}\n\n.light-blue-text.text-lighten-5 {\n  color: #e1f5fe !important;\n}\n\n.light-blue.lighten-4 {\n  background-color: #b3e5fc !important;\n}\n\n.light-blue-text.text-lighten-4 {\n  color: #b3e5fc !important;\n}\n\n.light-blue.lighten-3 {\n  background-color: #81d4fa !important;\n}\n\n.light-blue-text.text-lighten-3 {\n  color: #81d4fa !important;\n}\n\n.light-blue.lighten-2 {\n  background-color: #4fc3f7 !important;\n}\n\n.light-blue-text.text-lighten-2 {\n  color: #4fc3f7 !important;\n}\n\n.light-blue.lighten-1 {\n  background-color: #29b6f6 !important;\n}\n\n.light-blue-text.text-lighten-1 {\n  color: #29b6f6 !important;\n}\n\n.light-blue.darken-1 {\n  background-color: #039be5 !important;\n}\n\n.light-blue-text.text-darken-1 {\n  color: #039be5 !important;\n}\n\n.light-blue.darken-2 {\n  background-color: #0288d1 !important;\n}\n\n.light-blue-text.text-darken-2 {\n  color: #0288d1 !important;\n}\n\n.light-blue.darken-3 {\n  background-color: #0277bd !important;\n}\n\n.light-blue-text.text-darken-3 {\n  color: #0277bd !important;\n}\n\n.light-blue.darken-4 {\n  background-color: #01579b !important;\n}\n\n.light-blue-text.text-darken-4 {\n  color: #01579b !important;\n}\n\n.light-blue.accent-1 {\n  background-color: #80d8ff !important;\n}\n\n.light-blue-text.text-accent-1 {\n  color: #80d8ff !important;\n}\n\n.light-blue.accent-2 {\n  background-color: #40c4ff !important;\n}\n\n.light-blue-text.text-accent-2 {\n  color: #40c4ff !important;\n}\n\n.light-blue.accent-3 {\n  background-color: #00b0ff !important;\n}\n\n.light-blue-text.text-accent-3 {\n  color: #00b0ff !important;\n}\n\n.light-blue.accent-4 {\n  background-color: #0091ea !important;\n}\n\n.light-blue-text.text-accent-4 {\n  color: #0091ea !important;\n}\n\n.cyan {\n  background-color: #00bcd4 !important;\n}\n\n.cyan-text {\n  color: #00bcd4 !important;\n}\n\n.cyan.lighten-5 {\n  background-color: #e0f7fa !important;\n}\n\n.cyan-text.text-lighten-5 {\n  color: #e0f7fa !important;\n}\n\n.cyan.lighten-4 {\n  background-color: #b2ebf2 !important;\n}\n\n.cyan-text.text-lighten-4 {\n  color: #b2ebf2 !important;\n}\n\n.cyan.lighten-3 {\n  background-color: #80deea !important;\n}\n\n.cyan-text.text-lighten-3 {\n  color: #80deea !important;\n}\n\n.cyan.lighten-2 {\n  background-color: #4dd0e1 !important;\n}\n\n.cyan-text.text-lighten-2 {\n  color: #4dd0e1 !important;\n}\n\n.cyan.lighten-1 {\n  background-color: #26c6da !important;\n}\n\n.cyan-text.text-lighten-1 {\n  color: #26c6da !important;\n}\n\n.cyan.darken-1 {\n  background-color: #00acc1 !important;\n}\n\n.cyan-text.text-darken-1 {\n  color: #00acc1 !important;\n}\n\n.cyan.darken-2 {\n  background-color: #0097a7 !important;\n}\n\n.cyan-text.text-darken-2 {\n  color: #0097a7 !important;\n}\n\n.cyan.darken-3 {\n  background-color: #00838f !important;\n}\n\n.cyan-text.text-darken-3 {\n  color: #00838f !important;\n}\n\n.cyan.darken-4 {\n  background-color: #006064 !important;\n}\n\n.cyan-text.text-darken-4 {\n  color: #006064 !important;\n}\n\n.cyan.accent-1 {\n  background-color: #84ffff !important;\n}\n\n.cyan-text.text-accent-1 {\n  color: #84ffff !important;\n}\n\n.cyan.accent-2 {\n  background-color: #18ffff !important;\n}\n\n.cyan-text.text-accent-2 {\n  color: #18ffff !important;\n}\n\n.cyan.accent-3 {\n  background-color: #00e5ff !important;\n}\n\n.cyan-text.text-accent-3 {\n  color: #00e5ff !important;\n}\n\n.cyan.accent-4 {\n  background-color: #00b8d4 !important;\n}\n\n.cyan-text.text-accent-4 {\n  color: #00b8d4 !important;\n}\n\n.teal {\n  background-color: #009688 !important;\n}\n\n.teal-text {\n  color: #009688 !important;\n}\n\n.teal.lighten-5 {\n  background-color: #e0f2f1 !important;\n}\n\n.teal-text.text-lighten-5 {\n  color: #e0f2f1 !important;\n}\n\n.teal.lighten-4 {\n  background-color: #b2dfdb !important;\n}\n\n.teal-text.text-lighten-4 {\n  color: #b2dfdb !important;\n}\n\n.teal.lighten-3 {\n  background-color: #80cbc4 !important;\n}\n\n.teal-text.text-lighten-3 {\n  color: #80cbc4 !important;\n}\n\n.teal.lighten-2 {\n  background-color: #4db6ac !important;\n}\n\n.teal-text.text-lighten-2 {\n  color: #4db6ac !important;\n}\n\n.teal.lighten-1 {\n  background-color: #26a69a !important;\n}\n\n.teal-text.text-lighten-1 {\n  color: #26a69a !important;\n}\n\n.teal.darken-1 {\n  background-color: #00897b !important;\n}\n\n.teal-text.text-darken-1 {\n  color: #00897b !important;\n}\n\n.teal.darken-2 {\n  background-color: #00796b !important;\n}\n\n.teal-text.text-darken-2 {\n  color: #00796b !important;\n}\n\n.teal.darken-3 {\n  background-color: #00695c !important;\n}\n\n.teal-text.text-darken-3 {\n  color: #00695c !important;\n}\n\n.teal.darken-4 {\n  background-color: #004d40 !important;\n}\n\n.teal-text.text-darken-4 {\n  color: #004d40 !important;\n}\n\n.teal.accent-1 {\n  background-color: #a7ffeb !important;\n}\n\n.teal-text.text-accent-1 {\n  color: #a7ffeb !important;\n}\n\n.teal.accent-2 {\n  background-color: #64ffda !important;\n}\n\n.teal-text.text-accent-2 {\n  color: #64ffda !important;\n}\n\n.teal.accent-3 {\n  background-color: #1de9b6 !important;\n}\n\n.teal-text.text-accent-3 {\n  color: #1de9b6 !important;\n}\n\n.teal.accent-4 {\n  background-color: #00bfa5 !important;\n}\n\n.teal-text.text-accent-4 {\n  color: #00bfa5 !important;\n}\n\n.green {\n  background-color: #4CAF50 !important;\n}\n\n.green-text {\n  color: #4CAF50 !important;\n}\n\n.green.lighten-5 {\n  background-color: #E8F5E9 !important;\n}\n\n.green-text.text-lighten-5 {\n  color: #E8F5E9 !important;\n}\n\n.green.lighten-4 {\n  background-color: #C8E6C9 !important;\n}\n\n.green-text.text-lighten-4 {\n  color: #C8E6C9 !important;\n}\n\n.green.lighten-3 {\n  background-color: #A5D6A7 !important;\n}\n\n.green-text.text-lighten-3 {\n  color: #A5D6A7 !important;\n}\n\n.green.lighten-2 {\n  background-color: #81C784 !important;\n}\n\n.green-text.text-lighten-2 {\n  color: #81C784 !important;\n}\n\n.green.lighten-1 {\n  background-color: #66BB6A !important;\n}\n\n.green-text.text-lighten-1 {\n  color: #66BB6A !important;\n}\n\n.green.darken-1 {\n  background-color: #43A047 !important;\n}\n\n.green-text.text-darken-1 {\n  color: #43A047 !important;\n}\n\n.green.darken-2 {\n  background-color: #388E3C !important;\n}\n\n.green-text.text-darken-2 {\n  color: #388E3C !important;\n}\n\n.green.darken-3 {\n  background-color: #2E7D32 !important;\n}\n\n.green-text.text-darken-3 {\n  color: #2E7D32 !important;\n}\n\n.green.darken-4 {\n  background-color: #1B5E20 !important;\n}\n\n.green-text.text-darken-4 {\n  color: #1B5E20 !important;\n}\n\n.green.accent-1 {\n  background-color: #B9F6CA !important;\n}\n\n.green-text.text-accent-1 {\n  color: #B9F6CA !important;\n}\n\n.green.accent-2 {\n  background-color: #69F0AE !important;\n}\n\n.green-text.text-accent-2 {\n  color: #69F0AE !important;\n}\n\n.green.accent-3 {\n  background-color: #00E676 !important;\n}\n\n.green-text.text-accent-3 {\n  color: #00E676 !important;\n}\n\n.green.accent-4 {\n  background-color: #00C853 !important;\n}\n\n.green-text.text-accent-4 {\n  color: #00C853 !important;\n}\n\n.light-green {\n  background-color: #8bc34a !important;\n}\n\n.light-green-text {\n  color: #8bc34a !important;\n}\n\n.light-green.lighten-5 {\n  background-color: #f1f8e9 !important;\n}\n\n.light-green-text.text-lighten-5 {\n  color: #f1f8e9 !important;\n}\n\n.light-green.lighten-4 {\n  background-color: #dcedc8 !important;\n}\n\n.light-green-text.text-lighten-4 {\n  color: #dcedc8 !important;\n}\n\n.light-green.lighten-3 {\n  background-color: #c5e1a5 !important;\n}\n\n.light-green-text.text-lighten-3 {\n  color: #c5e1a5 !important;\n}\n\n.light-green.lighten-2 {\n  background-color: #aed581 !important;\n}\n\n.light-green-text.text-lighten-2 {\n  color: #aed581 !important;\n}\n\n.light-green.lighten-1 {\n  background-color: #9ccc65 !important;\n}\n\n.light-green-text.text-lighten-1 {\n  color: #9ccc65 !important;\n}\n\n.light-green.darken-1 {\n  background-color: #7cb342 !important;\n}\n\n.light-green-text.text-darken-1 {\n  color: #7cb342 !important;\n}\n\n.light-green.darken-2 {\n  background-color: #689f38 !important;\n}\n\n.light-green-text.text-darken-2 {\n  color: #689f38 !important;\n}\n\n.light-green.darken-3 {\n  background-color: #558b2f !important;\n}\n\n.light-green-text.text-darken-3 {\n  color: #558b2f !important;\n}\n\n.light-green.darken-4 {\n  background-color: #33691e !important;\n}\n\n.light-green-text.text-darken-4 {\n  color: #33691e !important;\n}\n\n.light-green.accent-1 {\n  background-color: #ccff90 !important;\n}\n\n.light-green-text.text-accent-1 {\n  color: #ccff90 !important;\n}\n\n.light-green.accent-2 {\n  background-color: #b2ff59 !important;\n}\n\n.light-green-text.text-accent-2 {\n  color: #b2ff59 !important;\n}\n\n.light-green.accent-3 {\n  background-color: #76ff03 !important;\n}\n\n.light-green-text.text-accent-3 {\n  color: #76ff03 !important;\n}\n\n.light-green.accent-4 {\n  background-color: #64dd17 !important;\n}\n\n.light-green-text.text-accent-4 {\n  color: #64dd17 !important;\n}\n\n.lime {\n  background-color: #cddc39 !important;\n}\n\n.lime-text {\n  color: #cddc39 !important;\n}\n\n.lime.lighten-5 {\n  background-color: #f9fbe7 !important;\n}\n\n.lime-text.text-lighten-5 {\n  color: #f9fbe7 !important;\n}\n\n.lime.lighten-4 {\n  background-color: #f0f4c3 !important;\n}\n\n.lime-text.text-lighten-4 {\n  color: #f0f4c3 !important;\n}\n\n.lime.lighten-3 {\n  background-color: #e6ee9c !important;\n}\n\n.lime-text.text-lighten-3 {\n  color: #e6ee9c !important;\n}\n\n.lime.lighten-2 {\n  background-color: #dce775 !important;\n}\n\n.lime-text.text-lighten-2 {\n  color: #dce775 !important;\n}\n\n.lime.lighten-1 {\n  background-color: #d4e157 !important;\n}\n\n.lime-text.text-lighten-1 {\n  color: #d4e157 !important;\n}\n\n.lime.darken-1 {\n  background-color: #c0ca33 !important;\n}\n\n.lime-text.text-darken-1 {\n  color: #c0ca33 !important;\n}\n\n.lime.darken-2 {\n  background-color: #afb42b !important;\n}\n\n.lime-text.text-darken-2 {\n  color: #afb42b !important;\n}\n\n.lime.darken-3 {\n  background-color: #9e9d24 !important;\n}\n\n.lime-text.text-darken-3 {\n  color: #9e9d24 !important;\n}\n\n.lime.darken-4 {\n  background-color: #827717 !important;\n}\n\n.lime-text.text-darken-4 {\n  color: #827717 !important;\n}\n\n.lime.accent-1 {\n  background-color: #f4ff81 !important;\n}\n\n.lime-text.text-accent-1 {\n  color: #f4ff81 !important;\n}\n\n.lime.accent-2 {\n  background-color: #eeff41 !important;\n}\n\n.lime-text.text-accent-2 {\n  color: #eeff41 !important;\n}\n\n.lime.accent-3 {\n  background-color: #c6ff00 !important;\n}\n\n.lime-text.text-accent-3 {\n  color: #c6ff00 !important;\n}\n\n.lime.accent-4 {\n  background-color: #aeea00 !important;\n}\n\n.lime-text.text-accent-4 {\n  color: #aeea00 !important;\n}\n\n.yellow {\n  background-color: #ffeb3b !important;\n}\n\n.yellow-text {\n  color: #ffeb3b !important;\n}\n\n.yellow.lighten-5 {\n  background-color: #fffde7 !important;\n}\n\n.yellow-text.text-lighten-5 {\n  color: #fffde7 !important;\n}\n\n.yellow.lighten-4 {\n  background-color: #fff9c4 !important;\n}\n\n.yellow-text.text-lighten-4 {\n  color: #fff9c4 !important;\n}\n\n.yellow.lighten-3 {\n  background-color: #fff59d !important;\n}\n\n.yellow-text.text-lighten-3 {\n  color: #fff59d !important;\n}\n\n.yellow.lighten-2 {\n  background-color: #fff176 !important;\n}\n\n.yellow-text.text-lighten-2 {\n  color: #fff176 !important;\n}\n\n.yellow.lighten-1 {\n  background-color: #ffee58 !important;\n}\n\n.yellow-text.text-lighten-1 {\n  color: #ffee58 !important;\n}\n\n.yellow.darken-1 {\n  background-color: #fdd835 !important;\n}\n\n.yellow-text.text-darken-1 {\n  color: #fdd835 !important;\n}\n\n.yellow.darken-2 {\n  background-color: #fbc02d !important;\n}\n\n.yellow-text.text-darken-2 {\n  color: #fbc02d !important;\n}\n\n.yellow.darken-3 {\n  background-color: #f9a825 !important;\n}\n\n.yellow-text.text-darken-3 {\n  color: #f9a825 !important;\n}\n\n.yellow.darken-4 {\n  background-color: #f57f17 !important;\n}\n\n.yellow-text.text-darken-4 {\n  color: #f57f17 !important;\n}\n\n.yellow.accent-1 {\n  background-color: #ffff8d !important;\n}\n\n.yellow-text.text-accent-1 {\n  color: #ffff8d !important;\n}\n\n.yellow.accent-2 {\n  background-color: #ff0 !important;\n}\n\n.yellow-text.text-accent-2 {\n  color: #ff0 !important;\n}\n\n.yellow.accent-3 {\n  background-color: #ffea00 !important;\n}\n\n.yellow-text.text-accent-3 {\n  color: #ffea00 !important;\n}\n\n.yellow.accent-4 {\n  background-color: #ffd600 !important;\n}\n\n.yellow-text.text-accent-4 {\n  color: #ffd600 !important;\n}\n\n.amber {\n  background-color: #ffc107 !important;\n}\n\n.amber-text {\n  color: #ffc107 !important;\n}\n\n.amber.lighten-5 {\n  background-color: #fff8e1 !important;\n}\n\n.amber-text.text-lighten-5 {\n  color: #fff8e1 !important;\n}\n\n.amber.lighten-4 {\n  background-color: #ffecb3 !important;\n}\n\n.amber-text.text-lighten-4 {\n  color: #ffecb3 !important;\n}\n\n.amber.lighten-3 {\n  background-color: #ffe082 !important;\n}\n\n.amber-text.text-lighten-3 {\n  color: #ffe082 !important;\n}\n\n.amber.lighten-2 {\n  background-color: #ffd54f !important;\n}\n\n.amber-text.text-lighten-2 {\n  color: #ffd54f !important;\n}\n\n.amber.lighten-1 {\n  background-color: #ffca28 !important;\n}\n\n.amber-text.text-lighten-1 {\n  color: #ffca28 !important;\n}\n\n.amber.darken-1 {\n  background-color: #ffb300 !important;\n}\n\n.amber-text.text-darken-1 {\n  color: #ffb300 !important;\n}\n\n.amber.darken-2 {\n  background-color: #ffa000 !important;\n}\n\n.amber-text.text-darken-2 {\n  color: #ffa000 !important;\n}\n\n.amber.darken-3 {\n  background-color: #ff8f00 !important;\n}\n\n.amber-text.text-darken-3 {\n  color: #ff8f00 !important;\n}\n\n.amber.darken-4 {\n  background-color: #ff6f00 !important;\n}\n\n.amber-text.text-darken-4 {\n  color: #ff6f00 !important;\n}\n\n.amber.accent-1 {\n  background-color: #ffe57f !important;\n}\n\n.amber-text.text-accent-1 {\n  color: #ffe57f !important;\n}\n\n.amber.accent-2 {\n  background-color: #ffd740 !important;\n}\n\n.amber-text.text-accent-2 {\n  color: #ffd740 !important;\n}\n\n.amber.accent-3 {\n  background-color: #ffc400 !important;\n}\n\n.amber-text.text-accent-3 {\n  color: #ffc400 !important;\n}\n\n.amber.accent-4 {\n  background-color: #ffab00 !important;\n}\n\n.amber-text.text-accent-4 {\n  color: #ffab00 !important;\n}\n\n.orange {\n  background-color: #ff9800 !important;\n}\n\n.orange-text {\n  color: #ff9800 !important;\n}\n\n.orange.lighten-5 {\n  background-color: #fff3e0 !important;\n}\n\n.orange-text.text-lighten-5 {\n  color: #fff3e0 !important;\n}\n\n.orange.lighten-4 {\n  background-color: #ffe0b2 !important;\n}\n\n.orange-text.text-lighten-4 {\n  color: #ffe0b2 !important;\n}\n\n.orange.lighten-3 {\n  background-color: #ffcc80 !important;\n}\n\n.orange-text.text-lighten-3 {\n  color: #ffcc80 !important;\n}\n\n.orange.lighten-2 {\n  background-color: #ffb74d !important;\n}\n\n.orange-text.text-lighten-2 {\n  color: #ffb74d !important;\n}\n\n.orange.lighten-1 {\n  background-color: #ffa726 !important;\n}\n\n.orange-text.text-lighten-1 {\n  color: #ffa726 !important;\n}\n\n.orange.darken-1 {\n  background-color: #fb8c00 !important;\n}\n\n.orange-text.text-darken-1 {\n  color: #fb8c00 !important;\n}\n\n.orange.darken-2 {\n  background-color: #f57c00 !important;\n}\n\n.orange-text.text-darken-2 {\n  color: #f57c00 !important;\n}\n\n.orange.darken-3 {\n  background-color: #ef6c00 !important;\n}\n\n.orange-text.text-darken-3 {\n  color: #ef6c00 !important;\n}\n\n.orange.darken-4 {\n  background-color: #e65100 !important;\n}\n\n.orange-text.text-darken-4 {\n  color: #e65100 !important;\n}\n\n.orange.accent-1 {\n  background-color: #ffd180 !important;\n}\n\n.orange-text.text-accent-1 {\n  color: #ffd180 !important;\n}\n\n.orange.accent-2 {\n  background-color: #ffab40 !important;\n}\n\n.orange-text.text-accent-2 {\n  color: #ffab40 !important;\n}\n\n.orange.accent-3 {\n  background-color: #ff9100 !important;\n}\n\n.orange-text.text-accent-3 {\n  color: #ff9100 !important;\n}\n\n.orange.accent-4 {\n  background-color: #ff6d00 !important;\n}\n\n.orange-text.text-accent-4 {\n  color: #ff6d00 !important;\n}\n\n.deep-orange {\n  background-color: #ff5722 !important;\n}\n\n.deep-orange-text {\n  color: #ff5722 !important;\n}\n\n.deep-orange.lighten-5 {\n  background-color: #fbe9e7 !important;\n}\n\n.deep-orange-text.text-lighten-5 {\n  color: #fbe9e7 !important;\n}\n\n.deep-orange.lighten-4 {\n  background-color: #ffccbc !important;\n}\n\n.deep-orange-text.text-lighten-4 {\n  color: #ffccbc !important;\n}\n\n.deep-orange.lighten-3 {\n  background-color: #ffab91 !important;\n}\n\n.deep-orange-text.text-lighten-3 {\n  color: #ffab91 !important;\n}\n\n.deep-orange.lighten-2 {\n  background-color: #ff8a65 !important;\n}\n\n.deep-orange-text.text-lighten-2 {\n  color: #ff8a65 !important;\n}\n\n.deep-orange.lighten-1 {\n  background-color: #ff7043 !important;\n}\n\n.deep-orange-text.text-lighten-1 {\n  color: #ff7043 !important;\n}\n\n.deep-orange.darken-1 {\n  background-color: #f4511e !important;\n}\n\n.deep-orange-text.text-darken-1 {\n  color: #f4511e !important;\n}\n\n.deep-orange.darken-2 {\n  background-color: #e64a19 !important;\n}\n\n.deep-orange-text.text-darken-2 {\n  color: #e64a19 !important;\n}\n\n.deep-orange.darken-3 {\n  background-color: #d84315 !important;\n}\n\n.deep-orange-text.text-darken-3 {\n  color: #d84315 !important;\n}\n\n.deep-orange.darken-4 {\n  background-color: #bf360c !important;\n}\n\n.deep-orange-text.text-darken-4 {\n  color: #bf360c !important;\n}\n\n.deep-orange.accent-1 {\n  background-color: #ff9e80 !important;\n}\n\n.deep-orange-text.text-accent-1 {\n  color: #ff9e80 !important;\n}\n\n.deep-orange.accent-2 {\n  background-color: #ff6e40 !important;\n}\n\n.deep-orange-text.text-accent-2 {\n  color: #ff6e40 !important;\n}\n\n.deep-orange.accent-3 {\n  background-color: #ff3d00 !important;\n}\n\n.deep-orange-text.text-accent-3 {\n  color: #ff3d00 !important;\n}\n\n.deep-orange.accent-4 {\n  background-color: #dd2c00 !important;\n}\n\n.deep-orange-text.text-accent-4 {\n  color: #dd2c00 !important;\n}\n\n.brown {\n  background-color: #795548 !important;\n}\n\n.brown-text {\n  color: #795548 !important;\n}\n\n.brown.lighten-5 {\n  background-color: #efebe9 !important;\n}\n\n.brown-text.text-lighten-5 {\n  color: #efebe9 !important;\n}\n\n.brown.lighten-4 {\n  background-color: #d7ccc8 !important;\n}\n\n.brown-text.text-lighten-4 {\n  color: #d7ccc8 !important;\n}\n\n.brown.lighten-3 {\n  background-color: #bcaaa4 !important;\n}\n\n.brown-text.text-lighten-3 {\n  color: #bcaaa4 !important;\n}\n\n.brown.lighten-2 {\n  background-color: #a1887f !important;\n}\n\n.brown-text.text-lighten-2 {\n  color: #a1887f !important;\n}\n\n.brown.lighten-1 {\n  background-color: #8d6e63 !important;\n}\n\n.brown-text.text-lighten-1 {\n  color: #8d6e63 !important;\n}\n\n.brown.darken-1 {\n  background-color: #6d4c41 !important;\n}\n\n.brown-text.text-darken-1 {\n  color: #6d4c41 !important;\n}\n\n.brown.darken-2 {\n  background-color: #5d4037 !important;\n}\n\n.brown-text.text-darken-2 {\n  color: #5d4037 !important;\n}\n\n.brown.darken-3 {\n  background-color: #4e342e !important;\n}\n\n.brown-text.text-darken-3 {\n  color: #4e342e !important;\n}\n\n.brown.darken-4 {\n  background-color: #3e2723 !important;\n}\n\n.brown-text.text-darken-4 {\n  color: #3e2723 !important;\n}\n\n.blue-grey {\n  background-color: #607d8b !important;\n}\n\n.blue-grey-text {\n  color: #607d8b !important;\n}\n\n.blue-grey.lighten-5 {\n  background-color: #eceff1 !important;\n}\n\n.blue-grey-text.text-lighten-5 {\n  color: #eceff1 !important;\n}\n\n.blue-grey.lighten-4 {\n  background-color: #cfd8dc !important;\n}\n\n.blue-grey-text.text-lighten-4 {\n  color: #cfd8dc !important;\n}\n\n.blue-grey.lighten-3 {\n  background-color: #b0bec5 !important;\n}\n\n.blue-grey-text.text-lighten-3 {\n  color: #b0bec5 !important;\n}\n\n.blue-grey.lighten-2 {\n  background-color: #90a4ae !important;\n}\n\n.blue-grey-text.text-lighten-2 {\n  color: #90a4ae !important;\n}\n\n.blue-grey.lighten-1 {\n  background-color: #78909c !important;\n}\n\n.blue-grey-text.text-lighten-1 {\n  color: #78909c !important;\n}\n\n.blue-grey.darken-1 {\n  background-color: #546e7a !important;\n}\n\n.blue-grey-text.text-darken-1 {\n  color: #546e7a !important;\n}\n\n.blue-grey.darken-2 {\n  background-color: #455a64 !important;\n}\n\n.blue-grey-text.text-darken-2 {\n  color: #455a64 !important;\n}\n\n.blue-grey.darken-3 {\n  background-color: #37474f !important;\n}\n\n.blue-grey-text.text-darken-3 {\n  color: #37474f !important;\n}\n\n.blue-grey.darken-4 {\n  background-color: #263238 !important;\n}\n\n.blue-grey-text.text-darken-4 {\n  color: #263238 !important;\n}\n\n.grey {\n  background-color: #9e9e9e !important;\n}\n\n.grey-text {\n  color: #9e9e9e !important;\n}\n\n.grey.lighten-5 {\n  background-color: #fafafa !important;\n}\n\n.grey-text.text-lighten-5 {\n  color: #fafafa !important;\n}\n\n.grey.lighten-4 {\n  background-color: #f5f5f5 !important;\n}\n\n.grey-text.text-lighten-4 {\n  color: #f5f5f5 !important;\n}\n\n.grey.lighten-3 {\n  background-color: #eee !important;\n}\n\n.grey-text.text-lighten-3 {\n  color: #eee !important;\n}\n\n.grey.lighten-2 {\n  background-color: #e0e0e0 !important;\n}\n\n.grey-text.text-lighten-2 {\n  color: #e0e0e0 !important;\n}\n\n.grey.lighten-1 {\n  background-color: #bdbdbd !important;\n}\n\n.grey-text.text-lighten-1 {\n  color: #bdbdbd !important;\n}\n\n.grey.darken-1 {\n  background-color: #757575 !important;\n}\n\n.grey-text.text-darken-1 {\n  color: #757575 !important;\n}\n\n.grey.darken-2 {\n  background-color: #616161 !important;\n}\n\n.grey-text.text-darken-2 {\n  color: #616161 !important;\n}\n\n.grey.darken-3 {\n  background-color: #424242 !important;\n}\n\n.grey-text.text-darken-3 {\n  color: #424242 !important;\n}\n\n.grey.darken-4 {\n  background-color: #212121 !important;\n}\n\n.grey-text.text-darken-4 {\n  color: #212121 !important;\n}\n\n.black {\n  background-color: #000 !important;\n}\n\n.black-text {\n  color: #000 !important;\n}\n\n.white {\n  background-color: #fff !important;\n}\n\n.white-text {\n  color: #fff !important;\n}\n\n.transparent {\n  background-color: transparent !important;\n}\n\n.transparent-text {\n  color: transparent !important;\n}\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden],\ntemplate {\n  display: none;\n}\n\na {\n  background-color: transparent;\n}\n\na:active,\na:hover {\n  outline: 0;\n}\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\ndfn {\n  font-style: italic;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nimg {\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\n\nbutton {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ninput {\n  line-height: normal;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend {\n  border: 0;\n  padding: 0;\n}\n\ntextarea {\n  overflow: auto;\n}\n\noptgroup {\n  font-weight: bold;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nul {\n  padding: 0;\n  list-style-type: none;\n}\n\nul.browser-default,\nul.browser-default li {\n  list-style-type: initial;\n}\n\nul li {\n  list-style-type: none;\n}\n\na {\n  color: #039be5;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.valign-wrapper {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.valign-wrapper .valign {\n  display: block;\n}\n\n.clearfix {\n  clear: both;\n}\n\n.z-depth-0 {\n  box-shadow: none !important;\n}\n\n.z-depth-1,\nnav,\n.card-panel,\n.card,\n.toast,\n.btn,\n.btn-large,\n.btn-floating,\n.dropdown-content,\n.collapsible,\n.side-nav {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n\n.z-depth-1-half,\n.btn:hover,\n.btn-large:hover,\n.btn-floating:hover {\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n\n.z-depth-2 {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.z-depth-3 {\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);\n}\n\n.z-depth-4,\n.modal {\n  box-shadow: 0 16px 28px 0 rgba(0, 0, 0, 0.22), 0 25px 55px 0 rgba(0, 0, 0, 0.21);\n}\n\n.z-depth-5 {\n  box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2), 0 40px 77px 0 rgba(0, 0, 0, 0.22);\n}\n\n.hoverable {\n  transition: box-shadow .25s;\n  box-shadow: 0;\n}\n\n.hoverable:hover {\n  transition: box-shadow .25s;\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.divider {\n  height: 1px;\n  overflow: hidden;\n  background-color: #e0e0e0;\n}\n\nblockquote {\n  margin: 20px 0;\n  padding-left: 1.5rem;\n  border-left: 5px solid #ee6e73;\n}\n\ni {\n  line-height: inherit;\n}\n\ni.left {\n  float: left;\n  margin-right: 15px;\n}\n\ni.right {\n  float: right;\n  margin-left: 15px;\n}\n\ni.tiny {\n  font-size: 1rem;\n}\n\ni.small {\n  font-size: 2rem;\n}\n\ni.medium {\n  font-size: 4rem;\n}\n\ni.large {\n  font-size: 6rem;\n}\n\nimg.responsive-img,\nvideo.responsive-video {\n  max-width: 100%;\n  height: auto;\n}\n\n.pagination li {\n  display: inline-block;\n  border-radius: 2px;\n  text-align: center;\n  vertical-align: top;\n  height: 30px;\n}\n\n.pagination li a {\n  color: #444;\n  display: inline-block;\n  font-size: 1.2rem;\n  padding: 0 10px;\n  line-height: 30px;\n}\n\n.pagination li.active a {\n  color: #fff;\n}\n\n.pagination li.active {\n  background-color: #ee6e73;\n}\n\n.pagination li.disabled a {\n  cursor: default;\n  color: #999;\n}\n\n.pagination li i {\n  font-size: 2rem;\n}\n\n.pagination li.pages ul li {\n  display: inline-block;\n  float: none;\n}\n\n@media only screen and (max-width: 992px) {\n  .pagination {\n    width: 100%;\n  }\n\n  .pagination li.prev,\n  .pagination li.next {\n    width: 10%;\n  }\n\n  .pagination li.pages {\n    width: 80%;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n}\n\n.breadcrumb {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.breadcrumb i,\n.breadcrumb [class^=\"mdi-\"],\n.breadcrumb [class*=\"mdi-\"],\n.breadcrumb i.material-icons {\n  display: inline-block;\n  float: left;\n  font-size: 24px;\n}\n\n.breadcrumb:before {\n  content: '\\E5CC';\n  color: rgba(255, 255, 255, 0.7);\n  vertical-align: top;\n  display: inline-block;\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 25px;\n  margin: 0 10px 0 8px;\n  -webkit-font-smoothing: antialiased;\n}\n\n.breadcrumb:first-child:before {\n  display: none;\n}\n\n.breadcrumb:last-child {\n  color: #fff;\n}\n\n.parallax-container {\n  position: relative;\n  overflow: hidden;\n  height: 500px;\n}\n\n.parallax {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\n.parallax img {\n  display: none;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.pin-top,\n.pin-bottom {\n  position: relative;\n}\n\n.pinned {\n  position: fixed !important;\n}\n\nul.staggered-list li {\n  opacity: 0;\n}\n\n.fade-in {\n  opacity: 0;\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n}\n\n@media only screen and (max-width: 600px) {\n  .hide-on-small-only,\n  .hide-on-small-and-down {\n    display: none !important;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .hide-on-med-and-down {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  .hide-on-med-and-up {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .hide-on-med-only {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .hide-on-large-only {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .show-on-large {\n    display: block !important;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .show-on-medium {\n    display: block !important;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .show-on-small {\n    display: block !important;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  .show-on-medium-and-up {\n    display: block !important;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .show-on-medium-and-down {\n    display: block !important;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .center-on-small-only {\n    text-align: center;\n  }\n}\n\nfooter.page-footer {\n  margin-top: 20px;\n  padding-top: 20px;\n  background-color: #ee6e73;\n}\n\nfooter.page-footer .footer-copyright {\n  overflow: hidden;\n  height: 50px;\n  line-height: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  background-color: rgba(51, 51, 51, 0.08);\n}\n\ntable,\nth,\ntd {\n  border: none;\n}\n\ntable {\n  width: 100%;\n  display: table;\n}\n\ntable.bordered > thead > tr,\ntable.bordered > tbody > tr {\n  border-bottom: 1px solid #d0d0d0;\n}\n\ntable.striped > tbody > tr:nth-child(odd) {\n  background-color: #f2f2f2;\n}\n\ntable.striped > tbody > tr > td {\n  border-radius: 0;\n}\n\ntable.highlight > tbody > tr {\n  transition: background-color .25s ease;\n}\n\ntable.highlight > tbody > tr:hover {\n  background-color: #f2f2f2;\n}\n\ntable.centered thead tr th,\ntable.centered tbody tr td {\n  text-align: center;\n}\n\nthead {\n  border-bottom: 1px solid #d0d0d0;\n}\n\ntd,\nth {\n  padding: 15px 5px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: middle;\n  border-radius: 2px;\n}\n\n@media only screen and (max-width: 992px) {\n  table.responsive-table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: block;\n    position: relative;\n  }\n\n  table.responsive-table td:empty:before {\n    content: '\\A0';\n  }\n\n  table.responsive-table th,\n  table.responsive-table td {\n    margin: 0;\n    vertical-align: top;\n  }\n\n  table.responsive-table th {\n    text-align: left;\n  }\n\n  table.responsive-table thead {\n    display: block;\n    float: left;\n  }\n\n  table.responsive-table thead tr {\n    display: block;\n    padding: 0 10px 0 0;\n  }\n\n  table.responsive-table thead tr th::before {\n    content: \"\\A0\";\n  }\n\n  table.responsive-table tbody {\n    display: block;\n    width: auto;\n    position: relative;\n    overflow-x: auto;\n    white-space: nowrap;\n  }\n\n  table.responsive-table tbody tr {\n    display: inline-block;\n    vertical-align: top;\n  }\n\n  table.responsive-table th {\n    display: block;\n    text-align: right;\n  }\n\n  table.responsive-table td {\n    display: block;\n    min-height: 1.25em;\n    text-align: left;\n  }\n\n  table.responsive-table tr {\n    padding: 0 10px;\n  }\n\n  table.responsive-table thead {\n    border: 0;\n    border-right: 1px solid #d0d0d0;\n  }\n\n  table.responsive-table.bordered th {\n    border-bottom: 0;\n    border-left: 0;\n  }\n\n  table.responsive-table.bordered td {\n    border-left: 0;\n    border-right: 0;\n    border-bottom: 0;\n  }\n\n  table.responsive-table.bordered tr {\n    border: 0;\n  }\n\n  table.responsive-table.bordered tbody tr {\n    border-right: 1px solid #d0d0d0;\n  }\n}\n\n.collection {\n  margin: 0.5rem 0 1rem 0;\n  border: 1px solid #e0e0e0;\n  border-radius: 2px;\n  overflow: hidden;\n  position: relative;\n}\n\n.collection .collection-item {\n  background-color: #fff;\n  line-height: 1.5rem;\n  padding: 10px 20px;\n  margin: 0;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.collection .collection-item.avatar {\n  min-height: 84px;\n  padding-left: 72px;\n  position: relative;\n}\n\n.collection .collection-item.avatar .circle {\n  position: absolute;\n  width: 42px;\n  height: 42px;\n  overflow: hidden;\n  left: 15px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.collection .collection-item.avatar i.circle {\n  font-size: 18px;\n  line-height: 42px;\n  color: #fff;\n  background-color: #999;\n  text-align: center;\n}\n\n.collection .collection-item.avatar .title {\n  font-size: 16px;\n}\n\n.collection .collection-item.avatar p {\n  margin: 0;\n}\n\n.collection .collection-item.avatar .secondary-content {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n\n.collection .collection-item:last-child {\n  border-bottom: none;\n}\n\n.collection .collection-item.active {\n  background-color: #26a69a;\n  color: #eafaf9;\n}\n\n.collection .collection-item.active .secondary-content {\n  color: #fff;\n}\n\n.collection a.collection-item {\n  display: block;\n  transition: .25s;\n  color: #26a69a;\n}\n\n.collection a.collection-item:not(.active):hover {\n  background-color: #ddd;\n}\n\n.collection.with-header .collection-header {\n  background-color: #fff;\n  border-bottom: 1px solid #e0e0e0;\n  padding: 10px 20px;\n}\n\n.collection.with-header .collection-item {\n  padding-left: 30px;\n}\n\n.collection.with-header .collection-item.avatar {\n  padding-left: 72px;\n}\n\n.secondary-content {\n  float: right;\n  color: #26a69a;\n}\n\n.collapsible .collection {\n  margin: 0;\n  border: none;\n}\n\nspan.badge {\n  min-width: 3rem;\n  padding: 0 6px;\n  text-align: center;\n  font-size: 1rem;\n  line-height: inherit;\n  color: #757575;\n  position: absolute;\n  right: 15px;\n  box-sizing: border-box;\n}\n\nspan.badge.new {\n  font-weight: 300;\n  font-size: 0.8rem;\n  color: #fff;\n  background-color: #26a69a;\n  border-radius: 2px;\n}\n\nspan.badge.new:after {\n  content: \" new\";\n}\n\nspan.badge[data-badge-caption]::after {\n  content: \" \" attr(data-badge-caption);\n}\n\nnav ul a span.badge {\n  position: static;\n  margin-left: 4px;\n  line-height: 0;\n}\n\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden;\n}\n\n.video-container iframe,\n.video-container object,\n.video-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.progress {\n  position: relative;\n  height: 4px;\n  display: block;\n  width: 100%;\n  background-color: #acece6;\n  border-radius: 2px;\n  margin: 0.5rem 0 1rem 0;\n  overflow: hidden;\n}\n\n.progress .determinate {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #26a69a;\n  transition: width .3s linear;\n}\n\n.progress .indeterminate {\n  background-color: #26a69a;\n}\n\n.progress .indeterminate:before {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n  animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n\n.progress .indeterminate:after {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  -webkit-animation-delay: 1.15s;\n  animation-delay: 1.15s;\n}\n\n@-webkit-keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n\n@keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n\n@-webkit-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n\n@keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n\n.hide {\n  display: none !important;\n}\n\n.left-align {\n  text-align: left;\n}\n\n.right-align {\n  text-align: right;\n}\n\n.center,\n.center-align {\n  text-align: center;\n}\n\n.left {\n  float: left !important;\n}\n\n.right {\n  float: right !important;\n}\n\n.no-select,\ninput[type=range],\ninput[type=range] + .thumb {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.circle {\n  border-radius: 50%;\n}\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.truncate {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.no-padding {\n  padding: 0 !important;\n}\n\n.material-icons {\n  text-rendering: optimizeLegibility;\n  -webkit-font-feature-settings: 'liga';\n  -moz-font-feature-settings: 'liga';\n  font-feature-settings: 'liga';\n}\n\n.container {\n  margin: 0 auto;\n  max-width: 1280px;\n  width: 90%;\n}\n\n@media only screen and (min-width: 601px) {\n  .container {\n    width: 85%;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .container {\n    width: 70%;\n  }\n}\n\n.container .row {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n}\n\n.section {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.section.no-pad {\n  padding: 0;\n}\n\n.section.no-pad-bot {\n  padding-bottom: 0;\n}\n\n.section.no-pad-top {\n  padding-top: 0;\n}\n\n.row {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row .col {\n  float: left;\n  box-sizing: border-box;\n  padding: 0 0.75rem;\n  min-height: 1px;\n}\n\n.row .col[class*=\"push-\"],\n.row .col[class*=\"pull-\"] {\n  position: relative;\n}\n\n.row .col.s1 {\n  width: 8.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s2 {\n  width: 16.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s3 {\n  width: 25%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s4 {\n  width: 33.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s5 {\n  width: 41.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s6 {\n  width: 50%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s7 {\n  width: 58.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s8 {\n  width: 66.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s9 {\n  width: 75%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s10 {\n  width: 83.3333333333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s11 {\n  width: 91.6666666667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s12 {\n  width: 100%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.offset-s1 {\n  margin-left: 8.3333333333%;\n}\n\n.row .col.pull-s1 {\n  right: 8.3333333333%;\n}\n\n.row .col.push-s1 {\n  left: 8.3333333333%;\n}\n\n.row .col.offset-s2 {\n  margin-left: 16.6666666667%;\n}\n\n.row .col.pull-s2 {\n  right: 16.6666666667%;\n}\n\n.row .col.push-s2 {\n  left: 16.6666666667%;\n}\n\n.row .col.offset-s3 {\n  margin-left: 25%;\n}\n\n.row .col.pull-s3 {\n  right: 25%;\n}\n\n.row .col.push-s3 {\n  left: 25%;\n}\n\n.row .col.offset-s4 {\n  margin-left: 33.3333333333%;\n}\n\n.row .col.pull-s4 {\n  right: 33.3333333333%;\n}\n\n.row .col.push-s4 {\n  left: 33.3333333333%;\n}\n\n.row .col.offset-s5 {\n  margin-left: 41.6666666667%;\n}\n\n.row .col.pull-s5 {\n  right: 41.6666666667%;\n}\n\n.row .col.push-s5 {\n  left: 41.6666666667%;\n}\n\n.row .col.offset-s6 {\n  margin-left: 50%;\n}\n\n.row .col.pull-s6 {\n  right: 50%;\n}\n\n.row .col.push-s6 {\n  left: 50%;\n}\n\n.row .col.offset-s7 {\n  margin-left: 58.3333333333%;\n}\n\n.row .col.pull-s7 {\n  right: 58.3333333333%;\n}\n\n.row .col.push-s7 {\n  left: 58.3333333333%;\n}\n\n.row .col.offset-s8 {\n  margin-left: 66.6666666667%;\n}\n\n.row .col.pull-s8 {\n  right: 66.6666666667%;\n}\n\n.row .col.push-s8 {\n  left: 66.6666666667%;\n}\n\n.row .col.offset-s9 {\n  margin-left: 75%;\n}\n\n.row .col.pull-s9 {\n  right: 75%;\n}\n\n.row .col.push-s9 {\n  left: 75%;\n}\n\n.row .col.offset-s10 {\n  margin-left: 83.3333333333%;\n}\n\n.row .col.pull-s10 {\n  right: 83.3333333333%;\n}\n\n.row .col.push-s10 {\n  left: 83.3333333333%;\n}\n\n.row .col.offset-s11 {\n  margin-left: 91.6666666667%;\n}\n\n.row .col.pull-s11 {\n  right: 91.6666666667%;\n}\n\n.row .col.push-s11 {\n  left: 91.6666666667%;\n}\n\n.row .col.offset-s12 {\n  margin-left: 100%;\n}\n\n.row .col.pull-s12 {\n  right: 100%;\n}\n\n.row .col.push-s12 {\n  left: 100%;\n}\n\n@media only screen and (min-width: 601px) {\n  .row .col.m1 {\n    width: 8.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m2 {\n    width: 16.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m4 {\n    width: 33.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m5 {\n    width: 41.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m7 {\n    width: 58.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m8 {\n    width: 66.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m10 {\n    width: 83.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m11 {\n    width: 91.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.offset-m1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .row .col.pull-m1 {\n    right: 8.3333333333%;\n  }\n\n  .row .col.push-m1 {\n    left: 8.3333333333%;\n  }\n\n  .row .col.offset-m2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .row .col.pull-m2 {\n    right: 16.6666666667%;\n  }\n\n  .row .col.push-m2 {\n    left: 16.6666666667%;\n  }\n\n  .row .col.offset-m3 {\n    margin-left: 25%;\n  }\n\n  .row .col.pull-m3 {\n    right: 25%;\n  }\n\n  .row .col.push-m3 {\n    left: 25%;\n  }\n\n  .row .col.offset-m4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .row .col.pull-m4 {\n    right: 33.3333333333%;\n  }\n\n  .row .col.push-m4 {\n    left: 33.3333333333%;\n  }\n\n  .row .col.offset-m5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .row .col.pull-m5 {\n    right: 41.6666666667%;\n  }\n\n  .row .col.push-m5 {\n    left: 41.6666666667%;\n  }\n\n  .row .col.offset-m6 {\n    margin-left: 50%;\n  }\n\n  .row .col.pull-m6 {\n    right: 50%;\n  }\n\n  .row .col.push-m6 {\n    left: 50%;\n  }\n\n  .row .col.offset-m7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .row .col.pull-m7 {\n    right: 58.3333333333%;\n  }\n\n  .row .col.push-m7 {\n    left: 58.3333333333%;\n  }\n\n  .row .col.offset-m8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .row .col.pull-m8 {\n    right: 66.6666666667%;\n  }\n\n  .row .col.push-m8 {\n    left: 66.6666666667%;\n  }\n\n  .row .col.offset-m9 {\n    margin-left: 75%;\n  }\n\n  .row .col.pull-m9 {\n    right: 75%;\n  }\n\n  .row .col.push-m9 {\n    left: 75%;\n  }\n\n  .row .col.offset-m10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .row .col.pull-m10 {\n    right: 83.3333333333%;\n  }\n\n  .row .col.push-m10 {\n    left: 83.3333333333%;\n  }\n\n  .row .col.offset-m11 {\n    margin-left: 91.6666666667%;\n  }\n\n  .row .col.pull-m11 {\n    right: 91.6666666667%;\n  }\n\n  .row .col.push-m11 {\n    left: 91.6666666667%;\n  }\n\n  .row .col.offset-m12 {\n    margin-left: 100%;\n  }\n\n  .row .col.pull-m12 {\n    right: 100%;\n  }\n\n  .row .col.push-m12 {\n    left: 100%;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .row .col.l1 {\n    width: 8.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l2 {\n    width: 16.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l4 {\n    width: 33.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l5 {\n    width: 41.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l7 {\n    width: 58.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l8 {\n    width: 66.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l10 {\n    width: 83.3333333333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l11 {\n    width: 91.6666666667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.offset-l1 {\n    margin-left: 8.3333333333%;\n  }\n\n  .row .col.pull-l1 {\n    right: 8.3333333333%;\n  }\n\n  .row .col.push-l1 {\n    left: 8.3333333333%;\n  }\n\n  .row .col.offset-l2 {\n    margin-left: 16.6666666667%;\n  }\n\n  .row .col.pull-l2 {\n    right: 16.6666666667%;\n  }\n\n  .row .col.push-l2 {\n    left: 16.6666666667%;\n  }\n\n  .row .col.offset-l3 {\n    margin-left: 25%;\n  }\n\n  .row .col.pull-l3 {\n    right: 25%;\n  }\n\n  .row .col.push-l3 {\n    left: 25%;\n  }\n\n  .row .col.offset-l4 {\n    margin-left: 33.3333333333%;\n  }\n\n  .row .col.pull-l4 {\n    right: 33.3333333333%;\n  }\n\n  .row .col.push-l4 {\n    left: 33.3333333333%;\n  }\n\n  .row .col.offset-l5 {\n    margin-left: 41.6666666667%;\n  }\n\n  .row .col.pull-l5 {\n    right: 41.6666666667%;\n  }\n\n  .row .col.push-l5 {\n    left: 41.6666666667%;\n  }\n\n  .row .col.offset-l6 {\n    margin-left: 50%;\n  }\n\n  .row .col.pull-l6 {\n    right: 50%;\n  }\n\n  .row .col.push-l6 {\n    left: 50%;\n  }\n\n  .row .col.offset-l7 {\n    margin-left: 58.3333333333%;\n  }\n\n  .row .col.pull-l7 {\n    right: 58.3333333333%;\n  }\n\n  .row .col.push-l7 {\n    left: 58.3333333333%;\n  }\n\n  .row .col.offset-l8 {\n    margin-left: 66.6666666667%;\n  }\n\n  .row .col.pull-l8 {\n    right: 66.6666666667%;\n  }\n\n  .row .col.push-l8 {\n    left: 66.6666666667%;\n  }\n\n  .row .col.offset-l9 {\n    margin-left: 75%;\n  }\n\n  .row .col.pull-l9 {\n    right: 75%;\n  }\n\n  .row .col.push-l9 {\n    left: 75%;\n  }\n\n  .row .col.offset-l10 {\n    margin-left: 83.3333333333%;\n  }\n\n  .row .col.pull-l10 {\n    right: 83.3333333333%;\n  }\n\n  .row .col.push-l10 {\n    left: 83.3333333333%;\n  }\n\n  .row .col.offset-l11 {\n    margin-left: 91.6666666667%;\n  }\n\n  .row .col.pull-l11 {\n    right: 91.6666666667%;\n  }\n\n  .row .col.push-l11 {\n    left: 91.6666666667%;\n  }\n\n  .row .col.offset-l12 {\n    margin-left: 100%;\n  }\n\n  .row .col.pull-l12 {\n    right: 100%;\n  }\n\n  .row .col.push-l12 {\n    left: 100%;\n  }\n}\n\nnav {\n  color: #fff;\n  background-color: #ee6e73;\n  width: 100%;\n  height: 56px;\n  line-height: 56px;\n}\n\nnav a {\n  color: #fff;\n}\n\nnav i,\nnav [class^=\"mdi-\"],\nnav [class*=\"mdi-\"],\nnav i.material-icons {\n  display: block;\n  font-size: 2rem;\n  height: 56px;\n  line-height: 56px;\n}\n\nnav .nav-wrapper {\n  position: relative;\n  height: 100%;\n}\n\n@media only screen and (min-width: 993px) {\n  nav a.button-collapse {\n    display: none;\n  }\n}\n\nnav .button-collapse {\n  float: left;\n  position: relative;\n  z-index: 1;\n  height: 56px;\n}\n\nnav .button-collapse i {\n  font-size: 2.7rem;\n  height: 56px;\n  line-height: 56px;\n}\n\nnav .brand-logo {\n  position: absolute;\n  color: #fff;\n  display: inline-block;\n  font-size: 2.1rem;\n  padding: 0;\n  white-space: nowrap;\n}\n\nnav .brand-logo.center {\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n@media only screen and (max-width: 992px) {\n  nav .brand-logo {\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%);\n  }\n\n  nav .brand-logo.left,\n  nav .brand-logo.right {\n    padding: 0;\n    -webkit-transform: none;\n    transform: none;\n  }\n\n  nav .brand-logo.left {\n    left: 0.5rem;\n  }\n\n  nav .brand-logo.right {\n    right: 0.5rem;\n    left: auto;\n  }\n}\n\nnav .brand-logo.right {\n  right: 0.5rem;\n  padding: 0;\n}\n\nnav .brand-logo i,\nnav .brand-logo [class^=\"mdi-\"],\nnav .brand-logo [class*=\"mdi-\"],\nnav .brand-logo i.material-icons {\n  float: left;\n  margin-right: 15px;\n}\n\nnav ul {\n  margin: 0;\n}\n\nnav ul li {\n  transition: background-color .3s;\n  float: left;\n  padding: 0;\n}\n\nnav ul li.active {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\nnav ul a {\n  transition: background-color .3s;\n  font-size: 1rem;\n  color: #fff;\n  display: block;\n  padding: 0 15px;\n  cursor: pointer;\n}\n\nnav ul a.btn,\nnav ul a.btn-large,\nnav ul a.btn-large,\nnav ul a.btn-flat,\nnav ul a.btn-floating {\n  margin-top: -2px;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\nnav ul a:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\nnav ul.left {\n  float: left;\n}\n\nnav form {\n  height: 100%;\n}\n\nnav .input-field {\n  margin: 0;\n  height: 100%;\n}\n\nnav .input-field input {\n  height: 100%;\n  font-size: 1.2rem;\n  border: none;\n  padding-left: 2rem;\n}\n\nnav .input-field input:focus,\nnav .input-field input[type=text]:valid,\nnav .input-field input[type=password]:valid,\nnav .input-field input[type=email]:valid,\nnav .input-field input[type=url]:valid,\nnav .input-field input[type=date]:valid {\n  border: none;\n  box-shadow: none;\n}\n\nnav .input-field label {\n  top: 0;\n  left: 0;\n}\n\nnav .input-field label i {\n  color: rgba(255, 255, 255, 0.7);\n  transition: color .3s;\n}\n\nnav .input-field label.active i {\n  color: #fff;\n}\n\nnav .input-field label.active {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n\n.navbar-fixed {\n  position: relative;\n  height: 56px;\n  z-index: 998;\n}\n\n.navbar-fixed nav {\n  position: fixed;\n}\n\n@media only screen and (min-width: 601px) {\n  nav,\n  nav .nav-wrapper i,\n  nav a.button-collapse,\n  nav a.button-collapse i {\n    height: 64px;\n    line-height: 64px;\n  }\n\n  .navbar-fixed {\n    height: 64px;\n  }\n}\n\na {\n  text-decoration: none;\n}\n\nhtml {\n  line-height: 1.5;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n@media only screen and (min-width: 0) {\n  html {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  html {\n    font-size: 14.5px;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  html {\n    font-size: 15px;\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 400;\n  line-height: 1.1;\n}\n\nh1 a,\nh2 a,\nh3 a,\nh4 a,\nh5 a,\nh6 a {\n  font-weight: inherit;\n}\n\nh1 {\n  font-size: 4.2rem;\n  line-height: 110%;\n  margin: 2.1rem 0 1.68rem 0;\n}\n\nh2 {\n  font-size: 3.56rem;\n  line-height: 110%;\n  margin: 1.78rem 0 1.424rem 0;\n}\n\nh3 {\n  font-size: 2.92rem;\n  line-height: 110%;\n  margin: 1.46rem 0 1.168rem 0;\n}\n\nh4 {\n  font-size: 2.28rem;\n  line-height: 110%;\n  margin: 1.14rem 0 0.912rem 0;\n}\n\nh5 {\n  font-size: 1.64rem;\n  line-height: 110%;\n  margin: 0.82rem 0 0.656rem 0;\n}\n\nh6 {\n  font-size: 1rem;\n  line-height: 110%;\n  margin: 0.5rem 0 0.4rem 0;\n}\n\nem {\n  font-style: italic;\n}\n\nstrong {\n  font-weight: 500;\n}\n\nsmall {\n  font-size: 75%;\n}\n\n.light,\nfooter.page-footer .footer-copyright {\n  font-weight: 300;\n}\n\n.thin {\n  font-weight: 200;\n}\n\n.flow-text {\n  font-weight: 300;\n}\n\n@media only screen and (min-width: 360px) {\n  .flow-text {\n    font-size: 1.2rem;\n  }\n}\n\n@media only screen and (min-width: 390px) {\n  .flow-text {\n    font-size: 1.224rem;\n  }\n}\n\n@media only screen and (min-width: 420px) {\n  .flow-text {\n    font-size: 1.248rem;\n  }\n}\n\n@media only screen and (min-width: 450px) {\n  .flow-text {\n    font-size: 1.272rem;\n  }\n}\n\n@media only screen and (min-width: 480px) {\n  .flow-text {\n    font-size: 1.296rem;\n  }\n}\n\n@media only screen and (min-width: 510px) {\n  .flow-text {\n    font-size: 1.32rem;\n  }\n}\n\n@media only screen and (min-width: 540px) {\n  .flow-text {\n    font-size: 1.344rem;\n  }\n}\n\n@media only screen and (min-width: 570px) {\n  .flow-text {\n    font-size: 1.368rem;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .flow-text {\n    font-size: 1.392rem;\n  }\n}\n\n@media only screen and (min-width: 630px) {\n  .flow-text {\n    font-size: 1.416rem;\n  }\n}\n\n@media only screen and (min-width: 660px) {\n  .flow-text {\n    font-size: 1.44rem;\n  }\n}\n\n@media only screen and (min-width: 690px) {\n  .flow-text {\n    font-size: 1.464rem;\n  }\n}\n\n@media only screen and (min-width: 720px) {\n  .flow-text {\n    font-size: 1.488rem;\n  }\n}\n\n@media only screen and (min-width: 750px) {\n  .flow-text {\n    font-size: 1.512rem;\n  }\n}\n\n@media only screen and (min-width: 780px) {\n  .flow-text {\n    font-size: 1.536rem;\n  }\n}\n\n@media only screen and (min-width: 810px) {\n  .flow-text {\n    font-size: 1.56rem;\n  }\n}\n\n@media only screen and (min-width: 840px) {\n  .flow-text {\n    font-size: 1.584rem;\n  }\n}\n\n@media only screen and (min-width: 870px) {\n  .flow-text {\n    font-size: 1.608rem;\n  }\n}\n\n@media only screen and (min-width: 900px) {\n  .flow-text {\n    font-size: 1.632rem;\n  }\n}\n\n@media only screen and (min-width: 930px) {\n  .flow-text {\n    font-size: 1.656rem;\n  }\n}\n\n@media only screen and (min-width: 960px) {\n  .flow-text {\n    font-size: 1.68rem;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .flow-text {\n    font-size: 1.2rem;\n  }\n}\n\n.card-panel {\n  transition: box-shadow .25s;\n  padding: 20px;\n  margin: 0.5rem 0 1rem 0;\n  border-radius: 2px;\n  background-color: #fff;\n}\n\n.card {\n  position: relative;\n  margin: 0.5rem 0 1rem 0;\n  background-color: #fff;\n  transition: box-shadow .25s;\n  border-radius: 2px;\n}\n\n.card .card-title {\n  font-size: 24px;\n  font-weight: 300;\n}\n\n.card .card-title.activator {\n  cursor: pointer;\n}\n\n.card.small,\n.card.medium,\n.card.large {\n  position: relative;\n}\n\n.card.small .card-image,\n.card.medium .card-image,\n.card.large .card-image {\n  max-height: 60%;\n  overflow: hidden;\n}\n\n.card.small .card-image + .card-content,\n.card.medium .card-image + .card-content,\n.card.large .card-image + .card-content {\n  max-height: 40%;\n}\n\n.card.small .card-content,\n.card.medium .card-content,\n.card.large .card-content {\n  max-height: 100%;\n  overflow: hidden;\n}\n\n.card.small .card-action,\n.card.medium .card-action,\n.card.large .card-action {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.card.small {\n  height: 300px;\n}\n\n.card.medium {\n  height: 400px;\n}\n\n.card.large {\n  height: 500px;\n}\n\n.card.horizontal {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.card.horizontal.small .card-image,\n.card.horizontal.medium .card-image,\n.card.horizontal.large .card-image {\n  height: 100%;\n  max-height: none;\n  overflow: visible;\n}\n\n.card.horizontal.small .card-image img,\n.card.horizontal.medium .card-image img,\n.card.horizontal.large .card-image img {\n  height: 100%;\n}\n\n.card.horizontal .card-image {\n  max-width: 50%;\n}\n\n.card.horizontal .card-image img {\n  max-width: 100%;\n  width: auto;\n}\n\n.card.horizontal .card-stacked {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  position: relative;\n}\n\n.card.horizontal .card-stacked .card-content {\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n}\n\n.card.sticky-action .card-action {\n  z-index: 2;\n}\n\n.card.sticky-action .card-reveal {\n  z-index: 1;\n  padding-bottom: 64px;\n}\n\n.card .card-image {\n  position: relative;\n}\n\n.card .card-image img {\n  display: block;\n  border-radius: 2px 2px 0 0;\n  position: relative;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n\n.card .card-image .card-title {\n  color: #fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 20px;\n}\n\n.card .card-content {\n  padding: 20px;\n  border-radius: 0 0 2px 2px;\n}\n\n.card .card-content p {\n  margin: 0;\n  color: inherit;\n}\n\n.card .card-content .card-title {\n  line-height: 48px;\n}\n\n.card .card-action {\n  position: relative;\n  background-color: inherit;\n  border-top: 1px solid rgba(160, 160, 160, 0.2);\n  padding: 20px;\n}\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-floating) {\n  color: #ffab40;\n  margin-right: 20px;\n  transition: color .3s ease;\n  text-transform: uppercase;\n}\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-floating):hover {\n  color: #ffd8a6;\n}\n\n.card .card-reveal {\n  padding: 20px;\n  position: absolute;\n  background-color: #fff;\n  width: 100%;\n  overflow-y: auto;\n  top: 100%;\n  height: 100%;\n  z-index: 3;\n  display: none;\n}\n\n.card .card-reveal .card-title {\n  cursor: pointer;\n  display: block;\n}\n\n#toast-container {\n  display: block;\n  position: fixed;\n  z-index: 10000;\n}\n\n@media only screen and (max-width: 600px) {\n  #toast-container {\n    min-width: 100%;\n    bottom: 0%;\n  }\n}\n\n@media only screen and (min-width: 601px) and (max-width: 992px) {\n  #toast-container {\n    left: 5%;\n    bottom: 7%;\n    max-width: 90%;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  #toast-container {\n    top: 10%;\n    right: 7%;\n    max-width: 86%;\n  }\n}\n\n.toast {\n  border-radius: 2px;\n  top: 0;\n  width: auto;\n  clear: both;\n  margin-top: 10px;\n  position: relative;\n  max-width: 100%;\n  height: auto;\n  min-height: 48px;\n  line-height: 1.5em;\n  word-break: break-all;\n  background-color: #323232;\n  padding: 10px 25px;\n  font-size: 1.1rem;\n  font-weight: 300;\n  color: #fff;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.toast .btn,\n.toast .btn-large,\n.toast .btn-flat {\n  margin: 0;\n  margin-left: 3rem;\n}\n\n.toast.rounded {\n  border-radius: 24px;\n}\n\n@media only screen and (max-width: 600px) {\n  .toast {\n    width: 100%;\n    border-radius: 0;\n  }\n}\n\n@media only screen and (min-width: 601px) and (max-width: 992px) {\n  .toast {\n    float: left;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .toast {\n    float: right;\n  }\n}\n\n.tabs {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  overflow-x: auto;\n  overflow-y: hidden;\n  height: 48px;\n  background-color: #fff;\n  margin: 0 auto;\n  width: 100%;\n  white-space: nowrap;\n}\n\n.tabs .tab {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  display: block;\n  float: left;\n  text-align: center;\n  line-height: 48px;\n  height: 48px;\n  padding: 0;\n  margin: 0;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  letter-spacing: .8px;\n  width: 15%;\n  min-width: 80px;\n}\n\n.tabs .tab a {\n  color: #ee6e73;\n  display: block;\n  width: 100%;\n  height: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  transition: color .28s ease;\n}\n\n.tabs .tab a:hover {\n  color: #f9c9cb;\n}\n\n.tabs .tab.disabled a {\n  color: #f9c9cb;\n  cursor: default;\n}\n\n.tabs .indicator {\n  position: absolute;\n  bottom: 0;\n  height: 2px;\n  background-color: #f6b2b5;\n  will-change: left, right;\n}\n\n.material-tooltip {\n  padding: 10px 8px;\n  font-size: 1rem;\n  z-index: 2000;\n  background-color: transparent;\n  border-radius: 2px;\n  color: #fff;\n  min-height: 36px;\n  line-height: 120%;\n  opacity: 0;\n  display: none;\n  position: absolute;\n  text-align: center;\n  max-width: calc(100% - 4px);\n  overflow: hidden;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n}\n\n.backdrop {\n  position: absolute;\n  opacity: 0;\n  display: none;\n  height: 7px;\n  width: 14px;\n  border-radius: 0 0 50% 50%;\n  background-color: #323232;\n  z-index: -1;\n  -webkit-transform-origin: 50% 0%;\n  transform-origin: 50% 0%;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n.btn,\n.btn-large,\n.btn-flat {\n  border: none;\n  border-radius: 2px;\n  display: inline-block;\n  height: 36px;\n  line-height: 36px;\n  outline: 0;\n  padding: 0 2rem;\n  text-transform: uppercase;\n  vertical-align: middle;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.btn.disabled,\n.disabled.btn-large,\n.btn-floating.disabled,\n.btn-large.disabled,\n.btn:disabled,\n.btn-large:disabled,\n.btn-large:disabled,\n.btn-floating:disabled,\n.btn[disabled],\n[disabled].btn-large,\n.btn-large[disabled],\n.btn-floating[disabled] {\n  background-color: #DFDFDF !important;\n  box-shadow: none;\n  color: #9F9F9F !important;\n  cursor: default;\n}\n\n.btn.disabled *,\n.disabled.btn-large *,\n.btn-floating.disabled *,\n.btn-large.disabled *,\n.btn:disabled *,\n.btn-large:disabled *,\n.btn-large:disabled *,\n.btn-floating:disabled *,\n.btn[disabled] *,\n[disabled].btn-large *,\n.btn-large[disabled] *,\n.btn-floating[disabled] * {\n  pointer-events: none;\n}\n\n.btn.disabled:hover,\n.disabled.btn-large:hover,\n.btn-floating.disabled:hover,\n.btn-large.disabled:hover,\n.btn:disabled:hover,\n.btn-large:disabled:hover,\n.btn-large:disabled:hover,\n.btn-floating:disabled:hover,\n.btn[disabled]:hover,\n[disabled].btn-large:hover,\n.btn-large[disabled]:hover,\n.btn-floating[disabled]:hover {\n  background-color: #DFDFDF !important;\n  color: #9F9F9F !important;\n}\n\n.btn i,\n.btn-large i,\n.btn-floating i,\n.btn-large i,\n.btn-flat i {\n  font-size: 1.3rem;\n  line-height: inherit;\n}\n\n.btn,\n.btn-large {\n  text-decoration: none;\n  color: #fff;\n  background-color: #26a69a;\n  text-align: center;\n  letter-spacing: .5px;\n  transition: .2s ease-out;\n  cursor: pointer;\n}\n\n.btn:hover,\n.btn-large:hover {\n  background-color: #2bbbad;\n}\n\n.btn-floating {\n  display: inline-block;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  width: 37px;\n  height: 37px;\n  line-height: 37px;\n  padding: 0;\n  background-color: #26a69a;\n  border-radius: 50%;\n  transition: .3s;\n  cursor: pointer;\n  vertical-align: middle;\n}\n\n.btn-floating i {\n  width: inherit;\n  display: inline-block;\n  text-align: center;\n  color: #fff;\n  font-size: 1.6rem;\n  line-height: 37px;\n}\n\n.btn-floating:hover {\n  background-color: #26a69a;\n}\n\n.btn-floating:before {\n  border-radius: 0;\n}\n\n.btn-floating.btn-large {\n  width: 55.5px;\n  height: 55.5px;\n}\n\n.btn-floating.btn-large i {\n  line-height: 55.5px;\n}\n\nbutton.btn-floating {\n  border: none;\n}\n\n.fixed-action-btn {\n  position: fixed;\n  right: 23px;\n  bottom: 23px;\n  padding-top: 15px;\n  margin-bottom: 0;\n  z-index: 998;\n}\n\n.fixed-action-btn.active ul {\n  visibility: visible;\n}\n\n.fixed-action-btn.horizontal {\n  padding: 0 0 0 15px;\n}\n\n.fixed-action-btn.horizontal ul {\n  text-align: right;\n  right: 64px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  height: 100%;\n  left: auto;\n  width: 500px;\n}\n\n.fixed-action-btn.horizontal ul li {\n  display: inline-block;\n  margin: 15px 15px 0 0;\n}\n\n.fixed-action-btn ul {\n  left: 0;\n  right: 0;\n  text-align: center;\n  position: absolute;\n  bottom: 64px;\n  margin: 0;\n  visibility: hidden;\n}\n\n.fixed-action-btn ul li {\n  margin-bottom: 15px;\n}\n\n.fixed-action-btn ul a.btn-floating {\n  opacity: 0;\n}\n\n.btn-flat {\n  box-shadow: none;\n  background-color: transparent;\n  color: #343434;\n  cursor: pointer;\n  transition: background-color .2s;\n}\n\n.btn-flat:focus,\n.btn-flat:active {\n  background-color: transparent;\n}\n\n.btn-flat:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n  box-shadow: none;\n}\n\n.btn-flat.disabled {\n  color: #b3b3b3;\n  cursor: default;\n}\n\n.btn-large {\n  height: 54px;\n  line-height: 54px;\n}\n\n.btn-large i {\n  font-size: 1.6rem;\n}\n\n.btn-block {\n  display: block;\n}\n\n.dropdown-content {\n  background-color: #fff;\n  margin: 0;\n  display: none;\n  min-width: 100px;\n  max-height: 650px;\n  overflow-y: auto;\n  opacity: 0;\n  position: absolute;\n  z-index: 999;\n  will-change: width, height;\n}\n\n.dropdown-content li {\n  clear: both;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: pointer;\n  min-height: 50px;\n  line-height: 1.5rem;\n  width: 100%;\n  text-align: left;\n  text-transform: none;\n}\n\n.dropdown-content li:hover,\n.dropdown-content li.active,\n.dropdown-content li.selected {\n  background-color: #eee;\n}\n\n.dropdown-content li.active.selected {\n  background-color: #e1e1e1;\n}\n\n.dropdown-content li.divider {\n  min-height: 0;\n  height: 1px;\n}\n\n.dropdown-content li > a,\n.dropdown-content li > span {\n  font-size: 16px;\n  color: #26a69a;\n  display: block;\n  line-height: 22px;\n  padding: 14px 16px;\n}\n\n.dropdown-content li > span > label {\n  top: 1px;\n  left: 3px;\n  height: 18px;\n}\n\n.dropdown-content li > a > i {\n  height: inherit;\n  line-height: inherit;\n}\n\n/*!\n * Waves v0.6.0\n * http://fian.my.id/Waves\n *\n * Copyright 2014 Alfiana E. Sibuea and other contributors\n * Released under the MIT license\n * https://github.com/fians/Waves/blob/master/LICENSE\n */\n\n.waves-effect {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n  z-index: 1;\n  will-change: opacity, transform;\n  transition: all .3s ease-out;\n}\n\n.waves-effect .waves-ripple {\n  position: absolute;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  transition: all 0.7s ease-out;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  pointer-events: none;\n}\n\n.waves-effect.waves-light .waves-ripple {\n  background-color: rgba(255, 255, 255, 0.45);\n}\n\n.waves-effect.waves-red .waves-ripple {\n  background-color: rgba(244, 67, 54, 0.7);\n}\n\n.waves-effect.waves-yellow .waves-ripple {\n  background-color: rgba(255, 235, 59, 0.7);\n}\n\n.waves-effect.waves-orange .waves-ripple {\n  background-color: rgba(255, 152, 0, 0.7);\n}\n\n.waves-effect.waves-purple .waves-ripple {\n  background-color: rgba(156, 39, 176, 0.7);\n}\n\n.waves-effect.waves-green .waves-ripple {\n  background-color: rgba(76, 175, 80, 0.7);\n}\n\n.waves-effect.waves-teal .waves-ripple {\n  background-color: rgba(0, 150, 136, 0.7);\n}\n\n.waves-effect input[type=\"button\"],\n.waves-effect input[type=\"reset\"],\n.waves-effect input[type=\"submit\"] {\n  border: 0;\n  font-style: normal;\n  font-size: inherit;\n  text-transform: inherit;\n  background: none;\n}\n\n.waves-effect img {\n  position: relative;\n  z-index: -1;\n}\n\n.waves-notransition {\n  transition: none !important;\n}\n\n.waves-circle {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, #fff 100%, #000 100%);\n}\n\n.waves-input-wrapper {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}\n\n.waves-input-wrapper .waves-button-input {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n.waves-circle {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n  -webkit-mask-image: none;\n}\n\n.waves-block {\n  display: block;\n}\n\n.waves-effect .waves-ripple {\n  z-index: -1;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  background-color: #fafafa;\n  padding: 0;\n  max-height: 70%;\n  width: 55%;\n  margin: auto;\n  overflow-y: auto;\n  border-radius: 2px;\n  will-change: top, opacity;\n}\n\n@media only screen and (max-width: 992px) {\n  .modal {\n    width: 80%;\n  }\n}\n\n.modal h1,\n.modal h2,\n.modal h3,\n.modal h4 {\n  margin-top: 0;\n}\n\n.modal .modal-content {\n  padding: 24px;\n}\n\n.modal .modal-close {\n  cursor: pointer;\n}\n\n.modal .modal-footer {\n  border-radius: 0 0 2px 2px;\n  background-color: #fafafa;\n  padding: 4px 6px;\n  height: 56px;\n  width: 100%;\n}\n\n.modal .modal-footer .btn,\n.modal .modal-footer .btn-large,\n.modal .modal-footer .btn-flat {\n  float: right;\n  margin: 6px 0;\n}\n\n.lean-overlay {\n  position: fixed;\n  z-index: 999;\n  top: -100px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 125%;\n  width: 100%;\n  background: #000;\n  display: none;\n  will-change: opacity;\n}\n\n.modal.modal-fixed-footer {\n  padding: 0;\n  height: 70%;\n}\n\n.modal.modal-fixed-footer .modal-content {\n  position: absolute;\n  height: calc(100% - 56px);\n  max-height: 100%;\n  width: 100%;\n  overflow-y: auto;\n}\n\n.modal.modal-fixed-footer .modal-footer {\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  position: absolute;\n  bottom: 0;\n}\n\n.modal.bottom-sheet {\n  top: auto;\n  bottom: -100%;\n  margin: 0;\n  width: 100%;\n  max-height: 45%;\n  border-radius: 0;\n  will-change: bottom, opacity;\n}\n\n.collapsible {\n  border-top: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n  margin: 0.5rem 0 1rem 0;\n}\n\n.collapsible-header {\n  display: block;\n  cursor: pointer;\n  min-height: 3rem;\n  line-height: 3rem;\n  padding: 0 1rem;\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n}\n\n.collapsible-header i {\n  width: 2rem;\n  font-size: 1.6rem;\n  line-height: 3rem;\n  display: block;\n  float: left;\n  text-align: center;\n  margin-right: 1rem;\n}\n\n.collapsible-body {\n  display: none;\n  border-bottom: 1px solid #ddd;\n  box-sizing: border-box;\n}\n\n.collapsible-body p {\n  margin: 0;\n  padding: 2rem;\n}\n\n.side-nav .collapsible,\n.side-nav.fixed .collapsible {\n  border: none;\n  box-shadow: none;\n}\n\n.side-nav .collapsible li,\n.side-nav.fixed .collapsible li {\n  padding: 0;\n}\n\n.side-nav .collapsible-header,\n.side-nav.fixed .collapsible-header {\n  background-color: transparent;\n  border: none;\n  line-height: inherit;\n  height: inherit;\n  padding: 0 16px;\n}\n\n.side-nav .collapsible-header:hover,\n.side-nav.fixed .collapsible-header:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.side-nav .collapsible-header i,\n.side-nav.fixed .collapsible-header i {\n  line-height: inherit;\n}\n\n.side-nav .collapsible-body,\n.side-nav.fixed .collapsible-body {\n  border: 0;\n  background-color: #fff;\n}\n\n.side-nav .collapsible-body li a,\n.side-nav.fixed .collapsible-body li a {\n  padding: 0 23.5px 0 31px;\n}\n\n.collapsible.popout {\n  border: none;\n  box-shadow: none;\n}\n\n.collapsible.popout > li {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  margin: 0 24px;\n  transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.collapsible.popout > li.active {\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  margin: 16px 0;\n}\n\n.chip {\n  display: inline-block;\n  height: 32px;\n  font-size: 13px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  line-height: 32px;\n  padding: 0 12px;\n  border-radius: 16px;\n  background-color: #e4e4e4;\n  margin-bottom: 5px;\n  margin-right: 5px;\n}\n\n.chip img {\n  float: left;\n  margin: 0 8px 0 -12px;\n  height: 32px;\n  width: 32px;\n  border-radius: 50%;\n}\n\n.chip .close {\n  cursor: pointer;\n  float: right;\n  font-size: 16px;\n  line-height: 32px;\n  padding-left: 8px;\n}\n\n.chips {\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  box-shadow: none;\n  margin-bottom: 30px;\n  min-height: 45px;\n  outline: none;\n  padding-bottom: 5px;\n  transition: all .3s;\n}\n\n.chips.focus {\n  border-bottom: 1px solid #26a69a;\n  box-shadow: 0 1px 0 0 #26a69a;\n}\n\n.chips:hover {\n  cursor: text;\n}\n\n.chips .chip.selected {\n  background-color: #26a69a;\n  color: #fff;\n}\n\n.chips .input {\n  background: none;\n  border: 0;\n  color: rgba(0, 0, 0, 0.6);\n  display: inline-block;\n  font-size: 13px;\n  font-weight: 500;\n  height: 32px;\n  margin-right: 20px;\n  line-height: 32px;\n  outline: 0;\n  padding: 0 !important;\n  width: 120px !important;\n}\n\n.chips .input:focus {\n  border: 0 !important;\n  box-shadow: none !important;\n}\n\n.materialboxed {\n  display: block;\n  cursor: -webkit-zoom-in;\n  cursor: zoom-in;\n  position: relative;\n  transition: opacity .4s;\n}\n\n.materialboxed:hover {\n  will-change: left, top, width, height;\n}\n\n.materialboxed:hover:not(.active) {\n  opacity: .8;\n}\n\n.materialboxed.active {\n  cursor: -webkit-zoom-out;\n  cursor: zoom-out;\n}\n\n#materialbox-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #292929;\n  z-index: 1000;\n  will-change: opacity;\n}\n\n.materialbox-caption {\n  position: fixed;\n  display: none;\n  color: #fff;\n  line-height: 50px;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  padding: 0% 15%;\n  height: 50px;\n  z-index: 1000;\n  -webkit-font-smoothing: antialiased;\n}\n\nselect:focus {\n  outline: 1px solid #c9f3ef;\n}\n\nbutton:focus {\n  outline: none;\n  background-color: #2ab7a9;\n}\n\nlabel {\n  font-size: 0.8rem;\n  color: #9e9e9e;\n}\n\n::-webkit-input-placeholder {\n  color: #d1d1d1;\n}\n\n:-moz-placeholder {\n  color: #d1d1d1;\n}\n\n::-moz-placeholder {\n  color: #d1d1d1;\n}\n\n:-ms-input-placeholder {\n  color: #d1d1d1;\n}\n\ninput:not([type]),\ninput[type=text],\ninput[type=password],\ninput[type=email],\ninput[type=url],\ninput[type=time],\ninput[type=date],\ninput[type=datetime],\ninput[type=datetime-local],\ninput[type=tel],\ninput[type=number],\ninput[type=search],\ntextarea.materialize-textarea {\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  border-radius: 0;\n  outline: none;\n  height: 3rem;\n  width: 100%;\n  font-size: 1rem;\n  margin: 0 0 20px 0;\n  padding: 0;\n  box-shadow: none;\n  box-sizing: content-box;\n  transition: all 0.3s;\n}\n\ninput:not([type]):disabled,\ninput:not([type])[readonly=\"readonly\"],\ninput[type=text]:disabled,\ninput[type=text][readonly=\"readonly\"],\ninput[type=password]:disabled,\ninput[type=password][readonly=\"readonly\"],\ninput[type=email]:disabled,\ninput[type=email][readonly=\"readonly\"],\ninput[type=url]:disabled,\ninput[type=url][readonly=\"readonly\"],\ninput[type=time]:disabled,\ninput[type=time][readonly=\"readonly\"],\ninput[type=date]:disabled,\ninput[type=date][readonly=\"readonly\"],\ninput[type=datetime]:disabled,\ninput[type=datetime][readonly=\"readonly\"],\ninput[type=datetime-local]:disabled,\ninput[type=datetime-local][readonly=\"readonly\"],\ninput[type=tel]:disabled,\ninput[type=tel][readonly=\"readonly\"],\ninput[type=number]:disabled,\ninput[type=number][readonly=\"readonly\"],\ninput[type=search]:disabled,\ninput[type=search][readonly=\"readonly\"],\ntextarea.materialize-textarea:disabled,\ntextarea.materialize-textarea[readonly=\"readonly\"] {\n  color: rgba(0, 0, 0, 0.26);\n  border-bottom: 1px dotted rgba(0, 0, 0, 0.26);\n}\n\ninput:not([type]):disabled + label,\ninput:not([type])[readonly=\"readonly\"] + label,\ninput[type=text]:disabled + label,\ninput[type=text][readonly=\"readonly\"] + label,\ninput[type=password]:disabled + label,\ninput[type=password][readonly=\"readonly\"] + label,\ninput[type=email]:disabled + label,\ninput[type=email][readonly=\"readonly\"] + label,\ninput[type=url]:disabled + label,\ninput[type=url][readonly=\"readonly\"] + label,\ninput[type=time]:disabled + label,\ninput[type=time][readonly=\"readonly\"] + label,\ninput[type=date]:disabled + label,\ninput[type=date][readonly=\"readonly\"] + label,\ninput[type=datetime]:disabled + label,\ninput[type=datetime][readonly=\"readonly\"] + label,\ninput[type=datetime-local]:disabled + label,\ninput[type=datetime-local][readonly=\"readonly\"] + label,\ninput[type=tel]:disabled + label,\ninput[type=tel][readonly=\"readonly\"] + label,\ninput[type=number]:disabled + label,\ninput[type=number][readonly=\"readonly\"] + label,\ninput[type=search]:disabled + label,\ninput[type=search][readonly=\"readonly\"] + label,\ntextarea.materialize-textarea:disabled + label,\ntextarea.materialize-textarea[readonly=\"readonly\"] + label {\n  color: rgba(0, 0, 0, 0.26);\n}\n\ninput:not([type]):focus:not([readonly]),\ninput[type=text]:focus:not([readonly]),\ninput[type=password]:focus:not([readonly]),\ninput[type=email]:focus:not([readonly]),\ninput[type=url]:focus:not([readonly]),\ninput[type=time]:focus:not([readonly]),\ninput[type=date]:focus:not([readonly]),\ninput[type=datetime]:focus:not([readonly]),\ninput[type=datetime-local]:focus:not([readonly]),\ninput[type=tel]:focus:not([readonly]),\ninput[type=number]:focus:not([readonly]),\ninput[type=search]:focus:not([readonly]),\ntextarea.materialize-textarea:focus:not([readonly]) {\n  border-bottom: 1px solid #26a69a;\n  box-shadow: 0 1px 0 0 #26a69a;\n}\n\ninput:not([type]):focus:not([readonly]) + label,\ninput[type=text]:focus:not([readonly]) + label,\ninput[type=password]:focus:not([readonly]) + label,\ninput[type=email]:focus:not([readonly]) + label,\ninput[type=url]:focus:not([readonly]) + label,\ninput[type=time]:focus:not([readonly]) + label,\ninput[type=date]:focus:not([readonly]) + label,\ninput[type=datetime]:focus:not([readonly]) + label,\ninput[type=datetime-local]:focus:not([readonly]) + label,\ninput[type=tel]:focus:not([readonly]) + label,\ninput[type=number]:focus:not([readonly]) + label,\ninput[type=search]:focus:not([readonly]) + label,\ntextarea.materialize-textarea:focus:not([readonly]) + label {\n  color: #26a69a;\n}\n\ninput:not([type]).valid,\ninput:not([type]):focus.valid,\ninput[type=text].valid,\ninput[type=text]:focus.valid,\ninput[type=password].valid,\ninput[type=password]:focus.valid,\ninput[type=email].valid,\ninput[type=email]:focus.valid,\ninput[type=url].valid,\ninput[type=url]:focus.valid,\ninput[type=time].valid,\ninput[type=time]:focus.valid,\ninput[type=date].valid,\ninput[type=date]:focus.valid,\ninput[type=datetime].valid,\ninput[type=datetime]:focus.valid,\ninput[type=datetime-local].valid,\ninput[type=datetime-local]:focus.valid,\ninput[type=tel].valid,\ninput[type=tel]:focus.valid,\ninput[type=number].valid,\ninput[type=number]:focus.valid,\ninput[type=search].valid,\ninput[type=search]:focus.valid,\ntextarea.materialize-textarea.valid,\ntextarea.materialize-textarea:focus.valid {\n  border-bottom: 1px solid #4CAF50;\n  box-shadow: 0 1px 0 0 #4CAF50;\n}\n\ninput:not([type]).valid + label:after,\ninput:not([type]):focus.valid + label:after,\ninput[type=text].valid + label:after,\ninput[type=text]:focus.valid + label:after,\ninput[type=password].valid + label:after,\ninput[type=password]:focus.valid + label:after,\ninput[type=email].valid + label:after,\ninput[type=email]:focus.valid + label:after,\ninput[type=url].valid + label:after,\ninput[type=url]:focus.valid + label:after,\ninput[type=time].valid + label:after,\ninput[type=time]:focus.valid + label:after,\ninput[type=date].valid + label:after,\ninput[type=date]:focus.valid + label:after,\ninput[type=datetime].valid + label:after,\ninput[type=datetime]:focus.valid + label:after,\ninput[type=datetime-local].valid + label:after,\ninput[type=datetime-local]:focus.valid + label:after,\ninput[type=tel].valid + label:after,\ninput[type=tel]:focus.valid + label:after,\ninput[type=number].valid + label:after,\ninput[type=number]:focus.valid + label:after,\ninput[type=search].valid + label:after,\ninput[type=search]:focus.valid + label:after,\ntextarea.materialize-textarea.valid + label:after,\ntextarea.materialize-textarea:focus.valid + label:after {\n  content: attr(data-success);\n  color: #4CAF50;\n  opacity: 1;\n}\n\ninput:not([type]).invalid,\ninput:not([type]):focus.invalid,\ninput[type=text].invalid,\ninput[type=text]:focus.invalid,\ninput[type=password].invalid,\ninput[type=password]:focus.invalid,\ninput[type=email].invalid,\ninput[type=email]:focus.invalid,\ninput[type=url].invalid,\ninput[type=url]:focus.invalid,\ninput[type=time].invalid,\ninput[type=time]:focus.invalid,\ninput[type=date].invalid,\ninput[type=date]:focus.invalid,\ninput[type=datetime].invalid,\ninput[type=datetime]:focus.invalid,\ninput[type=datetime-local].invalid,\ninput[type=datetime-local]:focus.invalid,\ninput[type=tel].invalid,\ninput[type=tel]:focus.invalid,\ninput[type=number].invalid,\ninput[type=number]:focus.invalid,\ninput[type=search].invalid,\ninput[type=search]:focus.invalid,\ntextarea.materialize-textarea.invalid,\ntextarea.materialize-textarea:focus.invalid {\n  border-bottom: 1px solid #F44336;\n  box-shadow: 0 1px 0 0 #F44336;\n}\n\ninput:not([type]).invalid + label:after,\ninput:not([type]):focus.invalid + label:after,\ninput[type=text].invalid + label:after,\ninput[type=text]:focus.invalid + label:after,\ninput[type=password].invalid + label:after,\ninput[type=password]:focus.invalid + label:after,\ninput[type=email].invalid + label:after,\ninput[type=email]:focus.invalid + label:after,\ninput[type=url].invalid + label:after,\ninput[type=url]:focus.invalid + label:after,\ninput[type=time].invalid + label:after,\ninput[type=time]:focus.invalid + label:after,\ninput[type=date].invalid + label:after,\ninput[type=date]:focus.invalid + label:after,\ninput[type=datetime].invalid + label:after,\ninput[type=datetime]:focus.invalid + label:after,\ninput[type=datetime-local].invalid + label:after,\ninput[type=datetime-local]:focus.invalid + label:after,\ninput[type=tel].invalid + label:after,\ninput[type=tel]:focus.invalid + label:after,\ninput[type=number].invalid + label:after,\ninput[type=number]:focus.invalid + label:after,\ninput[type=search].invalid + label:after,\ninput[type=search]:focus.invalid + label:after,\ntextarea.materialize-textarea.invalid + label:after,\ntextarea.materialize-textarea:focus.invalid + label:after {\n  content: attr(data-error);\n  color: #F44336;\n  opacity: 1;\n}\n\ninput:not([type]).validate + label,\ninput[type=text].validate + label,\ninput[type=password].validate + label,\ninput[type=email].validate + label,\ninput[type=url].validate + label,\ninput[type=time].validate + label,\ninput[type=date].validate + label,\ninput[type=datetime].validate + label,\ninput[type=datetime-local].validate + label,\ninput[type=tel].validate + label,\ninput[type=number].validate + label,\ninput[type=search].validate + label,\ntextarea.materialize-textarea.validate + label {\n  width: 100%;\n  pointer-events: none;\n}\n\ninput:not([type]) + label:after,\ninput[type=text] + label:after,\ninput[type=password] + label:after,\ninput[type=email] + label:after,\ninput[type=url] + label:after,\ninput[type=time] + label:after,\ninput[type=date] + label:after,\ninput[type=datetime] + label:after,\ninput[type=datetime-local] + label:after,\ninput[type=tel] + label:after,\ninput[type=number] + label:after,\ninput[type=search] + label:after,\ntextarea.materialize-textarea + label:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 60px;\n  opacity: 0;\n  transition: .2s opacity ease-out, .2s color ease-out;\n}\n\n.input-field {\n  position: relative;\n  margin-top: 1rem;\n}\n\n.input-field.col label {\n  left: 0.75rem;\n}\n\n.input-field.col .prefix ~ label,\n.input-field.col .prefix ~ .validate ~ label {\n  width: calc(100% - 3rem - 1.5rem);\n}\n\n.input-field label {\n  color: #9e9e9e;\n  position: absolute;\n  top: 0.8rem;\n  font-size: 1rem;\n  cursor: text;\n  transition: .2s ease-out;\n}\n\n.input-field label.active {\n  font-size: 0.8rem;\n  -webkit-transform: translateY(-140%);\n  transform: translateY(-140%);\n}\n\n.input-field .prefix {\n  position: absolute;\n  width: 3rem;\n  font-size: 2rem;\n  transition: color .2s;\n}\n\n.input-field .prefix.active {\n  color: #26a69a;\n}\n\n.input-field .prefix ~ input,\n.input-field .prefix ~ textarea,\n.input-field .prefix ~ label,\n.input-field .prefix ~ .validate ~ label,\n.input-field .prefix ~ .autocomplete-content {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem);\n}\n\n.input-field .prefix ~ label {\n  margin-left: 3rem;\n}\n\n@media only screen and (max-width: 992px) {\n  .input-field .prefix ~ input {\n    width: 86%;\n    width: calc(100% - 3rem);\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .input-field .prefix ~ input {\n    width: 80%;\n    width: calc(100% - 3rem);\n  }\n}\n\n.input-field input[type=search] {\n  display: block;\n  line-height: inherit;\n  padding-left: 4rem;\n  width: calc(100% - 4rem);\n}\n\n.input-field input[type=search]:focus {\n  background-color: #fff;\n  border: 0;\n  box-shadow: none;\n  color: #444;\n}\n\n.input-field input[type=search]:focus + label i,\n.input-field input[type=search]:focus ~ .mdi-navigation-close,\n.input-field input[type=search]:focus ~ .material-icons {\n  color: #444;\n}\n\n.input-field input[type=search] + label {\n  left: 1rem;\n}\n\n.input-field input[type=search] ~ .mdi-navigation-close,\n.input-field input[type=search] ~ .material-icons {\n  position: absolute;\n  top: 0;\n  right: 1rem;\n  color: transparent;\n  cursor: pointer;\n  font-size: 2rem;\n  transition: .3s color;\n}\n\ntextarea {\n  width: 100%;\n  height: 3rem;\n  background-color: transparent;\n}\n\ntextarea.materialize-textarea {\n  overflow-y: hidden;\n  padding: .8rem 0 1.6rem 0;\n  resize: none;\n  min-height: 3rem;\n}\n\n.hiddendiv {\n  display: none;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  padding-top: 1.2rem;\n}\n\n.autocomplete-content {\n  margin-top: -15px;\n  display: block;\n  opacity: 1;\n  position: static;\n}\n\n.autocomplete-content li .highlight {\n  color: #444;\n}\n\n.autocomplete-content li img {\n  height: 40px;\n  width: 40px;\n  margin: 5px 15px;\n}\n\n[type=\"radio\"]:not(:checked),\n[type=\"radio\"]:checked {\n  position: absolute;\n  left: -9999px;\n  opacity: 0;\n}\n\n[type=\"radio\"]:not(:checked) + label,\n[type=\"radio\"]:checked + label {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 1rem;\n  transition: .28s ease;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n[type=\"radio\"] + label:before,\n[type=\"radio\"] + label:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 4px;\n  width: 16px;\n  height: 16px;\n  z-index: 0;\n  transition: .28s ease;\n}\n\n[type=\"radio\"]:not(:checked) + label:before,\n[type=\"radio\"]:not(:checked) + label:after,\n[type=\"radio\"]:checked + label:before,\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:before,\n[type=\"radio\"].with-gap:checked + label:after {\n  border-radius: 50%;\n}\n\n[type=\"radio\"]:not(:checked) + label:before,\n[type=\"radio\"]:not(:checked) + label:after {\n  border: 2px solid #5a5a5a;\n}\n\n[type=\"radio\"]:not(:checked) + label:after {\n  z-index: -1;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n\n[type=\"radio\"]:checked + label:before {\n  border: 2px solid transparent;\n}\n\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:before,\n[type=\"radio\"].with-gap:checked + label:after {\n  border: 2px solid #26a69a;\n}\n\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:after {\n  background-color: #26a69a;\n  z-index: 0;\n}\n\n[type=\"radio\"]:checked + label:after {\n  -webkit-transform: scale(1.02);\n  transform: scale(1.02);\n}\n\n[type=\"radio\"].with-gap:checked + label:after {\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n}\n\n[type=\"radio\"].tabbed:focus + label:before {\n  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n[type=\"radio\"].with-gap:disabled:checked + label:before {\n  border: 2px solid rgba(0, 0, 0, 0.26);\n}\n\n[type=\"radio\"].with-gap:disabled:checked + label:after {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.26);\n}\n\n[type=\"radio\"]:disabled:not(:checked) + label:before,\n[type=\"radio\"]:disabled:checked + label:before {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.26);\n}\n\n[type=\"radio\"]:disabled + label {\n  color: rgba(0, 0, 0, 0.26);\n}\n\n[type=\"radio\"]:disabled:not(:checked) + label:before {\n  border-color: rgba(0, 0, 0, 0.26);\n}\n\n[type=\"radio\"]:disabled:checked + label:after {\n  background-color: rgba(0, 0, 0, 0.26);\n  border-color: #BDBDBD;\n}\n\nform p {\n  margin-bottom: 10px;\n  text-align: left;\n}\n\nform p:last-child {\n  margin-bottom: 0;\n}\n\n[type=\"checkbox\"]:not(:checked),\n[type=\"checkbox\"]:checked {\n  position: absolute;\n  left: -9999px;\n  opacity: 0;\n}\n\n[type=\"checkbox\"] + label {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 1rem;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none;\n}\n\n[type=\"checkbox\"] + label:before,\n[type=\"checkbox\"]:not(.filled-in) + label:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 18px;\n  height: 18px;\n  z-index: 0;\n  border: 2px solid #5a5a5a;\n  border-radius: 1px;\n  margin-top: 2px;\n  transition: .2s;\n}\n\n[type=\"checkbox\"]:not(.filled-in) + label:after {\n  border: 0;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n\n[type=\"checkbox\"]:not(:checked):disabled + label:before {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.26);\n}\n\n[type=\"checkbox\"].tabbed:focus + label:after {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  border: 0;\n  border-radius: 50%;\n  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n[type=\"checkbox\"]:checked + label:before {\n  top: -4px;\n  left: -5px;\n  width: 12px;\n  height: 22px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #26a69a;\n  border-bottom: 2px solid #26a69a;\n  -webkit-transform: rotate(40deg);\n  transform: rotate(40deg);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"]:checked:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.26);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.26);\n}\n\n[type=\"checkbox\"]:indeterminate + label:before {\n  top: -11px;\n  left: -12px;\n  width: 10px;\n  height: 22px;\n  border-top: none;\n  border-left: none;\n  border-right: 2px solid #26a69a;\n  border-bottom: none;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"]:indeterminate:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.26);\n  background-color: transparent;\n}\n\n[type=\"checkbox\"].filled-in + label:after {\n  border-radius: 2px;\n}\n\n[type=\"checkbox\"].filled-in + label:before,\n[type=\"checkbox\"].filled-in + label:after {\n  content: '';\n  left: 0;\n  position: absolute;\n  transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;\n  z-index: 1;\n}\n\n[type=\"checkbox\"].filled-in:not(:checked) + label:before {\n  width: 0;\n  height: 0;\n  border: 3px solid transparent;\n  left: 6px;\n  top: 10px;\n  -webkit-transform: rotateZ(37deg);\n  transform: rotateZ(37deg);\n  -webkit-transform-origin: 20% 40%;\n  transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"].filled-in:not(:checked) + label:after {\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: 2px solid #5a5a5a;\n  top: 0px;\n  z-index: 0;\n}\n\n[type=\"checkbox\"].filled-in:checked + label:before {\n  top: 0;\n  left: 1px;\n  width: 8px;\n  height: 13px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  -webkit-transform: rotateZ(37deg);\n  transform: rotateZ(37deg);\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"].filled-in:checked + label:after {\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #26a69a;\n  background-color: #26a69a;\n  z-index: 0;\n}\n\n[type=\"checkbox\"].filled-in.tabbed:focus + label:after {\n  border-radius: 2px;\n  border-color: #5a5a5a;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n[type=\"checkbox\"].filled-in.tabbed:checked:focus + label:after {\n  border-radius: 2px;\n  background-color: #26a69a;\n  border-color: #26a69a;\n}\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:before {\n  background-color: transparent;\n  border: 2px solid transparent;\n}\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:after {\n  border-color: transparent;\n  background-color: #BDBDBD;\n}\n\n[type=\"checkbox\"].filled-in:disabled:checked + label:before {\n  background-color: transparent;\n}\n\n[type=\"checkbox\"].filled-in:disabled:checked + label:after {\n  background-color: #BDBDBD;\n  border-color: #BDBDBD;\n}\n\n.switch,\n.switch * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none;\n}\n\n.switch label {\n  cursor: pointer;\n}\n\n.switch label input[type=checkbox] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switch label input[type=checkbox]:checked + .lever {\n  background-color: #84c7c1;\n}\n\n.switch label input[type=checkbox]:checked + .lever:after {\n  background-color: #26a69a;\n  left: 24px;\n}\n\n.switch label .lever {\n  content: \"\";\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 15px;\n  background-color: #818181;\n  border-radius: 15px;\n  margin-right: 10px;\n  transition: background 0.3s ease;\n  vertical-align: middle;\n  margin: 0 16px;\n}\n\n.switch label .lever:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 21px;\n  height: 21px;\n  background-color: #F1F1F1;\n  border-radius: 21px;\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);\n  left: -5px;\n  top: -3px;\n  transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease;\n}\n\ninput[type=checkbox]:checked:not(:disabled) ~ .lever:active::after,\ninput[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(38, 166, 154, 0.1);\n}\n\ninput[type=checkbox]:not(:disabled) ~ .lever:active:after,\ninput[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.08);\n}\n\n.switch input[type=checkbox][disabled] + .lever {\n  cursor: default;\n}\n\n.switch label input[type=checkbox][disabled] + .lever:after,\n.switch label input[type=checkbox][disabled]:checked + .lever:after {\n  background-color: #BDBDBD;\n}\n\nselect {\n  display: none;\n}\n\nselect.browser-default {\n  display: block;\n}\n\nselect {\n  background-color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n  padding: 5px;\n  border: 1px solid #f2f2f2;\n  border-radius: 2px;\n  height: 3rem;\n}\n\n.select-label {\n  position: absolute;\n}\n\n.select-wrapper {\n  position: relative;\n}\n\n.select-wrapper input.select-dropdown {\n  position: relative;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  outline: none;\n  height: 3rem;\n  line-height: 3rem;\n  width: 100%;\n  font-size: 1rem;\n  margin: 0 0 20px 0;\n  padding: 0;\n  display: block;\n}\n\n.select-wrapper span.caret {\n  color: initial;\n  position: absolute;\n  right: 0;\n  top: 16px;\n  font-size: 10px;\n}\n\n.select-wrapper span.caret.disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n\n.select-wrapper + label {\n  position: absolute;\n  top: -14px;\n  font-size: 0.8rem;\n}\n\nselect:disabled {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.select-wrapper input.select-dropdown:disabled {\n  color: rgba(0, 0, 0, 0.3);\n  cursor: default;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n}\n\n.select-wrapper i {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.select-dropdown li.disabled,\n.select-dropdown li.disabled > span,\n.select-dropdown li.optgroup {\n  color: rgba(0, 0, 0, 0.3);\n  background-color: transparent;\n}\n\n.prefix ~ .select-wrapper {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem);\n}\n\n.prefix ~ label {\n  margin-left: 3rem;\n}\n\n.select-dropdown li img {\n  height: 40px;\n  width: 40px;\n  margin: 5px 15px;\n  float: right;\n}\n\n.select-dropdown li.optgroup {\n  border-top: 1px solid #eee;\n}\n\n.select-dropdown li.optgroup.selected > span {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.select-dropdown li.optgroup > span {\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.select-dropdown li.optgroup ~ li.optgroup-option {\n  padding-left: 1rem;\n}\n\n.file-field {\n  position: relative;\n}\n\n.file-field .file-path-wrapper {\n  overflow: hidden;\n  padding-left: 10px;\n}\n\n.file-field input.file-path {\n  width: 100%;\n}\n\n.file-field .btn,\n.file-field .btn-large {\n  float: left;\n  height: 3rem;\n  line-height: 3rem;\n}\n\n.file-field span {\n  cursor: pointer;\n}\n\n.file-field input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n.range-field {\n  position: relative;\n}\n\ninput[type=range],\ninput[type=range] + .thumb {\n  cursor: pointer;\n}\n\ninput[type=range] {\n  position: relative;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  width: 100%;\n  margin: 15px 0;\n  padding: 0;\n}\n\ninput[type=range]:focus {\n  outline: none;\n}\n\ninput[type=range] + .thumb {\n  position: absolute;\n  border: none;\n  height: 0;\n  width: 0;\n  border-radius: 50%;\n  background-color: #26a69a;\n  top: 10px;\n  margin-left: -6px;\n  -webkit-transform-origin: 50% 50%;\n  transform-origin: 50% 50%;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n\ninput[type=range] + .thumb .value {\n  display: block;\n  width: 30px;\n  text-align: center;\n  color: #26a69a;\n  font-size: 0;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\ninput[type=range] + .thumb.active {\n  border-radius: 50% 50% 50% 0;\n}\n\ninput[type=range] + .thumb.active .value {\n  color: #fff;\n  margin-left: -1px;\n  margin-top: 8px;\n  font-size: 10px;\n}\n\ninput[type=range] {\n  -webkit-appearance: none;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n  height: 3px;\n  background: #c2c0c2;\n  border: none;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background-color: #26a69a;\n  -webkit-transform-origin: 50% 50%;\n  transform-origin: 50% 50%;\n  margin: -5px 0 0 0;\n  transition: .3s;\n}\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  background: #ccc;\n}\n\ninput[type=range] {\n  border: 1px solid white;\n}\n\ninput[type=range]::-moz-range-track {\n  height: 3px;\n  background: #ddd;\n  border: none;\n}\n\ninput[type=range]::-moz-range-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a;\n  margin-top: -5px;\n}\n\ninput[type=range]:-moz-focusring {\n  outline: 1px solid #fff;\n  outline-offset: -1px;\n}\n\ninput[type=range]:focus::-moz-range-track {\n  background: #ccc;\n}\n\ninput[type=range]::-ms-track {\n  height: 3px;\n  background: transparent;\n  border-color: transparent;\n  border-width: 6px 0;\n  color: transparent;\n}\n\ninput[type=range]::-ms-fill-lower {\n  background: #777;\n}\n\ninput[type=range]::-ms-fill-upper {\n  background: #ddd;\n}\n\ninput[type=range]::-ms-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #26a69a;\n}\n\ninput[type=range]:focus::-ms-fill-lower {\n  background: #888;\n}\n\ninput[type=range]:focus::-ms-fill-upper {\n  background: #ccc;\n}\n\n.table-of-contents.fixed {\n  position: fixed;\n}\n\n.table-of-contents li {\n  padding: 2px 0;\n}\n\n.table-of-contents a {\n  display: inline-block;\n  font-weight: 300;\n  color: #757575;\n  padding-left: 20px;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  letter-spacing: .4;\n  display: inline-block;\n}\n\n.table-of-contents a:hover {\n  color: #a8a8a8;\n  padding-left: 19px;\n  border-left: 1px solid #ea4a4f;\n}\n\n.table-of-contents a.active {\n  font-weight: 500;\n  padding-left: 18px;\n  border-left: 2px solid #ea4a4f;\n}\n\n.side-nav {\n  position: fixed;\n  width: 300px;\n  left: 0;\n  top: 0;\n  margin: 0;\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n  height: 100%;\n  height: calc(100% + 60px);\n  height: -moz-calc(100%);\n  padding-bottom: 60px;\n  background-color: #fff;\n  z-index: 999;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  overflow-y: auto;\n  will-change: transform;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform: translateX(-105%);\n  transform: translateX(-105%);\n}\n\n.side-nav.right-aligned {\n  right: 0;\n  -webkit-transform: translateX(105%);\n  transform: translateX(105%);\n  left: auto;\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n}\n\n.side-nav .collapsible {\n  margin: 0;\n}\n\n.side-nav li {\n  float: none;\n  line-height: 48px;\n}\n\n.side-nav li.active {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.side-nav a {\n  color: rgba(0, 0, 0, 0.87);\n  display: block;\n  font-size: 14px;\n  font-weight: 500;\n  height: 48px;\n  line-height: 48px;\n  padding: 0 32px;\n}\n\n.side-nav a:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.side-nav a.btn,\n.side-nav a.btn-large,\n.side-nav a.btn-large,\n.side-nav a.btn-flat,\n.side-nav a.btn-floating {\n  margin: 10px 15px;\n}\n\n.side-nav a.btn,\n.side-nav a.btn-large,\n.side-nav a.btn-large,\n.side-nav a.btn-floating {\n  color: #fff;\n}\n\n.side-nav a.btn-flat {\n  color: #343434;\n}\n\n.side-nav a.btn:hover,\n.side-nav a.btn-large:hover,\n.side-nav a.btn-large:hover {\n  background-color: #2bbbad;\n}\n\n.side-nav a.btn-floating:hover {\n  background-color: #26a69a;\n}\n\n.side-nav li > a > i,\n.side-nav li > a > [class^=\"mdi-\"],\n.side-nav li > a > [class*=\"mdi-\"],\n.side-nav li > a > i.material-icons {\n  float: left;\n  line-height: 48px;\n  margin: 0 32px 0 0;\n  width: 24px;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.side-nav .divider {\n  margin: 8px 0 0 0;\n}\n\n.side-nav .subheader {\n  cursor: initial;\n  pointer-events: none;\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 48px;\n}\n\n.side-nav .subheader:hover {\n  background-color: transparent;\n}\n\n.side-nav .userView {\n  overflow: hidden;\n  position: relative;\n  padding: 32px 32px 0;\n  margin-bottom: 8px;\n}\n\n.side-nav .userView a {\n  height: auto;\n  padding: 0;\n}\n\n.side-nav .userView a:hover {\n  background-color: transparent;\n}\n\n.side-nav .userView .background {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.side-nav .userView .circle,\n.side-nav .userView .name,\n.side-nav .userView .email {\n  display: block;\n}\n\n.side-nav .userView .circle {\n  height: 64px;\n  width: 64px;\n}\n\n.side-nav .userView .name,\n.side-nav .userView .email {\n  font-weight: 14px;\n  line-height: 24px;\n}\n\n.side-nav .userView .name {\n  margin-top: 16px;\n  font-weight: 500;\n}\n\n.side-nav .userView .email {\n  padding-bottom: 16px;\n  font-weight: 400;\n}\n\n.drag-target {\n  height: 100%;\n  width: 10px;\n  position: fixed;\n  top: 0;\n  z-index: 998;\n}\n\n.side-nav.fixed a {\n  display: block;\n  padding: 0 16px;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.side-nav.fixed {\n  left: 0;\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n  position: fixed;\n}\n\n.side-nav.fixed.right-aligned {\n  right: 0;\n  left: auto;\n}\n\n@media only screen and (max-width: 992px) {\n  .side-nav.fixed {\n    -webkit-transform: translateX(-105%);\n    transform: translateX(-105%);\n  }\n\n  .side-nav.fixed.right-aligned {\n    -webkit-transform: translateX(105%);\n    transform: translateX(105%);\n  }\n\n  .side-nav a {\n    padding: 0 16px;\n  }\n\n  .side-nav .userView {\n    padding: 16px 16px 0;\n  }\n}\n\n.side-nav .collapsible-body li.active,\n.side-nav.fixed .collapsible-body li.active {\n  background-color: #ee6e73;\n}\n\n.side-nav .collapsible-body li.active a,\n.side-nav.fixed .collapsible-body li.active a {\n  color: #fff;\n}\n\n#sidenav-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 120vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 997;\n  will-change: opacity;\n}\n\n.preloader-wrapper {\n  display: inline-block;\n  position: relative;\n  width: 48px;\n  height: 48px;\n}\n\n.preloader-wrapper.small {\n  width: 36px;\n  height: 36px;\n}\n\n.preloader-wrapper.big {\n  width: 64px;\n  height: 64px;\n}\n\n.preloader-wrapper.active {\n  -webkit-animation: container-rotate 1568ms linear infinite;\n  animation: container-rotate 1568ms linear infinite;\n}\n\n@-webkit-keyframes container-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes container-rotate {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n.spinner-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  border-color: #26a69a;\n}\n\n.spinner-blue,\n.spinner-blue-only {\n  border-color: #4285f4;\n}\n\n.spinner-red,\n.spinner-red-only {\n  border-color: #db4437;\n}\n\n.spinner-yellow,\n.spinner-yellow-only {\n  border-color: #f4b400;\n}\n\n.spinner-green,\n.spinner-green-only {\n  border-color: #0f9d58;\n}\n\n.active .spinner-layer.spinner-blue {\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .spinner-layer.spinner-red {\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .spinner-layer.spinner-yellow {\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .spinner-layer.spinner-green {\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .spinner-layer,\n.active .spinner-layer.spinner-blue-only,\n.active .spinner-layer.spinner-red-only,\n.active .spinner-layer.spinner-yellow-only,\n.active .spinner-layer.spinner-green-only {\n  opacity: 1;\n  -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n@-webkit-keyframes fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n  }\n\n  25% {\n    -webkit-transform: rotate(270deg);\n  }\n\n  37.5% {\n    -webkit-transform: rotate(405deg);\n  }\n\n  50% {\n    -webkit-transform: rotate(540deg);\n  }\n\n  62.5% {\n    -webkit-transform: rotate(675deg);\n  }\n\n  75% {\n    -webkit-transform: rotate(810deg);\n  }\n\n  87.5% {\n    -webkit-transform: rotate(945deg);\n  }\n\n  to {\n    -webkit-transform: rotate(1080deg);\n  }\n}\n\n@keyframes fill-unfill-rotate {\n  12.5% {\n    -webkit-transform: rotate(135deg);\n    transform: rotate(135deg);\n  }\n\n  25% {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg);\n  }\n\n  37.5% {\n    -webkit-transform: rotate(405deg);\n    transform: rotate(405deg);\n  }\n\n  50% {\n    -webkit-transform: rotate(540deg);\n    transform: rotate(540deg);\n  }\n\n  62.5% {\n    -webkit-transform: rotate(675deg);\n    transform: rotate(675deg);\n  }\n\n  75% {\n    -webkit-transform: rotate(810deg);\n    transform: rotate(810deg);\n  }\n\n  87.5% {\n    -webkit-transform: rotate(945deg);\n    transform: rotate(945deg);\n  }\n\n  to {\n    -webkit-transform: rotate(1080deg);\n    transform: rotate(1080deg);\n  }\n}\n\n@-webkit-keyframes blue-fade-in-out {\n  from {\n    opacity: 1;\n  }\n\n  25% {\n    opacity: 1;\n  }\n\n  26% {\n    opacity: 0;\n  }\n\n  89% {\n    opacity: 0;\n  }\n\n  90% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes blue-fade-in-out {\n  from {\n    opacity: 1;\n  }\n\n  25% {\n    opacity: 1;\n  }\n\n  26% {\n    opacity: 0;\n  }\n\n  89% {\n    opacity: 0;\n  }\n\n  90% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes red-fade-in-out {\n  from {\n    opacity: 0;\n  }\n\n  15% {\n    opacity: 0;\n  }\n\n  25% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  51% {\n    opacity: 0;\n  }\n}\n\n@keyframes red-fade-in-out {\n  from {\n    opacity: 0;\n  }\n\n  15% {\n    opacity: 0;\n  }\n\n  25% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  51% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes yellow-fade-in-out {\n  from {\n    opacity: 0;\n  }\n\n  40% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  75% {\n    opacity: 1;\n  }\n\n  76% {\n    opacity: 0;\n  }\n}\n\n@keyframes yellow-fade-in-out {\n  from {\n    opacity: 0;\n  }\n\n  40% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  75% {\n    opacity: 1;\n  }\n\n  76% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes green-fade-in-out {\n  from {\n    opacity: 0;\n  }\n\n  65% {\n    opacity: 0;\n  }\n\n  75% {\n    opacity: 1;\n  }\n\n  90% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes green-fade-in-out {\n  from {\n    opacity: 0;\n  }\n\n  65% {\n    opacity: 0;\n  }\n\n  75% {\n    opacity: 1;\n  }\n\n  90% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n.gap-patch {\n  position: absolute;\n  top: 0;\n  left: 45%;\n  width: 10%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit;\n}\n\n.gap-patch .circle {\n  width: 1000%;\n  left: -450%;\n}\n\n.circle-clipper {\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  border-color: inherit;\n}\n\n.circle-clipper .circle {\n  width: 200%;\n  height: 100%;\n  border-width: 3px;\n  border-style: solid;\n  border-color: inherit;\n  border-bottom-color: transparent !important;\n  border-radius: 50%;\n  -webkit-animation: none;\n  animation: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.circle-clipper.left .circle {\n  left: 0;\n  border-right-color: transparent !important;\n  -webkit-transform: rotate(129deg);\n  transform: rotate(129deg);\n}\n\n.circle-clipper.right .circle {\n  left: -100%;\n  border-left-color: transparent !important;\n  -webkit-transform: rotate(-129deg);\n  transform: rotate(-129deg);\n}\n\n.active .circle-clipper.left .circle {\n  -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n.active .circle-clipper.right .circle {\n  -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n  animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\n}\n\n@-webkit-keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n  }\n\n  50% {\n    -webkit-transform: rotate(-5deg);\n  }\n\n  to {\n    -webkit-transform: rotate(130deg);\n  }\n}\n\n@keyframes left-spin {\n  from {\n    -webkit-transform: rotate(130deg);\n    transform: rotate(130deg);\n  }\n\n  50% {\n    -webkit-transform: rotate(-5deg);\n    transform: rotate(-5deg);\n  }\n\n  to {\n    -webkit-transform: rotate(130deg);\n    transform: rotate(130deg);\n  }\n}\n\n@-webkit-keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n  }\n\n  50% {\n    -webkit-transform: rotate(5deg);\n  }\n\n  to {\n    -webkit-transform: rotate(-130deg);\n  }\n}\n\n@keyframes right-spin {\n  from {\n    -webkit-transform: rotate(-130deg);\n    transform: rotate(-130deg);\n  }\n\n  50% {\n    -webkit-transform: rotate(5deg);\n    transform: rotate(5deg);\n  }\n\n  to {\n    -webkit-transform: rotate(-130deg);\n    transform: rotate(-130deg);\n  }\n}\n\n#spinnerContainer.cooldown {\n  -webkit-animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);\n  animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n@-webkit-keyframes fade-out {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fade-out {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.slider {\n  position: relative;\n  height: 400px;\n  width: 100%;\n}\n\n.slider.fullscreen {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.slider.fullscreen ul.slides {\n  height: 100%;\n}\n\n.slider.fullscreen ul.indicators {\n  z-index: 2;\n  bottom: 30px;\n}\n\n.slider .slides {\n  background-color: #9e9e9e;\n  margin: 0;\n  height: 400px;\n}\n\n.slider .slides li {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: inherit;\n  overflow: hidden;\n}\n\n.slider .slides li img {\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-position: center;\n}\n\n.slider .slides li .caption {\n  color: #fff;\n  position: absolute;\n  top: 15%;\n  left: 15%;\n  width: 70%;\n  opacity: 0;\n}\n\n.slider .slides li .caption p {\n  color: #e0e0e0;\n}\n\n.slider .slides li.active {\n  z-index: 2;\n}\n\n.slider .indicators {\n  position: absolute;\n  text-align: center;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n}\n\n.slider .indicators .indicator-item {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 16px;\n  width: 16px;\n  margin: 0 12px;\n  background-color: #e0e0e0;\n  transition: background-color .3s;\n  border-radius: 50%;\n}\n\n.slider .indicators .indicator-item.active {\n  background-color: #4CAF50;\n}\n\n.carousel {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 400px;\n  -webkit-perspective: 500px;\n  perspective: 500px;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  transform-origin: 0% 50%;\n}\n\n.carousel.carousel-slider {\n  top: 0;\n  left: 0;\n  height: 0;\n}\n\n.carousel.carousel-slider .carousel-fixed-item {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 20px;\n  z-index: 1;\n}\n\n.carousel.carousel-slider .carousel-fixed-item.with-indicators {\n  bottom: 68px;\n}\n\n.carousel.carousel-slider .carousel-item {\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.carousel.carousel-slider .carousel-item h2 {\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 32px;\n}\n\n.carousel.carousel-slider .carousel-item p {\n  font-size: 15px;\n}\n\n.carousel .carousel-item {\n  display: none;\n  width: 200px;\n  height: 400px;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.carousel .carousel-item img {\n  width: 100%;\n}\n\n.carousel .indicators {\n  position: absolute;\n  text-align: center;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n}\n\n.carousel .indicators .indicator-item {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  height: 8px;\n  width: 8px;\n  margin: 24px 4px;\n  background-color: rgba(255, 255, 255, 0.5);\n  transition: background-color .3s;\n  border-radius: 50%;\n}\n\n.carousel .indicators .indicator-item.active {\n  background-color: #fff;\n}\n\n.picker {\n  font-size: 16px;\n  text-align: left;\n  line-height: 1.2;\n  color: #000000;\n  position: absolute;\n  z-index: 10000;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.picker__input {\n  cursor: default;\n}\n\n.picker__input.picker__input--active {\n  border-color: #0089ec;\n}\n\n.picker__holder {\n  width: 100%;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n/*!\n * Default mobile-first, responsive styling for pickadate.js\n * Demo: http://amsul.github.io/pickadate.js\n */\n\n.picker__holder,\n.picker__frame {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 100%;\n}\n\n.picker__holder {\n  position: fixed;\n  transition: background 0.15s ease-out, top 0s 0.15s;\n  -webkit-backface-visibility: hidden;\n}\n\n.picker__frame {\n  position: absolute;\n  margin: 0 auto;\n  min-width: 256px;\n  width: 300px;\n  max-height: 350px;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: alpha(opacity=0);\n  -moz-opacity: 0;\n  opacity: 0;\n  transition: all 0.15s ease-out;\n}\n\n@media (min-height: 28.875em) {\n  .picker__frame {\n    overflow: visible;\n    top: auto;\n    bottom: -100%;\n    max-height: 80%;\n  }\n}\n\n@media (min-height: 40.125em) {\n  .picker__frame {\n    margin-bottom: 7.5%;\n  }\n}\n\n.picker__wrap {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n\n@media (min-height: 28.875em) {\n  .picker__wrap {\n    display: block;\n  }\n}\n\n.picker__box {\n  background: #ffffff;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n@media (min-height: 28.875em) {\n  .picker__box {\n    display: block;\n    border: 1px solid #777777;\n    border-top-color: #898989;\n    border-bottom-width: 0;\n    border-radius: 5px 5px 0 0;\n    box-shadow: 0 12px 36px 16px rgba(0, 0, 0, 0.24);\n  }\n}\n\n.picker--opened .picker__holder {\n  top: 0;\n  background: transparent;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#1E000000,endColorstr=#1E000000)\";\n  zoom: 1;\n  background: rgba(0, 0, 0, 0.32);\n  transition: background 0.15s ease-out;\n}\n\n.picker--opened .picker__frame {\n  top: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: alpha(opacity=100);\n  -moz-opacity: 1;\n  opacity: 1;\n}\n\n@media (min-height: 35.875em) {\n  .picker--opened .picker__frame {\n    top: 10%;\n    bottom: auto;\n  }\n}\n\n.picker__input.picker__input--active {\n  border-color: #E3F2FD;\n}\n\n.picker__frame {\n  margin: 0 auto;\n  max-width: 325px;\n}\n\n@media (min-height: 38.875em) {\n  .picker--opened .picker__frame {\n    top: 10%;\n    bottom: auto;\n  }\n}\n\n.picker__box {\n  padding: 0 1em;\n}\n\n.picker__header {\n  text-align: center;\n  position: relative;\n  margin-top: .75em;\n}\n\n.picker__month,\n.picker__year {\n  display: inline-block;\n  margin-left: .25em;\n  margin-right: .25em;\n}\n\n.picker__select--month,\n.picker__select--year {\n  height: 2em;\n  padding: 0;\n  margin-left: .25em;\n  margin-right: .25em;\n}\n\n.picker__select--month.browser-default {\n  display: inline;\n  background-color: #FFFFFF;\n  width: 40%;\n}\n\n.picker__select--year.browser-default {\n  display: inline;\n  background-color: #FFFFFF;\n  width: 26%;\n}\n\n.picker__select--month:focus,\n.picker__select--year:focus {\n  border-color: rgba(0, 0, 0, 0.05);\n}\n\n.picker__nav--prev,\n.picker__nav--next {\n  position: absolute;\n  padding: .5em 1.25em;\n  width: 1em;\n  height: 1em;\n  box-sizing: content-box;\n  top: -0.25em;\n}\n\n.picker__nav--prev {\n  left: -1em;\n  padding-right: 1.25em;\n}\n\n.picker__nav--next {\n  right: -1em;\n  padding-left: 1.25em;\n}\n\n.picker__nav--disabled,\n.picker__nav--disabled:hover,\n.picker__nav--disabled:before,\n.picker__nav--disabled:before:hover {\n  cursor: default;\n  background: none;\n  border-right-color: #f5f5f5;\n  border-left-color: #f5f5f5;\n}\n\n.picker__table {\n  text-align: center;\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  font-size: 1rem;\n  width: 100%;\n  margin-top: .75em;\n  margin-bottom: .5em;\n}\n\n.picker__table th,\n.picker__table td {\n  text-align: center;\n}\n\n.picker__table td {\n  margin: 0;\n  padding: 0;\n}\n\n.picker__weekday {\n  width: 14.285714286%;\n  font-size: .75em;\n  padding-bottom: .25em;\n  color: #999999;\n  font-weight: 500;\n}\n\n@media (min-height: 33.875em) {\n  .picker__weekday {\n    padding-bottom: .5em;\n  }\n}\n\n.picker__day--today {\n  position: relative;\n  color: #595959;\n  letter-spacing: -.3;\n  padding: .75rem 0;\n  font-weight: 400;\n  border: 1px solid transparent;\n}\n\n.picker__day--disabled:before {\n  border-top-color: #aaaaaa;\n}\n\n.picker__day--infocus:hover {\n  cursor: pointer;\n  color: #000;\n  font-weight: 500;\n}\n\n.picker__day--outfocus {\n  display: none;\n  padding: .75rem 0;\n  color: #fff;\n}\n\n.picker__day--outfocus:hover {\n  cursor: pointer;\n  color: #dddddd;\n  font-weight: 500;\n}\n\n.picker__day--highlighted:hover,\n.picker--focused .picker__day--highlighted {\n  cursor: pointer;\n}\n\n.picker__day--selected,\n.picker__day--selected:hover,\n.picker--focused .picker__day--selected {\n  border-radius: 50%;\n  -webkit-transform: scale(0.75);\n  transform: scale(0.75);\n  background: #0089ec;\n  color: #ffffff;\n}\n\n.picker__day--disabled,\n.picker__day--disabled:hover,\n.picker--focused .picker__day--disabled {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default;\n}\n\n.picker__day--highlighted.picker__day--disabled,\n.picker__day--highlighted.picker__day--disabled:hover {\n  background: #bbbbbb;\n}\n\n.picker__footer {\n  text-align: center;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.picker__button--today,\n.picker__button--clear,\n.picker__button--close {\n  border: 1px solid #ffffff;\n  background: #ffffff;\n  font-size: .8em;\n  padding: .66em 0;\n  font-weight: bold;\n  width: 33%;\n  display: inline-block;\n  vertical-align: bottom;\n}\n\n.picker__button--today:hover,\n.picker__button--clear:hover,\n.picker__button--close:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #b1dcfb;\n  border-bottom-color: #b1dcfb;\n}\n\n.picker__button--today:focus,\n.picker__button--clear:focus,\n.picker__button--close:focus {\n  background: #b1dcfb;\n  border-color: rgba(0, 0, 0, 0.05);\n  outline: none;\n}\n\n.picker__button--today:before,\n.picker__button--clear:before,\n.picker__button--close:before {\n  position: relative;\n  display: inline-block;\n  height: 0;\n}\n\n.picker__button--today:before,\n.picker__button--clear:before {\n  content: \" \";\n  margin-right: .45em;\n}\n\n.picker__button--today:before {\n  top: -0.05em;\n  width: 0;\n  border-top: 0.66em solid #0059bc;\n  border-left: .66em solid transparent;\n}\n\n.picker__button--clear:before {\n  top: -0.25em;\n  width: .66em;\n  border-top: 3px solid #ee2200;\n}\n\n.picker__button--close:before {\n  content: \"\\D7\";\n  top: -0.1em;\n  vertical-align: top;\n  font-size: 1.1em;\n  margin-right: .35em;\n  color: #777777;\n}\n\n.picker__button--today[disabled],\n.picker__button--today[disabled]:hover {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default;\n}\n\n.picker__button--today[disabled]:before {\n  border-top-color: #aaaaaa;\n}\n\n.picker__box {\n  border-radius: 2px;\n  overflow: hidden;\n}\n\n.picker__date-display {\n  text-align: center;\n  background-color: #26a69a;\n  color: #fff;\n  padding-bottom: 15px;\n  font-weight: 300;\n}\n\n.picker__nav--prev:hover,\n.picker__nav--next:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #a1ded8;\n}\n\n.picker__weekday-display {\n  background-color: #1f897f;\n  padding: 10px;\n  font-weight: 200;\n  letter-spacing: .5;\n  font-size: 1rem;\n  margin-bottom: 15px;\n}\n\n.picker__month-display {\n  text-transform: uppercase;\n  font-size: 2rem;\n}\n\n.picker__day-display {\n  font-size: 4.5rem;\n  font-weight: 400;\n}\n\n.picker__year-display {\n  font-size: 1.8rem;\n  color: rgba(255, 255, 255, 0.4);\n}\n\n.picker__box {\n  padding: 0;\n}\n\n.picker__calendar-container {\n  padding: 0 1rem;\n}\n\n.picker__calendar-container thead {\n  border: none;\n}\n\n.picker__table {\n  margin-top: 0;\n  margin-bottom: .5em;\n}\n\n.picker__day--infocus {\n  color: #595959;\n  letter-spacing: -.3;\n  padding: .75rem 0;\n  font-weight: 400;\n  border: 1px solid transparent;\n}\n\n.picker__day.picker__day--today {\n  color: #26a69a;\n}\n\n.picker__day.picker__day--today.picker__day--selected {\n  color: #fff;\n}\n\n.picker__weekday {\n  font-size: .9rem;\n}\n\n.picker__day--selected,\n.picker__day--selected:hover,\n.picker--focused .picker__day--selected {\n  border-radius: 50%;\n  -webkit-transform: scale(0.9);\n  transform: scale(0.9);\n  background-color: #26a69a;\n  color: #ffffff;\n}\n\n.picker__day--selected.picker__day--outfocus,\n.picker__day--selected:hover.picker__day--outfocus,\n.picker--focused .picker__day--selected.picker__day--outfocus {\n  background-color: #a1ded8;\n}\n\n.picker__footer {\n  text-align: right;\n  padding: 5px 10px;\n}\n\n.picker__close,\n.picker__today {\n  font-size: 1.1rem;\n  padding: 0 1rem;\n  color: #26a69a;\n}\n\n.picker__nav--prev:before,\n.picker__nav--next:before {\n  content: \" \";\n  border-top: .5em solid transparent;\n  border-bottom: .5em solid transparent;\n  border-right: 0.75em solid #676767;\n  width: 0;\n  height: 0;\n  display: block;\n  margin: 0 auto;\n}\n\n.picker__nav--next:before {\n  border-right: 0;\n  border-left: 0.75em solid #676767;\n}\n\nbutton.picker__today:focus,\nbutton.picker__clear:focus,\nbutton.picker__close:focus {\n  background-color: #a1ded8;\n}\n\n.picker__list {\n  list-style: none;\n  padding: 0.75em 0 4.2em;\n  margin: 0;\n}\n\n.picker__list-item {\n  border-bottom: 1px solid #dddddd;\n  border-top: 1px solid #dddddd;\n  margin-bottom: -1px;\n  position: relative;\n  background: #ffffff;\n  padding: .75em 1.25em;\n}\n\n@media (min-height: 46.75em) {\n  .picker__list-item {\n    padding: .5em 1em;\n  }\n}\n\n.picker__list-item:hover {\n  cursor: pointer;\n  color: #000000;\n  background: #b1dcfb;\n  border-color: #0089ec;\n  z-index: 10;\n}\n\n.picker__list-item--highlighted {\n  border-color: #0089ec;\n  z-index: 10;\n}\n\n.picker__list-item--highlighted:hover,\n.picker--focused .picker__list-item--highlighted {\n  cursor: pointer;\n  color: #000000;\n  background: #b1dcfb;\n}\n\n.picker__list-item--selected,\n.picker__list-item--selected:hover,\n.picker--focused .picker__list-item--selected {\n  background: #0089ec;\n  color: #ffffff;\n  z-index: 10;\n}\n\n.picker__list-item--disabled,\n.picker__list-item--disabled:hover,\n.picker--focused .picker__list-item--disabled {\n  background: #f5f5f5;\n  border-color: #f5f5f5;\n  color: #dddddd;\n  cursor: default;\n  border-color: #dddddd;\n  z-index: auto;\n}\n\n.picker--time .picker__button--clear {\n  display: block;\n  width: 80%;\n  margin: 1em auto 0;\n  padding: 1em 1.25em;\n  background: none;\n  border: 0;\n  font-weight: 500;\n  font-size: .67em;\n  text-align: center;\n  text-transform: uppercase;\n  color: #666;\n}\n\n.picker--time .picker__button--clear:hover,\n.picker--time .picker__button--clear:focus {\n  color: #000000;\n  background: #b1dcfb;\n  background: #ee2200;\n  border-color: #ee2200;\n  cursor: pointer;\n  color: #ffffff;\n  outline: none;\n}\n\n.picker--time .picker__button--clear:before {\n  top: -0.25em;\n  color: #666;\n  font-size: 1.25em;\n  font-weight: bold;\n}\n\n.picker--time .picker__button--clear:hover:before,\n.picker--time .picker__button--clear:focus:before {\n  color: #ffffff;\n}\n\n.picker--time .picker__frame {\n  min-width: 256px;\n  max-width: 320px;\n}\n\n.picker--time .picker__box {\n  font-size: 1em;\n  background: #f2f2f2;\n  padding: 0;\n}\n\n@media (min-height: 40.125em) {\n  .picker--time .picker__box {\n    margin-bottom: 5em;\n  }\n}\n\n/* fallback */\n\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Material Icons\"), local(\"MaterialIcons-Regular\"), url(\"/home/splincode/Develop/github.com/codework/javascript/cad/source/app/js/sass/fonts/icons.woff2\") format(\"woff2\");\n}\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased;\n}\n\nhtml,\nbody {\n  font-family: 'Helvetica', sans-serif;\n}\n\n.demo-drawer-header {\n  height: 64px;\n  color: #fff;\n  background: #4285F4;\n}\n\n.mdl-layout--fixed-drawer.is-upgraded:not(.is-small-screen) > .mdl-layout__header {\n  margin-left: 350px;\n  width: calc(100% - 350px);\n}\n\n.mdl-layout__header {\n  z-index: 300;\n}\n\n.mdl-layout__drawer {\n  width: 350px;\n}\n\n.mdl-color--blue-grey-900,\n.mdl-color--blue-grey-800 {\n  background-color: #fff !important;\n}\n\n.demo-drawer .demo-navigation {\n  color: #000;\n  overflow: auto;\n}\n\ninput {\n  margin: 0 !important;\n}\n\nnav {\n  line-height: 2 !important;\n}\n\ninput:focus:not([readonly]) {\n  border-bottom: 1px solid #4285F4 !important;\n  box-shadow: 0 1px 0 0 #4285F4 !important;\n}\n\ninput:focus:not([readonly]) + label {\n  color: #4285F4 !important;\n}\n\n.title {\n  width: 95%;\n  margin: 0 auto;\n}\n\nnav i {\n  line-height: 1 !important;\n  height: auto !important;\n  font-size: 24px !important;\n  float: left;\n  margin-right: 5px;\n}\n\n.clearfix:after {\n  content: \" \";\n  /* Older browser do not support empty content */\n  visibility: hidden;\n  display: block;\n  height: 0;\n  clear: both;\n}\n\n.mdl-layout__drawer {\n  transform: translateX(-350px);\n}\n\n.mdl-layout--fixed-drawer > .mdl-layout__content {\n  background: repeating-linear-gradient(transparent, transparent 10px, #d1d1d1 12px), repeating-linear-gradient(90deg, transparent, transparent 10px, #d1d1d1 12px);\n  overflow: auto;\n}\n\n.mdl-layout--fixed-drawer > .mdl-layout__content {\n  margin-left: 350px;\n}\n\n.demo-layout .mdl-layout__header .mdl-layout__drawer-button {\n  display: none;\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout--fixed-drawer > .mdl-layout__content {\n    margin-left: 0;\n  }\n\n  .mdl-layout__header {\n    z-index: 3;\n  }\n\n  .demo-layout .mdl-layout__header .mdl-layout__drawer-button {\n    display: block;\n  }\n}\n\n.mdl-layout--fixed-drawer > .mdl-layout__drawer {\n  box-shadow: 3px -2px 4px 0px #9f9f9f;\n}\n\n.is-small-screen .closemenu {\n  display: none;\n}\n\n.is-small-screen .mdl-layout__drawer:not(.is-visible) {\n  transform: translateX(-350px);\n}\n\n.demo-layout.is-small-screen .mdl-layout__header .mdl-layout__drawer-button {\n  display: block;\n}\n\n.mdl-layout--fixed-drawer.is-small-screen > .mdl-layout__content {\n  margin-left: 0;\n}\n\n.closemenu {\n  width: 23px;\n  height: 48px;\n  cursor: pointer;\n  border-left: 1px solid #D4D4D4;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);\n  background: rgba(255, 255, 255, 0.9) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAQAAAAXDMSnAAAAi0lEQVR4AX3JQcqBURQG4O/+9WNG30D3vOfSDTuQsgcZyBakZANSzMVMBme3zsBI5/VMn4ZKLP5ki1E4tYejWpilxVUtzOEUD68odYmXR5BJNp/4zllXD2phllYvamHmirsayUkfJ5ruHzueTldC08kcT5YOY9xYujqQM03XKXuaLmEtNF1e1Nz89gbL+0do6OEwRwAAAABJRU5ErkJggg==) 7px center/7px 10px no-repeat;\n  position: absolute;\n  left: 350px;\n  top: 7px;\n  border-left: 1px solid #D4D4D4;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);\n}\n\n@media screen and (min-width: 1025px) {\n  .mdl-layout--fixed-drawer > .mdl-layout__header .mdl-layout__header-row {\n    padding-left: 70px;\n  }\n}\n\n.is-small-screen .demo-drawer {\n  z-index: 1000;\n}\n\n.demo-drawer .mdl-menu__container {\n  z-index: 0;\n}\n\n.mdl-layout__drawer {\n  overflow: visible !important;\n  overflow-y: visible !important;\n}\n\n.btn {\n  padding: 0;\n}\n\n.diactivate {\n  opacity: 0.4;\n  cursor: default;\n}\n\n.mdl-layout__content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.dropdown-content li > a,\n.dropdown-content li > span {\n  color: #000;\n}\n\n#view-source1,\n#view-source2,\n#view-source3 {\n  position: fixed;\n  display: block;\n  right: 0;\n  margin-right: 40px;\n  margin-bottom: 40px;\n  top: 13px;\n  z-index: 400;\n  width: 100px;\n}\n\n@media screen and (max-width: 1024px) {\n  .mdl-layout__header {\n    z-index: 300;\n  }\n}\n\n#view-source1 {\n  right: 240px;\n}\n\n#view-source2 {\n  right: 120px;\n}\n\n#view-source3 {\n  right: 0px;\n}\n\n#graphs {\n  width: auto;\n  height: 100px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: center;\n  padding-right: 50px;\n  padding-left: 50px;\n}\n\n.block {\n  width: 300px;\n  height: 100px;\n  background: #fff;\n  border: 1px solid #000;\n  position: relative;\n  float: left;\n  margin-left: -1px;\n}\n\n.nameing {\n  position: absolute;\n  top: -50px;\n  width: 30px;\n  background: #26a69a;\n  color: #fff;\n  text-align: center;\n  left: 50%;\n  margin-left: -15px;\n  border: 1px solid #f9f9f9;\n}\n\n.block:hover {\n  outline: 2px solid #26a69a;\n  z-index: 100;\n}\n\n.Tiny-my {\n  font-size: 14px;\n  padding-right: 10px;\n}\n\n.addRight {\n  top: 50%;\n  margin-top: -15px;\n  right: -15px;\n}\n\n.addLeft {\n  top: 50%;\n  margin-top: -15px;\n  left: -15px;\n}\n\n.addTop {\n  left: 50%;\n  margin-left: -15px;\n  top: -15px;\n}\n\n.addBottom {\n  left: 50%;\n  margin-left: -15px;\n  bottom: -15px;\n}\n\n.block-btn {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s, opacity 0.2s linear;\n  z-index: 100;\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 30px;\n  padding: 5px;\n  color: #fff;\n  background-color: #26a69a;\n  cursor: pointer;\n}\n\n.edge {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  font-size: 15px;\n  padding: 0px;\n  color: #fff;\n  background-color: #26a69a;\n  text-align: center;\n  border-radius: 50%;\n  z-index: 5;\n}\n\n.edgeLeft {\n  top: 50%;\n  margin-top: -10px;\n  left: -10px;\n}\n\n.edgeRight {\n  top: 50%;\n  margin-top: -10px;\n  right: -10px;\n}\n\n.block:hover .block-btn {\n  visibility: visible;\n  opacity: 1;\n}\n\n.dropdown-content li > a,\n.dropdown-content li > span {\n  font-size: 14px;\n}\n\n.collapsible {\n  margin: 0;\n  border: none;\n  box-shadow: none;\n}\n\nnav ul li {\n  float: none;\n}\n\n.collapsible-body {\n  background: #f9f9f9;\n}\n\n.collapsible-header {\n  padding: 5px;\n}\n\n.mdl-layout__content {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.sealingLeft,\n.sealingRight {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  width: 15px;\n  background: url(/home/splincode/Develop/github.com/codework/javascript/cad/source/app/js/sass/img/bg.png) repeat;\n  display: none;\n}\n\n.sealingLeft {\n  left: -15px;\n}\n\n.sealingRight {\n  right: -15px;\n}\n\n.active-first-element {\n  justify-content: flex-start;\n}\n\n", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var AppController=function(){/**
		 * [инициация структуры приложения]
		 * @param  {Object} $rootScope     [глобальная область видимости приложения]
		 * @param  {Object} storageService [хранимая информация о приложении]
		 */function AppController($rootScope,storageService){_classCallCheck(this,AppController);this.storage=storageService;}/**
	     * [добавление стержня]
	     */_createClass(AppController,[{key:'addKernelBlock',value:function addKernelBlock(){// первый старт приложения
	this.storage.start=true;this.storage.structure.item.push({F:{},q:{}});}}]);return AppController;}();var AppComponent=exports.AppComponent={template:__webpack_require__(11),controller:['$rootScope','storageService',AppController]};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = " <div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\">\n      \n  <header class=\"demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600\">\n    <div class=\"mdl-layout__header-row\">\n      <div class=\"closemenu\"></div>\n      <span class=\"mdl-layout-title\">Построение фигуры</span>\n      \n      <div class=\"mdl-layout-spacer\"></div>\n    </div>\n  </header>\n  \n  <div class=\"demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50\">\n    \n    <header class=\"demo-drawer-header\">\n      <div class=\"demo-avatar-dropdown\">\n        \n        <span>Главное меню</span>\n\n        <div class=\"mdl-layout-spacer\"></div>\n       \n        <button id=\"accbtn\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\">\n          <i class=\"material-icons\" role=\"presentation\">arrow_drop_down</i>\n          <span class=\"visuallyhidden\">Accounts</span>\n        </button>\n\n        <ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\" for=\"accbtn\">\n          <li class=\"mdl-menu__item newproject\">  <i class=\"Tiny-my material-icons\">mode_edit</i>Новый</li>\n          <li class=\"mdl-menu__item\">Открыть проект</li>\n          <li class=\"mdl-menu__item\">Сохранить проект</li>\n          <li class=\"mdl-menu__item\">Выход</li>\n          \n        </ul>\n\n      </div>\n    </header>\n   \n    <nav class=\"demo-navigation mdl-navigation mdl-color--blue-grey-800\">\n\n    \t<div class=\"row\">\n    \t    <div class=\"col s12\">\n    \t    \t<p><b>Растяжение — сжатие</b> — в сопротивлении материалов — вид продольной деформации стержня или бруса,\n    \t    \t возникающий в том случае, если нагрузка к нему прикладывается по его продольной оси (равнодействующая сил, \n    \t    \t \tвоздействующих на него, нормальна поперечному сечению стержня и проходит через его центр масс).</p>\n\n    \t    \t <p>Эпюрой продольной силы называется график распределения продольной силы вдоль от бруса.\n    \t    \t Ось эпюры параллельна продольной оси. Нулевая линия проводится тонкой линией. \n    \t    \t Значения чисел откладывают от оси, положительные - вверх, отрицательные вниз.</p>\n    \t   \t</div>\n    \t</div>\n\n    </nav>\n  </div>\n\n  <main class=\"mdl-layout__content mdl-color--grey-100\" ng-class=\"{'active-first-element' : $ctrl.storage.start}\">\n  \t<div id=\"outer\">\n  \t    \n        <div id=\"graphs\" ng-if=\"!$ctrl.storage.start\">\n    \t\t\t<a class=\"createElement btn-floating btn-large waves-effect waves-light red\" data-activates='dropdown' dropdown>\n    \t\t\t\t<i class=\"material-icons\">add</i>\n    \t\t\t</a>\n\n    \t\t\t<ul id='dropdown' class='dropdown-content'>\n    \t\t    \t<li><a class=\"addBlock\" href=\"#!\" ng-click=\"$ctrl.addKernelBlock()\">Добавить стержень</a></li>\n    \t\t  </ul>    \t\t  \n  \t    </div>\n        \n\n        <div id=\"graphs\" ng-if=\"$ctrl.storage.start\">\n          <kernel ng-repeat=\"kernel in $ctrl.storage.structure.item\" index=\"$index\"></kernel>\n        </div>\n\n  \t</div>\n  </main>\n\n  <a target=\"_blank\" id=\"view-source1\" class=\"waves-effect waves-light btn\">Фигура</a>\n  <a target=\"_blank\" id=\"view-source2\" class=\"waves-effect waves-light btn diactivate\">Расчеты</a>\n  <a target=\"_blank\" id=\"view-source3\" class=\"waves-effect waves-light btn diactivate\">Графики</a>\n</div>";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var KernelController=function(){/**
		 * [инициация структуры приложения]
		 * @param  {Object} $rootScope     [глобальная область видимости приложения]
		 * @param  {Object} storageService [хранимая информация о приложении]
		 */function KernelController($rootScope,storageService){_classCallCheck(this,KernelController);this.storage=storageService;}/**
		 * Добавляем стержень
		 * @param {[type]} i [description]
		 */_createClass(KernelController,[{key:'addKernelBlock',value:function addKernelBlock(i){console.log(this.storage);this.storage.structure.item.push({F:{},q:{}});}}]);return KernelController;}();var KernelComponent=exports.KernelComponent={bindings:{kid:'=',index:'=',nextIndex:'='},template:__webpack_require__(13),controller:['$rootScope','storageService',KernelController]};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<div class=\"block idblock-{{$ctrl.index}}\">\n\t<div class=\"nameing\">{{$ctrl.index+1}}</div>\n\t\n\t<div class=\"block-btn addRight\" data-activates='dropdown-1-{{$ctrl.index}}' dropdown>+</div>\n\t<div class=\"block-btn addLeft\" data-activates='dropdown-2-{{$ctrl.index}}' dropdown>+</div>\n\t<div class=\"block-btn addCenter\" data-activates='dropdown-3-{{$ctrl.index}}' dropdown>+</div>\n\t\n\t<!-- ${notfirstEdge}\n\t<div class=\"edge edgeRight\">${edgeIdRight}</div>\n\t -->\n\n\t<div class=\"sealingLeft\"></div>\n\t<div class=\"sealingRight\"></div>\n\t\n\t<ul id='dropdown-1-{{$ctrl.index}}' class='dropdown-content'>\n    \t<li ng-click=\"$ctrl.addKernelBlock($ctrl.index)\">\n    \t\t<a class=\"addBlockToRight\" ref=\"#!\">Добавить стержень</a>\n    \t\t<div class=\"divider\"></div>\n    \t</li>\n\n    \t<li ng-click=\"$ctrl.addKernelBlock($ctrl.index)\">\n    \t\t<a class=\"sealing addSealingRight\" href=\"#!\">Добавить заделку</a>\n    \t\t<div class=\"divider\"></div>\n    \t</li>\n\n    \t<li ng-click=\"$ctrl.addKernelBlock($ctrl.index)\">\n    \t\t<a class=\"\" href=\"#!\">Добавить поперечную силу (F)</a>\n    \t</li>\n  \t</ul>\n\t\n\t<ul id='dropdown-2-{{$ctrl.index}}' class='dropdown-content'>\n    \t<li ng-click=\"$ctrl.addKernelBlock($ctrl.index)\">\n    \t\t<a class=\"sealing addSealingLeft\" href=\"#!\">Добавить заделку</a>\n    \t\t<div class=\"divider\"></div>\n    \t</li>\n\n    \t<li ng-click=\"$ctrl.addKernelBlock($ctrl.index)\">\n    \t\t<a class=\"\" href=\"#!\">Добавить поперечную силу (F)</a>\n    \t</li>\n  \t</ul>\n\n  \t\t<ul id='dropdown-3-{{$ctrl.index}}' class='dropdown-content'>\n  \t    \t<li ng-click=\"$ctrl.addKernelBlock($ctrl.index)\">\n  \t    \t\t<a class=\"sealing addSealingLeft\" href=\"#!\">Добавить заделку</a>\n  \t    \t\t<div class=\"divider\"></div>\n  \t    \t</li>\n\n  \t    \t<li ng-click=\"$ctrl.addKernelBlock($ctrl.index)\">\n  \t    \t\t<a class=\"\" href=\"#!\">Добавить поперечную силу (F)</a>\n  \t    \t</li>\n  \t  \t</ul>\n\t\n</div>";

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=function(){var service={start:false,// 
	ye:10,// условные единицы
	structure:{item:[]}};return service;};;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/**
	 * material-design-lite - Material Design Components in CSS, JS and HTML
	 * @version v1.0.6
	 * @license Apache-2.0
	 * @copyright 2015 Google, Inc.
	 * @link https://github.com/google/material-design-lite
	 */!function(){"use strict";function e(e,t){if(e){if(t.element_.classList.contains(t.CssClasses_.MDL_JS_RIPPLE_EFFECT)){var s=document.createElement("span");s.classList.add(t.CssClasses_.MDL_RIPPLE_CONTAINER),s.classList.add(t.CssClasses_.MDL_JS_RIPPLE_EFFECT);var i=document.createElement("span");i.classList.add(t.CssClasses_.MDL_RIPPLE),s.appendChild(i),e.appendChild(s);}e.addEventListener("click",function(s){s.preventDefault();var i=e.href.split("#")[1],n=t.element_.querySelector("#"+i);t.resetTabState_(),t.resetPanelState_(),e.classList.add(t.CssClasses_.ACTIVE_CLASS),n.classList.add(t.CssClasses_.ACTIVE_CLASS);});}}function t(e,t,s,i){if(i.tabBar_.classList.contains(i.CssClasses_.JS_RIPPLE_EFFECT)){var n=document.createElement("span");n.classList.add(i.CssClasses_.RIPPLE_CONTAINER),n.classList.add(i.CssClasses_.JS_RIPPLE_EFFECT);var a=document.createElement("span");a.classList.add(i.CssClasses_.RIPPLE),n.appendChild(a),e.appendChild(n);}e.addEventListener("click",function(n){n.preventDefault();var a=e.href.split("#")[1],l=i.content_.querySelector("#"+a);i.resetTabState_(t),i.resetPanelState_(s),e.classList.add(i.CssClasses_.IS_ACTIVE),l.classList.add(i.CssClasses_.IS_ACTIVE);});}var s={upgradeDom:function upgradeDom(e,t){},upgradeElement:function upgradeElement(e,t){},upgradeElements:function upgradeElements(e){},upgradeAllRegistered:function upgradeAllRegistered(){},registerUpgradedCallback:function registerUpgradedCallback(e,t){},register:function register(e){},downgradeElements:function downgradeElements(e){}};s=function(){function e(e,t){for(var s=0;s<p.length;s++){if(p[s].className===e)return"undefined"!=typeof t&&(p[s]=t),p[s];}return!1;}function t(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",");}function s(e,s){var i=t(e);return-1!==i.indexOf(s);}function i(t,s){if("undefined"==typeof t&&"undefined"==typeof s)for(var a=0;a<p.length;a++){i(p[a].className,p[a].cssClass);}else{var l=t;if("undefined"==typeof s){var o=e(l);o&&(s=o.cssClass);}for(var r=document.querySelectorAll("."+s),d=0;d<r.length;d++){n(r[d],l);}}}function n(i,n){if(!("object"==(typeof i==="undefined"?"undefined":_typeof(i))&&i instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var a=t(i),l=[];if(n)s(i,n)||l.push(e(n));else{var o=i.classList;p.forEach(function(e){o.contains(e.cssClass)&&-1===l.indexOf(e)&&!s(i,e.className)&&l.push(e);});}for(var r,d=0,_=l.length;_>d;d++){if(r=l[d],!r)throw new Error("Unable to find a registered component for the given class.");a.push(r.className),i.setAttribute("data-upgraded",a.join(","));var h=new r.classConstructor(i);h[C]=r,c.push(h);for(var u=0,m=r.callbacks.length;m>u;u++){r.callbacks[u](i);}r.widget&&(i[r.className]=h);var E=document.createEvent("Events");E.initEvent("mdl-componentupgraded",!0,!0),i.dispatchEvent(E);}}function a(e){Array.isArray(e)||(e="function"==typeof e.item?Array.prototype.slice.call(e):[e]);for(var t,s=0,i=e.length;i>s;s++){t=e[s],t instanceof HTMLElement&&(n(t),t.children.length>0&&a(t.children));}}function l(t){var s="undefined"==typeof t.widget&&"undefined"==typeof t.widget,i=!0;s||(i=t.widget||t.widget);var n={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:i,callbacks:[]};if(p.forEach(function(e){if(e.cssClass===n.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===n.className)throw new Error("The provided className has already been registered");}),t.constructor.prototype.hasOwnProperty(C))throw new Error("MDL component classes must not have "+C+" defined as a property.");var a=e(t.classAsString,n);a||p.push(n);}function o(t,s){var i=e(t);i&&i.callbacks.push(s);}function r(){for(var e=0;e<p.length;e++){i(p[e].className);}}function d(e){for(var t=0;t<c.length;t++){var s=c[t];if(s.element_===e)return s;}}function _(e){if(e&&e[C].classConstructor.prototype.hasOwnProperty(u)){e[u]();var t=c.indexOf(e);c.splice(t,1);var s=e.element_.getAttribute("data-upgraded").split(","),i=s.indexOf(e[C].classAsString);s.splice(i,1),e.element_.setAttribute("data-upgraded",s.join(","));var n=document.createEvent("Events");n.initEvent("mdl-componentdowngraded",!0,!0),e.element_.dispatchEvent(n);}}function h(e){var t=function t(e){_(d(e));};if(e instanceof Array||e instanceof NodeList)for(var s=0;s<e.length;s++){t(e[s]);}else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");t(e);}}var p=[],c=[],u="mdlDowngrade",C="mdlComponentConfigInternal_";return{upgradeDom:i,upgradeElement:n,upgradeElements:a,upgradeAllRegistered:r,registerUpgradedCallback:o,register:l,downgradeElements:h};}(),s.ComponentConfigPublic,s.ComponentConfig,s.Component,s.upgradeDom=s.upgradeDom,s.upgradeElement=s.upgradeElement,s.upgradeElements=s.upgradeElements,s.upgradeAllRegistered=s.upgradeAllRegistered,s.registerUpgradedCallback=s.registerUpgradedCallback,s.register=s.register,s.downgradeElements=s.downgradeElements,window.componentHandler=s,window.componentHandler=s,window.addEventListener("load",function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),s.upgradeAllRegistered()):(s.upgradeElement=function(){},s.register=function(){});}),Date.now||(Date.now=function(){return new Date().getTime();},Date.now=Date.now);for(var i=["webkit","moz"],n=0;n<i.length&&!window.requestAnimationFrame;++n){var a=i[n];window.requestAnimationFrame=window[a+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a+"CancelAnimationFrame"]||window[a+"CancelRequestAnimationFrame"],window.requestAnimationFrame=window.requestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame;}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var l=0;window.requestAnimationFrame=function(e){var t=Date.now(),s=Math.max(l+16,t);return setTimeout(function(){e(l=s);},s-t);},window.cancelAnimationFrame=clearTimeout,window.requestAnimationFrame=window.requestAnimationFrame,window.cancelAnimationFrame=window.cancelAnimationFrame;}var o=function o(e){this.element_=e,this.init();};window.MaterialButton=o,o.prototype.Constant_={},o.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},o.prototype.blurHandler_=function(e){e&&this.element_.blur();},o.prototype.disable=function(){this.element_.disabled=!0;},o.prototype.disable=o.prototype.disable,o.prototype.enable=function(){this.element_.disabled=!1;},o.prototype.enable=o.prototype.enable,o.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e);}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler);}},o.prototype.mdlDowngrade_=function(){this.rippleElement_&&this.rippleElement_.removeEventListener("mouseup",this.boundRippleBlurHandler),this.element_.removeEventListener("mouseup",this.boundButtonBlurHandler),this.element_.removeEventListener("mouseleave",this.boundButtonBlurHandler);},o.prototype.mdlDowngrade=o.prototype.mdlDowngrade_,o.prototype.mdlDowngrade=o.prototype.mdlDowngrade,s.register({constructor:o,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0});var r=function r(e){this.element_=e,this.init();};window.MaterialCheckbox=r,r.prototype.Constant_={TINY_TIMEOUT:.001},r.prototype.CssClasses_={INPUT:"mdl-checkbox__input",BOX_OUTLINE:"mdl-checkbox__box-outline",FOCUS_HELPER:"mdl-checkbox__focus-helper",TICK_OUTLINE:"mdl-checkbox__tick-outline",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-checkbox__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded"},r.prototype.onChange_=function(e){this.updateClasses_();},r.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED);},r.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);},r.prototype.onMouseUp_=function(e){this.blur_();},r.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState();},r.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur();}.bind(this),this.Constant_.TINY_TIMEOUT);},r.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED);},r.prototype.checkToggleState=r.prototype.checkToggleState,r.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED);},r.prototype.checkDisabled=r.prototype.checkDisabled,r.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_();},r.prototype.disable=r.prototype.disable,r.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_();},r.prototype.enable=r.prototype.enable,r.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_();},r.prototype.check=r.prototype.check,r.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_();},r.prototype.uncheck=r.prototype.uncheck,r.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("span");e.classList.add(this.CssClasses_.BOX_OUTLINE);var t=document.createElement("span");t.classList.add(this.CssClasses_.FOCUS_HELPER);var s=document.createElement("span");if(s.classList.add(this.CssClasses_.TICK_OUTLINE),e.appendChild(s),this.element_.appendChild(t),this.element_.appendChild(e),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_);}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementMouseUp),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED);}},r.prototype.mdlDowngrade_=function(){this.rippleContainerElement_&&this.rippleContainerElement_.removeEventListener("mouseup",this.boundRippleMouseUp),this.inputElement_.removeEventListener("change",this.boundInputOnChange),this.inputElement_.removeEventListener("focus",this.boundInputOnFocus),this.inputElement_.removeEventListener("blur",this.boundInputOnBlur),this.element_.removeEventListener("mouseup",this.boundElementMouseUp);},r.prototype.mdlDowngrade=r.prototype.mdlDowngrade_,r.prototype.mdlDowngrade=r.prototype.mdlDowngrade,s.register({constructor:r,classAsString:"MaterialCheckbox",cssClass:"mdl-js-checkbox",widget:!0});var d=function d(e){this.element_=e,this.init();};window.MaterialIconToggle=d,d.prototype.Constant_={TINY_TIMEOUT:.001},d.prototype.CssClasses_={INPUT:"mdl-icon-toggle__input",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-icon-toggle__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},d.prototype.onChange_=function(e){this.updateClasses_();},d.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED);},d.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);},d.prototype.onMouseUp_=function(e){this.blur_();},d.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState();},d.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur();}.bind(this),this.Constant_.TINY_TIMEOUT);},d.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED);},d.prototype.checkToggleState=d.prototype.checkToggleState,d.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED);},d.prototype.checkDisabled=d.prototype.checkDisabled,d.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_();},d.prototype.disable=d.prototype.disable,d.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_();},d.prototype.enable=d.prototype.enable,d.prototype.check=function(){this.inputElement_.checked=!0,this.updateClasses_();},d.prototype.check=d.prototype.check,d.prototype.uncheck=function(){this.inputElement_.checked=!1,this.updateClasses_();},d.prototype.uncheck=d.prototype.uncheck,d.prototype.init=function(){if(this.element_){if(this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.boundRippleMouseUp=this.onMouseUp_.bind(this),this.rippleContainerElement_.addEventListener("mouseup",this.boundRippleMouseUp);var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(e),this.element_.appendChild(this.rippleContainerElement_);}this.boundInputOnChange=this.onChange_.bind(this),this.boundInputOnFocus=this.onFocus_.bind(this),this.boundInputOnBlur=this.onBlur_.bind(this),this.boundElementOnMouseUp=this.onMouseUp_.bind(this),this.inputElement_.addEventListener("change",this.boundInputOnChange),this.inputElement_.addEventListener("focus",this.boundInputOnFocus),this.inputElement_.addEventListener("blur",this.boundInputOnBlur),this.element_.addEventListener("mouseup",this.boundElementOnMouseUp),this.updateClasses_(),this.element_.classList.add("is-upgraded");}},d.prototype.mdlDowngrade_=function(){this.rippleContainerElement_&&this.rippleContainerElement_.removeEventListener("mouseup",this.boundRippleMouseUp),this.inputElement_.removeEventListener("change",this.boundInputOnChange),this.inputElement_.removeEventListener("focus",this.boundInputOnFocus),this.inputElement_.removeEventListener("blur",this.boundInputOnBlur),this.element_.removeEventListener("mouseup",this.boundElementOnMouseUp);},d.prototype.mdlDowngrade=d.prototype.mdlDowngrade_,d.prototype.mdlDowngrade=d.prototype.mdlDowngrade,s.register({constructor:d,classAsString:"MaterialIconToggle",cssClass:"mdl-js-icon-toggle",widget:!0});var _=function _(e){this.element_=e,this.init();};window.MaterialMenu=_,_.prototype.Constant_={TRANSITION_DURATION_SECONDS:.3,TRANSITION_DURATION_FRACTION:.8,CLOSE_TIMEOUT:150},_.prototype.Keycodes_={ENTER:13,ESCAPE:27,SPACE:32,UP_ARROW:38,DOWN_ARROW:40},_.prototype.CssClasses_={CONTAINER:"mdl-menu__container",OUTLINE:"mdl-menu__outline",ITEM:"mdl-menu__item",ITEM_RIPPLE_CONTAINER:"mdl-menu__item-ripple-container",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_UPGRADED:"is-upgraded",IS_VISIBLE:"is-visible",IS_ANIMATING:"is-animating",BOTTOM_LEFT:"mdl-menu--bottom-left",BOTTOM_RIGHT:"mdl-menu--bottom-right",TOP_LEFT:"mdl-menu--top-left",TOP_RIGHT:"mdl-menu--top-right",UNALIGNED:"mdl-menu--unaligned"},_.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_),this.container_=e;var t=document.createElement("div");t.classList.add(this.CssClasses_.OUTLINE),this.outline_=t,e.insertBefore(t,this.element_);var s=this.element_.getAttribute("for"),i=null;s&&(i=document.getElementById(s),i&&(this.forElement_=i,i.addEventListener("click",this.handleForClick_.bind(this)),i.addEventListener("keydown",this.handleForKeyboardEvent_.bind(this))));var n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM);this.boundItemKeydown_=this.handleItemKeyboardEvent_.bind(this),this.boundItemClick_=this.handleItemClick_.bind(this);for(var a=0;a<n.length;a++){n[a].addEventListener("click",this.boundItemClick_),n[a].tabIndex="-1",n[a].addEventListener("keydown",this.boundItemKeydown_);}if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT))for(this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),a=0;a<n.length;a++){var l=n[a],o=document.createElement("span");o.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);var r=document.createElement("span");r.classList.add(this.CssClasses_.RIPPLE),o.appendChild(r),l.appendChild(o),l.classList.add(this.CssClasses_.RIPPLE_EFFECT);}this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT),this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)&&this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT),this.element_.classList.contains(this.CssClasses_.TOP_LEFT)&&this.outline_.classList.add(this.CssClasses_.TOP_LEFT),this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)&&this.outline_.classList.add(this.CssClasses_.TOP_RIGHT),this.element_.classList.contains(this.CssClasses_.UNALIGNED)&&this.outline_.classList.add(this.CssClasses_.UNALIGNED),e.classList.add(this.CssClasses_.IS_UPGRADED);}},_.prototype.handleForClick_=function(e){if(this.element_&&this.forElement_){var t=this.forElement_.getBoundingClientRect(),s=this.forElement_.parentElement.getBoundingClientRect();this.element_.classList.contains(this.CssClasses_.UNALIGNED)||(this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"):this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.bottom=s.bottom-t.top+"px"):this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(this.container_.style.right=s.right-t.right+"px",this.container_.style.bottom=s.bottom-t.top+"px"):(this.container_.style.left=this.forElement_.offsetLeft+"px",this.container_.style.top=this.forElement_.offsetTop+this.forElement_.offsetHeight+"px"));}this.toggle(e);},_.prototype.handleForKeyboardEvent_=function(e){if(this.element_&&this.container_&&this.forElement_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)&&(e.keyCode===this.Keycodes_.UP_ARROW?(e.preventDefault(),t[t.length-1].focus()):e.keyCode===this.Keycodes_.DOWN_ARROW&&(e.preventDefault(),t[0].focus()));}},_.prototype.handleItemKeyboardEvent_=function(e){if(this.element_&&this.container_){var t=this.element_.querySelectorAll("."+this.CssClasses_.ITEM+":not([disabled])");if(t&&t.length>0&&this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)){var s=Array.prototype.slice.call(t).indexOf(e.target);if(e.keyCode===this.Keycodes_.UP_ARROW)e.preventDefault(),s>0?t[s-1].focus():t[t.length-1].focus();else if(e.keyCode===this.Keycodes_.DOWN_ARROW)e.preventDefault(),t.length>s+1?t[s+1].focus():t[0].focus();else if(e.keyCode===this.Keycodes_.SPACE||e.keyCode===this.Keycodes_.ENTER){e.preventDefault();var i=new MouseEvent("mousedown");e.target.dispatchEvent(i),i=new MouseEvent("mouseup"),e.target.dispatchEvent(i),e.target.click();}else e.keyCode===this.Keycodes_.ESCAPE&&(e.preventDefault(),this.hide());}}},_.prototype.handleItemClick_=function(e){e.target.hasAttribute("disabled")?e.stopPropagation():(this.closing_=!0,window.setTimeout(function(e){this.hide(),this.closing_=!1;}.bind(this),this.Constant_.CLOSE_TIMEOUT));},_.prototype.applyClip_=function(e,t){this.element_.classList.contains(this.CssClasses_.UNALIGNED)?this.element_.style.clip="":this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)?this.element_.style.clip="rect(0 "+t+"px 0 "+t+"px)":this.element_.classList.contains(this.CssClasses_.TOP_LEFT)?this.element_.style.clip="rect("+e+"px 0 "+e+"px 0)":this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?this.element_.style.clip="rect("+e+"px "+t+"px "+e+"px "+t+"px)":this.element_.style.clip="";},_.prototype.addAnimationEndListener_=function(){var e=function(){this.element_.removeEventListener("transitionend",e),this.element_.removeEventListener("webkitTransitionEnd",e),this.element_.classList.remove(this.CssClasses_.IS_ANIMATING);}.bind(this);this.element_.addEventListener("transitionend",e),this.element_.addEventListener("webkitTransitionEnd",e);},_.prototype.show=function(e){if(this.element_&&this.container_&&this.outline_){var t=this.element_.getBoundingClientRect().height,s=this.element_.getBoundingClientRect().width;this.container_.style.width=s+"px",this.container_.style.height=t+"px",this.outline_.style.width=s+"px",this.outline_.style.height=t+"px";for(var i=this.Constant_.TRANSITION_DURATION_SECONDS*this.Constant_.TRANSITION_DURATION_FRACTION,n=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),a=0;a<n.length;a++){var l=null;l=this.element_.classList.contains(this.CssClasses_.TOP_LEFT)||this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)?(t-n[a].offsetTop-n[a].offsetHeight)/t*i+"s":n[a].offsetTop/t*i+"s",n[a].style.transitionDelay=l;}this.applyClip_(t,s),window.requestAnimationFrame(function(){this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.element_.style.clip="rect(0 "+s+"px "+t+"px 0)",this.container_.classList.add(this.CssClasses_.IS_VISIBLE);}.bind(this)),this.addAnimationEndListener_();var o=function(t){t===e||this.closing_||t.target.parentNode===this.element_||(document.removeEventListener("click",o),this.hide());}.bind(this);document.addEventListener("click",o);}},_.prototype.show=_.prototype.show,_.prototype.hide=function(){if(this.element_&&this.container_&&this.outline_){for(var e=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),t=0;t<e.length;t++){e[t].style.transitionDelay=null;}var s=this.element_.getBoundingClientRect(),i=s.height,n=s.width;this.element_.classList.add(this.CssClasses_.IS_ANIMATING),this.applyClip_(i,n),this.container_.classList.remove(this.CssClasses_.IS_VISIBLE),this.addAnimationEndListener_();}},_.prototype.hide=_.prototype.hide,_.prototype.toggle=function(e){this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)?this.hide():this.show(e);},_.prototype.toggle=_.prototype.toggle,_.prototype.mdlDowngrade_=function(){for(var e=this.element_.querySelectorAll("."+this.CssClasses_.ITEM),t=0;t<e.length;t++){e[t].removeEventListener("click",this.boundItemClick_),e[t].removeEventListener("keydown",this.boundItemKeydown_);}},_.prototype.mdlDowngrade=_.prototype.mdlDowngrade_,_.prototype.mdlDowngrade=_.prototype.mdlDowngrade,s.register({constructor:_,classAsString:"MaterialMenu",cssClass:"mdl-js-menu",widget:!0});var h=function h(e){this.element_=e,this.init();};window.MaterialProgress=h,h.prototype.Constant_={},h.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},h.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%");},h.prototype.setProgress=h.prototype.setProgress,h.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%";},h.prototype.setBuffer=h.prototype.setBuffer,h.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,e=document.createElement("div"),e.className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,e=document.createElement("div"),e.className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded");}},h.prototype.mdlDowngrade_=function(){for(;this.element_.firstChild;){this.element_.removeChild(this.element_.firstChild);}},h.prototype.mdlDowngrade=h.prototype.mdlDowngrade_,h.prototype.mdlDowngrade=h.prototype.mdlDowngrade,s.register({constructor:h,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0});var p=function p(e){this.element_=e,this.init();};window.MaterialRadio=p,p.prototype.Constant_={TINY_TIMEOUT:.001},p.prototype.CssClasses_={IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked",IS_UPGRADED:"is-upgraded",JS_RADIO:"mdl-js-radio",RADIO_BTN:"mdl-radio__button",RADIO_OUTER_CIRCLE:"mdl-radio__outer-circle",RADIO_INNER_CIRCLE:"mdl-radio__inner-circle",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-radio__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple"},p.prototype.onChange_=function(e){for(var t=document.getElementsByClassName(this.CssClasses_.JS_RADIO),s=0;s<t.length;s++){var i=t[s].querySelector("."+this.CssClasses_.RADIO_BTN);i.getAttribute("name")===this.btnElement_.getAttribute("name")&&t[s].MaterialRadio.updateClasses_();}},p.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED);},p.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);},p.prototype.onMouseup_=function(e){this.blur_();},p.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState();},p.prototype.blur_=function(){window.setTimeout(function(){this.btnElement_.blur();}.bind(this),this.Constant_.TINY_TIMEOUT);},p.prototype.checkDisabled=function(){this.btnElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED);},p.prototype.checkDisabled=p.prototype.checkDisabled,p.prototype.checkToggleState=function(){this.btnElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED);},p.prototype.checkToggleState=p.prototype.checkToggleState,p.prototype.disable=function(){this.btnElement_.disabled=!0,this.updateClasses_();},p.prototype.disable=p.prototype.disable,p.prototype.enable=function(){this.btnElement_.disabled=!1,this.updateClasses_();},p.prototype.enable=p.prototype.enable,p.prototype.check=function(){this.btnElement_.checked=!0,this.updateClasses_();},p.prototype.check=p.prototype.check,p.prototype.uncheck=function(){this.btnElement_.checked=!1,this.updateClasses_();},p.prototype.uncheck=p.prototype.uncheck,p.prototype.init=function(){if(this.element_){this.btnElement_=this.element_.querySelector("."+this.CssClasses_.RADIO_BTN),this.boundChangeHandler_=this.onChange_.bind(this),this.boundFocusHandler_=this.onChange_.bind(this),this.boundBlurHandler_=this.onBlur_.bind(this),this.boundMouseUpHandler_=this.onMouseup_.bind(this);var e=document.createElement("span");e.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);var t=document.createElement("span");t.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE),this.element_.appendChild(e),this.element_.appendChild(t);var s;if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),s=document.createElement("span"),s.classList.add(this.CssClasses_.RIPPLE_CONTAINER),s.classList.add(this.CssClasses_.RIPPLE_EFFECT),s.classList.add(this.CssClasses_.RIPPLE_CENTER),s.addEventListener("mouseup",this.boundMouseUpHandler_);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),s.appendChild(i),this.element_.appendChild(s);}this.btnElement_.addEventListener("change",this.boundChangeHandler_),this.btnElement_.addEventListener("focus",this.boundFocusHandler_),this.btnElement_.addEventListener("blur",this.boundBlurHandler_),this.element_.addEventListener("mouseup",this.boundMouseUpHandler_),this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED);}},p.prototype.mdlDowngrade_=function(){var e=this.element_.querySelector("."+this.CssClasses_.RIPPLE_CONTAINER);this.btnElement_.removeEventListener("change",this.boundChangeHandler_),this.btnElement_.removeEventListener("focus",this.boundFocusHandler_),this.btnElement_.removeEventListener("blur",this.boundBlurHandler_),this.element_.removeEventListener("mouseup",this.boundMouseUpHandler_),e&&(e.removeEventListener("mouseup",this.boundMouseUpHandler_),this.element_.removeChild(e));},p.prototype.mdlDowngrade=p.prototype.mdlDowngrade_,p.prototype.mdlDowngrade=p.prototype.mdlDowngrade,s.register({constructor:p,classAsString:"MaterialRadio",cssClass:"mdl-js-radio",widget:!0});var c=function c(e){this.element_=e,this.isIE_=window.navigator.msPointerEnabled,this.init();};window.MaterialSlider=c,c.prototype.Constant_={},c.prototype.CssClasses_={IE_CONTAINER:"mdl-slider__ie-container",SLIDER_CONTAINER:"mdl-slider__container",BACKGROUND_FLEX:"mdl-slider__background-flex",BACKGROUND_LOWER:"mdl-slider__background-lower",BACKGROUND_UPPER:"mdl-slider__background-upper",IS_LOWEST_VALUE:"is-lowest-value",IS_UPGRADED:"is-upgraded"},c.prototype.onInput_=function(e){this.updateValueStyles_();},c.prototype.onChange_=function(e){this.updateValueStyles_();},c.prototype.onMouseUp_=function(e){e.target.blur();},c.prototype.onContainerMouseDown_=function(e){if(e.target===this.element_.parentElement){e.preventDefault();var t=new MouseEvent("mousedown",{target:e.target,buttons:e.buttons,clientX:e.clientX,clientY:this.element_.getBoundingClientRect().y});this.element_.dispatchEvent(t);}},c.prototype.updateValueStyles_=function(){var e=(this.element_.value-this.element_.min)/(this.element_.max-this.element_.min);0===e?this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE):this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE),this.isIE_||(this.backgroundLower_.style.flex=e,this.backgroundLower_.style.webkitFlex=e,this.backgroundUpper_.style.flex=1-e,this.backgroundUpper_.style.webkitFlex=1-e);},c.prototype.disable=function(){this.element_.disabled=!0;},c.prototype.disable=c.prototype.disable,c.prototype.enable=function(){this.element_.disabled=!1;},c.prototype.enable=c.prototype.enable,c.prototype.change=function(e){"undefined"!=typeof e&&(this.element_.value=e),this.updateValueStyles_();},c.prototype.change=c.prototype.change,c.prototype.init=function(){if(this.element_){if(this.isIE_){var e=document.createElement("div");e.classList.add(this.CssClasses_.IE_CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_);}else{var t=document.createElement("div");t.classList.add(this.CssClasses_.SLIDER_CONTAINER),this.element_.parentElement.insertBefore(t,this.element_),this.element_.parentElement.removeChild(this.element_),t.appendChild(this.element_);var s=document.createElement("div");s.classList.add(this.CssClasses_.BACKGROUND_FLEX),t.appendChild(s),this.backgroundLower_=document.createElement("div"),this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER),s.appendChild(this.backgroundLower_),this.backgroundUpper_=document.createElement("div"),this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER),s.appendChild(this.backgroundUpper_);}this.boundInputHandler=this.onInput_.bind(this),this.boundChangeHandler=this.onChange_.bind(this),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.boundContainerMouseDownHandler=this.onContainerMouseDown_.bind(this),this.element_.addEventListener("input",this.boundInputHandler),this.element_.addEventListener("change",this.boundChangeHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.element_.parentElement.addEventListener("mousedown",this.boundContainerMouseDownHandler),this.updateValueStyles_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED);}},c.prototype.mdlDowngrade_=function(){this.element_.removeEventListener("input",this.boundInputHandler),this.element_.removeEventListener("change",this.boundChangeHandler),this.element_.removeEventListener("mouseup",this.boundMouseUpHandler),this.element_.parentElement.removeEventListener("mousedown",this.boundContainerMouseDownHandler);},c.prototype.mdlDowngrade=c.prototype.mdlDowngrade_,c.prototype.mdlDowngrade=c.prototype.mdlDowngrade,s.register({constructor:c,classAsString:"MaterialSlider",cssClass:"mdl-js-slider",widget:!0});var u=function u(e){this.element_=e,this.init();};window.MaterialSpinner=u,u.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},u.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},u.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var s=document.createElement("div");s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),s.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),n.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var a=[s,i,n],l=0;l<a.length;l++){var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),a[l].appendChild(o);}t.appendChild(s),t.appendChild(i),t.appendChild(n),this.element_.appendChild(t);},u.prototype.createLayer=u.prototype.createLayer,u.prototype.stop=function(){this.element_.classList.remove("is-active");},u.prototype.stop=u.prototype.stop,u.prototype.start=function(){this.element_.classList.add("is-active");},u.prototype.start=u.prototype.start,u.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++){this.createLayer(e);}this.element_.classList.add("is-upgraded");}},s.register({constructor:u,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0});var C=function C(e){this.element_=e,this.init();};window.MaterialSwitch=C,C.prototype.Constant_={TINY_TIMEOUT:.001},C.prototype.CssClasses_={INPUT:"mdl-switch__input",TRACK:"mdl-switch__track",THUMB:"mdl-switch__thumb",FOCUS_HELPER:"mdl-switch__focus-helper",RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE_CONTAINER:"mdl-switch__ripple-container",RIPPLE_CENTER:"mdl-ripple--center",RIPPLE:"mdl-ripple",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_CHECKED:"is-checked"},C.prototype.onChange_=function(e){this.updateClasses_();},C.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED);},C.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);},C.prototype.onMouseUp_=function(e){this.blur_();},C.prototype.updateClasses_=function(){this.checkDisabled(),this.checkToggleState();},C.prototype.blur_=function(){window.setTimeout(function(){this.inputElement_.blur();}.bind(this),this.Constant_.TINY_TIMEOUT);},C.prototype.checkDisabled=function(){this.inputElement_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED);},C.prototype.checkDisabled=C.prototype.checkDisabled,C.prototype.checkToggleState=function(){this.inputElement_.checked?this.element_.classList.add(this.CssClasses_.IS_CHECKED):this.element_.classList.remove(this.CssClasses_.IS_CHECKED);},C.prototype.checkToggleState=C.prototype.checkToggleState,C.prototype.disable=function(){this.inputElement_.disabled=!0,this.updateClasses_();},C.prototype.disable=C.prototype.disable,C.prototype.enable=function(){this.inputElement_.disabled=!1,this.updateClasses_();},C.prototype.enable=C.prototype.enable,C.prototype.on=function(){this.inputElement_.checked=!0,this.updateClasses_();},C.prototype.on=C.prototype.on,C.prototype.off=function(){this.inputElement_.checked=!1,this.updateClasses_();},C.prototype.off=C.prototype.off,C.prototype.init=function(){if(this.element_){this.inputElement_=this.element_.querySelector("."+this.CssClasses_.INPUT);var e=document.createElement("div");e.classList.add(this.CssClasses_.TRACK);var t=document.createElement("div");t.classList.add(this.CssClasses_.THUMB);var s=document.createElement("span");if(s.classList.add(this.CssClasses_.FOCUS_HELPER),t.appendChild(s),this.element_.appendChild(e),this.element_.appendChild(t),this.boundMouseUpHandler=this.onMouseUp_.bind(this),this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS),this.rippleContainerElement_=document.createElement("span"),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT),this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER),this.rippleContainerElement_.addEventListener("mouseup",this.boundMouseUpHandler);var i=document.createElement("span");i.classList.add(this.CssClasses_.RIPPLE),this.rippleContainerElement_.appendChild(i),this.element_.appendChild(this.rippleContainerElement_);}this.boundChangeHandler=this.onChange_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.inputElement_.addEventListener("change",this.boundChangeHandler),this.inputElement_.addEventListener("focus",this.boundFocusHandler),this.inputElement_.addEventListener("blur",this.boundBlurHandler),this.element_.addEventListener("mouseup",this.boundMouseUpHandler),this.updateClasses_(),this.element_.classList.add("is-upgraded");}},C.prototype.mdlDowngrade_=function(){this.rippleContainerElement_&&this.rippleContainerElement_.removeEventListener("mouseup",this.boundMouseUpHandler),this.inputElement_.removeEventListener("change",this.boundChangeHandler),this.inputElement_.removeEventListener("focus",this.boundFocusHandler),this.inputElement_.removeEventListener("blur",this.boundBlurHandler),this.element_.removeEventListener("mouseup",this.boundMouseUpHandler);},C.prototype.mdlDowngrade=C.prototype.mdlDowngrade_,C.prototype.mdlDowngrade=C.prototype.mdlDowngrade,s.register({constructor:C,classAsString:"MaterialSwitch",cssClass:"mdl-js-switch",widget:!0});var m=function m(e){this.element_=e,this.init();};window.MaterialTabs=m,m.prototype.Constant_={},m.prototype.CssClasses_={TAB_CLASS:"mdl-tabs__tab",PANEL_CLASS:"mdl-tabs__panel",ACTIVE_CLASS:"is-active",UPGRADED_CLASS:"is-upgraded",MDL_JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",MDL_RIPPLE_CONTAINER:"mdl-tabs__ripple-container",MDL_RIPPLE:"mdl-ripple",MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events"},m.prototype.initTabs_=function(){this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT)&&this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS),this.tabs_=this.element_.querySelectorAll("."+this.CssClasses_.TAB_CLASS),this.panels_=this.element_.querySelectorAll("."+this.CssClasses_.PANEL_CLASS);for(var t=0;t<this.tabs_.length;t++){new e(this.tabs_[t],this);}this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS);},m.prototype.resetTabState_=function(){for(var e=0;e<this.tabs_.length;e++){this.tabs_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS);}},m.prototype.resetPanelState_=function(){for(var e=0;e<this.panels_.length;e++){this.panels_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS);}},m.prototype.init=function(){this.element_&&this.initTabs_();},s.register({constructor:m,classAsString:"MaterialTabs",cssClass:"mdl-js-tabs"});var E=function E(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init();};window.MaterialTextfield=E,E.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},E.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded"},E.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault();},E.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED);},E.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);},E.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty();},E.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED);},E.prototype.checkDisabled=E.prototype.checkDisabled,E.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID));},E.prototype.checkValidity=E.prototype.checkValidity,E.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY);},E.prototype.checkDirty=E.prototype.checkDirty,E.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_();},E.prototype.disable=E.prototype.disable,E.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_();},E.prototype.enable=E.prototype.enable,E.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_();},E.prototype.change=E.prototype.change,E.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID);}},E.prototype.mdlDowngrade_=function(){this.input_.removeEventListener("input",this.boundUpdateClassesHandler),this.input_.removeEventListener("focus",this.boundFocusHandler),this.input_.removeEventListener("blur",this.boundBlurHandler),this.boundKeyDownHandler&&this.input_.removeEventListener("keydown",this.boundKeyDownHandler);},E.prototype.mdlDowngrade=E.prototype.mdlDowngrade_,E.prototype.mdlDowngrade=E.prototype.mdlDowngrade,s.register({constructor:E,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0});var L=function L(e){this.element_=e,this.init();};window.MaterialTooltip=L,L.prototype.Constant_={},L.prototype.CssClasses_={IS_ACTIVE:"is-active"},L.prototype.handleMouseEnter_=function(e){e.stopPropagation();var t=e.target.getBoundingClientRect(),s=t.left+t.width/2,i=-1*(this.element_.offsetWidth/2);0>s+i?(this.element_.style.left=0,this.element_.style.marginLeft=0):(this.element_.style.left=s+"px",this.element_.style.marginLeft=i+"px"),this.element_.style.top=t.top+t.height+10+"px",this.element_.classList.add(this.CssClasses_.IS_ACTIVE),window.addEventListener("scroll",this.boundMouseLeaveHandler,!1),window.addEventListener("touchmove",this.boundMouseLeaveHandler,!1);},L.prototype.handleMouseLeave_=function(e){e.stopPropagation(),this.element_.classList.remove(this.CssClasses_.IS_ACTIVE),window.removeEventListener("scroll",this.boundMouseLeaveHandler),window.removeEventListener("touchmove",this.boundMouseLeaveHandler,!1);},L.prototype.init=function(){if(this.element_){var e=this.element_.getAttribute("for");e&&(this.forElement_=document.getElementById(e)),this.forElement_&&(this.forElement_.hasAttribute("tabindex")||this.forElement_.setAttribute("tabindex","0"),this.boundMouseEnterHandler=this.handleMouseEnter_.bind(this),this.boundMouseLeaveHandler=this.handleMouseLeave_.bind(this),this.forElement_.addEventListener("mouseenter",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("click",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("blur",this.boundMouseLeaveHandler),this.forElement_.addEventListener("touchstart",this.boundMouseEnterHandler,!1),this.forElement_.addEventListener("mouseleave",this.boundMouseLeaveHandler));}},L.prototype.mdlDowngrade_=function(){this.forElement_&&(this.forElement_.removeEventListener("mouseenter",this.boundMouseEnterHandler,!1),this.forElement_.removeEventListener("click",this.boundMouseEnterHandler,!1),this.forElement_.removeEventListener("touchstart",this.boundMouseEnterHandler,!1),this.forElement_.removeEventListener("mouseleave",this.boundMouseLeaveHandler));},L.prototype.mdlDowngrade=L.prototype.mdlDowngrade_,L.prototype.mdlDowngrade=L.prototype.mdlDowngrade,s.register({constructor:L,classAsString:"MaterialTooltip",cssClass:"mdl-tooltip"});var I=function I(e){this.element_=e,this.init();};window.MaterialLayout=I,I.prototype.Constant_={MAX_WIDTH:"(max-width: 1024px)",TAB_SCROLL_PIXELS:100,MENU_ICON:"menu",CHEVRON_LEFT:"chevron_left",CHEVRON_RIGHT:"chevron_right"},I.prototype.Mode_={STANDARD:0,SEAMED:1,WATERFALL:2,SCROLL:3},I.prototype.CssClasses_={CONTAINER:"mdl-layout__container",HEADER:"mdl-layout__header",DRAWER:"mdl-layout__drawer",CONTENT:"mdl-layout__content",DRAWER_BTN:"mdl-layout__drawer-button",ICON:"material-icons",JS_RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-layout__tab-ripple-container",RIPPLE:"mdl-ripple",RIPPLE_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",HEADER_SEAMED:"mdl-layout__header--seamed",HEADER_WATERFALL:"mdl-layout__header--waterfall",HEADER_SCROLL:"mdl-layout__header--scroll",FIXED_HEADER:"mdl-layout--fixed-header",OBFUSCATOR:"mdl-layout__obfuscator",TAB_BAR:"mdl-layout__tab-bar",TAB_CONTAINER:"mdl-layout__tab-bar-container",TAB:"mdl-layout__tab",TAB_BAR_BUTTON:"mdl-layout__tab-bar-button",TAB_BAR_LEFT_BUTTON:"mdl-layout__tab-bar-left-button",TAB_BAR_RIGHT_BUTTON:"mdl-layout__tab-bar-right-button",PANEL:"mdl-layout__tab-panel",HAS_DRAWER:"has-drawer",HAS_TABS:"has-tabs",HAS_SCROLLING_HEADER:"has-scrolling-header",CASTING_SHADOW:"is-casting-shadow",IS_COMPACT:"is-compact",IS_SMALL_SCREEN:"is-small-screen",IS_DRAWER_OPEN:"is-visible",IS_ACTIVE:"is-active",IS_UPGRADED:"is-upgraded",IS_ANIMATING:"is-animating",ON_LARGE_SCREEN:"mdl-layout--large-screen-only",ON_SMALL_SCREEN:"mdl-layout--small-screen-only"},I.prototype.contentScrollHandler_=function(){this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)||(this.content_.scrollTop>0&&!this.header_.classList.contains(this.CssClasses_.IS_COMPACT)?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.header_.classList.add(this.CssClasses_.IS_COMPACT),this.header_.classList.add(this.CssClasses_.IS_ANIMATING)):this.content_.scrollTop<=0&&this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.header_.classList.remove(this.CssClasses_.IS_COMPACT),this.header_.classList.add(this.CssClasses_.IS_ANIMATING)));},I.prototype.screenSizeHandler_=function(){this.screenSizeMediaQuery_.matches?this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN):(this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN),this.drawer_&&(this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN)));},I.prototype.drawerToggleHandler_=function(){this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN),this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);},I.prototype.headerTransitionEndHandler_=function(){this.header_.classList.remove(this.CssClasses_.IS_ANIMATING);},I.prototype.headerClickHandler_=function(){this.header_.classList.contains(this.CssClasses_.IS_COMPACT)&&(this.header_.classList.remove(this.CssClasses_.IS_COMPACT),this.header_.classList.add(this.CssClasses_.IS_ANIMATING));},I.prototype.resetTabState_=function(e){for(var t=0;t<e.length;t++){e[t].classList.remove(this.CssClasses_.IS_ACTIVE);}},I.prototype.resetPanelState_=function(e){for(var t=0;t<e.length;t++){e[t].classList.remove(this.CssClasses_.IS_ACTIVE);}},I.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.classList.add(this.CssClasses_.CONTAINER),this.element_.parentElement.insertBefore(e,this.element_),this.element_.parentElement.removeChild(this.element_),e.appendChild(this.element_);for(var s=this.element_.childNodes,i=s.length,n=0;i>n;n++){var a=s[n];a.classList&&a.classList.contains(this.CssClasses_.HEADER)&&(this.header_=a),a.classList&&a.classList.contains(this.CssClasses_.DRAWER)&&(this.drawer_=a),a.classList&&a.classList.contains(this.CssClasses_.CONTENT)&&(this.content_=a);}this.header_&&(this.tabBar_=this.header_.querySelector("."+this.CssClasses_.TAB_BAR));var l=this.Mode_.STANDARD;if(this.header_&&(this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)?l=this.Mode_.SEAMED:this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)?(l=this.Mode_.WATERFALL,this.header_.addEventListener("transitionend",this.headerTransitionEndHandler_.bind(this)),this.header_.addEventListener("click",this.headerClickHandler_.bind(this))):this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)&&(l=this.Mode_.SCROLL,e.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER)),l===this.Mode_.STANDARD?(this.header_.classList.add(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW)):l===this.Mode_.SEAMED||l===this.Mode_.SCROLL?(this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW),this.tabBar_&&this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW)):l===this.Mode_.WATERFALL&&(this.content_.addEventListener("scroll",this.contentScrollHandler_.bind(this)),this.contentScrollHandler_())),this.drawer_){var o=this.element_.querySelector("."+this.CssClasses_.DRAWER_BTN);if(!o){o=document.createElement("div"),o.classList.add(this.CssClasses_.DRAWER_BTN);var r=document.createElement("i");r.classList.add(this.CssClasses_.ICON),r.textContent=this.Constant_.MENU_ICON,o.appendChild(r);}this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)?o.classList.add(this.CssClasses_.ON_LARGE_SCREEN):this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)&&o.classList.add(this.CssClasses_.ON_SMALL_SCREEN),o.addEventListener("click",this.drawerToggleHandler_.bind(this)),this.element_.classList.add(this.CssClasses_.HAS_DRAWER),this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)?this.header_.insertBefore(o,this.header_.firstChild):this.element_.insertBefore(o,this.content_);var d=document.createElement("div");d.classList.add(this.CssClasses_.OBFUSCATOR),this.element_.appendChild(d),d.addEventListener("click",this.drawerToggleHandler_.bind(this)),this.obfuscator_=d;}if(this.screenSizeMediaQuery_=window.matchMedia(this.Constant_.MAX_WIDTH),this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this)),this.screenSizeHandler_(),this.header_&&this.tabBar_){this.element_.classList.add(this.CssClasses_.HAS_TABS);var _=document.createElement("div");_.classList.add(this.CssClasses_.TAB_CONTAINER),this.header_.insertBefore(_,this.tabBar_),this.header_.removeChild(this.tabBar_);var h=document.createElement("div");h.classList.add(this.CssClasses_.TAB_BAR_BUTTON),h.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);var p=document.createElement("i");p.classList.add(this.CssClasses_.ICON),p.textContent=this.Constant_.CHEVRON_LEFT,h.appendChild(p),h.addEventListener("click",function(){this.tabBar_.scrollLeft-=this.Constant_.TAB_SCROLL_PIXELS;}.bind(this));var c=document.createElement("div");c.classList.add(this.CssClasses_.TAB_BAR_BUTTON),c.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);var u=document.createElement("i");u.classList.add(this.CssClasses_.ICON),u.textContent=this.Constant_.CHEVRON_RIGHT,c.appendChild(u),c.addEventListener("click",function(){this.tabBar_.scrollLeft+=this.Constant_.TAB_SCROLL_PIXELS;}.bind(this)),_.appendChild(h),_.appendChild(this.tabBar_),_.appendChild(c);var C=function(){this.tabBar_.scrollLeft>0?h.classList.add(this.CssClasses_.IS_ACTIVE):h.classList.remove(this.CssClasses_.IS_ACTIVE),this.tabBar_.scrollLeft<this.tabBar_.scrollWidth-this.tabBar_.offsetWidth?c.classList.add(this.CssClasses_.IS_ACTIVE):c.classList.remove(this.CssClasses_.IS_ACTIVE);}.bind(this);this.tabBar_.addEventListener("scroll",C),C(),this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)&&this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);for(var m=this.tabBar_.querySelectorAll("."+this.CssClasses_.TAB),E=this.content_.querySelectorAll("."+this.CssClasses_.PANEL),L=0;L<m.length;L++){new t(m[L],m,E,this);}}this.element_.classList.add(this.CssClasses_.IS_UPGRADED);}},s.register({constructor:I,classAsString:"MaterialLayout",cssClass:"mdl-js-layout"});var f=function f(e){this.element_=e,this.init();};window.MaterialDataTable=f,f.prototype.Constant_={},f.prototype.CssClasses_={DATA_TABLE:"mdl-data-table",SELECTABLE:"mdl-data-table--selectable",SELECT_ELEMENT:"mdl-data-table__select",IS_SELECTED:"is-selected",IS_UPGRADED:"is-upgraded"},f.prototype.selectRow_=function(e,t,s){return t?function(){e.checked?t.classList.add(this.CssClasses_.IS_SELECTED):t.classList.remove(this.CssClasses_.IS_SELECTED);}.bind(this):s?function(){var t,i;if(e.checked)for(t=0;t<s.length;t++){i=s[t].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.check(),s[t].classList.add(this.CssClasses_.IS_SELECTED);}else for(t=0;t<s.length;t++){i=s[t].querySelector("td").querySelector(".mdl-checkbox"),i.MaterialCheckbox.uncheck(),s[t].classList.remove(this.CssClasses_.IS_SELECTED);}}.bind(this):void 0;},f.prototype.createCheckbox_=function(e,t){var i=document.createElement("label"),n=["mdl-checkbox","mdl-js-checkbox","mdl-js-ripple-effect",this.CssClasses_.SELECT_ELEMENT];i.className=n.join(" ");var a=document.createElement("input");return a.type="checkbox",a.classList.add("mdl-checkbox__input"),a.addEventListener("change",this.selectRow_(a,e,t)),i.appendChild(a),s.upgradeElement(i,"MaterialCheckbox"),i;},f.prototype.init=function(){if(this.element_){var e=this.element_.querySelector("th"),t=this.element_.querySelector("tbody").querySelectorAll("tr");if(this.element_.classList.contains(this.CssClasses_.SELECTABLE)){var s=document.createElement("th"),i=this.createCheckbox_(null,t);s.appendChild(i),e.parentElement.insertBefore(s,e);for(var n=0;n<t.length;n++){var a=t[n].querySelector("td");if(a){var l=document.createElement("td"),o=this.createCheckbox_(t[n]);l.appendChild(o),t[n].insertBefore(l,a);}}}this.element_.classList.add(this.CssClasses_.IS_UPGRADED);}},s.register({constructor:f,classAsString:"MaterialDataTable",cssClass:"mdl-js-data-table"});var b=function b(e){this.element_=e,this.init();};window.MaterialRipple=b,b.prototype.Constant_={INITIAL_SCALE:"scale(0.0001, 0.0001)",INITIAL_SIZE:"1px",INITIAL_OPACITY:"0.4",FINAL_OPACITY:"0",FINAL_SCALE:""},b.prototype.CssClasses_={RIPPLE_CENTER:"mdl-ripple--center",RIPPLE_EFFECT_IGNORE_EVENTS:"mdl-js-ripple-effect--ignore-events",RIPPLE:"mdl-ripple",IS_ANIMATING:"is-animating",IS_VISIBLE:"is-visible"},b.prototype.downHandler_=function(e){if(!this.rippleElement_.style.width&&!this.rippleElement_.style.height){var t=this.element_.getBoundingClientRect();this.boundHeight=t.height,this.boundWidth=t.width,this.rippleSize_=2*Math.sqrt(t.width*t.width+t.height*t.height)+2,this.rippleElement_.style.width=this.rippleSize_+"px",this.rippleElement_.style.height=this.rippleSize_+"px";}if(this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE),"mousedown"===e.type&&this.ignoringMouseDown_)this.ignoringMouseDown_=!1;else{"touchstart"===e.type&&(this.ignoringMouseDown_=!0);var s=this.getFrameCount();if(s>0)return;this.setFrameCount(1);var i,n,a=e.currentTarget.getBoundingClientRect();if(0===e.clientX&&0===e.clientY)i=Math.round(a.width/2),n=Math.round(a.height/2);else{var l=e.clientX?e.clientX:e.touches[0].clientX,o=e.clientY?e.clientY:e.touches[0].clientY;i=Math.round(l-a.left),n=Math.round(o-a.top);}this.setRippleXY(i,n),this.setRippleStyles(!0),window.requestAnimationFrame(this.animFrameHandler.bind(this));}},b.prototype.upHandler_=function(e){e&&2!==e.detail&&this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE),window.setTimeout(function(){this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE);}.bind(this),0);},b.prototype.init=function(){if(this.element_){var e=this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)||(this.rippleElement_=this.element_.querySelector("."+this.CssClasses_.RIPPLE),this.frameCount_=0,this.rippleSize_=0,this.x_=0,this.y_=0,this.ignoringMouseDown_=!1,this.boundDownHandler=this.downHandler_.bind(this),this.element_.addEventListener("mousedown",this.boundDownHandler),this.element_.addEventListener("touchstart",this.boundDownHandler),this.boundUpHandler=this.upHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundUpHandler),this.element_.addEventListener("mouseleave",this.boundUpHandler),this.element_.addEventListener("touchend",this.boundUpHandler),this.element_.addEventListener("blur",this.boundUpHandler),this.getFrameCount=function(){return this.frameCount_;},this.setFrameCount=function(e){this.frameCount_=e;},this.getRippleElement=function(){return this.rippleElement_;},this.setRippleXY=function(e,t){this.x_=e,this.y_=t;},this.setRippleStyles=function(t){if(null!==this.rippleElement_){var s,i,n,a="translate("+this.x_+"px, "+this.y_+"px)";t?(i=this.Constant_.INITIAL_SCALE,n=this.Constant_.INITIAL_SIZE):(i=this.Constant_.FINAL_SCALE,n=this.rippleSize_+"px",e&&(a="translate("+this.boundWidth/2+"px, "+this.boundHeight/2+"px)")),s="translate(-50%, -50%) "+a+i,this.rippleElement_.style.webkitTransform=s,this.rippleElement_.style.msTransform=s,this.rippleElement_.style.transform=s,t?this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING):this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING);}},this.animFrameHandler=function(){this.frameCount_-->0?window.requestAnimationFrame(this.animFrameHandler.bind(this)):this.setRippleStyles(!1);});}},b.prototype.mdlDowngrade_=function(){this.element_.removeEventListener("mousedown",this.boundDownHandler),this.element_.removeEventListener("touchstart",this.boundDownHandler),this.element_.removeEventListener("mouseup",this.boundUpHandler),this.element_.removeEventListener("mouseleave",this.boundUpHandler),this.element_.removeEventListener("touchend",this.boundUpHandler),this.element_.removeEventListener("blur",this.boundUpHandler);},b.prototype.mdlDowngrade=b.prototype.mdlDowngrade_,b.prototype.mdlDowngrade=b.prototype.mdlDowngrade,s.register({constructor:b,classAsString:"MaterialRipple",cssClass:"mdl-js-ripple-effect",widget:!1});}();//# sourceMappingURL=material.min.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery, $, module, Hammer) {"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};if("undefined"==typeof jQuery){var jQuery;jQuery= true?$=__webpack_require__(1):$;}jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function swing(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e);},easeInQuad:function easeInQuad(a,b,c,d,e){return d*(b/=e)*b+c;},easeOutQuad:function easeOutQuad(a,b,c,d,e){return-d*(b/=e)*(b-2)+c;},easeInOutQuad:function easeInOutQuad(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c;},easeInCubic:function easeInCubic(a,b,c,d,e){return d*(b/=e)*b*b+c;},easeOutCubic:function easeOutCubic(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c;},easeInOutCubic:function easeInOutCubic(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c;},easeInQuart:function easeInQuart(a,b,c,d,e){return d*(b/=e)*b*b*b+c;},easeOutQuart:function easeOutQuart(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c;},easeInOutQuart:function easeInOutQuart(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c;},easeInQuint:function easeInQuint(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c;},easeOutQuint:function easeOutQuint(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c;},easeInOutQuint:function easeInOutQuint(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c;},easeInSine:function easeInSine(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c;},easeOutSine:function easeOutSine(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c;},easeInOutSine:function easeInOutSine(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c;},easeInExpo:function easeInExpo(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c;},easeOutExpo:function easeOutExpo(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c;},easeInOutExpo:function easeInOutExpo(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c;},easeInCirc:function easeInCirc(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c;},easeOutCirc:function easeOutCirc(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c;},easeInOutCirc:function easeInOutCirc(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c;},easeInElastic:function easeInElastic(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4;}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c;},easeOutElastic:function easeOutElastic(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4;}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*(2*Math.PI)/g)+d+c;},easeInOutElastic:function easeInOutElastic(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*(.3*1.5)),h<Math.abs(d)){h=d;var f=g/4;}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g))+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*(2*Math.PI)/g)*.5+d+c;},easeInBack:function easeInBack(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c;},easeOutBack:function easeOutBack(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c;},easeInOutBack:function easeInOutBack(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*(b*b*(((f*=1.525)+1)*b-f))+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c;},easeInBounce:function easeInBounce(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c;},easeOutBounce:function easeOutBounce(a,b,c,d,e){return(b/=e)<1/2.75?d*(7.5625*b*b)+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c;},easeInOutBounce:function easeInOutBounce(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c;}}),jQuery.extend(jQuery.easing,{easeInOutMaterial:function easeInOutMaterial(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:d/4*((b-=2)*b*b+2)+c;}}),jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(a){function b(a){var b=a.length,d=c.type(a);return"function"===d||c.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a;}if(!a.jQuery){var c=function c(a,b){return new c.fn.init(a,b);};c.isWindow=function(a){return null!=a&&a==a.window;},c.type=function(a){return null==a?a+"":"object"==(typeof a==="undefined"?"undefined":_typeof(a))||"function"==typeof a?e[g.call(a)]||"object":typeof a==="undefined"?"undefined":_typeof(a);},c.isArray=Array.isArray||function(a){return"array"===c.type(a);},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1;}catch(d){return!1;}for(b in a){}return void 0===b||f.call(a,b);},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;g>f&&(e=c.apply(a[f],d),e!==!1);f++){}else for(f in a){if(e=c.apply(a[f],d),e===!1)break;}}else if(h)for(;g>f&&(e=c.call(a[f],f,a[f]),e!==!1);f++){}else for(f in a){if(e=c.call(a[f],f,a[f]),e===!1)break;}return a;},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b];}else if(void 0!==b){var f=a[c.expando]||(a[c.expando]=++c.uuid);return d[f]=d[f]||{},d[f][b]=e,e;}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&c.each(b,function(a,b){delete f[b];});},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=(typeof h==="undefined"?"undefined":_typeof(h))&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);j>i;i++){if(null!=(f=arguments[i]))for(e in f){a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));}}return h;},c.queue=function(a,d,e){function f(a,c){var d=c||[];return null!=a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;){a[e++]=b[d++];}if(c!==c)for(;void 0!==b[d];){a[e++]=b[d++];}return a.length=e,a;}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d;}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[];}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b);}));});},c.fn=c.prototype={init:function init(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.");},offset:function offset(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)};},position:function position(){function a(){for(var a=this.offsetParent||document;a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;){a=a.offsetParent;}return a||document;}var b=this[0],a=a.apply(b),d=this.offset(),e=/^(?:body|html)$/i.test(a.nodeName)?{top:0,left:0}:c(a).offset();return d.top-=parseFloat(b.style.marginTop)||0,d.left-=parseFloat(b.style.marginLeft)||0,a.style&&(e.top+=parseFloat(a.style.borderTopWidth)||0,e.left+=parseFloat(a.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left};}};var d={};c.expando="velocity"+new Date().getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++){e["[object "+h[i]+"]"]=h[i].toLowerCase();}c.fn.init.prototype=c.fn,a.Velocity={Utilities:c};}}(window),function(a){"object"==( false?"undefined":_typeof(module))&&"object"==_typeof(module.exports)?module.exports=a(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):a();}(function(){return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e);}return d;}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a;}function g(a){var b=m.data(a,"velocity");return null===b?d:b;}function h(a){return function(b){return Math.round(b*a)*(1/a);};}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a;}function g(a,b){return 3*b-6*a;}function h(a){return 3*a;}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a;}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b);}function k(b,c){for(var e=0;p>e;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f;}return c;}function l(){for(var b=0;t>b;++b){x[b]=i(b*u,a,d);}}function m(b,c,e){var f,g,h=0;do{g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;}while(Math.abs(f)>r&&++h<s);return g;}function n(b){for(var c=0,e=1,f=t-1;e!=f&&x[e]<=b;++e){c+=u;}--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0==i?h:m(b,c,c+u);}function o(){y=!0,(a!=c||d!=e)&&l();}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;4>w;++w){if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;}a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function z(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e);};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}];};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A;},z;}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):p.isArray(a)&&4===a.length?i.apply(null,a):!1,c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c;}function k(a){if(a){var b=new Date().getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls));for(var f=0;c>f;f++){if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;u>s;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b);});}v.setPropertyValue(y,"display",j.display);}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w){if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue;}if(D.currentValue=C,"tween"===B)q=C;else{if(v.Hooks.registered[B]){var G=v.Hooks.getRoot(B),H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H);}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]?v.Normalizations.registered[G]("extract",null,I[1]):I[1]),"transform"===I[0]&&(z=!0);}}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y);}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f);}}}t.State.isTicking&&x(k);}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility)),f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&g(l)){g(l).isAnimating=!1,g(l).rootPropertyValueCache={};var n=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=g(l).transformCache[b];g(l).transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete g(l).transformCache[b]);}),f.mobileHA&&(n=!0,delete g(l).transformCache.translate3d),n&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating");}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e);}catch(o){setTimeout(function(){throw o;},1);}h&&f.loop!==!0&&h(e),g(l)&&f.loop===!0&&!b&&(m.each(g(l).tweensContainer,function(a,b){/^rotate/.test(a)&&360===parseFloat(b.endValue)&&(b.endValue=0,b.startValue=360),/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100);}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue);}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++){if(t.State.calls[p]!==!1){i=!0;break;}}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[]);}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a;}return d;}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=new Date().getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c);},c);};}(),p={isString:function isString(a){return"string"==typeof a;},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a);},isFunction:function isFunction(a){return"[object Function]"===Object.prototype.toString.call(a);},isNode:function isNode(a){return a&&a.nodeType;},isNodeList:function isNodeList(a){return"object"==(typeof a==="undefined"?"undefined":_typeof(a))&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==_typeof(a[0])&&a[0].nodeType>0);},isWrapped:function isWrapped(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a));},isSVG:function isSVG(a){return b.SVGElement&&a instanceof b.SVGElement;},isEmptyObject:function isEmptyObject(a){for(var b in a){return!1;}return!0;}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,8>=n&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=n)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function init(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}});},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v;}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)};}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c;}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;h=c(h||i,g),j.push(1+h.x),k+=16,Math.abs(h.x)>l&&Math.abs(h.v)>l;){}return f?function(a){return j[a*(j.length-1)|0];}:k;};}();t.Easings={linear:function linear(a){return a;},swing:function swing(a){return .5-Math.cos(a*Math.PI)/2;},spring:function spring(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a);}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1]);});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function register(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b];}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")]);}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var a in e){var g=c+e[a],h=a;v.Hooks.registered[g]=[c,h];}}},getRoot:function getRoot(a){var b=v.Hooks.registered[a];return b?b[0]:a;},cleanRootPropertyValue:function cleanRootPropertyValue(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b;},extractValue:function extractValue(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e];}return b;},injectValue:function injectValue(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ");}return c;}},Normalizations:{registered:{clip:function clip(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")";}},blur:function blur(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0;}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none";}},opacity:function opacity(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")";}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c;}}},register:function register(){9>=n||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++){!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&1>e&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e);}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b];}};}();}for(var a=0;a<v.Lists.colors.length;a++){!function(){var b=v.Lists.colors[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return b;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ");}return 8>=n||3!==f.split(" ").length||(f+=" 1"),f;case"inject":return 8>=n?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(8>=n?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")";}};}();}}},Names:{camelCase:function camelCase(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase();});},SVGAttribute:function SVGAttribute(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a);},prefixCheck:function prefixCheck(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase();}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0];}return[a,!1];}},Values:{hexToRgb:function hexToRgb(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d;}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0];},isCSSNullValue:function isCSSNullValue(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a);},getUnitType:function getUnitType(a){return /^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px";},getDisplayType:function getDisplayType(a){var b=a&&a.tagName.toString().toLowerCase();return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block";},addClass:function addClass(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b;},removeClass:function removeClass(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ");}},getPropertyValue:function getPropertyValue(a,c,e,f){function h(a,c){function e(){j&&v.setPropertyValue(a,"display","none");}var i=0;if(8>=n)i=m.css(a,c);else{var j=!1;if(/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(j=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a))),!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return e(),k;}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return e(),l;}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),i=9===n&&"filter"===c?o.getPropertyValue(c):o[c],(""===i||null===i)&&(i=a.style[c]),e();}if("auto"===i&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(i=m(a).position()[c]+"px");}return i;}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e);}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o);}if(!/^[\d-]/.test(i))if(g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)){if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c];}catch(p){i=0;}else i=a.getAttribute(c);}else i=h(a,v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i;},setPropertyValue:function setPropertyValue(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j;}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d;}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]");}else g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d);}return[h,d];},flushTransformCache:function flushTransformCache(a){function b(b){return parseFloat(v.getPropertyValue(a,b));}var c="";if((n||t.State.isAndroid&&!t.State.isChrome)&&g(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a]);});}else{var e,f;m.each(g(a).transformCache,function(b){return e=g(a).transformCache[b],"transformPerspective"===b?(f=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "));}),f&&(c="perspective"+f+" "+c);}v.setPropertyValue(a,"transform",c);}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e=d;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h;}}),e;};var w=function w(){function a(){return h?B.promise||null:i;}function e(){function a(a){function l(a,b){var c=d,e=d,g=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])||v.RegEx.isHex.test(a[1])?g=a[1]:(p.isString(a[1])&&!v.RegEx.isHex.test(a[1])||p.isArray(a[1]))&&(e=b?a[1]:j(a[1],h.duration),a[2]!==d&&(g=a[2]))):c=a,b||(e=e||h.easing),p.isFunction(c)&&(c=c.call(f,y,x)),p.isFunction(g)&&(g=g.call(f,y,x)),[c||0,e,g];}function n(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,"";}),c||(c=v.Values.getUnitType(a)),[d,c];}function r(){var a={myParent:f.parentNode||c.body,position:v.getPropertyValue(f,"position"),fontSize:v.getPropertyValue(f,"fontSize")},d=a.position===I.lastPosition&&a.myParent===I.lastParent,e=a.fontSize===I.lastFontSize;I.lastParent=a.myParent,I.lastPosition=a.position,I.lastFontSize=a.fontSize;var h=100,i={};if(e&&d)i.emToPx=I.lastEmToPx,i.percentToPxWidth=I.lastPercentToPxWidth,i.percentToPxHeight=I.lastPercentToPxHeight;else{var j=g(f).isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(j),a.myParent.appendChild(j),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(j,b,"hidden");}),t.CSS.setPropertyValue(j,"position",a.position),t.CSS.setPropertyValue(j,"fontSize",a.fontSize),t.CSS.setPropertyValue(j,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(j,b,h+"%");}),t.CSS.setPropertyValue(j,"paddingLeft",h+"em"),i.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(j,"width",null,!0))||1)/h,i.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(j,"height",null,!0))||1)/h,i.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(j,"paddingLeft"))||1)/h,a.myParent.removeChild(j);}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),i.remToPx=I.remToPx,i.vwToPx=I.vwToPx,i.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),f),i;}if(h.begin&&0===y)try{h.begin.call(o,o);}catch(u){setTimeout(function(){throw u;},1);}if("scroll"===C){var w,z,A,D=/^x$/i.test(h.axis)?"Left":"Top",E=parseFloat(h.offset)||0;h.container?p.isWrapped(h.container)||p.isNode(h.container)?(h.container=h.container[0]||h.container,w=h.container["scroll"+D],A=w+m(f).position()[D.toLowerCase()]+E):h.container=null:(w=t.State.scrollAnchor[t.State["scrollProperty"+D]],z=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===D?"Top":"Left")]],A=m(f).offset()[D.toLowerCase()]+E),i={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:A,unitType:"",easing:h.easing,scrollData:{container:h.container,direction:D,alternateValue:z}},element:f},t.debug&&console.log("tweensContainer (scroll): ",i.scroll,f);}else if("reverse"===C){if(!g(f).tweensContainer)return void m.dequeue(f,h.queue);"none"===g(f).opts.display&&(g(f).opts.display="auto"),"hidden"===g(f).opts.visibility&&(g(f).opts.visibility="visible"),g(f).opts.loop=!1,g(f).opts.begin=null,g(f).opts.complete=null,s.easing||delete h.easing,s.duration||delete h.duration,h=m.extend({},g(f).opts,h);var F=m.extend(!0,{},g(f).tweensContainer);for(var G in F){if("element"!==G){var H=F[G].startValue;F[G].startValue=F[G].currentValue=F[G].endValue,F[G].endValue=H,p.isEmptyObject(s)||(F[G].easing=h.easing),t.debug&&console.log("reverse tweensContainer ("+G+"): "+JSON.stringify(F[G]),f);}}i=F;}else if("start"===C){var F;g(f).tweensContainer&&g(f).isAnimating===!0&&(F=g(f).tweensContainer),m.each(q,function(a,b){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(a)){var c=l(b,!0),e=c[0],f=c[1],g=c[2];if(v.RegEx.isHex.test(e)){for(var h=["Red","Green","Blue"],i=v.Values.hexToRgb(e),j=g?v.Values.hexToRgb(g):d,k=0;k<h.length;k++){var m=[i[k]];f&&m.push(f),j!==d&&m.push(j[k]),q[a+h[k]]=m;}delete q[a];}}});for(var K in q){var L=l(q[K]),M=L[0],N=L[1],O=L[2];K=v.Names.camelCase(K);var P=v.Hooks.getRoot(K),Q=!1;if(g(f).isSVG||"tween"===P||v.Names.prefixCheck(P)[1]!==!1||v.Normalizations.registered[P]!==d){(h.display!==d&&null!==h.display&&"none"!==h.display||h.visibility!==d&&"hidden"!==h.visibility)&&/opacity|filter/.test(K)&&!O&&0!==M&&(O=0),h._cacheValues&&F&&F[K]?(O===d&&(O=F[K].endValue+F[K].unitType),Q=g(f).rootPropertyValueCache[P]):v.Hooks.registered[K]?O===d?(Q=v.getPropertyValue(f,P),O=v.getPropertyValue(f,K,Q)):Q=v.Hooks.templates[P][1]:O===d&&(O=v.getPropertyValue(f,K));var R,S,T,U=!1;if(R=n(K,O),O=R[0],T=R[1],R=n(K,M),M=R[0].replace(/^([+-\/*])=/,function(a,b){return U=b,"";}),S=R[1],O=parseFloat(O)||0,M=parseFloat(M)||0,"%"===S&&(/^(fontSize|lineHeight)$/.test(K)?(M/=100,S="em"):/^scale/.test(K)?(M/=100,S=""):/(Red|Green|Blue)$/i.test(K)&&(M=M/100*255,S="")),/[\/*]/.test(U))S=T;else if(T!==S&&0!==O)if(0===M)S=T;else{e=e||r();var V=/margin|padding|left|right|width|text|word|letter/i.test(K)||/X$/.test(K)||"x"===K?"x":"y";switch(T){case"%":O*="x"===V?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:O*=e[T+"ToPx"];}switch(S){case"%":O*=1/("x"===V?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:O*=1/e[S+"ToPx"];}}switch(U){case"+":M=O+M;break;case"-":M=O-M;break;case"*":M=O*M;break;case"/":M=O/M;}i[K]={rootPropertyValue:Q,startValue:O,currentValue:O,endValue:M,unitType:S,easing:N},t.debug&&console.log("tweensContainer ("+K+"): "+JSON.stringify(i[K]),f);}else t.debug&&console.log("Skipping ["+P+"] due to a lack of browser support.");}i.element=f;}i.element&&(v.Values.addClass(f,"velocity-animating"),J.push(i),""===h.queue&&(g(f).tweensContainer=i,g(f).opts=h),g(f).isAnimating=!0,y===x-1?(t.State.calls.push([J,o,h,null,B.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):y++);}var e,f=this,h=m.extend({},t.defaults,s),i={};switch(g(f)===d&&t.init(f),parseFloat(h.delay)&&h.queue!==!1&&m.queue(f,h.queue,function(a){t.velocityQueueEntryFlag=!0,g(f).delayTimer={setTimeout:setTimeout(a,parseFloat(h.delay)),next:a};}),h.duration.toString().toLowerCase()){case"fast":h.duration=200;break;case"normal":h.duration=r;break;case"slow":h.duration=600;break;default:h.duration=parseFloat(h.duration)||1;}t.mock!==!1&&(t.mock===!0?h.duration=h.delay=1:(h.duration*=parseFloat(t.mock)||1,h.delay*=parseFloat(t.mock)||1)),h.easing=j(h.easing,h.duration),h.begin&&!p.isFunction(h.begin)&&(h.begin=null),h.progress&&!p.isFunction(h.progress)&&(h.progress=null),h.complete&&!p.isFunction(h.complete)&&(h.complete=null),h.display!==d&&null!==h.display&&(h.display=h.display.toString().toLowerCase(),"auto"===h.display&&(h.display=t.CSS.Values.getDisplayType(f))),h.visibility!==d&&null!==h.visibility&&(h.visibility=h.visibility.toString().toLowerCase()),h.mobileHA=h.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,h.queue===!1?h.delay?setTimeout(a,h.delay):a():m.queue(f,h.queue,function(b,c){return c===!0?(B.promise&&B.resolver(o),!0):(t.velocityQueueEntryFlag=!0,void a(b));}),""!==h.queue&&"fx"!==h.queue||"inprogress"===m.queue(f)[0]||m.dequeue(f);}var h,i,n,o,q,s,u=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(h=!1,n=0,o=this,i=this):(h=!0,n=1,o=u?arguments[0].elements||arguments[0].e:arguments[0]),o=f(o)){u?(q=arguments[0].properties||arguments[0].p,s=arguments[0].options||arguments[0].o):(q=arguments[n],s=arguments[n+1]);var x=o.length,y=0;if(!/^(stop|finish)$/i.test(q)&&!m.isPlainObject(s)){var z=n+1;s={};for(var A=z;A<arguments.length;A++){p.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?p.isString(arguments[A])||p.isArray(arguments[A])?s.easing=arguments[A]:p.isFunction(arguments[A])&&(s.complete=arguments[A]):s.duration=arguments[A];}}var B={promise:null,resolver:null,rejecter:null};h&&t.Promise&&(B.promise=new t.Promise(function(a,b){B.resolver=a,B.rejecter=b;}));var C;switch(q){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"finish":case"stop":m.each(o,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer);});var D=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=s===d?"":s;return f===!0||b[2].queue===f||s===d&&b[2].queue===!1?void m.each(o,function(c,d){d===e&&((s===!0||p.isString(s))&&(m.each(m.queue(d,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b(null,!0);}),m.queue(d,p.isString(s)?s:"",[])),"stop"===q?(g(d)&&g(d).tweensContainer&&f!==!1&&m.each(g(d).tweensContainer,function(a,b){b.endValue=b.currentValue;}),D.push(a)):"finish"===q&&(b[2].duration=1));}):!0;});}),"stop"===q&&(m.each(D,function(a,b){l(b,!0);}),B.promise&&B.resolver(o)),a();default:if(!m.isPlainObject(q)||p.isEmptyObject(q)){if(p.isString(q)&&t.Redirects[q]){var E=m.extend({},s),F=E.duration,G=E.delay||0;return E.backwards===!0&&(o=m.extend(!0,[],o).reverse()),m.each(o,function(a,b){parseFloat(E.stagger)?E.delay=G+parseFloat(E.stagger)*a:p.isFunction(E.stagger)&&(E.delay=G+E.stagger.call(b,a,x)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(q)?1e3:r),E.duration=Math.max(E.duration*(E.backwards?1-a/x:(a+1)/x),.75*E.duration,200)),t.Redirects[q].call(b,b,E||{},a,x,o,B.promise?B:d);}),a();}var H="Velocity: First argument ("+q+") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise?B.rejecter(new Error(H)):console.log(H),a();}C="start";}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(o,function(a,b){p.isNode(b)&&e.call(b);});var K,E=m.extend({},t.defaults,s);if(E.loop=parseInt(E.loop),K=2*E.loop-1,E.loop)for(var L=0;K>L;L++){var M={delay:E.delay,progress:E.progress};L===K-1&&(M.display=E.display,M.visibility=E.visibility,M.complete=E.complete),w(o,"reverse",M);}return a();}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function x(a){return setTimeout(function(){a(!0);},16);},k()):x=b.requestAnimationFrame||o;}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d];}n.overflow=a.style.overflow,a.style.overflow="hidden";},i.complete=function(){for(var b in n){a.style[b]=n[b];}k&&k.call(g,g),h&&h.resolver(g);},t(a,l,i);};}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j={opacity:"In"===b?1:0},k=i.complete;i.complete=e!==f-1?i.begin=null:function(){k&&k.call(g,g),h&&h.resolver(g);},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,j,i);};}),t;}(window.jQuery||window.Zepto||window,window,document);})),!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b);}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1;}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;){b.call(c,a[e],e,a),e++;}else for(e in a){a.hasOwnProperty(e)&&b.call(c,a[e],e,a);}}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;){(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;}return a;}function i(a,b){return h(a,b,!0);}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c);}function k(a,b){return function(){return a.apply(b,arguments);};}function l(a,b){return(typeof a==="undefined"?"undefined":_typeof(a))==ka?a.apply(b?b[0]||d:d,b):a;}function m(a,b){return a===d?b:a;}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1);});}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1);});}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode;}return!1;}function q(a,b){return a.indexOf(b)>-1;}function r(a){return a.trim().split(/\s+/g);}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++;}return-1;}function t(a){return Array.prototype.slice.call(a,0);}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++;}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b];}):d.sort()),d;}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ia.length;){if(c=ia[g],e=c?c+f:b,e in a)return e;g++;}return d;}function w(){return oa++;}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow;}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b);},this.init();}function z(a){var b,c=a.options.inputClass;return new(b=c?c:ra?N:sa?Q:qa?S:M)(a,A);}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&ya&&0===d-e,g=b&(Aa|Ba)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c;}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=na(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j;}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===ya||f.eventType===Aa)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y);}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ba&&(i>xa||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=ma(l.x)>ma(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b;}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g;}function E(a){for(var b=[],c=0;c<a.pointers.length;){b[c]={clientX:la(a.pointers[c].clientX),clientY:la(a.pointers[c].clientY)},c++;}return{timeStamp:na(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY};}function F(a){var b=a.length;if(1===b)return{x:la(a[0].clientX),y:la(a[0].clientY)};for(var c=0,d=0,e=0;b>e;){c+=a[e].clientX,d+=a[e].clientY,e++;}return{x:la(c/b),y:la(d/b)};}function G(a,b,c){return{x:b/a||0,y:c/a||0};}function H(a,b){return a===b?Ca:ma(a)>=ma(b)?a>0?Da:Ea:b>0?Fa:Ga;}function I(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e);}function J(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI;}function K(a,b){return J(b[1],b[0],La)-J(a[1],a[0],La);}function L(a,b){return I(b[0],b[1],La)/I(a[0],a[1],La);}function M(){this.evEl=Na,this.evWin=Oa,this.allow=!0,this.pressed=!1,y.apply(this,arguments);}function N(){this.evEl=Ra,this.evWin=Sa,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[];}function O(){this.evTarget=Ua,this.evWin=Va,this.started=!1,y.apply(this,arguments);}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Aa|Ba)&&(c=u(c.concat(d),"identifier",!0)),[c,d];}function Q(){this.evTarget=Xa,this.targetIds={},y.apply(this,arguments);}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(ya|za)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i);}),b===ya)for(e=0;e<f.length;){d[f[e].identifier]=!0,e++;}for(e=0;e<g.length;){d[g[e].identifier]&&h.push(g[e]),b&(Aa|Ba)&&delete d[g[e].identifier],e++;}return h.length?[u(f.concat(h),"identifier",!0),h]:void 0;}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a);}function T(a,b){this.manager=a,this.set(b);}function U(a){if(q(a,bb))return bb;var b=q(a,cb),c=q(a,db);return b&&c?cb+" "+db:b||c?b?cb:db:q(a,ab)?ab:_a;}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=eb,this.simultaneous={},this.requireFail=[];}function W(a){return a&jb?"cancel":a&hb?"end":a&gb?"move":a&fb?"start":"";}function X(a){return a==Ga?"down":a==Fa?"up":a==Da?"left":a==Ea?"right":"";}function Y(a,b){var c=b.manager;return c?c.get(a):a;}function Z(){V.apply(this,arguments);}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null;}function _(){Z.apply(this,arguments);}function aa(){V.apply(this,arguments),this._timer=null,this._input=null;}function ba(){Z.apply(this,arguments);}function ca(){Z.apply(this,arguments);}function da(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0;}function ea(a,b){return b=b||{},b.recognizers=m(b.recognizers,ea.defaults.preset),new fa(a,b);}function fa(a,b){b=b||{},this.options=i(b,ea.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),ga(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3]);},this);}function ga(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:"";});}function ha(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d);}var ia=["","webkit","moz","MS","ms","o"],ja=b.createElement("div"),ka="function",la=Math.round,ma=Math.abs,na=Date.now,oa=1,pa=/mobile|tablet|ip(ad|hone|od)|android/i,qa="ontouchstart"in a,ra=v(a,"PointerEvent")!==d,sa=qa&&pa.test(navigator.userAgent),ta="touch",ua="pen",va="mouse",wa="kinect",xa=25,ya=1,za=2,Aa=4,Ba=8,Ca=1,Da=2,Ea=4,Fa=8,Ga=16,Ha=Da|Ea,Ia=Fa|Ga,Ja=Ha|Ia,Ka=["x","y"],La=["clientX","clientY"];y.prototype={handler:function handler(){},init:function init(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler);},destroy:function destroy(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler);}};var Ma={mousedown:ya,mousemove:za,mouseup:Aa},Na="mousedown",Oa="mousemove mouseup";j(M,y,{handler:function handler(a){var b=Ma[a.type];b&ya&&0===a.button&&(this.pressed=!0),b&za&&1!==a.which&&(b=Aa),this.pressed&&this.allow&&(b&Aa&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:va,srcEvent:a}));}});var Pa={pointerdown:ya,pointermove:za,pointerup:Aa,pointercancel:Ba,pointerout:Ba},Qa={2:ta,3:ua,4:va,5:wa},Ra="pointerdown",Sa="pointermove pointerup pointercancel";a.MSPointerEvent&&(Ra="MSPointerDown",Sa="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function handler(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pa[d],f=Qa[a.pointerType]||a.pointerType,g=f==ta,h=s(b,a.pointerId,"pointerId");e&ya&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Aa|Ba)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1));}});var Ta={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Ua="touchstart",Va="touchstart touchmove touchend touchcancel";j(O,y,{handler:function handler(a){var b=Ta[a.type];if(b===ya&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Aa|Ba)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a});}}});var Wa={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Xa="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function handler(a){var b=Wa[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a});}}),j(S,y,{handler:function handler(a,b,c){var d=c.pointerType==ta,e=c.pointerType==va;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Aa|Ba)&&(this.mouse.allow=!0),this.callback(a,b,c);},destroy:function destroy(){this.touch.destroy(),this.mouse.destroy();}});var Ya=v(ja.style,"touchAction"),Za=Ya!==d,$a="compute",_a="auto",ab="manipulation",bb="none",cb="pan-x",db="pan-y";T.prototype={set:function set(a){a==$a&&(a=this.compute()),Za&&(this.manager.element.style[Ya]=a),this.actions=a.toLowerCase().trim();},update:function update(){this.set(this.manager.options.touchAction);},compute:function compute(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()));}),U(a.join(" "));},preventDefaults:function preventDefaults(a){if(!Za){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bb),f=q(d,db),g=q(d,cb);return e||f&&c&Ha||g&&c&Ia?this.preventSrc(b):void 0;}},preventSrc:function preventSrc(a){this.manager.session.prevented=!0,a.preventDefault();}};var eb=1,fb=2,gb=4,hb=8,ib=hb,jb=16,kb=32;V.prototype={defaults:{},set:function set(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this;},recognizeWith:function recognizeWith(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this;},dropRecognizeWith:function dropRecognizeWith(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this);},requireFailure:function requireFailure(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this;},dropRequireFailure:function dropRequireFailure(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this;},hasRequireFailures:function hasRequireFailures(){return this.requireFail.length>0;},canRecognizeWith:function canRecognizeWith(a){return!!this.simultaneous[a.id];},emit:function emit(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a);}var c=this,d=this.state;hb>d&&b(!0),b(),d>=hb&&b(!0);},tryEmit:function tryEmit(a){return this.canEmit()?this.emit(a):void(this.state=kb);},canEmit:function canEmit(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kb|eb)))return!1;a++;}return!0;},recognize:function recognize(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ib|jb|kb)&&(this.state=eb),this.state=this.process(b),void(this.state&(fb|gb|hb|jb)&&this.tryEmit(b))):(this.reset(),void(this.state=kb));},process:function process(){},getTouchAction:function getTouchAction(){},reset:function reset(){}},j(Z,V,{defaults:{pointers:1},attrTest:function attrTest(a){var b=this.options.pointers;return 0===b||a.pointers.length===b;},process:function process(a){var b=this.state,c=a.eventType,d=b&(fb|gb),e=this.attrTest(a);return d&&(c&Ba||!e)?b|jb:d||e?c&Aa?b|hb:b&fb?b|gb:fb:kb;}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ja},getTouchAction:function getTouchAction(){var a=this.options.direction,b=[];return a&Ha&&b.push(db),a&Ia&&b.push(cb),b;},directionTest:function directionTest(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Ha?(e=0===f?Ca:0>f?Da:Ea,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ca:0>g?Fa:Ga,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction;},attrTest:function attrTest(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fb||!(this.state&fb)&&this.directionTest(a));},emit:function emit(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a);}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function getTouchAction(){return[bb];},attrTest:function attrTest(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fb);},emit:function emit(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a);}}}),j(aa,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function getTouchAction(){return[_a];},process:function process(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Aa|Ba)&&!f)this.reset();else if(a.eventType&ya)this.reset(),this._timer=e(function(){this.state=ib,this.tryEmit();},b.time,this);else if(a.eventType&Aa)return ib;return kb;},reset:function reset(){clearTimeout(this._timer);},emit:function emit(a){this.state===ib&&(a&&a.eventType&Aa?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=na(),this.manager.emit(this.options.event,this._input)));}}),j(ba,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function getTouchAction(){return[bb];},attrTest:function attrTest(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fb);}}),j(ca,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Ha|Ia,pointers:1},getTouchAction:function getTouchAction(){return $.prototype.getTouchAction.call(this);},attrTest:function attrTest(a){var b,c=this.options.direction;return c&(Ha|Ia)?b=a.velocity:c&Ha?b=a.velocityX:c&Ia&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&ma(b)>this.options.velocity&&a.eventType&Aa;},emit:function emit(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a);}}),j(da,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function getTouchAction(){return[ab];},process:function process(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&ya&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Aa)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ib,this.tryEmit();},b.interval,this),fb):ib;}return kb;},failTimeout:function failTimeout(){return this._timer=e(function(){this.state=kb;},this.options.interval,this),kb;},reset:function reset(){clearTimeout(this._timer);},emit:function emit(){this.state==ib&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input));}}),ea.VERSION="2.0.4",ea.defaults={domEvents:!1,touchAction:$a,enable:!0,inputTarget:null,inputClass:null,preset:[[ba,{enable:!1}],[_,{enable:!1},["rotate"]],[ca,{direction:Ha}],[$,{direction:Ha},["swipe"]],[da],[da,{event:"doubletap",taps:2},["tap"]],[aa]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lb=1,mb=2;fa.prototype={set:function set(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this;},stop:function stop(a){this.session.stopped=a?mb:lb;},recognize:function recognize(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ib)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;){c=d[f],b.stopped===mb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fb|gb|hb)&&(e=b.curRecognizer=c),f++;}}},get:function get(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++){if(b[c].options.event==a)return b[c];}return null;},add:function add(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a;},remove:function remove(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this;},on:function on(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b);}),this;},off:function off(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a];}),this;},emit:function emit(a,b){this.options.domEvents&&ha(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault();};for(var d=0;d<c.length;){c[d](b),d++;}}},destroy:function destroy(){this.element&&ga(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null;}},h(ea,{INPUT_START:ya,INPUT_MOVE:za,INPUT_END:Aa,INPUT_CANCEL:Ba,STATE_POSSIBLE:eb,STATE_BEGAN:fb,STATE_CHANGED:gb,STATE_ENDED:hb,STATE_RECOGNIZED:ib,STATE_CANCELLED:jb,STATE_FAILED:kb,DIRECTION_NONE:Ca,DIRECTION_LEFT:Da,DIRECTION_RIGHT:Ea,DIRECTION_UP:Fa,DIRECTION_DOWN:Ga,DIRECTION_HORIZONTAL:Ha,DIRECTION_VERTICAL:Ia,DIRECTION_ALL:Ja,Manager:fa,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:da,Pan:$,Swipe:ca,Pinch:_,Rotate:ba,Press:aa,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),( false?"undefined":_typeof(__webpack_require__(19)))==ka&&__webpack_require__(20)?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return ea;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&module.exports?module.exports=ea:a[c]=ea;}(window,document,"Hammer"),function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__webpack_require__(18)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))?a(require("jquery"),require("hammerjs")):a(jQuery,Hammer);}(function(a,b){function c(c,d){var e=a(c);e.data("hammer")||e.data("hammer",new b(e[0],d));}a.fn.hammer=function(a){return this.each(function(){c(this,a);});},b.Manager.prototype.emit=function(b){return function(c,d){b.call(this,c,d),a(this.element).trigger({type:c,gesture:d});};}(b.Manager.prototype.emit);}),function(a){a.Package?Materialize={}:a.Materialize={};}(window),Materialize.guid=function(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1);}return function(){return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a();};}(),Materialize.elementOrParentIsFixed=function(a){var b=$(a),c=b.add(b.parents()),d=!1;return c.each(function(){return"fixed"===$(this).css("position")?(d=!0,!1):void 0;}),d;};var Vel;Vel=$?$.Velocity:jQuery?jQuery.Velocity:Velocity,function(a){a.fn.collapsible=function(b){var c={accordion:void 0};return b=a.extend(c,b),this.each(function(){function c(b){h=g.find("> li > .collapsible-header"),b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function complete(){a(this).css("height","");}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function complete(){a(this).css("height","");}}),h.not(b).removeClass("active").parent().removeClass("active"),h.not(b).parent().children(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function complete(){a(this).css("height","");}});}function d(b){b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function complete(){a(this).css("height","");}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function complete(){a(this).css("height","");}});}function e(a){var b=f(a);return b.length>0;}function f(a){return a.closest("li > .collapsible-header");}var g=a(this),h=a(this).find("> li > .collapsible-header"),i=g.data("collapsible");g.off("click.collapse","> li > .collapsible-header"),h.off("click.collapse"),g.on("click.collapse","> li > .collapsible-header",function(g){var h=a(this),j=a(g.target);e(j)&&(j=f(j)),j.toggleClass("active"),b.accordion||"accordion"===i||void 0===i?c(j):(d(j),h.hasClass("active")&&d(h));});var h=g.find("> li > .collapsible-header");b.accordion||"accordion"===i||void 0===i?c(h.filter(".active").first()):h.filter(".active").each(function(){d(a(this));});});},a(document).ready(function(){a(".collapsible").collapsible();});}(jQuery),function(a){a.fn.scrollTo=function(b){return a(this).scrollTop(a(this).scrollTop()-a(this).offset().top+a(b).offset().top),this;},a.fn.dropdown=function(b){var c={inDuration:300,outDuration:225,constrain_width:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left",stopPropagation:!1};return"open"===b?(this.each(function(){a(this).trigger("open");}),!1):"close"===b?(this.each(function(){a(this).trigger("close");}),!1):void this.each(function(){function b(){void 0!==f.data("induration")&&(g.inDuration=f.data("induration")),void 0!==f.data("outduration")&&(g.outDuration=f.data("outduration")),void 0!==f.data("constrainwidth")&&(g.constrain_width=f.data("constrainwidth")),void 0!==f.data("hover")&&(g.hover=f.data("hover")),void 0!==f.data("gutter")&&(g.gutter=f.data("gutter")),void 0!==f.data("beloworigin")&&(g.belowOrigin=f.data("beloworigin")),void 0!==f.data("alignment")&&(g.alignment=f.data("alignment")),void 0!==f.data("stoppropagation")&&(g.stopPropagation=f.data("stoppropagation"));}function d(c){"focus"===c&&(h=!0),b(),i.addClass("active"),f.addClass("active"),g.constrain_width===!0?i.css("width",f.outerWidth()):i.css("white-space","nowrap");var d=window.innerHeight,e=f.innerHeight(),j=f.offset().left,k=f.offset().top-a(window).scrollTop(),l=g.alignment,m=0,n=0,o=0;g.belowOrigin===!0&&(o=e);var p=0,q=0,r=f.parent();if(r.is("body")||(r[0].scrollHeight>r[0].clientHeight&&(p=r[0].scrollTop),r[0].scrollWidth>r[0].clientWidth&&(q=r[0].scrollLeft)),j+i.innerWidth()>a(window).width()?l="right":j-i.innerWidth()+f.innerWidth()<0&&(l="left"),k+i.innerHeight()>d)if(k+e-i.innerHeight()<0){var s=d-k-o;i.css("max-height",s);}else o||(o+=e),o-=i.innerHeight();if("left"===l)m=g.gutter,n=f.position().left+m;else if("right"===l){var t=f.position().left+f.outerWidth()-i.outerWidth();m=-g.gutter,n=t+m;}i.css({position:"absolute",top:f.position().top+o+p,left:n+q}),i.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:g.inDuration,easing:"easeOutCubic",complete:function complete(){a(this).css("height","");}}).animate({opacity:1},{queue:!1,duration:g.inDuration,easing:"easeOutSine"});}function e(){h=!1,i.fadeOut(g.outDuration),i.removeClass("active"),f.removeClass("active"),setTimeout(function(){i.css("max-height","");},g.outDuration);}var f=a(this),g=a.extend({},c,g),h=!1,i=a("#"+f.attr("data-activates"));if(b(),f.after(i),g.hover){var j=!1;f.unbind("click."+f.attr("id")),f.on("mouseenter",function(a){j===!1&&(d(),j=!0);}),f.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-content").is(i)||(i.stop(!0,!0),e(),j=!1);}),i.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-button").is(f)||(i.stop(!0,!0),e(),j=!1);});}else f.unbind("click."+f.attr("id")),f.bind("click."+f.attr("id"),function(b){h||(f[0]!=b.currentTarget||f.hasClass("active")||0!==a(b.target).closest(".dropdown-content").length?f.hasClass("active")&&(e(),a(document).unbind("click."+i.attr("id")+" touchstart."+i.attr("id"))):(b.preventDefault(),g.stopPropagation&&b.stopPropagation(),d("click")),i.hasClass("active")&&a(document).bind("click."+i.attr("id")+" touchstart."+i.attr("id"),function(b){i.is(b.target)||f.is(b.target)||f.find(b.target).length||(e(),a(document).unbind("click."+i.attr("id")+" touchstart."+i.attr("id")));}));});f.on("open",function(a,b){d(b);}),f.on("close",e);});},a(document).ready(function(){a(".dropdown-button").dropdown();});}(jQuery),function(a){var b=0,c=0,d=function d(){return c++,"materialize-lean-overlay-"+c;};a.fn.extend({openModal:function openModal(c){var e=a("body"),f=e.innerWidth();e.css("overflow","hidden"),e.width(f);var g={opacity:.5,in_duration:350,out_duration:250,ready:void 0,complete:void 0,dismissible:!0,starting_top:"4%",ending_top:"10%"},h=a(this);if(!h.hasClass("open")){var i=d(),j=a('<div class="lean-overlay"></div>');lStack=++b,j.attr("id",i).css("z-index",1e3+2*lStack),h.data("overlay-id",i).css("z-index",1e3+2*lStack+1),h.addClass("open"),a("body").append(j),c=a.extend(g,c),c.dismissible&&(j.click(function(){h.closeModal(c);}),a(document).on("keyup.leanModal"+i,function(a){27===a.keyCode&&h.closeModal(c);})),h.find(".modal-close").on("click.close",function(a){h.closeModal(c);}),j.css({display:"block",opacity:0}),h.css({display:"block",opacity:0}),j.velocity({opacity:c.opacity},{duration:c.in_duration,queue:!1,ease:"easeOutCubic"}),h.data("associated-overlay",j[0]),h.hasClass("bottom-sheet")?h.velocity({bottom:"0",opacity:1},{duration:c.in_duration,queue:!1,ease:"easeOutCubic",complete:function complete(){"function"==typeof c.ready&&c.ready();}}):(a.Velocity.hook(h,"scaleX",.7),h.css({top:c.starting_top}),h.velocity({top:c.ending_top,opacity:1,scaleX:"1"},{duration:c.in_duration,queue:!1,ease:"easeOutCubic",complete:function complete(){"function"==typeof c.ready&&c.ready();}}));}}}),a.fn.extend({closeModal:function closeModal(c){var d={out_duration:250,complete:void 0},e=a(this),f=e.data("overlay-id"),g=a("#"+f);e.removeClass("open"),c=a.extend(d,c),a("body").css({overflow:"",width:""}),e.find(".modal-close").off("click.close"),a(document).off("keyup.leanModal"+f),g.velocity({opacity:0},{duration:c.out_duration,queue:!1,ease:"easeOutQuart"}),e.hasClass("bottom-sheet")?e.velocity({bottom:"-100%",opacity:0},{duration:c.out_duration,queue:!1,ease:"easeOutCubic",complete:function complete(){g.css({display:"none"}),"function"==typeof c.complete&&c.complete(),g.remove(),b--;}}):e.velocity({top:c.starting_top,opacity:0,scaleX:.7},{duration:c.out_duration,complete:function complete(){a(this).css("display","none"),"function"==typeof c.complete&&c.complete(),g.remove(),b--;}});}}),a.fn.extend({leanModal:function leanModal(b){return this.each(function(){var c={starting_top:"4%"},d=a.extend(c,b);a(this).click(function(b){d.starting_top=(a(this).offset().top-a(window).scrollTop())/1.15;var c=a(this).attr("href")||"#"+a(this).data("target");a(c).openModal(d),b.preventDefault();});});}});}(jQuery),function(a){a.fn.materialbox=function(){return this.each(function(){function b(){f=!1;var b=i.parent(".material-placeholder"),d=(window.innerWidth,window.innerHeight,i.data("width")),g=i.data("height");i.velocity("stop",!0),a("#materialbox-overlay").velocity("stop",!0),a(".materialbox-caption").velocity("stop",!0),a("#materialbox-overlay").velocity({opacity:0},{duration:h,queue:!1,easing:"easeOutQuad",complete:function complete(){e=!1,a(this).remove();}}),i.velocity({width:d,height:g,left:0,top:0},{duration:h,queue:!1,easing:"easeOutQuad"}),a(".materialbox-caption").velocity({opacity:0},{duration:h,queue:!1,easing:"easeOutQuad",complete:function complete(){b.css({height:"",width:"",position:"",top:"",left:""}),i.css({height:"",top:"",left:"",width:"","max-width":"",position:"","z-index":""}),i.removeClass("active"),f=!0,a(this).remove(),c&&c.css("overflow","");}});}if(!a(this).hasClass("initialized")){a(this).addClass("initialized");var c,d,e=!1,f=!0,g=275,h=200,i=a(this),j=a("<div></div>").addClass("material-placeholder");i.wrap(j),i.on("click",function(){var h=i.parent(".material-placeholder"),j=window.innerWidth,k=window.innerHeight,l=i.width(),m=i.height();if(f===!1)return b(),!1;if(e&&f===!0)return b(),!1;f=!1,i.addClass("active"),e=!0,h.css({width:h[0].getBoundingClientRect().width,height:h[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),c=void 0,d=h[0].parentNode;for(;null!==d&&!a(d).is(document);){var n=a(d);"visible"!==n.css("overflow")&&(n.css("overflow","visible"),c=void 0===c?n:c.add(n)),d=d.parentNode;}i.css({position:"absolute","z-index":1e3}).data("width",l).data("height",m);var o=a('<div id="materialbox-overlay"></div>').css({opacity:0}).click(function(){f===!0&&b();});if(i.before(o),o.velocity({opacity:1},{duration:g,queue:!1,easing:"easeOutQuad"}),""!==i.data("caption")){var p=a('<div class="materialbox-caption"></div>');p.text(i.data("caption")),a("body").append(p),p.css({display:"inline"}),p.velocity({opacity:1},{duration:g,queue:!1,easing:"easeOutQuad"});}var q=0,r=l/j,s=m/k,t=0,u=0;r>s?(q=m/l,t=.9*j,u=.9*j*q):(q=l/m,t=.9*k*q,u=.9*k),i.hasClass("responsive-img")?i.velocity({"max-width":t,width:l},{duration:0,queue:!1,complete:function complete(){i.css({left:0,top:0}).velocity({height:u,width:t,left:a(document).scrollLeft()+j/2-i.parent(".material-placeholder").offset().left-t/2,top:a(document).scrollTop()+k/2-i.parent(".material-placeholder").offset().top-u/2},{duration:g,queue:!1,easing:"easeOutQuad",complete:function complete(){f=!0;}});}}):i.css("left",0).css("top",0).velocity({height:u,width:t,left:a(document).scrollLeft()+j/2-i.parent(".material-placeholder").offset().left-t/2,top:a(document).scrollTop()+k/2-i.parent(".material-placeholder").offset().top-u/2},{duration:g,queue:!1,easing:"easeOutQuad",complete:function complete(){f=!0;}});}),a(window).scroll(function(){e&&b();}),a(document).keyup(function(a){27===a.keyCode&&f===!0&&e&&b();});}});},a(document).ready(function(){a(".materialboxed").materialbox();});}(jQuery),function(a){a.fn.parallax=function(){var b=a(window).width();return this.each(function(c){function d(c){var d;d=601>b?e.height()>0?e.height():e.children("img").height():e.height()>0?e.height():500;var f=e.children("img").first(),g=f.height(),h=g-d,i=e.offset().top+d,j=e.offset().top,k=a(window).scrollTop(),l=window.innerHeight,m=k+l,n=(m-j)/(d+l),o=Math.round(h*n);c&&f.css("display","block"),i>k&&k+l>j&&f.css("transform","translate3D(-50%,"+o+"px, 0)");}var e=a(this);e.addClass("parallax"),e.children("img").one("load",function(){d(!0);}).each(function(){this.complete&&a(this).load();}),a(window).scroll(function(){b=a(window).width(),d(!1);}),a(window).resize(function(){b=a(window).width(),d(!1);});});};}(jQuery),function(a){var b={init:function init(b){var c={onShow:null};return b=a.extend(c,b),this.each(function(){var c=a(this);a(window).width();c.width("100%");var d,e,f=c.find("li.tab a"),g=c.width(),h=Math.max(g,c[0].scrollWidth)/f.length,i=0;d=a(f.filter('[href="'+location.hash+'"]')),0===d.length&&(d=a(this).find("li.tab a.active").first()),0===d.length&&(d=a(this).find("li.tab a").first()),d.addClass("active"),i=f.index(d),0>i&&(i=0),void 0!==d[0]&&(e=a(d[0].hash)),c.append('<div class="indicator"></div>');var j=c.find(".indicator");c.is(":visible")&&(j.css({right:g-(i+1)*h}),j.css({left:i*h})),a(window).resize(function(){g=c.width(),h=Math.max(g,c[0].scrollWidth)/f.length,0>i&&(i=0),0!==h&&0!==g&&(j.css({right:g-(i+1)*h}),j.css({left:i*h}));}),f.not(d).each(function(){a(this.hash).hide();}),c.on("click","a",function(k){if(a(this).parent().hasClass("disabled"))return void k.preventDefault();if(!a(this).attr("target")){g=c.width(),h=Math.max(g,c[0].scrollWidth)/f.length,d.removeClass("active"),void 0!==e&&e.hide(),d=a(this),e=a(this.hash),f=c.find("li.tab a"),d.addClass("active");var l=i;i=f.index(a(this)),0>i&&(i=0),void 0!==e&&(e.show(),"function"==typeof b.onShow&&b.onShow.call(this,e)),i-l>=0?(j.velocity({right:g-(i+1)*h},{duration:300,queue:!1,easing:"easeOutQuad"}),j.velocity({left:i*h},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})):(j.velocity({left:i*h},{duration:300,queue:!1,easing:"easeOutQuad"}),j.velocity({right:g-(i+1)*h},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})),k.preventDefault();}});});},select_tab:function select_tab(a){this.find('a[href="#'+a+'"]').trigger("click");}};a.fn.tabs=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=(typeof c==="undefined"?"undefined":_typeof(c))&&c?void a.error("Method "+c+" does not exist on jQuery.tooltip"):b.init.apply(this,arguments);},a(document).ready(function(){a("ul.tabs").tabs();});}(jQuery),function(a){a.fn.tooltip=function(c){var d=5,e={delay:350,tooltip:"",position:"bottom",html:!1};return"remove"===c?(this.each(function(){a("#"+a(this).attr("data-tooltip-id")).remove(),a(this).off("mouseenter.tooltip mouseleave.tooltip");}),!1):(c=a.extend(e,c),this.each(function(){var e=Materialize.guid(),f=a(this);f.attr("data-tooltip-id",e);var g,h,i,j,k,l,m=function m(){g=f.attr("data-html")?"true"===f.attr("data-html"):c.html,h=f.attr("data-delay"),h=void 0===h||""===h?c.delay:h,i=f.attr("data-position"),i=void 0===i||""===i?c.position:i,j=f.attr("data-tooltip"),j=void 0===j||""===j?c.tooltip:j;};m();var n=function n(){var b=a('<div class="material-tooltip"></div>');return j=g?a("<span></span>").html(j):a("<span></span>").text(j),b.append(j).appendTo(a("body")).attr("id",e),l=a('<div class="backdrop"></div>'),l.appendTo(b),b;};k=n(),f.off("mouseenter.tooltip mouseleave.tooltip");var o,p=!1;f.on({"mouseenter.tooltip":function mouseenterTooltip(a){var c=function c(){m(),p=!0,k.velocity("stop"),l.velocity("stop"),k.css({display:"block",left:"0px",top:"0px"});var a,c,e,g=f.outerWidth(),h=f.outerHeight(),j=k.outerHeight(),n=k.outerWidth(),o="0px",q="0px",r=8,s=8;"top"===i?(a=f.offset().top-j-d,c=f.offset().left+g/2-n/2,e=b(c,a,n,j),o="-10px",l.css({bottom:0,left:0,borderRadius:"14px 14px 0 0",transformOrigin:"50% 100%",marginTop:j,marginLeft:n/2-l.width()/2})):"left"===i?(a=f.offset().top+h/2-j/2,c=f.offset().left-n-d,e=b(c,a,n,j),q="-10px",l.css({top:"-7px",right:0,width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:j/2,marginLeft:n})):"right"===i?(a=f.offset().top+h/2-j/2,c=f.offset().left+g+d,e=b(c,a,n,j),q="+10px",l.css({top:"-7px",left:0,width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:j/2,marginLeft:"0px"})):(a=f.offset().top+f.outerHeight()+d,c=f.offset().left+g/2-n/2,e=b(c,a,n,j),o="+10px",l.css({top:0,left:0,marginLeft:n/2-l.width()/2})),k.css({top:e.y,left:e.x}),r=Math.SQRT2*n/parseInt(l.css("width")),s=Math.SQRT2*j/parseInt(l.css("height")),k.velocity({marginTop:o,marginLeft:q},{duration:350,queue:!1}).velocity({opacity:1},{duration:300,delay:50,queue:!1}),l.css({display:"block"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scaleX:r,scaleY:s},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"});};o=setTimeout(c,h);},"mouseleave.tooltip":function mouseleaveTooltip(){p=!1,clearTimeout(o),setTimeout(function(){p!==!0&&(k.velocity({opacity:0,marginTop:0,marginLeft:0},{duration:225,queue:!1}),l.velocity({opacity:0,scaleX:1,scaleY:1},{duration:225,queue:!1,complete:function complete(){l.css("display","none"),k.css("display","none"),p=!1;}}));},225);}});}));};var b=function b(_b,c,d,e){var f=_b,g=c;return 0>f?f=4:f+d>window.innerWidth&&(f-=f+d-window.innerWidth),0>g?g=4:g+e>window.innerHeight+a(window).scrollTop&&(g-=g+e-window.innerHeight),{x:f,y:g};};a(document).ready(function(){a(".tooltipped").tooltip();});}(jQuery),function(a){"use strict";function b(a){return null!==a&&a===a.window;}function c(a){return b(a)?a:9===a.nodeType&&a.defaultView;}function d(a){var b,d,e={top:0,left:0},f=a&&a.ownerDocument;return b=f.documentElement,"undefined"!=typeof a.getBoundingClientRect&&(e=a.getBoundingClientRect()),d=c(f),{top:e.top+d.pageYOffset-b.clientTop,left:e.left+d.pageXOffset-b.clientLeft};}function e(a){var b="";for(var c in a){a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");}return b;}function f(a){if(k.allowEvent(a)===!1)return null;for(var b=null,c=a.target||a.srcElement;null!==c.parentElement;){if(!(c instanceof SVGElement||-1===c.className.indexOf("waves-effect"))){b=c;break;}if(c.classList.contains("waves-effect")){b=c;break;}c=c.parentElement;}return b;}function g(b){var c=f(b);null!==c&&(j.show(b,c),"ontouchstart"in a&&(c.addEventListener("touchend",j.hide,!1),c.addEventListener("touchcancel",j.hide,!1)),c.addEventListener("mouseup",j.hide,!1),c.addEventListener("mouseleave",j.hide,!1));}var h=h||{},i=document.querySelectorAll.bind(document),j={duration:750,show:function show(a,b){if(2===a.button)return!1;var c=b||this,f=document.createElement("div");f.className="waves-ripple",c.appendChild(f);var g=d(c),h=a.pageY-g.top,i=a.pageX-g.left,k="scale("+c.clientWidth/100*10+")";"touches"in a&&(h=a.touches[0].pageY-g.top,i=a.touches[0].pageX-g.left),f.setAttribute("data-hold",Date.now()),f.setAttribute("data-scale",k),f.setAttribute("data-x",i),f.setAttribute("data-y",h);var l={top:h+"px",left:i+"px"};f.className=f.className+" waves-notransition",f.setAttribute("style",e(l)),f.className=f.className.replace("waves-notransition",""),l["-webkit-transform"]=k,l["-moz-transform"]=k,l["-ms-transform"]=k,l["-o-transform"]=k,l.transform=k,l.opacity="1",l["-webkit-transition-duration"]=j.duration+"ms",l["-moz-transition-duration"]=j.duration+"ms",l["-o-transition-duration"]=j.duration+"ms",l["transition-duration"]=j.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",f.setAttribute("style",e(l));},hide:function hide(a){k.touchup(a);var b=this,c=(1.4*b.clientWidth,null),d=b.getElementsByClassName("waves-ripple");if(!(d.length>0))return!1;c=d[d.length-1];var f=c.getAttribute("data-x"),g=c.getAttribute("data-y"),h=c.getAttribute("data-scale"),i=Date.now()-Number(c.getAttribute("data-hold")),l=350-i;0>l&&(l=0),setTimeout(function(){var a={top:g+"px",left:f+"px",opacity:"0","-webkit-transition-duration":j.duration+"ms","-moz-transition-duration":j.duration+"ms","-o-transition-duration":j.duration+"ms","transition-duration":j.duration+"ms","-webkit-transform":h,"-moz-transform":h,"-ms-transform":h,"-o-transform":h,transform:h};c.setAttribute("style",e(a)),setTimeout(function(){try{b.removeChild(c);}catch(a){return!1;}},j.duration);},l);},wrapInput:function wrapInput(a){for(var b=0;b<a.length;b++){var c=a[b];if("input"===c.tagName.toLowerCase()){var d=c.parentNode;if("i"===d.tagName.toLowerCase()&&-1!==d.className.indexOf("waves-effect"))continue;var e=document.createElement("i");e.className=c.className+" waves-input-wrapper";var f=c.getAttribute("style");f||(f=""),e.setAttribute("style",f),c.className="waves-button-input",c.removeAttribute("style"),d.replaceChild(e,c),e.appendChild(c);}}}},k={touches:0,allowEvent:function allowEvent(a){var b=!0;return"touchstart"===a.type?k.touches+=1:"touchend"===a.type||"touchcancel"===a.type?setTimeout(function(){k.touches>0&&(k.touches-=1);},500):"mousedown"===a.type&&k.touches>0&&(b=!1),b;},touchup:function touchup(a){k.allowEvent(a);}};h.displayEffect=function(b){b=b||{},"duration"in b&&(j.duration=b.duration),j.wrapInput(i(".waves-effect")),"ontouchstart"in a&&document.body.addEventListener("touchstart",g,!1),document.body.addEventListener("mousedown",g,!1);},h.attach=function(b){"input"===b.tagName.toLowerCase()&&(j.wrapInput([b]),b=b.parentElement),"ontouchstart"in a&&b.addEventListener("touchstart",g,!1),b.addEventListener("mousedown",g,!1);},a.Waves=h,document.addEventListener("DOMContentLoaded",function(){h.displayEffect();},!1);}(window),Materialize.toast=function(a,b,c,d){function e(a){var b=document.createElement("div");if(b.classList.add("toast"),c)for(var e=c.split(" "),f=0,g=e.length;g>f;f++){b.classList.add(e[f]);}("object"==(typeof HTMLElement==="undefined"?"undefined":_typeof(HTMLElement))?a instanceof HTMLElement:a&&"object"==(typeof a==="undefined"?"undefined":_typeof(a))&&null!==a&&1===a.nodeType&&"string"==typeof a.nodeName)?b.appendChild(a):a instanceof jQuery?b.appendChild(a[0]):b.innerHTML=a;var h=new Hammer(b,{prevent_default:!1});return h.on("pan",function(a){var c=a.deltaX,d=80;b.classList.contains("panning")||b.classList.add("panning");var e=1-Math.abs(c/d);0>e&&(e=0),Vel(b,{left:c,opacity:e},{duration:50,queue:!1,easing:"easeOutQuad"});}),h.on("panend",function(a){var c=a.deltaX,e=80;Math.abs(c)>e?Vel(b,{marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function complete(){"function"==typeof d&&d(),b.parentNode.removeChild(b);}}):(b.classList.remove("panning"),Vel(b,{left:0,opacity:1},{duration:300,easing:"easeOutExpo",queue:!1}));}),b;}c=c||"";var f=document.getElementById("toast-container");null===f&&(f=document.createElement("div"),f.id="toast-container",document.body.appendChild(f));var g=e(a);a&&f.appendChild(g),g.style.top="35px",g.style.opacity=0,Vel(g,{top:"0px",opacity:1},{duration:300,easing:"easeOutCubic",queue:!1});var h=b,i=setInterval(function(){null===g.parentNode&&window.clearInterval(i),g.classList.contains("panning")||(h-=20),0>=h&&(Vel(g,{opacity:0,marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function complete(){"function"==typeof d&&d(),this[0].parentNode.removeChild(this[0]);}}),window.clearInterval(i));},20);},function(a){var b={init:function init(b){var c={menuWidth:300,edge:"left",closeOnClick:!1};b=a.extend(c,b),a(this).each(function(){function c(c){g=!1,h=!1,a("body").css({overflow:"",width:""}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function complete(){a(this).remove();}}),"left"===b.edge?(f.css({width:"",right:"",left:"0"}),e.velocity({translateX:"-100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function complete(){c===!0&&(e.removeAttr("style"),e.css("width",b.menuWidth));}})):(f.css({width:"",right:"0",left:""}),e.velocity({translateX:"100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function complete(){c===!0&&(e.removeAttr("style"),e.css("width",b.menuWidth));}}));}var d=a(this),e=a("#"+d.attr("data-activates"));300!=b.menuWidth&&e.css("width",b.menuWidth);var f=a('<div class="drag-target"></div>');a("body").append(f),"left"==b.edge?(e.css("transform","translateX(-100%)"),f.css({left:0})):(e.addClass("right-aligned").css("transform","translateX(100%)"),f.css({right:0})),e.hasClass("fixed")&&window.innerWidth>992&&e.css("transform","translateX(0)"),e.hasClass("fixed")&&a(window).resize(function(){window.innerWidth>992?0!==a("#sidenav-overlay").length&&h?c(!0):e.css("transform","translateX(0%)"):h===!1&&("left"===b.edge?e.css("transform","translateX(-100%)"):e.css("transform","translateX(100%)"));}),b.closeOnClick===!0&&e.on("click.itemclick","a:not(.collapsible-header)",function(){c();});var g=!1,h=!1;f.on("click",function(){h&&c();}),f.hammer({prevent_default:!1}).bind("pan",function(d){if("touch"==d.gesture.pointerType){var f=(d.gesture.direction,d.gesture.center.x),g=(d.gesture.center.y,d.gesture.velocityX,a("body")),i=g.innerWidth();if(g.css("overflow","hidden"),g.width(i),0===a("#sidenav-overlay").length){var j=a('<div id="sidenav-overlay"></div>');j.css("opacity",0).click(function(){c();}),a("body").append(j);}if("left"===b.edge&&(f>b.menuWidth?f=b.menuWidth:0>f&&(f=0)),"left"===b.edge)f<b.menuWidth/2?h=!1:f>=b.menuWidth/2&&(h=!0),e.css("transform","translateX("+(f-b.menuWidth)+"px)");else{f<window.innerWidth-b.menuWidth/2?h=!0:f>=window.innerWidth-b.menuWidth/2&&(h=!1);var k=f-b.menuWidth/2;0>k&&(k=0),e.css("transform","translateX("+k+"px)");}var l;"left"===b.edge?(l=f/b.menuWidth,a("#sidenav-overlay").velocity({opacity:l},{duration:10,queue:!1,easing:"easeOutQuad"})):(l=Math.abs((f-window.innerWidth)/b.menuWidth),a("#sidenav-overlay").velocity({opacity:l},{duration:10,queue:!1,easing:"easeOutQuad"}));}}).bind("panend",function(c){if("touch"==c.gesture.pointerType){var d=c.gesture.velocityX,i=c.gesture.center.x,j=i-b.menuWidth,k=i-b.menuWidth/2;j>0&&(j=0),0>k&&(k=0),g=!1,"left"===b.edge?h&&.3>=d||-.5>d?(0!==j&&e.velocity({translateX:[0,j]},{duration:300,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),f.css({width:"50%",right:0,left:""}),h=!0):(!h||d>.3)&&(a("body").css({overflow:"",width:""}),e.velocity({translateX:[-1*b.menuWidth-10,j]},{duration:200,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function complete(){a(this).remove();}}),f.css({width:"10px",right:"",left:0})):h&&d>=-.3||d>.5?(0!==k&&e.velocity({translateX:[0,k]},{duration:300,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),f.css({width:"50%",right:"",left:0}),h=!0):(!h||-.3>d)&&(a("body").css({overflow:"",width:""}),e.velocity({translateX:[b.menuWidth+10,k]},{duration:200,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function complete(){a(this).remove();}}),f.css({width:"10px",right:0,left:""}));}}),d.click(function(){if(h===!0)h=!1,g=!1,c();else{var d=a("body"),i=d.innerWidth();d.css("overflow","hidden"),d.width(i),a("body").append(f),"left"===b.edge?(f.css({width:"50%",right:0,left:""}),e.velocity({translateX:[0,-1*b.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"})):(f.css({width:"50%",right:"",left:0}),e.velocity({translateX:[0,b.menuWidth]},{duration:300,queue:!1,easing:"easeOutQuad"}));var j=a('<div id="sidenav-overlay"></div>');j.css("opacity",0).click(function(){h=!1,g=!1,c(),j.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function complete(){a(this).remove();}});}),a("body").append(j),j.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function complete(){h=!0,g=!1;}});}return!1;});});},show:function show(){this.trigger("click");},hide:function hide(){a("#sidenav-overlay").trigger("click");}};a.fn.sideNav=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=(typeof c==="undefined"?"undefined":_typeof(c))&&c?void a.error("Method "+c+" does not exist on jQuery.sideNav"):b.init.apply(this,arguments);};}(jQuery),function(a){function b(b,c,d,e){var f=a();return a.each(g,function(a,g){if(g.height()>0){var h=g.offset().top,i=g.offset().left,j=i+g.width(),k=h+g.height(),l=!(i>c||e>j||h>d||b>k);l&&f.push(g);}}),f;}function c(){++j;var c=f.scrollTop(),d=f.scrollLeft(),e=d+f.width(),g=c+f.height(),i=b(c+k.top+200,e+k.right,g+k.bottom,d+k.left);a.each(i,function(a,b){var c=b.data("scrollSpy:ticks");"number"!=typeof c&&b.triggerHandler("scrollSpy:enter"),b.data("scrollSpy:ticks",j);}),a.each(h,function(a,b){var c=b.data("scrollSpy:ticks");"number"==typeof c&&c!==j&&(b.triggerHandler("scrollSpy:exit"),b.data("scrollSpy:ticks",null));}),h=i;}function d(){f.trigger("scrollSpy:winSize");}function e(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function i(){h=c.leading===!1?0:l(),g=null,f=a.apply(d,e),d=e=null;};return function(){var j=l();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k?(clearTimeout(g),g=null,h=j,f=a.apply(d,e),d=e=null):g||c.trailing===!1||(g=setTimeout(i,k)),f;};}var f=a(window),g=[],h=[],i=!1,j=0,k={top:0,right:0,bottom:0,left:0},l=Date.now||function(){return new Date().getTime();};a.scrollSpy=function(b,d){var h={throttle:100,scrollOffset:200};d=a.extend(h,d);var j=[];b=a(b),b.each(function(b,c){g.push(a(c)),a(c).data("scrollSpy:id",b),a('a[href="#'+a(c).attr("id")+'"]').click(function(b){b.preventDefault();var c=a(this.hash).offset().top+1;a("html, body").animate({scrollTop:c-d.scrollOffset},{duration:400,queue:!1,easing:"easeOutCubic"});});}),k.top=d.offsetTop||0,k.right=d.offsetRight||0,k.bottom=d.offsetBottom||0,k.left=d.offsetLeft||0;var l=e(c,d.throttle||100),m=function m(){a(document).ready(l);};return i||(f.on("scroll",m),f.on("resize",m),i=!0),setTimeout(m,0),b.on("scrollSpy:enter",function(){j=a.grep(j,function(a){return 0!=a.height();});var b=a(this);j[0]?(a('a[href="#'+j[0].attr("id")+'"]').removeClass("active"),b.data("scrollSpy:id")<j[0].data("scrollSpy:id")?j.unshift(a(this)):j.push(a(this))):j.push(a(this)),a('a[href="#'+j[0].attr("id")+'"]').addClass("active");}),b.on("scrollSpy:exit",function(){if(j=a.grep(j,function(a){return 0!=a.height();}),j[0]){a('a[href="#'+j[0].attr("id")+'"]').removeClass("active");var b=a(this);j=a.grep(j,function(a){return a.attr("id")!=b.attr("id");}),j[0]&&a('a[href="#'+j[0].attr("id")+'"]').addClass("active");}}),b;},a.winSizeSpy=function(b){return a.winSizeSpy=function(){return f;},b=b||{throttle:100},f.on("resize",e(d,b.throttle||100));},a.fn.scrollSpy=function(b){return a.scrollSpy(a(this),b);};}(jQuery),function(a){a(document).ready(function(){function b(b){var c=b.css("font-family"),d=b.css("font-size"),f=b.css("line-height");d&&e.css("font-size",d),c&&e.css("font-family",c),f&&e.css("line-height",f),"off"===b.attr("wrap")&&e.css("overflow-wrap","normal").css("white-space","pre"),e.text(b.val()+"\n");var g=e.html().replace(/\n/g,"<br>");e.html(g),b.is(":visible")?e.css("width",b.width()):e.css("width",a(window).width()/2),b.css("height",e.height());}Materialize.updateTextFields=function(){var b="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(b).each(function(b,c){a(c).val().length>0||c.autofocus||void 0!==a(this).attr("placeholder")||a(c)[0].validity.badInput===!0?a(this).siblings("label").addClass("active"):a(this).siblings("label").removeClass("active");});};var c="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(document).on("change",c,function(){(0!==a(this).val().length||void 0!==a(this).attr("placeholder"))&&a(this).siblings("label").addClass("active"),validate_field(a(this));}),a(document).ready(function(){Materialize.updateTextFields();}),a(document).on("reset",function(b){var d=a(b.target);d.is("form")&&(d.find(c).removeClass("valid").removeClass("invalid"),d.find(c).each(function(){""===a(this).attr("value")&&a(this).siblings("label").removeClass("active");}),d.find("select.initialized").each(function(){var a=d.find("option[selected]").text();d.siblings("input.select-dropdown").val(a);}));}),a(document).on("focus",c,function(){a(this).siblings("label, .prefix").addClass("active");}),a(document).on("blur",c,function(){var b=a(this),c=".prefix";0===b.val().length&&b[0].validity.badInput!==!0&&void 0===b.attr("placeholder")&&(c+=", label"),b.siblings(c).removeClass("active"),validate_field(b);}),window.validate_field=function(a){var b=void 0!==a.attr("length"),c=parseInt(a.attr("length")),d=a.val().length;0===a.val().length&&a[0].validity.badInput===!1?a.hasClass("validate")&&(a.removeClass("valid"),a.removeClass("invalid")):a.hasClass("validate")&&(a.is(":valid")&&b&&c>=d||a.is(":valid")&&!b?(a.removeClass("invalid"),a.addClass("valid")):(a.removeClass("valid"),a.addClass("invalid")));};var d="input[type=radio], input[type=checkbox]";a(document).on("keyup.radio",d,function(b){if(9===b.which){a(this).addClass("tabbed");var c=a(this);return void c.one("blur",function(b){a(this).removeClass("tabbed");});}});var e=a(".hiddendiv").first();e.length||(e=a('<div class="hiddendiv common"></div>'),a("body").append(e));var f=".materialize-textarea";a(f).each(function(){var c=a(this);c.val().length&&b(c);}),a("body").on("keyup keydown autoresize",f,function(){b(a(this));}),a(document).on("change",'.file-field input[type="file"]',function(){for(var b=a(this).closest(".file-field"),c=b.find("input.file-path"),d=a(this)[0].files,e=[],f=0;f<d.length;f++){e.push(d[f].name);}c.val(e.join(", ")),c.trigger("change");});var g,h="input[type=range]",i=!1;a(h).each(function(){var b=a('<span class="thumb"><span class="value"></span></span>');a(this).after(b);});var j=".range-field";a(document).on("change",h,function(b){var c=a(this).siblings(".thumb");c.find(".value").html(a(this).val());}),a(document).on("input mousedown touchstart",h,function(b){var c=a(this).siblings(".thumb"),d=a(this).outerWidth();c.length<=0&&(c=a('<span class="thumb"><span class="value"></span></span>'),a(this).after(c)),c.find(".value").html(a(this).val()),i=!0,a(this).addClass("active"),c.hasClass("active")||c.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),"input"!==b.type&&(g=void 0===b.pageX||null===b.pageX?b.originalEvent.touches[0].pageX-a(this).offset().left:b.pageX-a(this).offset().left,0>g?g=0:g>d&&(g=d),c.addClass("active").css("left",g)),c.find(".value").html(a(this).val());}),a(document).on("mouseup touchend",j,function(){i=!1,a(this).removeClass("active");}),a(document).on("mousemove touchmove",j,function(b){var c,d=a(this).children(".thumb");if(i){d.hasClass("active")||d.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),c=void 0===b.pageX||null===b.pageX?b.originalEvent.touches[0].pageX-a(this).offset().left:b.pageX-a(this).offset().left;var e=a(this).outerWidth();0>c?c=0:c>e&&(c=e),d.addClass("active").css("left",c),d.find(".value").html(d.siblings(h).val());}}),a(document).on("mouseout touchleave",j,function(){if(!i){var b=a(this).children(".thumb");b.hasClass("active")&&b.velocity({height:"0",width:"0",top:"10px",marginLeft:"-6px"},{duration:100}),b.removeClass("active");}}),a.fn.autocomplete=function(b){var c={data:{}};return b=a.extend(c,b),this.each(function(){var c=a(this),d=b.data,e=c.closest(".input-field");if(!a.isEmptyObject(d)){var f=a('<ul class="autocomplete-content dropdown-content"></ul>');e.length?e.append(f):c.after(f);var g=function g(a,b){var c=b.find("img"),d=b.text().toLowerCase().indexOf(""+a.toLowerCase()),e=d+a.length-1,f=b.text().slice(0,d),g=b.text().slice(d,e+1),h=b.text().slice(e+1);b.html("<span>"+f+"<span class='highlight'>"+g+"</span>"+h+"</span>"),c.length&&b.prepend(c);};c.on("keyup",function(b){if(13===b.which)return void f.find("li").first().click();var e=c.val().toLowerCase();if(f.empty(),""!==e)for(var h in d){if(d.hasOwnProperty(h)&&-1!==h.toLowerCase().indexOf(e)&&h.toLowerCase()!==e){var i=a("<li></li>");d[h]?i.append('<img src="'+d[h]+'" class="right circle"><span>'+h+"</span>"):i.append("<span>"+h+"</span>"),f.append(i),g(e,i);}}}),f.on("click","li",function(){c.val(a(this).text().trim()),f.empty();});}});};}),a.fn.material_select=function(b){function c(a,b,c){var e=a.indexOf(b),f=-1===e;return f?a.push(b):a.splice(e,1),c.siblings("ul.dropdown-content").find("li").eq(b).toggleClass("active"),c.find("option").eq(b).prop("selected",f),d(a,c),f;}function d(a,b){for(var c="",d=0,e=a.length;e>d;d++){var f=b.find("option").eq(a[d]).text();c+=0===d?f:", "+f;}""===c&&(c=b.find("option:disabled").eq(0).text()),b.siblings("input.select-dropdown").val(c);}a(this).each(function(){var d=a(this);if(!d.hasClass("browser-default")){var e=d.attr("multiple")?!0:!1,f=d.data("select-id");if(f&&(d.parent().find("span.caret").remove(),d.parent().find("input").remove(),d.unwrap(),a("ul#select-options-"+f).remove()),"destroy"===b)return void d.data("select-id",null).removeClass("initialized");var g=Materialize.guid();d.data("select-id",g);var h=a('<div class="select-wrapper"></div>');h.addClass(d.attr("class"));var i=a('<ul id="select-options-'+g+'" class="dropdown-content select-dropdown '+(e?"multiple-select-dropdown":"")+'"></ul>'),j=d.children("option, optgroup"),k=[],l=!1,m=d.find("option:selected").html()||d.find("option:first").html()||"",n=function n(b,c,d){var e=c.is(":disabled")?"disabled ":"",f="optgroup-option"===d?"optgroup-option ":"",g=c.data("icon"),h=c.attr("class");if(g){var j="";return h&&(j=' class="'+h+'"'),"multiple"===d?i.append(a('<li class="'+e+'"><img src="'+g+'"'+j+'><span><input type="checkbox"'+e+"/><label></label>"+c.html()+"</span></li>")):i.append(a('<li class="'+e+f+'"><img src="'+g+'"'+j+"><span>"+c.html()+"</span></li>")),!0;}"multiple"===d?i.append(a('<li class="'+e+'"><span><input type="checkbox"'+e+"/><label></label>"+c.html()+"</span></li>")):i.append(a('<li class="'+e+f+'"><span>'+c.html()+"</span></li>"));};j.length&&j.each(function(){if(a(this).is("option"))e?n(d,a(this),"multiple"):n(d,a(this));else if(a(this).is("optgroup")){var b=a(this).children("option");i.append(a('<li class="optgroup"><span>'+a(this).attr("label")+"</span></li>")),b.each(function(){n(d,a(this),"optgroup-option");});}}),i.find("li:not(.optgroup)").each(function(f){a(this).click(function(g){if(!a(this).hasClass("disabled")&&!a(this).hasClass("optgroup")){var h=!0;e?(a('input[type="checkbox"]',this).prop("checked",function(a,b){return!b;}),h=c(k,a(this).index(),d),q.trigger("focus")):(i.find("li").removeClass("active"),a(this).toggleClass("active"),q.val(a(this).text())),r(i,a(this)),d.find("option").eq(f).prop("selected",h),d.trigger("change"),"undefined"!=typeof b&&b();}g.stopPropagation();});}),d.wrap(h);var o=a('<span class="caret">&#9660;</span>');d.is(":disabled")&&o.addClass("disabled");var p=m.replace(/"/g,"&quot;"),q=a('<input type="text" class="select-dropdown" readonly="true" '+(d.is(":disabled")?"disabled":"")+' data-activates="select-options-'+g+'" value="'+p+'"/>');d.before(q),q.before(o),q.after(i),d.is(":disabled")||q.dropdown({hover:!1,closeOnClick:!1}),d.attr("tabindex")&&a(q[0]).attr("tabindex",d.attr("tabindex")),d.addClass("initialized"),q.on({focus:function focus(){if(a("ul.select-dropdown").not(i[0]).is(":visible")&&a("input.select-dropdown").trigger("close"),!i.is(":visible")){a(this).trigger("open",["focus"]);var b=a(this).val(),c=i.find("li").filter(function(){return a(this).text().toLowerCase()===b.toLowerCase();})[0];r(i,c);}},click:function click(a){a.stopPropagation();}}),q.on("blur",function(){e||a(this).trigger("close"),i.find("li.selected").removeClass("selected");}),i.hover(function(){l=!0;},function(){l=!1;}),a(window).on({click:function click(){e&&(l||q.trigger("close"));}}),e&&d.find("option:selected:not(:disabled)").each(function(){var b=a(this).index();c(k,b,d),i.find("li").eq(b).find(":checkbox").prop("checked",!0);});var r=function r(b,c){if(c){b.find("li.selected").removeClass("selected");var d=a(c);d.addClass("selected"),i.scrollTo(d);}},s=[],t=function t(b){if(9==b.which)return void q.trigger("close");if(40==b.which&&!i.is(":visible"))return void q.trigger("open");if(13!=b.which||i.is(":visible")){b.preventDefault();var c=String.fromCharCode(b.which).toLowerCase(),d=[9,13,27,38,40];if(c&&-1===d.indexOf(b.which)){s.push(c);var f=s.join(""),g=i.find("li").filter(function(){return 0===a(this).text().toLowerCase().indexOf(f);})[0];g&&r(i,g);}if(13==b.which){var h=i.find("li.selected:not(.disabled)")[0];h&&(a(h).trigger("click"),e||q.trigger("close"));}40==b.which&&(g=i.find("li.selected").length?i.find("li.selected").next("li:not(.disabled)")[0]:i.find("li:not(.disabled)")[0],r(i,g)),27==b.which&&q.trigger("close"),38==b.which&&(g=i.find("li.selected").prev("li:not(.disabled)")[0],g&&r(i,g)),setTimeout(function(){s=[];},1e3);}};q.on("keydown",t);}});};}(jQuery),function(a){var b={init:function init(b){var c={indicators:!0,height:400,transition:500,interval:6e3};return b=a.extend(c,b),this.each(function(){function c(a,b){a.hasClass("center-align")?a.velocity({opacity:0,translateY:-100},{duration:b,queue:!1}):a.hasClass("right-align")?a.velocity({opacity:0,translateX:100},{duration:b,queue:!1}):a.hasClass("left-align")&&a.velocity({opacity:0,translateX:-100},{duration:b,queue:!1});}function d(a){a>=j.length?a=0:0>a&&(a=j.length-1),k=i.find(".active").index(),k!=a&&(e=j.eq(k),$caption=e.find(".caption"),e.removeClass("active"),e.velocity({opacity:0},{duration:b.transition,queue:!1,easing:"easeOutQuad",complete:function complete(){j.not(".active").velocity({opacity:0,translateX:0,translateY:0},{duration:0,queue:!1});}}),c($caption,b.transition),b.indicators&&f.eq(k).removeClass("active"),j.eq(a).velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),j.eq(a).find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,delay:b.transition,queue:!1,easing:"easeOutQuad"}),j.eq(a).addClass("active"),b.indicators&&f.eq(a).addClass("active"));}var e,f,g,h=a(this),i=h.find("ul.slides").first(),j=i.find("> li"),k=i.find(".active").index();-1!=k&&(e=j.eq(k)),h.hasClass("fullscreen")||(b.indicators?h.height(b.height+40):h.height(b.height),i.height(b.height)),j.find(".caption").each(function(){c(a(this),0);}),j.find("img").each(function(){var b="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";a(this).attr("src")!==b&&(a(this).css("background-image","url("+a(this).attr("src")+")"),a(this).attr("src",b));}),b.indicators&&(f=a('<ul class="indicators"></ul>'),j.each(function(c){var e=a('<li class="indicator-item"></li>');e.click(function(){var c=i.parent(),e=c.find(a(this)).index();d(e),clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k);},b.transition+b.interval);}),f.append(e);}),h.append(f),f=h.find("ul.indicators").find("li.indicator-item")),e?e.show():(j.first().addClass("active").velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),k=0,e=j.eq(k),b.indicators&&f.eq(k).addClass("active")),e.find("img").each(function(){e.find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,queue:!1,easing:"easeOutQuad"});}),g=setInterval(function(){k=i.find(".active").index(),d(k+1);},b.transition+b.interval);var l=!1,m=!1,n=!1;h.hammer({prevent_default:!1}).bind("pan",function(a){if("touch"===a.gesture.pointerType){clearInterval(g);var b=a.gesture.direction,c=a.gesture.deltaX,d=a.gesture.velocityX;$curr_slide=i.find(".active"),$curr_slide.velocity({translateX:c},{duration:50,queue:!1,easing:"easeOutQuad"}),4===b&&(c>h.innerWidth()/2||-.65>d)?n=!0:2===b&&(c<-1*h.innerWidth()/2||d>.65)&&(m=!0);var e;m&&(e=$curr_slide.next(),0===e.length&&(e=j.first()),e.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"})),n&&(e=$curr_slide.prev(),0===e.length&&(e=j.last()),e.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"}));}}).bind("panend",function(a){"touch"===a.gesture.pointerType&&($curr_slide=i.find(".active"),l=!1,curr_index=i.find(".active").index(),!n&&!m||j.length<=1?$curr_slide.velocity({translateX:0},{duration:300,queue:!1,easing:"easeOutQuad"}):m?(d(curr_index+1),$curr_slide.velocity({translateX:-1*h.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function complete(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1});}})):n&&(d(curr_index-1),$curr_slide.velocity({translateX:h.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function complete(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1});}})),m=!1,n=!1,clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k);},b.transition+b.interval));}),h.on("sliderPause",function(){clearInterval(g);}),h.on("sliderStart",function(){clearInterval(g),g=setInterval(function(){k=i.find(".active").index(),j.length==k+1?k=0:k+=1,d(k);},b.transition+b.interval);}),h.on("sliderNext",function(){k=i.find(".active").index(),d(k+1);}),h.on("sliderPrev",function(){k=i.find(".active").index(),d(k-1);});});},pause:function pause(){a(this).trigger("sliderPause");},start:function start(){a(this).trigger("sliderStart");},next:function next(){a(this).trigger("sliderNext");},prev:function prev(){a(this).trigger("sliderPrev");}};a.fn.slider=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=(typeof c==="undefined"?"undefined":_typeof(c))&&c?void a.error("Method "+c+" does not exist on jQuery.tooltip"):b.init.apply(this,arguments);};}(jQuery),function(a){a(document).ready(function(){a(document).on("click.card",".card",function(b){a(this).find("> .card-reveal").length&&(a(b.target).is(a(".card-reveal .card-title"))||a(b.target).is(a(".card-reveal .card-title i"))?a(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function complete(){a(this).css({display:"none"});}}):(a(b.target).is(a(".card .activator"))||a(b.target).is(a(".card .activator i")))&&(a(b.target).closest(".card").css("overflow","hidden"),a(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"})));});});}(jQuery),function(a){var b=!1,c={data:[],placeholder:"",secondaryPlaceholder:""};a(document).ready(function(){a(document).on("click",".chip .close",function(b){var c=a(this).closest(".chips");c.data("initialized")||a(this).closest(".chip").remove();});}),a.fn.material_chip=function(d){var e=this;return this.$el=a(this),this.$document=a(document),this.SELS={CHIPS:".chips",CHIP:".chip",INPUT:"input",DELETE:".material-icons",SELECTED_CHIP:".selected"},"data"===d?this.$el.data("chips"):"options"===d?this.$el.data("options"):(this.$el.data("options",a.extend({},c,d)),this.init=function(){var b=0;e.$el.each(function(){var c=a(this);if(!c.data("initialized")){var d=c.data("options");(!d.data||!d.data instanceof Array)&&(d.data=[]),c.data("chips",d.data),c.data("index",b),c.data("initialized",!0),c.hasClass(e.SELS.CHIPS)||c.addClass("chips"),e.chips(c),b++;}});},this.handleEvents=function(){var b=e.SELS;e.$document.on("click",b.CHIPS,function(c){a(c.target).find(b.INPUT).focus();}),e.$document.on("click",b.CHIP,function(c){a(b.CHIP).removeClass("selected"),a(this).toggleClass("selected");}),e.$document.on("keydown",function(c){if(!a(c.target).is("input, textarea")){var d,f=e.$document.find(b.CHIP+b.SELECTED_CHIP),g=f.closest(b.CHIPS),h=f.siblings(b.CHIP).length;if(f.length)if(8===c.which||46===c.which){c.preventDefault();var i=g.data("index");d=f.index(),e.deleteChip(i,d,g);var j=null;h>d+1?j=d:(d===h||d+1===h)&&(j=h-1),0>j&&(j=null),null!==j&&e.selectChip(i,j,g),h||g.find("input").focus();}else if(37===c.which){if(d=f.index()-1,0>d)return;a(b.CHIP).removeClass("selected"),e.selectChip(g.data("index"),d,g);}else if(39===c.which){if(d=f.index()+1,a(b.CHIP).removeClass("selected"),d>h)return void g.find("input").focus();e.selectChip(g.data("index"),d,g);}}}),e.$document.on("focusin",b.CHIPS+" "+b.INPUT,function(c){a(c.target).closest(b.CHIPS).addClass("focus"),a(b.CHIP).removeClass("selected");}),e.$document.on("focusout",b.CHIPS+" "+b.INPUT,function(c){a(c.target).closest(b.CHIPS).removeClass("focus");}),e.$document.on("keydown",b.CHIPS+" "+b.INPUT,function(c){var d=a(c.target),f=d.closest(b.CHIPS),g=f.data("index"),h=f.children(b.CHIP).length;return 13===c.which?(c.preventDefault(),e.addChip(g,{tag:d.val()},f),void d.val("")):8!==c.keyCode&&37!==c.keyCode||""!==d.val()||!h?void 0:(e.selectChip(g,h-1,f),void d.blur());}),e.$document.on("click",b.CHIPS+" "+b.DELETE,function(c){var d=a(c.target),f=d.closest(b.CHIPS),g=d.closest(b.CHIP);c.stopPropagation(),e.deleteChip(f.data("index"),g.index(),f),f.find("input").focus();});},this.chips=function(a){var b="";a.data("options");a.data("chips").forEach(function(a){b+=e.renderChip(a);}),b+='<input class="input" placeholder="">',a.html(b),e.setPlaceholder(a);},this.renderChip=function(a){if(a.tag){var b='<div class="chip">'+a.tag;return a.image&&(b+=' <img src="'+a.image+'"> '),b+='<i class="material-icons close">close</i>',b+="</div>";}},this.setPlaceholder=function(a){var b=a.data("options");a.data("chips").length&&b.placeholder?a.find("input").prop("placeholder",b.placeholder):!a.data("chips").length&&b.secondaryPlaceholder&&a.find("input").prop("placeholder",b.secondaryPlaceholder);},this.isValid=function(a,b){for(var c=a.data("chips"),d=!1,e=0;e<c.length;e++){if(c[e].tag===b.tag)return void(d=!0);}return""!==b.tag&&!d;},this.addChip=function(b,c,d){if(e.isValid(d,c)){var f=(d.data("options"),e.renderChip(c));d.data("chips").push(c),a(f).insertBefore(d.find("input")),d.trigger("chip.add",c),e.setPlaceholder(d);}},this.deleteChip=function(a,b,c){var d=c.data("chips")[b];c.find(".chip").eq(b).remove(),c.data("chips").splice(b,1),c.trigger("chip.delete",d),e.setPlaceholder(c);},this.selectChip=function(a,b,c){var d=c.find(".chip").eq(b);d&&!1===d.hasClass("selected")&&(d.addClass("selected"),c.trigger("chip.select",c.data("chips")[b]));},this.getChipsElement=function(a,b){return b.eq(a);},this.init(),void(b||(this.handleEvents(),b=!0)));};}(jQuery),function(a){a.fn.pushpin=function(b){var c={top:0,bottom:1/0,offset:0};return"remove"===b?(this.each(function(){(id=a(this).data("pushpin-id"))&&(a(window).off("scroll."+id),a(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"));}),!1):(b=a.extend(c,b),$index=0,this.each(function(){function c(a){a.removeClass("pin-top"),a.removeClass("pinned"),a.removeClass("pin-bottom");}function d(d,e){d.each(function(){b.top<=e&&b.bottom>=e&&!a(this).hasClass("pinned")&&(c(a(this)),a(this).css("top",b.offset),a(this).addClass("pinned")),e<b.top&&!a(this).hasClass("pin-top")&&(c(a(this)),a(this).css("top",0),a(this).addClass("pin-top")),e>b.bottom&&!a(this).hasClass("pin-bottom")&&(c(a(this)),a(this).addClass("pin-bottom"),a(this).css("top",b.bottom-g));});}var e=Materialize.guid(),f=a(this),g=a(this).offset().top;a(this).data("pushpin-id",e),d(f,a(window).scrollTop()),a(window).on("scroll."+e,function(){var c=a(window).scrollTop()+b.offset;d(f,c);});}));};}(jQuery),function(a){a(document).ready(function(){a.fn.reverse=[].reverse,a(document).on("mouseenter.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(c){var d=a(this);b(d);}),a(document).on("mouseleave.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(b){var d=a(this);c(d);}),a(document).on("click.fixedActionBtn",".fixed-action-btn.click-to-toggle > a",function(d){var e=a(this),f=e.parent();f.hasClass("active")?c(f):b(f);});}),a.fn.extend({openFAB:function openFAB(){b(a(this));},closeFAB:function closeFAB(){c(a(this));}});var b=function b(_b2){if($this=_b2,$this.hasClass("active")===!1){var c,d,e=$this.hasClass("horizontal");e===!0?d=40:c=40,$this.addClass("active"),$this.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:c+"px",translateX:d+"px"},{duration:0});var f=0;$this.find("ul .btn-floating").reverse().each(function(){a(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0",translateX:"0"},{duration:80,delay:f}),f+=40;});}},c=function c(a){$this=a;var b,c,d=$this.hasClass("horizontal");d===!0?c=40:b=40,$this.removeClass("active");$this.find("ul .btn-floating").velocity("stop",!0),$this.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:b+"px",translateX:c+"px"},{duration:80});};}(jQuery),function(a){Materialize.fadeInImage=function(b){var c;if("string"==typeof b)c=a(b);else{if("object"!=(typeof b==="undefined"?"undefined":_typeof(b)))return;c=b;}c.css({opacity:0}),a(c).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),a(c).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function step(b,c){c.start=100;var d=b/100,e=150-(100-b)/1.75;100>e&&(e=100),b>=0&&a(this).css({"-webkit-filter":"grayscale("+d+")brightness("+e+"%)",filter:"grayscale("+d+")brightness("+e+"%)"});}});},Materialize.showStaggeredList=function(b){var c;if("string"==typeof b)c=a(b);else{if("object"!=(typeof b==="undefined"?"undefined":_typeof(b)))return;c=b;}var d=0;c.find("li").velocity({translateX:"-100px"},{duration:0}),c.find("li").each(function(){a(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:d,easing:[60,10]}),d+=120;});},a(document).ready(function(){var b=!1,c=!1;a(".dismissable").each(function(){a(this).hammer({prevent_default:!1}).bind("pan",function(d){if("touch"===d.gesture.pointerType){var e=a(this),f=d.gesture.direction,g=d.gesture.deltaX,h=d.gesture.velocityX;e.velocity({translateX:g},{duration:50,queue:!1,easing:"easeOutQuad"}),4===f&&(g>e.innerWidth()/2||-.75>h)&&(b=!0),2===f&&(g<-1*e.innerWidth()/2||h>.75)&&(c=!0);}}).bind("panend",function(d){if(Math.abs(d.gesture.deltaX)<a(this).innerWidth()/2&&(c=!1,b=!1),"touch"===d.gesture.pointerType){var e=a(this);if(b||c){var f;f=b?e.innerWidth():-1*e.innerWidth(),e.velocity({translateX:f},{duration:100,queue:!1,easing:"easeOutQuad",complete:function complete(){e.css("border","none"),e.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function complete(){e.remove();}});}});}else e.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});b=!1,c=!1;}});});});}(jQuery),function(a){Materialize.scrollFire=function(a){var b=!1;window.addEventListener("scroll",function(){b=!0;}),setInterval(function(){if(b){b=!1;for(var c=window.pageYOffset+window.innerHeight,d=0;d<a.length;d++){var e=a[d],f=e.selector,g=e.offset,h=e.callback,i=document.querySelector(f);if(null!==i){var j=i.getBoundingClientRect().top+window.pageYOffset;if(c>j+g&&e.done!==!0){if("function"==typeof h)h.call(this,i);else if("string"==typeof h){var k=new Function(h);k(i);}e.done=!0;}}}}},100);};}(jQuery),function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__)):"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))?module.exports=a(require("jquery")):this.Picker=a(jQuery);}(function(a){function b(f,g,i,l){function m(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",y.component.nodes(t.open),v.box),v.wrap),v.frame),v.holder);}function n(){w.data(g,y).addClass(v.input).attr("tabindex",-1).val(w.data("value")?y.get("select",u.format):f.value),u.editable||w.on("focus."+t.id+" click."+t.id,function(a){a.preventDefault(),y.$root.eq(0).focus();}).on("keydown."+t.id,q),e(f,{haspopup:!0,expanded:!1,readonly:!1,owns:f.id+"_root"});}function o(){y.$root.on({keydown:q,focusin:function focusin(a){y.$root.removeClass(v.focused),a.stopPropagation();},"mousedown click":function mousedownClick(b){var c=b.target;c!=y.$root.children()[0]&&(b.stopPropagation(),"mousedown"!=b.type||a(c).is("input, select, textarea, button, option")||(b.preventDefault(),y.$root.eq(0).focus()));}}).on({focus:function focus(){w.addClass(v.target);},blur:function blur(){w.removeClass(v.target);}}).on("focus.toOpen",r).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var b=a(this),c=b.data(),d=b.hasClass(v.navDisabled)||b.hasClass(v.disabled),e=h();e=e&&(e.type||e.href),(d||e&&!a.contains(y.$root[0],e))&&y.$root.eq(0).focus(),!d&&c.nav?y.set("highlight",y.component.item.highlight,{nav:c.nav}):!d&&"pick"in c?y.set("select",c.pick):c.clear?y.clear().close(!0):c.close&&y.close(!0);}),e(y.$root[0],"hidden",!0);}function p(){var b;u.hiddenName===!0?(b=f.name,f.name=""):(b=["string"==typeof u.hiddenPrefix?u.hiddenPrefix:"","string"==typeof u.hiddenSuffix?u.hiddenSuffix:"_submit"],b=b[0]+f.name+b[1]),y._hidden=a('<input type=hidden name="'+b+'"'+(w.data("value")||f.value?' value="'+y.get("select",u.formatSubmit)+'"':"")+">")[0],w.on("change."+t.id,function(){y._hidden.value=f.value?y.get("select",u.formatSubmit):"";}),u.container?a(u.container).append(y._hidden):w.after(y._hidden);}function q(a){var b=a.keyCode,c=/^(8|46)$/.test(b);return 27==b?(y.close(),!1):void((32==b||c||!t.open&&y.component.key[b])&&(a.preventDefault(),a.stopPropagation(),c?y.clear().close():y.open()));}function r(a){a.stopPropagation(),"focus"==a.type&&y.$root.addClass(v.focused),y.open();}if(!f)return b;var s=!1,t={id:f.id||"P"+Math.abs(~~(Math.random()*new Date()))},u=i?a.extend(!0,{},i.defaults,l):l||{},v=a.extend({},b.klasses(),u.klass),w=a(f),x=function x(){return this.start();},y=x.prototype={constructor:x,$node:w,start:function start(){return t&&t.start?y:(t.methods={},t.start=!0,t.open=!1,t.type=f.type,f.autofocus=f==h(),f.readOnly=!u.editable,f.id=f.id||t.id,"text"!=f.type&&(f.type="text"),y.component=new i(y,u),y.$root=a(b._.node("div",m(),v.picker,'id="'+f.id+'_root" tabindex="0"')),o(),u.formatSubmit&&p(),n(),u.container?a(u.container).append(y.$root):w.after(y.$root),y.on({start:y.component.onStart,render:y.component.onRender,stop:y.component.onStop,open:y.component.onOpen,close:y.component.onClose,set:y.component.onSet}).on({start:u.onStart,render:u.onRender,stop:u.onStop,open:u.onOpen,close:u.onClose,set:u.onSet}),s=c(y.$root.children()[0]),f.autofocus&&y.open(),y.trigger("start").trigger("render"));},render:function render(a){return a?y.$root.html(m()):y.$root.find("."+v.box).html(y.component.nodes(t.open)),y.trigger("render");},stop:function stop(){return t.start?(y.close(),y._hidden&&y._hidden.parentNode.removeChild(y._hidden),y.$root.remove(),w.removeClass(v.input).removeData(g),setTimeout(function(){w.off("."+t.id);},0),f.type=t.type,f.readOnly=!1,y.trigger("stop"),t.methods={},t.start=!1,y):y;},open:function open(c){return t.open?y:(w.addClass(v.active),e(f,"expanded",!0),setTimeout(function(){y.$root.addClass(v.opened),e(y.$root[0],"hidden",!1);},0),c!==!1&&(t.open=!0,s&&k.css("overflow","hidden").css("padding-right","+="+d()),y.$root.eq(0).focus(),j.on("click."+t.id+" focusin."+t.id,function(a){var b=a.target;b!=f&&b!=document&&3!=a.which&&y.close(b===y.$root.children()[0]);}).on("keydown."+t.id,function(c){var d=c.keyCode,e=y.component.key[d],f=c.target;27==d?y.close(!0):f!=y.$root[0]||!e&&13!=d?a.contains(y.$root[0],f)&&13==d&&(c.preventDefault(),f.click()):(c.preventDefault(),e?b._.trigger(y.component.key.go,y,[b._.trigger(e)]):y.$root.find("."+v.highlighted).hasClass(v.disabled)||y.set("select",y.component.item.highlight).close());})),y.trigger("open"));},close:function close(a){return a&&(y.$root.off("focus.toOpen").eq(0).focus(),setTimeout(function(){y.$root.on("focus.toOpen",r);},0)),w.removeClass(v.active),e(f,"expanded",!1),setTimeout(function(){y.$root.removeClass(v.opened+" "+v.focused),e(y.$root[0],"hidden",!0);},0),t.open?(t.open=!1,s&&k.css("overflow","").css("padding-right","-="+d()),j.off("."+t.id),y.trigger("close")):y;},clear:function clear(a){return y.set("clear",null,a);},set:function set(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(d=g&&a.isPlainObject(c)?c:d||{},b){g||(h[b]=c);for(e in h){f=h[e],e in y.component.item&&(void 0===f&&(f=null),y.component.set(e,f,d)),("select"==e||"clear"==e)&&w.val("clear"==e?"":y.get(e,u.format)).trigger("change");}y.render();}return d.muted?y:y.trigger("set",h);},get:function get(a,c){if(a=a||"value",null!=t[a])return t[a];if("valueSubmit"==a){if(y._hidden)return y._hidden.value;a="value";}if("value"==a)return f.value;if(a in y.component.item){if("string"==typeof c){var d=y.component.get(a);return d?b._.trigger(y.component.formats.toString,y.component,[c,d]):"";}return y.component.get(a);}},on:function on(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(b){g||(h[b]=c);for(e in h){f=h[e],d&&(e="_"+e),t.methods[e]=t.methods[e]||[],t.methods[e].push(f);}}return y;},off:function off(){var a,b,c=arguments;for(a=0,namesCount=c.length;a<namesCount;a+=1){b=c[a],b in t.methods&&delete t.methods[b];}return y;},trigger:function trigger(a,c){var d=function d(a){var d=t.methods[a];d&&d.map(function(a){b._.trigger(a,y,[c]);});};return d("_"+a),d(a),y;}};return new x();}function c(a){var b,c="position";return a.currentStyle?b=a.currentStyle[c]:window.getComputedStyle&&(b=getComputedStyle(a)[c]),"fixed"==b;}function d(){if(k.height()<=i.height())return 0;var b=a('<div style="visibility:hidden;width:100px" />').appendTo("body"),c=b[0].offsetWidth;b.css("overflow","scroll");var d=a('<div style="width:100%" />').appendTo(b),e=d[0].offsetWidth;return b.remove(),c-e;}function e(b,c,d){if(a.isPlainObject(c))for(var e in c){f(b,e,c[e]);}else f(b,c,d);}function f(a,b,c){a.setAttribute(("role"==b?"":"aria-")+b,c);}function g(b,c){a.isPlainObject(b)||(b={attribute:c}),c="";for(var d in b){var e=("role"==d?"":"aria-")+d,f=b[d];c+=null==f?"":e+'="'+b[d]+'"';}return c;}function h(){try{return document.activeElement;}catch(a){}}var i=a(window),j=a(document),k=a(document.documentElement);return b.klasses=function(a){return a=a||"picker",{picker:a,opened:a+"--opened",focused:a+"--focused",input:a+"__input",active:a+"__input--active",target:a+"__input--target",holder:a+"__holder",frame:a+"__frame",wrap:a+"__wrap",box:a+"__box"};},b._={group:function group(a){for(var c,d="",e=b._.trigger(a.min,a);e<=b._.trigger(a.max,a,[e]);e+=a.i){c=b._.trigger(a.item,a,[e]),d+=b._.node(a.node,c[0],c[1],c[2]);}return d;},node:function node(b,c,d,e){return c?(c=a.isArray(c)?c.join(""):c,d=d?' class="'+d+'"':"",e=e?" "+e:"","<"+b+d+e+">"+c+"</"+b+">"):"";},lead:function lead(a){return(10>a?"0":"")+a;},trigger:function trigger(a,b,c){return"function"==typeof a?a.apply(b,c||[]):a;},digits:function digits(a){return /\d/.test(a[1])?2:1;},isDate:function isDate(a){return{}.toString.call(a).indexOf("Date")>-1&&this.isInteger(a.getDate());},isInteger:function isInteger(a){return{}.toString.call(a).indexOf("Number")>-1&&a%1===0;},ariaAttr:g},b.extend=function(c,d){a.fn[c]=function(e,f){var g=this.data(c);return"picker"==e?g:g&&"string"==typeof e?b._.trigger(g[e],g,[f]):this.each(function(){var f=a(this);f.data(c)||new b(this,c,d,e);});},a.fn[c].defaults=d.defaults;},b;}),function(a){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__,__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==(typeof exports==="undefined"?"undefined":_typeof(exports))?module.exports=a(require("./picker.js"),require("jquery")):a(Picker,jQuery);}(function(a,b){function c(a,b){var c=this,d=a.$node[0],e=d.value,f=a.$node.data("value"),g=f||e,h=f?b.formatSubmit:b.format,i=function i(){return d.currentStyle?"rtl"==d.currentStyle.direction:"rtl"==getComputedStyle(a.$root[0]).direction;};c.settings=b,c.$node=a.$node,c.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},c.item={},c.item.clear=null,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return a[0]===!0?a.shift():-1;}(c.item.disable),c.set("min",b.min).set("max",b.max).set("now"),g?c.set("select",g,{format:h}):c.set("select",null).set("highlight",c.item.now),c.key={40:7,38:-7,39:function _(){return i()?-1:1;},37:function _(){return i()?1:-1;},go:function go(a){var b=c.item.highlight,d=new Date(b.year,b.month,b.date+a);c.set("highlight",d,{interval:a}),this.render();}},a.on("render",function(){a.$root.find("."+b.klass.selectMonth).on("change",function(){var c=this.value;c&&(a.set("highlight",[a.get("view").year,c,a.get("highlight").date]),a.$root.find("."+b.klass.selectMonth).trigger("focus"));}),a.$root.find("."+b.klass.selectYear).on("change",function(){var c=this.value;c&&(a.set("highlight",[c,a.get("view").month,a.get("highlight").date]),a.$root.find("."+b.klass.selectYear).trigger("focus"));});},1).on("open",function(){var d="";c.disabled(c.get("now"))&&(d=":not(."+b.klass.buttonToday+")"),a.$root.find("button"+d+", select").attr("disabled",!1);},1).on("close",function(){a.$root.find("button, select").attr("disabled",!0);},1);}var d=7,e=6,f=a._;c.prototype.set=function(a,b,c){var d=this,e=d.item;return null===b?("clear"==a&&(a="select"),e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c);}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):a.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&d.disabled(e.select)&&d.set("select",e.select,c),e.highlight&&d.disabled(e.highlight)&&d.set("highlight",e.highlight,c)),d);},c.prototype.get=function(a){return this.item[a];},c.prototype.create=function(a,c,d){var e,g=this;return c=void 0===c?a:c,c==-(1/0)||c==1/0?e=c:b.isPlainObject(c)&&f.isInteger(c.pick)?c=c.obj:b.isArray(c)?(c=new Date(c[0],c[1],c[2]),c=f.isDate(c)?c:g.create().obj):c=f.isInteger(c)||f.isDate(c)?g.normalize(new Date(c),d):g.now(a,c,d),{year:e||c.getFullYear(),month:e||c.getMonth(),date:e||c.getDate(),day:e||c.getDay(),obj:e||c,pick:e||c.getTime()};},c.prototype.createRange=function(a,c){var d=this,e=function e(a){return a===!0||b.isArray(a)||f.isDate(a)?d.create(a):a;};return f.isInteger(a)||(a=e(a)),f.isInteger(c)||(c=e(c)),f.isInteger(a)&&b.isPlainObject(c)?a=[c.year,c.month,c.date+a]:f.isInteger(c)&&b.isPlainObject(a)&&(c=[a.year,a.month,a.date+c]),{from:e(a),to:e(c)};},c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick;},c.prototype.overlapRanges=function(a,b){var c=this;return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to);},c.prototype.now=function(a,b,c){return b=new Date(),c&&c.rel&&b.setDate(b.getDate()+c.rel),this.normalize(b,c);},c.prototype.navigate=function(a,c,d){var e,f,g,h,i=b.isArray(c),j=b.isPlainObject(c),k=this.item.view;if(i||j){for(j?(f=c.year,g=c.month,h=c.date):(f=+c[0],g=+c[1],h=+c[2]),d&&d.nav&&k&&k.month!==g&&(f=k.year,g=k.month),e=new Date(f,g+(d&&d.nav?d.nav:0),1),f=e.getFullYear(),g=e.getMonth();new Date(f,g,h).getMonth()!==g;){h-=1;}c=[f,g,h];}return c;},c.prototype.normalize=function(a){return a.setHours(0,0,0,0),a;},c.prototype.measure=function(a,b){var c=this;return b?"string"==typeof b?b=c.parse(a,b):f.isInteger(b)&&(b=c.now(a,b,{rel:b})):b="min"==a?-(1/0):1/0,b;},c.prototype.viewset=function(a,b){return this.create([b.year,b.month,1]);},c.prototype.validate=function(a,c,d){var e,g,h,i,j=this,k=c,l=d&&d.interval?d.interval:1,m=-1===j.item.enable,n=j.item.min,o=j.item.max,p=m&&j.item.disable.filter(function(a){if(b.isArray(a)){var d=j.create(a).pick;d<c.pick?e=!0:d>c.pick&&(g=!0);}return f.isInteger(a);}).length;if((!d||!d.nav)&&(!m&&j.disabled(c)||m&&j.disabled(c)&&(p||e||g)||!m&&(c.pick<=n.pick||c.pick>=o.pick)))for(m&&!p&&(!g&&l>0||!e&&0>l)&&(l*=-1);j.disabled(c)&&(Math.abs(l)>1&&(c.month<k.month||c.month>k.month)&&(c=k,l=l>0?1:-1),c.pick<=n.pick?(h=!0,l=1,c=j.create([n.year,n.month,n.date+(c.pick===n.pick?0:-1)])):c.pick>=o.pick&&(i=!0,l=-1,c=j.create([o.year,o.month,o.date+(c.pick===o.pick?0:1)])),!h||!i);){c=j.create([c.year,c.month,c.date+l]);}return c;},c.prototype.disabled=function(a){var c=this,d=c.item.disable.filter(function(d){return f.isInteger(d)?a.day===(c.settings.firstDay?d:d-1)%7:b.isArray(d)||f.isDate(d)?a.pick===c.create(d).pick:b.isPlainObject(d)?c.withinRange(d,a):void 0;});return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[3]||b.isPlainObject(a)&&a.inverted;}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick;},c.prototype.parse=function(a,b,c){var d=this,e={};return b&&"string"==typeof b?(c&&c.format||(c=c||{},c.format=d.settings.format),d.formats.toArray(c.format).map(function(a){var c=d.formats[a],g=c?f.trigger(c,d,[b,e]):a.replace(/^!/,"").length;c&&(e[a]=b.substr(0,g)),b=b.substr(g);}),[e.yyyy||e.yy,+(e.mm||e.m)-1,e.dd||e.d]):b;},c.prototype.formats=function(){function a(a,b,c){var d=a.match(/\w+/)[0];return c.mm||c.m||(c.m=b.indexOf(d)+1),d.length;}function b(a){return a.match(/\w+/)[0].length;}return{d:function d(a,b){return a?f.digits(a):b.date;},dd:function dd(a,b){return a?2:f.lead(b.date);},ddd:function ddd(a,c){return a?b(a):this.settings.weekdaysShort[c.day];},dddd:function dddd(a,c){return a?b(a):this.settings.weekdaysFull[c.day];},m:function m(a,b){return a?f.digits(a):b.month+1;},mm:function mm(a,b){return a?2:f.lead(b.month+1);},mmm:function mmm(b,c){var d=this.settings.monthsShort;return b?a(b,d,c):d[c.month];},mmmm:function mmmm(b,c){var d=this.settings.monthsFull;return b?a(b,d,c):d[c.month];},yy:function yy(a,b){return a?2:(""+b.year).slice(2);},yyyy:function yyyy(a,b){return a?4:b.year;},toArray:function toArray(a){return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);},toString:function toString(a,b){var c=this;return c.formats.toArray(a).map(function(a){return f.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"");}).join("");}};}(),c.prototype.isDateExact=function(a,c){var d=this;return f.isInteger(a)&&f.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(f.isDate(a)||b.isArray(a))&&(f.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:b.isPlainObject(a)&&b.isPlainObject(c)?d.isDateExact(a.from,c.from)&&d.isDateExact(a.to,c.to):!1;},c.prototype.isDateOverlap=function(a,c){var d=this,e=d.settings.firstDay?1:0;return f.isInteger(a)&&(f.isDate(c)||b.isArray(c))?(a=a%7+e,a===d.create(c).day+1):f.isInteger(c)&&(f.isDate(a)||b.isArray(a))?(c=c%7+e,c===d.create(a).day+1):b.isPlainObject(a)&&b.isPlainObject(c)?d.overlapRanges(a,c):!1;},c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1);},c.prototype.deactivate=function(a,c){var d=this,e=d.item.disable.slice(0);return"flip"==c?d.flipEnable():c===!1?(d.flipEnable(1),e=[]):c===!0?(d.flipEnable(-1),e=[]):c.map(function(a){for(var c,g=0;g<e.length;g+=1){if(d.isDateExact(a,e[g])){c=!0;break;}}c||(f.isInteger(a)||f.isDate(a)||b.isArray(a)||b.isPlainObject(a)&&a.from&&a.to)&&e.push(a);}),e;},c.prototype.activate=function(a,c){var d=this,e=d.item.disable,g=e.length;return"flip"==c?d.flipEnable():c===!0?(d.flipEnable(1),e=[]):c===!1?(d.flipEnable(-1),e=[]):c.map(function(a){var c,h,i,j;for(i=0;g>i;i+=1){if(h=e[i],d.isDateExact(h,a)){c=e[i]=null,j=!0;break;}if(d.isDateOverlap(h,a)){b.isPlainObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[3]||c.push("inverted")):f.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break;}}if(c)for(i=0;g>i;i+=1){if(d.isDateExact(e[i],a)){e[i]=null;break;}}if(j)for(i=0;g>i;i+=1){if(d.isDateOverlap(e[i],a)){e[i]=null;break;}}c&&e.push(c);}),e.filter(function(a){return null!=a;});},c.prototype.nodes=function(a){var b=this,c=b.settings,g=b.item,h=g.now,i=g.select,j=g.highlight,k=g.view,l=g.disable,m=g.min,n=g.max,o=function(a,b){return c.firstDay&&(a.push(a.shift()),b.push(b.shift())),f.node("thead",f.node("tr",f.group({min:0,max:d-1,i:1,node:"th",item:function item(d){return[a[d],c.klass.weekdays,'scope=col title="'+b[d]+'"'];}})));}((c.showWeekdaysFull?c.weekdaysFull:c.weekdaysLetter).slice(0),c.weekdaysFull.slice(0)),p=function p(a){return f.node("div"," ",c.klass["nav"+(a?"Next":"Prev")]+(a&&k.year>=n.year&&k.month>=n.month||!a&&k.year<=m.year&&k.month<=m.month?" "+c.klass.navDisabled:""),"data-nav="+(a||-1)+" "+f.ariaAttr({role:"button",controls:b.$node[0].id+"_table"})+' title="'+(a?c.labelMonthNext:c.labelMonthPrev)+'"');},q=function q(d){var e=c.showMonthsShort?c.monthsShort:c.monthsFull;return"short_months"==d&&(e=c.monthsShort),c.selectMonths&&void 0==d?f.node("select",f.group({min:0,max:11,i:1,node:"option",item:function item(a){return[e[a],0,"value="+a+(k.month==a?" selected":"")+(k.year==m.year&&a<m.month||k.year==n.year&&a>n.month?" disabled":"")];}}),c.klass.selectMonth+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelMonthSelect+'"'):"short_months"==d?null!=i?f.node("div",e[i.month]):f.node("div",e[k.month]):f.node("div",e[k.month],c.klass.month);},r=function r(d){var e=k.year,g=c.selectYears===!0?5:~~(c.selectYears/2);if(g){var h=m.year,i=n.year,j=e-g,l=e+g;if(h>j&&(l+=h-j,j=h),l>i){var o=j-h,p=l-i;j-=o>p?p:o,l=i;}if(c.selectYears&&void 0==d)return f.node("select",f.group({min:j,max:l,i:1,node:"option",item:function item(a){return[a,0,"value="+a+(e==a?" selected":"")];}}),c.klass.selectYear+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelYearSelect+'"');}return"raw"==d?f.node("div",e):f.node("div",e,c.klass.year);};return createDayLabel=function createDayLabel(){return null!=i?f.node("div",i.date):f.node("div",h.date);},createWeekdayLabel=function createWeekdayLabel(){var a;a=null!=i?i.day:h.day;var b=c.weekdaysFull[a];return b;},f.node("div",f.node("div",createWeekdayLabel(),"picker__weekday-display")+f.node("div",q("short_months"),c.klass.month_display)+f.node("div",createDayLabel(),c.klass.day_display)+f.node("div",r("raw"),c.klass.year_display),c.klass.date_display)+f.node("div",f.node("div",(c.selectYears?q()+r():q()+r())+p()+p(1),c.klass.header)+f.node("table",o+f.node("tbody",f.group({min:0,max:e-1,i:1,node:"tr",item:function item(a){var e=c.firstDay&&0===b.create([k.year,k.month,1]).day?-7:0;return[f.group({min:d*a-k.day+e+1,max:function max(){return this.min+d-1;},i:1,node:"td",item:function item(a){a=b.create([k.year,k.month,a+(c.firstDay?1:0)]);var d=i&&i.pick==a.pick,e=j&&j.pick==a.pick,g=l&&b.disabled(a)||a.pick<m.pick||a.pick>n.pick,o=f.trigger(b.formats.toString,b,[c.format,a]);return[f.node("div",a.date,function(b){return b.push(k.month==a.month?c.klass.infocus:c.klass.outfocus),h.pick==a.pick&&b.push(c.klass.now),d&&b.push(c.klass.selected),e&&b.push(c.klass.highlighted),g&&b.push(c.klass.disabled),b.join(" ");}([c.klass.day]),"data-pick="+a.pick+" "+f.ariaAttr({role:"gridcell",label:o,selected:d&&b.$node.val()===o?!0:null,activedescendant:e?!0:null,disabled:g?!0:null})),"",f.ariaAttr({role:"presentation"})];}})];}})),c.klass.table,'id="'+b.$node[0].id+'_table" '+f.ariaAttr({role:"grid",controls:b.$node[0].id,readonly:!0})),c.klass.calendar_container)+f.node("div",f.node("button",c.today,"btn-flat picker__today","type=button data-pick="+h.pick+(a&&!b.disabled(h)?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.clear,"btn-flat picker__clear","type=button data-clear=1"+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.close,"btn-flat picker__close","type=button data-close=true "+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id})),c.klass.footer);},c.defaults=function(a){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Close",format:"d mmmm, yyyy",klass:{table:a+"table",header:a+"header",date_display:a+"date-display",day_display:a+"day-display",month_display:a+"month-display",year_display:a+"year-display",calendar_container:a+"calendar-container",navPrev:a+"nav--prev",navNext:a+"nav--next",navDisabled:a+"nav--disabled",month:a+"month",year:a+"year",selectMonth:a+"select--month",selectYear:a+"select--year",weekdays:a+"weekday",day:a+"day",disabled:a+"day--disabled",selected:a+"day--selected",highlighted:a+"day--highlighted",now:a+"day--today",infocus:a+"day--infocus",outfocus:a+"day--outfocus",footer:a+"footer",buttonClear:a+"button--clear",buttonToday:a+"button--today",buttonClose:a+"button--close"}};}(a.klasses().picker+"__"),a.extend("pickadate",c);}),function(a){function b(){var b=+a(this).attr("length"),c=+a(this).val().length,d=b>=c;a(this).parent().find('span[class="character-counter"]').html(c+"/"+b),e(d,a(this));}function c(b){var c=b.parent().find('span[class="character-counter"]');c.length||(c=a("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1),b.parent().append(c));}function d(){a(this).parent().find('span[class="character-counter"]').html("");}function e(a,b){var c=b.hasClass("invalid");a&&c?b.removeClass("invalid"):a||c||(b.removeClass("valid"),b.addClass("invalid"));}a.fn.characterCounter=function(){return this.each(function(){var e=a(this),f=e.parent().find('span[class="character-counter"]');if(!f.length){var g=void 0!==e.attr("length");g&&(e.on("input",b),e.on("focus",b),e.on("blur",d),c(e));}});},a(document).ready(function(){a("input, textarea").characterCounter();});}(jQuery),function(a){var b={init:function init(b){var c={time_constant:200,dist:-100,shift:0,padding:0,full_width:!1,indicators:!1,no_wrap:!1};return b=a.extend(c,b),this.each(function(){function c(){"undefined"!=typeof window.ontouchstart&&(H[0].addEventListener("touchstart",l),H[0].addEventListener("touchmove",m),H[0].addEventListener("touchend",n)),H[0].addEventListener("mousedown",l),H[0].addEventListener("mousemove",m),H[0].addEventListener("mouseup",n),H[0].addEventListener("mouseleave",n),H[0].addEventListener("click",j);}function d(a){return a.targetTouches&&a.targetTouches.length>=1?a.targetTouches[0].clientX:a.clientX;}function e(a){return a.targetTouches&&a.targetTouches.length>=1?a.targetTouches[0].clientY:a.clientY;}function f(a){return a>=t?a%t:0>a?f(t+a%t):a;}function g(a){var c,d,e,g,h,i,j;if(p="number"==typeof a?a:p,q=Math.floor((p+s/2)/s),e=p-q*s,g=0>e?1:-1,h=-g*e*2/s,d=t>>1,b.full_width?j="translateX(0)":(j="translateX("+(H[0].clientWidth-item_width)/2+"px) ",j+="translateY("+(H[0].clientHeight-item_width)/2+"px)"),I){var k=q%t,l=G.find(".indicator-item.active");l.index()!==k&&(l.removeClass("active"),G.find(".indicator-item").eq(k).addClass("active"));}for((!b.no_wrap||q>=0&&t>q)&&(i=o[f(q)],i.style[A]=j+" translateX("+-e/2+"px) translateX("+g*b.shift*h*c+"px) translateZ("+b.dist*h+"px)",i.style.zIndex=0,b.full_width?tweenedOpacity=1:tweenedOpacity=1-.2*h,i.style.opacity=tweenedOpacity,i.style.display="block"),c=1;d>=c;++c){b.full_width?(zTranslation=b.dist,tweenedOpacity=c===d&&0>e?1-h:1):(zTranslation=b.dist*(2*c+h*g),tweenedOpacity=1-.2*(2*c+h*g)),(!b.no_wrap||t>q+c)&&(i=o[f(q+c)],i.style[A]=j+" translateX("+(b.shift+(s*c-e)/2)+"px) translateZ("+zTranslation+"px)",i.style.zIndex=-c,i.style.opacity=tweenedOpacity,i.style.display="block"),b.full_width?(zTranslation=b.dist,tweenedOpacity=c===d&&e>0?1-h:1):(zTranslation=b.dist*(2*c-h*g),tweenedOpacity=1-.2*(2*c-h*g)),(!b.no_wrap||q-c>=0)&&(i=o[f(q-c)],i.style[A]=j+" translateX("+(-b.shift+(-s*c-e)/2)+"px) translateZ("+zTranslation+"px)",i.style.zIndex=-c,i.style.opacity=tweenedOpacity,i.style.display="block");}(!b.no_wrap||q>=0&&t>q)&&(i=o[f(q)],i.style[A]=j+" translateX("+-e/2+"px) translateX("+g*b.shift*h+"px) translateZ("+b.dist*h+"px)",i.style.zIndex=0,b.full_width?tweenedOpacity=1:tweenedOpacity=1-.2*h,i.style.opacity=tweenedOpacity,i.style.display="block");}function h(){var a,b,c,d;a=Date.now(),b=a-C,C=a,c=p-B,B=p,d=1e3*c/(1+b),z=.8*d+.2*z;}function i(){var a,c;w&&(a=Date.now()-C,c=w*Math.exp(-a/b.time_constant),c>2||-2>c?(g(x-c),requestAnimationFrame(i)):g(x));}function j(c){if(E)return c.preventDefault(),c.stopPropagation(),!1;if(!b.full_width){var d=a(c.target).closest(".carousel-item").index(),e=q%t-d;0!==e&&(c.preventDefault(),c.stopPropagation()),k(d);}}function k(a){var c=q%t-a;b.no_wrap||(0>c?Math.abs(c+t)<Math.abs(c)&&(c+=t):c>0&&Math.abs(c-t)<c&&(c-=t)),0>c?H.trigger("carouselNext",[Math.abs(c)]):c>0&&H.trigger("carouselPrev",[c]);}function l(a){r=!0,E=!1,F=!1,u=d(a),v=e(a),z=w=0,B=p,C=Date.now(),clearInterval(D),D=setInterval(h,100);}function m(a){var b,c,f;if(r)if(b=d(a),y=e(a),c=u-b,f=Math.abs(v-y),30>f&&!F)(c>2||-2>c)&&(E=!0,u=b,g(p+c));else{if(E)return a.preventDefault(),a.stopPropagation(),!1;F=!0;}return E?(a.preventDefault(),a.stopPropagation(),!1):void 0;}function n(a){return r?(r=!1,clearInterval(D),x=p,(z>10||-10>z)&&(w=.9*z,x=p+w),x=Math.round(x/s)*s,b.no_wrap&&(x>=s*(t-1)?x=s*(t-1):0>x&&(x=0)),w=x-p,C=Date.now(),requestAnimationFrame(i),E&&(a.preventDefault(),a.stopPropagation()),!1):void 0;}var o,p,q,r,s,t,u,v,w,x,z,A,B,C,D,E,F,G=a('<ul class="indicators"></ul>'),H=a(this),I=H.attr("data-indicators")||b.indicators;if(H.hasClass("initialized"))return a(this).trigger("carouselNext",[1e-6]),!0;if(b.full_width){b.dist=0;var J=H.find(".carousel-item img").first();J.length?imageHeight=J.load(function(){H.css("height",a(this).height());}):(imageHeight=H.find(".carousel-item").first().height(),H.css("height",imageHeight)),I&&H.find(".carousel-fixed-item").addClass("with-indicators");}H.addClass("initialized"),r=!1,p=x=0,o=[],item_width=H.find(".carousel-item").first().innerWidth(),s=2*item_width+b.padding,H.find(".carousel-item").each(function(b){if(o.push(a(this)[0]),I){var c=a('<li class="indicator-item"></li>');0===b&&c.addClass("active"),c.click(function(){var b=a(this).index();k(b);}),G.append(c);}}),I&&H.append(G),t=o.length,A="transform",["webkit","Moz","O","ms"].every(function(a){var b=a+"Transform";return"undefined"!=typeof document.body.style[b]?(A=b,!1):!0;}),window.onresize=g,c(),g(p),a(this).on("carouselNext",function(a,b){void 0===b&&(b=1),x=p+s*b,p!==x&&(w=x-p,C=Date.now(),requestAnimationFrame(i));}),a(this).on("carouselPrev",function(a,b){void 0===b&&(b=1),x=p-s*b,p!==x&&(w=x-p,C=Date.now(),requestAnimationFrame(i));}),a(this).on("carouselSet",function(a,b){void 0===b&&(b=0),k(b);});});},next:function next(b){a(this).trigger("carouselNext",[b]);},prev:function prev(b){a(this).trigger("carouselPrev",[b]);},set:function set(b){a(this).trigger("carouselSet",[b]);}};a.fn.carousel=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=(typeof c==="undefined"?"undefined":_typeof(c))&&c?void a.error("Method "+c+" does not exist on jQuery.carousel"):b.init.apply(this,arguments);};}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(1), __webpack_require__(17)(module), __webpack_require__(18)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.7 - 2016-04-22
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
	(function(window, document, exportName, undefined) {
	  'use strict';
	
	var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	var TEST_ELEMENT = document.createElement('div');
	
	var TYPE_FUNCTION = 'function';
	
	var round = Math.round;
	var abs = Math.abs;
	var now = Date.now;
	
	/**
	 * set a timeout with a given scope
	 * @param {Function} fn
	 * @param {Number} timeout
	 * @param {Object} context
	 * @returns {number}
	 */
	function setTimeoutContext(fn, timeout, context) {
	    return setTimeout(bindFn(fn, context), timeout);
	}
	
	/**
	 * if the argument is an array, we want to execute the fn on each entry
	 * if it aint an array we don't want to do a thing.
	 * this is used by all the methods that accept a single and array argument.
	 * @param {*|Array} arg
	 * @param {String} fn
	 * @param {Object} [context]
	 * @returns {Boolean}
	 */
	function invokeArrayArg(arg, fn, context) {
	    if (Array.isArray(arg)) {
	        each(arg, context[fn], context);
	        return true;
	    }
	    return false;
	}
	
	/**
	 * walk objects and arrays
	 * @param {Object} obj
	 * @param {Function} iterator
	 * @param {Object} context
	 */
	function each(obj, iterator, context) {
	    var i;
	
	    if (!obj) {
	        return;
	    }
	
	    if (obj.forEach) {
	        obj.forEach(iterator, context);
	    } else if (obj.length !== undefined) {
	        i = 0;
	        while (i < obj.length) {
	            iterator.call(context, obj[i], i, obj);
	            i++;
	        }
	    } else {
	        for (i in obj) {
	            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	        }
	    }
	}
	
	/**
	 * wrap a method with a deprecation warning and stack trace
	 * @param {Function} method
	 * @param {String} name
	 * @param {String} message
	 * @returns {Function} A new function wrapping the supplied method.
	 */
	function deprecate(method, name, message) {
	    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
	    return function() {
	        var e = new Error('get-stack-trace');
	        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
	            .replace(/^\s+at\s+/gm, '')
	            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
	
	        var log = window.console && (window.console.warn || window.console.log);
	        if (log) {
	            log.call(window.console, deprecationMessage, stack);
	        }
	        return method.apply(this, arguments);
	    };
	}
	
	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} target
	 * @param {...Object} objects_to_assign
	 * @returns {Object} target
	 */
	var assign;
	if (typeof Object.assign !== 'function') {
	    assign = function assign(target) {
	        if (target === undefined || target === null) {
	            throw new TypeError('Cannot convert undefined or null to object');
	        }
	
	        var output = Object(target);
	        for (var index = 1; index < arguments.length; index++) {
	            var source = arguments[index];
	            if (source !== undefined && source !== null) {
	                for (var nextKey in source) {
	                    if (source.hasOwnProperty(nextKey)) {
	                        output[nextKey] = source[nextKey];
	                    }
	                }
	            }
	        }
	        return output;
	    };
	} else {
	    assign = Object.assign;
	}
	
	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} dest
	 * @param {Object} src
	 * @param {Boolean} [merge=false]
	 * @returns {Object} dest
	 */
	var extend = deprecate(function extend(dest, src, merge) {
	    var keys = Object.keys(src);
	    var i = 0;
	    while (i < keys.length) {
	        if (!merge || (merge && dest[keys[i]] === undefined)) {
	            dest[keys[i]] = src[keys[i]];
	        }
	        i++;
	    }
	    return dest;
	}, 'extend', 'Use `assign`.');
	
	/**
	 * merge the values from src in the dest.
	 * means that properties that exist in dest will not be overwritten by src
	 * @param {Object} dest
	 * @param {Object} src
	 * @returns {Object} dest
	 */
	var merge = deprecate(function merge(dest, src) {
	    return extend(dest, src, true);
	}, 'merge', 'Use `assign`.');
	
	/**
	 * simple class inheritance
	 * @param {Function} child
	 * @param {Function} base
	 * @param {Object} [properties]
	 */
	function inherit(child, base, properties) {
	    var baseP = base.prototype,
	        childP;
	
	    childP = child.prototype = Object.create(baseP);
	    childP.constructor = child;
	    childP._super = baseP;
	
	    if (properties) {
	        assign(childP, properties);
	    }
	}
	
	/**
	 * simple function bind
	 * @param {Function} fn
	 * @param {Object} context
	 * @returns {Function}
	 */
	function bindFn(fn, context) {
	    return function boundFn() {
	        return fn.apply(context, arguments);
	    };
	}
	
	/**
	 * let a boolean value also be a function that must return a boolean
	 * this first item in args will be used as the context
	 * @param {Boolean|Function} val
	 * @param {Array} [args]
	 * @returns {Boolean}
	 */
	function boolOrFn(val, args) {
	    if (typeof val == TYPE_FUNCTION) {
	        return val.apply(args ? args[0] || undefined : undefined, args);
	    }
	    return val;
	}
	
	/**
	 * use the val2 when val1 is undefined
	 * @param {*} val1
	 * @param {*} val2
	 * @returns {*}
	 */
	function ifUndefined(val1, val2) {
	    return (val1 === undefined) ? val2 : val1;
	}
	
	/**
	 * addEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function addEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.addEventListener(type, handler, false);
	    });
	}
	
	/**
	 * removeEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function removeEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.removeEventListener(type, handler, false);
	    });
	}
	
	/**
	 * find if a node is in the given parent
	 * @method hasParent
	 * @param {HTMLElement} node
	 * @param {HTMLElement} parent
	 * @return {Boolean} found
	 */
	function hasParent(node, parent) {
	    while (node) {
	        if (node == parent) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	    return false;
	}
	
	/**
	 * small indexOf wrapper
	 * @param {String} str
	 * @param {String} find
	 * @returns {Boolean} found
	 */
	function inStr(str, find) {
	    return str.indexOf(find) > -1;
	}
	
	/**
	 * split string on whitespace
	 * @param {String} str
	 * @returns {Array} words
	 */
	function splitStr(str) {
	    return str.trim().split(/\s+/g);
	}
	
	/**
	 * find if a array contains the object using indexOf or a simple polyFill
	 * @param {Array} src
	 * @param {String} find
	 * @param {String} [findByKey]
	 * @return {Boolean|Number} false when not found, or the index
	 */
	function inArray(src, find, findByKey) {
	    if (src.indexOf && !findByKey) {
	        return src.indexOf(find);
	    } else {
	        var i = 0;
	        while (i < src.length) {
	            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
	                return i;
	            }
	            i++;
	        }
	        return -1;
	    }
	}
	
	/**
	 * convert array-like objects to real arrays
	 * @param {Object} obj
	 * @returns {Array}
	 */
	function toArray(obj) {
	    return Array.prototype.slice.call(obj, 0);
	}
	
	/**
	 * unique array with objects based on a key (like 'id') or just by the array's value
	 * @param {Array} src [{id:1},{id:2},{id:1}]
	 * @param {String} [key]
	 * @param {Boolean} [sort=False]
	 * @returns {Array} [{id:1},{id:2}]
	 */
	function uniqueArray(src, key, sort) {
	    var results = [];
	    var values = [];
	    var i = 0;
	
	    while (i < src.length) {
	        var val = key ? src[i][key] : src[i];
	        if (inArray(values, val) < 0) {
	            results.push(src[i]);
	        }
	        values[i] = val;
	        i++;
	    }
	
	    if (sort) {
	        if (!key) {
	            results = results.sort();
	        } else {
	            results = results.sort(function sortUniqueArray(a, b) {
	                return a[key] > b[key];
	            });
	        }
	    }
	
	    return results;
	}
	
	/**
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} property
	 * @returns {String|Undefined} prefixed
	 */
	function prefixed(obj, property) {
	    var prefix, prop;
	    var camelProp = property[0].toUpperCase() + property.slice(1);
	
	    var i = 0;
	    while (i < VENDOR_PREFIXES.length) {
	        prefix = VENDOR_PREFIXES[i];
	        prop = (prefix) ? prefix + camelProp : property;
	
	        if (prop in obj) {
	            return prop;
	        }
	        i++;
	    }
	    return undefined;
	}
	
	/**
	 * get a unique id
	 * @returns {number} uniqueId
	 */
	var _uniqueId = 1;
	function uniqueId() {
	    return _uniqueId++;
	}
	
	/**
	 * get the window object of an element
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 */
	function getWindowForElement(element) {
	    var doc = element.ownerDocument || element;
	    return (doc.defaultView || doc.parentWindow || window);
	}
	
	var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
	
	var SUPPORT_TOUCH = ('ontouchstart' in window);
	var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
	
	var INPUT_TYPE_TOUCH = 'touch';
	var INPUT_TYPE_PEN = 'pen';
	var INPUT_TYPE_MOUSE = 'mouse';
	var INPUT_TYPE_KINECT = 'kinect';
	
	var COMPUTE_INTERVAL = 25;
	
	var INPUT_START = 1;
	var INPUT_MOVE = 2;
	var INPUT_END = 4;
	var INPUT_CANCEL = 8;
	
	var DIRECTION_NONE = 1;
	var DIRECTION_LEFT = 2;
	var DIRECTION_RIGHT = 4;
	var DIRECTION_UP = 8;
	var DIRECTION_DOWN = 16;
	
	var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
	
	var PROPS_XY = ['x', 'y'];
	var PROPS_CLIENT_XY = ['clientX', 'clientY'];
	
	/**
	 * create new input type manager
	 * @param {Manager} manager
	 * @param {Function} callback
	 * @returns {Input}
	 * @constructor
	 */
	function Input(manager, callback) {
	    var self = this;
	    this.manager = manager;
	    this.callback = callback;
	    this.element = manager.element;
	    this.target = manager.options.inputTarget;
	
	    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	    // so when disabled the input events are completely bypassed.
	    this.domHandler = function(ev) {
	        if (boolOrFn(manager.options.enable, [manager])) {
	            self.handler(ev);
	        }
	    };
	
	    this.init();
	
	}
	
	Input.prototype = {
	    /**
	     * should handle the inputEvent data and trigger the callback
	     * @virtual
	     */
	    handler: function() { },
	
	    /**
	     * bind the events
	     */
	    init: function() {
	        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    },
	
	    /**
	     * unbind the events
	     */
	    destroy: function() {
	        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    }
	};
	
	/**
	 * create new input type manager
	 * called by the Manager constructor
	 * @param {Hammer} manager
	 * @returns {Input}
	 */
	function createInputInstance(manager) {
	    var Type;
	    var inputClass = manager.options.inputClass;
	
	    if (inputClass) {
	        Type = inputClass;
	    } else if (SUPPORT_POINTER_EVENTS) {
	        Type = PointerEventInput;
	    } else if (SUPPORT_ONLY_TOUCH) {
	        Type = TouchInput;
	    } else if (!SUPPORT_TOUCH) {
	        Type = MouseInput;
	    } else {
	        Type = TouchMouseInput;
	    }
	    return new (Type)(manager, inputHandler);
	}
	
	/**
	 * handle input events
	 * @param {Manager} manager
	 * @param {String} eventType
	 * @param {Object} input
	 */
	function inputHandler(manager, eventType, input) {
	    var pointersLen = input.pointers.length;
	    var changedPointersLen = input.changedPointers.length;
	    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
	    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));
	
	    input.isFirst = !!isFirst;
	    input.isFinal = !!isFinal;
	
	    if (isFirst) {
	        manager.session = {};
	    }
	
	    // source event is the normalized value of the domEvents
	    // like 'touchstart, mouseup, pointerdown'
	    input.eventType = eventType;
	
	    // compute scale, rotation etc
	    computeInputData(manager, input);
	
	    // emit secret event
	    manager.emit('hammer.input', input);
	
	    manager.recognize(input);
	    manager.session.prevInput = input;
	}
	
	/**
	 * extend the data with some usable properties like scale, rotate, velocity etc
	 * @param {Object} manager
	 * @param {Object} input
	 */
	function computeInputData(manager, input) {
	    var session = manager.session;
	    var pointers = input.pointers;
	    var pointersLength = pointers.length;
	
	    // store the first input to calculate the distance and direction
	    if (!session.firstInput) {
	        session.firstInput = simpleCloneInputData(input);
	    }
	
	    // to compute scale and rotation we need to store the multiple touches
	    if (pointersLength > 1 && !session.firstMultiple) {
	        session.firstMultiple = simpleCloneInputData(input);
	    } else if (pointersLength === 1) {
	        session.firstMultiple = false;
	    }
	
	    var firstInput = session.firstInput;
	    var firstMultiple = session.firstMultiple;
	    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
	
	    var center = input.center = getCenter(pointers);
	    input.timeStamp = now();
	    input.deltaTime = input.timeStamp - firstInput.timeStamp;
	
	    input.angle = getAngle(offsetCenter, center);
	    input.distance = getDistance(offsetCenter, center);
	
	    computeDeltaXY(session, input);
	    input.offsetDirection = getDirection(input.deltaX, input.deltaY);
	
	    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
	    input.overallVelocityX = overallVelocity.x;
	    input.overallVelocityY = overallVelocity.y;
	    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;
	
	    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
	
	    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
	        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);
	
	    computeIntervalInputData(session, input);
	
	    // find the correct target
	    var target = manager.element;
	    if (hasParent(input.srcEvent.target, target)) {
	        target = input.srcEvent.target;
	    }
	    input.target = target;
	}
	
	function computeDeltaXY(session, input) {
	    var center = input.center;
	    var offset = session.offsetDelta || {};
	    var prevDelta = session.prevDelta || {};
	    var prevInput = session.prevInput || {};
	
	    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	        prevDelta = session.prevDelta = {
	            x: prevInput.deltaX || 0,
	            y: prevInput.deltaY || 0
	        };
	
	        offset = session.offsetDelta = {
	            x: center.x,
	            y: center.y
	        };
	    }
	
	    input.deltaX = prevDelta.x + (center.x - offset.x);
	    input.deltaY = prevDelta.y + (center.y - offset.y);
	}
	
	/**
	 * velocity is calculated every x ms
	 * @param {Object} session
	 * @param {Object} input
	 */
	function computeIntervalInputData(session, input) {
	    var last = session.lastInterval || input,
	        deltaTime = input.timeStamp - last.timeStamp,
	        velocity, velocityX, velocityY, direction;
	
	    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	        var deltaX = input.deltaX - last.deltaX;
	        var deltaY = input.deltaY - last.deltaY;
	
	        var v = getVelocity(deltaTime, deltaX, deltaY);
	        velocityX = v.x;
	        velocityY = v.y;
	        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
	        direction = getDirection(deltaX, deltaY);
	
	        session.lastInterval = input;
	    } else {
	        // use latest velocity info if it doesn't overtake a minimum period
	        velocity = last.velocity;
	        velocityX = last.velocityX;
	        velocityY = last.velocityY;
	        direction = last.direction;
	    }
	
	    input.velocity = velocity;
	    input.velocityX = velocityX;
	    input.velocityY = velocityY;
	    input.direction = direction;
	}
	
	/**
	 * create a simple clone from the input used for storage of firstInput and firstMultiple
	 * @param {Object} input
	 * @returns {Object} clonedInputData
	 */
	function simpleCloneInputData(input) {
	    // make a simple copy of the pointers because we will get a reference if we don't
	    // we only need clientXY for the calculations
	    var pointers = [];
	    var i = 0;
	    while (i < input.pointers.length) {
	        pointers[i] = {
	            clientX: round(input.pointers[i].clientX),
	            clientY: round(input.pointers[i].clientY)
	        };
	        i++;
	    }
	
	    return {
	        timeStamp: now(),
	        pointers: pointers,
	        center: getCenter(pointers),
	        deltaX: input.deltaX,
	        deltaY: input.deltaY
	    };
	}
	
	/**
	 * get the center of all the pointers
	 * @param {Array} pointers
	 * @return {Object} center contains `x` and `y` properties
	 */
	function getCenter(pointers) {
	    var pointersLength = pointers.length;
	
	    // no need to loop when only one touch
	    if (pointersLength === 1) {
	        return {
	            x: round(pointers[0].clientX),
	            y: round(pointers[0].clientY)
	        };
	    }
	
	    var x = 0, y = 0, i = 0;
	    while (i < pointersLength) {
	        x += pointers[i].clientX;
	        y += pointers[i].clientY;
	        i++;
	    }
	
	    return {
	        x: round(x / pointersLength),
	        y: round(y / pointersLength)
	    };
	}
	
	/**
	 * calculate the velocity between two points. unit is in px per ms.
	 * @param {Number} deltaTime
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Object} velocity `x` and `y`
	 */
	function getVelocity(deltaTime, x, y) {
	    return {
	        x: x / deltaTime || 0,
	        y: y / deltaTime || 0
	    };
	}
	
	/**
	 * get the direction between two points
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Number} direction
	 */
	function getDirection(x, y) {
	    if (x === y) {
	        return DIRECTION_NONE;
	    }
	
	    if (abs(x) >= abs(y)) {
	        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	    }
	    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	}
	
	/**
	 * calculate the absolute distance between two points
	 * @param {Object} p1 {x, y}
	 * @param {Object} p2 {x, y}
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} distance
	 */
	function getDistance(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	
	    return Math.sqrt((x * x) + (y * y));
	}
	
	/**
	 * calculate the angle between two coordinates
	 * @param {Object} p1
	 * @param {Object} p2
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} angle
	 */
	function getAngle(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	    return Math.atan2(y, x) * 180 / Math.PI;
	}
	
	/**
	 * calculate the rotation degrees between two pointersets
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} rotation
	 */
	function getRotation(start, end) {
	    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	}
	
	/**
	 * calculate the scale factor between two pointersets
	 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} scale
	 */
	function getScale(start, end) {
	    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	}
	
	var MOUSE_INPUT_MAP = {
	    mousedown: INPUT_START,
	    mousemove: INPUT_MOVE,
	    mouseup: INPUT_END
	};
	
	var MOUSE_ELEMENT_EVENTS = 'mousedown';
	var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
	
	/**
	 * Mouse events input
	 * @constructor
	 * @extends Input
	 */
	function MouseInput() {
	    this.evEl = MOUSE_ELEMENT_EVENTS;
	    this.evWin = MOUSE_WINDOW_EVENTS;
	
	    this.pressed = false; // mousedown state
	
	    Input.apply(this, arguments);
	}
	
	inherit(MouseInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function MEhandler(ev) {
	        var eventType = MOUSE_INPUT_MAP[ev.type];
	
	        // on start we want to have the left mouse button down
	        if (eventType & INPUT_START && ev.button === 0) {
	            this.pressed = true;
	        }
	
	        if (eventType & INPUT_MOVE && ev.which !== 1) {
	            eventType = INPUT_END;
	        }
	
	        // mouse must be down
	        if (!this.pressed) {
	            return;
	        }
	
	        if (eventType & INPUT_END) {
	            this.pressed = false;
	        }
	
	        this.callback(this.manager, eventType, {
	            pointers: [ev],
	            changedPointers: [ev],
	            pointerType: INPUT_TYPE_MOUSE,
	            srcEvent: ev
	        });
	    }
	});
	
	var POINTER_INPUT_MAP = {
	    pointerdown: INPUT_START,
	    pointermove: INPUT_MOVE,
	    pointerup: INPUT_END,
	    pointercancel: INPUT_CANCEL,
	    pointerout: INPUT_CANCEL
	};
	
	// in IE10 the pointer types is defined as an enum
	var IE10_POINTER_TYPE_ENUM = {
	    2: INPUT_TYPE_TOUCH,
	    3: INPUT_TYPE_PEN,
	    4: INPUT_TYPE_MOUSE,
	    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	};
	
	var POINTER_ELEMENT_EVENTS = 'pointerdown';
	var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';
	
	// IE10 has prefixed support, and case-sensitive
	if (window.MSPointerEvent && !window.PointerEvent) {
	    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	}
	
	/**
	 * Pointer events input
	 * @constructor
	 * @extends Input
	 */
	function PointerEventInput() {
	    this.evEl = POINTER_ELEMENT_EVENTS;
	    this.evWin = POINTER_WINDOW_EVENTS;
	
	    Input.apply(this, arguments);
	
	    this.store = (this.manager.session.pointerEvents = []);
	}
	
	inherit(PointerEventInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function PEhandler(ev) {
	        var store = this.store;
	        var removePointer = false;
	
	        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
	
	        var isTouch = (pointerType == INPUT_TYPE_TOUCH);
	
	        // get index of the event in the store
	        var storeIndex = inArray(store, ev.pointerId, 'pointerId');
	
	        // start and mouse must be down
	        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	            if (storeIndex < 0) {
	                store.push(ev);
	                storeIndex = store.length - 1;
	            }
	        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	            removePointer = true;
	        }
	
	        // it not found, so the pointer hasn't been down (so it's probably a hover)
	        if (storeIndex < 0) {
	            return;
	        }
	
	        // update the event in the store
	        store[storeIndex] = ev;
	
	        this.callback(this.manager, eventType, {
	            pointers: store,
	            changedPointers: [ev],
	            pointerType: pointerType,
	            srcEvent: ev
	        });
	
	        if (removePointer) {
	            // remove from the store
	            store.splice(storeIndex, 1);
	        }
	    }
	});
	
	var SINGLE_TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};
	
	var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
	
	/**
	 * Touch events input
	 * @constructor
	 * @extends Input
	 */
	function SingleTouchInput() {
	    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	    this.started = false;
	
	    Input.apply(this, arguments);
	}
	
	inherit(SingleTouchInput, Input, {
	    handler: function TEhandler(ev) {
	        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
	
	        // should we handle the touch events?
	        if (type === INPUT_START) {
	            this.started = true;
	        }
	
	        if (!this.started) {
	            return;
	        }
	
	        var touches = normalizeSingleTouches.call(this, ev, type);
	
	        // when done, reset the started state
	        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	            this.started = false;
	        }
	
	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});
	
	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function normalizeSingleTouches(ev, type) {
	    var all = toArray(ev.touches);
	    var changed = toArray(ev.changedTouches);
	
	    if (type & (INPUT_END | INPUT_CANCEL)) {
	        all = uniqueArray(all.concat(changed), 'identifier', true);
	    }
	
	    return [all, changed];
	}
	
	var TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};
	
	var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
	
	/**
	 * Multi-user touch events input
	 * @constructor
	 * @extends Input
	 */
	function TouchInput() {
	    this.evTarget = TOUCH_TARGET_EVENTS;
	    this.targetIds = {};
	
	    Input.apply(this, arguments);
	}
	
	inherit(TouchInput, Input, {
	    handler: function MTEhandler(ev) {
	        var type = TOUCH_INPUT_MAP[ev.type];
	        var touches = getTouches.call(this, ev, type);
	        if (!touches) {
	            return;
	        }
	
	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});
	
	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function getTouches(ev, type) {
	    var allTouches = toArray(ev.touches);
	    var targetIds = this.targetIds;
	
	    // when there is only one touch, the process can be simplified
	    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	        targetIds[allTouches[0].identifier] = true;
	        return [allTouches, allTouches];
	    }
	
	    var i,
	        targetTouches,
	        changedTouches = toArray(ev.changedTouches),
	        changedTargetTouches = [],
	        target = this.target;
	
	    // get target touches from touches
	    targetTouches = allTouches.filter(function(touch) {
	        return hasParent(touch.target, target);
	    });
	
	    // collect touches
	    if (type === INPUT_START) {
	        i = 0;
	        while (i < targetTouches.length) {
	            targetIds[targetTouches[i].identifier] = true;
	            i++;
	        }
	    }
	
	    // filter changed touches to only contain touches that exist in the collected target ids
	    i = 0;
	    while (i < changedTouches.length) {
	        if (targetIds[changedTouches[i].identifier]) {
	            changedTargetTouches.push(changedTouches[i]);
	        }
	
	        // cleanup removed touches
	        if (type & (INPUT_END | INPUT_CANCEL)) {
	            delete targetIds[changedTouches[i].identifier];
	        }
	        i++;
	    }
	
	    if (!changedTargetTouches.length) {
	        return;
	    }
	
	    return [
	        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
	        changedTargetTouches
	    ];
	}
	
	/**
	 * Combined touch and mouse input
	 *
	 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	 * This because touch devices also emit mouse events while doing a touch.
	 *
	 * @constructor
	 * @extends Input
	 */
	
	var DEDUP_TIMEOUT = 2500;
	var DEDUP_DISTANCE = 25;
	
	function TouchMouseInput() {
	    Input.apply(this, arguments);
	
	    var handler = bindFn(this.handler, this);
	    this.touch = new TouchInput(this.manager, handler);
	    this.mouse = new MouseInput(this.manager, handler);
	
	    this.primaryTouch = null;
	    this.lastTouches = [];
	}
	
	inherit(TouchMouseInput, Input, {
	    /**
	     * handle mouse and touch events
	     * @param {Hammer} manager
	     * @param {String} inputEvent
	     * @param {Object} inputData
	     */
	    handler: function TMEhandler(manager, inputEvent, inputData) {
	        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
	            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);
	
	        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
	            return;
	        }
	
	        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
	        if (isTouch) {
	            recordTouches.call(this, inputEvent, inputData);
	        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
	            return;
	        }
	
	        this.callback(manager, inputEvent, inputData);
	    },
	
	    /**
	     * remove the event listeners
	     */
	    destroy: function destroy() {
	        this.touch.destroy();
	        this.mouse.destroy();
	    }
	});
	
	function recordTouches(eventType, eventData) {
	    if (eventType & INPUT_START) {
	        this.primaryTouch = eventData.changedPointers[0].identifier;
	        setLastTouch.call(this, eventData);
	    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	        setLastTouch.call(this, eventData);
	    }
	}
	
	function setLastTouch(eventData) {
	    var touch = eventData.changedPointers[0];
	
	    if (touch.identifier === this.primaryTouch) {
	        var lastTouch = {x: touch.clientX, y: touch.clientY};
	        this.lastTouches.push(lastTouch);
	        var lts = this.lastTouches;
	        var removeLastTouch = function() {
	            var i = lts.indexOf(lastTouch);
	            if (i > -1) {
	                lts.splice(i, 1);
	            }
	        };
	        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
	    }
	}
	
	function isSyntheticEvent(eventData) {
	    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
	    for (var i = 0; i < this.lastTouches.length; i++) {
	        var t = this.lastTouches[i];
	        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
	        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
	            return true;
	        }
	    }
	    return false;
	}
	
	var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
	
	// magical touchAction value
	var TOUCH_ACTION_COMPUTE = 'compute';
	var TOUCH_ACTION_AUTO = 'auto';
	var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	var TOUCH_ACTION_NONE = 'none';
	var TOUCH_ACTION_PAN_X = 'pan-x';
	var TOUCH_ACTION_PAN_Y = 'pan-y';
	var TOUCH_ACTION_MAP = getTouchActionProps();
	
	/**
	 * Touch Action
	 * sets the touchAction property or uses the js alternative
	 * @param {Manager} manager
	 * @param {String} value
	 * @constructor
	 */
	function TouchAction(manager, value) {
	    this.manager = manager;
	    this.set(value);
	}
	
	TouchAction.prototype = {
	    /**
	     * set the touchAction value on the element or enable the polyfill
	     * @param {String} value
	     */
	    set: function(value) {
	        // find out the touch-action by the event handlers
	        if (value == TOUCH_ACTION_COMPUTE) {
	            value = this.compute();
	        }
	
	        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
	            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	        }
	        this.actions = value.toLowerCase().trim();
	    },
	
	    /**
	     * just re-set the touchAction value
	     */
	    update: function() {
	        this.set(this.manager.options.touchAction);
	    },
	
	    /**
	     * compute the value for the touchAction property based on the recognizer's settings
	     * @returns {String} value
	     */
	    compute: function() {
	        var actions = [];
	        each(this.manager.recognizers, function(recognizer) {
	            if (boolOrFn(recognizer.options.enable, [recognizer])) {
	                actions = actions.concat(recognizer.getTouchAction());
	            }
	        });
	        return cleanTouchActions(actions.join(' '));
	    },
	
	    /**
	     * this method is called on each input cycle and provides the preventing of the browser behavior
	     * @param {Object} input
	     */
	    preventDefaults: function(input) {
	        var srcEvent = input.srcEvent;
	        var direction = input.offsetDirection;
	
	        // if the touch action did prevented once this session
	        if (this.manager.session.prevented) {
	            srcEvent.preventDefault();
	            return;
	        }
	
	        var actions = this.actions;
	        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
	
	        if (hasNone) {
	            //do not prevent defaults if this is a tap gesture
	
	            var isTapPointer = input.pointers.length === 1;
	            var isTapMovement = input.distance < 2;
	            var isTapTouchTime = input.deltaTime < 250;
	
	            if (isTapPointer && isTapMovement && isTapTouchTime) {
	                return;
	            }
	        }
	
	        if (hasPanX && hasPanY) {
	            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
	            return;
	        }
	
	        if (hasNone ||
	            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
	            (hasPanX && direction & DIRECTION_VERTICAL)) {
	            return this.preventSrc(srcEvent);
	        }
	    },
	
	    /**
	     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	     * @param {Object} srcEvent
	     */
	    preventSrc: function(srcEvent) {
	        this.manager.session.prevented = true;
	        srcEvent.preventDefault();
	    }
	};
	
	/**
	 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	 * @param {String} actions
	 * @returns {*}
	 */
	function cleanTouchActions(actions) {
	    // none
	    if (inStr(actions, TOUCH_ACTION_NONE)) {
	        return TOUCH_ACTION_NONE;
	    }
	
	    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
	
	    // if both pan-x and pan-y are set (different recognizers
	    // for different directions, e.g. horizontal pan but vertical swipe?)
	    // we need none (as otherwise with pan-x pan-y combined none of these
	    // recognizers will work, since the browser would handle all panning
	    if (hasPanX && hasPanY) {
	        return TOUCH_ACTION_NONE;
	    }
	
	    // pan-x OR pan-y
	    if (hasPanX || hasPanY) {
	        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	    }
	
	    // manipulation
	    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	        return TOUCH_ACTION_MANIPULATION;
	    }
	
	    return TOUCH_ACTION_AUTO;
	}
	
	function getTouchActionProps() {
	    if (!NATIVE_TOUCH_ACTION) {
	        return false;
	    }
	    var touchMap = {};
	    var cssSupports = window.CSS && window.CSS.supports;
	    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {
	
	        // If css.supports is not supported but there is native touch-action assume it supports
	        // all values. This is the case for IE 10 and 11.
	        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
	    });
	    return touchMap;
	}
	
	/**
	 * Recognizer flow explained; *
	 * All recognizers have the initial state of POSSIBLE when a input session starts.
	 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	 * Example session for mouse-input: mousedown -> mousemove -> mouseup
	 *
	 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	 * which determines with state it should be.
	 *
	 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	 * POSSIBLE to give it another change on the next cycle.
	 *
	 *               Possible
	 *                  |
	 *            +-----+---------------+
	 *            |                     |
	 *      +-----+-----+               |
	 *      |           |               |
	 *   Failed      Cancelled          |
	 *                          +-------+------+
	 *                          |              |
	 *                      Recognized       Began
	 *                                         |
	 *                                      Changed
	 *                                         |
	 *                                  Ended/Recognized
	 */
	var STATE_POSSIBLE = 1;
	var STATE_BEGAN = 2;
	var STATE_CHANGED = 4;
	var STATE_ENDED = 8;
	var STATE_RECOGNIZED = STATE_ENDED;
	var STATE_CANCELLED = 16;
	var STATE_FAILED = 32;
	
	/**
	 * Recognizer
	 * Every recognizer needs to extend from this class.
	 * @constructor
	 * @param {Object} options
	 */
	function Recognizer(options) {
	    this.options = assign({}, this.defaults, options || {});
	
	    this.id = uniqueId();
	
	    this.manager = null;
	
	    // default is enable true
	    this.options.enable = ifUndefined(this.options.enable, true);
	
	    this.state = STATE_POSSIBLE;
	
	    this.simultaneous = {};
	    this.requireFail = [];
	}
	
	Recognizer.prototype = {
	    /**
	     * @virtual
	     * @type {Object}
	     */
	    defaults: {},
	
	    /**
	     * set options
	     * @param {Object} options
	     * @return {Recognizer}
	     */
	    set: function(options) {
	        assign(this.options, options);
	
	        // also update the touchAction, in case something changed about the directions/enabled state
	        this.manager && this.manager.touchAction.update();
	        return this;
	    },
	
	    /**
	     * recognize simultaneous with an other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    recognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	            return this;
	        }
	
	        var simultaneous = this.simultaneous;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (!simultaneous[otherRecognizer.id]) {
	            simultaneous[otherRecognizer.id] = otherRecognizer;
	            otherRecognizer.recognizeWith(this);
	        }
	        return this;
	    },
	
	    /**
	     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRecognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	            return this;
	        }
	
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        delete this.simultaneous[otherRecognizer.id];
	        return this;
	    },
	
	    /**
	     * recognizer can only run when an other is failing
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    requireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	            return this;
	        }
	
	        var requireFail = this.requireFail;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (inArray(requireFail, otherRecognizer) === -1) {
	            requireFail.push(otherRecognizer);
	            otherRecognizer.requireFailure(this);
	        }
	        return this;
	    },
	
	    /**
	     * drop the requireFailure link. it does not remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRequireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	            return this;
	        }
	
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        var index = inArray(this.requireFail, otherRecognizer);
	        if (index > -1) {
	            this.requireFail.splice(index, 1);
	        }
	        return this;
	    },
	
	    /**
	     * has require failures boolean
	     * @returns {boolean}
	     */
	    hasRequireFailures: function() {
	        return this.requireFail.length > 0;
	    },
	
	    /**
	     * if the recognizer can recognize simultaneous with an other recognizer
	     * @param {Recognizer} otherRecognizer
	     * @returns {Boolean}
	     */
	    canRecognizeWith: function(otherRecognizer) {
	        return !!this.simultaneous[otherRecognizer.id];
	    },
	
	    /**
	     * You should use `tryEmit` instead of `emit` directly to check
	     * that all the needed recognizers has failed before emitting.
	     * @param {Object} input
	     */
	    emit: function(input) {
	        var self = this;
	        var state = this.state;
	
	        function emit(event) {
	            self.manager.emit(event, input);
	        }
	
	        // 'panstart' and 'panmove'
	        if (state < STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	
	        emit(self.options.event); // simple 'eventName' events
	
	        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
	            emit(input.additionalEvent);
	        }
	
	        // panend and pancancel
	        if (state >= STATE_ENDED) {
	            emit(self.options.event + stateStr(state));
	        }
	    },
	
	    /**
	     * Check that all the require failure recognizers has failed,
	     * if true, it emits a gesture event,
	     * otherwise, setup the state to FAILED.
	     * @param {Object} input
	     */
	    tryEmit: function(input) {
	        if (this.canEmit()) {
	            return this.emit(input);
	        }
	        // it's failing anyway
	        this.state = STATE_FAILED;
	    },
	
	    /**
	     * can we emit?
	     * @returns {boolean}
	     */
	    canEmit: function() {
	        var i = 0;
	        while (i < this.requireFail.length) {
	            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	                return false;
	            }
	            i++;
	        }
	        return true;
	    },
	
	    /**
	     * update the recognizer
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        // make a new copy of the inputData
	        // so we can change the inputData without messing up the other recognizers
	        var inputDataClone = assign({}, inputData);
	
	        // is is enabled and allow recognizing?
	        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	            this.reset();
	            this.state = STATE_FAILED;
	            return;
	        }
	
	        // reset when we've reached the end
	        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	            this.state = STATE_POSSIBLE;
	        }
	
	        this.state = this.process(inputDataClone);
	
	        // the recognizer has recognized a gesture
	        // so trigger an event
	        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	            this.tryEmit(inputDataClone);
	        }
	    },
	
	    /**
	     * return the state of the recognizer
	     * the actual recognizing happens in this method
	     * @virtual
	     * @param {Object} inputData
	     * @returns {Const} STATE
	     */
	    process: function(inputData) { }, // jshint ignore:line
	
	    /**
	     * return the preferred touch-action
	     * @virtual
	     * @returns {Array}
	     */
	    getTouchAction: function() { },
	
	    /**
	     * called when the gesture isn't allowed to recognize
	     * like when another is being recognized or it is disabled
	     * @virtual
	     */
	    reset: function() { }
	};
	
	/**
	 * get a usable string, used as event postfix
	 * @param {Const} state
	 * @returns {String} state
	 */
	function stateStr(state) {
	    if (state & STATE_CANCELLED) {
	        return 'cancel';
	    } else if (state & STATE_ENDED) {
	        return 'end';
	    } else if (state & STATE_CHANGED) {
	        return 'move';
	    } else if (state & STATE_BEGAN) {
	        return 'start';
	    }
	    return '';
	}
	
	/**
	 * direction cons to string
	 * @param {Const} direction
	 * @returns {String}
	 */
	function directionStr(direction) {
	    if (direction == DIRECTION_DOWN) {
	        return 'down';
	    } else if (direction == DIRECTION_UP) {
	        return 'up';
	    } else if (direction == DIRECTION_LEFT) {
	        return 'left';
	    } else if (direction == DIRECTION_RIGHT) {
	        return 'right';
	    }
	    return '';
	}
	
	/**
	 * get a recognizer by name if it is bound to a manager
	 * @param {Recognizer|String} otherRecognizer
	 * @param {Recognizer} recognizer
	 * @returns {Recognizer}
	 */
	function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	    var manager = recognizer.manager;
	    if (manager) {
	        return manager.get(otherRecognizer);
	    }
	    return otherRecognizer;
	}
	
	/**
	 * This recognizer is just used as a base for the simple attribute recognizers.
	 * @constructor
	 * @extends Recognizer
	 */
	function AttrRecognizer() {
	    Recognizer.apply(this, arguments);
	}
	
	inherit(AttrRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof AttrRecognizer
	     */
	    defaults: {
	        /**
	         * @type {Number}
	         * @default 1
	         */
	        pointers: 1
	    },
	
	    /**
	     * Used to check if it the recognizer receives valid input, like input.distance > 10.
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {Boolean} recognized
	     */
	    attrTest: function(input) {
	        var optionPointers = this.options.pointers;
	        return optionPointers === 0 || input.pointers.length === optionPointers;
	    },
	
	    /**
	     * Process the input and return the state for the recognizer
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {*} State
	     */
	    process: function(input) {
	        var state = this.state;
	        var eventType = input.eventType;
	
	        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	        var isValid = this.attrTest(input);
	
	        // on cancel input and we've recognized before, return STATE_CANCELLED
	        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	            return state | STATE_CANCELLED;
	        } else if (isRecognized || isValid) {
	            if (eventType & INPUT_END) {
	                return state | STATE_ENDED;
	            } else if (!(state & STATE_BEGAN)) {
	                return STATE_BEGAN;
	            }
	            return state | STATE_CHANGED;
	        }
	        return STATE_FAILED;
	    }
	});
	
	/**
	 * Pan
	 * Recognized when the pointer is down and moved in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PanRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	
	    this.pX = null;
	    this.pY = null;
	}
	
	inherit(PanRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PanRecognizer
	     */
	    defaults: {
	        event: 'pan',
	        threshold: 10,
	        pointers: 1,
	        direction: DIRECTION_ALL
	    },
	
	    getTouchAction: function() {
	        var direction = this.options.direction;
	        var actions = [];
	        if (direction & DIRECTION_HORIZONTAL) {
	            actions.push(TOUCH_ACTION_PAN_Y);
	        }
	        if (direction & DIRECTION_VERTICAL) {
	            actions.push(TOUCH_ACTION_PAN_X);
	        }
	        return actions;
	    },
	
	    directionTest: function(input) {
	        var options = this.options;
	        var hasMoved = true;
	        var distance = input.distance;
	        var direction = input.direction;
	        var x = input.deltaX;
	        var y = input.deltaY;
	
	        // lock to axis?
	        if (!(direction & options.direction)) {
	            if (options.direction & DIRECTION_HORIZONTAL) {
	                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
	                hasMoved = x != this.pX;
	                distance = Math.abs(input.deltaX);
	            } else {
	                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
	                hasMoved = y != this.pY;
	                distance = Math.abs(input.deltaY);
	            }
	        }
	        input.direction = direction;
	        return hasMoved && distance > options.threshold && direction & options.direction;
	    },
	
	    attrTest: function(input) {
	        return AttrRecognizer.prototype.attrTest.call(this, input) &&
	            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
	    },
	
	    emit: function(input) {
	
	        this.pX = input.deltaX;
	        this.pY = input.deltaY;
	
	        var direction = directionStr(input.direction);
	
	        if (direction) {
	            input.additionalEvent = this.options.event + direction;
	        }
	        this._super.emit.call(this, input);
	    }
	});
	
	/**
	 * Pinch
	 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PinchRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(PinchRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'pinch',
	        threshold: 0,
	        pointers: 2
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },
	
	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	    },
	
	    emit: function(input) {
	        if (input.scale !== 1) {
	            var inOut = input.scale < 1 ? 'in' : 'out';
	            input.additionalEvent = this.options.event + inOut;
	        }
	        this._super.emit.call(this, input);
	    }
	});
	
	/**
	 * Press
	 * Recognized when the pointer is down for x ms without any movement.
	 * @constructor
	 * @extends Recognizer
	 */
	function PressRecognizer() {
	    Recognizer.apply(this, arguments);
	
	    this._timer = null;
	    this._input = null;
	}
	
	inherit(PressRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PressRecognizer
	     */
	    defaults: {
	        event: 'press',
	        pointers: 1,
	        time: 251, // minimal time of the pointer to be pressed
	        threshold: 9 // a minimal movement is ok, but keep it low
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_AUTO];
	    },
	
	    process: function(input) {
	        var options = this.options;
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTime = input.deltaTime > options.time;
	
	        this._input = input;
	
	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
	            this.reset();
	        } else if (input.eventType & INPUT_START) {
	            this.reset();
	            this._timer = setTimeoutContext(function() {
	                this.state = STATE_RECOGNIZED;
	                this.tryEmit();
	            }, options.time, this);
	        } else if (input.eventType & INPUT_END) {
	            return STATE_RECOGNIZED;
	        }
	        return STATE_FAILED;
	    },
	
	    reset: function() {
	        clearTimeout(this._timer);
	    },
	
	    emit: function(input) {
	        if (this.state !== STATE_RECOGNIZED) {
	            return;
	        }
	
	        if (input && (input.eventType & INPUT_END)) {
	            this.manager.emit(this.options.event + 'up', input);
	        } else {
	            this._input.timeStamp = now();
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});
	
	/**
	 * Rotate
	 * Recognized when two or more pointer are moving in a circular motion.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function RotateRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(RotateRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof RotateRecognizer
	     */
	    defaults: {
	        event: 'rotate',
	        threshold: 0,
	        pointers: 2
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },
	
	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	    }
	});
	
	/**
	 * Swipe
	 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function SwipeRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}
	
	inherit(SwipeRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof SwipeRecognizer
	     */
	    defaults: {
	        event: 'swipe',
	        threshold: 10,
	        velocity: 0.3,
	        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	        pointers: 1
	    },
	
	    getTouchAction: function() {
	        return PanRecognizer.prototype.getTouchAction.call(this);
	    },
	
	    attrTest: function(input) {
	        var direction = this.options.direction;
	        var velocity;
	
	        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	            velocity = input.overallVelocity;
	        } else if (direction & DIRECTION_HORIZONTAL) {
	            velocity = input.overallVelocityX;
	        } else if (direction & DIRECTION_VERTICAL) {
	            velocity = input.overallVelocityY;
	        }
	
	        return this._super.attrTest.call(this, input) &&
	            direction & input.offsetDirection &&
	            input.distance > this.options.threshold &&
	            input.maxPointers == this.options.pointers &&
	            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	    },
	
	    emit: function(input) {
	        var direction = directionStr(input.offsetDirection);
	        if (direction) {
	            this.manager.emit(this.options.event + direction, input);
	        }
	
	        this.manager.emit(this.options.event, input);
	    }
	});
	
	/**
	 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	 * a single tap.
	 *
	 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	 * multi-taps being recognized.
	 * @constructor
	 * @extends Recognizer
	 */
	function TapRecognizer() {
	    Recognizer.apply(this, arguments);
	
	    // previous time and center,
	    // used for tap counting
	    this.pTime = false;
	    this.pCenter = false;
	
	    this._timer = null;
	    this._input = null;
	    this.count = 0;
	}
	
	inherit(TapRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'tap',
	        pointers: 1,
	        taps: 1,
	        interval: 300, // max time between the multi-tap taps
	        time: 250, // max time of the pointer to be down (like finger on the screen)
	        threshold: 9, // a minimal movement is ok, but keep it low
	        posThreshold: 10 // a multi-tap can be a bit off the initial position
	    },
	
	    getTouchAction: function() {
	        return [TOUCH_ACTION_MANIPULATION];
	    },
	
	    process: function(input) {
	        var options = this.options;
	
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTouchTime = input.deltaTime < options.time;
	
	        this.reset();
	
	        if ((input.eventType & INPUT_START) && (this.count === 0)) {
	            return this.failTimeout();
	        }
	
	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (validMovement && validTouchTime && validPointers) {
	            if (input.eventType != INPUT_END) {
	                return this.failTimeout();
	            }
	
	            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
	            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
	
	            this.pTime = input.timeStamp;
	            this.pCenter = input.center;
	
	            if (!validMultiTap || !validInterval) {
	                this.count = 1;
	            } else {
	                this.count += 1;
	            }
	
	            this._input = input;
	
	            // if tap count matches we have recognized it,
	            // else it has began recognizing...
	            var tapCount = this.count % options.taps;
	            if (tapCount === 0) {
	                // no failing requirements, immediately trigger the tap event
	                // or wait as long as the multitap interval to trigger
	                if (!this.hasRequireFailures()) {
	                    return STATE_RECOGNIZED;
	                } else {
	                    this._timer = setTimeoutContext(function() {
	                        this.state = STATE_RECOGNIZED;
	                        this.tryEmit();
	                    }, options.interval, this);
	                    return STATE_BEGAN;
	                }
	            }
	        }
	        return STATE_FAILED;
	    },
	
	    failTimeout: function() {
	        this._timer = setTimeoutContext(function() {
	            this.state = STATE_FAILED;
	        }, this.options.interval, this);
	        return STATE_FAILED;
	    },
	
	    reset: function() {
	        clearTimeout(this._timer);
	    },
	
	    emit: function() {
	        if (this.state == STATE_RECOGNIZED) {
	            this._input.tapCount = this.count;
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});
	
	/**
	 * Simple way to create a manager with a default set of recognizers.
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Hammer(element, options) {
	    options = options || {};
	    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	    return new Manager(element, options);
	}
	
	/**
	 * @const {string}
	 */
	Hammer.VERSION = '2.0.7';
	
	/**
	 * default settings
	 * @namespace
	 */
	Hammer.defaults = {
	    /**
	     * set if DOM events are being triggered.
	     * But this is slower and unused by simple implementations, so disabled by default.
	     * @type {Boolean}
	     * @default false
	     */
	    domEvents: false,
	
	    /**
	     * The value for the touchAction property/fallback.
	     * When set to `compute` it will magically set the correct value based on the added recognizers.
	     * @type {String}
	     * @default compute
	     */
	    touchAction: TOUCH_ACTION_COMPUTE,
	
	    /**
	     * @type {Boolean}
	     * @default true
	     */
	    enable: true,
	
	    /**
	     * EXPERIMENTAL FEATURE -- can be removed/changed
	     * Change the parent input target element.
	     * If Null, then it is being set the to main element.
	     * @type {Null|EventTarget}
	     * @default null
	     */
	    inputTarget: null,
	
	    /**
	     * force an input class
	     * @type {Null|Function}
	     * @default null
	     */
	    inputClass: null,
	
	    /**
	     * Default recognizer setup when calling `Hammer()`
	     * When creating a new Manager these will be skipped.
	     * @type {Array}
	     */
	    preset: [
	        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
	        [RotateRecognizer, {enable: false}],
	        [PinchRecognizer, {enable: false}, ['rotate']],
	        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
	        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
	        [TapRecognizer],
	        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
	        [PressRecognizer]
	    ],
	
	    /**
	     * Some CSS properties can be used to improve the working of Hammer.
	     * Add them to this method and they will be set when creating a new Manager.
	     * @namespace
	     */
	    cssProps: {
	        /**
	         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userSelect: 'none',
	
	        /**
	         * Disable the Windows Phone grippers when pressing an element.
	         * @type {String}
	         * @default 'none'
	         */
	        touchSelect: 'none',
	
	        /**
	         * Disables the default callout shown when you touch and hold a touch target.
	         * On iOS, when you touch and hold a touch target such as a link, Safari displays
	         * a callout containing information about the link. This property allows you to disable that callout.
	         * @type {String}
	         * @default 'none'
	         */
	        touchCallout: 'none',
	
	        /**
	         * Specifies whether zooming is enabled. Used by IE10>
	         * @type {String}
	         * @default 'none'
	         */
	        contentZooming: 'none',
	
	        /**
	         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userDrag: 'none',
	
	        /**
	         * Overrides the highlight color shown when the user taps a link or a JavaScript
	         * clickable element in iOS. This property obeys the alpha value, if specified.
	         * @type {String}
	         * @default 'rgba(0,0,0,0)'
	         */
	        tapHighlightColor: 'rgba(0,0,0,0)'
	    }
	};
	
	var STOP = 1;
	var FORCED_STOP = 2;
	
	/**
	 * Manager
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Manager(element, options) {
	    this.options = assign({}, Hammer.defaults, options || {});
	
	    this.options.inputTarget = this.options.inputTarget || element;
	
	    this.handlers = {};
	    this.session = {};
	    this.recognizers = [];
	    this.oldCssProps = {};
	
	    this.element = element;
	    this.input = createInputInstance(this);
	    this.touchAction = new TouchAction(this, this.options.touchAction);
	
	    toggleCssProps(this, true);
	
	    each(this.options.recognizers, function(item) {
	        var recognizer = this.add(new (item[0])(item[1]));
	        item[2] && recognizer.recognizeWith(item[2]);
	        item[3] && recognizer.requireFailure(item[3]);
	    }, this);
	}
	
	Manager.prototype = {
	    /**
	     * set options
	     * @param {Object} options
	     * @returns {Manager}
	     */
	    set: function(options) {
	        assign(this.options, options);
	
	        // Options that need a little more setup
	        if (options.touchAction) {
	            this.touchAction.update();
	        }
	        if (options.inputTarget) {
	            // Clean up existing event listeners and reinitialize
	            this.input.destroy();
	            this.input.target = options.inputTarget;
	            this.input.init();
	        }
	        return this;
	    },
	
	    /**
	     * stop recognizing for this session.
	     * This session will be discarded, when a new [input]start event is fired.
	     * When forced, the recognizer cycle is stopped immediately.
	     * @param {Boolean} [force]
	     */
	    stop: function(force) {
	        this.session.stopped = force ? FORCED_STOP : STOP;
	    },
	
	    /**
	     * run the recognizers!
	     * called by the inputHandler function on every movement of the pointers (touches)
	     * it walks through all the recognizers and tries to detect the gesture that is being made
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        var session = this.session;
	        if (session.stopped) {
	            return;
	        }
	
	        // run the touch-action polyfill
	        this.touchAction.preventDefaults(inputData);
	
	        var recognizer;
	        var recognizers = this.recognizers;
	
	        // this holds the recognizer that is being recognized.
	        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	        // if no recognizer is detecting a thing, it is set to `null`
	        var curRecognizer = session.curRecognizer;
	
	        // reset when the last recognizer is recognized
	        // or when we're in a new session
	        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
	            curRecognizer = session.curRecognizer = null;
	        }
	
	        var i = 0;
	        while (i < recognizers.length) {
	            recognizer = recognizers[i];
	
	            // find out if we are allowed try to recognize the input for this one.
	            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	            //      that is being recognized.
	            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	            //      this can be setup with the `recognizeWith()` method on the recognizer.
	            if (session.stopped !== FORCED_STOP && ( // 1
	                    !curRecognizer || recognizer == curRecognizer || // 2
	                    recognizer.canRecognizeWith(curRecognizer))) { // 3
	                recognizer.recognize(inputData);
	            } else {
	                recognizer.reset();
	            }
	
	            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	            // current active recognizer. but only if we don't already have an active recognizer
	            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	                curRecognizer = session.curRecognizer = recognizer;
	            }
	            i++;
	        }
	    },
	
	    /**
	     * get a recognizer by its event name.
	     * @param {Recognizer|String} recognizer
	     * @returns {Recognizer|Null}
	     */
	    get: function(recognizer) {
	        if (recognizer instanceof Recognizer) {
	            return recognizer;
	        }
	
	        var recognizers = this.recognizers;
	        for (var i = 0; i < recognizers.length; i++) {
	            if (recognizers[i].options.event == recognizer) {
	                return recognizers[i];
	            }
	        }
	        return null;
	    },
	
	    /**
	     * add a recognizer to the manager
	     * existing recognizers with the same event name will be removed
	     * @param {Recognizer} recognizer
	     * @returns {Recognizer|Manager}
	     */
	    add: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'add', this)) {
	            return this;
	        }
	
	        // remove existing
	        var existing = this.get(recognizer.options.event);
	        if (existing) {
	            this.remove(existing);
	        }
	
	        this.recognizers.push(recognizer);
	        recognizer.manager = this;
	
	        this.touchAction.update();
	        return recognizer;
	    },
	
	    /**
	     * remove a recognizer by name or instance
	     * @param {Recognizer|String} recognizer
	     * @returns {Manager}
	     */
	    remove: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'remove', this)) {
	            return this;
	        }
	
	        recognizer = this.get(recognizer);
	
	        // let's make sure this recognizer exists
	        if (recognizer) {
	            var recognizers = this.recognizers;
	            var index = inArray(recognizers, recognizer);
	
	            if (index !== -1) {
	                recognizers.splice(index, 1);
	                this.touchAction.update();
	            }
	        }
	
	        return this;
	    },
	
	    /**
	     * bind event
	     * @param {String} events
	     * @param {Function} handler
	     * @returns {EventEmitter} this
	     */
	    on: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }
	        if (handler === undefined) {
	            return;
	        }
	
	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            handlers[event] = handlers[event] || [];
	            handlers[event].push(handler);
	        });
	        return this;
	    },
	
	    /**
	     * unbind event, leave emit blank to remove all handlers
	     * @param {String} events
	     * @param {Function} [handler]
	     * @returns {EventEmitter} this
	     */
	    off: function(events, handler) {
	        if (events === undefined) {
	            return;
	        }
	
	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            if (!handler) {
	                delete handlers[event];
	            } else {
	                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
	            }
	        });
	        return this;
	    },
	
	    /**
	     * emit event to the listeners
	     * @param {String} event
	     * @param {Object} data
	     */
	    emit: function(event, data) {
	        // we also want to trigger dom events
	        if (this.options.domEvents) {
	            triggerDomEvent(event, data);
	        }
	
	        // no handlers, so skip it all
	        var handlers = this.handlers[event] && this.handlers[event].slice();
	        if (!handlers || !handlers.length) {
	            return;
	        }
	
	        data.type = event;
	        data.preventDefault = function() {
	            data.srcEvent.preventDefault();
	        };
	
	        var i = 0;
	        while (i < handlers.length) {
	            handlers[i](data);
	            i++;
	        }
	    },
	
	    /**
	     * destroy the manager and unbinds all events
	     * it doesn't unbind dom events, that is the user own responsibility
	     */
	    destroy: function() {
	        this.element && toggleCssProps(this, false);
	
	        this.handlers = {};
	        this.session = {};
	        this.input.destroy();
	        this.element = null;
	    }
	};
	
	/**
	 * add/remove the css properties as defined in manager.options.cssProps
	 * @param {Manager} manager
	 * @param {Boolean} add
	 */
	function toggleCssProps(manager, add) {
	    var element = manager.element;
	    if (!element.style) {
	        return;
	    }
	    var prop;
	    each(manager.options.cssProps, function(value, name) {
	        prop = prefixed(element.style, name);
	        if (add) {
	            manager.oldCssProps[prop] = element.style[prop];
	            element.style[prop] = value;
	        } else {
	            element.style[prop] = manager.oldCssProps[prop] || '';
	        }
	    });
	    if (!add) {
	        manager.oldCssProps = {};
	    }
	}
	
	/**
	 * trigger dom event
	 * @param {String} event
	 * @param {Object} data
	 */
	function triggerDomEvent(event, data) {
	    var gestureEvent = document.createEvent('Event');
	    gestureEvent.initEvent(event, true, true);
	    gestureEvent.gesture = data;
	    data.target.dispatchEvent(gestureEvent);
	}
	
	assign(Hammer, {
	    INPUT_START: INPUT_START,
	    INPUT_MOVE: INPUT_MOVE,
	    INPUT_END: INPUT_END,
	    INPUT_CANCEL: INPUT_CANCEL,
	
	    STATE_POSSIBLE: STATE_POSSIBLE,
	    STATE_BEGAN: STATE_BEGAN,
	    STATE_CHANGED: STATE_CHANGED,
	    STATE_ENDED: STATE_ENDED,
	    STATE_RECOGNIZED: STATE_RECOGNIZED,
	    STATE_CANCELLED: STATE_CANCELLED,
	    STATE_FAILED: STATE_FAILED,
	
	    DIRECTION_NONE: DIRECTION_NONE,
	    DIRECTION_LEFT: DIRECTION_LEFT,
	    DIRECTION_RIGHT: DIRECTION_RIGHT,
	    DIRECTION_UP: DIRECTION_UP,
	    DIRECTION_DOWN: DIRECTION_DOWN,
	    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	    DIRECTION_ALL: DIRECTION_ALL,
	
	    Manager: Manager,
	    Input: Input,
	    TouchAction: TouchAction,
	
	    TouchInput: TouchInput,
	    MouseInput: MouseInput,
	    PointerEventInput: PointerEventInput,
	    TouchMouseInput: TouchMouseInput,
	    SingleTouchInput: SingleTouchInput,
	
	    Recognizer: Recognizer,
	    AttrRecognizer: AttrRecognizer,
	    Tap: TapRecognizer,
	    Pan: PanRecognizer,
	    Swipe: SwipeRecognizer,
	    Pinch: PinchRecognizer,
	    Rotate: RotateRecognizer,
	    Press: PressRecognizer,
	
	    on: addEventListeners,
	    off: removeEventListeners,
	    each: each,
	    merge: merge,
	    extend: extend,
	    assign: assign,
	    inherit: inherit,
	    bindFn: bindFn,
	    prefixed: prefixed
	});
	
	// this prevents errors when Hammer is loaded in the presence of an AMD
	//  style loader but by script tag, not by the loader.
	var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
	freeGlobal.Hammer = Hammer;
	
	if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return Hammer;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module != 'undefined' && module.exports) {
	    module.exports = Hammer;
	} else {
	    window[exportName] = Hammer;
	}
	
	})(window, document, 'Hammer');


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 20 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }
]);
//# sourceMappingURL=app.js.map