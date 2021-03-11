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
        this.lestPlayBtnn.addEventListener('click', this.checkNicknameLength, false)
        
    }
        
    checkNicknameLength(setAtt)
    {       
           let value = document.getElementById('nickValue').value;
           console.log("moje value:" + value.length);
           if(value.length>8)
           {
            document.getElementById('nickLength').innerHTML = "max number of letters: 8!";
           }else
           {
            sessionStorage.setItem(value,value);
            document.querySelector('.modal-nick').classList.toggle("close");
            document.querySelector('.shadow-box').classList.toggle("close");
           }
             
    }

   

    showModal()
    {
        document.querySelector('.modal').classList.toggle("close");
        document.querySelector('.shadow-box').classList.toggle("close");
    }
}