---
layout: site
title: Coding Standards
body_class: code-standards
---

The following checklist should be applied when conducting a 90% [code review](code-reviews.html).

### Security
* Code should *never* contain credentials. These are a property of the environment.
* Is the new code opening up a vulnerability? We should all be aware of methods of attack - XSS[^1] and Injection
attacks for example.
* Assets should be loaded with a a Protocol Relative URL[^2]

### General
* Fix any broken windows. They are not someone else's problem. See [charter](charter.html).
* The repository/project should be Continuously Integrated - see [Continuous Integration](ci.html) for specifics.
* The code should compile and run without error.
* No commented out code blocks. Source control has history for a reason.
* Look out for spelling mistakes, both in user text and also code itself
* Debug statements to the console (e.g. `echo`, `var_dump`, `System.out.print`, `console.log`) should be removed. Use
debug logging instead.
* Check for adequate logging. If you were personally supporting this pull request on your own after merging,
you should be satisfied with the level of debug.
* Similarly check that adequate analytics have been added (where appropriate).
* Ensure code is defensive. ```if(var[1])``` has potential to break.
* If signatures of functions have changed, check for redundant variables. Also, does the documentation block for the function correctly reflect its intended function and the parameters it accepts and values it returns.
* If the project supports i18n[^3] then check all user strings have been translated.[^4]
* Look out for missing/badly named/misspelt tags.
* If introducing a new external dependency, the appropriate version should be locked on to, rather than using fuzzy
versioning.
* Pick up issues that could/should have been picked up by a linter. If there is no linter, ask for one to be added.
* Don't allow new TODOs without referencing an open issue for discussion.

### Code smells [^5]
* Repetitive code - DRY [^6]
* Large classes
* Poor separation of concerns[^7]
* Badly named file/class names
* Undefined, badly named or redundant variables
* Unnecessary code where a command might do the trick
* Does the code look complicated and is it hard to understand? KISS. [^8]
* Use constants
* ```// Are there enough comments in the code?```

### Performance
We need to be mindful of how our applications perform on many levels. We should look for changes that adversely
  affect response times, as well as any other negative effects the new code might have. Amongst other things, look for:

* Inefficient database queries
* Missing indexes on databases
* Infinite loops/recursion
* Opportunities to break out of a loop early when appropriate
* Opening up connections to database/other services and not closing them
* Incorrect callback names (as appropriate) - or callbacks triggered too early
* Situations where a callback is made but code can continue to execute after this point - with unintentional consequences

### Tests
* Ensure there are appropriate tests (unit/integration/browser). See [testing](testing.html) for more specifics.
* Tests that rely on external services can result in failing tests. Use a mock/stub/spy.
* Tests should be atomic and pass if they are run singularly or part of the suite. They should never depend on
being run in a specific order or rely on the output of another test.
* Tests should make full use of assertions ```assertEquals(true, $yourVal);``` vs ```assertTrue($yourVal);```
* Waiting for elements on a page during browser tests is much preferred to `sleep` commands.

### Documentation
* There should be documentation - README up to date, apiary docs (if applicable), wiki page and/or infra runbook
if necessary.
* You should add descriptions to all functions regardless of access, define what they return and if they throw
exceptions
* Params should have a type and description
* If in doubt, check out JSDoc[^9] or phpDocumentor[^10]


[^1]: [XSS](http://en.wikipedia.org/wiki/Cross-site_scripting)
[^2]: [The Protocol-relative URL](http://www.paulirish.com/2010/the-protocol-relative-url/)
[^3]: [Localization vs. Internationalization](http://www.w3.org/International/questions/qa-i18n)
[^4]: [Gettext](http://php.net/manual/en/book.gettext.php)
[^5]: [Code smells](https://sourcemaking.com/refactoring/bad-smells-in-code)
[^6]: [Don't repeat yourself](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
[^7]: [Separation of Concerns](http://en.wikipedia.org/wiki/Separation_of_concerns)
[^8]: [KISS principle](http://en.wikipedia.org/wiki/KISS_principle)
[^9]: [JSDoc](http://usejsdoc.org/)
[^10]: [phpDocumentor](http://www.phpdoc.org/docs/latest/index.html)
