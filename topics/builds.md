---
layout: site
title: Builds
body_class: builds
---

As part of our commitment to Continuous Integration[^1], we configure an automated build for each of the products and code libraries that we release or ship.

There are many ways to script an automated build, we currently use a mixture of ANT[^2], Grunt[^3] and in some cases Make[^4]. Sometimes the selection of tool is driven by our preference and experiences, at other times it is driven by kind of project we are working on. For example we use Maven[^5] for building some of Java projects because its the most appropriate tool for that.

### Build Steps

Irrespective of which tool you select, as a minimum an automated build should:

* be executed on a clean, provisioned, environment
* after checking out code, use relevant package managers to install dependencies e.g. `npm`, `composer`, `bower` etc.
* run any configured linters to identify code hygiene issues. The build should fail if there are code hygiene issues. If your build doesnt include a linter, then you should add one.  
* clear and load any base data the build requires for integration / browser tests  
* run test suites and generate test reports. The build should fail if there are test failures.
  * Furthermore there should be no dependencies between tests; the order of execution of tests should not affect the build.
* build a named distribution e.g. `<project>-<githash>.tar.gz`
  * the distribution should only include code to be released.
  * the distribution should contain 3rd Party Libraries the release depends on. For example if your project relies on packages in `npm` then the distribution should include the `node_modules` folder with those packages. So we can guarantee that the libraries included in the distribution are the ones we tested against.
* upload the distribution to a location that our provisioning/deployment tools can retrieve the distribtion from e.g. `s3://aspire-operations`.
* store / make available logs generated during the build

[^1]: [Continuous Integration](http://martinfowler.com/articles/continuousIntegration.html) 
[^2]: [ANT](http://ant.apache.org/)
[^3]: [Grunt](http://gruntjs.com/)
[^4]: [Make](http://www.gnu.org/software/make/)
[^5]: [Maven](https://maven.apache.org/)

