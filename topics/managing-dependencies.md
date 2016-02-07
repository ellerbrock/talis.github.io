---
layout: site
title: Managing Dependencies
body_class: managing-dependencies
---

The following details how dependencies are managed for a given technology stack.

### Node.js [^1]

Due to the way third party dependencies are versioned, sometimes a build can fail when a dependency somewhere in the tree is updated with a breaking change. For example, take a project that has the following dependency tree:

{% highlight bash %}
project A@1.0.0
-- dependency B@1.0.0
   -- dependency C@^1.0.0
{% endhighlight %}

In the root `package.json` file, the project can only specify the version dependency `B` but not `C`. If `C` were to break `B` in version 2 (because of the loose verson requirement of `B` denoted by the `^`) then the build cannot be fixed without asking the author of `B` to fix their package.

In order to guarantee every build in any environment uses the exact same dependencies at a given point in time, NPM shrinkwrap[^2] is used to create a snapshot of a working dependency tree.

#### Setting up a new project

Once you are happy with the contents of `package.json`, run the commands below. The cleaning of the NPM cache and pruning ensures that any packages previously installed but not included in `package.json` are not included in the shrinkwrap.  Without this, the shrinkwrap command can fail with invalid package errors.

{% highlight bash %}
npm cache clean
npm prune
npm install
npm shrinkwrap
{% endhighlight %}

Add the generated `npm-shrinkwrap.json` file to the source code repository and commit.

If you want the development dependency tree as well, then run `npm shrinkwrap --dev`. Please note that because an `npm install` will install packages only specified from `npm-shrinkwrap.json`, a production install (`npm install --production`) will not exclude the development packages.

#### Updating a dependency

Follow the set of commands below. You must specify an exact version of a dependency to install e.g. `1.2.3`.

{% highlight bash %}
npm cache clean
npm prune
npm install --save package-name@version|git-repo#tag-version
npm shrinkwrap
{% endhighlight %}

Commit the updated `npm-shrinkwrap` file.

[^1]: [Node.js](https://nodejs.org/)
[^2]: [NPM shrinkwrap](https://docs.npmjs.com/cli/shrinkwrap)
