---
layout: site
title: Coding Standards
body_class: code-standards
---

The following checklist should be applied when conducting a 90% [code review](code-reviews.html).

### Fix those broken windows!
* Are we making a broken window worse? See [charter](charter.html).

### Security
* Have credentials been added to the code?
* Is the new code opening up a vulnerability? We should all be aware of methods of attack - XSS[^1] and Injection
attacks for example.
* If assets are available on SSL, always use `https://` - otherwise assets should be a Protocol Relative URL[^2]

### Code
* The repository / project should be Continuously Integrated - see [Continuous Integration](ci.html) for specifics.
* Does the app work when you run it? The code might look ok, but it may look terrible, produce Javascript errors and
clog up the error logs.
* Is there commented out code, but left in source control?
* Look out for spelling mistakes.
* Is there enough debug/logging? If you were personally supporting this pull request on your own after merging,
would you be satisfied with the level of debug?
* Is the code defensive enough? ```if(var[1])``` has potential to break.
* Have signatures of functions changed? Are there redundant variables left lying around in the code?
* Some projects / repositories are translatable - is there appropriate levels of i18n functionality.
* Look out for missing / badly named / misspelt tags.
* If introducing a new external dependency, the appropriate version should be locked on to.
* Pick up issues that could/should have been picked up by a linter. If there is no linter, question why it hasn't been added.
* Code smells:[^3]
    * Repetitive code
    * Large classes
    * Poor separation of concerns[^4]
    * Repetitive code
    * Badly named file / class names
    * Undefined and redundant variables
    * Unnecessary code where a command might do the trick
    * Does the code look complicated and is it hard to understand? KISS.
    * Are we making use of constants?
    * ```// Are there enough comments in the code?```

### Performance
We need to be mindful of how our applications perform on many levels. We should look for changes that adversely
  affect response times, as well as any other negative effects the new code might have. Is there a modal that can never
  be closed? Or a route that can trigger a 500 in certain situations? Look for:

* Inefficient database queries
* Missing indexes on databases
* Infinite loops / recursion
* Inefficient code
* Opening up connections to database / other services and not closing them
* Incorrect callback names (as appropriate) - or a callback triggered too early?

### Tests
* Are there tests?
* Look for flaky tests - might they fail some of the time?
* Do they mock / stub / spy the right things? Do they mock too much?
* Do tests rely on external services not under our control? Relying on anything external is a recipe for a failing test.
* Tests should be atomic and pass if they are run singularly or part of the suite. They should never depend on
being run in a specific order or rely on the output of another test.
* Is the code making full use of assertions? ```assertEquals(true, $yourVal);``` vs ```assertTrue($yourVal);```
* See [testing](testing.html) for more specifics.

### Documentation
* Is there documentation - see [charter](charter.html).
* You should add descriptions to all functions regardless of access, define what they return and if they throw
exceptions
* Params should have a type and description
* If in doubt, check out JSDoc[^5] or phpDocumentor[^6]


[^1]: [XSS](http://en.wikipedia.org/wiki/Cross-site_scripting)
[^2]: [The Protocol-relative URL](http://www.paulirish.com/2010/the-protocol-relative-url/)
[^3]: [Code smells](https://sourcemaking.com/refactoring/bad-smells-in-code)
[^4]: [Separation of Concerns](http://en.wikipedia.org/wiki/Separation_of_concerns)
[^5]: [JSDoc](http://usejsdoc.org/)
[^6]: [phpDocumentor](http://www.phpdoc.org/docs/latest/index.html)