var eventDate = document.getElementById('datetime');

var counting = eventDate.value;
var countDown = new Date(counting).getTime();
// console.log(countDown);
// var countDownDate = new Date("Aug 31, 2023 00:00:00").getTime();
var countDownDate = new Date(countDown).getTime();
// console.log(countDownDate);
// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "ONGOING";
      document.getElementById("hours").innerHTML = "ONGOING";
      document.getElementById("minutes").innerHTML = "ONGOING";
      document.getElementById("seconds").innerHTML = "ONGOING";
    }
  }, 1000);