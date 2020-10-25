window.addEventListener("load", function(){
	//task nivel 2, 3
	titlu = document.getElementById("titluindex");
	var continut = titlu.textContent;
	var splitContinut = continut.slice().split("");
	titlu.textContent = "";
	for(let i = 0; i < splitContinut.length; i++){
		titlu.innerHTML = titlu.innerHTML + "<span>" + splitContinut[i] + "</span>";
	}
	var lungime = splitContinut.length;
	var pozitie = 0;
	var timer = setInterval(afisare, 100);
	function afisare(){
		var primaParte = titlu.getElementsByTagName("span")[pozitie];
		var adouaParte = titlu.getElementsByTagName("span")[lungime-pozitie-1];
		primaParte.classList.add("ascuns");
		adouaParte.classList.add("ascuns");
		pozitie++;
		if(pozitie * 2 > lungime){
			complete();
		}
	}
	function complete(){
		clearInterval(timer);
	}
})