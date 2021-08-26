let neilClicks = 0;
let nicholeClicks = 0;
let jimClicks = 0;
let neilCount = document.querySelector("#neilLikeCount");
let nicholeCount = document.querySelector("#nicholeLikeCount");
let jimCount = document.querySelector("#jimLikeCount");

function neilLikeIncrement(){
    neilClicks++
    neilCount.innerText = neilClicks + " like(s)";
}

function nicholeLikeIncrement(){
    nicholeClicks++
    nicholeCount.innerText = nicholeClicks + " like(s)";
}

function jimLikeIncrement(){
    jimClicks++
    jimCount.innerText = jimClicks + " like(s)";
}