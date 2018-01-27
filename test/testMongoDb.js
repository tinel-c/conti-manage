const assert = require('chai').assert;
const mongoDb = require('../mongoDb');


describe('mongoDb test vector', function() {

    // results
    let connectResult = mongoDb.connect();
    let connectMongooseResult = mongoDb.mongooseConnect();

    describe('mongo db connect function test', function() {
        it('no errors at connection', function() {
            assert.equal(connectResult, 'connection ok');
        });
    });
    describe('mongoose connect function test', function() {
        it('no errors at connection', function() {
            assert.equal(connectMongooseResult, 'connection ok');
        });
    });
    
})