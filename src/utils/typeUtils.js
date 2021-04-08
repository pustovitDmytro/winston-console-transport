
export function isFunction(x) {
    return x && Object.prototype.toString.call(x) === '[object Function]';
}
