'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tachyonsJs = require('tachyons-js');

var _tachyonsJs2 = _interopRequireDefault(_tachyonsJs);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alternatekev/Dropbox/Projects/Community Funded/2.0/React Training/02-calculator-example/components/TotalsHistory/index.js';


var styles = {
  TotalsHistory: (0, _extends3.default)({}, _tachyonsJs2.default.flex, _tachyonsJs2.default.flex_column, _tachyonsJs2.default.justify_center, _tachyonsJs2.default.items_center, {
    color: '#738D99',
    flex: 1,
    height: 345,
    width: 100,
    borderRight: '1px #CCC solid',
    backgroundColor: '#F7F7F7'
  }),
  TotalsHistoryList: (0, _extends3.default)({}, _tachyonsJs2.default.flex, _tachyonsJs2.default.flex_column, _tachyonsJs2.default.justify_start, _tachyonsJs2.default.items_start, _tachyonsJs2.default.overflow_scroll, {
    color: '#738D99',
    flex: 1,
    height: 345,
    width: 100,
    borderRight: '1px #CCC solid',
    backgroundColor: '#F7F7F7'
  })
};

var TotalsHistory = function (_React$Component) {
  (0, _inherits3.default)(TotalsHistory, _React$Component);

  function TotalsHistory() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TotalsHistory);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TotalsHistory.__proto__ || (0, _getPrototypeOf2.default)(TotalsHistory)).call.apply(_ref, [this].concat(args))), _this), _this.showHistory = function () {
      return _this.props.values.map(function (value, index) {
        return _react2.default.createElement(_ListItem2.default, { value: value, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        });
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TotalsHistory, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'TotalsHistory', style: this.props.values.length == 0 ? styles.TotalsHistory : styles.TotalsHistoryList, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, this.props.values.length === 0 ? _react2.default.createElement('span', { className: 'empty', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'No History') : this.showHistory());
    }
  }]);

  return TotalsHistory;
}(_react2.default.Component);

exports.default = TotalsHistory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG90YWxzSGlzdG9yeS9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0IiwiTGlzdEl0ZW0iLCJzdHlsZXMiLCJUb3RhbHNIaXN0b3J5IiwiZmxleCIsImZsZXhfY29sdW1uIiwianVzdGlmeV9jZW50ZXIiLCJpdGVtc19jZW50ZXIiLCJjb2xvciIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyUmlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJUb3RhbHNIaXN0b3J5TGlzdCIsImp1c3RpZnlfc3RhcnQiLCJpdGVtc19zdGFydCIsIm92ZXJmbG93X3Njcm9sbCIsInNob3dIaXN0b3J5IiwicHJvcHMiLCJ2YWx1ZXMiLCJtYXAiLCJ2YWx1ZSIsImluZGV4IiwibGVuZ3RoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTTs0Q0FFQyxxQkFETCxBQUNPLE1BQ0YscUJBRkwsQUFFTyxhQUNGLHFCQUhMLEFBR08sZ0JBQ0YscUJBSkwsQUFJTztXQUpQLEFBS1MsQUFDUDtVQU5GLEFBTVEsQUFDTjtZQVBGLEFBT1UsQUFDUjtXQVJGLEFBUVMsQUFDUDtpQkFURixBQVNlLEFBQ2I7cUJBWFcsQUFDYixBQVVtQixBQUVuQjtBQVBFO2dEQVFHLHFCQURMLEFBQ08sTUFDRixxQkFGTCxBQUVPLGFBQ0YscUJBSEwsQUFHTyxlQUNGLHFCQUpMLEFBSU8sYUFDRixxQkFMTCxBQUtPO1dBTFAsQUFNUyxBQUNQO1VBUEYsQUFPUSxBQUNOO1lBUkYsQUFRVSxBQUNSO1dBVEYsQUFTUyxBQUNQO2lCQVZGLEFBVWUsQUFDYjtxQkF4QkosQUFBZSxBQWFiLEFBV21CO0FBTGpCO0FBbkJXLEFBQ2I7O0ksQUEyQm1COzs7Ozs7Ozs7Ozs7OzswTkFLbkIsQSxjQUFjLFlBQU0sQUFDbEI7bUJBQU8sQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixJQUFLLFVBQUEsQUFBRSxPQUFGLEFBQVMsT0FBVDsrQkFDNUIsQUFBQyxvQ0FBUyxPQUFWLEFBQWtCO3NCQUFsQjt3QkFENEIsQUFDNUI7QUFBQTtTQUFBO0FBREYsQUFBTyxBQUdSLE9BSFE7QTs7Ozs7NkJBS0EsQUFDUDs2QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlLGlCQUFnQixPQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBWCxBQUFrQixVQUFsQixBQUE0QixJQUFLLE9BQWpDLEFBQXdDLGdCQUFnQixPQUEvRixBQUFzRztvQkFBdEc7c0JBQUEsQUFBNEg7QUFBNUg7T0FBQSxPQUE0SCxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLFdBQWxCLEFBQTZCLG9CQUFJLGNBQUEsVUFBTSxXQUFOLEFBQWdCO29CQUFoQjtzQkFBQTtBQUFBO09BQUEsRUFBakMsQUFBaUMsZ0JBQTRDLEtBRDNNLEFBQ0UsQUFBeU0sQUFBSyxBQUVqTjs7Ozs7RUFmd0MsZ0JBQU0sQTs7a0JBQTVCLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsdGVybmF0ZWtldi9Ecm9wYm94L1Byb2plY3RzL0NvbW11bml0eSBGdW5kZWQvMi4wL1JlYWN0IFRyYWluaW5nLzAyLWNhbGN1bGF0b3ItZXhhbXBsZSJ9