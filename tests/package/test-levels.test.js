import { createLogger } from 'winston';
import transport from '../entry';

import { verifyStdout } from '../utils';


const LEVELS = {
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
        const input = `TEST LOGGING IN LEVEL ${level}`;

        verifyStdout(() => logger[level](input), { message: input });
    });
});

test('Positive: levels filtering', function () {
    const logger = createLogger({
        levels     : LEVELS,
        level      : 'notice',
        transports : [ new transport() ]
    });

    Object.keys(LEVELS).filter(key => LEVELS[key] <= 3).forEach(level => {
        const input = `TEST LOGGING IN LEVEL ${level}`;

        verifyStdout(() => logger[level](input), { message: input });
    });
    Object.keys(LEVELS).filter(key => LEVELS[key] > 3).forEach(level => {
        const input = `TEST LOGGING IN LEVEL ${level}`;

        verifyStdout(() => logger[level](input), null);
    });
});


test('Positive: levels mapping', function () {
    const logger = createLogger({
        levels     : LEVELS,
        level      : 'debug',
        transports : [ new transport({
            levels : {
                notice : console.error
            }
        }) ]
    });

    verifyStdout(
        () => logger.log('notice', 'Should be in stderr'),
        { 'message': 'Should be in stderr' },
        { stderr: true, json: true }
    );
});
