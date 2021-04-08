# winston-console-transport
**winston-console-transport** provides a console transport for [winston](https://github.com/winstonjs/winston) logger.

[![Version][badge-vers]][npm]
[![Dependencies][badge-deps]][npm]
[![Vulnerabilities][badge-vuln]](https://snyk.io/)
[![Build Status][badge-tests]][travis]
[![License][badge-lic]][github]

## Table of Contents
  - [Motivation](#motivation)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Attributes](#attributes)


## Motivation
Winston has it's own console transport, but if you will try to use it in the browser, you will find out its inconvenience. You can't access native browser console levels (ex. verbose), so it is impossible to filter those levels using browser console.

## Requirements
To use library you need to have [node](https://nodejs.org) and [npm](https://www.npmjs.com) installed in your machine:

* node `6.0+`
* npm `3.0+`

## Installation

To install library run following command
```
npm i --save winston-console-transport
```

## Usage
To use new transport just add it to transports option of your winston logger.

```
import { createLogger } from 'winston';
import Console from 'winston-console-transport';

const logger = createLogger({
    level      : 'debug',
    transports : [ new Console() ]
});

logger.verbose('VERBOSE TEXT');

```

## Attributes

* **name** - name of a transport (default 'console')
* **eol** - end of line (default os.EOL)
* **logger** - custom logger (default console)
* **levels** - custom level handlers (default {})
* **fallBackLogger** - default level handler (default console.log)
* **sanitizer** - input data sanitizer and transformator (default data => data)
* **maxListeners** - max number of listeners (default 30)

## Contribute

Make the changes to the code and tests and then commit to your branch. Be sure to follow the commit message conventions.

Commit message summaries must follow this basic format:
```
  Tag: Message (fixes #1234)
```

The Tag is one of the following:
* **Fix** - for a bug fix.
* **Update** - for a backwards-compatible enhancement.
* **Breaking** - for a backwards-incompatible enhancement.
* **Docs** - changes to documentation only.
* **Build** - changes to build process only.
* **New** - implemented a new feature.
* **Upgrade** - for a dependency upgrade.
* **Chore** - for tests, refactor, style, etc.

The message summary should be a one-sentence description of the change. The issue number should be mentioned at the end.


[npm]: https://www.npmjs.com/package/npm-boilerplate
[github]: https://github.com/pustovitDmytro/npm-boilerplate
[travis]: https://travis-ci.org/pustovitDmytro/npm-boilerplate
[coveralls]: https://coveralls.io/github/pustovitDmytro/npm-boilerplate?branch=master
[badge-deps]: https://img.shields.io/david/pustovitDmytro/npm-boilerplate.svg
[badge-tests]: https://img.shields.io/travis/pustovitDmytro/npm-boilerplate.svg
[badge-vuln]: https://img.shields.io/snyk/vulnerabilities/npm/npm-boilerplate.svg?style=popout
[badge-vers]: https://img.shields.io/npm/v/npm-boilerplate.svg
[badge-lic]: https://img.shields.io/github/license/pustovitDmytro/npm-boilerplate.svg
[badge-coverage]: https://coveralls.io/repos/github/pustovitDmytro/npm-boilerplate/badge.svg?branch=master
