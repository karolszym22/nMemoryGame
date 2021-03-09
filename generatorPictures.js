import {pictures} from "./pictures.js"
export class generatorPictures
{
    constructor()
    {
        this.cardsLock = ["","","","","",""];
    }

    generatorCards()
    {   
        let count = 0;
        let number = 0;
        let number2 = 0;
        for(var i =0; i<3; i++)
        {   
          while(count==0)
          {
            number = Math.floor(Math.random() * 6);
            if(this.cardsLock[number].includes(pictures[i].src)!=true && this.cardsLock[number].length ==0)
            {
                number2 = Math.floor(Math.random() * 6);
                if(number!=number2 && this.cardsLock[number2].includes(pictures[i].src)!=true && this.cardsLock[number2].length ==0)
                {   this.cardsLock[number] = pictures[i].src;
                    this.cardsLock[number2] = pictures[i].src;
                    count++;
                   }
            }
           
          }
          count = 0;  
            
        }
        console.log(this.cardsLock)
        
    }

    addPictures()
    {  
        for(var i=0; i<this.cardsLock.length; i++)
        {
           document.getElementById("card"+(i+1)).setAttribute("style", "background-image: url("+this.cardsLock[i]+");");
        }
    }
       
        
        
            
            

    

}
