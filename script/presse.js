function dossierpresse(langue){
	document.getElementById("infopresse").style.display = "block";
	var url = window.location.href;
	if(langue == "fr"){
		if(url != "lesalon.html"){
			document.location.href= "lesalon.html#infopresse";
		}
		else{
			document.location.href= url + "#infopresse";
		}
	}
	else if(langue == "en"){
		if(url != "lesalonen.html"){
			document.location.href= "lesalonen.html#infopresse";
		}
		else{
			document.location.href= url + "#infopresse";
		}
	}
}