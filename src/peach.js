var makePeachDancer = function(top, left, timeBetweenSteps) {
  var node = $('<span class="makePeachDancer"><img src="./images/peach.gif"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps, node);

};

makePeachDancer.prototype = Object.create(makeDancer.prototype);
makePeachDancer.prototype.constructor = makePeachDancer;