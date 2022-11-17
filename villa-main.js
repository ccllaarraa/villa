$(document).ready(function() {

$( "#clickme" ).click(function() {
  $( "#ressources" ).slideToggle( "slow", function() {
    // Animation complete.
  });
});

});


// display time
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();


// display date

var date = new Date();
// get the date as a string
var n = date.toDateString();
document.getElementById("date").innerHTML = n;