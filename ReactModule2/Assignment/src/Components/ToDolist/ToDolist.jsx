import { useState } from "react";

function Todolist(){

const [value,setValue]=useState(" ");
let [task,setTask]=useState([ ]);

const handleInputChange=(value)=>{
    setValue(value);
    
};
 const handleOnClick=()=>{
    document.getElementById('task').focus();
    if(!value) return;
    if(task.includes(value)) {
        setValue(" ");
        return;
    }
    setTask((prev)=>[...prev,value])
    // console.log(task);
    setValue(" ");
        
}

return (
    <div className="userContainer">
        <p className="user">Enter Your Task</p>
        <input id="task" type="text" value={value}
        onChange={(event)=>handleInputChange(event.target.value)}
        ></input>
         <button id="AddBtn" onClick={handleOnClick}>Add Task</button> 
<ul className="ul">
    {
        task.map((curTask,index)=>{
return <li key={index}>{curTask}</li>
        })
    }
    </ul>              
</div>
)
}
export default Todolist;