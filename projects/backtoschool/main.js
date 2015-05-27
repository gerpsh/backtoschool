// This is JavaScript. It is a language that runs in the web browser
// and allows you to dynamically change the webpage based on events.

// Here we create a button element
var button = document.createElement("button");
button.innerHTML = "Find Pin";

// This sets up code (a function) that gets executed if the user clicks on the button
button.onclick = function(){
  var img = document.getElementById('xray');
  img.src = '/backtoschool/img/lateral_pin.png';
};

// Here we find the spot on the page where we want to add the button
var div = document.getElementById("xray_image");

// Uncomment the line below to actually add the button to the page
// div.appendChild(button);