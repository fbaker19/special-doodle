/*Automatic Slide Show*/

var slideIndex = 0;
carousel();

function carousel(){
    var slides = document.getElementsByClassName("slidePics");
    for(var i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        //hides/stacks pics on top each other/ displays one at a time
    }
    
    slideIndex++;
    
    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    
    //setTimeout(function, milliseconds) Executes a function, after waiting a specified number of milliseconds.
   
    slides[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every  seconds
}