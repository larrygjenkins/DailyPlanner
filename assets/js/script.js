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

function pastPresentFuture9 () {
    if (currentHour == 9) {
        console.log("yes, it's 9");
        $("#9").removeClass("past");
        $("#9").removeClass("future");
        $("#9").addClass("present");
    } 

    else if (currentHour > 9) {
        console.log("9 is in the past");
        $("#9").removeClass("present");
        $("#9").removeClass("future");
        $("#9").addClass("past");
    }

    else {
        $("#9").removeClass("present");
        $("#9").removeClass("past");
        $("#9").addClass("future");
    }
}

 pastPresentFuture9();
//  pastPresentFuture10();
//  pastPresentFuture11();
//  pastPresentFutur12();
//  pastPresentFuture13();
//  pastPresentFuture14();
//  pastPresentFuture15();
//  pastPresentFuture16();
//  pastPresentFuture17();
