---
layout: site
title: Alerts
body_class: alerts
---

This article outlines how our alerting mechanism functions from inception to resolution.  For a project to be provisioned to the Live environment it must be able to generate alerts if the project is not running in its normal state.

### Status

Alerts can have one of three statuses

1. OK - the alert has passed and the service is operating normally
2. Warning - the alert has passed a warning threshold, the service is operating normally but has unusual activity
3. Critical - the alert has not passed, the service may have reduced functionality or is not operating at all 

### Creation

Alerts are currently raised via Sensu[^1] checks and Pingdom[^2] checks.  An alert should always be set in a critical status and only alert OK if the check receives the expected result.

### Handlers

Alerts can have one or more handlers.  A handler is used to funnel the alerts to the correct place.  Currently the handlers are used to divide alerts into the necessary PagerDuty service.  Current handlers are:

1. TADC - alerts for Talis Aspire Digitised Content
2. TN - alerts for Talis primitives and the Talis Network
3. TARL - alerts for Talis Aspire Reading Lists

### Delivery

PagerDuty[^3] is used to deliver alerts to the rota.  The media in which to receive the alert is left to the user, this can be via SMS, Email, and Android/iPhone push notifications.  Alerts are also delivered to the applicable HipChat communication channel.

### Resolution

Alerts should self clear when the issue is resolved.  Manual resolving of alerts should only happen in special circumstances.


[^1]: [Sensu Monitoring](https://sensuapp.org/)
[^2]: [Pingdom](https://www.pingdom.com)
[^3]: [PagerDuty](https://www.pagerduty.com)