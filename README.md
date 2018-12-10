Template from https://gist.github.com/jxson/1784669

## Synopsis

[![Build Status](https://travis-ci.org/csprayca/superawesomesimplelandingpage.svg?branch=master)](https://travis-ci.org/csprayca/superawesomesimplelandingpage)
[![Coverage Status](https://coveralls.io/repos/github/csprayca/superawesomesimplelandingpage/badge.svg?branch=master)](https://coveralls.io/github/csprayca/superawesomesimplelandingpage?branch=master)
[![codecov](https://codecov.io/gh/csprayca/superawesomesimplelandingpage/branch/master/graph/badge.svg)](https://codecov.io/gh/csprayca/superawesomesimplelandingpage)
[![Greenkeeper badge](https://badges.greenkeeper.io/csprayca/superawesomesimplelandingpage.svg)](https://greenkeeper.io/)

At the top of the file there should be a short introduction and/ or overview that explains **what** the project is. This description should match descriptions added for package managers (Gemspec, package.json, etc.)

## Code Example

Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Motivation

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation

> Provide code examples and explanations of how to get the project.

The purpose of this project is to provide a base template for a good software project. A good software project is one that applies modern software engineering principles.

It is meant to be used like this:

```
cd <workingDirectory>
git clone https://github.com/csprayca/superawesomebase <newProjectDirName>
cd <newProjectDirName>
rm -rf .git
git init
git add remote add origin git@github.com:username/project.git
```

In other words, the vision for the project is the following:

- clone the github repository somewhere local
- cd into the directory
- remove project's github module in `.git` folder
- initialize your own git instance if you so wish.

In order for this to work, there are some basic requirements that every good software project should have. I have selected a few base services that I think will benefit many different types of projects.

Here are some base required services that are super awesome for many projects as a base. You should be aware that there are different pricing tier for a private projects vs. a public project.

Unit tests are required at the minimum. Why? Your future self will thank you.

### Travis CI

- the quick and dirty software system that just works
- use it to run our test suite
- and use it to perform other automated duties upon test suite completion

---

- requirements (_must_):
  - setup env variables: `CODECOV_TOKEN` and `GH_TOKEN`
- `CODECOV_TOKEN` is found at `/settings` url of your project on codecov.io dashboard interface. For example, here is the link to mine: `https://codecov.io/gh/csprayca/superawesomebase/settings`
- `GH_TOKEN` is generated from github. You can search for the tutorials here on github. For example, here is the link to mine: `https://github.com/settings/tokens`
  - I highly recommend that you are selective in what permissions you give to what key
  - For example, my keys are per project. This way if one key is compromised only one project is affected. Minimize your security risk and general penetration space.

### Coveralls

- automated software that is used for visual inspection of test coverage
- Is your code tested? How much of the code? Is this a question that you should be asking?
- backup to codecov (if it is down or fails)
- creates automatically generated visual reports after a successful test suite run
- get your own badge. For example, mine is at `https://coveralls.io/github/csprayca/superawesomeredirector?branch=master`

### Codecov

- automated software that is used for visual inspection of test coverage
- Is your code tested? How much of the code? Is this a question that you should be asking?
- backup to coveralls (if it is down or fails)
- creates automatically generated visual reports after a successful test suite run
- get your own badge from `/settings/badge`. For example, mine is: `https://codecov.io/gh/csprayca/superawesomebase/settings/badge`
- `CODECOV_TOKEN` is needed for Travis CI to work
  - `CODECOV_TOKEN` is found at `/settings` url of your project on codecov.io dashboard interface. For example, here is the link to mine: `https://codecov.io/gh/csprayca/superawesomebase/settings`

### Greenkeeper

- automated software that is used to keep project dependencies up to date
- this bot that will run whenever a npm dependency is updated. It will run your test suites against the updated software. This aids in maintaining good software.
- view dashboard with an individual status per project. For example, mine is: `https://account.greenkeeper.io/account/csprayca`

## API Reference

> Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

> Describe and show how to run the tests with code examples.

The test framework of choice is https://jestjs.io/ There are many options out there but I believe that jest is a good choice that is:

- robust,
- just works out of the box
- requires minimal configurations

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

A short snippet describing the license (MIT, Apache, etc.)
