// define(['chai', 'sinon', 'require'],function(chai, sinon, require){
define([
  'modules/user/models/UserModel',
  ], function (UserModel) {

  var expect = require('chai').expect;
  var assert = require('chai').assert;
  var should = require('chai').should();

  describe('UserModel', function () {
    var userModel;

    beforeEach(function () {
      userModel = new UserModel();
    });

    describe('getFullname', function () {

      var fullname;

      beforeEach(function () {
        fullname = undefined;
      });

      it('should be a function', function () {
        userModel.getFullname.should.be.a('function');
      });

      it('should return the firstname and lastname as string', function () {
        userModel.set({ firstname: 'Chris', lastname: 'Slater' });
        fullname = userModel.getFullname();
        fullname.should.be.a('string');
        fullname.should.equal('Chris Slater');
      });

      it('should throw an error if firstname or lastname are undefined', function () {
        userModel.set({ firstname: 'Chris' });
        assert.throws(userModel.getFullname, Error);
      });
    });

    describe('getAge', function () {
      it('should have a getAge function');
      it('should error if the age is less than 18');
    });
  
  });

});