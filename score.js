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
        let container = document.createElement('div');
        let position = document.createElement('p');
        let nickname = document.createElement('p');
        let result = document.createElement('p');
        this.createElementsClass(container,position,nickname,result);
    }
    createElementsClass(container,position,nickname,result)
    {


    }    
    
}