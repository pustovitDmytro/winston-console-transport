import { inspect } from 'util';

export const defaultLogger = console.log;
export const defaultSanitizer = o => inspect(o, { breakLength: Infinity });
