function addBola(){
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");

	var p1 = Math.floor(Math.random() * 1000);
	var p2 = Math.floor(Math.random() * 400);

	bola.setAttribute("background-color",  getRandomColor());
	bola.setAttribute("style", "left:"+p1+"px; top:"+p2+"px");
	bola.setAttribute("onclick","estourar(this)");	

	document.body.appendChild(bola);
}

function estourar(objeto){
	document.body.removeChild(objeto);

}

var tempo = setInterval(function(){iniciar()}, 500);
function iniciar(){
//	setInterval(addBola, 500);
	addBola();
}

function parar(){
	clearInterval(tempo);

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}