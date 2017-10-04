'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Total = require('../Total');

var _Total2 = _interopRequireDefault(_Total);

var _TotalsHistory = require('../TotalsHistory');

var _TotalsHistory2 = _interopRequireDefault(_TotalsHistory);

var _Keyboard = require('../Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _tachyonsJs = require('tachyons-js');

var _tachyonsJs2 = _interopRequireDefault(_tachyonsJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alternatekev/Dropbox/Projects/Community Funded/2.0/React Training/02-calculator-example/components/Calculator/index.js';


var styles = {
  Calculator: (0, _extends3.default)({}, _tachyonsJs2.default.flex, _tachyonsJs2.default.flex_column, _tachyonsJs2.default.br4, _tachyonsJs2.default.shadow_2, _tachyonsJs2.default.overflow_hidden, {
    height: 420,
    width: 450,
    backgroundColor: '#FFF',
    border: '1px #CCC solid'
  }),
  Main: (0, _extends3.default)({}, _tachyonsJs2.default.flex)
};

var Calculator = function (_React$Component) {
  (0, _inherits3.default)(Calculator, _React$Component);

  function Calculator(props) {
    (0, _classCallCheck3.default)(this, Calculator);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Calculator.__proto__ || (0, _getPrototypeOf2.default)(Calculator)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      currentValue: 0,
      savedValue: 0,
      lastValue: 0,
      operator: null,
      operated: false,
      valuesHistory: [],
      showHistory: true
    };
    return _this;
  }

  (0, _createClass3.default)(Calculator, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'Calculator', style: styles.Calculator, __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement(_Total2.default, {
        hasToolbar: true,
        showHistory: this.state.showHistory,
        lastValue: this.state.lastValue,
        value: this.state.currentValue,
        operator: this.state.operator, __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }), _react2.default.createElement('div', { className: 'Main', style: styles.Main, __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react2.default.createElement(_TotalsHistory2.default, {
        show: this.state.showHistory,
        values: this.state.valuesHistory, __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), _react2.default.createElement(_Keyboard2.default, {
        numberClick: this.numberClick,
        operatorClick: this.operatorClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      })));
    }
  }]);

  return Calculator;
}(_react2.default.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.numberClick = function (e, props) {
    if (_this2.state.currentValue == 0) {
      _this2.setState({
        currentValue: '' + props.label
      });
    } else {
      _this2.setState({
        currentValue: '' + _this2.state.currentValue + props.label
      });
    }
  };

  this.operatorClick = function (e, props) {
    if (props.label != '=') {
      if (_this2.state.operator === null) {
        _this2.setState({
          operator: props.label,
          lastValue: _this2.state.currentValue,
          currentValue: 0
        });
      }
    } else {
      var value = void 0,
          valuesHistory = void 0;

      switch (_this2.state.operator) {
        case '+':
          value = Number(_this2.state.currentValue) + Number(_this2.state.lastValue);
          valuesHistory = (0, _assign2.default)([], _this2.state.valuesHistory);
          valuesHistory.unshift(value);

          _this2.setState({
            currentValue: 0,
            lastValue: value,
            operator: null,
            valuesHistory: valuesHistory
          });

          break;
        case '÷':
          value = Number(_this2.state.lastValue) / Number(_this2.state.currentValue);
          valuesHistory = (0, _assign2.default)([], _this2.state.valuesHistory);
          valuesHistory.unshift(value);

          _this2.setState({
            currentValue: 0,
            lastValue: value,
            operator: null,
            valuesHistory: valuesHistory
          });

          break;
        case 'x':
          value = Number(_this2.state.lastValue) * Number(_this2.state.currentValue);
          valuesHistory = (0, _assign2.default)([], _this2.state.valuesHistory);
          valuesHistory.unshift(value);

          _this2.setState({
            currentValue: 0,
            lastValue: value,
            operator: null,
            valuesHistory: valuesHistory
          });

          break;
        case '-':
          value = Number(_this2.state.lastValue) - Number(_this2.state.currentValue);
          valuesHistory = (0, _assign2.default)([], _this2.state.valuesHistory);
          valuesHistory.unshift(value);

          _this2.setState({
            currentValue: 0,
            lastValue: value,
            operator: null,
            valuesHistory: valuesHistory
          });

          break;
      }
    }
  };
};

