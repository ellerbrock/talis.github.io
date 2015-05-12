---
layout: site
title: Code Reviews
body_class: code-reviews
---


All code at Talis must go through peer review before it can be merged into `master`. This can be done by
raising a pull request on the relevant GitHub repository and asking your colleagues for input.

### 30% vs 90%

Early feedback on an outline plan for your code is great. We follow the 30% feedback rule[^1]
which allows developers to get early feedback on designs before dotting the i's and crossing the t's. Simply mark your
pull request with 30% in the title to get this kind of feedback.

Later, when you are closer to merge, and need a pedant, re-title your pull with 90% to get feedback on the details.

You'll find that smaller changes (one liners or very small features) will skip the 30% stage and go right to demanding
90% feedback.

### What is a 0% PR?

These are pull requests raised by developers wishing to track their own changes, and organising their thoughts for
later review.

Please do not comment on these PRs unless the owner asks you to.

### How do I perform a Code Review?

Don't always rely on the diff - depending on the size of the changes in the pull request, it might be a good idea to
check out the branch locally. This gives you a number of benefits:
* You can open up your IDE and see the code as it was written. A variable may have been renamed - you can search in
your IDE for the old values.
* If there is a visual change, you can spin up the app and see what it looks like. The code might look ok, but it may
look terrible.
* You definitely won't see errors such as browsers blocking access to assets just by looking at a diff - you might spot
 some bugs by just loading the changes.
* You can run the local build and see any potential breakages.

### When can I hit merge?

There are no hard and fast rules about when a PR can be merged, except that you have to have had a round of feedback
from a peer at 90% level, and responded to all raised issues either by committing further work or resolving any
discussion in the PR itself.



[^1]: [The 30 percent rule and the art of early feedback](http://lifehacker.com/the-30-percent-rule-and-the-art-of-early-feedback-1619474527)