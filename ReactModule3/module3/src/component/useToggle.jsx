import { useState } from "react";
//custom hook
function useToggle(defaultVal){
    
    const [value,setValue]=useState();
    function toggleValue(val){
        if(typeof val!='boolean'){
            setValue(!value)
        } else{
            setValue(val)
        }
    }
    return [value,toggleValue];
    
}
export default useToggle;