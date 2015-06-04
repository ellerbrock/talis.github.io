---
layout: site
title: Testing
body_class: testing
---

As with most things, projects at Talis use test frameworks that are appropriate for their tooling - for example: protractor[^1], jasmine[^2] and mocha for projects containing Javascript/AngularJS.

More important is the process of inclusion of appropriate tests when creating a new project, and additionally when extending an existing one.

Part of the code review process is to ensure that a [pull request](code-reviews.html) that adds new functionality also adds tests where appropriate. Similarly, that the changes made in the PR do not break existing tests, and where they do, that these tests have been fixed up.

### Things to consider

* choose a test framework that is appropriate to the project tooling
* ensure the tests you write are well-written and are clear about what they are testing
* ensure each test will work in isolation (i.e. it's atomic) and that there is no in-built reliance on test execution order
* consider parallel rather than serial test execution as this reduces run time
* avoid adding in arbitrary wait statements - instead wait for a logical point (i.e. wait for an element to appear)
* make sure you test on multiple browsers - we test against: IE, Safari, Firefox and Chrome at a minimum
* ensure you write repeatable tests - make sure that if your tests rely on specific data, that your test process loads this data and ensures that the state is known before executing the tests
* test against an analog of live configuration where possible

[^1]: [Protractor JS](https://angular.github.io/protractor/#/)
[^2]: [Jasmine](http://jasmine.github.io/1.3/introduction.html)
[^3]: [Mocha](http://mochajs.org/)