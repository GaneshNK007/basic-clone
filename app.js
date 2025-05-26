let gameseq=[];
let userseq=[];

let started=false;
let level=0;
let levelMax=0;

let btns=["yellow","red","green","purple"];

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false)
    {
        console.log("game started");
        started=true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}


function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randindx=Math.floor(Math.random() *3);
    let randcolor=btns[randindx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);

    // random button 
    gameFlash(randbtn);
}


// step------2-------


function checkAns(indx){

    if(userseq[indx]===gameseq[indx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp(),1000);
        }
    }
    else{
        levelMax=Math.max(level,levelMax);
        h2.innerHTML=`Game over ! your score was<b> ${level} </b><br>  Press any key to start<br> Highest Score :${levelMax}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    // console.log("button Pressed");
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);

}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
    
}