//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var lista_autos=[];



function autos(array) {
    let lista_descripcion = "<br> <br> ";
    
     for (let i = 0; i < array.length; i++)  {  
          let  auto= array[i]; 
        
          {
                lista_descripcion+= 
        ` 
          <h3>` + '<b>'+ auto.name +'<b>'+ `</h3>  '<br>' 
         <h3>` + auto.description +  `</h3>
         <h3>` + auto.cost + " " + auto.currency +  `</h3> 
          <h3>`  +" "+ "Vendidos:" + auto.soldCount+ `</h3>
          <div  >`+  '<img src="img/' + auto.id +'/1.jpg" class="img-fluid" width="1500" heigth="900">' +
          '<img src="img/' + auto.id + '/2.jpg" class="img-fluid" width="1500" heigth="900">' +
          '<img src="img/' + auto.id + '/3.jpg" class="img-fluid" width="1500" heigth="900">'+
          '<img src="img/' + auto.id + '/4.jpg" class="img-fluid" width="1500" heigth="900">' + `</div>
               
        `
    }
   
 document.getElementById("listing").innerHTML = lista_descripcion;
 
}

};


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
` 
        <p>` + 'Calificación:'+ comentario.score + `</p>
        <p>` + 'Comentario:' + comentario.description + `</p>
        <p>`+  comentario.user + `</p> 
        <p>`+comentario.dateTime + `</p>
     '<hr >'
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


});
