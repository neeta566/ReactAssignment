import { useState } from "react";

function CustomComponent(){
    const[x,setx]=useState(10);
    return(
        <>
        <button className="bg-amber-400 py-3 rounded-md text-2xl ml-4 px-3" onClick={()=>{
            setx(x+1);
            console.log(x);
        }}>Click me</button>
        {x}
        </>
    )
}
export default CustomComponent;