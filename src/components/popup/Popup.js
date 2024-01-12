import React from "react";
import './popup.css'


function Popup(props){
   return(props.trigger)?(
    <div className="popup">
        {/* <div className="popup-inner"> */}
        <div className="container shadow p-3 mb-5 bg-body-tertiary rounded search-form" style={{border:"1px solid #6886a4", position:"relative"}}>
            {props.children}
            <button className="close-btn" onClick={()=>props.setTrigger(false)}>X</button>
        </div>
        

        
    </div>
       ): "";
   
}
export default Popup