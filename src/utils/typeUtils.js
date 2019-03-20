
export function isString(x) {
    return x && Object.prototype.toString.call(x) === '[object String]';
}

export function isClass(v) {
    return typeof v === 'function' && /^\s*class\s+/.test(v.toString());
}

export function isFunction(x) {
    return x && Object.prototype.toString.call(x) === '[object Function]';
}

export function isEmpty(x) {
    return x && x.constructor === Object && Object.keys(x).length === 0;
}

export function isObject(x) {
    return x && Object.prototype.toString.call(x) === '[object Object]';
}

export function isArray(x) {
    return x && Object.prototype.toString.call(x) === '[object Array]';
}
