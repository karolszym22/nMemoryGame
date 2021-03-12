export class player
{
    constructor(trials, nick)
    {
        this.nick = nick;
        this.trials = trials;
        this.scoreContainer = [];
        this.scoreContainerSort = [];
    }

    

    trialsCount = () => ++this.trials;

    showScore = () => this.trials;
    
    
    sendToLocalStorage(player)
    {
        window.localStorage.setItem('player', JSON.stringify(player));
    }
  
    createNewPosition()
    {
        let position = document.createElement('p');
        let nickname = document.createElement('p');
        let result = document.createElement('p');
        let container = document.createElement('div');
        
        this.createElementsClass(position,nickname,result,container);
    }
    createElementsClass(...theArgs)
    {
       let classTable = ["position", "nickname", "result"];
       let container = theArgs.pop();
       container.classList.add("player-container");
       theArgs.forEach((item,index) =>
        {
            item.classList.add("player", classTable[index]);
            
        });
        theArgs.push(container);
        this.addPlayerData(theArgs);
    }    

    addPlayerData(theArgs)
    {  
       
      for(let i=0; i<sessionStorage.length-1; i++)
      {
        this.scoreContainer.push(JSON.parse(sessionStorage[i+1]));
      }  
      
      let elementsTable = theArgs;
      this.scoreContainer.sort(function(a, b) {
        return (b.userScored) - (a.userScored);
       });
       console.log(this.scoreContainer); 
      for(let i=0; i<this.scoreContainer.length; i++)
      {
        this.putInScoreContainer(elementsTable, this.scoreContainer[i],i);
      }
      console.log(this.scoreContainer)
     }
     putInScoreContainer(element, scoreContainer,position)
     {
       let elementsTable = element;
       elementsTable[0].innerHTML = position + 1;
       console.log(elementsTable[0]);
       elementsTable[1].innerHTML = scoreContainer.nick;
       console.log(elementsTable[1]);
       elementsTable[2].innerHTML = scoreContainer.userScored;
       console.log(elementsTable[2]);
       for(let i=0; i<elementsTable.length-1; i++)
       {
         elementsTable[3].appendChild(elementsTable[i]);
        
       }
         document.querySelector('.rank-container').appendChild(elementsTable[3]);
     }
    

}

let play = new player();

