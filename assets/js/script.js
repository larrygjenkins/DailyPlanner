var currentDate = moment().format("dddd, MMMM DD, YYYY");

console.log("now = " + currentDate);

// This function displays the current date at the top of the planner.
function setDate() {
    // var displayDate = $("#currentDay");
    var displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = currentDate;
}

setDate();


var currentHour = moment().format("H");

console.log("current hour is " + currentHour);

var now = "9";
// var timeBlockString = JSON.stringify(timeBlockID);

// console.log(timeBlockID);
// console.log(timeBlockString);
// console.log(timeBlockString.type);

// function testThis () {
//     console.log(timeBlockID);
// }

function pastPresentFuture9 () {
    // var timeBlockID = $("#9");

    if (now == 9) {
        console.log("yes, it's 9");
        $("#9").removeClass("past");
        $("#9").removeClass("future");
        $("#9").addClass("present");
    } 

    else if (now > 9) {
        console.log("yes, it's 9");
        $("#9").removeClass("present");
        $("#9").removeClass("future");
        $("#9").addClass("past");
    }

    else {
        console.log("didn't work");
    }
}

 pastPresentFuture9();