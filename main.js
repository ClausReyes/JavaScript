
//Algoritmo con condicional

let combo = parseInt(prompt("Cual es tu presupuesto aproximado?"));
if (combo <= 3000) {alert("Podria interesarte nuestro paquete A");
    
}else if ( combo <4000){alert("Podria interesarte nuestro paquetes de servicio B ");

} else { alert("Podria interesarte nuestro paquete premium")}


// ciclos con while

let contraseña = parseInt(prompt("Ingrese contraseña"));

while (contraseña != "2612"){
alert("contraseña incorrecta");
contraseña = number(prompt("Ingrese contraseña"));
}
alert ("Bienvenida Claudia Reyes")

// funcion

function vFinal() {
    let valor = Number(prompt("Ingrese el precio de su producto"));
    let mensualidades = Number(prompt("Ingrese el numero mensualidades a pagar (3 o 6)"))
    valorFinal = valor;

    while (valor != 0 && mensualidades != 0){
        switch (mensualidades){
        case 3:
        porcentaje = (valor * 5) / 100;
        valorFinal += porcentaje;
        alert(`El valor total de tu producto en ${mensualidades} mensualidades es ${valorFinal}`)
        break;

        case 6:
        porcentaje = (valor * 10) / 100;
        valorFinal += porcentaje;
        alert(`El valor total de tu producto en ${mensualidades} mensualidades es ${valorFinal}`)
        break; 
        }
        valor = Number(prompt("Ingrese el precio de su producto"));
        mensualidades = Number(prompt("Ingrese el numero mensualidades a pagar (3 o 6)"))

    }

}
vFinal();