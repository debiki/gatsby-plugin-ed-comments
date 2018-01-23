/** Copyright (c) 2017-2018 Kaj Magnus Lindberg. License: MIT. */

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
  scriptElem.src = window.talkyardScriptUrl || 'https://cdn.talkyard.net/-/talkyard-comments.min.js';
  window.talkyardServerUrl = window.talkyardServerUrl || 'https://comments-demo.talkyard.io';

  headOrBodyElem.appendChild(scriptElem);
  scriptTagAdded = true;
}


class TalkyardCommentsIframe extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const isReMounting = scriptTagAdded;
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
  }

  componentWillUnmount() {
    if (window.talkyardRemoveCommentsAndEditor) {
      window.talkyardRemoveCommentsAndEditor();
    }
  }

  render() {
    return (
      <div className='talkyard-comments' data-discussion-id={this.props.discussionId || ''} data-talkyard-page-id={this.props.talkyardPageId || this.props.edPageId || ''}>
        <noscript>Please enable Javascript to view comments.</noscript>
        <p style={{ marginTop: 25, opacity: 0.9, fontSize: '96%' }}>
          Comments powered by <a href='https://www.talkyard.io'>Talkyard</a>.
        </p>
      </div>);
  }

}

export default TalkyardCommentsIframe;
