---
title: Accessibility
layout: site
body_class: accessibility
category: Front-end development
---

### WCAG
As an organisation, we should aspire to our products achieving - and maintaining - a minimum rating of AA. There are several areas where we can easily achieve a AAA-rating, including:

- applications are fully keyboard accessible (AAA)
- text alternatives for non-text content are provided (AAA)
- our layouts adapt to the device (AAA)

### ARIA
ARIA attributes are designed to imbue meaning to markup. They are a critical step to ensuring that our products can be used by the widest audience possible.

#### Landmark Roles
The `role` attribute programmatically identifies sections of a page and help assistive technologies navigate to the various components[^1]. While the intention is that at some point HTML elements such as `<main>` or `<nav>` won't need an additional role attribute, current browser support[^2] means that the appropriate attribute is required. The  W3C make an exception for this, saying:

> If there is a suitable HTML element or attribute already implemented, but the accessibility support is not yet available, it is of course allowed and encouraged to use ARIA.

#### Skip To Content
Users taking advantage of assistive technologies will benefit from the addition of a 'Skip To Content' link at the root of the page. Positioned offscreen and only visible on `:focus`, it offers the ability to avoid repetitive and lengthy navigation menus.

{% highlight html %}
<a id="skip-to-content" href="#content">Skip to main content</a>
<main id="content" role="main" tabindex="0">...</main>
{% endhighlight %}

{% highlight css %}
#skip-to-content {
  padding: 1em;
  position: absolute;
  top: -40px;
  left: 1em;
  z-index: 1000;
  color: white;
}

#skip-to-content:focus {
  position: absolute;
  top: 0;
  background: #4593ff;
}
{% endhighlight %}

#### Keyboard Navigation
Controls such as date-pickers may provide duplicate functionality for users who rely on the keyboard. Buttons that invoke such functionality should be removed from the browsers `tab-index` by setting the value of the attribute to `-1`.

{% highlight html %}
<a class="btn btn-datepicker" tabindex="-1" aria-hidden="true"><i class="icon icon-calendar"></i></a>
{% endhighlight %}

These controls should also be hidden from assistive technologies by applying the `aria-hidden=true` attribute:

> Authors MAY, with caution, use aria-hidden to hide visibly rendered content from assistive technologies only if the act of hiding this content is intended to improve the experience for users of assistive technologies by removing redundant or extraneous content. Authors using aria-hidden to hide visible content from screen readers MUST ensure that identical or equivalent meaning and functionality is exposed to assistive technologies.


#### Links
Avoid using generic links such as "Read More". Where unavoidable, use `aria-label` to provide a more verbose description of the link contents, or `aria-labelledby` to reference a more descriptive element. While the `title` attribute might seem logical, it is ignored by screen readers.

{% highlight html %}
<h1 id="brown-fox-title">The Brown Fox</h1>

<!-- Screen reader announces: "Link; Article about the brown fox" -->
<a href="#" aria-label="Article about the brown fox">Read more</a>

<!-- Screen reader announces: "Link; The Brown Fox" -->
<a href="#" aria-labelledby="brown-fox-title">Read more</a>
{% endhighlight %}


#### Images
The `alt` attribute on images is required in an effort to conform to accessibility guidelines. It should provide a concise summary of the image contents. If this is not possible, leave it empty: an empty attribute is better than a missing one as the assistive technology will ignore it. A more verbose description can be added using `aria-describedby` - this is useful if there is an associated caption.

#### Tabs
Elements that represent tab controls should assume `role="tab"`, and be linked to the relevant content using the `aria-controls` attribute. The content itself implements the `tabpanel` role and `aria-labelledby`.

{% highlight html %}
<ul class="nav-tabs">
  <li id="foo" role="tab" aria-controls="bar">Foo</li>
</ul>
<div id="bar" role="tabpanel" aria-labelledby="foo">Bar</div>
{% endhighlight %}

#### Modal Windows
Ensure that keyboard focus is set on the modal when it is invoked, and is returned to the main document when dismissed. It is possible to avoid scripting the second scenario if markup is authored in a sequential manner.

{% highlight js %}
$('.modal').on('shown', function() {
  document.activeElement.blur();
  $(this).find('.modal-body :input:visible').first().focus();
});
{% endhighlight %}

### Implementation

#### Tooling

Resources exist to guide the developer through a straightforward accessibility audit[^3]. By performing this as a pre-flight check before running any automated tests, you will catch the more obvious omissions. With that complete, developers can run the appropriate audit in Chrome[^4] or Firefox[^5].

For projects that take advantage of a task runner, it is worth adding the appropriate plugin[^6] and having it run pre-commit[^7].

[^1] [WAI-finding with ARIA Landmark Roles](http://alistapart.com/column/wai-finding-with-aria-landmark-roles)
[^2] [HTML5 Accessibility](http://www.html5accessibility.com/)
[^3] [Web Accessibility Checklist](http://a11yproject.com/checklist.html)
[^4] [Accessibility Developer Tools for Chrome](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en-US)
[^5] [Link to go here]()
[^6] [grunt-accessibility plugin](https://github.com/yargalot/grunt-accessibility)
[^7] [Grunt & pre-commit hooks](https://juhq.wordpress.com/2013/01/28/git-hooks-pre-commit-grunt/)
