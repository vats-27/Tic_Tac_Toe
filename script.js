let boxes=document.querySelectorAll(".box");
let rst=document.querySelector(".reset");
let newb=document.querySelector(".new");
let msgc=document.querySelector(".msgc");
let msg=document.querySelector(".msg");

let player1=true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  
  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      console.log("BUTTON WAS CLICK");
      if(player1){
        box.innerText="O";
            player1=false;
          }
          else{
            box.innerText="X";
            player1=true;
          }
          box.disabled=true;
          checkwinner();
        });
      });  
      const disableboxes=()=>{
        for(let box of boxes){
          box.disabled=true;
        }
      };
      const enableboxes=()=>{
        for(let box of boxes){
          box.disabled=false;
          box.innerText="";
        }
      };
      const showwinner=(winner)=>{
        msg.innerText=`Congratulations \n '${winner}' is Winner  `;
        msgc.classList.remove("hide");
        conf();
        disableboxes();
      };
      
      const checkwinner=()=>{
        console.log("hii");
        for(let p of winpatterns){
        let pos1=boxes[p[0]].innerText;
        let pos2=boxes[p[1]].innerText;
        let pos3=boxes[p[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="" ){
          
          if(pos1===pos2 && pos2===pos3){
            console.log("winner",pos1);
            showwinner(pos1);
            return true;
          }
        }
      }
    };
    const resetGame = () => {
      turnO = true;
      // count = 0;
      enableboxes();
      msgc.classList.add("hide");
      console.log("chal rha hai")
    };
    
    
    rst.addEventListener("click", resetGame);
    // resetBtn.addEventListener("click", resetGame);
    
    









 function conf(){
   
   const count = 1800,
   defaults = {
     origin: { y: 0.7 },
   };
  
  function fire(particleRatio, opts) {
   confetti(
     Object.assign({}, defaults, opts, {
       particleCount: Math.floor(count * particleRatio),
     })
   );
  }
  
  fire(0.25, {
   spread: 26,
   startVelocity: 55,
  });
  
  fire(0.2, {
   spread: 60,
  });
  
  fire(0.35, {
   spread: 100,
   decay: 0.91,
   scalar: 0.8,
  });
  
  fire(0.1, {
   spread: 120,
   startVelocity: 25,
   decay: 0.92,
   scalar: 1.2,
  });
  
  fire(0.1, {
   spread: 120,
   startVelocity: 45,
  });
 }
