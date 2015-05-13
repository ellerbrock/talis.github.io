---
layout: site
title: Source Control
body_class: source-control
---


All source is stored within the [Talis GitHub](https://github.com/talis).

Our culture around source code is one of Shared (or Collective) Code Ownership[^1], this means that we are all,as a team, collectively responsible for our code. We all own the code and in principle any one of us can make changes anywhere[^2]. 

### Working with branches

`master` is always regarded as deployable, following a green build.

For any changes, always create a branch. The branching model we use is based on GitHub Flow[^3]. We branch from `master`, implement our changes on the branch and then merge the branch back down to `master`.

Committing often is also a good practise. Every committed revision gives you a rollback position, and makes it easier for you step back through chages locally[^4].

Before merging a branch, always raise a [pull request](code-reviews.html), and make sure your changes have been reviewed by others.

Once your branch is merged into master, its good practise to delete the branch.

[^1]: [Engineering Culture Series: Code ownership](https://code.facebook.com/posts/263824650408138/engineering-culture-series-code-ownership/)
[^2]: [Collective Code Ownership](http://www.jamesshore.com/Agile-Book/collective_code_ownership.html)
[^3]: [Github Flow](https://guides.github.com/introduction/flow/)
[^4]: [Commit Often, Perfect Later, Publish Once](https://sethrobertson.github.io/GitBestPractices/)