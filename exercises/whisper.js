'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
function whisper(str){
    return str.toLowerCase()
}
//* Begin of tests

const assert = require('assert');

assert.strictEqual(whisper('HEY'), 'hey')
assert.strictEqual(whisper('R2D2'), 'r2d2')
assert.strictEqual(whisper('ÉTOILE'), 'étoile')
// assert.fail('You must write your own tests');
// End of tests */
