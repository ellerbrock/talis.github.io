---
layout: site
title: Deployments
body_class: deployments
---

The master branch is considered as always in a releasable state

### Runbooks

Each project should contain a runbook detailing :
    * Prequisites required for deploying the service
    * Instruction on how to deploy and rollback the service

### Artifacts

The format of the deployment code should either be an installable debian package, or a tar gzipped archive.

### Method of deployment

We currently use either Puppet or Ansible for deployments.  Depending on the type of service will depend on which method to use.
Ansible is more favourable for deployments that require a greater degree of orchestration.

### Notifications

All deployments should notify their actions in the appropriate hipchat channel.

Notification should also be sent to New Relic or a Graphite handler detailing the version released. 

### Backwards compatible

As deployments are not atomic, all deployments should be able to co-exist with the current live version.

### Canary deployments

The deployment process should include a canary staged deployments.  This can include but not limited to the following stages:
    * Deployed to production environment only accessible internally for validation
    * Deployed to a percentage of the production environment to receive live traffic

### Roll backs

The deployment should be able to roll back leaving the production in its previous state, specific instructions on how to revert the production environment 
should either be in the release plan or the services runbook.

### Complete deployments

Following a canary release a complete deployment should be actionable to complete the release process.

### Non Listening Services

You should refrain from using a scheduler such as cron for running these type of services.  Service style process management such as 'upstart' is a more manageable
form.

Services such as job workers and batch processes that are not externally accessible should be monitored.  See monitoring for examples.