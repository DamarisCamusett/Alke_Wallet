document.addEventListener("DOMContentLoaded", function() {
    const formularioLogin = document.getElementById("formulario_login");

    formularioLogin.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener valores de los campos
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        

        // Aquí puedes agregar la lógica para validar el usuario y contraseña, por ejemplo, enviar una solicitud al servidor
        console.log("Username:", username);
        console.log("Password:", password);


    if (username === "usuario" && password === "112233") { //Username "usuario" y Password "112233"
        console.log("Bienvenido");
        window.location.href = "./pages/menu.html";
    } else {
        alert("Usuario y/o contraseña incorrecta");
    }
    });
});

    //Para mostrar/ocultar contraseña
    const checkboxVisible = document.getElementById("visible");
    const passwordField = document.getElementById("password");
    checkboxVisible.addEventListener("change", function() {
        if (checkboxVisible.checked) {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    });