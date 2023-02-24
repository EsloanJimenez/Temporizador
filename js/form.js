//SELECCIONANDO EL FORMULARIO
let hrInput = document.getElementById('hrInput');
let mtInput = document.getElementById('mtInput');
let sgInput = document.getElementById('sgInput');

const btnEnviar = document.getElementById('enviar');

btnEnviar.addEventListener('click', () => {
   if(sgInput.value <= -1 || mtInput.value <= -1 || hrInput.value <= -1) return alert('Por favor incluye valores numeros positivos');
   if(isNaN(sgInput.value)) return alert('Por favor introduzca valores numericos positivos. No se permiten valores negativos ni alfabeticos');

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

