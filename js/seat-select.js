//Available button
let availableButton = document.querySelectorAll(".available-seat-button-button");

for (let i = 0; i < availableButton.length; i++) {
    availableButton[i].addEventListener("click", function () {
        console.log(availableButton[i]);
        if (availableButton[i].style.backgroundColor == "rgb(144, 238, 144)") {
            availableButton[i].style.backgroundColor = "var(--dl-color-success-300)";
            availableButton[i].innerHTML = "<span>&nbsp;</span>";
        }
        else{
            availableButton[i].style.backgroundColor = "rgb(144, 238, 144)";
            availableButton[i].innerHTML = "<span>X</span>";
        }
    });
}

// Diasability button
let disabilityButton = document.querySelectorAll(".disabled-seat-button-button");

for (let i = 0; i < disabilityButton.length; i++) {
    disabilityButton[i].addEventListener("click", function () {
        console.log(disabilityButton[i]);
        if (disabilityButton[i].style.backgroundColor == "rgb(144, 144, 238)") {
            disabilityButton[i].style.backgroundColor = "var(--dl-color-template-blue-bg)";
            disabilityButton[i].innerHTML = "<span>&nbsp;</span>";
        }
        else{
            disabilityButton[i].style.backgroundColor = "rgb(144, 144, 238)";
            disabilityButton[i].innerHTML = "<span>X</span>";
        }
    });
}
