import path from 'path';
import { stdout, stderr } from 'test-console';
import { assert } from 'chai';
import { entry } from './constants';

export function verifyStdout(functionUnderTest, expected, opts = { json: true, stderr: false }) {
    const inspect = opts.stderr ? stderr.inspect() : stdout.inspect();

    functionUnderTest();
    inspect.restore();
    const [ output ] = inspect.output;

    if (!expected) {
        return assert.notExists(output);
    }

    assert.exists(output);

    if (opts.json) {
        const { level, ...message } = JSON.parse(output); // eslint-disable-line no-unused-vars

        return assert.deepEqual(message, expected);
    }

    assert.equal(output, expected);
}

export function copy(o) {
    return JSON.parse(JSON.stringify(o));
}

export function load(relPath, clearCache) {
    const absPath = path.resolve(entry, relPath);

    if (clearCache) delete require.cache[require.resolve(absPath)];
    // eslint-disable-next-line security/detect-non-literal-require
    const result =  require(absPath);

    if (clearCache) delete require.cache[require.resolve(absPath)];

    return result;
}

export function resolve(relPath) {
    return require.resolve(path.join(entry, relPath));
}
