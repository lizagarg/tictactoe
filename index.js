const cells=document.querySelectorAll(".cell");
const statusText=document.querySelector("#statusText");
const restartBtn=document.querySelector("#restartBtn");
const h1= document.getElementById("h1");

// winConditions
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]

const empty= new Array(9).fill(null);

const O= "O";
const X= "X";
gamerunning=true;


let currentPlayer=X;
statusText.innerText=`${currentPlayer}'s turn`;

function checkTie(){
    for(let j=0;j<9;j++){
        if(empty[j]==null){
            return false;
        }
    
       
    }
    return true;
}


function checkwinner(){
    
    if (currentPlayer==empty[0]&&empty[0]==empty[1]&& empty[1]==empty[2])
    return true;
    if (currentPlayer==empty[3]&&empty[3]==empty[4]&& empty[4]==empty[5])
    return true;
    if (currentPlayer==empty[6]&&empty[6]==empty[7]&& empty[7]==empty[8])
    return true;
    if (currentPlayer==empty[0]&&empty[0]==empty[3]&& empty[3]==empty[6])
    return true;
    if (currentPlayer==empty[1]&&empty[1]==empty[4]&& empty[4]==empty[7])
    return true;
    if (currentPlayer==empty[2]&&empty[2]==empty[5]&& empty[5]==empty[8])
    return true;
    if (currentPlayer==empty[0]&&empty[0]==empty[4]&& empty[4]==empty[8])
    return true;
    if (currentPlayer==empty[2]&&empty[2]==empty[4]&& empty[4]==empty[6])
    return true;

    return false;
   
}

const cellClicked=(e)=>
{
 
    if(gamerunning)
    {
        const id=e.target.id;

        if(empty[id]==null){
          console.log(e.target.id);
         empty[id]=currentPlayer;
         e.target.innerText=currentPlayer;
         
         //checking winner after storing every time
         checkwinner();
     
         if(checkwinner()){
             h1.innerText=`${currentPlayer} won!`; 
             statusText.innerText="Game Over";
             currentPlayer="";
             gamerunning=false;
         }
         else if(checkTie()){
            h1.innerText=`It's a Tie!`;
            gamerunning=false;
            statusText.innerText="Game Over";
         }
         else{
         
              //switching the player 
             if(currentPlayer==X){
                 currentPlayer=O;
                 statusText.innerText=`${currentPlayer}'s turn`;
               }
               else{
                 currentPlayer=X;
                 statusText.innerText=`${currentPlayer}'s turn`;
             
               }
         }
     
     }
    
     }
    };
   
  

cells.forEach((cell)=> cell.addEventListener("click", cellClicked));

restartBtn.addEventListener("click",()=>{
  currentPlayer=X;
  cells.forEach((cell)=> {
    cell.innerText="";
  });
   empty.fill(null);
   h1.innerText = "Tic Tac Toe";
   gamerunning=true;
});
 



