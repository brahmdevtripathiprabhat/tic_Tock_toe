let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");






let turn0= true;//playerX,player0
const winpattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
// to reset game
const resetgame=()=>{
enableboxes();
msg-container.classList.add("hide");


}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
if(turn0){
    box.innerText="O";
    turn0=false;
}
else// player x
{box.innerText="X";
turn0=true;
}
box.disabled=true;
checkwinner();
    });

});
const disabledboxes=()=>{
for(box of boxes){
    box.disabled=true;
}

};
const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
    };

const showWinner=(winner)=>{
msg.innerText=`congratulations winner is ${winner}`;
msgcontainer.classList.remove("hide");
disabledboxes();

}
const checkwinner=()=>{
for(let pattern of winpattern){
    let pos1value=boxes[pattern[0]].innerText;
    let pos2value=boxes[pattern[1]].innerText;
    let pos3value=boxes[pattern[2]].innerText;


    if(pos1value!=""&&pos2value!=""&&pos3value!=""){

        if(pos1value===pos2value&&pos2value===pos3value){
            console.log("winner",pos1value);
            showWinner(pos1value);
        }

    }
}



}
newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);