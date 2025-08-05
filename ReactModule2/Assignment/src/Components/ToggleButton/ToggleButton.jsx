import { useState } from "react";

function ToggleButton(){
    
    

return(
            <div className="userContainer">
                <p className="user">Click on me:I am a Toggle button</p>
                <button id="off" className="increment" 
                onClick={()=>{
                    let x=document.getElementById('off')
                    if(x.innerText==="off"){
                        x.innerText="on";
                    }  else {
                        x.innerText="off"
                    }                                               


                }}
                >off</button>

            </div>

)
}
export default ToggleButton;