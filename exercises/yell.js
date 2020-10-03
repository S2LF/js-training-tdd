'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
function yell(str){
    return str.toUpperCase()
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(yell('hey'), 'HEY')
assert.strictEqual(yell('r2d2'), 'R2D2')
assert.strictEqual(yell('étoile'), 'ÉTOILE')

// assert.fail('You must write your own tests');
// End of tests */
