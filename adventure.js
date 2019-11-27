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
	document.getElementById('button1').style.display = "";
	document.getElementById('button2').style.display = "none"
	document.getElementById('inventory-item').style.display = "none";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";
	document.getElementById('doekje').style.display = "none";
}
function refresh1(){
	location = location;
}

function level7(){
	document.body.style.backgroundImage = "url('image/jungle.jpg')";
	document.getElementById('button').innerText = "Verder";
	document.getElementById('button').onclick = dood3;
	document.getElementById('title').innerText = "Zoek spullen!";
	document.getElementById('description').innerText = "Zoek naar spullen die je kunnen helpen om het bloeden te stoppen! ";
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
	document.getElementById('button').onclick = level9;
	document.getElementById('title').innerText = "Zoek verder!";
	var text = document.createElement("h1");
	text.innerHTML = "AAAAAAAAAAAAAAiiiiiiiiiii";
	document.getElementById('description').innerText = "Blijf zoeken naar nog meer spullen om het bloeden verder te stoppen!";
	document.getElementById('description').style.display= "none";
	document.getElementById('button1').onclick = dood3;
	document.getElementById('button1').style.display = "none"
	document.getElementById('button2').style.display = "none"
	document.getElementById('button1').innerText = "Blijven liggen";
	document.getElementById('parachute').style.display = "none";
	document.getElementById('troll').style.display = "none";

}
function level9(){

}


