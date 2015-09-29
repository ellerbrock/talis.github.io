---
layout: site
title: Monitoring
body_class: monitoring
---

An application only exists if it is monitored.


### Status Checks

Applications where possible should expose a status endpoint for internal monitoring, this status endpoint should expose the current health of the application.

### External Monitoring

An external monitoring function should exist where applicable, and this should exercise a function of the application that is not just a landing page.

### Real User Monitoring

Apdex, transactional, and where applicable Browser monitoring should be in place to identify performance degradation.

### Auto User monitoring

Synthetic checks should be continually executed against the application, these checks should perform common user defined functions.

### Non Listening Services

Example of monitoring for non listening services:
    * Check that process is running
    * Actively check metrics produced by the service, such as, queue length and number of running processes
    * Monitor the effect of the service not running such as data alteration
    * Check for log file output
    