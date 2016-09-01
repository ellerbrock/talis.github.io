---
layout: site
title: Security
body_class: security
category: Code
---


This article documents certain methods of avoiding a given exploit. This page is not exhaustive by any means, but
it should provide a location to refer to.

## Cross Site Request Forgery (CSRF)

To avoid an CSRF attack pick a method from the OWASP CSRF cheatsheet[^1]. To attempt to track down any form/api
that isn't using CSRF protection the following code could used. The code below should be tailored to the projects
method of security.

{% highlight php %}
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $found = false;

    // check for CSRF value
    foreach(array_keys($_POST) as $key) {
        if ($key === 'CSRFName') {
            $found = true;
            break;
        }
    }

    // check authorization header
    if (isset($_SERVER['Authorization'])) {
        $found = true;
    }

    // check for access token
    if (isset($_GET['access_token']) || isset($_POST['access_token'])) {
        $found = true;
    }

    if ($found === false) {
        $protocol = "http" . (isset($_SERVER['HTTPS']) ? 's' : '');
        $actual_link = $protocol . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

        var_dump("ERROR: $actual_link doesn't use a CSRF protection method");
        die();
    }
}
{% endhighlight %}


[^1]: [Cross-Site Request Forgery (CSRF) Prevention Cheat Sheet](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)_Prevention_Cheat_Sheet)
