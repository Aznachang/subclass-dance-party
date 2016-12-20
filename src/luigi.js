var makeLuigiDancer = function(top, left, timeBetweenSteps) {
  var node = $('<span class="makeLuigiDancer"><img src="./images/luigi.gif"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps, node);

};

makeLuigiDancer.prototype = Object.create(makeDancer.prototype);
makeLuigiDancer.prototype.constructor = makeLuigiDancer;