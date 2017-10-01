/** Copyright (c) 2017 Kaj Magnus Lindberg. License: MIT. */

import React from 'react';


exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  return setPostBodyComponents([
    <script
      key={`gatsby-plugin-ed-comments-server-url`}
      dangerouslySetInnerHTML={{
        __html: `edCommentsServerUrl = '${pluginOptions.commentsServerUrl}';`
      }} />,
  ])
};

