# winston-console-transport
provides a console transport for [winston][w-gh] logger.

[![Version][badge-vers]][npm]
[![Bundle size][npm-size-badge]][npm-size-url]
[![Downloads][npm-downloads-badge]][npm]

[![CodeFactor][codefactor-badge]][codefactor-url]
[![SonarCloud][sonarcloud-badge]][sonarcloud-url]
[![Codacy][codacy-badge]][codacy-url]
[![Total alerts][lgtm-alerts-badge]][lgtm-alerts-url]
[![Language grade][lgtm-lg-badge]][lgtm-lg-url]
[![Scrutinizer][scrutinizer-badge]][scrutinizer-url]

[![Dependencies][badge-deps]][npm]
[![Vulnerabilities][badge-vuln]](https://snyk.io/)
[![Build Status][tests-badge]][tests-url]
[![Coverage Status][badge-coverage]][url-coverage]

[![Commit activity][commit-activity-badge]][github]
[![License][badge-lic]][github]

## Table of Contents
  - [Motivation](#motivation)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Attributes](#attributes)


## Motivation
Winston has its own console transport. But if you'll try to use it in the browser, you will find out its inconvenience. You can't access native [browser console][console] levels (ex. verbose), so it is impossible to filter those levels using the browser console.

## Requirements
To use library you need to have [node](https://nodejs.org) and [npm](https://www.npmjs.com) installed in your machine:

* node `6.0+`
* npm `3.0+`

## Installation

To install the library, run the following command:
```
npm i --save winston-console-transport
```

## Usage
To use new transport, just add it to the transports option of your winston logger.

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

Some attributes can be passed to new ```Console({})```

* **name** - name of a transport (default 'console')
* **eol** - end of line (default os.EOL)
* **logger** - custom logger (default console)
* **levels** - custom level handlers (default {})
* **fallBackLogger** - default level handler (default console.log)
* **sanitizer** - input data sanitizer and transformator (default data => data)
* **maxListeners** - max number of listeners (default 30)

[console]: https://developer.mozilla.org/en-US/docs/Web/API/Console
[w-gh]: https://github.com/winstonjs/winston
## Contribute

Make the changes to the code and tests. Then commit to your branch. Be sure to follow the commit message conventions.

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


[npm]: https://www.npmjs.com/package/winston-console-transport
[github]: https://github.com/pustovitDmytro/winston-console-transport
[coveralls]: https://coveralls.io/github/pustovitDmytro/winston-console-transport?branch=master
[badge-deps]: https://img.shields.io/david/pustovitDmytro/winston-console-transport.svg
[badge-vuln]: https://img.shields.io/snyk/vulnerabilities/npm/winston-console-transport.svg?style=popout
[badge-vers]: https://img.shields.io/npm/v/winston-console-transport.svg
[badge-lic]: https://img.shields.io/github/license/pustovitDmytro/winston-console-transport.svg
[badge-coverage]: https://coveralls.io/repos/github/pustovitDmytro/winston-console-transport/badge.svg?branch=master
[url-coverage]: https://coveralls.io/github/pustovitDmytro/winston-console-transport?branch=master

[tests-badge]: https://img.shields.io/circleci/build/github/pustovitDmytro/winston-console-transport
[tests-url]: https://app.circleci.com/pipelines/github/pustovitDmytro/winston-console-transport

[codefactor-badge]: https://www.codefactor.io/repository/github/pustovitdmytro/winston-console-transport/badge
[codefactor-url]: https://www.codefactor.io/repository/github/pustovitdmytro/winston-console-transport

[commit-activity-badge]: https://img.shields.io/github/commit-activity/m/pustovitDmytro/winston-console-transport

[scrutinizer-badge]: https://scrutinizer-ci.com/g/pustovitDmytro/winston-console-transport/badges/quality-score.png?b=master
[scrutinizer-url]: https://scrutinizer-ci.com/g/pustovitDmytro/winston-console-transport/?branch=master

[lgtm-lg-badge]: https://img.shields.io/lgtm/grade/javascript/g/pustovitDmytro/winston-console-transport.svg?logo=lgtm&logoWidth=18
[lgtm-lg-url]: https://lgtm.com/projects/g/pustovitDmytro/winston-console-transport/context:javascript

[lgtm-alerts-badge]: https://img.shields.io/lgtm/alerts/g/pustovitDmytro/winston-console-transport.svg?logo=lgtm&logoWidth=18
[lgtm-alerts-url]: https://lgtm.com/projects/g/pustovitDmytro/winston-console-transport/alerts/

[codacy-badge]: https://app.codacy.com/project/badge/Grade/d20e349b06da4b69abe242d6326f8e34
[codacy-url]: https://www.codacy.com/gh/pustovitDmytro/winston-console-transport/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pustovitDmytro/winston-console-transport&amp;utm_campaign=Badge_Grade

[sonarcloud-badge]: https://sonarcloud.io/api/project_badges/measure?project=pustovitDmytro_winston-console-transport&metric=alert_status
[sonarcloud-url]: https://sonarcloud.io/dashboard?id=pustovitDmytro_winston-console-transport

[npm-downloads-badge]: https://img.shields.io/npm/dw/winston-console-transport
[npm-size-badge]: https://img.shields.io/bundlephobia/min/winston-console-transport
[npm-size-url]: https://bundlephobia.com/result?p=winston-console-transport
