import { createLogger, format } from 'winston';
import Transport from 'winston-transport';
import { assert } from 'chai';
import transport from '../entry';

suite('Winston');

test('Positive: check transport', function () {
    const t = new transport();

    assert.instanceOf(t, Transport);
});

test('Positive: createLogger', function () {
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

    assert.exists(logger);
});
