'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst(str){
    return str.substring(0,2)
}

function keepLast(str){
    let length = str.length
    return str.substring(length, length-2)
}

function keepFirstLast(str){
    return str = keepFirst(keepLast(str))

    return str.substring(3, 4)
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(keepFirst('topolino'), 'to')
assert.strictEqual(keepLast('topolino'), 'no')

// assert.fail('You must write your own tests');
// End of tests */
