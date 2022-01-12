var now = moment().format('MMMM Do YYYY');
var dateHere = document.getElementById('currentDay');
dateHere.textContent = now;
var timeBlocks = document.getElementsByClassName('time-block');
//var saveToDo = document.querySelectorAll('description');

/* GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar (CHECK)
WHEN I scroll down (CHECK)
THEN I am presented with timeblocks for standard business hours (CHECK)
WHEN I view the timeblocks for that day (CHECK)
THEN each timeblock is color coded to indicate whether it is in the past, present, or future (CHECK)
WHEN I click into a timeblock
THEN I can enter an event (CHECK)
WHEN I click the save button for that timeblock 
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/

function pastPresentFuture() {
  var presentHour = moment().hours(); // the block index that should be red
  
  $(".time-block").each(function(index) {
    var currentHour = index + 9;
    console.log(currentHour);
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

/*
function userSaveEvent() {
  var userToDo = document.querySelectorAll('description');
  localStorage.setItem("Time", userToDo);
  console.log(userToDo);
  
    // loop through the multiple choices
    for (var i = 0; i < saveToDo.length; i++) {
      var currentButton = saveToDo[i];
      currentButton.addEventListener("click", function(event) {
        var userSave = event.target.currentButton;
        console.log(userSave);
      });
    }   
}
*/

pastPresentFuture();


