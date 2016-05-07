var should = require('should'); 
var supertest = require('supertest');  

var url = 'http://localhost:3000';
var server = supertest.agent(url);

describe('Routing', function() {

    it('Get / should return a string', function(done) {
      server
      .get('/')
      .expect(200, 'KOA Hello World', done)

    });

});