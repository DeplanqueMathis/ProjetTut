var slideactu = 1;

function change(nb){
	slideapparait(slideactu += nb);
}

function Slide(nb){
	slideapparait(slideactu = nb);
}

function slideapparait(nb){
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");
	if (nb > slides.length) {slideactu = 1}
	if (nb < 1) {slideactu = slides.length}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideactu-1].style.display = "block";
	dots[slideactu-1].className += " active";
	//showSlides();
}
function showSlides() {
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("dot");
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideactu++;
	if (slideactu > slides.length) {slideactu = 1}  
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideactu-1].style.display = "block";
	dots[slideactu-1].className += " active";
	setTimeout(showSlides, 10000); // Change image every 2 seconds
}