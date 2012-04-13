/**
 * Mocha test case for core configuration library
 */
var should = require('should'),
    fs = require('fs'),
    rootpath = process.cwd() + '/',
    path = require('path'),
    exec = require('child_process').exec,
    calipso = require('./helpers/require')('calipso');

describe('Calipso', function(){

  before(function(){

  });

  describe('Core', function(){
  
    it('Calipso has loaded successfully', function(done){      
      calipso.loaded.should.equal(true);
      done();
    });

    it('Dynamic helpers can be loaded', function(done) {
      var req = {url:'test/url.html', session: {user: { username:'cliftonc'}}}, res = {};
      calipso.getDynamicHelpers(req, res);
      req.helpers.user.username.should.equal('cliftonc');
      done();
    });

  }); 

  after(function() {
    
  })

});

