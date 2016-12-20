var pandaDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};

pandaDancer.prototype = Object.create(makeDancer.prototype);
pandaDancer.prototype.constructor = pandaDancer;