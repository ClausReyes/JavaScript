
//Algoritmo con condicional

let combo = parseInt(prompt("Cual es tu presupuesto aproximado?"));
if (combo <= 3000) {alert("Podria interesarte nuestro paquete A");
    
}else if ( combo <4000){alert("Podria interesarte nuestro paquetes de servicio B ");

} else { alert("Podri interesarte nuestro paquete premium")}


// ciclos con while

let contraseña = parseInt(prompt("Ingrese contraseña"));

while (contraseña != "2612"){
alert("contraseña incorrecta");
contraseña = number(prompt("Ingrese contraseña"));
}
alert ("Bienvenida Claudia Reyes")