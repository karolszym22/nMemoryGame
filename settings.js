export class settings{
    constructor()
    {
        this.closeModalBttn = document.getElementById('closeModal');
        this.closeModaRanklBttn = document.getElementById('close-modal-rank');
        this.scoreTableBttn = document.getElementById('scoreButton');
        
        
    }
    
    handleModalSettings()
    {
        
        this.closeModalBttn.addEventListener('click', function()
        {
           document.querySelector('.modal').classList.toggle("close");
           document.querySelector('.shadow-box').classList.toggle("close");
        })
        this.closeModaRanklBttn.addEventListener('click', function()
        {
           document.querySelector('.modal-rank').classList.toggle("close");
           document.querySelector('.shadow-box').classList.toggle("close");
        })
        this.scoreTableBttn.addEventListener('click', function()
        {
            document.querySelector('.modal-rank').classList.toggle("close");
            document.querySelector('.modal').classList.toggle("close");
        }
        )
    }

    showModal()
    {
        document.querySelector('.modal').classList.toggle("close");
        document.querySelector('.shadow-box').classList.toggle("close");
    }
}