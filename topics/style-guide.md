---
title: UI Style Guide
layout: site
body_class: style-guide
category: Front-end development
---
This article illustrates how common components used across Talis applications should look and feel. By implementing  our overrides stylesheet[^1] and applying the classes documented below to your markup, we can ensure that our applications offer a consistent look and feel in order to encourage our users, while maintaining our brand guidelines.

Bootstrap 2[^2], Bootstrap 3[^3], and Zurb's Foundation[^4] framework are in use across our applications. While each framework provide components that are similar in functionality, markup patterns and applied classes differ.

### Colour Palette
Our colour palette has been designed to balance accessibility requirements while remaining true to established brand guidelines.

<a class="jsbin-embed" href="http://jsbin.com/qiwuje/embed?output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.34.0"></script>

{% highlight scss %}
// Greys
$misty-morning-grey: #ebebeb;
$battleship-grey: #8c8c8c;
$death-star-grey: #5e5e5e;
$black: #000000;

// Primary
$talis-turqoise: #017d87;
$accent-turqoise: #005d64;
$talis-pink: #c5197d;

// Secondary
$green: #3f9e76;
$purple: #c5197d;
$yellow: #fdb515;
$orange: #f47821;
$red: #a02f2b;
{% endhighlight %}

### Typography
Our core typeface is Open Sans, available from Google Fonts[^5]. Body text is set at 13px using a line-height of 20px, and is by default coloured Death Star Grey (`#5e5e5e`). We can declare our family, size, and line-height in one shorthand declaration:

{% highlight scss %}
body {
  font: 0.8125em/1.25em "Open Sans", sans-serif; // 13px/16px = 0.8125em
}
{% endhighlight %}

#### Headings
We use a "double-stranded heading hierarchy" to define our headings. That is to say: there is an associated class for each heading style. If you wish an element to look like a `h1`, but it doesn't deserve the meaning associated with it, a class of `.alpha` can be applied. The current naming-convention uses the first six letters of the Greek alphabet[^6].

<a class="jsbin-embed" href="http://jsbin.com/yariwa/embed?output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.34.0"></script>

{% highlight scss %}
h1, .alpha {
  font-weight: 300;
  font-size: 30px;
  color: #000000;
}
h2, .beta {
  font-weight: 300;
  font-size: 30px;
  color: #8c8c8c;
}
h3, .gamma {
  font-weight: 300;
  font-size: 20px;
  color: #000000;
}
h4, .delta {
  font-weight: 300;
  font-size: 20px;
  color: #8c8c8c;
}
h5, .epsilon {
  font-weight: 700;
  font-size: 13px;
  color: #000000;
}
h6, .zeta {
  font-weight: 700;
  font-size: 13px;
  color: #5e5e5e;
}
{% endhighlight %}

Ensure that the `font-weight` property is defined using a numerical value rather than a keyword, and that the weight you are after _is_ being loaded.
In a similar manner, ensure that the appropriate `font-variant` is being loaded if it is to be used. The faux-bold, italic, and small-caps effects that the browser applies are sub-par.

| --------------------- |
| Font Weight | Keyword |
| --------------------- |
| 100 | N/A |
| 300 | N/A |
| 400 | `normal` |
| 600 | N/A |
| 700 | `bold` |

#### Form inputs
Form controls are not affected by the typeface set on the `body` element and require their own declaration in order to prevent them inheriting from the OS default.

{% highlight scss %}
input, select, textarea {
  font-family: inherit;
}
{% endhighlight %}

#### Open Sans
Google Fonts offers the developer three mechanisms to include a typeface: with a `link` element, a CSS `@import` rule, or with JavaScript.
The preferred method is to take advantage of Web Font Loader[^7], and include the following script tag within your application: the <abbr title="Flash of Unstyled Text">FOUT</abbr> can be negated by setting a fallback typeface when the FontLoader applies a class of `.wf-loading` or `.wf-inactive` to the document body.
The example below includes the required font-weights:

