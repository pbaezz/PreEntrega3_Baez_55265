let botonA = document.getElementById("botonAceptar");
botonA.addEventListener("click", edadMay);
function edadMay(event){
    event.preventDefault();
    let edad = document.getElementById("edad").value;
    let age = parseInt(edad);
    if (edad >= 18){
        Swal.fire('BIENVENIDO SELECCIONA LA CERVEZA DE TU GUSTO')
        //alert("BIENVENIDO SELECCIONA LA CERVEZA DE TU GUSTO")
       // console.log("su edad es: ", age," BIENVENIDO SELECCIONA LA CERVEZA DE TU GUSTO");
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Sos menor de edad NO! podes comprar',
        })
        return
    }
}  

const cardInfo=document.querySelector(".card-product")

const rowCarrito=document.querySelector(".row-carrito")

const productsList=document.querySelector(".cerves")

let clientList=[]

productsList.addEventListener("click", e => {
    if(e.target.classList.contains("btn-add-card")){
        const prod = e.target.parentElement
        const infoProducto= {
            cant: 1,
            sabor: prod.querySelector("p").textContent,
            present: prod.querySelector("h3").textContent,
            precio: prod.querySelector("h4").textContent,
        }
            clientList=[...clientList, infoProducto]
        }
        console.table(clientList)
        
        clientList.forEach((carrito)=>{
            cant=parseInt(carrito.cant)
            precio=parseInt(carrito.precio.slice(1))
        });
        totalCompra=totalCompra+precio;
        cantidadTotal=cantidadTotal+cant
        console.log(totalCompra);
        console.log(cantidadTotal)
    })

    let totalCompra=0
    let precio=0
    let cantidadTotal=0

    let carritob=document.getElementById("botoncarritox")
    carritob.addEventListener("click", beerCarrito)

    function beerCarrito(){
        const carritoJSON=JSON.stringify(clientList)
        sessionStorage.setItem("carritodata",carritoJSON)
        carritoguard ()
    }

    function carritoguard (){
        const elementCarrito=document.getElementById("carritox")
        elementCarrito.innerHTML="";

        clientList.forEach((item)=>{
            const listItem=document.createElement("li")
            listItem.textContent=`Cantidad:${item.cant} - Sabor:${item.sabor} - Presentacion:${item.present} - Precio:${item.precio} Compra Total:${totalCompra}`
            elementCarrito.appendChild(listItem)
        })
    }
        











