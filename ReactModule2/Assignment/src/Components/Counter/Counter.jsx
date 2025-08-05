import { useState } from "react";


function Counter(){
    const [count,setCount]=useState(0);
    return(
        <div className="userContainer">
            <p className="count">Count:{count}</p>
            <button className="increment"
             onClick={()=>{
setCount(count+1);
            }}>Increment</button>

            <button className="decrement"
            onClick={()=>{
setCount(count-1);
            }}> Decrement</button>
        </div>
    )
}
export default Counter;