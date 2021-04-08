import { stdout, stderr } from 'test-console';
import { assert } from 'chai';

export function verifyStdout(functionUnderTest, expected, opts = { json: true, stderr: false }) {
    const inspect = opts.stderr ? stderr.inspect() : stdout.inspect();

    functionUnderTest();
    inspect.restore();
    const [ output ] = inspect.output;

    if (!expected) {
        return assert.notExists(output);
    } assert.exists(output);

    if (opts.json) {
        const { level, ...message } = JSON.parse(output); // eslint-disable-line no-unused-vars

        return assert.deepEqual(message, expected);
    }
    assert.equal(output, expected);
}

export function copy(o) {
    return JSON.parse(JSON.stringify(o));
}
