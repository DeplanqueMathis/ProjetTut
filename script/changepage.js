function change(langue){
	if(langue == "en"){
		var url = window.location.href;
		document.location.href= url.replace(".html","en.html");
	}
	if(langue == "fr"){
		var url = window.location.href;
		document.location.href= url.replace("en","");
	}
}