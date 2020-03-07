// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.

let textField = document.getElementById("foreground-color");
let colorField = document.getElementById("background-color");
let form = document.getElementById("preferences-form");
let body = document.querySelector("body");
let savedColor = localStorage.getItem("backgroundColorPreference");
let savedText = localStorage.getItem("textColorPreference");

function keepPreferences() {
    if (savedColor != null) {
        body.style.backgroundColor = savedColor;
    }
    if(savedText != null) {
        body.style.color = savedText;
    }
}

function setColorPreferences(event) {
    event.preventDefault();
    let colorFieldContents = colorField.value;
    let textFieldContents = textField.value;
    body.style.backgroundColor = colorFieldContents;
    body.style.color = textFieldContents;
    localStorage.setItem("backgroundColorPreference", colorFieldContents);
    localStorage.setItem("textColorPreference", textFieldContents);
    alert("Your preferences have been saved!");
}

keepPreferences();
form.addEventListener("submit", setColorPreferences);