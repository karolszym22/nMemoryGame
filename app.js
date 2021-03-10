import {player} from "./score.js"
import {pictures} from "./pictures.js"
import {generatorPictures} from "./generatorPictures.js"
import {settings} from "./settings.js"


function timer() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('1');
        console.log("34343");
      }, 1000);
    });
  }



let movePermit = true;
const newGame = new generatorPictures();
const playerOne = new player(0, "Jan");
const setting = new settings();

newGame.generatorCards();
newGame.addPictures();
setting.handleModalSettings();
class Memory

{
    constructor(nick)
    {
        this.clickedPic = "";
        this.firstClickedPic ="";
        this.trials = 0;
        this.numberOfHits = 0;
        this.pointsNumber = 9999999;
        this.timer = 0;
        this.userScored = 0;
        this.nick = nick;
    }

    async timeCounter()
    { let time = document.querySelector(".counter-time");
       
        do{
            const result = await timer();
            this.timer+=parseInt(result);
            console.log(this.timer + "timer");
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
         {
            this.numberOfHits++;
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
             game.userScored  = (this.pointsNumber/ (playerOne.trials ==0 ? this.timer : (playerOne.trials*this.timer)));
             console.log(this.pointsNumber);
             console.log(playerOne.trials);
             console.log(this.timer );
             score.innerHTML = game.userScored; 
             setting.showModal();
             
         }
     }

}




const game = new Memory();
game.timeCounter();






var card = document.querySelectorAll(".cards-board div div").forEach(
    item => item.addEventListener("click", function()
    { 
      if(movePermit == true)
      {
              
        if(game.firstClickedPic!="")
        {   movePermit = false;
            console.log("drugi przycisk to:"+item.id);
            var choosedCard = document.getElementById(item.id);
            choosedCard.setAttribute("style", "animation: rotate 1s forwards;");
            setTimeout(function(){ 
                
                choosedCard.setAttribute("style", "display: none");
                var last = item.id.split('');
                console.log(last[last.length-1]);
                game.comparisonPictures(game.firstClickedPic, last[last.length-1]);
                game.firstClickedPic = "";
            }, 500);
         
       

        }else 
        {
           
            var choosedCard = document.getElementById(item.id);
            game.diagnosisId(item.id);
            choosedCard.setAttribute("style", "animation: rotate 1s forwards;");
            setTimeout(function(){ 
                
                choosedCard.setAttribute("style", "display: none");
            }, 500);
         
        }
      }
        
       
    })
)


