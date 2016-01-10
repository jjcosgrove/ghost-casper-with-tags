# Casper with Tags - A modified Ghost theme.
This is a modified version of the default 'Casper' theme included with the awesome blogging platform: [Ghost](https://github.com/TryGhost/Ghost).

It allows the same functionality as Casper with two simple additions:
* A list of the of most popular (default=10) tags in the navigation menu.
* A custom page template for listing each tag and the number of posts having that particular tag.

## Requirements
* Clean/working install of Ghost
* A navigation item with title/slug: All Tags/all-tags*
* A static page with title/slug: All Tags/all-tags*

\* You can of course change the name of the page template from: page-all-tags.hbs to whatever you wish. 

## Modified/new files
* default.hbs
* partials/navigation.hbs
* partials/tags.hbs
* assets/css/tags.css
* assets/js/tags.js
* page-all-tags.hbs

## The new menu
![Menu for Casper with Tags](https://raw.githubusercontent.com/jjcosgrove/ghost-casper-with-tags/master/grabs/menu.png)

## The page template
![Page Template for Casper with Tags](https://raw.githubusercontent.com/jjcosgrove/ghost-casper-with-tags/master/grabs/page-template.png)

## Changing the number of 'popular' tags in the menu
change the 'limit' argument in: assets/js/tags.js within the PopulateMenuTags() function definition, from the default value: 10.

```javascript
ghost.url.api('tags', {
    limit: '10',
    include: 'count.posts',
    order: 'count.posts DESC'
})
```

## Copyright & License

Copyright (c) 2013-2015 Jonathan James Cosgrove - Released under the MIT License.

Copyright (c) 2013-2015 Ghost Foundation - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
