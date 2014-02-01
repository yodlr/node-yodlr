var asti = require('../');
var should = require('should');
describe('node-asti.error', function() {

  describe('api.VocError', function() {
    var VocError = asti.error.VocError;
    var err;
    beforeEach(function() {
      err = new VocError('woops!', 'testError', {det: 'hi'}, {hello:'world'});
    });

    it('should create a new VocError', function() {
      err.should.be.instanceOf(VocError);
    });

    it('should have a message', function() {
      err.should.have.property('message');
      err.message.should.eql('woops!');
    });

    it('should have a name', function() {
      err.should.have.property('name');
      err.name.should.eql('testError');
    });

    it('should have details', function() {
      err.should.have.property('details');
      err.details.should.have.property('det');
      err.details.det.should.eql('hi');
    });

    it('should have cause', function() {
      err.should.have.property('cause');
      err.cause.should.have.property('hello');
      err.cause.hello.should.eql('world');
    });

    it('should have a stack', function() {
      err.should.have.property('stack');
    });

  });
});