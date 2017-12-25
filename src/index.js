/** Copyright (c) 2017 Kaj Magnus Lindberg. License: MIT. */

import React, { Component } from 'react';


let scriptTagAdded = false;
let currentUrlPath = location.pathname;


function addScriptTagOnce() {
  if (scriptTagAdded)
    return;

  const scriptElem = document.createElement('script');
  const headOrBodyElem =
      document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];

  scriptElem.async = true;
  scriptElem.type = 'text/javascript';
  scriptElem.src = window.edCommentsScriptUrl || 'https://edm-49f8.kxcdn.com/-/ed-comments.v0.min.js';
  window.edCommentsServerUrl = window.edCommentsServerUrl || 'https://comments.demo.ed.community';

  headOrBodyElem.appendChild(scriptElem);
  scriptTagAdded = true;
}


class EffectiveDiscussionsCommentsIframe extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    addScriptTagOnce();
    const maybeNewPath = location.pathname;
    if (currentUrlPath !== maybeNewPath) {
      // The user have navigated to a new page, via history.push() and un/mounting components.
      // We need to reload comments, for this new URL.
      currentUrlPath = maybeNewPath;
      // Maybe the user har clicked links to new pages super quickly, so the script hasn't loaded yet.
      if (window.edReloadCommentsAndEditor) {
        window.edReloadCommentsAndEditor();
      }
    }
  }

  componentWillUnmount() {
    if (window.edRemoveCommentsAndEditor) {
      window.edRemoveCommentsAndEditor();
    }
  }

  render() {
    return (
      <div className='ed-comments' data-discussion-id={this.props.discussionId || ''} data-ed-page-id={this.props.edPageId || ''}>
        <noscript>Please enable Javascript to view comments.</noscript>
        <p style={{ marginTop: 25, opacity: 0.9, fontSize: '96%' }}>
          Comments powered by <a href='https://www.effectivediscussions.org'>Effective Discussions</a>.
        </p>
      </div>);
  }

}

export default EffectiveDiscussionsCommentsIframe;
