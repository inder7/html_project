
var linkArray = window.location.href.split('/');
var pageName = linkArray[linkArray.length - 1];

if(pageName == "index.html")
{
	var slideIndex = 0;
	showSlides(slideIndex);
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}






document.getElementById("home").style.display = "block";

function hideAll(){
	document.getElementById("home").style.display = "none";
	document.getElementById("resort").style.display = "none";
	document.getElementById("boutique").style.display = "none";
	document.getElementById("child").style.display = "none";
	document.getElementById("library").style.display = "none";
	document.getElementById("mall").style.display = "none";
	document.getElementById("bar").style.display = "none";
	document.getElementById("bridge").style.display = "none";
	
}

function home(){
	hideAll();
	document.getElementById("home").style.display = "block";
}

function resort(){
	hideAll();
	document.getElementById("resort").style.display = "block"
}

function boutique(){
	hideAll();
	document.getElementById("boutique").style.display = "block"
}

function child(){
	hideAll();
	document.getElementById("child").style.display = "block"
}

function library(){
	hideAll();
		document.getElementById("library").style.display = "block"

}

function mall(){
	hideAll();
		document.getElementById("mall").style.display = "block"

}

function bar(){
	hideAll();
	document.getElementById("bar").style.display = "block"


}

function bridge(){
hideAll();
	
	document.getElementById("bridge").style.display = "block"
}


