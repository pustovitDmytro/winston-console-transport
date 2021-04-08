import os from 'os';
import Transport from 'winston-transport';
import { isLoggable } from './utils/common';
import { defaultLogger, defaultSanitizer } from './defaults';
import { MESSAGE, LEVEL } from './constants';

module.exports = class Console extends Transport {
    constructor(options = {}) {
        super(options);
        this.name = options.name || 'console';
        this.eol = options.eol || os.EOL;
        this.logger = options.logger || console;
        this.fallBackLogger = options.fallBackLogger || defaultLogger;
        this.handlers = options.levels || {};
        this.sanitizer = options.sanitizer || defaultSanitizer;
        this.setMaxListeners(options.maxListeners || 30);
    }

    log(info, callback) {
        setImmediate(() => {
            this.emit('logged', info);
        });
        const level = info[LEVEL];
        const message = info[MESSAGE];

        const log = [
            this.handlers[level],
            this.logger[this.handlers[level]],
            this.logger[level],
            this.fallBackLogger
        ].find(isLoggable);

        log(this.sanitizer(message));
        callback();
    }
};
