

var expect = require('chai').expect;
var hello = require('../src/hello');



describe('byee', function () {
    it('should return adios mundo', function () {
        expect(hello.bye()).to.equal("Adios mundo");
    });
});

describe('holaSergi', function () {
    it('should return hola sergi', function () {
        expect(hello.holaSergi()).to.equal("Hola Sergi");
    });
});