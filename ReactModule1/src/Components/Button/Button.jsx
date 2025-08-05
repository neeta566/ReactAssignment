import getButtonStyling from "./GetButtonStyle";
function Button({buttonType,text,styleType,onClickHandler}){
        return(
        <button
        buttonType={buttonType}
        onClick={onClickHandler}
         className={` text-white ${getButtonStyling(styleType)} rounded-md transition-all ml-10`}>{text}</button>
    )
}
export default  Button;