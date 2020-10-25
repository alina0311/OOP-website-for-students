var alegeCuloare = "";
window.onload=function(){
    //creez un obiect de tip XMLHttpRequest cu care pot transmite cereri catre server
    var ajaxRequest = new XMLHttpRequest();
	var elevi;
	var copie_elevi;
	ajaxRequest.onreadystatechange = function() {
            //daca am primit raspunsul (readyState==4) cu succes (codul status este 200)
            if (this.readyState == 4 && this.status == 200) {
                    //in proprietatea responseText am contintul fiserului JSON
                    var obJson = JSON.parse(this.responseText);
					elevi = obJson.elevi;
					copie_elevi = elevi.slice();
                    afiseazaJsonTemplate(elevi); // !!
            }
    };
	ajaxRequest.open("GET", "/json/elevi.json", true);
	ajaxRequest.send();
	
    function afiseazaJsonTemplate(elevi) { 
	let container=document.getElementById("afisTemplate");
	let textTemplate ="";
    for(let i=0;i<elevi.length;i++){
            //creez un template ejs (primul parametru al lui ejs.render)
            //acesta va primi ca parametru un elev din vectorul de elevi din json {elev: obJson.elevi[i]}
            //practic obJson.elevi[i] e redenumit ca "elevi" in template si putem sa ii accesam proprietatile
            textTemplate+=ejs.render("<div class='templ_elev'>\
            <p><span>Id:</span> <%= elev.id %></p>\
            <p><span>Nume:</span> <%= elev.nume %></p>\
            <p><span>Prenume:</span> <%= elev.prenume %> </p>\
			<p class='clasa'><span>Clasa:</span> <%= elev.clasa %> </p>\
			<p><span>Descriere:</span> <%= elev.descriere %> </p>\
			<p><span>Sex:</span> <%= elev.sex %> </p>\
			<p><span>Data nasterii:</span> <%= elev.dataNasterii %> </p>\
			<p><span>Pasiuni:</span> <%= elev.pasiuni %> </p>\
			<p><span>Culoare:</span> <%= elev.culoare %> </p>\
			<p><span>Nota informatica:</span> <%= elev.nota %> </p>\
            </div>", 
            {elev: elevi[i]});
        } 
        container.innerHTML=textTemplate;
    }
	
	//Daca nu s-a apasat niciun buton, vaom crea o alerta
	var cerereButon;
	cerereButon = setInterval(g, 4000);
	function g(){
		alert("Ce doresti sa faci?");
	}
		
	//La apasarea butonului sorteaza dupa nota, se va sorta dupa nota in ordine crescatoare
	document.getElementById("sorteaza_nota").onclick=function(){
		elevi.sort(function(x, y){
			return x.nota - y.nota;
		});
		afiseazaJsonTemplate(elevi); //reapelez
		clearInterval(cerereButon); //voi face clear de fiecare data cand se face click pe un buton
    }
	
	//la apasarea butonului de calculeaza se va face media notelor
	document.getElementById("calculeaza").onclick=function(){
		var suma = 0;
		var medie = 0;
		var timeout;
		for(let i=0;i<elevi.length;i++){
			suma += parseInt(elevi[i].nota);
		}
		medie = suma/elevi.length;
		var t = document.createElement("p"); 	
		t.setAttribute("id","median");
		t.innerHTML = "Media notelor este: " + medie;    
		document.getElementById("meniu_apl").appendChild(t);    
		timeout = setTimeout(function(){
			document.getElementById("meniu_apl").removeChild(document.getElementById("median"));
		},1000)
		clearInterval(cerereButon);
	}
	
	//filtreaza dupa clasa
	document.getElementById("filtreaza").onclick=function(){
		var alegeClasa = prompt("Dati clasa dupa care vreti sa filtrati elevii: ");
		if(alegeClasa != null){
			var y;
			y = document.querySelectorAll(".templ_elev");
			for(let i=0;i<y.length;i++){
				var t = y[i].children[3].innerHTML.split(" ");
				var z = t[1];
				if(z != alegeClasa){
					y[i].remove();
				}
			}
		}
		clearInterval(cerereButon);
	}
	
	//filtreaza dupa input de tip radio
	document.getElementById("filtreaza_input").onclick=function(){
		var x = document.getElementsByName("culoare");
		for(let i=0;i<x.length;i++)
			if(x[i].checked){
				alegeCuloare = x[i].value;
				localStorage.setItem("culoare", alegeCuloare);
			}
		if(alegeCuloare == ""){
			if (localStorage.getItem("culoare")!=null){
				alegeCuloare=localStorage.getItem("culoare");
				for(let i=0;i<x.length;i++){
					if(x[i].value==alegeCuloare)
						x[i].checked = true;
				}
			}
		}
		var y;
		y = document.querySelectorAll(".templ_elev");
		for(let i=0;i<y.length;i++){
			var t = y[i].children[8].innerHTML.split(" ");
			var z = t[1];
			if(z != String(alegeCuloare)){
				y[i].remove();
			}
		}
		clearInterval(cerereButon);
	}
	//sterge dupa clasa data ca input text
	document.getElementById("sterge").onclick=function(){
		var y = document.getElementsByClassName("templ_elev");
		var inputv = document.getElementById("pas").value;
		if(inputv != ""){
			for(let i=0;i<y.length;i++){
				var t = y[i].children[7].innerHTML.split(" ");
				for(let k=0;k<t.length;k++){
					if(t[k] == inputv){
						console.log(t[k]);
						y[i].remove();
						i-=1;
					}
				}
			}
		}
		clearInterval(cerereButon);
	}
	
	//reseteaza
	document.getElementById("reseteaza").onclick=function(){
		afiseazaJsonTemplate(copie_elevi);
		clearInterval(cerereButon);
	}
	
	//schimba culoare butoanelor
	document.getElementById("schimba_culoare").onclick=function(){
		var y = document.getElementsByTagName("button");
		var culoare = []; 
		culoare[0] = "#"; 
		for (var i = 1; i < 7; i++){
			var x = Math.floor((Math.random()*16)); 
			if (x >=10 && x <= 15){ 
				if(x == 10)
					x="a";
				if(x == 11)
					x="b";
				if(x == 12)
					x="c";
				if(x == 13)
					x="d";
				if(x == 14)
					x="e";
				if(x == 15)
					x="f"; 
				}
			culoare[i] = x;
		}
    var culoareFinala = culoare.join(""); //this argument for join method ensures there will be no separation with a comma
		for(let i=0;i<y.length;i++){
			y[i].style.backgroundColor = culoareFinala;
		}
		clearInterval(cerereButon);
	}
	
}
//la apasare tasta D se sterg elevii 
window.onkeypress=function(e){
	var gr=e.key.toUpperCase();
	if(gr == "D"){
		var y = document.getElementsByClassName("templ_elev");
		var rasp_prompt=prompt("Sterge elevii din clasa ...", "9");
		for(let i=0;i<y.length;i++){
			var t = y[i].children[3].innerHTML.split(" ");
			var z = t[1];
			if(z == rasp_prompt)
				y[i].classList.add("selectat");
		}
		
		var rasp_confirm=confirm("Stergi?");
		if(rasp_confirm){
			for (let i=0;i<y.length;i++){
				if(y[i].classList.contains("selectat")){
					y[i].remove();
					i-=1;
				}
			}
		}
	}
	clearInterval(cerereButon);
}



