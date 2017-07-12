
window.onload = function() {
 event.preventDefault(); 

  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);

  var clearDoneButton = document.getElementById ('clear-done-button');
  clearDoneButton.addEventListener('click', clearDoneAll, false);

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
  function clearDoneAll(){

    event.preventDefault();

      var doItem = document.getElementById('addToDoneItem');
  if (doItem) {
    while (doItem.firstChild) {
      doItem.removeChild(doItem.firstChild);
    }
  }
}

  function clearAll (){

 
  }

}