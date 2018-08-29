$(document).ready(function() {
    setTimeout(function() { $('#image').hide() }, 5000);
});
function newfun(){
    setTimeout(function() { $('#grid-container').show() }, 5000);
    setTimeout(function(){alert(randomItem)},6000);
}
$(document).ready(function() {
    setTimeout(function() { $('#grid-container').hide() }, 0);
    newfun();
});
var myArray = ["beer","camel","cheetah","deer","gorilla","tiger","rabbit","rhinoceros","giraffe"];
var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
setTimeout(function() { 

    var time = 5; 
    var initialOffset = '440';
    var i = 1
  
       $('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));
  
    var interval = setInterval(function() {
        $('h1').text(i);
        if (i == time) {  	
          clearInterval(interval);
          return;
        }
        $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
        i++;  
    }, 1000);
  
  }, 0)
  