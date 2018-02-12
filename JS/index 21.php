<html>
	<head>
		<meta charset="UTF-8" />
		<title>Titulo da Página - Fernando Fidelis</title>
		<link href="style.css" rel="stylesheet"/>

		<script type="text/javascript" src="script.js"></script>
	</head>
	<body>
		<form method="POST" onsubmit="return false">
			<input type="text" name="nome" onfocus="focou()" onblur="desfocou()" /><br/><br/>

			<select name "cidade" onchange="mudouOpcao(this)">
				<option>Curitiba</option>
				<option>Rio de Janeiro</option>
				<option>São Paulo</option>
				<option>Fortaleza</option>
			</select> <br/><br/>

			<input type="submit" value="Enviar">
		</form>		
	</body>
</html>