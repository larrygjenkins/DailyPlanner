var currentDate = moment().format("dddd, MMMM DD, YYYY");

console.log("now = " + currentDate);

// This function displays the current date at the top of the planner.
function setDate() {
    var displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = currentDate;
}

setDate();

// This variable is used to determine whether a time-block is in the past, present, or future.
var currentHour = moment().format("H");

console.log("current hour is " + currentHour);

var now = "9";

// var timeBlock = document.getElementsByClassName("time-block");
// var timeBlockIDValue = timeBlock.id;

// console.log(timeBlockIDValue);




function pastPresentFuture9 () {
    // var timeBlockID = $("#9");
    
    for (i = 9; i < 9; i++) {

    var timeBlockID = document.getElementById(i);

    if (currentHour == timeBlockID) {
        console.log("yes, it's 9");        
        timeBlockID.removeClass("past");
        timeBlockID.removeClass("future");
        timeBlockID.addClass("present");
    } 

    else if (currentHour > timeBlockID) {
        console.log("yes, it's past 9");
        timeBlockID.removeClass("present");
        timeBlockID.removeClass("future");
        timeBlockID.addClass("past");
    }

    else {
        console.log("9 is in the future");
        timeBlockID.removeClass("present");
        timeBlockID.removeClass("past");
        timeBlockID.addClass("future");
    }
}}

// function pastPresentFuture9 () {
    // var timeBlockID = $("#9");


//     if (currentHour == 9) {
//         console.log("yes, it's 9");
//         $("#9").removeClass("past");
//         $("#9").removeClass("future");
//         $("#9").addClass("present");
//     } 

//     else if (currentHour > 9) {
//         console.log("yes, it's 9");
//         $("#9").removeClass("present");
//         $("#9").removeClass("future");
//         $("#9").addClass("past");
//     }

//     else {
//         $("#9").removeClass("present");
//         $("#9").removeClass("past");
//         $("#9").addClass("future");
//     }
// }

 pastPresentFuture9();