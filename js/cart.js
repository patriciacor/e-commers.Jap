//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var contcarrito=[]; 

function carritoC(array){
    let contenido_carrito='<br>';
    for(let i=0 ; i < array.length; i++){
        let carrito = array[i];
        {
            contenido_carrito += 
            `<div class="carro">
              <img class="float:right" src="` + carrito.src + `" alt="" width="200px" height="200px">
             <td>`+ "Producto:"+ " " + carrito.name + `</td>
            <td>` +"Cantidad Seleccionada:"+" "+ carrito.count + `</td>
       <td>`+ "Precio Por Unidad:" +" "+ carrito.unitCost + carrito.currency + `</td>
       '<hr>'
      </div>

     `
        }
        document.getElementById("Carrito").innerHTML = contenido_carrito;
    }
}
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CARRITO_URL).then(function (lista) {
        if (lista.status === "ok") {
            contcarrito = lista.data;
        carritoC(contcarrito);
        } 
    });
        
}); 
