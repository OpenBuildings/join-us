Technology at Clippings
=======================

Stack
-----

See our [full stack of technologies we use at Clippings on StackShare](https://stackshare.io/clippings/clippings).

We mostly use PHP and JavaScript. We try to use new language features as they become available.  
New PHP code uses Silex and Symfony components.  
New JavaScript code relies on ES6, ReactJS and jQuery.

Applications
------------

The majority of the product engineers time is spent on the [clippings.com](https://clippings.com)
website and all of its functionalities.

It consists of several different parts:

- Front-facing e-commerce
- Trade platform on top
- Store manager for the brands to manage their catalog and orders
- Admin for our internal teams
- ReactJS front-end app for project management
- REST API for React front-end
- CLI commands and automatic jobs

This is developed as a single application split by entry points and domains.
When possible we would extract some of the application code in a stand-alone open-source library.

We also have some other smaller applications like a Symfony REST API for price comparison,
browser extensions, static sites and others.

Principles
----------

We are writing new code with the following principles in mind:

- [SOLID](https://en.m.wikipedia.org/wiki/SOLID_(object-oriented_design))
- [Framework-agnostic code](https://matthiasnoback.nl/2014/06/how-to-create-framework-independent-controllers/)
- [Separation of concerns](https://en.m.wikipedia.org/wiki/Separation_of_concerns)
- [Domain-driven design](https://en.m.wikipedia.org/wiki/Domain-driven_design)
