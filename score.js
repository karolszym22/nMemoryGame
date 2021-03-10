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

        
    
}