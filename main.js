
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

// funcion

function cFinal(){
    let precio = parseInt(prompt("Ingresa el precio del servicio que este interesado"));
    let mensualidades = parseInt(prompt("Ingrese el numero de mensualidad que pagara el servicio (1 o 3)"));
    valortotal = precio;

    while(precio !== 0 && mensualidades !== 0){
        switch(mensualidades){
            case 1:
            porcentaje = (precio * 8) /100;
            valortotal = precio + porcentaje
            alert(`El valor  final de tu producto en ${mensualidades} mensualidad es de ${valortotal}`);
            break;

            case 2:
                porcentaje = (precio * 30) /100;
                valortotal = precio + porcentaje
                alert(`El valor  final de tu producto en ${mensualidades} mensualidad es de ${valortotal}`);
                break;  
        }
        precio = parseInt(prompt("Ingresa el precio del servicio que este interesado"));
        mensualidades = parseInt(prompt("Ingrese el numero de mensualidad que pagara el servicio (1 o 3)"));
    
    }
}
cFinal();