
function getButtonStyling(styleType){
   const primaryButtonStyling="bg-blue-500 border-blue-900 px-4 py-2 text-2xl cursor-pointer";
    const secondaryButtonStyling="bg-gray-500 border-blue-900 rounded-md text-black transition-all px-4 py-2 text-2xl cursor-pointer";
    const warningButtonStyling="bg-yellow-500 border-yello-900 px-4 py-2 hover:border-yellow-900 text-2xl cursor-pointer";
     const errorButtonStyling="bg-red-500 border-yello-900 px-4 py-2 hover:border-yellow-900 text-2xl cursor-pointer";


    if(styleType==="primary"){
        return primaryButtonStyling
    }else if(styleType==="secondary"){
        return secondaryButtonStyling
    }else if(styleType==="warning"){
        return warningButtonStyling
    }else if (styleType==="error"){
        return errorButtonStyling
 }else{ primaryButtonStyling}
    }


export default getButtonStyling;