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
           document.querySelector('.modal').classList.toggle("close");
           document.querySelector('.shadow-box').classList.toggle("close");
        })
    }

    showModal()
    {
        document.querySelector('.modal').classList.toggle("close");
        document.querySelector('.shadow-box').classList.toggle("close");
    }
}