---
layout: site
title: Code Style
body_class: code-style
---
### Universal
- Use soft tabs with two spaces

### HTML
- Use HTML5 doctype
- One element per line
- Self close tags

{% highlight html %}
<!doctype>
<div class="foo" id="bar" data-baz="foobar"></div>
{% endhighlight %}

### CSS
- One selector per line
- One declaration per line
- Opening brace on same line
- Closing brace on new line
- End all declarations with a semi-colon
- All hex values are lowercase

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
}
{% endhighlight %}

[^1]: (http://codeguide.co)
[^2]: (https://gist.github.com/bobbygrace/9e961e8982f42eb91b80)
