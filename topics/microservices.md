---
layout: site
title: Microservices
body_class: microservices
category: Architecture
---


Our architecture revolves around the use of microservices[^1] and developing a platform of small, well-defined and
independent services which are loosely coupled. This enables:

1. *Technical freedom.* Because each microservice has a smaller scope than a monolithic app, we can choose the best
technology for the job at hand rather than lock in technical decisions for the long term. As better technologies emerge,
we can refactor specific microservices to take advantage more easily than with a monolith.
1. *Efficiency.* Because each microservice has a small scope, its infrastructure and scaling requirements can be
considered independently. Some services can stay small whereas others can be backed by larger infrastructure. Services
requiring high CPU can use different infrastructure to those requiring big storage.
1. *Agility.* When we start a new application or service, we already have a platform of capabilities ready to use at our
disposal. If we want to add a new API to a microservice, we are changing and testing a smaller codebase with less and
better defined dependencies.
1. *Consistency.* Each service forms part of a platform and provides the blueprint for how all Talis apps should work in a
given area. This gives us consistency throughout our platform. One way to login. One shape of user profiles. One way to
transcode and store files. One way to deal with event data. Many apps.

Internally, we refer to a microservice as a "primitive". This reinforces two ideas, firstly the notion that our
microservices are designed to do a small amount of jobs well, and secondly that applications are built up from
assembling primitives into workflows that provide real user value.


### Scope

Primitives are the building blocks used by applications to implement the user's conceptual model, they are not in
themselves the user's model. So we generally scope them to the conceptual system model.

For example, the scope of Depot[^6] is the storage and transcoding of files. This in itself has no intrinsic value to an
end user, until it is adopted and conceptualised via an app. An example of this would be an app that allows a user to
upload a video in any format and have it available in several standardised formats for web and mobile.

By aligning primitives with the system model, we isolate ourselves to a certain extent against the specific user value
we are initially designing for. This is otherwise known as designing for appropriation[^11].


### Interfaces

At a minimum, a primitive exposes its API via REST[^2], and additionally via web sockets[^3] depending on use case.
Where authentication is required this is provided by OAuth Bearer tokens, sourced from Persona[^5].

These APIs are the only way to access the functionality the primitive exposes. Internal apps never have additional
privileges such as direct database access, even to set up test data. This means the API is the only contract between the primitive and its clients.

The specific design of the API should respect the general [API design guidelines](apis.html).

Optionally, we may provide additional client support via open-sourced, language-specific libraries[^12][^13].


### Backends for frontends

Typically, the client side of our applications will not use primitive APIs directly. Instead, we use the backend for
frontends pattern, whereby apps have a Gateway API on the server side which is part of the app and might weave together
one or more calls to primitives.

Amongst other things, this pattern ensures frontend code, which should mimic the user conceptual model, is not tightly
bound to primitives, which mimic the system model.


### Creating a new primitive

Your first pull request when creating a new primitive should contain no code. Instead, it should:

1. Consider scope. Can you summarise the scope of the primitive in under 140 characters? If not, stop now and re-consider
your scope.
1. Provide the description of the scope and some example problems you can solve using the primitive via the README.md
1. An API Blueprint[^4]. This is a public reference document describing your API and how to use it.

The next step is to peer review these documents and build consensus that the primitive is both necessary and that the
general scope is correct.

Only after this step should you think about technology choice and code.


### What primitives do we have already?

1. Persona[^5] - authentication, identity and profiles
1. Depot[^6] - file storage and transcoding
1. Echo[^7] - event routing and analytics
1. Babel[^8] - annotations and feeds
1. Manifesto[^9] - take a manifest of files and create and store an archive
1. Metatron[^10] - bibliographic resource metadata


### Refactoring the monolith

We still have monolithic applications which we are in the process of transitioning to microservices and microapps, so
you will encounter new use cases for functionality which can be re-implemented as primitives.

The right time to do this refactoring is when you encounter a requirement to perform functionality locked in the
monolith in a new context. At this point, consider refactoring the functionality into either a new or existing primitive
and changing both your new app and the monolith to use it.




[^1]: [Martin Fowler on Microservices](http://martinfowler.com/articles/microservices.html)
[^2]: [Representational state transfer](http://en.wikipedia.org/wiki/Representational_state_transfer)
[^3]: [WebSocket](http://en.wikipedia.org/wiki/WebSocket)
[^4]: [API Blueprint Tutorial](http://docs.talisecho.apiary.io/)
[^5]: [Persona](http://docs.talispersona.apiary.io/)
[^6]: [Depot](http://docs.talisdepot.apiary.io/)
[^7]: [Echo](http://docs.talisecho.apiary.io/)
[^8]: [Babel](http://docs.talisbabel.apiary.io/)
[^9]: [Manifesto](http://docs.talismanifesto.apiary.io/)
[^10]: [Metatron](http://docs.talismetatron.apiary.io/)
[^11]: [Designing for appropriation](http://www.bcs.org/upload/pdf/ewic_hc07_sppaper7.pdf)
[^12]: [Persona node client](https://github.com/talis/persona-node-client)
[^13]: [Persona PHP client](https://github.com/talis/persona-php-client)