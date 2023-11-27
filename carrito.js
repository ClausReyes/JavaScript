    
const pintarCarrito = () =>{ 
    modalContainer.innerHTML = "";
    modalContainer.style.display="flex";    
    const modalHeader = document.createElement("div");   
    modalHeader.className =  "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
    
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
    
    modalbutton.addEventListener("click",() => {
    modalContainer.style.display = "none";
    });
    modalHeader.append(modalbutton); 
    
    carrito.forEach((product) =>{
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3
    <p>${product.precio}$</p>
    <span class="restar">-</span>
    <p>Cantidad ${product.cantidad}</p>
    <span class="sumar">+</span>
    <p>Total $ ${product.cantidad * product.precio}</p>
    <span class="delete-product">❌</span>
    `;
    modalContainer.append(carritoContent); 

    let restar = carritoContent.querySelector(".restar");
   
    restar.addEventListener("click", () =>{
        if (product.cantidad !== 1){
          product.cantidad--;}
        pintarCarrito();
    });
    let sumar = carritoContent.querySelector(".sumar");
   
    sumar.addEventListener("click", () =>{
       
        product.cantidad++;
        
        pintarCarrito();
    });
    

    let eliminar = carritoContent.querySelector(".delete-product");
    eliminar.addEventListener("click", () => {
eliminarProducto(product.id);
    })
    // let borrar = document.createElement("span");
    // borrar.innerText= "❌";
    // borrar.className= "delete-product";
    // carritoContent.append(borrar);
    // borrar.addEventListener("click", eliminarProducto);
  });
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerText = `Total a pagar $ ${total} `;
    modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto =(id) => {
    const foundId = carrito.find((item) => item.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    
});
carritoCounter();
saveLocal();
pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText  = carrito.length;
    const carritoLength =  carrito.length;
 localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText  =  JSON.parse(localStorage.getItem("carritoLength"));
};
carritoCounter();
