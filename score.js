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
  
    createNewPosition(scoreNumber)
    {
        let elements = [];
        let position = document.createElement('p');
        let nickname = document.createElement('p');
        let result = document.createElement('p');
        let container = document.createElement('div');
        elements.push(position,nickname,result,container);
        this.createElementsClass(elements,scoreNumber)
    }
    createElementsClass(elements,scoreNumber)
     {
       let classTable = ["position", "nickname", "result"];
       let container = elements.pop();
       container.classList.add("player-container");
       elements.forEach((item,index) =>
        {
            item.classList.add("player", classTable[index]);
            
        });
       elements.push(container);
       this.editElements(elements,scoreNumber);
     } 
     editElements(elements,scoreNumber)
     { 
       elements[0].innerHTML = scoreNumber+1;
       elements[1].innerHTML = this.scoreContainer[scoreNumber].nick;
       elements[2].innerHTML = this.scoreContainer[scoreNumber].userScored;
       this.appendElements(elements);

     }   
     appendElements(elements,scoreNumber)
     {
       for(let i=0; i<elements.length-1; i++)
       {
         elements[3].appendChild(elements[i]);
       }
       console.log("czy to div"+elements[3]);
       document.querySelector(".rank-container").appendChild(elements[3]);
     }

    addPlayerData()
    {  
       console.log("teraz tooooooooooooooooooooo");
       console.log("moj scoreContainer jest teraz pusty" + this.scoreContainer);
      for(let i=0; i<sessionStorage.length; i++)
      {
        this.scoreContainer.push(JSON.parse(sessionStorage[i]));
        console.log("dodajemy do scoreContainer tyle ile jest w sessions torage"+this.scoreContainer);
      }  
      this.scoreContainer.sort(function(a, b) {
        return (b.userScored) - (a.userScored);
       });
      
      console.log(this.scoreContainer)
     
      for(let i=0; i<this.scoreContainer.length; i++)
      {
        this.createNewPosition(i)
      }
     }
     

}

let play = new player();

