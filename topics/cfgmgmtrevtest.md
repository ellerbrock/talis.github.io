---
layout: site
title: Reviewing and Testing Configuration Management Changes
body_class: cfgmgmtrevtest_
---

Configuration management changes have the potential to drastically affect our production infrastructure. Unlike software builds there isn't a published artifact, instead once changes are merged to the _master_ branch those changes will be rolled out across our infrastructure immediately. All changes should be reviewed and tested before being merged.

Testing, should at the very least, include applying the configuration change to a provisioned environment, the result of the run should be included as part of the pull request. We should follow the same [peer review](code-reviews.html) process we do for all code changes.


