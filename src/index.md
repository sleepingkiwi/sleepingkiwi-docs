---
layout: layouts/page.njk
title: Home
meta:
  title: sleepingkiwi docs
  description: A starting place for writing documentation.
genericContentBlocks:
  - type: oneColumn
    collapseTop: false
    title:
    content:
      - type: header
        textAlign: left
        header: What is this?
      - type: text
        textAlign: left
        text: >-
          A fairly basic place to start when writing documentation.


          Based loosely on the structure of [Sleepity](https://github.com/sleepingKiwi/sleepingkiwi-eleventy#readme) my starter for CMS backed static sites built with [eleventy](https://www.11ty.dev).


          Several of the __content blocks__ from Sleepity are used although the CMS and many of the more complex parts of Sleepity have been stripped away. Some additions have been made to make the process of writing documentation a little easier.


          Writing the content using blocks in frontmatter directly can feel strange but it has full markdown support for text blocks whilst giving some structured control of spacing/alignment etc.
      - type: text
        textAlign: left
        flag: 🚀
        priority: 1
        text: >-
          The source code for this site can be found on [github](https://github.com/sleepingkiwi/sleepingkiwi-docs).
  - type: oneColumn
    collapseTop: true
    title:
    content:
      - type: header
        textAlign: left
        header: Navigation
      - type: text
        textAlign: left
        text: >-
          The top level of site navigation is populated manually from the `src/_data/navigation.json` file.


          The second level of links is generated automatically based on the header blocks present on the page. It shows only for the active page and is configured in `src/_includes/components/Nav.njk`.
  - type: oneColumn
    collapseTop: true
    title:
    content:
      - type: header
        textAlign: left
        header: Images
      - type: text
        textAlign: left
        text: >-
          Images are stored with the repo (unlike Sleepity which defaults to using Cloudinary).


          [eleventy-img](https://www.11ty.dev/docs/plugins/image/#url-path) is used for image processing and the bulk of the logic can be found in `src/_data/eleventyComputed.js`


          Async shortcodes (as outlined in the eleventy-img docs) do not work inside Nunjuck macros ([ref](https://github.com/mozilla/nunjucks/issues/1252)) so we use __computed data__ instead.


          When Javascript is enabled images fade on scroll using a basic intersection observer implementation.
      - type: image
        src: ./src/images/000009.JPG
        alt: A city
        imageWidth: readable
  - type: oneColumn
    collapseTop: true
    title:
    content:
      - type: header
        textAlign: left
        header: Blocks
      - type: text
        textAlign: left
        text: >-
          Examples of other supported blocks.
      - type: cta
        cta: Call To Action
        ctaURL: /
        textAlign: left
      - type: text
        textAlign: left
        flag: 👋
        priority: 1
        text: >-
          Text blocks can have an emoji __flag__ assigned which marks them as asides or alerts.
      - type: text
        textAlign: left
        flag: 👻
        priority: 2
        text: >-
          Flagged blocks can be given a priority number the one above is __1__ this one is __2__.
      - type: text
        textAlign: left
        flag: 💀
        priority: 3
        text: >-
          And this one is a priority of __3__.
  - type: oneColumn
    collapseTop: true
    title:
    content:
      - type: header
        textAlign: left
        header: Anchors in Headers
      - type: text
        textAlign: left
        text: >-
          Headers automatically generate page anchors (used to build the sub nav).


          These can be copied directly by hovering over any heading on the page and copying the link from the __#__ that appears.
---
