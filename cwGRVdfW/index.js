//console.log("Hello from JavaScript");
let scoreHomeEl = document.getElementById("score-home-el")
let scoreGuestEl = document.getElementById("score-guest-el")

let countHome = 0
let countGuest = 0

function freethrowHome(){
    countHome += 1
    scoreHomeEl.textContent = countHome
    
}
function freeshotHome(){
    countHome += 1
    scoreHomeEl.textContent = countHome
    
}
function freelongHome(){
    countHome += 1
    scoreHomeEl.textContent = countHome
    
}

function freethrowGuest(){
    countGuest += 1
    scoreGuestEl.textContent = countGuest
}

function freeshotGuest(){
    countGuest += 1
    scoreGuestEl.textContent = countGuest
}
function freelongGuest(){
    countGuest += 1
    scoreGuestEl.textContent = countGuest
}
