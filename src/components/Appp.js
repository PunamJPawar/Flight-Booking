import RadioButton from "./RadioButton";
import Travellers from "./Travellers";
import Popup from "./popup/Popup";

import { useState } from "react";


function Appp(){
    const [buttonPopup,setButtonPopup]=useState(false);
    
    const[trigger,setTrigger]=useState(false)
   return(
    <div className="Appp">
        <main>
            <h1 style={{color:'white',fontFamily: 'Gill Sans', marginTop:'20px'}}>Book ur Flight</h1>
            <br></br>
            <button className="btn-2" onClick={()=>setButtonPopup(true)}> Traveler |Class</button>
            </main>
            
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            
            
            <RadioButton></RadioButton>
            <Travellers/>

                
     
         </Popup>
         
    

        

    </div>
   )
}

export default Appp