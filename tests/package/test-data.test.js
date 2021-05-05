import { createLogger, format } from 'winston';
import transport from '../entry';
import { verifyStdout, copy } from '../utils';

const LEVELS = {
    error   : 0,
    warn    : 1,
    info    : 2,
    notice  : 3,
    verbose : 4,
    debug   : 5
};

const logger = createLogger({
    level      : 'debug',
    levels     : LEVELS,
    format     : format.json(),
    transports : [ new transport({ sanitizer: o => o }) ]
});

suite('Data');

test('Positive: simple sentence', function () {
    const input = 'SIMPLE MESSAGE';

    verifyStdout(() => logger.notice(input), { message: 'SIMPLE MESSAGE' });
    verifyStdout(() => logger.log('notice', input), { message: 'SIMPLE MESSAGE' });
});

test('Positive: objects', function () {
    const input = { a: 'ABCD', b: 41, c: '?!' };

    verifyStdout(() => logger.notice(input), { message: input });
    verifyStdout(() => logger.log('notice', copy(input)), input);
});
