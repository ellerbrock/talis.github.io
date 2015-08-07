---
layout: site
title: Naming Conventions
body_class: names
---

### Github repos

We use a postfix to indicate what type of component the repo contains:

* `-app` to denote a full application or microapp, e.g. `rl-app`
* `-server` to indicate a largely api-only service or microservice, e.g. `persona-server`
* `{lang}-client` to indicate a client library, e.g. `persona-php-client`
* `-hack` to indicate a hackday project, e.g. `gotmilk-hack` [^1]
* For repos representing websites, the website name, e.g. `engineering.talis.com`

[^1]: [gotmilk-hack](https://github.com/talis/gotmilk-hack)

### Primitives

Short snappy common nouns and verbs that broadly indicate the functional area of the primitive are good (e.g. Echo,
Envoy, Depot, Persona) proper nouns and names, literal or more abstract concepts that require a conversation to explain
we try to avoid (e.g. Prometheus). Use one word and try and avoid being too literal (e.g. user-api).


### Domain name endpoints

We try and be more literal in domain names - primitive endpoints are more literal, e.g. Persona ->
`https://users.talis.com` and Depot -> `https://files.talis.com`. This makes more sense to external API users without
having to explain.

Also it allows services to split down again later, for example Persona might add
`https://oauth.talis.com` in the future.
