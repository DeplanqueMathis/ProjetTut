function contact(type){
	if(type == 'presse'){
		document.getElementById('contact-presse').style.display = "block";
		document.getElementById('contact-visiteur').style.display = "none";		
	}
	if(type == 'visiteur'){
		document.getElementById('contact-presse').style.display = "none";
		document.getElementById('contact-visiteur').style.display = "block";		
	}
}