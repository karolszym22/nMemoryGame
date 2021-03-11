export class player
{
    constructor(trials, nick)
    {
        this.nick = nick;
        this.trials = trials;
        
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
       console.log(theArgs);
       let container = theArgs.pop();
       container.classList.add("player-container");
       theArgs.forEach(arr =>
        {
            arr.classList.add("player", "position");

        });
        theArgs.push(container);
        this.addPlayerData(theArgs);
    }    
    addPlayerData(theArgs)
    { 
      for(let i=0; i<sessionStorage.length-1; i++)
      {
          for(let j=1; j<sessionStorage.length-1; j++)
          {
            
          }
      }  
    }
}

let play = new player();
play.createNewPosition();
