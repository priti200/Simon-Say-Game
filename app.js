let gameSequence = [];
let userSequencce = [];
let buttons = ["green","red","yellow","blue"];

let gameStart = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(gameStart == false){
        gameStart = true;
        
        levelUp();
    }
});

function btnFlash(btn){

    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);

}

function userFlash(btn){

    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);

}

function levelUp(){
    userSequencce =[];
    level++;
    h3.innerText = `Level ${level}`;

    let randIndex = Math.floor(Math.random() * 3);
    let randColor = buttons[randIndex];
    let randButton = document.querySelector(`.${randColor}`); 
    // console.log(randIndex);
    // console.log(randColor);
    // console.log(randButton);
    gameSequence.push(randColor);
    console.log(gameSequence);
    btnFlash(randButton);

}

function checkAns(Currentindex){
    // console.log("current level: ",level);
    // let Currentindex = level -1 ;
    if(userSequencce[Currentindex] === gameSequence[Currentindex]){
        if(userSequencce.length === gameSequence.length){
            setTimeout(levelUp,1000);
            // levelUp();
        }
    } else{
        h3.innerHTML = `Game Over! Your Score is <b>${level}</b> <br> Press any key to restart the Game.</br> `;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200)
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSequencce.push(userColor);
    console.log(userColor);
    console.log(userSequencce);
    checkAns(userSequencce.length-1);
}

let allbtns = document.querySelectorAll(".box");
for(box of allbtns){
    box.addEventListener("click",btnPress);
}

function reset(){
    gameStart = false;
    gameSequence = [];
    userSequencce = [];
    level = 0;

}