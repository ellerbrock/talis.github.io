---
layout: site
title: Builds
body_class: builds
---

As part of our commitment to Continuous Integration[^1], we configure an automated build for each of the products and code libraries that we release or ship.

There are many ways to script an automated build, we currently use a mixture of ANT[^2], Grunt[^3] and in some cases Make[^4]. Sometimes the selection of tool is driven by our preference and experiences, at other times it is driven by the kind of project we are working on. For example we use Maven[^5] for building some of our Java projects because it's the most appropriate tool.


### Build Steps

Irrespective of which tool you select, as a minimum an automated build should:

* be executed on a clean, provisioned, environment
* use relevant package managers to install dependencies e.g. `npm`, `composer`, `bower` etc.
* run any configured linters to identify code hygiene issues. The build should fail if there are code hygiene issues. If your build doesn't include a linter, then you should add one.  
* clear and load any base data the build requires for integration / browser tests  
* run test suites and generate test reports. The build should fail if there are test failures.
* build a named distribution
* upload the distribution to a location that our provisioning/deployment tools can retrieve the distribtion from e.g. `s3://aspire-operations`.
* store / make available logs generated during the build

### Build script common targets

Both ANT and Grunt allow you to create named `targets` or `tasks`, and both allow us to create meta tasks i.e a task which is a wrapper for calls to a set of other tasks. So irrespective of which build tool is used we can maintain a common interface for our build scripts. 

Here are the common targets all builds should expose: 

* init: _initalises the environment, checks that requirements are met, installs any dependencies_ 
* check-code: _run any linters, code hygiene tools_
* unit-test: _run unit tests_
* load-base-data: _loads any base / test data_ (if applicable)
* integration-test: _run integration tests_ (if applicable)
* browser-test: _run browser tests_ (if applicable)
* dist: _build the distribution_


### Distributions

An important responsibility of the automated build is to produce the distribution. The only requirement for using it should be to unpack it onto an environment provisioned to run it. A distribution should:

* be named using this convention. `<project>-<git-short-commit-hash>.tar.gz`. 
* only include code to be released.
* contain 3rd Party Libraries that the release depends on. For example if your project relies on packages in `npm` then the distribution should include the `node_modules` folder with those packages. So we can guarantee that the libraries included in the distribution are the ones we tested against. 
* not include any development dependencies.


[^1]: [Continuous Integration](http://martinfowler.com/articles/continuousIntegration.html) 
[^2]: [ANT](http://ant.apache.org/)
[^3]: [Grunt](http://gruntjs.com/)
[^4]: [Make](http://www.gnu.org/software/make/)
[^5]: [Maven](https://maven.apache.org/)

