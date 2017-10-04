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

var _reactNumberFormat = require('react-number-format');

var _reactNumberFormat2 = _interopRequireDefault(_reactNumberFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alternatekev/Dropbox/Projects/Community Funded/2.0/React Training/02-calculator-example/components/Total/index.js';


var Total = function (_React$Component) {
  (0, _inherits3.default)(Total, _React$Component);

  function Total() {
    (0, _classCallCheck3.default)(this, Total);

    return (0, _possibleConstructorReturn3.default)(this, (Total.__proto__ || (0, _getPrototypeOf2.default)(Total)).apply(this, arguments));
  }

  (0, _createClass3.default)(Total, [{
    key: 'render',
    value: function render() {

      var styles = {
        Total: (0, _extends3.default)({}, _tachyonsJs2.default.pa3, _tachyonsJs2.default.tr, _tachyonsJs2.default.f1, _tachyonsJs2.default.b, {
          borderBottom: '1px #CCC solid',
          color: '#738D99',
          backgroundColor: '#F7F7F7'
        })
      };

      return _react2.default.createElement('div', { className: 'Total', style: styles.Total, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, this.props.value === 0 ? _react2.default.createElement(_reactNumberFormat2.default, { thousandSeparator: true, value: this.props.lastValue, displayType: 'text', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }) : _react2.default.createElement(_reactNumberFormat2.default, { thousandSeparator: true, displayType: 'text', value: this.props.value, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }));
    }
  }]);

  return Total;
}(_react2.default.Component);

exports.default = Total;


Total.defaultProps = {
  value: 0
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG90YWwvaW5kZXguanMiXSwibmFtZXMiOlsidCIsIk51bWJlckZvcm1hdCIsIlRvdGFsIiwic3R5bGVzIiwicGEzIiwidHIiLCJmMSIsImIiLCJib3JkZXJCb3R0b20iLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsInByb3BzIiwidmFsdWUiLCJsYXN0VmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7SSxBQUVjOzs7Ozs7Ozs7Ozs2QkFRVixBQUVQOztVQUFNOzBDQUVDLHFCQURMLEFBQ08sS0FDRixxQkFGTCxBQUVPLElBQ0YscUJBSEwsQUFHTyxJQUNGLHFCQUpMLEFBSU87d0JBSlAsQUFLZ0IsQUFDZDtpQkFORixBQU1TLEFBQ1A7MkJBUkosQUFBZSxBQUNiLEFBT21CLEFBSXJCO0FBTkk7QUFOVyxBQUNiOzs2QkFZQSxjQUFBLFNBQUssV0FBTCxBQUFlLFNBQVEsT0FBUSxPQUEvQixBQUFzQztvQkFBdEM7c0JBQUEsQUFBZ0Q7QUFBaEQ7T0FBQSxPQUFnRCxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLG9CQUFJLEFBQUMsNkNBQWEsbUJBQWQsTUFBZ0MsT0FBTyxLQUFBLEFBQUssTUFBNUMsQUFBa0QsV0FBVyxhQUE3RCxBQUF5RTtvQkFBekU7c0JBQXpCLEFBQXlCO0FBQUE7T0FBQSxvQkFBcUYsQUFBQyw2Q0FBYSxtQkFBZCxNQUFnQyxhQUFoQyxBQUE0QyxRQUFPLE9BQU8sS0FBQSxBQUFLLE1BQS9ELEFBQXFFO29CQUFyRTtzQkFEaEssQUFDRSxBQUE4SixBQUVqSztBQUZpSztPQUFBOzs7OztFQXZCakksZ0IsQUFBTTs7a0JBQXBCLEE7OztBQTRCckIsTUFBQSxBQUFNO1NBQU4sQUFBcUIsQUFDWjtBQURZLEFBQ25CIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbHRlcm5hdGVrZXYvRHJvcGJveC9Qcm9qZWN0cy9Db21tdW5pdHkgRnVuZGVkLzIuMC9SZWFjdCBUcmFpbmluZy8wMi1jYWxjdWxhdG9yLWV4YW1wbGUifQ==