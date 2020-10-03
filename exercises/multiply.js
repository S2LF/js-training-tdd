'use strict';

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code:
function multiply(nb, nb1){
    if(!isNaN(nb) && !isNaN(nb1)){
        let answer = nb
        for(let i=0; i<nb1-1; i++ ){
            answer += nb
        }

        if((nb > 0 && nb1 > 0) || (nb<0 && nb1<0)){
            return answer;
        } else if(nb== 0 || nb1 == 0){
            return 0; 
        } else if(nb < 0 || nb1 < 0){
            for(let i=0; i<nb1-1; i-- ){
                answer += nb
            }
            return -(answer)
        }
            
    } 
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof multiply, 'function');
assert.strictEqual(multiply.length, 2);
assert.strictEqual(multiply.toString().includes('Math.imul'), false);
assert.strictEqual(multiply.toString().includes('*'), false);
assert.strictEqual(multiply.toString().includes('/'), false);
assert.strictEqual(multiply(34, 78), 2652);
assert.strictEqual(multiply(123, 0), 0);
assert.strictEqual(multiply(0, -230), 0);
assert.strictEqual(multiply(0, 0), 0);
assert.strictEqual(multiply(123, -22), -2706);
assert.strictEqual(multiply(-22, 123), -2706);
assert.strictEqual(multiply(-22, -123), 2706);
// End of tests */
