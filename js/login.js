const form= document.getElementById("form");
const username= document.getElementById("username");
const password=document.getElementById("password");

form.addEventListener('submit', function (event)
{
  event.preventDefault();
  let usuarios = Array (
    { usuario: username.value,
      contraseña: password.value

  });
  localStorage.setItem('usuarioName',JSON.stringify(usuarios));
location.href='products.html';
})