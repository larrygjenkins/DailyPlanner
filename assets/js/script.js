var currentDate = moment().format("dddd, MMMM DD, YYYY");

console.log("now = " + currentDate);

// This function displays the current date at the top of the planner.
function setDate() {
    // var displayDate = $("#currentDay");
    var displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = currentDate;
}

setDate();


var currentHour = moment().format("hA");

console.log("current hour is " + currentHour);

var now = "9AM";
var timeBlockID = $(".time-block").attr("id");
var timeBlockString = JSON.stringify(timeBlockID);

console.log(timeBlockID);
console.log(timeBlockString);
console.log(timeBlockString.type);

// function testThis () {
//     console.log(timeBlockID);
// }

function pastPresentFuture () {
    if (now == timeBlockID) {
        $(".time-block").removeClass("past");
        $(".time-block").removeClass("future");
        $(".time-block").addClass("present");
    } 
}

 pastPresentFuture();