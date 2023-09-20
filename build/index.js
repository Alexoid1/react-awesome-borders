'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Border(_a) {
    var children = _a.children;
    var wrapper = {
        marginInline: "auto"
    };
    var cardLineLeft = {
        position: "absolute",
        animation: "1s 1s linear infinite",
        animationName: "to-top",
        background: "linear-gradient(to bottom, #2bd9e9, trasparent)",
        left: "0px",
        bottom: "-100%",
        width: "0.2em",
        height: "100%"
    };
    var cardLineRight = {
        position: "absolute",
        animation: "1s 1s linear infinite",
        animationName: "to-bottom",
        background: "linear-gradient(to bottom, trasparent, #2bd9e9)",
        right: "0px",
        top: "-100%",
        width: "0.2em",
        height: "100%"
    };
    var cardLineTop = {
        position: "absolute",
        animation: "1s 1s linear infinite",
        animationName: "to-right",
        background: "linear-gradient(to right, trasparent, #2bd9e9)",
        top: "0px",
        width: "100%",
        height: "0.2em",
        left: "-100%"
    };
    var cardLineBottom = {
        position: "absolute",
        animation: "1s 1s linear infinite",
        animationName: "to-left",
        background: "linear-gradient(to right, #2bd9e9, transparent)",
        bottom: "0px",
        right: "-100%",
        width: "100%",
        height: "0.2em"
    };
    return (React__namespace.createElement("div", { style: wrapper },
        React__namespace.createElement("div", { "aria-hidden": "true" },
            React__namespace.createElement("span", { style: cardLineLeft }),
            React__namespace.createElement("span", { style: cardLineRight }),
            children,
            React__namespace.createElement("span", { style: cardLineTop }),
            React__namespace.createElement("span", { style: cardLineBottom, className: "card_line card_line_bottom" }))));
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".test-component {\n  background-color: var(--background);\n  color: var(--font-color);\n  border: 1px solid var(--harvey-black);\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n}\n\n.test-component .heading {\n  font-size: var(--heading-font-size);\n}";
styleInject(css_248z);

var TestComponent = function (_a) {
    var heading = _a.heading, content = _a.content;
    return (React__default["default"].createElement(Border, null,
        React__default["default"].createElement("div", { "data-testid": "test-component", className: "test-component" },
            React__default["default"].createElement("h1", { "data-testid": "test-component__heading", className: "heading" }, heading),
            React__default["default"].createElement("div", { "data-testid": "test-component__content" }, content))));
};

exports.TestComponent = TestComponent;
//# sourceMappingURL=index.js.map
