// Set this value to the starting value for your countdown/countup.
var counter = 460742;

var x = setInterval(function() {
  // Set this value to how much you want the counter to increment/decrement by.
  counter += 1;
  
  // Change the ID to the ID of the text element containing your counter.
  document.getElementById("counter").innerHTML = counter.toLocaleString('en-US');

// Change the 100 to how many milliseconds (1000ths of a second) you want to wait. 100 is 1/10th of a sec.
}, 100);