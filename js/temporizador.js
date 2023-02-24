let cronometro;
let key = 0;

//SELECIONANDO EL CRONOMETRO
let hr = document.getElementById('hr');
let mt = document.getElementById('mt');
let sg = document.getElementById('sg');

//SELECCIONANDO LOS BOTONES DE (START - PAUSE - RESET) BOTONES
const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('reset');

//DESABILITANDO LOS BOTONES
btnStart.disabled = true;
btnStop.disabled = true;
btnReset.disabled = true;

btnStart.style.cursor = 'no-drop';
btnStop.style.cursor = 'no-drop';
btnReset.style.cursor = 'no-drop';

// SELECCIONANDO EL AUDIO
const audio = document.getElementById('audio');

btnStart.addEventListener('click', () =>{
   cronometro = setInterval(startInit, 1000);

   btnStart.disabled = true;
   btnStop.disabled = false;
   btnReset.disabled = false;
   
   btnStart.style.cursor = 'no-drop';
   btnStop.style.cursor = 'pointer';
   btnReset.style.cursor = 'pointer';
});

btnStop.addEventListener('click', () => {
   clearInterval(cronometro);

   btnStart.disabled = false;
   btnStop.disabled = true;
   btnReset.disabled = false;
   
   btnStart.style.cursor = 'pointer';
   btnStop.style.cursor = 'no-drop';
   btnReset.style.cursor = 'pointer';

   key++;

   localStorage.setItem(key, JSON.stringify({
      Pause: 'Vuelta',
      Hora: hr.textContent,
      Minuto: mt.textContent,
      Segundo: sg.textContent
   }));

   addTableRow();
});

btnReset.addEventListener('click', () => {
   clearInterval(cronometro);

   key++;

   localStorage.setItem(key, JSON.stringify({
      Reset: 'Finish',
      Hora: hr.textContent,
      Minuto: mt.textContent,
      Segundo: sg.textContent
   }));

   btnStart.disabled = false;
   btnStop.disabled = true;
   btnEnviar.disabled = false;

   btnStart.style.cursor = 'pointer';
   btnStop.style.cursor = 'no-drop';
   btnEnviar.style.cursor = 'pointer';

   sg.textContent = sgInput.value;
   mt.textContent = mtInput.value;
   hr.textContent = hrInput.value;

   // localStorage.clear();

   addTableRow();
});

const startInit = () => {
   if(sg.textContent <= 0) {
      sg.textContent = 60;
      mt.textContent--;

      if(mt.textContent <= -1) {
         mt.textContent = 59;
         hr.textContent--;

         if(hr.textContent <= -1) {
            hr.textContent = '0' + 0;
            mt.textContent = '0' + 0;
            sg.textContent = '0' + 0;
            
            audio.play();

            btnStart.disabled = true;
            btnStop.disabled = true;
            btnReset.disabled = true;
            btnEnviar.disabled = false;
            
            btnStart.style.cursor = 'no-drop';
            btnStop.style.cursor = 'no-drop';
            btnReset.style.cursor = 'no-drop';
            btnEnviar.style.cursor = 'pointer';

            return clearInterval(cronometro)
         } 
      }
   }

   sg.textContent--;
}