---
layout: site
title: Stack
body_class: stack
category: Architecture
---

This article outlines the accepted current technical stack. If your project is implemented with these technologies,
there is a good chance across the business we have the knowledge to operate and maintain it. This promotes shared code
ownership, as defined in our [charter](topics.html).

Deviations from this stack are totally acceptable, but there needs to be justifiable cause.

You may need a technology not available here, or perhaps it is time to experiment with a new approach. That is OK as
long as you build consensus that deviating from the usual stack is the right thing to do. Some questions to satisfy when
making this decision are:

1. *Risk:* For example, am I swapping out the main DB technology serving most of our traffic or just experimenting on a
new feature for a handful of users?
1. *Real ROI* What potential does the new approach really have over the old? Is there likely to be a good return on us
having to learn a new technology given its promised benefits?
1. *Grass is not always greener:* Are we just trading the current known limitations of our existing approach for a
new set?
1. *External adoption:* If we hit problems is there a community of other users and even vendors to help us? If something
has wider traction that's a good sign. Leave pioneering brand new technology to Google and Facebook, instead let's
trailblaze for our users.

## Operating System

Our target server OS is Ubuntu. This means all production, staging, test and vagrant development environments are using
Ubuntu.

You can use what you like on your development machine but you must have access locally to run and test code on Ubuntu,
ideally via the project's Vagrant image or your own local VM.

## Server side

We have strong cross-team skill base in Java, PHP and Node.

#### Frameworks

* F3[^1] versions 2 and 3 (PHP)
* Express[^2] versions 3 and 4 (Node)

#### Background jobs

We use resque[^3], which has client libraries available for both PHP[^4] and Node[^5], amongst others. If you are
working on a gearman job, migrate it to resque.

## Client side

For web, We have a strong cross-team skill base in HTML5 and Javascript. For single page web apps we have a lot of
experience using AngularJS[^3].

## Native apps

We have experience with Java on Android and Objective-C on iOS. We don't currently use platforms such as Appcelorator or
Xamarin.

## Desktop apps

We have an emerging skillset in desktop apps built using Node Webkit[^4] with AngularJS[^3].

## Operations

We use Puppet[^5] for configuration management, which includes a lot of Ruby code. Monitoring is done using sensu which
again makes extensive use of Ruby.

## Persistence and storage

#### Document DB: MongoDB

MongoDB is the swiss army knife of NoSQL databases. There are plenty that do certain things better, but it has a broad
feature set, recruitable talent pool, large community and vendor base and is a good starting point for many problems
requiring a NoSQL approach.

As a company, we understand its limitations and how to operate and scale it. We have 3 years' production experience at
scale. This experience is more important than anything you may have read about it on Hacker News.

#### KeyValue store: Redis

Redis is a key value store. It has extensive community and vendor support.

#### Free text search: ElasticSearch

Our search requirements are relatively pedestrian so we sidestep the complexity of configuring and operating Solr by
using ElasticSearch. We consider search to be ephemeral so make sure all indexes can be rebuilt from another datasource.

#### Relational: Postgres

If you need a relational database use Postgres. However, we don't currently use relational databases anywhere in
production.

## Cloud computing

We currently use Amazon AWS as our production supplier.

Where possible, we prefer to use managed services tailored for the technology, rather than provision and operate our own. For
example, we prefer Redis via the Elasticache service, vs. provisioning and operating our own instances to provide Redis. We prefer MongoDB via the managed MongoLabs service, rather than provision and operate our own MongoDB instances.

However, for larger scale rollouts there is a tipping point where provisioning and managing our own becomes more economic, and in some circumstance provides greater functionality.


[^1]: [Fat-Free Framework](http://fatfreeframework.com/home)
[^2]: [Express](http://expressjs.com/)
[^3]: [Resque](https://github.com/resque/resque)
[^4]: [php-resque](https://github.com/chrisboulton/php-resque)
[^5]: [node-resque](https://github.com/taskrabbit/node-resque)