/** Copyright (c) 2017-2018 Kaj Magnus Lindberg. License: MIT. */

// This import is required although React seemingly not used here.
import React from 'react';


exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  const debugConfigLine = typeof pluginOptions.talkyardDebug === 'undefined' ? '' :
      `talkyardDebug = ${pluginOptions.talkyardDebug};\n`;
  return setPostBodyComponents([
    <script
      key={`gatsby-plugin-talkyard-server-url`}
      dangerouslySetInnerHTML={{
        __html: `
talkyardServerUrl = '${pluginOptions.talkyardServerUrl || '' }';
talkyardScriptUrl = '${pluginOptions.talkyardScriptUrl || '' }';
${debugConfigLine}`
      }} />,
  ])
};

