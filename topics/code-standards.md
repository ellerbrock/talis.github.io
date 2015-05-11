---
layout: site
title: Coding Standards
body_class: code-standards
---


The following checklist should be applied when conducting a 90% [code review](code-reviews.html).

### 90% code review checklist
* Code hinting
* Redundant variables








-
- Basics with markup
    - missing ALT tags in HTML
    - undefined Javascript variables
    - If you're using LESS / SASS - are there colours explicitly used when they should be variables?
    - Straight up CSS, look out for specific CSS rules - ```div.myclass``` might be better as ```.myclass``` (YMMV)

-
- Any TODOs left in the code
- Any commented out code left in - delete it, you can always look at the diff in git history
- Spelling missteaks
- Is there enough logging? If you were personally supporting this feature, would you have enough debug?
- Are there any code smells left lingering - fix those broken windows yo!

- defensive checks around code. for example....
  <CODE EXAMPLE HERE>

- language i18n replacements
  <CODE EXAMPLE HERE>

- docblocks
  - description for class
  - all param declarations - with a type and a description
  - what the function returns
  - any errors the function might throw

- class names - could have already been picked up in 30% code review, but good to review here
- tests
  - is there a assertEquals(true,yourVal) when it could be assertTrue
  - don't necessarily need docblocks for every test function you create, a good name for a function will suffice
  - mocking problems

- depending on the size of the PR, don't just look at the diff.
    - for example, if variables are being renamed, check out the branch locally, do a search in your IDE for the old values.
    - if it's a new feature, check out the branch and spin up the app to see what changes are going on
    - if it's a visual change, a text diff isn't going to cut it - check out the branch and see what it looks like

- inefficiencies
  - Any unnecessary loops when a command might do the trick
  - Any possibilities for infinite recursion
  - Any ineffecient DB queries - picked up in 30%

