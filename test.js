require('@babel/register');

const transport = require('./src/index.js');

const { createLogger, format } = require('winston');

const logger = createLogger({
    level  : 'debug',
    levels : {
        error   : 0,
        warn    : 1,
        info    : 2,
        notice  : 3,
        verbose : 4,
        debug   : 5
    },
    format : format.combine(
        format.timestamp(),
        format.json()
    ),
    transports : [ new transport() ]
});

logger.error('error');
logger.warn('warn');
logger.info('info');
logger.notice('notice');
logger.verbose('verbose');
logger.debug('debug');

