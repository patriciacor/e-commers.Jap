const form= document.getElementById("form-control");
const correo= document.getElementById("InputEmail");
const apellido=document.getElementById("InputApellido");
const nombre1= document.getElementById("InputName");
const edad=document.getElementById("Age");
const telefono= document.getElementById("InputContacto");
const password= document.getElementById("InputPassword");



document.addEventListener('submit', function (event)
{ 
  event.preventDefault()
  event.stopPropagation()
  ;
  let datos= Array (
    { nombre:InputName.value,
      apellido: InputApellido.value,
      email: InputEmail.value,
      edad:Age.value,
      telefono: InputContacto.value,
      contraseña:InputPassword.value
  });

  localStorage.setItem('usuarioData',JSON.stringify(datos));

})




  let datos1=  JSON.parse(localStorage.getItem('usuarioData'));
if(datos1 != null) {
  document.getElementById("InputName").value =datos1[0].nombre
 
  
  document.getElementById("InputApellido").value= datos1[0].apellido
    document.getElementById("Age").value= datos1[0].edad
  
  document.getElementById("InputEmail").value= datos1[0].email
 
  document.getElementById("InputPassword").value= datos1[0].contraseña
  
  document.getElementById("InputContacto").value= datos1[0].telefono
 
} else{
 
}
 

