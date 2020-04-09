let homeButton = document.getElementById('home');
let contactButton = document.getElementById('contact');
let myWorkButton = document.getElementById('myWork');

let homeHR = document.getElementById('homeHR');
let contactHR = document.getElementById('contactHR');
let myWorkHR = document.getElementById('myWorkHR');

let homeSection = document.getElementById('homeSection');
let contactSection = document.getElementById('contactSection');
let workSection = document.getElementById('workSection');

homeButton.addEventListener("click", checkHomeButton);
contactButton.addEventListener("click", checkContactButton);
myWorkButton.addEventListener("click", checkmyWorkButton);

function checkHomeButton() {

    homeSection.style.display = "block";
    contactSection.style.display = "none";
    workSection.style.display = "none";

    homeHR.style.display = "block";
    contactHR.style.display = "none";
    myWorkHR.style.display = "none";
}


function checkContactButton() {

    homeSection.style.display = "none";
    contactSection.style.display = "block";
    workSection.style.display = "none";

    homeHR.style.display = "none";
    contactHR.style.display = "block";
    myWorkHR.style.display = "none";
}

function checkmyWorkButton() {

    homeSection.style.display = "none";
    contactSection.style.display = "none";
    workSection.style.display = "block";

    homeHR.style.display = "none";
    contactHR.style.display = "none";
    myWorkHR.style.display = "block";
}