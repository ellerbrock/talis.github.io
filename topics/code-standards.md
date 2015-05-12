---
layout: site
title: Coding Standards
body_class: code-standards
---

The following checklist should be applied when conducting a 90% [code review](code-reviews.html).

Note that not everything in this checklist will be appropriate to the changes you are reviewing - but it should cover a
lot of bases.

### 90% code review checklist

* Fix those broken windows!
    * Is the code that is being altered, making a broken window worse? As an engineering team we have agreed that we
    should fix broken windows as we go. If we're adding to the problem, why are we doing it?
    * Is the project you're working on public? If it is, does it have a Travis YAML file? If not, why not!
    * If it's private, does it have a build? If not, does it need one creating?

* Don't always rely on the diff
    * Depending on the size of the changes, it might be a wise idea to check out the branch locally. This gives you
    a number of benefits:
        * You can open up your IDE and see the code as it was written. A variable may have been renamed - you can
        search in your IDE for the old values.
        * If there is a visual change, you can spin up the app and see what it looks like. The HTML/CSS/JS may look
        ok code-wise, but it may look terrible.
        * You definitely won't see errors such as browsers blocking access to assets just by looking at a diff - you
        might spot some bugs by just loading the changes.
        * You can run the local build and see any potential breakages.

* Security
    * Have credentials been added to the code?
    * Does this PR touch an area of security that we could clean up?
    * Is the new code opening up a vulnerability? We should all be aware of methods of attack - XSS[^1] and Injection
    attacks are a couple of examples but there are others.
    * Does the code change impact on HTTPS? For example, if we're adding a new javascript external, is it referencing
    http direct? If it is, then it's going to cause issues.

* Code
    * Look for bugs!
    * Is there commented out code, but left in source control? You can always get back to code via
    git history, so why leave it in but commented out? (There might be a good reason for this of course!)
    * Are there any TODOs left in the code? Do they need to be completed? Do they need to be raised as a GitHub issue?
    * Look out for spelling missteaks.
    * Is there enough debug/logging? If you were personally supporting this pull request on your own after merging,
    would you be satisfied with the level of debug?
    * Is the code defensive enough? ```if(var[1])``` has potential to break.
    * Have signatures of functions changed? Are there redundant variables left lying around in the code?
    * Some projects / repositories should be translatable into other languages. Are you reviewing a code review for one
    of those repositories and is there some english text added without being wrapped in the appropriate function?
    * For some projects, HTML gets linted and it's not possible to get a build through with missing ALT tags
    (for example)[^2]. Look out for missing tags and badly named / misspelt tags.
    * Look for code smells:
        * Repetitive code
        * Large classes
        * View logic in controllers
        * Controllers doing too much
        * Repetitive code
        * Bad file / class names
        * Undefined variables
        * Unnecessary code where a command might do the trick
        * Configuration inside of applications rather than in specific config files / environment
        * Does the code look complicated and is it hard to understand? If someone doesn't get what code is doing,
        stands a chance that it is. KISS.
        * ```// Are there enough comments in the code?```
        * Not too many real specifics over code examples, but look for things that could be done better, for example,
        ```div.myclass``` may be better as ```.myclass```. Very subjective and YMMV, but one to look out for.

* Code hinting
    * If there isn't any code hinting at all, why not? We know about tooling (perhaps not installed), so should we
    add it into the project if it's not there?
    * If everything is in place, will the code fail the linter? The linter SHOULD have been run, but good to check
    now rather than have a failed build (especially if the build takes hours to run).

* Dependency management
    * How are external dependencies managed? Does this PR introduce a new dependency, but not through a dependency
    management tool?
    * As an engineering team we have discussed the merits of locking onto specific versions of external dependencies (for
    apps rather than libraries), if we're not locking on, there should be a good reason as to why not.

* Tests
    * Are there tests?
    * Look for flaky tests - could they fail some of the time? Do they rely on pre-canned data that may change if
    other tests are run before it?
    * Do they mock / stub / spy the right things? Do they mock too much?
    * Do tests rely on external services not under our control being up and running? Relying on anything external
    is a recipe for a failing test.
    * Tests should be designed to run in parallel to optimise build times. Parallel tests may not be part of the build
    (yet), but the tests should be able to run like that when it is.
    * Is the code making full use of assertions? ```assertEquals(true, $yourVal);``` vs ```assertTrue($yourVal);```

* Documentation
    * Are new functions fully documented? IDEs detect documentation and make it easier for the next developer
    to use, so make it as easy as possible. If the PR is for a public repository, its even more important.
    * Functions should have a description, tell you what is being returned and if there are exceptions thrown.
    * Function params should have a type and a description
    * If in doubt, check out JSDoc[^3] and phpDocumentor[^4]
    * Are there any functions being changed where there is a missing docblock? It only takes a couple of seconds to
    add a missing one.
    * Does the PR change APIs that have documentation associated with them? If we've already linked the repo
    to [apiary](http://apiary.io), is there a corresponding change to the ```apiary.apib``` file?
    * If the PR is an API change and there is no external documentation, is now a good time to add it and link to it?

* Performance
    * We need to be mindful of how our applications perform on many levels. We should look for changes that adversely
      affect response times as well as any other negative effects the new code might have. Is there a modal that can never
      be closed for example, or a route that can trigger a 500 in certain situations? Look for:
        * Inefficient database queries
        * Missing indexes on databases
        * Infinite loops / recursion
        * Inefficient code
        * Opening up connections to database / other services and not closing them
        * Incorrect callback names (as appropriate) - or a callback triggered too early?

[^1]: [XSS](http://en.wikipedia.org/wiki/Cross-site_scripting)
[^2]: [grunt-htmlhint](https://github.com/yaniswang/grunt-htmlhint)
[^3]: [JSDoc](http://usejsdoc.org/)
[^4]: [phpDocumentor](http://www.phpdoc.org/docs/latest/index.html)