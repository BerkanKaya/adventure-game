document.body.style.backgroundSize = "cover";
level1();
var inventory;
function level1(){
	document.body.style.backgroundImage = "url('image/vliegtuig.gif')";
	document.getElementById('button').innerText = "Verder";
	document.getElementById('button').onclick = level2;
	document.getElementById('button1').style.display = "none";
	document.getElementById('title').innerText = "The Lost Person..";
	document.getElementById('button2').style.display = "none"
	document.getElementById('description').innerText = "Je gaat op vakantie naar een eiland in america, terwijl je onderweg bent is er een storm...";
}

function level2(){
	document.body.style.backgroundImage = "url('image/vliegtuig1.jpg')";
	document.getElementById('button').innerText = "Parachute zoeken";
	document.getElementById('button').onclick = level3;
	document.getElementById('button1').style.display = "inline-block";
	document.getElementById('title').innerText = "Ongeluk!";
	document.getElementById('button2').style.display = "none"
	document.getElementById('description').innerText = "de vliegtuig wordt geraakt door blitsem. de vliegtuig stort naar beneden! wat doe je? ";
	document.getElementById('button1').innerText = "Paniekeren";	
	document.getElementById('button1').onclick = dood;
}
function dood(){
	document.body.style.backgroundImage = "url('image/wasted2.jpg')";
	document.getElementById('button').innerText = "Try again";
	document.getElementById('button').onclick = level2;
	document.getElementById('button1').style.display = "none";
	document.getElementById('title').innerText = "De vliegtuig is gecrashed en je bent dood";
	document.getElementById('description').innerText = "";
	document.getElementById('button2').style.display = "none"
	document.getElementById('button1').innerText = "Paniekeren";
	document.getElementById('inventory-item').style.display = "none";
	document.getElementById('parachute').style.display = "none";

}
function level3(){
	document.body.style.backgroundImage = "url('image/vliegtuig2.jpg')";
	document.getElementById('button').innerText = "Verder";
	document.getElementById('button').onclick = dood1;
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "none"
	document.getElementById('title').innerText = "Zoek een Parachute!";
	document.getElementById('description').innerText = "Je hebt de parachute nodig om te overleven! zoek de parachute! ";
	document.getElementById('button1').innerText = "Paniekeren";
	var parachute = document.createElement("img");	
	parachute.src = "image/parachute2.jpg";
	parachute.id = "parachute";
	parachute.onclick = function() {
		document.getElementById('inventory-item').src = "image/parachute2.jpg";
		document.getElementById("parachute").style.display = "none";
		inventory = "parachute";
		document.getElementById('button').onclick = level5;
	};
	document.body.appendChild(parachute);

	var troll = document.createElement("img");	
	troll.src = "image/troll.jpg";
	troll.id = "troll";
	troll.onclick = function() {
		document.getElementById('inventory-item').src = "image/troll.jpg";
		document.getElementById("troll").style.display = "none";
		inventory = "troll";
		document.getElementById('button').onclick = dood2;
	};
	document.body.appendChild(troll);

}
function dood1(){
	document.body.style.backgroundImage = "url('image/wasted2.jpg')";
	document.getElementById('button').innerText = "Try again";
	document.getElementById('button').onclick = refresh;
	document.getElementById('title').innerText = "Je hebt de parachute niet opgepakt en je bent dood";
	document.getElementById('description').innerText = "";
	document.getElementById('button2').style.display = "none"
	document.getElementById('inventory-item').style.display = "none";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
}
function dood2(){
	document.body.style.backgroundImage = "url('image/wasted2.jpg')";
	document.getElementById('button').innerText = "Try again";
	document.getElementById('button').onclick = refresh;
	document.getElementById('title').innerText = "Hoezooo pak je nou weer die troll oppp";
	document.getElementById('button2').style.display = "none"
	document.getElementById('description').innerText = "";
	document.getElementById('inventory-item').style.display = "none";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
}
function refresh(){
	location = location;
}
function level5(){
	document.body.style.backgroundImage = "url('image/parachute.gif')";
	document.getElementById('button').innerText = "Verder";
	document.getElementById('button').onclick = level6;
	document.getElementById('button1').style.display = "none";
	document.getElementById('title').innerText = "De sprong!";
	document.getElementById('description').innerText = "Je springt naar beneden en gebruikt je parachute!";
	document.getElementById('button1').innerText = "Paniekeren";
	document.getElementById('button2').style.display = "none"
	document.getElementById('inventory-item').style.display = "none";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('inventory-item').style.display = "none";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";

}
function level6(){
	document.body.style.backgroundImage = "url('image/achtergrond.gif')";
	document.getElementById('button').innerText = "Door het jungle lopen";
	document.getElementById('button').onclick = level7;
	document.getElementById('title').innerText = "Pijn..";
	document.getElementById('description').innerText = "je land op een eiland, en je ziet niemand om je heen. je hebt te veel pijn van het landen en je been bloed heftig. dus je moet wat vinden om het bloed te stoppen. wat doe je? ";
	document.getElementById('button1').onclick = dood3;
	document.getElementById('button1').style.display = "block"
	document.getElementById('button1').innerText = "Blijven liggen";
	document.getElementById('button2').style.display = "none"
	document.getElementById('inventory-item').style.display = "none";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
}

