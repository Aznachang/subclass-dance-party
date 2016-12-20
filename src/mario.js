var makeMarioDancer = function(top, left, timeBetweenSteps) {
  var node = $('<span class="makeMarioDancer"><img src="./images/supermario-moonwalk.gif"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps, node);

};

makeMarioDancer.prototype = Object.create(makeDancer.prototype);
makeMarioDancer.prototype.constructor = makeMarioDancer;