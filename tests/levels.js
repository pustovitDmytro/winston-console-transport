import { createLogger } from 'winston';
import transport from '../src';

const LEVELS = {
    error   : 0,
    warn    : 1,
    info    : 2,
    notice  : 3,
    verbose : 4,
    debug   : 5
};

suite('Levels');

test('Positive: levels answering', function () {
    const logger = createLogger({
        level      : 'debug',
        levels     : LEVELS,
        transports : [ new transport() ]
    });

    Object.keys(LEVELS).forEach(level => {
        logger[level](`TEST LOGGING IN LEVEL ${level}`);
    });
});
