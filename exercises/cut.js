'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
function cutFirst(str){
    let res = str.slice(1)
    return res
}

function cutLast(str){
    let length = str.length
    return str.slice(0, length-1)
}

function cutFirstLast(str){
    return cutFirst(cutLast(str))
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(cutFirst('topo'), 'opo')
assert.strictEqual(cutLast('topo'), 'top')
assert.strictEqual(cutFirstLast('topo'), 'op')

// assert.fail('You must write your own tests');
// End of tests */
