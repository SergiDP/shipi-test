

var expect = require('chai').expect;
var hello = require('../src/hello');

describe('hello', function () {
    it('should return hola mundo', function () {
        expect(hello.hello()).to.equal("hola mundo");
    });
});