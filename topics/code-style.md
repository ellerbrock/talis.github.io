---
layout: site
title: Code Style
body_class: code-style
---

### HTML

What we're aiming for:

{% highlight html %}
<!doctype html>
<html lang="en-gb">
<!-- Head -->
  <h1 class="alpha" id="myTitle">Title</h1>
  <div class="foo" id="bar" data-baz="foobar" role="banner" aria-labelledby="myTitle">
    <p>Lorem ipsum dolor mit...</p>
  </div>
<!-- Stuff -->
{% endhighlight %}

#### Syntax
- Use soft tabs with two spaces. Soft tabs make it easy to for a developer to set their own display preferences.
- One element per line - indent if nested
- Ignore trailing slash in self-closing tags
- Double quotes on attributes

#### Doctype
Using the HTML5 doctype helps ensure that documents are rendered in standards mode[^1] across all browsers.

{% highlight html %}
<!doctype html>
{% endhighlight %}

#### Language Attribute
Ensure that the language attribute is set on your document: it's one of the low-hanging fruit for helping assisitive technologies.

{% highlight html %}
<html lang="en-gb">
{% endhighlight %}

> Authors are encouraged to specify a lang attribute on the root html element, giving the document's language. This aids speech synthesis tools to determine what pronunciations to use, translation tools to determine what rules to use, and so forth.

#### Attribute Order
As classes see the most activity and are the most useful attribute, they are authored first. The ID attribute should be reserved for anchors, JavaScript, and accessibility hooks.

- `class`
- `id`, `name`
- `data-*`
- `src`, `for`, `type`, `href`, `value`
- `title`, `alt`
- `role`, `aria-*`

#### Boolean attributes
Using HTML5 means that there is no need for a declared value on attributes such as `disabled`, `hidden`, and `checked`. The W3C and WhatWG[^2] both declare that:

> The presence of a boolean attribute on an element represents the true value, and the absence of the attribute represents the false value.

{% highlight html %}
<input type="text" disabled>
{% endhighlight %}

### CSS

#### Syntax

We use CSScomb[^3] and the appropriate configuration file[^4], to enforce a "house" style:

- Use soft tabs with two spaces.
- One selector per line
- One declaration per line
- Opening brace on same line
- Closing brace on new line
- Space after colon
- End all declarations with a semi-colon
- All hex values are lowercase
- Fractions must implement a proceeding 0
- Values of zero are unit-less
- Space after comma-separated values

#### Declaration Order

Declarations are grouped as per the example below:

{% highlight scss %}
.foobar {
  // Positioning
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  // Box-model
  display: block;
  margin: auto;
  padding: 1em;
  height: 100px;
  width: 100%;

  // Typography
  font-size: 1.2em;
  line-height: 1.1;
  color: #333;
  text-align: center;

  // Visual
  background-color: #017d87;
  border-bottom: 1px solid #ebebeb;

  // Misc
  table-layout: fixed;
}
{% endhighlight %}

Those declarations that control the positioning of an element within the document are raised to the top of the ruleset: they have the most impact on how the browser's layout engine applies the box model.

#### Media Queries
Group media queries with the selector that they relate to, rather than placed at the end of the stylesheet or in a separate document altogether. While there's an argument that repeating the `@media (min-width: 480px) { ... }` declaration breaks the principle of <abbr title="Don't repeat yourself">DRY</abbr> and increases file-size, the benefits of seeing the media query in context outweight the negatives - particularly when gzip and minification tools are available.

##### Breakpoint Definitions
When using a pre-processor, breakpoint values should be declared in a single place alongside the rest of the stylesheet variables.

##### Media Query Splitting
Where applicable, take advantage of media-query splitting[^5] in an effort to avoid introducing styles, only to have to overwrite them later.

{% highlight scss %}
@media (max-width: 479px) {
  // Small
}
@media (min-width: 480px) and (max-width: 719px) {
  // Medium
}
@media (min-width: 720px) and (max-width: 1199px) {
  // Large
}
{% endhighlight %}

### JavaScript

#### Linting
A comprehensive list of JavaScript style guide lines[^6] can be found on Airbnb webpage.
An ESLint[^7] configuration known as eslint-config-airbnb[^8] has been implemented based
on the style guide lines to help developers when working within an IDE. These are the
standards which our code should adhere to.

The following configuration should be place either locally to the project or globally
at `~/.eslintrc`. The `env` and `extends` value should be adjusted to cater for the
project's needs.
```json
{
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
        "mongo": true
    },
    "extends": "airbnb/legacy"
}
```
#### Pre-commit hooks
A pre-hook should be appended to the project to fail the commit
if the user is attempting to submit new or modified code which
doesn't pass the linter. This will allow a pre-exisitng project
to evolve over time & new projects to stay lint free from the start.

Any potential broken windows that are related to a linting rule should
be fixed, but a big bang approach in fixing all violations should be avoided
to prevent large code churn.

#### New Projects
When a new project is created it should comply with the approaches above
from day one.

[^1]: [Quirks Mode - Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Quirks_Mode_and_Standards_Mode)
[^2]: [Boolean attributes - WhatWG HTML spec](https://html.spec.whatwg.org/#boolean-attributes)
[^3]: [CSScomb](http://csscomb.com/)
[^4]: [.csscomb.json](https://gist.github.com/danielmatthew/66d9b937216f6bec3e36)
[^5]: [Media Query Splitting](http://simurai.com/blog/2012/08/29/media-query-splitting/)
[^6]: [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
[^7]: [ESLint](http://eslint.org/)
[^8]: [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
