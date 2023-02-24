//SELECCIONANDO EL FORMULARIO
let hrInput = document.getElementById('hrInput');
let mtInput = document.getElementById('mtInput');
let sgInput = document.getElementById('sgInput');

const btnEnviar = document.getElementById('enviar');

btnEnviar.addEventListener('click', () => {
   hr.textContent = hrInput.value;
   mt.textContent = mtInput.value;
   sg.textContent = sgInput.value;

   hora = hr.value;
   minuto = mt.value;
   segundo = sg.value;

   btnStart.disabled = false;
   btnStart.style.cursor = 'pointer';

   btnEnviar.disabled = true;
   btnEnviar.style.cursor = 'no-drop';
})