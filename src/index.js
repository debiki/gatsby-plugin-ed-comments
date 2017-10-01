/** Copyright (c) 2017 Kaj Magnus Lindberg. License: MIT. */

import React, { Component } from 'react';


let scriptTagAdded = false;


function addScriptTagOnce() {
  if (scriptTagAdded)
    return;

  const scriptElem = document.createElement('script');
  const headOrBodyElem =
      document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];

  scriptElem.async = true;
  scriptElem.type = 'text/javascript';
  scriptElem.src = 'https://edm-49f8.kxcdn.com/-/ed-comments.v0.min.js';
              // = 'http://192.168.0.106/-/ed-comments.js';
  window.edCommentsServerUrl = window.edCommentsServerUrl || 'https://comments.demo.ed.community';

  headOrBodyElem.appendChild(scriptElem);
  scriptTagAdded = true;
}


class EffectiveDiscussionsCommentsIframe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    addScriptTagOnce()
  }

  render() {
    return (
      <div className='ed-comments' data-discussion-id={this.props.discussionId || location.toString()}>
        <noscript>Please enable Javascript to view comments.</noscript>
        <p style={{ marginTop: 25, opacity: 0.9, fontSize: '96%' }}>
          Comments powered by <a href='https://www.effectivediscussions.org'>Effective Discussions</a>.
        </p>
      </div>);
  }

}

export default EffectiveDiscussionsCommentsIframe;
