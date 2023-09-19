import React from 'react';

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
    return (React.createElement("div", { "data-testid": "test-component", className: "test-component" },
        React.createElement("h1", { "data-testid": "test-component__heading", className: "heading" }, heading),
        React.createElement("div", { "data-testid": "test-component__content" }, content)));
};

export { TestComponent };
//# sourceMappingURL=index.esm.js.map
