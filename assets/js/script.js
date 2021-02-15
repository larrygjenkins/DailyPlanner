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


// function pastPresentFuture () {
//     if 
// }