---
layout: site
title: Provisioning
body_class: provisioning
---

### Operating System

All current services are built on Ubuntu LTS releases.  Operating systems in all environments should be fully automated.

User invoked installation of operating systems is forbidden.

All projects use a base image, at which point configuration management should take over.

### Baked images

Baked images for use in virtualised environments should only be an option where configuration management is not possible.  
The requirement of such should be discussed by the team prior to use.

### Containers

Containerised images should be built from known sources using configuration management.  They should be fully reproducible 
and with all build configuration in source control.

### Provision

Services should be automatically configured both at high and low levels.  Compute, network, and storage resources are defined 
within the provisioning and configuration management in building complete reproducible services.

### Roles

All Talis applications and services specify a role tag.  The role tag along with an environment tag dictate how, what, and where the application will be provisioned.

### Auto scaling

If viable, the service should be auto scaling compliant.  Defined service metrics should determine the elasticity of the service.