function dood3(){
	document.body.style.backgroundImage = "url('image/wasted2.jpg')";
	document.getElementById('button').innerText = "Try again";
	document.getElementById('button').onclick = refresh1;
	document.getElementById('title').innerText = "Je bent dood gebloed...";
	document.getElementById('description').innerText = "";
	document.getElementById('button1').onclick = level7;
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "none";
	document.getElementById('inventory-item').style.display = "none";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	document.getElementById('doekje').style.display = "none";
	document.getElementById('text').style.display= "none";
}
function refresh1(){
	location = location;
}

function level7(){
	document.body.style.backgroundImage = "url('image/jungle.jpg')";
	document.getElementById('button').innerText = "Verder";
	document.getElementById('button').onclick = dood3;
	document.getElementById('title').innerText = "Zoek spullen!";
	var text = document.createElement("h1");
	text.innerHTML = "Zoek naar spullen die je kunnen helpen om het bloeden te stoppen! ";
	text.id = "text";
	document.body.appendChild(text);
	document.getElementById('description').style.display = "none";
	document.getElementById('button1').onclick = dood3;
	document.getElementById('button1').style.display = "none"
	document.getElementById('button2').style.display = "none"
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	var doekje = document.createElement("img");	
	doekje.src = "image/doekje.png";
	doekje.id = "doekje";
	doekje.onclick = function() {
		document.getElementById('inventory-item').src = "image/doekje.png";
		document.getElementById("doekje").style.display = "none";
		inventory = "doekje";
		document.getElementById('button').onclick = level8;
	};
	document.body.appendChild(doekje);
}
function level8(){
	document.body.style.backgroundImage = "url('image/jungle2.jpg')";
	document.getElementById('button').innerText = "Verder";
	document.getElementById('button').onclick = dood4;
	document.getElementById('title').innerText = "Zoek verder!";
	var text = document.createElement("h1");
	text.innerHTML = "Je bloed nog steeds. Zoek wat anders, anders bloed je uit!";
	text.id = "text1";
	document.body.appendChild(text);
	document.getElementById('text').style.display = "none";
	document.getElementById('description').innerText = "";
	document.getElementById('description').style.display= "none";
	document.getElementById('button1').onclick = dood4;
	document.getElementById('button2').style.display = "none"
	document.getElementById('button1').style.display = "none"
	document.getElementById('button1').innerText = "Blijven liggen";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	document.getElementById('doekje').style.display = "none";
	var mes = document.createElement("img");	
	mes.src = "image/mes.png";
	mes.id = "mes";
	var mesClicked = false;
	var doekjeClicked = false;
	mes.onclick = function() {
		document.getElementById('inventory-item').src = "image/mes.png";
		document.getElementById("mes").style.display = "none";
		inventory = "mes";
		mesClicked = true;
		if(doekjeClicked) {
			document.getElementById('button').onclick = level9;			
		} else {
			document.getElementById('button').onclick = dood4;
		}
	};
	document.body.appendChild(mes);

	var doekje1 = document.createElement("img");	
	doekje1.src = "image/doekje.png";
	doekje1.id = "doekje1";
	doekje1.onclick = function() {
		document.getElementById('inventory-item').src = "image/doekje.png";
		document.getElementById("doekje1").style.display = "none";
		inventory = "doekje1";
		doekjeClicked = true;
		if(mesClicked) {
			document.getElementById('button').onclick = level9;			
		} else {
			document.getElementById('button').onclick = dood5;
		}
	};
	document.body.appendChild(doekje1);
}

