Technology at Clippings
=======================

Stack
-----

See our [full stack of technologies we use at Clippings on StackShare](https://stackshare.io/clippings/clippings).

We predominantly use PHP and JavaScript. We try to use new language features as they become available.  
New PHP code uses Silex and Symfony components.  
New JavaScript code relies on ES6, React and jQuery.

Applications
------------

The product engineers spend the majority of their time on the [clippings.com](https://clippings.com)
website and all of its functionalities.

It consists of different parts:

- Front-facing e-commerce
- Trade platform on top
- Store manager for the brands to manage their catalogue and orders
- Admin for our internal teams
- React front-end app for project management
- REST API for React front-end
- CLI commands and automatic jobs

We develop it as a single application split by entry points and domains.
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
