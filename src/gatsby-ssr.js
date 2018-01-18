/** Copyright (c) 2017-2018 Kaj Magnus Lindberg. License: MIT. */

import React from 'react';


exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  return setPostBodyComponents([
    <script
      key={`gatsby-plugin-talkyard-server-url`}
      dangerouslySetInnerHTML={{
        __html: `
talkyardCommentsServerUrl = '${pluginOptions.commentsServerUrl || '' }';
talkyardCommentsScriptUrl = '${pluginOptions.commentsScriptUrl || '' }';
`
      }} />,
  ])
};

