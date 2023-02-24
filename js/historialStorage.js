//VIEW LOCALSTORAGE
let table = document.getElementById('table');

const addTableRow = () => {
   let tbody = document.getElementById('tbody');

   if(tbody) tbody.remove();

   tbody = document.createElement('tbody');
   tbody.id = "tbody";

   for (let i = 0; i < localStorage.length; i++) {
      let id = localStorage.key(i);
      let element = JSON.parse(localStorage.getItem(id));
      
      let tr = document.createElement("TR");
      let key = document.createElement("TD");
      let locHora = document.createElement("TD");
      let locMinuto = document.createElement("TD");
      let locSegundo = document.createElement("TD");
      let td = document.createElement("TD");
      let remover = document.createElement("BUTTON");
      let accionP = document.createElement("P");
      let accionF = document.createElement("P");

      key.textContent = id;
      locHora.textContent = element.Hora;
      locMinuto.textContent = element.Minuto;
      locSegundo.textContent = element.Segundo;
      accionP.textContent = element.Pause;
      accionF.textContent = element.Reset;

      tbody.appendChild(tr);

      tr.appendChild(key);
      tr.appendChild(locHora);
      tr.appendChild(locMinuto);
      tr.appendChild(locSegundo);
      tr.appendChild(td);
      td.appendChild(accionP);
      td.appendChild(accionF);
      td.appendChild(remover);

      remover.className = "btn btn-delete";
      remover.textContent = "X";

      remover.addEventListener('click', () => {
         removeItem(id);
      })
   }
   table.appendChild(tbody);
}

addTableRow();