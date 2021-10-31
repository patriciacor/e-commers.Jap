//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var contcarrito=[];

function carritoC(array){
    let contenido_carrito='<br>';
    
    for(let i=0 ; i < array.length; i++)   
    {
        let carrito = array[i];
      // let subtotal = (carrito.count)*(carrito.unitCost);
  {
            contenido_carrito += 
            `<div class="container-fuid">
            <div class="card mb-3 bg-light" style="max-width: 540px;">
              <div class="row g-0">
    <div class="col-md-4">
    <img src="${carrito.src}" alt=" "class="img-fluid" >
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <p >${carrito.name}</p>
      <p class="cantP">Precio Unitario:</p>
      <p id="precio" class="card-text col-12">${carrito.unitCost} ${carrito.currency} </p>
       <p class="cantP">Cant.Productos</p><input type="number" id="cantidad" value="${carrito.count}" min="1">
  <hr> <div class="cantP"> Subtotal= <p id="sub" style="float:rigth;"></p>
     </div>
   
    </div>
    </div> 
  </div>
</div>
  
           `
        }
        document.getElementById("Carrito").innerHTML = contenido_carrito;
    }
}

document.addEventListener("DOMContentLoaded",function(e){
  getJSONData(CART_INFO_URL).then(function(resultado)
  {
    if(resultado.status === "ok"){
      contcarrito =resultado.data;
      carritoC(contcarrito.articles);
    
    }
  });
}
);;

document.addEventListener("change",function ()

{ 
  
   var cantidad = document.getElementById("cantidad");

var precioUnitario= document.getElementById("precio");
document.getElementById("sub").innerHTML= parseInt(cantidad.value)*parseInt(precioUnitario.innerText)+"UYU" ;
 });




 //function cantidadSubtotal(i,precioUnitario)
//{
 //  var cantidad = parseInt(document.getElementById(`cantidad${i}`));
  
//var precioUnitario = parseFloat(document.getElementById(`precio${i}`));
   //
 // var  subtotal= cantidad * precioUnitario;

     
  // document.getElementById(`sub${i}`).innerHTML = subtotal;
   // };



//document.addEventListener("DOMContentLoaded", function(e){
  //  getJSONData(CARRITO_URL).then(function (lista) {
  //      if (lista.status === "ok") {
    //        contcarrito = lista.data;
      //  carritoC(contcarrito);
    
    //} 
   // });
        