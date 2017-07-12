
window.onload = function() {
 event.preventDefault(); 
// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.

  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);

  var clearButton = document.getElementById ('clear-button');
  clearButton.addEventListener('click', clearAll, false);

  var toDoImput = document.getElementById("todo-list-input")
  var doneImput = document.getElementById("done-list")

  function addToDoItem() {

   event.preventDefault();    

	   var item = document.getElementById('todo-list-input');
     var text = document.createTextNode(item.value);
     var newItem = document.createElement('li');
      newItem.appendChild(text);
      newItem.setAttribute('class', 'tasks')

    document.getElementById("addToDoItem").appendChild(newItem);

     item.value="";
  } 
 



  function markAsDone() {

   event.preventDefault();

     var doneInput = document.getElementById('todo-list-input');
     var doneListItems = document.getElementsByTagName ('li');
     
   for (var i = 0, length = doneListItems.length; i < length; i++) {
       if (doneListItems[i].innerText == doneInput.value) {
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
  function clearAll(){
      var ul = document.getElementById('addToDoItem');
  if (ul) {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
  }

  }
}



// window.onload = function() {
//   //init();
//   //ESCUCHAS DE BOTONES CUANDO HACEN CLICK EJECUTAN FUNCIÓN

//   var saveButton = document.getElementById('add-button');
//   saveButton.addEventListener('click', addToDoItem, false);

//   //OTRAS ESCUCHAS DE BOTONES CUANDO HACEN CLICK EJECUTAN FUNCIÓN 
 
//   //doSomethingElse();
//   // LAS FUNCIONES DE AÑADIR BORRAR .....
//   function addToDoItem() {
//     //LO QUE SEA
//     console.log("ADD BUTTON CLICKED!");
//   }

//   function markAsDone() {
//     //LO QUE SEA
//     console.log("DONE BUTTON CLICKED!");
//   }
//  };




