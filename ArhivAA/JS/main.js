const smallScreenBtn = document.getElementById("small-screen-button");
const backBtn = document.getElementById("minimized-back-btn");


const blackout = document.getElementById("blackout");
const fixedNav = document.getElementById("fixed_nav");


blackout.addEventListener("pointerup", (e) =>{
    fixedNav.style.display = "none";
});
backBtn.addEventListener("pointerup", (e) =>{
    fixedNav.style.display = "none";
});


smallScreenBtn.addEventListener("pointerup", (e) => {
    fixedNav.style.display = "inline-block";
});
