'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tachyonsJs = require('tachyons-js');

var _tachyonsJs2 = _interopRequireDefault(_tachyonsJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alternatekev/Dropbox/Projects/Community Funded/2.0/React Training/02-calculator-example/components/Button/index.js';


var Button = function (_React$Component) {
  (0, _inherits3.default)(Button, _React$Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      _this.props.onClick(e, _this.props);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Button, [{
    key: 'render',
    value: function render() {
      var styles = {
        Button: (0, _extends3.default)({}, _tachyonsJs2.default.dib, _tachyonsJs2.default.br2, _tachyonsJs2.default.pt2, _tachyonsJs2.default.pb2, _tachyonsJs2.default.f1, _tachyonsJs2.default.ma1, _tachyonsJs2.default.outline_0, {
          width: 25 * this.props.flex + '%',
          'cursor': 'pointer',
          color: this.props.operator ? '#FFF' : '#738D99',
          backgroundColor: this.props.operator ? '#F5A623' : '#FFF',
          border: this.props.operator ? 'transparent' : '1px #A5BEC9 solid'
        })
      };

      return _react2.default.createElement('button', { onClick: this.onClick, className: 'Button', style: styles.Button, __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, this.props.label);
    }
  }]);

  return Button;
}(_react2.default.Component);

exports.default = Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQnV0dG9uL2luZGV4LmpzIl0sIm5hbWVzIjpbInQiLCJCdXR0b24iLCJvbkNsaWNrIiwiZSIsInByb3BzIiwic3R5bGVzIiwiZGliIiwiYnIyIiwicHQyIiwicGIyIiwiZjEiLCJtYTEiLCJvdXRsaW5lXzAiLCJ3aWR0aCIsImZsZXgiLCJjb2xvciIsIm9wZXJhdG9yIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwibGFiZWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztJLEFBR2M7Ozs7Ozs7Ozs7Ozs7OzRNLEFBT25CLFVBQVUsVUFBQSxBQUFFLEdBQU8sQUFDakI7WUFBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW9CLEdBQUcsTUFBdkIsQUFBNEIsQUFDN0I7QTs7Ozs7NkJBRVEsQUFDUDtVQUFNOzJDQUVDLHFCQURMLEFBQ08sS0FDRixxQkFGTCxBQUVPLEtBQ0YscUJBSEwsQUFHTyxLQUNGLHFCQUpMLEFBSU8sS0FDRixxQkFMTCxBQUtPLElBQ0YscUJBTkwsQUFNTyxLQUNGLHFCQVBMLEFBT087aUJBQ00sS0FBSyxLQUFBLEFBQUssTUFBckIsQUFBMkIsT0FSN0IsQUFTRTtvQkFURixBQVNZLEFBQ1Y7aUJBQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLFNBVi9CLEFBVXdDLEFBQ3RDOzJCQUFpQixLQUFBLEFBQUssTUFBTCxBQUFXLFdBQVgsQUFBc0IsWUFYekMsQUFXcUQsQUFDbkQ7a0JBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLGdCQWJsQyxBQUFlLEFBQ2IsQUFZZ0QsQUFJbEQ7QUFSSTtBQVRXLEFBQ2I7OzZCQWlCQSxjQUFBLFlBQVEsU0FBVSxLQUFsQixBQUF1QixTQUFVLFdBQWpDLEFBQTJDLFVBQVMsT0FBUSxPQUE1RCxBQUFtRTtvQkFBbkU7c0JBQUEsQUFBOEU7QUFBOUU7T0FBQSxPQUE4RSxBQUFLLE1BRHJGLEFBQ0UsQUFBeUYsQUFFNUY7Ozs7O0VBaENpQyxnQkFBTSxBOztrQkFBckIsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWx0ZXJuYXRla2V2L0Ryb3Bib3gvUHJvamVjdHMvQ29tbXVuaXR5IEZ1bmRlZC8yLjAvUmVhY3QgVHJhaW5pbmcvMDItY2FsY3VsYXRvci1leGFtcGxlIn0=