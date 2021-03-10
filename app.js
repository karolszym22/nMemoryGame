import {player} from "./score.js"
import {pictures} from "./pictures.js"
import {generatorPictures} from "./generatorPictures.js"
import {settings} from "./settings.js"

let movePermit = true;

const newGame = new generatorPictures();
const playerOne = new player(0, "Jan");
const setting = new settings();

newGame.generatorCards();
newGame.addPictures();
setting.handleModalSettings();
class Memory

{
    constructor()
    {
        this.clickedPic = "";
        this.firstClickedPic ="";
        this.trials = 0;
        this.numberOfHits = 0;
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
             setting.showModal();
           
         }
     }

}




const game = new Memory();

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


