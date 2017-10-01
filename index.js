'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scriptTagAdded = false; /** Copyright (c) 2017 Kaj Magnus Lindberg. License: MIT. */

function addScriptTagOnce() {
  if (scriptTagAdded) return;

  var scriptElem = document.createElement('script');
  var headOrBodyElem = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];

  scriptElem.async = true;
  scriptElem.type = 'text/javascript';
  scriptElem.src = 'https://edm-49f8.kxcdn.com/-/ed-comments.v0.min.js';
  // = 'http://192.168.0.106/-/ed-comments.js';
  window.edCommentsServerUrl = window.edCommentsServerUrl || 'https://comments.demo.ed.community';

  headOrBodyElem.appendChild(scriptElem);
  scriptTagAdded = true;
}

var EffectiveDiscussionsCommentsIframe = function (_Component) {
  (0, _inherits3.default)(EffectiveDiscussionsCommentsIframe, _Component);

  function EffectiveDiscussionsCommentsIframe(props) {
    (0, _classCallCheck3.default)(this, EffectiveDiscussionsCommentsIframe);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {};
    return _this;
  }

  EffectiveDiscussionsCommentsIframe.prototype.componentDidMount = function componentDidMount() {
    addScriptTagOnce();
  };

  EffectiveDiscussionsCommentsIframe.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'ed-comments', 'data-discussion-id': this.props.discussionId || location.toString() },
      _react2.default.createElement(
        'noscript',
        null,
        'Please enable Javascript to view comments.'
      ),
      _react2.default.createElement(
        'p',
        { style: { marginTop: 25, opacity: 0.9, fontSize: '96%' } },
        'Comments powered by ',
        _react2.default.createElement(
          'a',
          { href: 'https://www.effectivediscussions.org' },
          'Effective Discussions'
        ),
        '.'
      )
    );
  };

  return EffectiveDiscussionsCommentsIframe;
}(_react.Component);

exports.default = EffectiveDiscussionsCommentsIframe;