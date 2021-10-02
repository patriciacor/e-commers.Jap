//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var lista_autos=[];
var related= [];
function infoAuto(id){
    localStorage.setItem('auto',id);
    window.location='product-info.html'
}
    

    function autos(array) {
    let lista_descripcion = "<br> <br> ";
    
     for (let i = 0; i < array.length; i++) {
     let  auto= array[i]; 
        
          {
                lista_descripcion+= 
        ` <div>
        
        <h1>` + '<b>'+ auto.name +'<b>'+ `</h1>  '<br>' 
        <h3>` + auto.description +  `</h3>
    <h3 style="float: right;">` + auto.cost + " " + auto.currency +  `</h3> '<br>'
 '<br>'<h3 >`  +" "+ "Vendidos:" + auto.soldCount+ `</h3> '<br>'
</div>
</div>
        <div id="carouselControls" class="carousel slide" data-ride="carousel" style="float:left;">
        <div class="carousel-inner">
        <div class="carousel-item active">
    <img class="d-block " src="img/`+ auto.id + `/1.jpg" width="1500" heigth="1000" alt="">
  </div>
  <div class="carousel-item">
   <img class="d-block " src="img/`+ auto.id + `/2.jpg"  width="1500" heigth="1000"alt="">
  </div>
  <div class="carousel-item">
    <img class="d-block " src="img/` +auto.id + `/3.jpg" width="1500" heigth="1000" alt="">
  </div>
  <div class="carousel-item">
    <img class="d-block " src="img/`+auto.id + `/4.jpg" width="1500"  heigth="1000"alt="">
    </div>
</div>
<a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Anterior</span>
</a>
<a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Siguiente</span>
</a>
</div>

        `
    }
      document.getElementById("listing").innerHTML = lista_descripcion;
     }
}

document.addEventListener("DOMContentLoaded", function(e){
getJSONData(PRODUCT_INF_URL).then(function(result){
    if (result.status === "ok");
    { lista_autos = result.data;
        let auto = lista_autos.filter(e => e.id === parseInt(localStorage.getItem('auto')));
          autos(auto);
       
}

})
});

 var comentarios = [];
  function mostrar(array){
let lista_comentarios = "<div>";
    for (let i = 0; i < array.length; i++)  {  
        let comentario = array[i];{
            lista_comentarios +=
` <div  class="com" style=" text-align:center;">
        <p>` + 'Calificación:'+ comentario.score + `</p>
        <p>` + 'Comentario:' + comentario.description + `</p>
        <p>`+  comentario.user + `</p> 
        <p>`+comentario.dateTime + `</p>
     </div>
    `  }
    document.getElementById("comentario").innerHTML= lista_comentarios;
  }
}
  document.addEventListener("DOMContentLoaded", function(evento){
      getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultado){
          (resultado.status === "ok");
          lista_comentarios = resultado.data;
          mostrar(lista_comentarios);
      })
  })
  var comentario= {
    calificacion: "",
    rankingID:"",
    contenido: ""
}

var arrayComentarios = [
    { comentario: "" ,
      }
    
]

function guardarComent(comentario) {
    let array2 = [];
    if (localStorage.getItem('comments') == null) {
        array2.push(comentario);
        localStorage.setItem('comments', JSON.stringify(array2));
    } else {
        array2 = JSON.parse(localStorage.getItem('comments'));
        array2.push(comentario);
        localStorage.setItem('comments', JSON.stringify(array2));
    };
}
function mostrarComent(array) {
    let contenido = "";
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        if (element.ranckingID == localStorage.getItem("Calificacion"))
        {
            contenido += 'Calificación: ' + element.ranckingID + '<br>';
            contenido += 'Comentario: ' + element.contenido + '<br>';
            contenido += '<br><hr><br>'
        }
    };
    document.getElementById("comentarios").innerHTML = contenido;
}
document.getElementById('enviar').addEventListener('click', function () {
    
    let texto = document.getElementById("text").value;
    let calificacion = document.getElementById("radio").value;
    let ranckingID = localStorage.getItem("Calificacion");

    comentario.contenido = texto;
    comentario.calificacion = calificacion;
comentario.ranckingID = ranckingID;
    

    guardarComent(comentario);
    if (localStorage.getItem('comments') != null) {
        arrayComentarios = JSON.parse(localStorage.getItem('comments'));
        mostrarComent(arrayComentarios);
    };


})

function infoAuto(id){
    localStorage.setItem('auto',id);
    window.location='product-info.html'
}


    for (let relatedProducts in lista_autos){
        lista_autos[relatedProducts];

    }
    function Related(array)
{
    let lista_autos= "<br>" ; 

    for (let i = 0; i < array.length; i++) {
        let relacionado= array[i];

       {            lista_autos += 

     ` <div class="text-aling:center">
     <img src="`+ relacionado.imgSrc + `" alt="`+ relacionado.description + `" class="img-thumbnail" width="200px" heigth="200px">
      <h3>` + relacionado.name  + `</h3>   
        <p>` + relacionado.currency + " " + relacionado.cost +  `</p> 
      `+ '<button onclick="infoAuto('+ relacionado.id +')">Ver Más</button>'+`
      
               '<hr color = white>'    
      </div>
        `
    }
    document.getElementById("ProductosRelacionados").innerHTML = lista_autos;
    
}
}
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (list) {
        if (list.status === "ok") {
            lista_autos = list.data;
            for (let relacionado in lista_autos)
            Related(lista_autos);
        } 
    });
        
}); 