{% highlight html js %}
<script>
  WebFontConfig = {
    google: { families: ['Open+Sans:400,300,700:latin'] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
</script>
{% endhighlight %}

It is an offence to apply WordArt effects using the Google Fonts API.

### Buttons
Use the `.btn` class to help inform the user that an action will take place when they interact with an element.
The class is designed to be flexible and can be applied to `<a>`, `<button>`, `<input type="button" />` and `<input type="submit">` based on the use case.

**Don't** use buttons for general navigation purposes.

Use the appropriate button style for the type of interaction: use `.btn-danger` when data will be altered or deleted.

Use JavaScript to apply and remove the `disabled` attribute to indicate that a button is ineligible for interaction.

<a class="jsbin-embed" href="http://jsbin.com/vixeme/embed?output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.34.1"></script>

{% highlight html %}
<a class="btn">Button</a>
<button class="btn">Button</button>
<input class="btn" type="button" value="Button" />
<input class="btn" type="submit" value="Button" />
{% endhighlight %}

### Forms

<a class="jsbin-embed" href="http://jsbin.com/coyugo/embed?output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.34.1"></script>

{% highlight html %}
<div class="control-group">
  <label class="control-label">Label name:* </label>
  <div class="controls">
    <input type="text" placeholder="Type something…" />
  </div>
</div>
{% endhighlight %}

By default, we place labels to the side of their associated inputs to allow for easy scanning and comprehension. If space is limited - for instance on mobile - labels can be placed above the input.
The exception to this rule is for checkboxes: the label wraps the input. This means that the label can be clicked and the checkbox will be activated.

{% highlight html %}
<label class="checkbox">
  <input type="checkbox"> Check me out
</label>
{% endhighlight %}

Ensure that form inputs have an ID and that the associated label uses the `for` attribute. This is an important step for conforming with <abbr title="Web Accessibility Initiative">WAI</abbr> guidelines.

When a field is required, ensure that the parent `.control-group` is given the titular class `.required`: this will append the appropriate indicator to the label name. By applying the `required` attribute[^8] to an input, we can take advantage of the browser's in-built validation methods, and gain access to `:invalid`, `:valid`, and `:required` pseudo-classes for easy styling. In a similar fashion, the `pattern` attribute[^9] should also be added to validate fields based on particular regular expression.

### Tables

While Bootstrap offers several modifiers to their table styles, other than `.table`, we only want to apply `.table-striped` to add zebra-striping. If an action button is implemented in the last column, the heading has a class of <code>.pull-right</code> applied. We set `overflow-x: scroll` in order to allow users on smaller screens the ability to view all content without having the table stretch the containing element.

<a class="jsbin-embed" href="http://jsbin.com/juranov/embed?output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.34.1"></script>

{% highlight html %}
<table class="table table-striped">
  <thead>
    <th>#</th>
    <th>Status</th>
    <th>Course</th>
    <th>Requester</th>
    <th class="text-right">Actions</th>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><span class="label">Live</span></td>
      <td>Computer Science</td>
      <td>Daniel Matthew</td>
      <td>
      <div class="btn-group pull-right">
        <a href="#" data-toggle="dropdown" class="btn btn-large btn-link dropdown-toggle"><i class="icon icon-ellipsis-vertical"></i></a>
        <ul class="dropdown-menu">
          <li><a href="#">View details</a></li>
          <li><a href="#">Upload document</a></li>
          <li><a href="#">Edit &amp; resubmit</a></li>
        </ul>
      </div>
      </td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

As demonstrated in the example above, where actions can be taken on a table row implement them with an action button and dropdown menu.

[^1]: The number of overrides required can be minified should we take advantage of the framework's generator page. Some research may be required in order to generate a suitable set of default values to input.
[^2]: [Bootstrap 2](http://getbootstrap.com/2.3.2/)
[^3]: [Bootstrap 3](http://getbootstrap.com/)
[^4]: [Zurb Foundation](http://foundation.zurb.com)
[^5]: [Open Sans at Google Fonts](https://www.google.com/fonts/specimen/Open+Sans)
[^6]: [Greek Alphabet at Wikipedia](https://en.wikipedia.org/wiki/Greek_alphabet)
[^7]: [Web Font Loader](https://github.com/typekit/webfontloader)
[^8]: [Browser Support: Required attribute](http://caniuse.com/#search=required)
[^9]: [Browser Support: Pattern attribute](http://caniuse.com/#feat=input-pattern)
