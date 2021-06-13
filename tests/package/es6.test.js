import { assert } from 'chai';
import { entry } from '../constants';

const m = require(entry);

suite('ES6 default export');

test('require("winston-console-transport") notation', function () {
    assert.exists(
        new m()
    );
});

test('require("winston-console-transport").default notation', function () {
    assert.exists(
        new m.default()
    );
});
