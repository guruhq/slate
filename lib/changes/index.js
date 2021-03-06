'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _atCurrentRange = require('./at-current-range');

var _atCurrentRange2 = _interopRequireDefault(_atCurrentRange);

var _atRange = require('./at-range');

var _atRange2 = _interopRequireDefault(_atRange);

var _byKey = require('./by-key');

var _byKey2 = _interopRequireDefault(_byKey);

var _onHistory = require('./on-history');

var _onHistory2 = _interopRequireDefault(_onHistory);

var _onSelection = require('./on-selection');

var _onSelection2 = _interopRequireDefault(_onSelection);

var _onValue = require('./on-value');

var _onValue2 = _interopRequireDefault(_onValue);

var _withSchema = require('./with-schema');

var _withSchema2 = _interopRequireDefault(_withSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Export.
 *
 * @type {Object}
 */

exports.default = _extends({}, _atCurrentRange2.default, _atRange2.default, _byKey2.default, _onHistory2.default, _onSelection2.default, _onValue2.default, _withSchema2.default);