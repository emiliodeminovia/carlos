let emailvalido="root@btis258.edu.mx";
let passvalido="admin123";

const chequelogin =(event) => {
event.preventDefault();

const email = document.getelementbyid("email").value;
const password = document.getelementbyid("password").value;
const mensaje = document.getelementbyid("loginmensaje").value;

if (email ===emailvalido && password === password){
    mensaje.textcontent = "inicio de sesion correcto";
    mensaje.style.color = "green";

    settimeut(() => {
        window.location.href = "dashboard.html";

    }, 100);
}
        else{
            mensaje.textcontent = "email o comtraseña incorrecta";
}    
}