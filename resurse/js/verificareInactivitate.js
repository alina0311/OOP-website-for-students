window.addEventListener("load", function(){
	//task nivel 3, 13
	var secunde, ok = 0, timer;
    resetDivuri();
	
	window.onkeypress = resetDivuri;   
	window.onkeyup = resetDivuri;
	window.onkeydown = resetDivuri;
	window.onmousemove = resetDivuri;
	window.mouseover = resetDivuri;
	window.mouseout = resetDivuri;
	window.mousedown = resetDivuri;
	window.mouseup = resetDivuri;
	window.mouseleave = resetDivuri;
	window.ondblclick =resetDivuri;

    //creez divul mare
	var containerMare = document.createElement("div");
	containerMare.classList.add("containerMare"); 

	//creez divul micut
	var containerMic = document.createElement("div");
	containerMare.appendChild(containerMic);
	containerMic.classList.add("containerMic");
            
	//creez paragrafele
	var textdormit = document.createElement("p");
	textdormit.textContent = "Dormi...";
	containerMic.appendChild(textdormit);
	textdormit.classList.add("textd");
			
	var inactivitate = document.createElement("p");
	containerMic.appendChild(inactivitate);
	inactivitate.classList.add("secundeActivitate");

	//creez imaginea
	var imagine = document.createElement("img");
	imagine.setAttribute("id","sleeping");
	imagine.setAttribute("src","../imagini/sleeping.jpg");
	containerMic.appendChild(imagine);

	function userInactiv() {
		ok = 1;
		secunde = 5;
		document.body.style.opacity = "0.5";
		interval = setInterval(function(){
			inactivitate.textContent = "";
			document.getElementsByTagName('body')[0].appendChild(containerMare); //adaug divul 
			containerMare.style.display = "block";
			document.body.style.position = "fixed";
			inactivitate.textContent = "Ai fost inactiv de " + secunde + " secunde";
			secunde++;
        }, 1000);
    }

	function resetDivuri() {
		if(ok){
			document.body.style.opacity = "1";
			document.getElementsByTagName("body")[0].removeChild(document.getElementsByTagName("body")[0].lastChild);
			document.body.style.position = "absolute";
			containerMare.style.display = "none";				
			clearInterval(interval);
			ok = 0;
		}
		clearTimeout(timer);
		timer = setTimeout(userInactiv, 5000); 
	}
})