const now = moment().format('MMMM Do YYYY');
const dateHere = document.getElementById('currentDay');
dateHere.textContent = now;
const timeBlocks = document.getElementsByClassName('time-block');
const skullSave = $("saveBtn");

const todos = {};

/* Function color codes time blocks for past, present, and future */ 
function pastPresentFuture() {
  const presentHour = moment().hours();
  
  $(".time-block").each(function(index) {
    const currentHour = index;
    // present time block should be black
    if (currentHour === presentHour) {
      timeBlocks[index].setAttribute("style", "background-color: #030100;");
    // past time blocks should be greyed out
    } else if (currentHour < presentHour) {
      timeBlocks[index].setAttribute("style", "background-color:#929292;");
    // future time blocks should be brown 
    } else {
      timeBlocks[index].setAttribute("style", "background-color:#52322c");
    }
  });
} 

/* Function allows user to save their todos after closing/refreshing the page */
function ghostTodos(event) {
  const saveClicked = $(event.currentTarget).prev().val(); // the todo text
  const key = $(event.currentTarget).prev().data("set"); // the index of the time block
  localStorage.setItem(key, saveClicked);
  const savedItems = localStorage.getItem(key);

  todos[key] = savedItems;
  localStorage.setItem("todos", JSON.stringify(todos));
}

function summonToDos() {
  const todoList = JSON.parse(localStorage.getItem("todos"));

  for (let key in todoList) {
    const currentItem = todoList[key];
    document.querySelector(`textarea[data-set="${key}"]`).textContent = currentItem;
  } 
}

/* jQuery event listener - listens for the save buttons being clicked */
$('.btn').each(function() {
  $(this).click(function(event) {
    ghostTodos(event)
  })
})

pastPresentFuture();
summonToDos();
