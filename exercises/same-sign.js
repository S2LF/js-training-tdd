'use strict';

/*
 * Create the `sameSign` function that takes 2 numbers as arguments and check
 * if they both have the same sign
 *
 * @notions Functions, If-Else
 */

// Your code:
function sign(nb){
    if(nb>0){
        return 1
    } else if(nb<0){
        return -1
    } else if (nb==0){
        return 0
    }
}

function sameSign(nb, nb2){

    let s_nb = sign(nb)
    let s_nb2 = sign(nb2)

    if((s_nb == 1 && s_nb2 == 1) || (s_nb == 0 && s_nb2 == 0) || (s_nb == -1 && s_nb2 == -1)){
        return true
    } else if(s_nb == -1 && s_nb2 == 1 || s_nb == 1 && s_nb2 == -1 ||s_nb == 0 && s_nb2 == 1 || s_nb == 0 && s_nb2 == -1 || s_nb == -1 && s_nb2 == 0 || s_nb == 0 && s_nb2 == -1){
        return false
    }
}


//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof sameSign, 'function');
assert.strictEqual(sameSign.length, 2);
assert.notStrictEqual(sameSign, Math.sameSign);
assert.strictEqual(sameSign(-2, -1), true);
assert.strictEqual(sameSign(0, 0), true);
assert.strictEqual(sameSign(12, 3232), true);
assert.strictEqual(sameSign(1, -1), false);
assert.strictEqual(sameSign(-231, 1), false);
assert.strictEqual(sameSign(-231, 0), false);
assert.strictEqual(sameSign(0, 231), false);
assert.strictEqual(sameSign(231, -233), false);
// End of tests */
