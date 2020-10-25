
window.addEventListener("load", function(){
	//task nivel 1, 7
	var vectorRavase = [
	"Educaţia este îmblânzirea unei flăcări, nu umplerea unui vas. – Socrate",
	"Nu am lăsat niciodată şcoala să-mi afecteze educaţia. – Mark Twain",
	"Scopul educaţiei este nimicirea mărginirii egoiste a individului şi supunerea lui la raţiunea lucrurilor.– Titu Maiorescu",
	"Educaţia este ceea ce supravieţuieşte după ce tot ce a fost învăţat a fost uitat – Burrhus Frederic Skinner",
	"Natura ne aseamăna. Educaţia ne deosebeşte. – Confucius",
	"O bună educaţie cere ca educatorul să inspire elevului stima şi respect, şi nu se poate ajunge la aceasta prin nimicirea individualităţii elevilor şi prin asuprirea stimei de sine – Samuel Smiles",
	"Ca să reuseşti în viaţă, alături de studii şi diplome, îţi trebuie să ai şi şcoala vieţii. -Victor Duta",
	"Educaţia este cea mai puternică armă pe care voi o puteţi folosi pentru a schimba lumea. – Nelson Mandela",
	"Omul poate deveni om numai prin educaţie. El nu e nimic decât ceea ce face educaţia din el. – Immanuel Kant",
	"Educaţia este un vaccin contra violenţei. – Edward James Olmos",
	"Educaţia care li se dă tinerilor este un al doilea amor propriu care li se inspiră. – Francois de La Rochefoucauld",
	"Educaţia unui popor se judecă după ţinuta de pe stradă. Văzând grosolănia pe stradă eşti sigur că o vei găsi şi în casă – Edmondo De Amicis",
	"Orice om capătă doua feluri de educaţie: una pe care i-o dau alţii, alta, mult mai însemnată, pe care şi-o dă el însuşi. – Samuel Smiles",
	"Auto-educaţia este, după părerea mea fermă, singurul tip de educaţie care există. – Isaac Asimov",
	"Educaţia nu este cât de mult ai memorat, nici măcar cât ştii. Este capacitatea de a diferenţia între ceea ce ştii şi ceea ce nu ştii – Anatole France",
	"Cea mai bună educaţie din lume este să-i urmăreşti pe maeştri la lucru. – Michael Jackson",
	"Educaţia este ştiinţa de a asculta aproape orice fel de spuse fără a-ţi pierde stăpânirea, sau încrederea în tine însuţi. – Winston Churchill",
	"Educaţia este o metodă prin care cineva capătă un nivel mai ridicat de prejudecăţi – Laurence J. Pete",
	"Educaţia este un al doilea soare pentru cei care îl avem. – Heraclit din Efes"
	]
	var nrRavas = Math.floor(Math.random()*vectorRavase.length);
	var ravas = document.createElement("p");
	ravas.innerHTML = vectorRavase[nrRavas];
	document.getElementById("containerRavas").appendChild(ravas);
})