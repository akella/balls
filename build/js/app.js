/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mouse = __webpack_require__(2);\n\nvar _mouse2 = _interopRequireDefault(_mouse);\n\nvar _ball = __webpack_require__(3);\n\nvar _ball2 = _interopRequireDefault(_ball);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar canvas = document.getElementById(\"drawOnMe\");\nvar ctx = canvas.getContext(\"2d\");\nvar pos = new _mouse2.default(canvas);\nvar balls = [];\n\nvar mouse = new _ball2.default(0, 0, 30, \"green\");\n\nfor (var i = 0; i < 50; i++) {\n\tballs.push(new _ball2.default(200 + 100 * Math.cos(i * 2 * Math.PI / 50), 200 + 100 * Math.sin(i * 2 * Math.PI / 50)));\n}\n\nfunction ConnectDots(balls) {\n\tctx.beginPath();\n\tctx.moveTo(balls[0].x, balls[0].y);\n\tballs.forEach(function (ball) {\n\t\tctx.lineTo(ball.x, ball.y);\n\t});\n\n\tctx.closePath();\n\tctx.fill();\n}\n\nfunction ConnectDots1(dots) {\n\tctx.beginPath();\n\n\tfor (var i = 0, jlen = dots.length; i <= jlen; ++i) {\n\t\tvar p0 = dots[i + 0 >= jlen ? i + 0 - jlen : i + 0];\n\t\tvar p1 = dots[i + 1 >= jlen ? i + 1 - jlen : i + 1];\n\t\tctx.quadraticCurveTo(p0.x, p0.y, (p0.x + p1.x) * 0.5, (p0.y + p1.y) * 0.5);\n\t}\n\n\tctx.closePath();\n\tctx.stroke();\n}\n\nfunction Render() {\n\twindow.requestAnimationFrame(Render);\n\tctx.clearRect(0, 0, 600, 600);\n\n\tmouse.setPos(pos.x, pos.y);\n\tmouse.draw(ctx);\n\n\tballs.forEach(function (ball) {\n\t\tball.think(pos);\n\t\t// ball.draw(ctx);\n\t});\n\tConnectDots1(balls);\n}\n\nRender();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdXNlIGZyb20gXCIuL21vdXNlXCI7XG5pbXBvcnQgQmFsbCBmcm9tIFwiLi9iYWxsXCI7XG5cbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyYXdPbk1lXCIpO1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5sZXQgcG9zID0gbmV3IE1vdXNlKGNhbnZhcyk7XG5sZXQgYmFsbHMgPSBbXTtcblxubGV0IG1vdXNlID0gbmV3IEJhbGwoMCwgMCwgMzAsIFwiZ3JlZW5cIik7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgNTA7IGkrKykge1xuXHRiYWxscy5wdXNoKFxuXHRcdG5ldyBCYWxsKFxuXHRcdFx0MjAwICsgMTAwICogTWF0aC5jb3MoaSAqIDIgKiBNYXRoLlBJIC8gNTApLFxuXHRcdFx0MjAwICsgMTAwICogTWF0aC5zaW4oaSAqIDIgKiBNYXRoLlBJIC8gNTApXG5cdFx0KVxuXHQpO1xufVxuXG5mdW5jdGlvbiBDb25uZWN0RG90cyhiYWxscykge1xuXHRjdHguYmVnaW5QYXRoKCk7XG5cdGN0eC5tb3ZlVG8oYmFsbHNbMF0ueCwgYmFsbHNbMF0ueSk7XG5cdGJhbGxzLmZvckVhY2goYmFsbCA9PiB7XG5cdFx0Y3R4LmxpbmVUbyhiYWxsLngsIGJhbGwueSk7XG5cdH0pO1xuXG5cdGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xufVxuXG5mdW5jdGlvbiBDb25uZWN0RG90czEoZG90cykge1xuXHRjdHguYmVnaW5QYXRoKCk7XG5cblx0Zm9yICh2YXIgaSA9IDAsIGpsZW4gPSBkb3RzLmxlbmd0aDsgaSA8PSBqbGVuOyArK2kpIHtcblx0XHR2YXIgcDAgPSBkb3RzW2kgKyAwID49IGpsZW4gPyBpICsgMCAtIGpsZW4gOiBpICsgMF07XG5cdFx0dmFyIHAxID0gZG90c1tpICsgMSA+PSBqbGVuID8gaSArIDEgLSBqbGVuIDogaSArIDFdO1xuXHRcdGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHAwLngsIHAwLnksIChwMC54ICsgcDEueCkgKiAwLjUsIChwMC55ICsgcDEueSkgKiAwLjUpO1xuXHR9XG5cblx0Y3R4LmNsb3NlUGF0aCgpO1xuXHRjdHguc3Ryb2tlKCk7XG59XG5cbmZ1bmN0aW9uIFJlbmRlcigpIHtcblx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShSZW5kZXIpO1xuXHRjdHguY2xlYXJSZWN0KDAsIDAsIDYwMCwgNjAwKTtcblxuXHRtb3VzZS5zZXRQb3MocG9zLngsIHBvcy55KTtcblx0bW91c2UuZHJhdyhjdHgpO1xuXG5cdGJhbGxzLmZvckVhY2goYmFsbCA9PiB7XG5cdFx0YmFsbC50aGluayhwb3MpO1xuXHRcdC8vIGJhbGwuZHJhdyhjdHgpO1xuXHR9KTtcbiAgICBDb25uZWN0RG90czEoYmFsbHMpO1xufVxuXG5SZW5kZXIoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Mouse = function Mouse(canvas) {\n\tvar _this = this;\n\n\t_classCallCheck(this, Mouse);\n\n\tthis.x = 0;\n\tthis.y = 0;\n\tvar rect = canvas.getBoundingClientRect();\n\n\tcanvas.onmousemove = function (e) {\n\t\t_this.x = e.clientX - rect.left;\n\t\t_this.y = e.clientY - rect.top;\n\t};\n};\n\nexports.default = Mouse;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbW91c2UuanM/ZTVlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZSB7XG5cdGNvbnN0cnVjdG9yKGNhbnZhcykge1xuXHRcdHRoaXMueCA9IDA7XG5cdFx0dGhpcy55ID0gMDtcbiAgICAgICAgdmFyIHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRjYW52YXMub25tb3VzZW1vdmUgPSBlID0+IHtcblx0XHRcdHRoaXMueCA9IGUuY2xpZW50WCAtIHJlY3QubGVmdDtcblx0XHRcdHRoaXMueSA9IGUuY2xpZW50WSAtIHJlY3QudG9wO1xuXHRcdH07XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvbW91c2UuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Ball = function () {\n    function Ball(x, y, radius, color) {\n        _classCallCheck(this, Ball);\n\n        this.x = x || 0;\n        this.y = y || 0;\n\n        this.originalX = x || 0;\n        this.originalY = y || 0;\n        this.vx = 0;\n        this.vy = 0;\n        this.radius = radius || 2;\n        this.color = color || \"#ff6600\";\n        this.friction = 1;\n        this.springFactor = 0.1;\n    }\n\n    _createClass(Ball, [{\n        key: \"setPos\",\n        value: function setPos(x, y) {\n            this.x = x;\n            this.y = y;\n        }\n    }, {\n        key: \"think\",\n        value: function think(mouse) {\n            var dx = this.x - mouse.x;\n            var dy = this.y - mouse.y;\n\n            var dist = Math.sqrt(dx * dx + dy * dy);\n            // interaction\n            if (dist < 30) {\n                var angle = Math.atan2(dy, dx);\n                var tx = mouse.x + Math.cos(angle) * 30;\n                var ty = mouse.y + Math.sin(angle) * 30;\n\n                this.vx += tx - this.x;\n                this.vy += ty - this.y;\n            }\n\n            // spring back\n            var dx1 = -(this.x - this.originalX);\n            var dy1 = -(this.y - this.originalY);\n\n            this.vx += dx1 * this.springFactor;\n            this.vy += dy1 * this.springFactor;\n\n            // friction\n            this.vx *= this.friction;\n            this.vy *= this.friction;\n\n            // actual move\n            this.x += this.vx;\n            this.y += this.vy;\n        }\n    }, {\n        key: \"draw\",\n        value: function draw(ctx) {\n            ctx.save();\n            ctx.beginPath();\n            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);\n            ctx.fillStyle = this.color;\n            ctx.fill();\n            ctx.closePath();\n            ctx.restore();\n        }\n    }]);\n\n    return Ball;\n}();\n\nexports.default = Ball;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYmFsbC5qcz8wZDM0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGwge1xuXHRjb25zdHJ1Y3Rvcih4LCB5LCByYWRpdXMsIGNvbG9yKSB7XG5cdFx0dGhpcy54ID0geCB8fCAwO1xuXHRcdHRoaXMueSA9IHkgfHwgMDtcblxuICAgICAgICB0aGlzLm9yaWdpbmFsWCA9IHggfHwgMDtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFkgPSB5IHx8IDA7XG4gICAgICAgIHRoaXMudnggPSAwO1xuICAgICAgICB0aGlzLnZ5ID0gMDtcblx0XHR0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAyO1xuXHRcdHRoaXMuY29sb3IgPSBjb2xvciB8fCBcIiNmZjY2MDBcIjtcbiAgICAgICAgdGhpcy5mcmljdGlvbiA9IDE7XG4gICAgICAgIHRoaXMuc3ByaW5nRmFjdG9yID0gMC4xO1xuXHR9XG4gICAgc2V0UG9zKHgseSl7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuICAgIHRoaW5rKG1vdXNlKXtcbiAgICAgICAgbGV0IGR4ID0gdGhpcy54IC0gbW91c2UueDtcbiAgICAgICAgbGV0IGR5ID0gdGhpcy55IC0gbW91c2UueTtcblxuICAgICAgICBsZXQgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSk7XG4gICAgICAgIC8vIGludGVyYWN0aW9uXG4gICAgICAgIGlmKGRpc3Q8MzApe1xuICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihkeSxkeCk7XG4gICAgICAgICAgICBsZXQgdHggPSBtb3VzZS54ICsgTWF0aC5jb3MoYW5nbGUpICogMzA7XG4gICAgICAgICAgICBsZXQgdHkgPSBtb3VzZS55ICsgTWF0aC5zaW4oYW5nbGUpICogMzA7XG5cbiAgICAgICAgICAgIHRoaXMudnggKz0gdHggLSB0aGlzLng7XG4gICAgICAgICAgICB0aGlzLnZ5ICs9IHR5IC0gdGhpcy55O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3ByaW5nIGJhY2tcbiAgICAgICAgbGV0IGR4MSA9IC0odGhpcy54IC0gdGhpcy5vcmlnaW5hbFgpO1xuICAgICAgICBsZXQgZHkxID0gLSh0aGlzLnkgLSB0aGlzLm9yaWdpbmFsWSk7XG5cbiAgICAgICAgdGhpcy52eCArPSBkeDEgKiB0aGlzLnNwcmluZ0ZhY3RvcjtcbiAgICAgICAgdGhpcy52eSArPSBkeTEgKiB0aGlzLnNwcmluZ0ZhY3RvcjtcblxuICAgICAgICBcbiAgICAgICAgLy8gZnJpY3Rpb25cbiAgICAgICAgdGhpcy52eCAqPSB0aGlzLmZyaWN0aW9uO1xuICAgICAgICB0aGlzLnZ5ICo9IHRoaXMuZnJpY3Rpb247XG5cbiAgICAgICAgLy8gYWN0dWFsIG1vdmVcbiAgICAgICAgdGhpcy54ICs9IHRoaXMudng7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZ5O1xuICAgIH1cblxuXHRkcmF3KGN0eCkge1xuXHRcdGN0eC5zYXZlKCk7XG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG5cdFx0Y3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG5cdFx0Y3R4LmZpbGwoKTtcblx0XHRjdHguY2xvc2VQYXRoKCk7XG5cdFx0Y3R4LnJlc3RvcmUoKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9iYWxsLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUExREEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);