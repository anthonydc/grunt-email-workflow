# Grunt Email Design Workflow

Designing and testing emails is a pain. HTML tables, inline CSS, various devices and clients to test, and varying support for the latest web standards.

This grunt task helps simplify things at the design stage.

1. Compiles your SCSS to CSS (uses Libsass)

2. Builds your HTML and TXT email templates

3. Inlines your CSS

4. Sends you a test email to your inbox (optional)

## Requirements

* Node.js - [Install Node.js](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
* Grunt-cli and Grunt (`npm install grunt-cli -g`)
* Ruby - [Install ruby with RVM](https://rvm.io/rvm/install)
* Premailer (`gem install premailer hpricot nokogiri`) - Inlines the CSS
* [Mandrill](http://www.mandrill.com) (optional) - Sends the email
* [Litmus](https://litmus.com) (optional) - Tests the email across all clients/browsers/devices


## Getting started

If you haven't used [Grunt](http://gruntjs.com/) before check out Chris Coyier's post on [getting started with Grunt](http://24ways.org/2013/grunt-is-not-weird-and-hard/).

Clone this repo, cd to the directory, run `npm install` to install the necessary packages.

```
git clone https://github.com/leemunroe/grunt-email-design.git
cd grunt-email-design
npm install
grunt
```
Based on the original workflow by Lee Munroe. You should read this [Using Grunt to Make Your Email Design Workflow Fun Again](http://webdesign.tutsplus.com/tutorials/using-grunt-to-make-your-email-design-workflow-fun-again--cms-22223)

