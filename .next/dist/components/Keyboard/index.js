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

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _tachyonsJs = require('tachyons-js');

var _tachyonsJs2 = _interopRequireDefault(_tachyonsJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alternatekev/Dropbox/Projects/Community Funded/2.0/React Training/02-calculator-example/components/Keyboard/index.js';


var styles = {
  Keyboard: (0, _extends3.default)({
    flex: 1.5
  }, _tachyonsJs2.default.pa1),
  ButtonRow: (0, _extends3.default)({}, _tachyonsJs2.default.flex, {
    width: '100%'
  })
};

var Keyboard = function (_React$Component) {
  (0, _inherits3.default)(Keyboard, _React$Component);

  function Keyboard() {
    (0, _classCallCheck3.default)(this, Keyboard);

    return (0, _possibleConstructorReturn3.default)(this, (Keyboard.__proto__ || (0, _getPrototypeOf2.default)(Keyboard)).apply(this, arguments));
  }

  (0, _createClass3.default)(Keyboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'Keyboard', style: styles.Keyboard, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('div', { className: 'ButtonRow', style: styles.ButtonRow, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_Button2.default, { onClick: this.props.numberClick, flex: 1, label: '7', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement(_Button2.default, { onClick: this.props.numberClick, flex: 1, label: '8', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement(_Button2.default, { onClick: this.props.numberClick, flex: 1, label: '9', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement(_Button2.default, { onClick: this.props.operatorClick, operator: true, flex: 1, label: '\xF7', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), _react2.default.createElement('div', { className: 'ButtonRow', style: styles.ButtonRow, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_Button2.default, { onClick: this.props.numberClick, flex: 1, label: '4', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react2.default.createElement(_Button2.default, { onClick: this.props.numberClick, flex: 1, label: '5', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement(_Button2.default, { onClick: this.props.numberClick, flex: 1, label: '6', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement(_Button2.default, { onClick: this.props.operatorClick, operator: true, flex: 1, label: 'x', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })), _react2.default.createElement('div', { className: 'ButtonRow', style: styles.ButtonRow, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_Button2.default, { onClick: this.props.numberClick, flex: 1, label: '1', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement(_Button2.default, { onClick: this.props.numberClick, flex: 1, label: '2', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement(_Button2.default, { onClick: this.props.numberClick, flex: 1, label: '3', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_Button2.default, { onClick: this.props.operatorClick, operator: true, flex: 1, label: '+', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })), _react2.default.createElement('div', { className: 'ButtonRow', style: styles.ButtonRow, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_Button2.default, { onClick: this.props.numberClick, flex: 3.5, label: '0', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement(_Button2.default, { onClick: this.props.operatorClick, operator: true, flex: 1, label: '-', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      })), _react2.default.createElement('div', { className: 'ButtonRow', style: styles.ButtonRow, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_Button2.default, { onClick: this.props.operatorClick, operator: true, flex: 4, label: '=', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      })));
    }
  }]);

  return Keyboard;
}(_react2.default.Component);

exports.default = Keyboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvS2V5Ym9hcmQvaW5kZXguanMiXSwibmFtZXMiOlsiQnV0dG9uIiwidCIsInN0eWxlcyIsIktleWJvYXJkIiwiZmxleCIsInBhMSIsIkJ1dHRvblJvdyIsIndpZHRoIiwicHJvcHMiLCJudW1iZXJDbGljayIsIm9wZXJhdG9yQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNOztVQUNKLEFBQ1E7QUFBTixLQUNHLHFCQUhRLEFBQ2IsQUFFTyxBQUVQO3dDQUNLLHFCQURMLEFBQ087V0FOVCxBQUFlLEFBS2IsQUFFUztBQUFQO0FBUFcsQUFDYjs7SUFVbUIsQTs7Ozs7Ozs7Ozs7NkJBT1YsQUFDUDs2QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlLFlBQVcsT0FBUSxPQUFsQyxBQUF5QztvQkFBekM7c0JBQUEsQUFFRTtBQUZGO09BQUEsa0JBRUUsY0FBQSxTQUFLLFdBQUwsQUFBZSxhQUFZLE9BQVEsT0FBbkMsQUFBMEM7b0JBQTFDO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLGtDQUFPLFNBQVUsS0FBQSxBQUFLLE1BQXZCLEFBQTZCLGFBQWMsTUFBM0MsQUFBa0QsR0FBSSxPQUF0RCxBQUE0RDtvQkFBNUQ7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyxrQ0FBTyxTQUFVLEtBQUEsQUFBSyxNQUF2QixBQUE2QixhQUFjLE1BQTNDLEFBQWtELEdBQUksT0FBdEQsQUFBNEQ7b0JBQTVEO3NCQUZGLEFBRUUsQUFDQTtBQURBOzBCQUNBLEFBQUMsa0NBQU8sU0FBVSxLQUFBLEFBQUssTUFBdkIsQUFBNkIsYUFBYyxNQUEzQyxBQUFrRCxHQUFJLE9BQXRELEFBQTREO29CQUE1RDtzQkFIRixBQUdFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLGtDQUFPLFNBQVUsS0FBQSxBQUFLLE1BQXZCLEFBQTZCLGVBQWdCLFVBQTdDLE1BQXNELE1BQXRELEFBQTZELEdBQUksT0FBakUsQUFBdUU7b0JBQXZFO3NCQU5KLEFBRUUsQUFJRSxBQUdGO0FBSEU7MkJBR0YsY0FBQSxTQUFLLFdBQUwsQUFBZSxhQUFZLE9BQVEsT0FBbkMsQUFBMEM7b0JBQTFDO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLGtDQUFPLFNBQVUsS0FBQSxBQUFLLE1BQXZCLEFBQTZCLGFBQWMsTUFBM0MsQUFBa0QsR0FBSSxPQUF0RCxBQUE0RDtvQkFBNUQ7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyxrQ0FBTyxTQUFVLEtBQUEsQUFBSyxNQUF2QixBQUE2QixhQUFjLE1BQTNDLEFBQWtELEdBQUksT0FBdEQsQUFBNEQ7b0JBQTVEO3NCQUZGLEFBRUUsQUFDQTtBQURBOzBCQUNBLEFBQUMsa0NBQU8sU0FBVSxLQUFBLEFBQUssTUFBdkIsQUFBNkIsYUFBYyxNQUEzQyxBQUFrRCxHQUFJLE9BQXRELEFBQTREO29CQUE1RDtzQkFIRixBQUdFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLGtDQUFPLFNBQVUsS0FBQSxBQUFLLE1BQXZCLEFBQTZCLGVBQWdCLFVBQTdDLE1BQXNELE1BQXRELEFBQTZELEdBQUksT0FBakUsQUFBdUU7b0JBQXZFO3NCQWJKLEFBU0UsQUFJRSxBQUdGO0FBSEU7MkJBR0YsY0FBQSxTQUFLLFdBQUwsQUFBZSxhQUFZLE9BQVEsT0FBbkMsQUFBMEM7b0JBQTFDO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLGtDQUFPLFNBQVUsS0FBQSxBQUFLLE1BQXZCLEFBQTZCLGFBQWMsTUFBM0MsQUFBa0QsR0FBSSxPQUF0RCxBQUE0RDtvQkFBNUQ7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyxrQ0FBTyxTQUFVLEtBQUEsQUFBSyxNQUF2QixBQUE2QixhQUFjLE1BQTNDLEFBQWtELEdBQUksT0FBdEQsQUFBNEQ7b0JBQTVEO3NCQUZGLEFBRUUsQUFDQTtBQURBOzBCQUNBLEFBQUMsa0NBQU8sU0FBVSxLQUFBLEFBQUssTUFBdkIsQUFBNkIsYUFBYyxNQUEzQyxBQUFrRCxHQUFJLE9BQXRELEFBQTREO29CQUE1RDtzQkFIRixBQUdFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLGtDQUFPLFNBQVUsS0FBQSxBQUFLLE1BQXZCLEFBQTZCLGVBQWdCLFVBQTdDLE1BQXNELE1BQXRELEFBQTZELEdBQUksT0FBakUsQUFBdUU7b0JBQXZFO3NCQXBCSixBQWdCRSxBQUlFLEFBR0Y7QUFIRTsyQkFHRixjQUFBLFNBQUssV0FBTCxBQUFlLGFBQVksT0FBUSxPQUFuQyxBQUEwQztvQkFBMUM7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsa0NBQU8sU0FBVSxLQUFBLEFBQUssTUFBdkIsQUFBNkIsYUFBYyxNQUEzQyxBQUFrRCxLQUFNLE9BQXhELEFBQThEO29CQUE5RDtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLGtDQUFPLFNBQVUsS0FBQSxBQUFLLE1BQXZCLEFBQTZCLGVBQWdCLFVBQTdDLE1BQXNELE1BQXRELEFBQTZELEdBQUksT0FBakUsQUFBdUU7b0JBQXZFO3NCQXpCSixBQXVCRSxBQUVFLEFBRUY7QUFGRTsyQkFFRixjQUFBLFNBQUssV0FBTCxBQUFlLGFBQVksT0FBUSxPQUFuQyxBQUEwQztvQkFBMUM7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsa0NBQU8sU0FBVSxLQUFBLEFBQUssTUFBdkIsQUFBNkIsZUFBZ0IsVUFBN0MsTUFBc0QsTUFBdEQsQUFBNkQsR0FBSSxPQUFqRSxBQUF1RTtvQkFBdkU7c0JBN0JOLEFBQ0UsQUEyQkUsQUFDRSxBQUlQO0FBSk87Ozs7OztFQXJDNEIsZ0JBQU0sQTs7a0JBQXZCLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsdGVybmF0ZWtldi9Ecm9wYm94L1Byb2plY3RzL0NvbW11bml0eSBGdW5kZWQvMi4wL1JlYWN0IFRyYWluaW5nLzAyLWNhbGN1bGF0b3ItZXhhbXBsZSJ9