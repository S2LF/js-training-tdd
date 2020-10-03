'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
function jadenCase(str){
    str = str.split(' ')

    for(let i=0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase()
    }

    return str.join(' ')
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(jadenCase('bonsoir tu va bien ?'), 'Bonsoir Tu Va Bien ?')
assert.strictEqual(jadenCase('Hello How Are You Today ?'), 'Hello How Are You Today ?')


// assert.fail('You must write your own tests');
// End of tests */
