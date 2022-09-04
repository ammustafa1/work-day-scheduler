var times = document.getElementById("container").children;
var dateEl = document.getElementById("currentDay");

dateEl.innerText = moment().format('llll');

function saveContent(el) {
    var textInput = el.previousElementSibling.value;
    localStorage.setItem(el.parentElement.dataset.time, textInput);
}

function fillPage() {
    for (i = 0; i < times.length; i++) {
        text = localStorage.getItem(times[i].dataset.time);
        textArea = times[i].querySelector("textarea");
        textArea.value = text;

        if (moment().hour() > times[i].dataset.time) {
            textArea.classList.add("past");
        } else if (moment().hour() == times[i].dataset.time) {
            textArea.classList.add("present");
        } else {
            textArea.classList.add("future");
        }
    }
}
fillPage();