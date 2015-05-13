---
layout: site
title: Continuous Integration
body_class: ci
---

We should be using Continuous Integration[^1] for any code that we release. This includes product code, api code and also client libraries we publish.

CI should be configured to trigger on merges to the `master` branch, and should provision a clean environment.

Each integration should be verified by an [automated build](builds.html) which detects any errors. 

If the project is open sourced and the report publically available it is worth considering setting up a Travis build for it.

nb: do we need this page at all? do we ever think about CI seperately to Automated Builds?  CI is about listening and triggering builds based on a criteria. ??? 



[^1]: [Continuous Integration](http://martinfowler.com/articles/continuousIntegration.html) 

