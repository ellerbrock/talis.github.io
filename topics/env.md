---
layout: site
title: Environments
body_class: env
---

Currently the conventions are:

* `development` - your local machine, avoid, see `local`
* `local` - the puppet-provisioned vagrant environment, a VM on your development host.
* `build` - the build environment, where code is built and tested
* `staging` - a replica of production for staging built and tested releases. Dependant services may also test against
staging.
* `preview` - a replica of production for previewing branches for product owner review, before release
* `production` - what it says on the tin.

At a minimum, a project should have `local`, `build`, `staging` and `production`.
