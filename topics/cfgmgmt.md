---
layout: site
title: Configuration Management
body_class: cfgmgmt
---

Configuration management is paramount for building and defining reproducible services.  It is used 
to define and create compute, network, and storage resources for provisioning of services.  Where applicable it 
is also used to define monitoring and alerting mechanisms.

### Application configuration

Where applicable application and service local configuration should be abstract from the deployed code and provided 
by the configuration management tool.

### Tooling

Currently both Puppet and Ansible are heavily used within Talis for configuration management.