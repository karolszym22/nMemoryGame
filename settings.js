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
               setAtt;
           }else
           {
               console.log("udało się!");
           }
             
    }

    setAttention()
    {
        let nickLength = document.getElementById('nickLength');
        nickLength.innerHTML = "max number of letters: 8!";
        console.log("set");
    }

    showModal()
    {
        document.querySelector('.modal').classList.toggle("close");
        document.querySelector('.shadow-box').classList.toggle("close");
    }
}