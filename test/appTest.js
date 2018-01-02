const assert = require('chai').assert;
const app = require('../app');


describe('app.js test vector', function() {

    // results
    let sayHelloResult = app.sayHello();
    let addNumbersResult = app.addNumbers(5, 5);

    describe('sayHello function test', function() {
        it('app should return hello', function() {
            assert.equal(sayHelloResult, 'hello');
        });

        it('sayHello should return type string', function() {
            assert.typeOf(sayHelloResult, 'string');
        })
    });
    
    describe('addNumbers function test', function() {

        it('addNumbers should be above 5', function() {
            assert.isAbove(addNumbersResult, 5);
        })

        it('addNumbers should return type number', function() {
            assert.typeOf(addNumbersResult, 'number');
        })
    })

})