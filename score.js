export class player
{
    constructor(trials, nick)
    {
        this.nick = nick;
        this.trials = trials;
        
    }

    trialsCount = () => ++this.trials;

    showScore()
    {

    }
    
    sendToLocalStorage(player)
    {
        window.localStorage.setItem('player', JSON.stringify(player));
    }

        
    
}