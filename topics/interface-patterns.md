---
title: Interface Patterns
layout: site
body_class: interface-patterns
category: Front-end development
---

### Navigation
For navigation purposes we use the following patterns:

<p data-height="268" data-theme-id="0" data-slug-hash="vOvxoa" data-default-tab="result" data-user="danielmatthew" class='codepen'>See the Pen <a href='http://codepen.io/danielmatthew/pen/vOvxoa/'>Talis - Navigation</a> by Daniel Matthew (<a href='http://codepen.io/danielmatthew'>@danielmatthew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

#### Tabs
Use the tabs pattern to display discrete options:

{% highlight html %}
<ul class="nav nav-tabs">
  <li class="active"><a href="#">Home</a></li>
  <li class="disabled"><a href="#">Profile</a></li>
  <li><a href="" disabled>Messages</a></li>
</ul>
{% endhighlight %}

#### Pills

Apply the `.nav-pills` modifier when we are showing different views of the same data:

{% highlight html %}
<ul class="nav nav-pills">
  <li class="active"><a href="#">Home</a></li>
  <li class="disabled"><a href="#">Profile</a></li>
  <li><a href="" disabled>Messages</a></li>
</ul>
{% endhighlight %}

Use the `.nav-stacked` modifier when horizontal space is at a premium.

For all instances, don't forget to apply the `.active` and `.disabled` modifiers where suitable.

### Dropdowns

When there are multiple choices to display for a single interaction, use a dropdown. The button and dropdown menu are grouped within a `.btn-group` container.

<p data-height="268" data-theme-id="0" data-slug-hash="gpZmVZ" data-default-tab="result" data-user="danielmatthew" class='codepen'>See the Pen <a href='http://codepen.io/danielmatthew/pen/gpZmVZ/'>Talis - Dropdowns</a> by Daniel Matthew (<a href='http://codepen.io/danielmatthew'>@danielmatthew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

{% highlight html %}
<div class="btn-group">
  <a class="btn btn-info btn-mini dropdown-toggle" data-toggle="dropdown" href="#">
    Dropdown <span class="caret"></span>
  </a>
  <ul class="dropdown-menu">
    <li class="nav-header">Dropdown header</li>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li class="divider"></li>
    <li class="nav-header">Dropdown header</li>
    <li><a href="#">Link 3</a></li>
  </ul>
</div>
{% endhighlight %}

#### Menu Items
Apply `.divider` to a `<li>` to group items together visually. For actions that alter or remove data, apply `.danger` to the link element.

#### Action Button
The action button is a variant on the above dropdown, and is used where there are multiple secondary tasks to display. The action button does not display text or the caret indicator.

{% highlight html %}
<div class="btn-group">
  <button class="btn btn-large dropdown-toggle" data-toggle="dropdown" href="#">
    <i class="icon icon-ellipsis-vertical"></i>
    <span class="hidden">Actions</span>
  </button>
  <ul class="dropdown-menu pull-right">
    <!-- Menu options -->
  </ul>
</div>
{% endhighlight %}

#### Using Buttons In Page Headers

When we offer two primary actions to the user, we can display both buttons side-by-side. Should there be more than two actions, display the primary action button and an action button.

<p data-height="268" data-theme-id="0" data-slug-hash="KpbmPp" data-default-tab="result" data-user="danielmatthew" class='codepen'>See the Pen <a href='http://codepen.io/danielmatthew/pen/KpbmPp/'>Talis - Page Headers</a> by Daniel Matthew (<a href='http://codepen.io/danielmatthew'>@danielmatthew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Alerts
Use an alert component when there is additional information to show the user based on a change in state. For example, use the alert pattern to inform the user if there are no results from a search query. Or to declare that an record has been saved or deleted.

Alert body text should be wrapped in paragraph tags.

<p data-height="268" data-theme-id="0" data-slug-hash="LVMyYQ" data-default-tab="result" data-user="danielmatthew" class='codepen'>See the Pen <a href='http://codepen.io/danielmatthew/pen/LVMyYQ/'>Talis - Alerts</a> by Daniel Matthew (<a href='http://codepen.io/danielmatthew'>@danielmatthew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

{% highlight html %}
<!-- Basic -->
<div class="alert">
  <p>Something has happened that you, the user, should be aware of!</p>
</div>

<!-- Danger -->
<div class="alert alert-danger">
  <p>Something <strong>bad</strong> has happened that you, the user, should be aware of!</p>
</div>

<!-- Success -->
<div class="alert alert-success">
  <p>Something <strong>good</strong> has happened that you, the user, should be aware of!</p>
</div>

<!-- Info -->
<div class="alert alert-info">
  <p>Something <strong>useful</strong> has happened that you, the user, should be aware of!</p>
</div>
{% endhighlight %}

### Labels
Use a label to bring attention to the state of an object. Within TADC they are used to add a visual highlight to the status of queues and requests.

<p data-height="268" data-theme-id="0" data-slug-hash="RPEVwe" data-default-tab="result" data-user="danielmatthew" class='codepen'>See the Pen <a href='http://codepen.io/danielmatthew/pen/RPEVwe/'>Talis - Labels</a> by Daniel Matthew (<a href='http://codepen.io/danielmatthew'>@danielmatthew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

To implement a label, apply `.label` to an inline element. Labels have a number of modifiers to enable users to grok the status at a glance:

{% highlight html %}
<span class="label">Basic</span>
<span class="label label-primary">Primary</span>
<span class="label label-info">Info</span>
<span class="label label-success">Success</span>
<span class="label label-warning">Warning</span>
<span class="label label-important">Important</span>
{% endhighlight %}

### Pagination
Use the pagination control when the number of results displayed exceeds that which could be displayed over three pages. Apply the `.active` and `.disabled` classes to the appropriate list elements to keep the user informed of their place within the application.

Apply the additional `.pagination-centered` class applied in order to have the element render in the middle of its parent element.

<p data-height="268" data-theme-id="0" data-slug-hash="eNbWmB" data-default-tab="result" data-user="danielmatthew" class='codepen'>See the Pen <a href='http://codepen.io/danielmatthew/pen/eNbWmB/'>Talis - Pagination</a> by Daniel Matthew (<a href='http://codepen.io/danielmatthew'>@danielmatthew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

{% highlight html %}
<div class="pagination">
  <ul>
    <li><a href="#">Prev</a></li>
    <li class="active"><a href="#">1</a></li>
    <li class="disabled"><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">Next</a></li>
  </ul>
</div>
{% endhighlight %}

### Pager
Apply `.pager` to a list containing next and previous controls in order to allow the user to move backwards and forwards through content. The character entities are currently hard-coded within the markup, though this should be moved into the stylesheet and generated with CSS.

<p data-height="268" data-theme-id="0" data-slug-hash="JdwNoO" data-default-tab="result" data-user="danielmatthew" class='codepen'>See the Pen <a href='http://codepen.io/danielmatthew/pen/JdwNoO/'>Talis - Pager</a> by Daniel Matthew (<a href='http://codepen.io/danielmatthew'>@danielmatthew</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

{% highlight html %}
<ul class="pager">
  <li class="previous">&larr;Previous</li>
  <li class="next">Next&rarr;</li>
</ul>
{% endhighlight %}
