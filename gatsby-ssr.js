'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;

  var debugConfigLine = typeof pluginOptions.talkyardDebug === 'undefined' ? '' : `talkyardDebug = ${pluginOptions.talkyardDebug};\n`;
  return setPostBodyComponents([_react2.default.createElement('script', {
    key: `gatsby-plugin-talkyard-server-url`,
    dangerouslySetInnerHTML: {
      __html: `
talkyardServerUrl = '${pluginOptions.talkyardServerUrl || ''}';
talkyardScriptUrl = '${pluginOptions.talkyardScriptUrl || ''}';
${debugConfigLine}`
    } })]);
}; /** Copyright (c) 2017-2018 Kaj Magnus Lindberg. License: MIT. */

// This import is required although React seemingly not used here.