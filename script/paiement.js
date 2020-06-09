function disp(type){
	var moyen = document.getElementsByName("moyen");
	for(var i=0; i < moyen.length ; i++){
		if(!moyen[i].checked){
			document.getElementById(moyen[i].value).style.display = "none";
		}
	}
	document.getElementById(type).style.display = "block";
}

function achat(){
	var normal = parseInt(document.getElementById('normal').value);
	var reduit = parseInt(document.getElementById('special').value);
	var gratuit = parseInt(document.getElementById('douzeans').value);
	var vetements = parseInt(document.getElementById('vetements').value);
	var ptbagage = parseInt(document.getElementById('ptbagage').value);
	var grbagage = parseInt(document.getElementById('grbagage').value);
	document.getElementById('normal').disabled = true;
	document.getElementById('special').disabled = true;
	document.getElementById('douzeans').disabled = true;
	document.getElementById('vetements').disabled = true;
	document.getElementById('ptbagage').disabled = true;
	document.getElementById('grbagage').disabled = true;
	document.getElementById("info-paiement").style.display = "block";
	document.getElementById("reservation").style.display = "block";
	document.getElementById("conditions").style.display = "none";
	document.getElementById('places').innerHTML = normal + reduit + gratuit;
	document.getElementById('total').innerHTML = normal*11.5 + reduit*5 + vetements + ptbagage*2 + grbagage*3;
}

function payer(){
	document.getElementById('reservation').style.display = "none";
	document.getElementById('table-reserv').style.display = "none";
	document.getElementById('apres-paiement').style.display = "block";
}