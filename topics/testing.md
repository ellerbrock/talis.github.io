---
layout: site
title: Testing
body_class: testing
---

For any code to be considered ready for production there need to be tests. For a given change this might include writing Unit Tests[^1], Integration Tests and End to End Browser Tests. We need to ensure that we have an appropriate level of testing. Our [code review](code-reviews.html) process should pick up issues around the appropriate level of testing.

### General Guidelines

* All test suites should produce xUnit xml reports.
* All test reports should be integrated into continuous integration tools (Bamboo, Travis, etc), so that the CI tool can parse those results and provide detailed reports to the team; as well as fail the build should any tests fail.
* 

### End to End Browser Testing

End to End Browser tests are by definition time consuming. In order to ensure that we can keep build durations down we need to consider a number of things when writing them:

* Ensure that tests are atomic, in other words the test you are authoring should not be dependent on any other test in the suite, or rely on fixture data that another test is likely to change.
  * it might be helpful to ask yourself _can my test be run multiple times without the need to reset data_
* Ensure that all of our tests can be run in parallel. This is important because it is one of the most effective ways we can help ensure that build durations are kept to a minimum.
* Flaky Tests are Poison[^2]. If a test intermittently fails it creates frustration, reduces confidence and slows our ability to release. These tests should be quarantined and fixed/re-written.

If your browser test suite is taking longer than 45 minutes to run, then it's time to refactor.


[^1]: [Unit Tests - Martin Fowler](http://martinfowler.com/bliki/UnitTest.html)
[^2]: [Never send a human to do a machines job](https://www.youtube.com/watch?v=_5Sr4EYH7M8)


