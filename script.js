'use strict'

// CLOCK

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();


const parag = document.getElementById('inf');
let display=0;

let extend_btn = document.querySelector(".bottom-arrow");
extend_btn.addEventListener('click',(e) => {
    hide_show();
} );


let rotated=document.getElementsByClassName('card-img');

let btn = document.querySelector('.bottom-arrow');

btn.addEventListener('click', function() {
  btn.classList.toggle('rotate');
});

// MORE ABOUT ME
function hide_show(){
    
    
    if(display==0)
    {
        parag.style.display='block';
        display=1;
        
        console.log("show");
    }
    else
    {
        parag.style.display='none';
        display=0;
        console.log("hide");
    }
    
}

