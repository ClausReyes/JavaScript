 
//  // declarar objetos 
//  const servicios = [

//     { id: 1, nombre: "A", categoria: "clasico", modelo: "Mustang Boss 429 ", color: "negro", precio: 3000 },
//     {id: 2, nombre: "B", categoria: "nuevo", modelo: "BMW 330e", color: "blanco", precio: 2000 },
//     {id: 3, nombre: "C", categoria: "clasico", modelo: "Mustang Boss 429 ", color: "blanco", precio: 6000 },
//     {id: 4, nombre: "D", categoria: "descapotable", modelo: "Mazda MX-5", color: "negro",  precio: 3040 },
//     {id: 5, nombre: "E", categoria: "nuevo", modelo: "BMW 330e", color: "negro", precio: 4500 },
//     {id: 6, nombre: "F", categoria: "descapotable",  modelo: "Mazda MX-5", color: "blanco", precio: 5000 },
// ];

// // capturar entradas mediante un prompt
// let  presupuesto =Number( prompt("ingrese el presupuesto minimo (>=2000"));
// let categoria = prompt("ingrese catergoria (clasico, nuevo, descapotable");
// let color = prompt("Escoja el color (blanco o negro");


// // filtrar por precio, categoria y color

// let filtro = servicios.filter((item) =>
// item.precio > presupuesto &&
// item.categoria === categoria &&
// item.color === color
// );


// // mostramos un alerta con los paquetes filtrados

// let mensaje = "";
// filtro.forEach((item) => {
//     mensaje += `
// Paquete: ${item.nombre}
// modelo: ${item.modelo}
// precio: ${item.precio}
// `;
// }   );

// alert(mensaje);  

// // funcion de resta  el codigo de descuento es 2612

// let nombre = prompt("Ingrese el paquete que le interesa si no escriba salir");
// let promocion = prompt("Ingrese el codigo de descuento");
 
// if (promocion === "2612") {
//    let encontrado = servicios.find((item) => item.nombre === nombre);
    
//    if (encontrado) {
//         alert(`
//          Id: ${encontrado.id}
//           Nombre: ${encontrado.nombre}
//           Modelo: ${encontrado.modelo}
//           Categoria: ${encontrado.categoria}
//           Color: ${encontrado.color}
//           Precio: ${encontrado.precio - encontrado.precio * 0.25}
//         `);
//       } else {

//        alert("la promocion no esta disponible   ");
//       }};

// ................................  Para esta entrega hice  dos pero me gusto mas el de abajo es un Carrito de compras con array bucles, map, push y reduce ...................


const productos = [
    {nombre: "azucar", precio:  35},
    {nombre: "cafe", precio:  55},
    {nombre: "leche", precio:  30},
    {nombre: "galletas", precio:  40},
    {nombre: "cerveza", precio:  25},
    {nombre: "pasta", precio:  5},
    {nombre: "miel", precio:  30},
    {nombre: "sal", precio:  25},
  ];

  let carrito = []

  let seleccionar = prompt("Hola, desea comprar algun producto si o no");

  while( seleccionar != "si" && seleccionar != "no"){
    alert("por favor escriba si o no")
seleccionar = prompt("Hola desea comprar algo algo si o no")
  }

  if (seleccionar === "si"){
    alert(`Por favor mire la lista de productos`)
   let = losProductos = productos.map((item) => item.nombre + " " + "$" + item.precio );
   alert(losProductos.join(" -- "))
 }else if (seleccionar === "no"){
    alert("ok, hasta luego!")
 }

 while(seleccionar != "no"){
    let productos = prompt("Agrega un producto a tu carrito")
    let precio= 0

    if(productos === "azucar" || productos === "cafe" || productos === "leche" || productos === "galletos" || productos === "cerveza" || productos === "pasta" || productos === "miel" || productos === "sal" ){
        switch (productos){
            case "azucar":
            precio = 35;
            break;
            case "cafe":
            precio = 55;
            break; 
            case "leche":
            precio = 30;
            break; 
            case "galletas":
            precio = 40;
            break;
            case "cerveza":
            precio = 25;
            break;
            case "pasta":
            precio = 5;
            break;
            case "miel":
            precio = 30;
            break;
            case "sal":
            precio = 25;
            break;
            default:
            break;
        }
        let unidades = parseInt(prompt("cuantas unidades?"))
        let subtotal = carrito.push({productos, unidades, precio})
        console.log(carrito)
    }else{
      alert("Producto no encontrado")
    } seleccionar = prompt("Desea compar algo más?")    

while(seleccionar === "no"){
  alert("Gracias por su compra!")
carrito.forEach((carritoFinal) => {
console.log(
  `Producto: ${carritoFinal.productos}, Unidades: ${carritoFinal.unidades}, 
  Subtotal por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
})
break;
}
};
subtotal = "";

carrito.forEach((carritoFinal) => {
  subtotal += ` Subtotal:  
  Producto: ${carritoFinal.productos}, Unidades: ${carritoFinal.unidades}, 
  Subtotal por producto: ${carritoFinal.unidades * carritoFinal.precio}`
})
alert(subtotal)
costoTotal = carrito.reduce((acc, t) => acc + t.precio * t.unidades, 0);
alert(`El costo total de tu compra es: ${costoTotal}`);
