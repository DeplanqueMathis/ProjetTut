function disp(type){
	var moyen = document.getElementsByName("moyen");
	for(var i=0; i < moyen.length ; i++){
		if(!moyen[i].checked){
			document.getElementById(moyen[i].value).style.display = "none";
		}
	}
	document.getElementById(type).style.display = "block";
}