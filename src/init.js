$(document).ready(function() {
  window.dancers = [];
  window.marioSelecter = [];
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.marioSelecter.push(dancer);
    window.dancers.push(dancerMakerFunctionName);
    // console.log(window.dancers);

    $('body').append(dancer.$node);
  });

  for (var i = 0; i < window.dancers.length; i++) {
    $(window.dancers[i]).on('click', function(event) {
      $(this).animate({marginLeft: '-=50px'});
    });
  }

  $('.lineUpButton').on('click', function(event) { 
    $('span').animate({top: '840px', marginLeft: '-=10px'});
  });

  $('.couplesDanceButton').on('click', function(event) {
    window.marioSelecter.sort(function(a, b) {
      return a.left - b.left;
    });

    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i] === 'makeMarioDancer' && i % 2 === 1) {
        console.log(window.marioSelecter);
        window.marioSelecter[i].$node.addClass('flip');
      }
    }
  });
});