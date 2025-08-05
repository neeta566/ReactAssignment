import { useState } from "react";
import Button from "../Button/Button";
import InputBox from "../Button/InputBox";




function TextInputForm({onSubmit}){

    const [value,setValue]=useState('');

    function handleFormSubmit(event){
        event.preventDefault();
        console.log('form submited',value);
        onSubmit?.(value);
            }
function handleTextInputChange(event){
    console.log('text input changes');
    console.log(event.target.value);
    setValue(event.target.value);
}


    return (
        <>
        
        <div className="flex">
            <h1 className="text-2xl">show and hide</h1>
        <form className="flex mt-6" onSubmit={handleFormSubmit}>
            <div className="flex-1/2">
                <InputBox label="Enter a word or pharse" type="password"
                onChange={handleTextInputChange}

                />
                </div>

                <div>                <Button text="ok" styleType="primary" type="Submit"
                ></Button>

                {/* <Button text="ok" styleType="primary"></Button> */}
                            </div>
        </form>
        </div>
        </>
    )
}
export default TextInputForm;