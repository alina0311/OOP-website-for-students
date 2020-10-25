window.addEventListener("load", function(){
	//task nivel 2, 13
	var nrcuvinte = 0;     
	var body = document.getElementsByTagName("body");     
	for(let i = 0; i < body.length; i++){         
		nrcuvinte = nrcuvinte + body[i].innerText.split(" ").length; //        
	}   
	var p = document.createElement("p");
	p.innerHTML = "Numarul de cuvinte pe pagina este de " + nrcuvinte; 
	document.getElementsByTagName("footer")[0].children[1].appendChild(p);
	p.style.marginTop = "-120px";
	p.style.marginLeft = "300px";
	p.style.width = "600px";
	p.style.fontFamily = ("Jost");
})