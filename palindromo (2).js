var  frasePalindromo = 'Anita lava la tina';

// instrucciones.

console.log('no coloque un punto o carácteres que no sean letras en la frase que decea evaluar');
console.log();
console.log('la frase está escrita en mayusculas, minusculas, o es una mezcla?');
console.log();


var respuesta;

function esMayusOMinus (frase) {
	if(frase.indexOf('.') != -1 || frase.indexOf(',') != -1 || frase.indexOf('?') != -1 || frase.indexOf('!') != -1){
		respuesta = 'no coloque un punto o carácteres que no sean letras en la frase que decea evaluar. puede intentarlo otra vez';
	} else if(frase == frase.toUpperCase()){
		respuesta = 'la frase está escrita completamente en mayusculas';
	} else if(frase == frase.toLowerCase()){
		respuesta = 'la frase está escrita completamente en minisculas';
	} else {
		respuesta = 'La frase está escrita en una mezcla de mayusculas y minusculas';
	} return respuesta;
}

console.log(esMayusOMinus(frasePalindromo));




// evalución de palindromo

var respuestaPalindromo;

function palindromoEspacios(x_x_x){
	var respuestaPalindromoEspacios;
	var minusX_x_x = x_x_x.toLowerCase();
	var arrXxx = minusX_x_x.split(" ");
	console.log(arrXxx);
	console.log(arrXxx.join());
	var cloneArrXxx = arrXxx.slice(0);
	var reverseArrXxx = arrXxx.reverse('');
	console.log('el valor de reverseArrXxx = ' + JSON.stringify(reverseArrXxx) + ' y el valor de cloneArrXxx es = ' + JSON.stringify(cloneArrXxx));

	if(cloneArrXxx.join('') == reverseArrXxx.join('')){
		respuestaPalindromoEspacios = 'La frase ' + x_x_x + ' es un palindromo.';
	} else {
		respuestaPalindromoEspacios = 'La frase ' + x_x_x + ' no es un palindromo.';
	} return respuestaPalindromo = respuestaPalindromoEspacios;
}

// aquí hay muchos problemas con los reverse igual al original
function palindromo(x_x_x){
	if(x_x_x.indexOf(' ') == -1){
		var minusX_x_x = x_x_x.toLowerCase();
	    var arrXxx = minusX_x_x.split("");
		var cloneArrXxx = arrXxx.slice(0);
	    var reverseArrXxx = arrXxx.reverse();
	    console.log('el valor de reverseArrXxx = ' + reverseArrXxx + ' y el valor de cloneArrXxx es = ' + cloneArrXxx);
		var valorSwitch = cloneArrXxx.join('') == reverseArrXxx.join('');
		console.log('el valor de clonejoin es = ' + cloneArrXxx.join('') + ' el valor de reversejoin es = ' + reverseArrXxx.join(''));
	    switch(valorSwitch){
	    	case true:
	    	
	    	respuestaPalindromo = 'La frase ' + x_x_x + ' es un palindromo.';
	    	
	    	break;
	    	
	    	case false:

	    	respuestaPalindromo = 'La frase ' + x_x_x + ' no es un palindromo.';
	    	
	    	break;
	    }
	} else {
		palindromoEspacios(x_x_x);
	} return respuestaPalindromo;
}

// respuesta

if(frasePalindromo.indexOf('.') != -1 || frasePalindromo.indexOf(',') != -1 || frasePalindromo.indexOf('?') != -1 || frasePalindromo.indexOf('!') != -1){
console.log('Primero tiene que eliminar todos los signos de puntuación, de exclamación, o de interrogación. Utilize solo letras y espacios.')
} else{
	console.log(palindromo(frasePalindromo));
}