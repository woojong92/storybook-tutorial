import { jsx, css } from '@emotion/core';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      height: 3rem;\n      font-size: 1.125rem;\n      padding: 0 1.5rem;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      height: 2.5rem;\n      font-size: 1rem;\n      padding: 0 1rem;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      height: 1.75rem;\n      font-size: 0.75rem;\n      padding: 0 0.875rem;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      background: none;\n      color: #20c997;\n      &:hover {\n        background: #e6fcf5;\n      }\n      &:active {\n        background: #c3fae8;\n      }\n      &:disabled {\n        color: #bcd9d0;\n    }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      background: #e9ecef;\n      color: #343a40;\n      &:hover {\n        background: #f1f3f5;\n      }\n      &:active {\n        background: #dee2e6;\n      }\n      &:disabled {\n        color: #c6d3e1;\n    }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      background: #20c997;\n      color: white;\n      &:hover {\n        background: #38d9a9;\n      }\n      &:active {\n        background: #12b886;\n      }\n      &:disabled {\n        background: #aed9cc;\n    }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  outline: none;\n  border: none;\n  box-sizing: border-box;\n  height: 2rem;\n  font-size: 0.875rem;\n  padding: 0.5rem 1rem;\n  background: #20c997;\n  color: white;\n  border-radius: 0.25rem;\n  line-height: 1;\n  font-weight: 600;\n  &:focus {\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);\n  }\n  &:hover {\n    background: #38d9a9;\n  }\n  &:active {\n    background: #12b886;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
// 이 타입은 children으로 들어올 수 있는 모든 값을 허용

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
function Button(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      size = _ref.size,
      disabled = _ref.disabled,
      width = _ref.width,
      onClick = _ref.onClick;
  return jsx("button", {
    css: [style, themes[theme], sizes[size], {
      width: width
    }],
    disabled: disabled,
    onClick: onClick
  }, children);
}
Button.defaultProps = {
  theme: 'primary',
  size: 'medium'
};
var style = css(_templateObject());
var themes = {
  primary: css(_templateObject2()),
  secondary: css(_templateObject3()),
  tertiary: css(_templateObject4())
};
var sizes = {
  small: css(_templateObject5()),
  medium: css(_templateObject6()),
  big: css(_templateObject7())
};

export { Button };
