//Global vars
let currentDay = $('#currentDay');

/* Add tome block rows programatically on load */

$(document).ready(function() {
  //set thhe current day
  currentDay.text(
    moment()
      .local()
      .format('dddd,MMMM,Do')
  );
});
