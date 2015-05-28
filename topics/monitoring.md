---
layout: site
title: Monitoring
body_class: monitoring
---

An application only exists if it is monitored.


### Status Checks

Applications where possible should expose a status endpoint for internal monitoring, this status endpoint should expose the current health of the application.

### External Monitoring

An external monitoring function should exist where applicable, and this should exercise a function of the application and not just a landing page.

### Non Listening Services

Services such as job workers and batch processes that are not externally accessible should still be monitored.

They can be monitored to show if they are in a running state.

The result of these services should be monitored, this could be based on queues, data alteration, or the reading of log files.