function level9(){
	document.body.style.backgroundImage = "url('image/strand.jpg')";
	document.getElementById('button').innerText = "Verder";
	document.getElementById('button').onclick = dood6;
	document.getElementById('title').innerText = "Zoek wapens!";
	document.getElementById('description').innerText = "Het bloeden is gestopt, Zoek wapens";
	document.getElementById('description').style.display = "none";
	document.getElementById('text1').style.display = "block";
	document.getElementById('text1').innerText = "Het bloeden is gestopt, Zoek nu een wapen om jezelf te verdedigen";
	document.getElementById('button1').onclick = dood4;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button1').innerText = "Blijven liggen";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	document.getElementById('mes').style.display = "none";
	document.getElementById('text').style.display = "none";

	var dagger = document.createElement("img");	
	dagger.src = "image/wapen.png";
	dagger.id = "dagger";
	dagger.onclick = function() {
		document.getElementById('inventory-item').src = "image/wapen.png";
		document.getElementById("dagger").style.display = "none";
		inventory = "dagger";
		document.getElementById('button').onclick = level10;
	};
	document.body.appendChild(dagger);
}



function dood4(){
	document.body.style.backgroundImage = "url('image/wasted2.jpg')";
	document.getElementById('button').innerText = "Try again";
	document.getElementById('button').onclick = refresh1;
	document.getElementById('title').innerText = "Er komt een wolf op je af en die veroord je met de mes!, Maar je bloed dood....";
	document.getElementById('description').innerText = "";
	document.getElementById('button1').onclick = level7;
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "none";
	document.getElementById('inventory-item').style.display = "none";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	document.getElementById('doekje').style.display = "none";
	document.getElementById('text').style.display= "none";
	document.getElementById('text1').style.display= "none";
	document.getElementById('mes').style.display= "none";
	document.getElementById('doekje1').style.display= "none";
}
function dood5(){
	document.body.style.backgroundImage = "url('image/wasted2.jpg')";
	document.getElementById('button').innerText = "Try again";
	document.getElementById('button').onclick = refresh1;
	document.getElementById('title').innerText = "Je stop het bloeden!, maar er komt een wolf op je af en die vermoord je!";
	document.getElementById('description').innerText = "";
	document.getElementById('button1').onclick = level7;
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "none";
	document.getElementById('inventory-item').style.display = "none";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	document.getElementById('doekje').style.display = "none";
	document.getElementById('text').style.display= "none";
	document.getElementById('text1').style.display= "none";
	document.getElementById('mes').style.display= "none";
	document.getElementById('doekje1').style.display= "none";
	document.getElementById('dagger').style.display = "none";

}


