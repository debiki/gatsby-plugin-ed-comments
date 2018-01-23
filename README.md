gatsby-plugin-talkyard
=========================

Source code: https://github.com/debiki/gatsby-plugin-ed-comments  

Talkyard adds embedded comments to your website or blog, in an iframe. It's
open source: https://github.com/debiki/ed-server

We provide hosting too; go to https://www.talkyard.io/
and click Create Community and then choose Blog Comments.
Talkyard is also forum software with chat and question-answers features —
so you can create a community for your website, that integrates with the embedded comments.

Example blog post: https://www.kajmagnus.blog/new-embedded-comments  
(scroll down to the bottom)

**This is Beta software**. Maybe you'll need to update your embedding code or config values
every now and when, before everything stabilizes.


## Installation

```
npm install --save @debiki/gatsby-plugin-talkyard  # with npm
yarn add @debiki/gatsby-plugin-talkyard            # with Yarn
```

And tell us that you're using this — so we get the chance to notify you about security updates
and other stuff. Send us an email: support at ed.community.


## How to use

```javascript
// In your gatsby-config.js
plugins: [
    {
      resolve: `@debiki/gatsby-plugin-talkyard`,
      options: {
        talkyardServerUrl: 'https://www.example.com'
      }
    },
]
```

Where https://www.example.com is the address to your Talkyard server, if
you have installed it yourself. Or the address to your Talkyard site
hosted by us, e.g. https://comments-for-your-blog.talkyard.net.

Then, in your blog post template:

```javascript
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';

// And where the comments shall appear:
<TalkyardCommentsIframe />
```

## Changing the URL of a blog post?

Comments are remembered, per blog post URL. But what if you change the URL? Then
all comments will be gone — unless you instead of URLs, use permanent discussion ids
that stay the same when you change the URL.
For each blog post, add a discussion id: (for *all* blog posts, otherwise weird bugs)

    ---
    title: Blog post title
    author: ...
    date: ...
    description: ...
    discussionId: "2018-01-01-page-slug"   <—— look. You can type whatever, but avoid weird chars
    ---
    
    Blog post text ...

And also tell React to include the discussion id in the props. At the GraphQL query
at the bottom of the blog post template page:

```

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date ...
        discussionId        <—— look
      }
    }
  }
`;
```

And also change from: `<TalkyardCommentsIframe />`
to:

```
<TalkyardCommentsIframe discussionId={post.frontmatter.discussionId} />
```

## Is this for you?

If you want to quickly test this, to see how it looks & works at your website,
without spending time signing up or getting your own server
— then, when configuring this plugin, set
`talkyardServerUrl` to `https://comments-demo.talkyard.io`
— that's a demo site you can use, just to try out Talkyard.
Comments people post might get deleted at any time (because it's a test demo site).

## Getting help

Here's our support forum: https://www.talkyard.io/forum/latest/support


## Changelog

- `v0.5.4`, 2018-01-23: Rename to `talkyardServerUrl`.
- `v0.5.3`, 2018-01-21: Use CDN CNAME: `cdn.talkyard.net`, use `comments-demo` not `.demo`.
- `v0.5.2`, 2018-01-21: Use CDN CNAME: `cdn.talkyard.io`.
- `v0.5.1`, 2018-01-18: Fix 'undefined' bug.
- `v0.5.0` Rename npm package to @debiki/gatsby-plugin-talkyard.
- `v0.4.5` Rename to Talkyard, should be backwards compatible.
- `v0.4.4` Fix compilation error: don't use `window.location`.
- `v0.4.3` Bug fix: Reload comments if navigating to new blog URL.
- `v0.4.2` Initial release.

## License

Copyright (c) 2017-2018 Kaj Magnus Linberg.
The MIT license.

