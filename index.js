var i = 0;
var txt = "Hello."; /* The text */
var speed = 330; /* The speed/duration of the effect in milliseconds */

$(document).ready(function(){$("html").hide().fadeIn(1000);});
// $(".hello").fadeIn(1000);


// animasi ketik
$(document).ready(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
});


setTimeout(function(){

  $(".hello").fadeOut();
}, 2000);

$(document).ready(function(){$("img").hide();});

setTimeout(function(){
  $("img").fadeIn();
}, 2000);


$("button").click(function(){
  alert("Email Sent!")
})



// function typeWriter() {
//   if (i < txt.length) {
//     $(".helloText").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
