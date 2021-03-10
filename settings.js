export class settings{
    constructor()
    {
        this.closeModalBttn = document.getElementById('closeModal');
        this.scoreTableBttn = document.getElementById('scoreButton');
    }
    
    handleModalSettings()
    {
        this.closeModalBttn.addEventListener('click', function()
        {
           this.closeModalBttn.classList.toggle('close');
        })
    }
}