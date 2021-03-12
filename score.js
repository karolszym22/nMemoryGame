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
        this.scoreContainerSort.push([this.scoreContainer[i].userScored, this.scoreContainer[i].nick]);
      }  
      this.scoreContainerSort.sort();
      let elementsTable = theArgs;
      for(let i=0; i<this.scoreContainerSort.length; i++)
      {
        let elementsTable = theArgs;
        this.putInScoreContainer(elementsTable, this.scoreContainerSort[i]);
      }
          console.log(this.scoreContainerSort);
     }
     putInScoreContainer(elementsTable, scoreContainer)
     {
        
     }

}

let play = new player();
play.createNewPosition();
