---
layout: site
title: External APIs
body_class: apis
category: Architecture
---


This article refers to APIs at the boundary of services - i.e. those we expose via primitives, between the server side
of an app and its client interface, or to third parties - basically any API that could in theory be accessed from
outside of the runtime of a component.

## Interface choice

### REpresentational State Transfer

REST is our go-to interface choice when exposing APIs. It is simple, widely adopted and if implemented well almost
self-documenting. It has excellent library and language support.

We design RESTful APIs along the following principals

1. URI paths are nouns not verbs. The URI is the 'thing' we are operating on.
1. Use the plural form of nouns, so `/users/1234` not `/user/1234`
1. Operations applying to a set apply to the collective noun. For example, to search users `GET /users?q=`.
To create a new user, `POST /users`.
1. Use the appropriate HTTP verb[^1] to describe what you are doing to a URI
1. Follow Postel's law[^2]: *Be conservative in what you do, be liberal in what you accept from others*
1. Internal-use only APIs should be designed to the same standards as those we apply to external APIs

#### HTTP verb usage

1. `GET` retrieves things. Use the querystring to further refine or filter the operation we are performing
1. `HEAD` returns the same headers as the GET, but no body. Useful in conjunction with cache headers to see if things
have changed
1. `POST` is only ever used to mutate a thing, never to retrieve it
1. `PUT` creates or replaces an entire thing
1. `PATCH` partially modifies a thing
1. `DELETE` deletes a thing

To a certain extent, and depending on the situation, `PUT`, `PATCH`, `DELETE` are optional and can be replaced by
variances on `POST` (with an appropriate action in the body). This is because not all clients will support, or easily
support, these three verbs.

Ideally, you should strive to support both a broad usage POST *and* the finer grained verbs (see Postel's law[^2]).

#### Common querystring parameters

Use the following parameters rather than inventing new ones, unless the purpose you need is not listed below:

* `q` represents a query or search term
* `offset` represents the starting point when paging through result sets
* `limit` represents an upper limit on how many results to return when working with result sets
* `sort` represents the sort operation to be applied when working with result sets
* `from` represents the lower bound on a date filter
* `to` represents the upper bound on a date filter

### Versioning

The convention is to version your APIs from the root of the path. There should be nothing other than the domain name
before the version.

For example:

```
   http://api.talis.com/1/thing/1234
   http://api.talis.com/1/ntu/thing/1234
   http://api.talis.com/1/my-app/thing/1234
```

Not:

```
   http://api.talis.com/ntu/1/thing/1234
   http://api.talis.com/my-app/1/thing/1234
```

Un-versioned paths usually default or redirect to the latest implementation so their use in shipped and packaged code
should be considered unstable and unsavory. Pick these up in [code reviews](code-reviews.html).

### Web Sockets

You should consider web sockets where an API is exceptionally chatty, but a fallback to REST should also be provided.

### Authentication

Authentication is via bearer tokens issued by Talis Persona[^1]. Try to stay away from IP limited or alternative
authentication schemes such as cookie or session-based. Persona will issue users signing in to apps with a token so
prefer that for APIs backing AJAX on interfaces rather than relying on a signed-in server session.

It is not mandatory to authenticate your API, but consider it even if you accept tokens of any scope. Unauthenticated
routes are harder to rate limit or audit, so you should tend towards authentication unless you can think of a good
reason for the API to be totally public.

### Public Documentation

Any APIs we expose to other teams, or externally, should be accompanied by a public API document. This details every
route and general description and guidance on how to use the API.

Currently we use Apiary[^3] to power these documents, and also provide a stub API service.

### Other interfaces

Interfaces aside from REST and Web Sockets should only be considered in exceptional circumstances. Consult your team
first and consider in depth why you can't achieve what is necessary without introducing a new type of interface.



[^1]: [Request methods](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)
[^2]: [Robustness Principle](http://en.wikipedia.org/wiki/Robustness_principle)
[^3]: [Apiary](https://apiary.io/)
[^4]: [Talis Persona](https://users.talis.com)