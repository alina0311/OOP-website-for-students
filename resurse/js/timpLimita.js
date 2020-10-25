window.addEventListener("load", function(){
	//task nivel 2, 8
	var trimis = 0;
	document.getElementById("question").onclick = function(){
		setTimeout(f, 3000);
		document.getElementById("trimite").onclick = function(){
			trimis = 1;
		}
	}
	function f(){
		if(trimis == 0){
			alert("Timpul a expirat!");
			document.getElementById("question").disabled = true;
		}
		else{
			var p = document.createElement("p"); 
			if(document.getElementById("question").value == "derivata")
				p.innerHTML = "Felicitari!";
			else	
				p.innerHTML = "Ai gresit!";
			document.getElementById("intrebare").appendChild(p); 
			p.style.marginLeft = "260px";
		}
		var intr = document.getElementById("intrebare");
		intr.removeChild(document.getElementById("properq"));
	}
})