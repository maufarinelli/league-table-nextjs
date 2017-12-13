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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\mauricio.farinelli\\Documents\\Personal\\league-teable-nextjs\\pages\\_error.js?entry';
// ./pages/_error.js


var Error = function (_React$Component) {
	(0, _inherits3.default)(Error, _React$Component);

	function Error() {
		(0, _classCallCheck3.default)(this, Error);

		return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
	}

	(0, _createClass3.default)(Error, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}, this.props.statusCode ? 'An error ' + this.props.statusCode + ' occurred on server' : 'An error occurred on client');
		}
	}], [{
		key: 'getInitialProps',
		value: function getInitialProps(_ref) {
			var res = _ref.res,
			    xhr = _ref.xhr;

			var statusCode = res ? res.statusCode : xhr ? xhr.status : null;
			return { statusCode: statusCode };
		}
	}]);

	return Error;
}(_react2.default.Component);

exports.default = Error;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfZXJyb3IuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJFcnJvciIsInByb3BzIiwic3RhdHVzQ29kZSIsInJlcyIsInhociIsInN0YXR1cyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxBQUFPOzs7Ozs7O0FBRFA7OztJLEFBR3FCOzs7Ozs7Ozs7OzsyQkFNVixBQUNUOzBCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxPQUNDLEFBQUssTUFBTCxBQUFXLDJCQUNJLEtBQUEsQUFBSyxNQURwQixBQUMwQixxQ0FINUIsQUFDQyxBQUdJLEFBR0w7Ozs7d0NBYnFDO09BQVosQUFBWSxXQUFaLEFBQVk7T0FBUCxBQUFPLFdBQVAsQUFBTyxBQUNyQzs7T0FBTSxhQUFhLE1BQU0sSUFBTixBQUFVLGFBQWMsTUFBTSxJQUFOLEFBQVUsU0FBckQsQUFBOEQsQUFDOUQ7VUFBTyxFQUFFLFlBQVQsQUFBTyxBQUNQOzs7OztFQUppQyxnQkFBTSxBOztrQkFBcEIsQSIsImZpbGUiOiJfZXJyb3IuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvbWF1cmljaW8uZmFyaW5lbGxpL0RvY3VtZW50cy9QZXJzb25hbC9sZWFndWUtdGVhYmxlLW5leHRqcyJ9