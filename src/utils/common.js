import { isFunction } from './typeUtils';

export function isLoggable(method) {
    return isFunction(method);
}