exports.default = Calculator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FsY3VsYXRvci9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdERPTSIsIlRvdGFsIiwiVG90YWxzSGlzdG9yeSIsIktleWJvYXJkIiwidCIsInN0eWxlcyIsIkNhbGN1bGF0b3IiLCJmbGV4IiwiZmxleF9jb2x1bW4iLCJicjQiLCJzaGFkb3dfMiIsIm92ZXJmbG93X2hpZGRlbiIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiTWFpbiIsInByb3BzIiwic3RhdGUiLCJjdXJyZW50VmFsdWUiLCJzYXZlZFZhbHVlIiwibGFzdFZhbHVlIiwib3BlcmF0b3IiLCJvcGVyYXRlZCIsInZhbHVlc0hpc3RvcnkiLCJzaG93SGlzdG9yeSIsIm51bWJlckNsaWNrIiwib3BlcmF0b3JDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZSIsInNldFN0YXRlIiwibGFiZWwiLCJ2YWx1ZSIsIk51bWJlciIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU07eUNBRUMscUJBREwsQUFDTyxNQUNGLHFCQUZMLEFBRU8sYUFDRixxQkFITCxBQUdPLEtBQ0YscUJBSkwsQUFJTyxVQUNGLHFCQUxMLEFBS087WUFMUCxBQU1VLEFBQ1I7V0FQRixBQU9TLEFBQ1A7cUJBUkYsQUFRbUIsQUFDakI7WUFWVyxBQUNiLEFBU1UsQUFFVjtBQUxFO21DQU1HLHFCQWJQLEFBQWUsQUFZYixBQUNPO0FBYk0sQUFDYjs7SUFnQm1CLEE7c0NBRW5COztzQkFBQSxBQUFhLE9BQVE7d0NBQUE7OzhJQUFBLEFBQ1o7OzBCQUNQOztVQUFBLEFBQUs7b0JBQVEsQUFDRyxBQUNkO2tCQUZXLEFBRUMsQUFDWjtpQkFIVyxBQUdBLEFBQ1g7Z0JBSlcs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LE9BQUEsQUFBSyxNQUF0RCxBQUF5QyxBQUFtQixBQUM1RDswQkFBZ0Isc0JBQUEsQUFBZSxJQUFJLE9BQUEsQUFBSyxNQUF4QyxBQUFnQixBQUE4QixBQUM5Qzt3QkFBQSxBQUFjLFFBQWQsQUFBdUIsQUFFdkI7O2lCQUFBLEFBQUs7MEJBQVUsQUFDQyxBQUNkO3VCQUZhLEFBRUYsQUFDWDtzQkFIYSxBQUdILEFBQ1Y7MkJBSkYsQUFBZSxBQUlFLEFBR2pCO0FBUGUsQUFDYjs7QUFPSjthQUFBLEFBQUssQUFDSDtrQkFBUSxPQUFRLE9BQUEsQUFBSyxNQUFiLEFBQW1CLGFBQWMsT0FBUSxPQUFBLEFBQUssTUFBdEQsQUFBeUMsQUFBbUIsQUFDNUQ7MEJBQWdCLHNCQUFBLEFBQWUsSUFBSSxPQUFBLEFBQUssTUFBeEMsQUFBZ0IsQUFBOEIsQUFDOUM7d0JBQUEsQUFBYyxRQUFkLEFBQXVCLEFBRXZCOztpQkFBQSxBQUFLOzBCQUFVLEFBQ0MsQUFDZDt1QkFGYSxBQUVGLEFBQ1g7c0JBSGEsQUFHSCxBQUNWOzJCQUpGLEFBQWUsQUFJRSxBQUdqQjtBQVBlLEFBQ2I7O0FBOUNOLEFBc0REOztBQUNGO0E7OztrQkE5RmtCLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsdGVybmF0ZWtldi9Ecm9wYm94L1Byb2plY3RzL0NvbW11bml0eSBGdW5kZWQvMi4wL1JlYWN0IFRyYWluaW5nLzAyLWNhbGN1bGF0b3ItZXhhbXBsZSJ9