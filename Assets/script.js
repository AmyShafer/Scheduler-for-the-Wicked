var now = moment().format('MMMM Do YYYY');
var dateHere = document.getElementById('currentDay');
dateHere.textContent = now;
var timeBlocks = document.getElementsByClassName('time-block');
var skullSave = $("saveBtn");

var todos = {};

/*

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar (CHECK)
WHEN I scroll down (CHECK)
THEN I am presented with timeblocks for standard business hours (CHECK)
WHEN I view the timeblocks for that day (CHECK)
THEN each timeblock is color coded to indicate whether it is in the past, present, or future (CHECK)
WHEN I click into a timeblock (CHECK)
THEN I can enter an event (CHECK)
WHEN I click the save button for that timeblock (CHECK)
THEN the text for that event is saved in local storage (CHECK)
WHEN I refresh the page 
THEN the saved events persist 

*/

/* Function color codes time blocks for past, present, and future */ 
function pastPresentFuture() {
  var presentHour = moment().hours();
  
  $(".time-block").each(function(index) {
    var currentHour = index;
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
function saveUserTodo(event) {
  var saveClicked = $(event.currentTarget).prev().val(); // the todo text
  var key = $(event.currentTarget).prev().data("set"); // the index of the time block
  localStorage.setItem(key, saveClicked);
  //localStorage.setItem("todoList", todos);
  var savedItems = localStorage.getItem(key);

  todos[key] = savedItems;

  localStorage.setItem("todos", JSON.stringify(todos));
}

function displayToDos() {
  var todoList = JSON.parse(localStorage.getItem("todos"));
  //todoList = todoList.split(",");
  console.log("TEST: " + todoList);

  for (var i = 0; i < todoList.length; i++) {
    var currentDataSet = todoList[i]; // data-set plus the number at that index
    var todoItem = todoList[i + 1];
    console.log("currentDataSet: " + currentDataSet);
    console.log("todoItem: " + todoItem);
    document.getElementById(currentDataSet).innerHTML = todoItem;
    //console.log();
  }  
  
}

/* jQuery event listener - listens for the save buttons being clicked */
$('.btn').each(function() {
  $(this).click(function(event) {
    saveUserTodo(event)
  })
})

pastPresentFuture();
displayToDos();

