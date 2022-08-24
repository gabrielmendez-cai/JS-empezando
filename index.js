
/*
let club = prompt("ingrese club del cual es hincha");
if ((club !=="") && (club === "independiente" || club === "INDEPENDIENTE")){

alert("sos un crack")}
else{ alert( "huira muerto")};
*/
/*
let usuario = parseFloat( prompt("ingrese usuario"));
let contraseña = prompt("contraseña");
if (usuario.toLowerCase === "gaby" &&  contraseña  === "090588" ) {alert ("ingresaste");} else {alert ("usuario y/o contraseña incorrecta");}
*/





let adivinanza = prompt("no muerde, ni ladra, pero la casa guarda. que es?");
while (adivinanza != "la llave"){
    alert ("es incorrecto, volve a intentarlo");
    adivinanza = prompt("no muerde, ni ladra, pero la casa guarda. que es?")
}
alert("muy bien adivinaste")

// marcaremos solo los dias lunes del mes de agosto 2022//
for (let i = 1; i < 31; i+7) {
    //let ingresar =parseInt( prompt("ingrsar el primer lunes del mes"));
    //let mensaje = `lunes #${lunes} ingresar: $ ingresar: ${ingresar}`;
    //alert (mensaje)
    //console.log ("i") }