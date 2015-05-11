---
layout: site
title: Microapps
body_class: microapps
category: Architecture
---

Similar to [microservices](microservices.html), microapps are small, well-defined applications which provide a small
subset of related user functionality.

For the user, they exist not standalone, but within a broader application context. But like microservices the runtime of
a microapp is distinct. This allows us some of the same benefits, such allowing us to chunk down existing monolithic
apps into smaller, easier to evolve pieces with distinct technology stacks and scale as appropriate to their function.

Like microservices, they can be repurposed within more than one application context, promoting both consistency of user
experience and re-use.

## Refactoring the monolith

Microapps are still a nascent concept, much less embedded in our culture than microservices.

All new app theme development at Talis should consider a microapp approach rather than further entrenching the codebase
of existing apps.

## What microapps do we have already?

1. Critic
2. Talis Player


