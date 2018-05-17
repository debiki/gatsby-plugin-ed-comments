gatsby-plugin-talkyard
=========================

Source code: https://github.com/debiki/gatsby-plugin-ed-comments  

Talkyard adds embedded comments to your website or blog, in an iframe. It's
open source: https://github.com/debiki/talkyard

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
and other stuff. Send us an email: hello at talkyard.io.


## Getting started

To try out Talkyard, do this:

```javascript
// In your gatsby-config.js
plugins: [
    {
      resolve: `@debiki/gatsby-plugin-talkyard`,
      options: {
        talkyardServerUrl: 'https://comments-demo.talkyard.io'
      }
    },
]
```

The URL above is to a **demo test site**, so you can try out Talkyard, without
signing up for hosting or installing Talkyard on your own server.
Comments people post might get deleted at any time (because it's a test demo site).

Then, in your blog post template:

```javascript
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';

// And where the comments shall appear:
<TalkyardCommentsIframe />
```

Now, **restart Gatsby** and look at the comments that should appear below your blog posts.


## Real installation

Follow the Getting Started instructions just above.
Then, go to <https://www.talkyard.io>, click *Create Community* and then *Blog Commets*.
Follow the instructions, and then copy-paste the URL to your site into the `talkyardServerUrl`
config value above, e.g.:

```
    talkyardServerUrl: 'https://comments-for-your-blog.talkyard.net'
```

And **restart Gatsby**.

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


## Getting help

Here's our support forum: https://www.talkyard.io/forum/latest/support


## Changelog

- `v0.5.7`, 2018-05-17: Update email addr.
- `v0.5.6`, 2018-05-17: Add `talkyardDebug` config value, set to `false` to disable debug log messages.
- `v0.5.5`, 2018-01-23: Edit readme.
- `v0.5.4`, 2018-01-23: Rename to `talkyardServerUrl`.
- `v0.5.3`, 2018-01-21: Use CDN CNAME: `cdn.talkyard.net`, use `comments-demo` not `.demo`.
- `v0.5.2`, 2018-01-21: Use CDN CNAME: `cdn.talkyard.io`.
- `v0.5.1`, 2018-01-18: Fix 'undefined' bug.
- `v0.5.0` Rename npm package to @debiki/gatsby-plugin-talkyard.
- `v0.4.5` Rename to Talkyard, should be backwards compatible.
- `v0.4.4` Fix compilation error: don't use `window.location`.
- `v0.4.3` Bug fix: Reload comments if navigating to new blog URL.
- `v0.4.2` Initial release.

## Building and publishing

To "publish" this Gatsby module locally, and use in another project on your localhost:

- Build this lib: `yarn prepublish`.
- Then type `yarn help link` and read the docs.
- Then type `yarn link` in this directory.
- And type `yarn link @debiki/gatsby-plugin-talkyard` in the project where you
    want to use this local build.

To publish to the NPM registry:

- Edit the version in `package.js` or maybe type `npm version patch` (or `minor` or `major`).
- Type `npm whoami` — are you the correct user? If not, create an account over at https://www.npmjs.com, then type `npm login`.
- Type `npm publish`
- Go to `https://npmjs.com/package/<package>` and see what happened.
- Type `npm logout`

## License

Copyright (c) 2017-2018 Kaj Magnus Linberg.
The MIT license.

