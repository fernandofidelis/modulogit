function adicionar() {
	//alert("1");
	var ing = document.getElementById("ingrediente").value;

  // pega o valor que está na "lista"
	var listaHTML = document.getElementById("lista").innerHTML;

// adiciona novo item a lista que ja existe
	listaHTML = listaHTML + "<li>"+ing+"</li>";

// monta nova lista, substituindo a lista anterior pela nova lista montada
	document.getElementById("lista").innerHTML = listaHTML;
}