function dood6(){
	document.body.style.backgroundImage = "url('image/raiden.gif')";
	setTimeout(function() {
		document.body.style.backgroundImage = "url('image/fire.gif')";

		setTimeout(function() {
			document.body.style.backgroundColor = "#8a0303";
			document.body.style.backgroundImage = "none"; 
		}, 1000);
	}, 1300);

	document.getElementById('button').innerText = "Try again";
	document.getElementById('button').onclick = refresh1;
	document.getElementById('title').innerText = "Raiden heeft je vermoord!";
	document.getElementById('description').innerText = "Het bloeden is gestopt, Zoek wapens";
	document.getElementById('description').style.display = "none";
	document.getElementById('text1').style.display = "none";
	document.getElementById('text1').innerText = "";
	document.getElementById('button1').onclick = dood4;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button1').innerText = "Blijven liggen";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	document.getElementById('mes').style.display = "none";
	document.getElementById('text').style.display = "none";
	document.getElementById('dagger').style.display = "none";

}
function level10(){
	document.body.style.backgroundImage = "url('image/scorpion.gif')";
	document.getElementById('button').innerText = "gooi vuurbal";
	document.getElementById('button').onclick = level11;
	document.getElementById('title').innerText = "Raiden goot een supriseattack op je, maar je blockt em!";
	document.getElementById('description').innerText = "Nu kan je aanvallen! wat doe je, Attack je hem snel of gooi je een vuurbal?";
	document.getElementById('description').style.display = "block";
	document.getElementById('text1').style.display = "none";
	document.getElementById('text1').innerText = "";
	document.getElementById('button1').onclick = dood7;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button1').style.display = "inline-block";
	document.getElementById('button1').innerText = "attack hem";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	document.getElementById('mes').style.display = "none";
	document.getElementById('text').style.display = "none";
	document.getElementById('dagger').style.display = "none";

}
function level11(){
	var gif = document.body.style.backgroundImage = "url('image/fight.gif')";
	document.getElementById('button').innerText = "Attack met zwaarden";
	document.getElementById('button').onclick = level12;
	document.getElementById('title').innerText = "Nice!";
	document.getElementById('description').innerText = "Je hit Raiden met een FireballSuperManPunch! Wat doe je nu?";
	document.getElementById('description').style.display = "block";
	document.getElementById('text1').style.display = "none";
	document.getElementById('text1').innerText = "";
	document.getElementById('button1').onclick = dood8;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button1').style.display = "inline-block";
	document.getElementById('button1').innerText = "Bevries hem";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	document.getElementById('mes').style.display = "none";
	document.getElementById('text').style.display = "none";
	document.getElementById('dagger').style.display = "none";
}
function dood7(){
	document.body.style.backgroundImage = "url('image/raiden.gif')";
	setTimeout(function() {
		document.body.style.backgroundImage = "url('image/fire.gif')";

		setTimeout(function() {
			document.body.style.backgroundColor = "#8a0303";
			document.body.style.backgroundImage = "none"; 
		}, 1300);
	}, 1300);

	document.getElementById('button').innerText = "Try again";
	document.getElementById('button').onclick = level10;
	document.getElementById('title').innerText = "Raiden vermoord je! de attack duurde te lang..";
	document.getElementById('description').innerText = "Het bloeden is gestopt, Zoek wapens";
	document.getElementById('description').style.display = "none";
	document.getElementById('text1').style.display = "none";
	document.getElementById('text1').innerText = "";
	document.getElementById('button1').onclick = dood4;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button1').innerText = "Blijven liggen";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	document.getElementById('mes').style.display = "none";
	document.getElementById('text').style.display = "none";
	document.getElementById('dagger').style.display = "none";

}
function dood8(){
	document.body.style.backgroundImage = "url('image/raiden.gif')";
	setTimeout(function() {
		document.body.style.backgroundImage = "url('image/fire.gif')";

		setTimeout(function() {
			document.body.style.backgroundColor = "#8a0303";
			document.body.style.backgroundImage = "none"; 
		}, 1300);
	}, 1200);

	document.getElementById('button').innerText = "Try again";
	document.getElementById('button').onclick = level10;
	document.getElementById('title').innerText = "Je hebt helemaal geen ijskracht? uhhh";
	document.getElementById('description').innerText = "Het bloeden is gestopt, Zoek wapens";
	document.getElementById('description').style.display = "none";
	document.getElementById('text1').style.display = "none";
	document.getElementById('text1').innerText = "";
	document.getElementById('button1').onclick = dood4;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button1').innerText = "Blijven liggen";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	document.getElementById('mes').style.display = "none";
	document.getElementById('text').style.display = "none";
	document.getElementById('dagger').style.display = "none";

}
function level12(){
	document.body.style.backgroundImage = "url('https://media.giphy.com/media/1yTeIHk678iVIEJmUD/giphy.gif')";
	document.getElementById('button').innerText = "Get Over Here!";
	document.getElementById('button').onclick = level13;
	document.getElementById('title').innerText = "Raiden hit terug voordat je hem kan aanvallen! Wat doe je nu?";
	document.getElementById('description').innerText = "";
	document.getElementById('description').style.display = "none";
	document.getElementById('text1').style.display = "none";
	document.getElementById('text1').innerText = "";
	document.getElementById('button1').onclick = dood8;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button1').style.display = "inline-block";
	document.getElementById('button1').innerText = "Gooi een ijsbal";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	document.getElementById('mes').style.display = "none";
	document.getElementById('text').style.display = "none";
	document.getElementById('dagger').style.display = "none";
}
function level13(){
	document.body.style.backgroundImage = "url('image/fight2.gif')";
	document.getElementById('button').innerText = "Finish HIM!";
	document.getElementById('button').onclick = level14;
	document.getElementById('title').innerText = "Je hit Raiden Recht door zijn hoofd heen!";
	document.getElementById('description').innerText = "Raiden begint hevig te bloeden!";
	document.getElementById('description').style.display = "block";
	document.getElementById('text1').style.display = "none";
	document.getElementById('text1').innerText = "";
	document.getElementById('button1').onclick = dood9;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button1').style.display = "inline-block";
	document.getElementById('button1').innerText = "emote!";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	document.getElementById('mes').style.display = "none";
	document.getElementById('text').style.display = "none";
	document.getElementById('dagger').style.display = "none";
}
function level14(){
	document.body.style.backgroundImage = "url('https://media.giphy.com/media/1msBmKa03MPCPXYudX/giphy.gif')";
	document.getElementById('button').innerText = "Gooi Raiden de lucht in";
	document.getElementById('button').onclick = level15;
	document.getElementById('title').innerText = "Je mist en Raiden hit je terug!";
	document.getElementById('description').innerText = "";
	document.getElementById('description').style.display = "none";
	document.getElementById('text1').style.display = "none";
	document.getElementById('text1').innerText = "";
	document.getElementById('button1').onclick = dood10;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button1').style.display = "inline-block";
	document.getElementById('button1').innerText = "FATALITY";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	document.getElementById('mes').style.display = "none";
	document.getElementById('text').style.display = "none";
	document.getElementById('dagger').style.display = "none";
}
function dood9(){
	document.body.style.backgroundImage = "url('image/raiden.gif')";
	setTimeout(function() {
		document.body.style.backgroundImage = "url('image/fire.gif')";

		setTimeout(function() {
			document.body.style.backgroundColor = "#8a0303";
			document.body.style.backgroundImage = "none"; 
		}, 1300);
	}, 1200);

	document.getElementById('button').innerText = "Try again";
	document.getElementById('button').onclick = level10;
	document.getElementById('title').innerText = "Wat dacht je?";
	document.getElementById('description').innerText = "Het bloeden is gestopt, Zoek wapens";
	document.getElementById('description').style.display = "none";
	document.getElementById('text1').style.display = "none";
	document.getElementById('text1').innerText = "";
	document.getElementById('button1').onclick = dood4;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button1').innerText = "Blijven liggen";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	document.getElementById('mes').style.display = "none";
	document.getElementById('text').style.display = "none";
	document.getElementById('dagger').style.display = "none";

}
function level15(){
	document.body.style.backgroundImage = "url('https://media.giphy.com/media/OR2M9cK07rhqk91e0P/giphy.gif')";
	document.getElementById('button').innerText = "FATALITY";
	document.getElementById('button').onclick = level15;
	document.getElementById('title').innerText = "COMBOOOOOOOOOOOO";
	document.getElementById('description').innerText = "";
	document.getElementById('description').style.display = "none";
	document.getElementById('text1').style.display = "none";
	document.getElementById('text1').innerText = "";
	document.getElementById('button1').onclick = dood11;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button1').style.display = "inline-block";
	document.getElementById('button1').innerText = "Blijf attacken";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	document.getElementById('mes').style.display = "none";
	document.getElementById('text').style.display = "none";
	document.getElementById('dagger').style.display = "none";
}
function dood10(){
	document.body.style.backgroundImage = "url('image/raiden.gif')";
	setTimeout(function() {
		document.body.style.backgroundImage = "url('image/fire.gif')";

		setTimeout(function() {
			document.body.style.backgroundColor = "#8a0303";
			document.body.style.backgroundImage = "none"; 
		}, 1300);
	}, 1200);

	document.getElementById('button').innerText = "Try again";
	document.getElementById('button').onclick = level10;
	document.getElementById('title').innerText = "Raiden heeft nog steeds genoeg energie over en vermoord jou zonder dat je het ziet aankomen!";
	document.getElementById('description').innerText = "Het bloeden is gestopt, Zoek wapens";
	document.getElementById('description').style.display = "none";
	document.getElementById('text1').style.display = "none";
	document.getElementById('text1').innerText = "";
	document.getElementById('button1').onclick = dood4;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button1').innerText = "Blijven liggen";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	document.getElementById('mes').style.display = "none";
	document.getElementById('text').style.display = "none";
	document.getElementById('dagger').style.display = "none";
}





