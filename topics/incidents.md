---
layout: site
title: Live incidents
body_class: incidents
---
This article outlines dealing with Live incidents.  If your project is critical to the operating of the business then at some point it will generate a live incident and go through this process.  

### Incident Rota

A rota operates within the engineering team currently managed using the PagerDuty[^1] service.

### Incident Report

It is the responsibility of the receiving engineer to manage the incident.  Using a standard template the life cycle of the incident should be documented with as much information as possible.  Dates and times should be accurate and in UTC format.

### The Role of the Receiving Engineer

The engineer who receives notification of the incident is not solely responsible for its resolution. Where other help is needed they will drive the communication between all parties and be responsible for updating the incident report in real time, as information becomes available.

### Communication

During an incident it is imperative to keep communication channels open with regular updates.  This include:

1. Comments on the Incident Report
2. Customer communications
3. Incident co-ordination (HipChat, Hangouts)
4. Email updates to stakeholders

### 24x7 Support Rota

Talis applications and services operate 24x7x365.  Members of the engineering team form the 24x7 rota that is tasked with incident 
management of Level 1 alerts.  At any one time the 24x7 rota contains both primary and secondary contacts ready to receive alerts.

The main focus of the primary and secondary contacts is to manage the incident, either to resolution or on hand over to a Talis staff member.

All documentation defining the Talis Infrastructure and applicable Runbooks are contained internally within the Infra repository.   


[^1]: [PagerDuty](https://www.pagerduty.com)