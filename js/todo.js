
window.onload = function() {
// Variable que asigna función al botón "Add"
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);
//Variable que asigna función al botón "Done"
  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);
//Variable que asigna función al botón "Clear Done"
  var clearDoneButton = document.getElementById ('clear-done-button');
  clearDoneButton.addEventListener('click', clearDoneAll, false);
//Variable que asigna función al botón "Clear All"
  var clearButton = document.getElementById ('clear-button');
  clearButton.addEventListener('click', clearAll, false);

  function addToDoItem() { //Esta función añade tareas a la lista "To do list"

   event.preventDefault(); //Este comando e para evitar el actualizado automático de la página  

	   var item = document.getElementById('todo-list-input');
     var text = document.createTextNode(item.value);
     var newItem = document.createElement('li');
      newItem.appendChild(text);
      newItem.setAttribute('class', 'tasks'); //Añadimos clase a Task para facilitar el CSS

    document.getElementById("addToDoItem").appendChild(newItem);

     item.value=""; //Comando para que el valor del input se reinicie
  } 
  function markAsDone() {

   event.preventDefault(); // Lo mismo que en la línea 18

     var doneInput = document.getElementById('todo-list-input');
     var doneListItems = document.getElementsByTagName ('li');
     
   for (var i = 0, length = doneListItems.length; i < length; i++) { //Éste for recorre los "li" del documento
       if (doneListItems[i].innerText == doneInput.value) { //Éste If combrueba si hemos escrito en el input
       //  si coincide, lo mueve a "Done List"(creando un nuevo "li"), y le añade la clase "done"
          var doneList = document.getElementById('addToDoneItem');
          var list = document.createElement ('li');
           list.innerText = doneInput.value;
           list.classList.add("done", "doneTasks");
           doneList.append(list);
           doneListItems[i].remove();
           doneInput.value = '';
           
        }
    }
 } 
  function clearDoneAll(){

    event.preventDefault(); //Lo mismo que en la línea 18

      var doItem = document.getElementById('addToDoneItem'); 
  if (doItem) { //Éste if borra los hijos de los elementos de la lista "Done List" cuando esta lista tiene elementos.
    while (doItem.firstChild) {
      doItem.removeChild(doItem.firstChild);
    }
  }
}

  function clearAll (){

    event.preventDefault(); //Lo mismo que en la línea 18

      var doneItem = document.getElementById('addToDoneItem'); 
  if (doneItem) { //Éste if borra los hijos de los elementos de la lista "Done List" cuando esta lista tiene elementos.
    while (doneItem.firstChild) {
      doneItem.removeChild(doneItem.firstChild);
    }
  }
      event.preventDefault(); //Lo mismo que en la línea 18

      var doItem = document.getElementById('addToDoItem'); 
  if (doItem) { //Éste if borra los hijos de los elementos de la lista "Do List" cuando esta lista tiene elementos.
    while (doItem.firstChild) {
      doItem.removeChild(doItem.firstChild);
    }
  }
  }

}