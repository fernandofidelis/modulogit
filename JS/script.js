function validar(){
	var valor = document.getElementById("numero").value;

	if (valor.length > 2) {
		alert("Numero de ser de no máximo 2 digitos!")
		return false;
	} else {
		return true;
	}
}