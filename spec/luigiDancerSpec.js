describe('luigiDancer', function() {

  var luigiDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    luigiDancer = new makeLuigiDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(luigiDancer.$node).to.be.an.instanceof(jQuery);
  });
});
