export class settings{
    constructor()
    {
        this.closeModalBttn = document.getElementById('closeModal');
        this.closeModaRanklBttn = document.getElementById('close-modal-rank');
        this.scoreTableBttn = document.getElementById('scoreButton');
        this.lestPlayBtnn = document.getElementById('letsPlay');
        
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
        })
        this.lestPlayBtnn.addEventListener('click', function()
        {
            document.querySelector('.shadow-box').classList.toggle("close");
            document.querySelector('.modal-nick').classList.toggle("close");
        })
        
    }
        
    checkNicknameLength()
    {
        this.lestPlayBtnn.addEventListener('click', function()
        {
            
        })
    }

    showModal()
    {
        document.querySelector('.modal').classList.toggle("close");
        document.querySelector('.shadow-box').classList.toggle("close");
    }
}