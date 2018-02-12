function trocarDiv(nome, idade) {
	var area  = document.getElementById("area");
	var texto = prompt("Qual seu Sobrenome?");

	area.innerHTML = nome + " " +texto + " tem " + idade;
}