var now = moment().format('MMMM Do YYYY');
var timeHere = document.getElementById('currentDay');
timeHere.textContent = now;
var timeBlocks = document.getElementsByClassName('time-block');

/* GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/

function timeClock() {
  var presentHour = moment().hours(); // the block index that should be red
  var futureHours = 24 - presentHour; // how many blocks should be blacked out 
  var pastHours = 16 - presentHour; // how many blocks should brown
  console.log("present hour: " + presentHour);

  $(".time-block").each(function(index) {
    // present time block should be black
    if (index + 16 === presentHour) {
      console.log("INDEX: " + index);
      timeBlocks[index].setAttribute("style", "background-color: #030100;");
    // past time blocks should be greyed out
    } else if (index + 16 < presentHour) {
      timeBlocks[index].setAttribute("style", "background-color:#929292;");
    // future time blocks should be brown 
    } else {
      timeBlocks[index].setAttribute("style", "background-color:#52322c");
    }
  });
} 

timeClock();

/*

$(".time-block").each(function(index) {
      var hourBlock = index;
      if (currentHour === hourBlock) {
        console.log("Here: " + hourBlock);
        parseInt($(this).attr("id").split("-")[1]);
      } 
    });

     // past time blocks
    if (currentHour > presentHour) {
      timeBlocks[index].setAttribute("style", "background-color: #52322c");
    // future time blocks  
    } else {
      timeBlocks[index].setAttribute("style", "background-color:#030100");
    }

*/