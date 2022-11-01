//Validacion

/*const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
    nombre: /^\s+$/,
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-    z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    asunto: /^\s+$/
}

const campos = {
    nombre: false,
    email: false,
    asunto: false
}

const validarFormulario = (e) => {
    switch (e.target.name){
        case 'Nombre':
            validarCampo(expresiones.nombre, e.target, 'nombre');
        case 'email':
            validarCampo(expresiones.email, e.target, 'email');
        case 'asunto':
            validarCampo(expresiones.asunto, e.target, 'asunto');
        break;
    }
}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`${campo}`).classList.remove('formulario_incorrecto');
        document.getElementById(`${campo}`).classList.add('formulario_correcto');
        document.querySelector(`#${campo}-incorrecto`).classList.add('invisible');
        campos[campo]= true;
    }else{
        document.getElementById(`${campo}`).classList.add('formulario_incorrecto');
        document.getElementById(`${campo}`).classList.remove('formulario_correcto');
        document.querySelector(`#${campo}-incorrecto`).classList.remove('invisible');
        campos[campo]=false;
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(campos.asunto && campos.nombre && campos.email){
        formulario.reset();
    } else {
        
    }
});*/

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submiting');

    const validaciones = {
        nombre: false,
        asunto: false,
        email: false
    }

    nombre = document.getElementById('nombre');
    email = document.getElementById('email');
    asunto = document.getElementById('asunto');

    expRegText = /^\s+$/;
    expRegEmail = !(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email.value));
    
    if(nombre.value == null || nombre.value.length == 0 || expRegText.test(nombre.value)){
        /* alertify.error('El campo nombre es inválido');
        document.getElementById('nombre').style.boxshadow ='0 0 5px red'; */
        validaciones.nombre = false;
    }else{
        validaciones.nombre = true;
    }
    if(asunto.value == null || asunto.value.length == 0 || expRegText.test(asunto.value)){
        /* alertify.error('El campo asunto es inválido');
        document.getElementById('asunto').style.boxshadow ='0 0 5px red'; */
        validaciones.asunto = false;
    }else{
        validaciones.asunto = true;
    }
    if(email == null || expRegEmail){
        /* alertify.error('El campo email es inválido');
        document.getElementById('email').style.boxshadow ='0 0 5px red'; */
        validaciones.email = false;
    }else{
        validaciones.email = true;
    }

    if(!validaciones.nombre && !validaciones.asunto && !validaciones.email){
        alertify.error('Campos nombre, asunto e email incorrectos');
    }else if(validaciones.nombre && !validaciones.asunto && !validaciones.email){
        alertify.error('Campos asunto e email incorrectos');
    }else if(validaciones.nombre && validaciones.asunto && !validaciones.email){
        alertify.error('Campo email incorrecto');
    }else if(!validaciones.nombre && validaciones.asunto && !validaciones.email){
        alertify.error('Campos nombre e email incorrectos');
    }else if(!validaciones.nombre && validaciones.asunto && validaciones.email){
        alertify.error('Campo nombre incorrecto');
    }else if(!validaciones.nombre && !validaciones.asunto && validaciones.email){
        alertify.error('Campos nombre y asunto incorrectos');
    }else if(validaciones.nombre && !validaciones.asunto && validaciones.email){
        alertify.error('Campo asunto incorrecto');
    }else{
        alertify.success('El registro de datos fue exitoso');
        document.getElementById('nombre').value='';
        document.getElementById('email').value='';
        document.getElementById('asunto').value='';
    }

    console.log(validaciones);
});