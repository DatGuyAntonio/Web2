//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}


const nombre=document.getElementById("name")
const correo=document.getElementById("correo")
const usuario=document.getElementById("usuario")
const contraseña=document.getElementById("contraseña")
const registro=document.getElementById("registro")
const parrafo=document.getElementById("warming")


registro.addEventListener("submit",e=>{
    e.preventDefault();
    let warming="";
    let entrar=false;
    regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo.innerHTML="";
    if(nombre.value.length<6){
        warming+=`El nombre no es valido <br>`;
        entrar=true;
    }
    if(!regexEmail.test(correo.value)){
        warming+=`El correo no es valido <br>`;
        entrar=true;
    }
    if(contraseña.value.length<8){
        warming+=`La contraseña debe tener al menos 8 digitos <br>`;
        entrar=true;
    }
    if(entrar){
        parrafo.innerHTML=warming;
        setTimeout(() => {
            parrafo.innerHTML = "";
          }, 3000);

    }else{
        document.getElementById("name").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("usuario").value = "";
        document.getElementById("contraseña").value = "";
            parrafo.innerHTML="Registro Exitoso";
            setTimeout(() => {
                parrafo.innerHTML = "";
              }, 3000);

        
    }

})

//login

const form = document.getElementById('login');
const correoInput = document.getElementById('correo_inicio');
const contrasenaInput = document.getElementById('contraseña_inicio');
const warmingInicio = document.getElementById('warming_inicio');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // previene el comportamiento predeterminado del formulario

  const correo = correoInput.value.trim();
  const contrasena = contrasenaInput.value.trim();

  if (!correo || !contrasena) { // verifica si ambos campos estan vacios
    warmingInicio.textContent = 'Por favor, complete todos los campos.';
     setTimeout(() => {
      warmingInicio.textContent = "";
    }, 3000);
  } else { // si los campos estan completos
    // aqui se puede agregar una logica para validar las credenciales del usuario
         if(correo ==="correo@correo.com" && contrasena==="BIGpopa16"){
            window.location.href = 'index.html';
         }else{
            warmingInicio.textContent = 'Correo o contraseña no validos';
            document.getElementById('contraseña_inicio').value="";
            document.getElementById('correo_inicio').value="";
             setTimeout(() => {
                 warmingInicio.textContent = "";
                }, 3000);
         }
    // redirecciona al usuario a una segunda pagina
    
  }
});
/*
window.onload = function() {
    const loginForm = document.getElementById('loginForm');
    const correoInput = document.getElementById('correo_inicio');
    const contraseñaInput = document.getElementById('contraseña_inicio');
    const warmingInicio = document.getElementById('warming_inicio');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir comportamiento predeterminado del formulario

        const correo = correoInput.value.trim();
        const contraseña = contraseñaInput.value.trim();

        if (!correo || !contraseña) {
            warmingInicio.textContent = 'Por favor, complete todos los campos.';
            setTimeout(() => {
                warmingInicio.textContent = '';
            }, 3000);
        } else {
            // Aquí puedes agregar lógica adicional si es necesario antes de enviar los datos al servidor
            loginForm.submit(); // Enviar el formulario al servidor
        }
    });
};
*/
/*
//Carrito de compras
const carritoIcono = document.getElementById('carrito-icono');
const overlay = document.getElementById('overlay');
const cerrarOverlay = document.getElementById('cerrar-overlay');

carritoIcono.addEventListener('click', () => {
  overlay.style.display = 'block';
});

cerrarOverlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});
**/