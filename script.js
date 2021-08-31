var endHours = $('#leaveHour').val();
var endMinutes = $('#leaveMinute').val();
//year, month, day, hour, minute, second, and millisecond

var endTime = new Date(2021, 7, 30, endHours, endMinutes, 0, 0);

calcRemaining();
setInterval(calcRemaining, 1000);

function calcRemaining() {
  endHours = $('#leaveHour').val();
  endMinutes = $('#leaveMinute').val();
  endTime = new Date(2021, 7, 30, endHours, endMinutes, 0, 0);
  var now = new Date().getTime();

  var distance = endTime - now;
  console.log(distance);
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $('#hours').text(`${hours}`);
  $('#minutes').text(`${minutes}`);
  $('#seconds').text(`${seconds}`);

  $('#ball').toggleClass('move');
  //$('#ball').toggleClass('blue');

  if (hours == 0) {
    console.log(true);
    $('h1').css('color', 'red');
  } else {
    $('h1').css('color', 'white');
  }
}
