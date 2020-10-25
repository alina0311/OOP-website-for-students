var express = require('express');/*include modulul express
memorand in variabila express obiectul asociat modulului(exportat de modul)*/
var formidable = require("formidable");
var session = require("express-session");
var crypto = require("crypto");
var fs = require("fs");
var path = require('path');
var app = express();//createServer

// pentru folosirea ejs-ului 
app.set('view engine', 'ejs');

app.use(session({
	secret:"cheie_sesiune",
	resave: true,
	saveUninitialized:false
}))
//dupa adaugarea acestui middleware (trebuie pus la inceput inainte de orice app.get/post) in requesturi va exista un camp nou numit session req.session
console.log("cale proiect: "+ __dirname)
app.use(express.static(path.join( __dirname, "resurse")));




//---------------tratare cereri post------------------
//<form method="post" action="/inreg"
app.post("/inreg", function(req,res){
	//preiau obiectul de tip formular
	var form=new formidable.IncomingForm();
	form.parse(req, function(err, fields, files){

		//proprietatile din fields sunt valorile atributelor name din inputurile formularului
		var continutFisier= fs.readFileSync("useri.json");
		var obUseri=JSON.parse(continutFisier);
		var parolaCriptata;
		var algoritmCriptare= crypto.createCipher("aes-128-cbc", "parola_pentru_criptare");
		parolaCriptata=algoritmCriptare.update(fields.parola, "utf-8", "hex");
		parolaCriptata+=algoritmCriptare.final("hex")
		if(fields.limbaje){
			console.log(fields.limbaje.length)
			sirLimbaje=fields.limbaje
		}
		else sirLimbaje=""
		var userNou={
			  id:obUseri.lastId,
			  username:fields.username,
			  nume:fields.nume,
			  prenume:fields.prenume,
			  scoala:fields.scoala,
			  email:fields.email,
			  parola:parolaCriptata,
			  sex:fields.sex,
			  info:fields.info,
			  dataInreg:new Date(),
			  rol:"user",
			  limbaje:sirLimbaje
			}
		obUseri.lastId++;
		obUseri.useri.push(userNou);
		var jsonNou=JSON.stringify(obUseri);
		fs.writeFileSync("useri.json", jsonNou);
		res.redirect("/")
	})
	
});

app.post("/login", function(req,res){
	//preiau obiectul de tip formular
	var form=new formidable.IncomingForm();
	form.parse(req, function(err, fields, files){

		//proprietatile din fields sunt valorile atributelor name din inputurile formularului
		var continutFisier= fs.readFileSync("useri.json");
		var obUseri=JSON.parse(continutFisier);
		var parolaCriptata;
		var algoritmCriptare= crypto.createCipher("aes-128-cbc", "parola_pentru_criptare");
		parolaCriptata=algoritmCriptare.update(fields.parola, "utf-8", "hex");
		parolaCriptata+=algoritmCriptare.final("hex")
		//find returneaza primul element pentru care functia data ca parametru returneaza true (e indeplinita conditia de cautare)
		//daca nu gaseste un element cu conditia ceruta returneaza null
		var utiliz = obUseri.useri.find(function(el){
			return el.username == fields.username && el.parola == parolaCriptata;
		});

		if(utiliz){
			console.log("exista utilizatorul!")
			req.session.utilizator=utiliz;

			//parametrul al doilea al lui render  contine date de transmis catre ejs
			res.render("html/index", {username: utiliz.username});
		}

	})	
});




app.get("/logout", function(req,res){
	req.session.destroy();
	res.redirect("/");
})


// cand se face o cerere get catre pagina de index 

app.get("/*",function(req, res){
	
	console.log("============================");
	console.log(req.url);
	//err este null daca randarea s-a terminat cu succes, si contine eroarea in caz contrar (a survenit o eroare)
	//rezRandare - textul in urma randarii (compilarii din ejs in html)
	var un= req.session? (req.session.utilizator? req.session.utilizator.username: null)  :  null; 
	res.render("html"+req.url, {username: un}, function(err, rezRandare){
		if (err){
			if(err.message.includes("Failed to lookup view")){
				res.status(404).render("html/404", {username: un});
			}
			else{
				throw err;
			}
		}
		else{
			res.send(rezRandare);
		}
	});
})

app.use(function(req, res){
	res.status(404).render("html/404")

})

app.listen(8080);
console.log('Aplicatia se va deschide pe portul 8080.');







