gatsby-plugin-ed-comments
=========================

Source code here: https://github.com/debiki/gatsby-plugin-ed-comments  
(In case you found this via npmjs.com.)

This adds embedded comments to your website or blog, in an iframe. The commenting system is
named EffectiveDiscussions, and it's open source, here: https://github.com/debiki/ed-server

We provide hosting too, see: https://www.effectivediscussions.org/
and look at the Blog Comments price plan.

Example blog post: https://www.kajmagnus.blog/new-embedded-comments  
(scroll down to the bottom)

**A Beta version** of this plugin will likely be released maybe two weeks after PostgreSQL 10.0,
which might mean some day in November, this year, 2017. But you can use this now already,
just be prepared to maybe update your embedding code or config values a few times extra,
and suggesting improvements.

## Install

```
npm install --save gatsby-plugin-ed-comments  # with npm
yarn add gatsby-plugin-ed-comments            # with Yarn
```

## How to use

```javascript
// In your gatsby-config.js
plugins: [
    {
      resolve: `gatsby-plugin-ed-comments`,
      options: {
        commentsServerUrl: 'https://www.example.com'
      }
    },
]
```

Where https://www.example.com is the address to your EffectiveDiscussions server, if
you have installed it yourself. Or the address to your EffectiveDiscussions site
hosted by us, e.g. https://your-site-name.ed.community.

If you just want to test this, to see how it works for you — then set 
`commentsServerUrl` to null or `''`. Then a demo-test site will be used instead — and comments people
post might get deleted at any time. (Doesn't work as of October 1 2017 — I haven't
yet generated a HTTPS cert for the demo site.)

## License

Copyright (c) 2017 Kaj Magnus Linberg.
The MIT license.

