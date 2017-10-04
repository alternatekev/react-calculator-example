webpackHotUpdate(5,{

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(30);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(31);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(55);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(59);

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(134);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

var _tachyonsJs = __webpack_require__(553);

var _tachyonsJs2 = _interopRequireDefault(_tachyonsJs);

var _ListItem = __webpack_require__(561);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/alternatekev/Dropbox/Projects/Community Funded/2.0/React Training/02-calculator-example/components/TotalsHistory/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/alternatekev/Dropbox/Projects/Community Funded/2.0/React Training/02-calculator-example/components/TotalsHistory/index.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hOGNlOTljNjgzYzVmZTUwN2U4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub3RhbHNIaXN0b3J5L2luZGV4LmpzP2RiZTEwOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHQgZnJvbSAndGFjaHlvbnMtanMnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4vTGlzdEl0ZW0nO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIFRvdGFsc0hpc3Rvcnk6IHtcbiAgICAuLi50LmZsZXgsXG4gICAgLi4udC5mbGV4X2NvbHVtbixcbiAgICAuLi50Lmp1c3RpZnlfY2VudGVyLFxuICAgIC4uLnQuaXRlbXNfY2VudGVyLFxuICAgIGNvbG9yOiAnIzczOEQ5OScsXG4gICAgZmxleDogMSxcbiAgICBoZWlnaHQ6IDM0NSxcbiAgICB3aWR0aDogMTAwLFxuICAgIGJvcmRlclJpZ2h0OiAnMXB4ICNDQ0Mgc29saWQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuICB9LFxuICBUb3RhbHNIaXN0b3J5TGlzdDoge1xuICAgIC4uLnQuZmxleCxcbiAgICAuLi50LmZsZXhfY29sdW1uLFxuICAgIC4uLnQuanVzdGlmeV9zdGFydCxcbiAgICAuLi50Lml0ZW1zX3N0YXJ0LFxuICAgIC4uLnQub3ZlcmZsb3dfc2Nyb2xsLFxuICAgIGNvbG9yOiAnIzczOEQ5OScsXG4gICAgZmxleDogMSxcbiAgICBoZWlnaHQ6IDM0NSxcbiAgICB3aWR0aDogMTAwLFxuICAgIGJvcmRlclJpZ2h0OiAnMXB4ICNDQ0Mgc29saWQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdGFsc0hpc3RvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBwcm9wVHlwZXM6IHtcbiAgICB2YWx1ZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgfVxuXG4gIHNob3dIaXN0b3J5ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnZhbHVlcy5tYXAoICggdmFsdWUsIGluZGV4ICkgPT4gKFxuICAgICAgPExpc3RJdGVtIHZhbHVlPXsgdmFsdWUgfSAvPlxuICAgICkgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRvdGFsc0hpc3RvcnlcIiBzdHlsZT17IHRoaXMucHJvcHMudmFsdWVzLmxlbmd0aCA9PSAwID8gIHN0eWxlcy5Ub3RhbHNIaXN0b3J5IDogc3R5bGVzLlRvdGFsc0hpc3RvcnlMaXN0IH0+eyB0aGlzLnByb3BzLnZhbHVlcy5sZW5ndGggPT09IDAgPyA8c3BhbiBjbGFzc05hbWU9XCJlbXB0eVwiPk5vIEhpc3Rvcnk8L3NwYW4+IDogdGhpcy5zaG93SGlzdG9yeSgpIH08L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1RvdGFsc0hpc3RvcnkvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFQQTtBQVFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7QUFsQkE7QUFDQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFiQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==