let box=document.querySelectorAll(".box");

let resetBtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

box.forEach((box) =>{

    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turn0){//player O
            box.innerText="O";
            turn0=false;
        }
        else{ //player X
            box.innerText="X";
            turn0=true;
        }
       box.disabled= true;

       checkWinner();
    });
});

const disableBoxes =()=>{
    for(let b of box){
        b.disabled= true;
    }

}
const enableBoxes =()=>{
    for(let b of box){
        b.disabled= false;
        b.innerText="";
    }

}

const showwinner =(winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    




};




const checkWinner = () =>{
    for(let pattern of winpatterns){
       
        let pos1=box[pattern[0]].innerText;
         let pos2=   box[pattern[1]].innerText;
           let pos3= box[pattern[2]].innerText;

           if(pos1!="" && pos2!="" && pos3!=""){
               if(pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1);
                showwinner(pos1);
                disableBoxes();
               }
           }
    }
    
}

const resetGame= ()=>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");



}

resetBtn.addEventListener("click", resetGame);
newgamebtn.addEventListener("click", resetGame);