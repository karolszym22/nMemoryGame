import {player} from "./score.js"
import {pictures} from "./pictures.js"
import {generatorPictures} from "./generatorPictures.js"
import {settings} from "./settings.js"
window.onload = localStorage.clear();

function timer() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('1');
        
      }, 1000);
    });
  }




class Memory

{
    constructor()
    {
        this.userScored = 0;
        this.nick = "";
        this.clickedPic = "";
        this.firstClickedPic ="";
        this.trials = 0;
        this.numberOfHits = 0;
        this.pointsNumber = 9999999;
        this.timer = 0;
        
    }

    async timeCounter()
    { let time = document.querySelector(".counter-time");
       
        do{
            const result = await timer();
            this.timer+=parseInt(result);
            time.innerHTML = this.timer;
        }while(this.numberOfHits!=3);
        
    }
   
    clickedPicture(value)
    {
         let id = value;
          this.firstClickedPic =  id;
         console.log("Ostatni naciśnięty przycisk to "+ this.firstClickedPic);
         
    }
    diagnosisId(itemId)
    {
      let id = itemId.split('');
      console.log(id[id.length-1]);
       this.clickedPicture(id[id.length-1]);
    }
    
     comparisonPictures(firstClickedPic, lastClickedPic)
     {    console.log(firstClickedPic,lastClickedPic);
         if(newGame.cardsLock[firstClickedPic-1] == newGame.cardsLock[lastClickedPic-1])
         {  this.numberOfHits++;
            this.finishGame(this.numberOfHits);
         }else
         {
             
             document.getElementById('trials').innerHTML = playerOne.trialsCount();
             console.log("moj " + playerOne.trials);
             this.coverCard(firstClickedPic, lastClickedPic);
         }
         movePermit = true;
     }
     coverCard(firstClickedPic, lastClickedPic)
     {
        
        setTimeout(function(){ 
                
            document.getElementById("shadow-card"+firstClickedPic).setAttribute("style", "display: inline-flex");
             document.getElementById("shadow-card"+lastClickedPic).setAttribute("style", "display: inline-flex");
        }, 100);
        this.firstClickedPic = "";
         this.lastClickedPic = "";
        
     }


     finishGame(numberHits)
     {   let score = document.getElementById('results');
         if(numberHits == 3)
         {
             playGame.userScored  = Math.trunc((this.pointsNumber/ (playerOne.trials ==0 ? this.timer : (playerOne.trials*this.timer))));
             score.innerHTML = playGame.userScored; 
             sessionStorage.setItem(sessionStorage.length, JSON.stringify(playGame));
             playerOne.addPlayerData();
             setting.showModal();
             document.getElementById('reset-game').style.display="block";
             
         }
     }
     checkNicknameLength()
     {       
           
           let value = document.getElementById('nickValue').value;
           console.log("moje value:" + value.length);
           if(value.length>8)
           {
            document.getElementById('nickLength').innerHTML = "max number of letters: 8!";
           }else if(value.length===0)
           {
            document.getElementById('nickLength').innerHTML = "give me your nickname mr nobody!";
           }
           else
           {
            localStorage.setItem("name", value);
            console.log("powinna się odpalic");
            document.querySelector('.modal-nick').classList.toggle("close");
            document.querySelector('.shadow-box').classList.toggle("close");
           }
             
     }
     startGame()
     {    
         console.log("wykonywana jest funkcja startująca");
         if(localStorage.length>0)
         {
             this.timeCounter();
    
             this.nick = localStorage.name;
            
         }
     }

}











var card = document.querySelectorAll(".cards-board div div").forEach(
    item => item.addEventListener("click", function()
    { 
      if(movePermit == true)
      {
              
        if(playGame.firstClickedPic!="")
        {   movePermit = false;
            console.log("drugi przycisk to:"+item.id);
            var choosedCard = document.getElementById(item.id);
            choosedCard.setAttribute("style", "animation: rotate 1s forwards;");
            setTimeout(function(){ 
                
                choosedCard.setAttribute("style", "display: none");
                var last = item.id.split('');
                console.log(last[last.length-1]);
                playGame.comparisonPictures(playGame.firstClickedPic, last[last.length-1]);
                playGame.firstClickedPic = "";
            }, 500);
         
       

        }else 
        {
           
            var choosedCard = document.getElementById(item.id);
            playGame.diagnosisId(item.id);
            choosedCard.setAttribute("style", "animation: rotate 1s forwards;");
            setTimeout(function(){ 
                
                choosedCard.setAttribute("style", "display: none");
            }, 500);
         
        }
      }
        
       
    })
)


let movePermit = true;
const newGame = new generatorPictures();
const playerOne = new player(0, "Jan");
const setting = new settings();
const playGame = new Memory();
newGame.generatorCards();
newGame.addPictures();



let closeModalBttn = document.getElementById('closeModal');
let closeModaRanklBttn = document.getElementById('close-modal-rank');
let scoreTableBttn = document.getElementById('scoreButton');
let lestPlayBtnn = document.getElementById('letsPlay');
let resetGame = document .getElementById('reset-game');


closeModalBttn.addEventListener('click', function()
{
   document.querySelector('.modal').classList.toggle("close");
   document.querySelector('.shadow-box').classList.toggle("close");
})
closeModaRanklBttn.addEventListener('click', function()
{
   document.querySelector('.modal-rank').classList.toggle("close");
   document.querySelector('.shadow-box').classList.toggle("close");
})
scoreTableBttn.addEventListener('click', function()
{
    document.querySelector('.modal-rank').classList.toggle("close");
    document.querySelector('.modal').classList.toggle("close");
})
lestPlayBtnn.addEventListener('click', () =>
{
    playGame.checkNicknameLength();
    playGame.startGame();
})
resetGame.addEventListener('click', () =>
{
  setting.resetGame();
})
