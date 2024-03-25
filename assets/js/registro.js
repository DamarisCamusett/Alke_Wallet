
const formulario_registro = document.querySelector('#formulario_registro')
formulario_registro.addEventListener('submit',(e)=>{
    e.preventDefault()
        const nombre = document.querySelector('#nombre').value;
        const apellido = document.querySelector('#apellido').value;
        const correo = document.querySelector('#correo').value;
        const contrasena = document.querySelector('#contrasena').value;
        const fechaNacimiento = document.querySelector('#fnacimiento').value;

        const users = JSON.pase(localStorage.getItem('users')) || []
        const isuserregistered = users.find(user => user.correo === correo)
        if(isuserregistered){
            return alert('¡El usuario ya se encuentra registrado!')
        }

        users.push({nombre: nombre, apellido: apellido, correo: correo, contrasena: contrasena})
        formulario_registro.setItem('users', JSON.stringify(users))
        alert("Registro exitoso")
        window.location.href = "login.html"; 
})

