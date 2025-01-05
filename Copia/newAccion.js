// Obtiene el botón con el ID "cta-form" que se encuentra en el archivo HTML, para agregarle una funcionalidad al dar clic
let form = document.getElementById('cta-form');

form.addEventListener('click', function() {
  // Obtiene el elemento del formulario por su ID "form"
  let formElement = document.getElementById('form');
  // Desplaza la vista suavemente hacia el formulario (Al hacer clic en el botón con el ID cta-form, la página desplazará la vista hacia el elemento con el ID form (el formulario de contacto))
  formElement.scrollIntoView({ behavior: 'smooth' });
});

// Función que se ejecuta al presionar el botón "Enviar" en el formulario
function presionarBoton() {
  // Captura los valores de los campos del formulario
  let nombre = document.getElementById('name').value; // Obtiene el valor del campo "Nombre"
  let email = document.getElementById('email').value; // Obtiene el valor del campo "Correo electrónico"
  let mensaje = document.getElementById('message').value; // Obtiene el valor del campo "Mensaje"

  // Verifica si algún campo está vacío
  if (nombre === '' || email === '' || mensaje === '') {
    alert('Por favor, complete todos los campos'); // Muestra una alerta si hay campos vacíos
    return; // Detiene la ejecución de la función
  }

  // Muestra un mensaje de agradecimiento en una alerta, al haber completado el formulario y enviarlo.
  alert('Gracias por enviar tu mensaje, revisa la consola por favor');
  
  // Envía un objeto con los valores capturados a la consola
  console.log({ nombre, email, mensaje });

  // Limpia los valores de los campos del formulario después de enviarlos
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}