var currentDate = moment().format("dddd, MMMM DD, YYYY");

console.log("now = " + currentDate);

// This function displays the current date at the top of the planner.
function setDate() {
    var displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = currentDate;
}

setDate();




// This event listener adds task descriptions to local storage when a save button is selected.
$(".saveBtn").on("click", function(){
    event.preventDefault();
    
    var taskDescriptionNine = document.getElementById("9Task");
    var taskDescriptionTen = document.getElementById("10Task");
    var taskDescriptionEleven = document.getElementById("11Task");
    var taskDescriptionTwelve = document.getElementById("12Task");
    var taskDescriptionThirteen = document.getElementById("13Task");
    var taskDescriptionFourteen = document.getElementById("14Task");
    var taskDescriptionFifteen = document.getElementById("15Task");
    var taskDescriptionSixteen = document.getElementById("16Task");
    var taskDescriptionSeventeen = document.getElementById("17Task");

    localStorage.setItem("9AM", taskDescriptionNine.value);
    localStorage.setItem("10AM", taskDescriptionTen.value);
})

// $("#10Btn").on("click", function(){
//     event.preventDefault();
//     var taskDescription = document.getElementById("10Task");
//     localStorage.setItem("10AM", taskDescription.value);
// })

// These variables are used to retrieve tasks from location Storage.
var nineAmTask = localStorage.getItem("9AM");
var tenAmTask = localStorage.getItem("10AM");


// This function takes the text within local storage and assigns it to the appropriate text area within the planner. 
function showTasks() {
    $("#9Task").text(nineAmTask);
    $("#10Task").text(tenAmTask);
}

showTasks();

// This variable is used to determine whether a time-block is in the past, present, or future.
var currentHour = moment().format("H");

// The functions below update the classes of the time-blocks based on the hour of the day.
function pastPresentFuture9 () {
    if (currentHour == 9) {
        $("#9").removeClass("past");
        $("#9").removeClass("future");
        $("#9").addClass("present");
    } 

    else if (currentHour > 9) {
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

function pastPresentFuture10 () {
    if (currentHour == 10) {
        $("#10").removeClass("past");
        $("#10").removeClass("future");
        $("#10").addClass("present");
    } 

    else if (currentHour > 10) {
        $("#10").removeClass("present");
        $("#10").removeClass("future");
        $("#10").addClass("past");
    }

    else {
        $("#10").removeClass("present");
        $("#10").removeClass("past");
        $("#10").addClass("future");
    }
}

function pastPresentFuture11 () {
    if (currentHour == 11) {
        $("#11").removeClass("past");
        $("#11").removeClass("future");
        $("#11").addClass("present");
    } 

    else if (currentHour > 11) {
        $("#11").removeClass("present");
        $("#11").removeClass("future");
        $("#11").addClass("past");
    }

    else {
        $("#11").removeClass("present");
        $("#11").removeClass("past");
        $("#11").addClass("future");
    }
}

function pastPresentFuture12 () {
    if (currentHour == 12) {
        $("#12").removeClass("past");
        $("#12").removeClass("future");
        $("#12").addClass("present");
    } 

    else if (currentHour > 12) {
        $("#12").removeClass("present");
        $("#12").removeClass("future");
        $("#12").addClass("past");
    }

    else {
        $("#12").removeClass("present");
        $("#12").removeClass("past");
        $("#12").addClass("future");
    }
}

function pastPresentFuture13 () {
    if (currentHour == 13) {
        $("#13").removeClass("past");
        $("#13").removeClass("future");
        $("#13").addClass("present");
    } 

    else if (currentHour > 13) {
        $("#13").removeClass("present");
        $("#13").removeClass("future");
        $("#13").addClass("past");
    }

    else {
        $("#13").removeClass("present");
        $("#13").removeClass("past");
        $("#13").addClass("future");
    }
}

function pastPresentFuture14 () {
    if (currentHour == 14) {
        $("#14").removeClass("past");
        $("#14").removeClass("future");
        $("#14").addClass("present");
    } 

    else if (currentHour > 14) {
        $("#14").removeClass("present");
        $("#14").removeClass("future");
        $("#14").addClass("past");
    }

    else {
        $("#14").removeClass("present");
        $("#14").removeClass("past");
        $("#14").addClass("future");
    }
}

function pastPresentFuture15 () {
    if (currentHour == 15) {
        $("#15").removeClass("past");
        $("#15").removeClass("future");
        $("#15").addClass("present");
    } 

    else if (currentHour > 15) {
        $("#15").removeClass("present");
        $("#15").removeClass("future");
        $("#15").addClass("past");
    }

    else {
        $("#15").removeClass("present");
        $("#15").removeClass("past");
        $("#15").addClass("future");
    }
}

function pastPresentFuture16 () {
    if (currentHour == 16) {
        $("#16").removeClass("past");
        $("#16").removeClass("future");
        $("#16").addClass("present");
    } 

    else if (currentHour > 16) {
        $("#16").removeClass("present");
        $("#16").removeClass("future");
        $("#16").addClass("past");
    }

    else {
        $("#16").removeClass("present");
        $("#16").removeClass("past");
        $("#16").addClass("future");
    }
}

function pastPresentFuture17 () {
    if (currentHour == 17) {
        $("#17").removeClass("past");
        $("#17").removeClass("future");
        $("#17").addClass("present");
    } 

    else if (currentHour > 17) {
        $("#17").removeClass("present");
        $("#17").removeClass("future");
        $("#17").addClass("past");
    }

    else {
        $("#17").removeClass("present");
        $("#17").removeClass("past");
        $("#17").addClass("future");
    }
}

pastPresentFuture9();
pastPresentFuture10();
pastPresentFuture11();
pastPresentFuture12();
pastPresentFuture13();
pastPresentFuture14();
pastPresentFuture15();
pastPresentFuture16();
pastPresentFuture17();
