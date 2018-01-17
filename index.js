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

var scriptTagAdded = false; /** Copyright (c) 2017-2018 Kaj Magnus Lindberg. License: MIT. */

function addScriptTagOnce() {
  if (scriptTagAdded) return;

  var scriptElem = document.createElement('script');
  var headOrBodyElem = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];

  scriptElem.async = true;
  scriptElem.type = 'text/javascript';
  scriptElem.src = window.talkyardCommentsScriptUrl || 'https://tyc-49f8.kxcdn.com/-/talkyard-comments.min.js';
  window.talkyardCommentsServerUrl = window.talkyardCommentsServerUrl || 'https://comments.demo.talkyard.io';

  headOrBodyElem.appendChild(scriptElem);
  scriptTagAdded = true;
}

var TalkyardCommentsIframe = function (_Component) {
  (0, _inherits3.default)(TalkyardCommentsIframe, _Component);

  function TalkyardCommentsIframe(props) {
    (0, _classCallCheck3.default)(this, TalkyardCommentsIframe);
    return (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));
  }

  TalkyardCommentsIframe.prototype.componentDidMount = function componentDidMount() {
    var isReMounting = scriptTagAdded;
    addScriptTagOnce();
    if (isReMounting) {
      // The user have navigated to a new page, via history.push() and un/remounting components.
      // We need to reload comments, for this new URL.
      // But maybe the user har clicked links to new pages super quickly, so the script hasn't
      // loaded yet, so check if the fn exists.
      if (window.talkyardReloadCommentsAndEditor) {
        window.talkyardReloadCommentsAndEditor();
      }
    }
  };

  TalkyardCommentsIframe.prototype.componentWillUnmount = function componentWillUnmount() {
    if (window.talkyardRemoveCommentsAndEditor) {
      window.talkyardRemoveCommentsAndEditor();
    }
  };

  TalkyardCommentsIframe.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      { className: 'talkyard-comments', 'data-discussion-id': this.props.discussionId || '', 'data-talkyard-page-id': this.props.talkyardPageId || this.props.edPageId || '' },
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
          { href: 'https://www.talkyard.io' },
          'Talkyard'
        ),
        '.'
      )
    );
  };

  return TalkyardCommentsIframe;
}(_react.Component);

exports.default = TalkyardCommentsIframe;