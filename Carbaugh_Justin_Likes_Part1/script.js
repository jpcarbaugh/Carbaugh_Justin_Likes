let clicks = 0;
let count = document.querySelector("#likeCount");

function likeIncrement(){
    clicks++
    count.innerText = clicks + " like(s)";
}