let sunmove = document.getElementById('sun');
let moongrab = document.getElementById("moon");
let starname = document.getElementById('starname');

select();

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('resize', select);
});

function select() {
    //remove event listener
    starname.style.color = 'rgba(255,255,255,0)';
    sunmove.removeEventListener('animationend', sunlow);
    moongrab.removeEventListener('animationend', moonanimationover);
    starname.removeEventListener('mouseover', showname);
    starname.onmouseenter = function() {noname()};
    //add eventlistener everytime resizing
    if (window.matchMedia('(min-width: 1100px)').matches) {
        moongrab.style.animationName = 'moonup';
        moongrab.style.animationDuration = '4s';
        moongrab.style.animationIterationCount = '1';
        moongrab.style.animationFillMode = 'forwards';
        moongrab.addEventListener('animationend', moonanimationover);
    }
    if (window.matchMedia('(min-width: 900px) and (max-width: 1100px)').matches) {
        moongrab.style.animationName = 'moondown';
        moongrab.style.animationDuration = '8s';
        moongrab.style.animationIterationCount = '1';
        moongrab.style.animationFillMode = 'forwards';
    } 
    if (window.matchMedia('(min-width: 700px) and (max-width: 900px)').matches) {
        // console.log(sunmove);
        sunmove.addEventListener('animationend', sunlow);
    }
    if (window.matchMedia('(max-width: 700px)').matches) {
        starname.onmouseenter = function() {showname()};
        starname.onmouseleave = function() {noname()};
    }
}

// document.getElementById("demo").onmouseenter = function() {mouseEnter()};
// document.getElementById("demo").onmouseleave = function() {mouseLeave()};

// function mouseEnter() {
//   document.getElementById("demo").style.color = "red";
// }

// function mouseLeave() {
//   document.getElementById("demo").style.color = "black";
// }

function showname() {
    console.log('It\'s Big Dipper');
    starname.style.color = 'rgba(255,255,255,0.6)';
}
function noname() {
    starname.style.color = 'rgba(255,255,255,0)';
}

function sunlow() {
    // console.log("The sun is getting really low...");
    alert("The sun is getting really low...");
}

function moonanimationover() {
    moongrab.addEventListener("mouseover", moondrop);
}

function moondrop() {
    console.log("mooon drop...");
    alert("moon is dropping");
    moongrab.style.animationName = 'moondrop';
    moongrab.style.animationDuration = '3s';
    moongrab.style.animationIterationCount = 'infinite';
}

//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationcancel_event