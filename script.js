let allBtn = document.querySelector(".allBtn");
let breakfastBtn = document.querySelector(".breakfastBtn");
let lunchBtn = document.querySelector(".lunchBtn");
let shakesBtn = document.querySelector(".shakesBtn");
let dinnerBtn = document.querySelector(".dinnerBtn");
let toggleBreakfast = document.querySelector(".toggleBreakfast");
let toggleLunch = document.querySelector(".toggleLunch");
let toggleShakes = document.querySelector(".toggleShakes");
let toggleDinner = document.querySelector(".toggleDinner")
let shakes = document.querySelectorAll("shakes");
let Dinner = document.querySelectorAll(".dinner")

function all() {
    toggleBreakfast.style.display = "block";
    toggleLunch.style.display = "block";
    toggleShakes.style.display = "block";
    toggleDinner.style.display = "block";
     breakfastBtn.style.display = "block";
     lunchBtn.style.display = "block";
     shakesBtn.style.display = "block";
     dinnerBtn.style.display = "block";
}

function breakfastMenu() {
    toggleLunch.style.display = "none";
    toggleShakes.style.display = "none";
    toggleDinner.style.display = "none";
    breakfastBtn.style.display = "none";
    lunchBtn.style.display = "none";
    shakesBtn.style.display = "none";
    dinnerBtn.style.display = "none";
    allBtn.style.display = "block";
}

function lunchMenu() {
    toggleBreakfast.style.display = "none";
    toggleShakes.style.display = "none";
    toggleDinner.style.display = "none";
    breakfastBtn.style.display = "none";
    lunchBtn.style.display = "none";
    shakesBtn.style.display = "none";
    dinnerBtn.style.display = "none";
    allBtn.style.display = "block";
}

function shakesMenu() {
     toggleBreakfast.style.display = "none";
     toggleLunch.style.display = "none";
     toggleDinner.style.display = "none";
     breakfastBtn.style.display = "none";
     lunchBtn.style.display = "none";
     shakesBtn.style.display = "none";
     dinnerBtn.style.display = "none";
     allBtn.style.display = "block";
}

function dinnerMenu() {
    toggleBreakfast.style.display = "none";
    toggleLunch.style.display = "none";
    toggleShakes.style.display = "none";
    breakfastBtn.style.display = "none";
    lunchBtn.style.display = "none";
    shakesBtn.style.display = "none";
    dinnerBtn.style.display = "none";
    allBtn.style.display = "block";
}

allBtn.style.display = "none";

allBtn.addEventListener("click", function() {
    all(toggleBreakfast);
});

breakfastBtn.addEventListener("click", function() {
     breakfastMenu(toggleLunch, toggleShakes, toggleDinner);
});

lunchBtn.addEventListener("click", function() {
    lunchMenu(toggleBreakfast, toggleShakes, toggleDinner)
});

shakesBtn.addEventListener("click", function() {
    shakesMenu(toggleBreakfast, toggleLunch, toggleDinner);
});

dinnerBtn.addEventListener("click", function() {
    dinnerMenu(toggleBreakfast, toggleLunch, toggleShakes);
})