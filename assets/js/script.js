var currentDate = moment().format("dddd, MMMM DD, YYYY");

console.log("now = " + currentDate);

function setDate() {
    // var displayDate = $("#currentDay");
    var displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = currentDate;
}

setDate();