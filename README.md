gatsby-plugin-ed-comments
=========================

Adds embedded comments to your website or blog, in an iframe. The commenting system is
named EffectiveDiscussions, and it's open source, here:

https://github.com/debiki/ed-server

We provide hosting too, see: https://www.effectivediscussions.org/
and look at the Blog Comments price plan.

A Beta version of this plugin will likely be released maybe two weeks after PostgreSQL 10.0,
which might mean some day in November, this year, 2017. But you can use this now already,
just be prepared to maybe update your code a few times extra and to report a bug.

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

