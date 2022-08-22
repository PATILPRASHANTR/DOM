console.log(element4[2]);
element4[2].style.color = "red";

function replaceText(){
    const element6 = document.getElementById("heading");
    element6.innerText="Welcome to Elevation Academy!";
}

function displayclock (){
let time = new Date();
let hrs = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();


if(hrs>12){
  hrs = hrs -12;
}

  if(hrs==0){
    hrs = 12;
  }
  document.getElementById("clock").innerHTML = hrs + ":" + min + ":" + sec;
}

setInterval(displayclock,1000)


function yearChange() {
    let selectedYear = document.getElementById("yearSelect").value;
    document.getElementById("year").innerText = selectedYear;
}

function emailCheck() {
    let a = document.getElementById("email").value;
    if (!a.endsWith("prepbytes.com")) {
        let b = document.getElementById("emailcheck");
        b.style.display = "inline";
    } else {
        let b = document.getElementById("emailcheck");
        b.style.display = "none";
    }
}

function numberCheck() {
    let a = document.getElementById("phoneno").value;
    if (!a.startsWith("91")) {
        let b = document.getElementById("startcheck");
        b.style.display = "inline";

    } else {
        let b = document.getElementById("startcheck");
        b.style.display = "none";
    }
    if (a.length == 10) {
        let b = document.getElementById("digitcheck");
        b.style.display = "inline";
    } else {
        let b = document.getElementById("digitcheck");
        b.style.display = "none";
    }
}

function bYearCheck() {
    let a = document.getElementById("byear").value;
    if (a < 1995) {
        let b = document.getElementById("byearcheck");
        b.style.display = "inline";
    } else {
        let b = document.getElementById("byearcheck");
        b.style.display = "none";
    }
}