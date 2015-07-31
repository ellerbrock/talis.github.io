---
title: Accessibility
layout: site
body_class: accessibility
category: Front-end development
---

### ARIA Roles


### Keyboard Navigation
Controls such as date-pickers may provide duplicate functionality for users who rely on the keyboard. Buttons that invoke functionality such as this can be removed from the browsers `tab-index` by setting the value of the attribute to `-1`. These controls can also be hidden from assistive technologies by applying the `aria-hidden=true` attribute.

### Images
The `alt` attribute on images is required in an effort to conform to accessibility guidelines. It should provide a concise summary of the image contents. If this is not possible, leave it empty: an empty attribute is better than a missing one as the assistive technology will ignore it.
