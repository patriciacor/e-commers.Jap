var product_listing = []; // lista vacia
var minimoCosto;
var maximoCosto;

function infoAuto(id){
    localStorage.setItem('auto',id);
    window.location='product-info.html'
}


function products(array)// funcion con parametro array ya que leera una cadena de caracteres
{
    let list_content = "<br>" ; //creo una variable local en forma de bloque que contendra la informacion de mi listado

    for (let i = 0; i < array.length; i++) { //el for recorre mi lista de array y cada vez que el for recorre la longitud de array con el indice ,le suma 1,
        let product = array[i];
       if(((minimoCosto == undefined)||(minimoCosto != " " && parseInt(product.cost)>= minimoCosto)) && ((maximoCosto == undefined)||(maximoCosto != " " && parseInt(product.cost)<= maximoCosto)))  
       {            list_content += 
        ` 
        <div class="card col-mb-8 col-lg-3 col-12 m-5 bg-light  border border-secundary rounded-lg">
            <img src=${product.imgSrc} class="card-img-top mx-auto" width="300px" height="200px"alt="" >
            
            <div class="card-body" >
              <h5 class="card-title text-dark">${product.name}</h5>
              <p class="card-text text-dark">${product.description}.</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-muted bg-light">${product.cost}${product.currency}</li>
              </ul>
            <div class="card-body text-dark">
            <button onclick="infoAuto(`+ product.id +`)">Ver más</button>  
            </div>
          </div>
         `
        }
    document.getElementById("listing").innerHTML = list_content;
        // con getElementById llamo al id que coloque dentro de un div en mi pagina html y le digo que su valor , es igual a la lista de contenido 
    //para que se visualice en ella
}
}
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (list) {
        if (list.status === "ok") {
            product_listing = list.data;
            products(product_listing);
        } 
    });
        
}); 



document.getElementById("filtro").addEventListener("click", function()
{
    minimoCosto=document.getElementById("costo-min").value;
maximoCosto=document.getElementById("costo-max").value;
if((minimoCosto != undefined)&&(minimoCosto != " ") && (parseInt(minimoCosto))>=0){
    minimoCosto= parseInt(minimoCosto)}
    else{
        minimoCosto= undefined;
    }
    if((maximoCosto != undefined)&&(maximoCosto != " " ) && (parseInt(maximoCosto))>=0){
        maximoCosto= parseInt(maximoCosto)}
else{
    maximoCosto=undefined;
    } products(product_listing);
}
);

document.getElementById("clean").addEventListener("click", function(){
    document.getElementById("costo-min").value = " ";
    document.getElementById("costo-max").value = " ";
    minimoCosto=undefined;
    maximoCosto=undefined;
    products(product_listing);
});


const user= document.getElementById("user");
const cerrar= document.getElementById("cerrar");
let username= JSON.parse(localStorage.getItem('usuarioName'));
if (username != null)
{
    user.innerHTML= '<a href="index.html" id="cerrar" class="" style="color:white;">'+ username[0].usuario+'</a>';

}
else{
    user.innerHTML= '<a href="index.html" id="cerrar" class="col-2 float-right">Ingresar </a>';
}
cerrar.addEventListener('click',function(){
    localStorage.clear('usuarioName');
    location.href='index.html'


});


document.getElementById("asc").addEventListener("click",function(){
    product_listing = product_listing.sort((a,b) => (a.cost)-(b.cost))
    products(product_listing)});




document.getElementById("desc").addEventListener("click",function(){
    product_listing= product_listing.sort((a,b)=> (b.cost)-(a.cost))
products(product_listing)});

document.getElementById("rel").addEventListener("click",function(){
    product_listing= product_listing.sort((a,b)=> (b.soldCount)-(a.soldCount))
    products(product_listing)});
