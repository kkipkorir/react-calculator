import React from "react";
import { useState } from "react";

const MyButton = ({iD,kkey,theme,onClicked})=>{

    const [input,setInput] = useState('')

    const handleButtonClick = () =>{
        setInput(kkey);
        if(onClicked){
            onClicked(kkey);
        }
    }

    return(
        <button id={iD} className={`${theme==="dark"?iD:iD+' light-mode'}`} onClick={handleButtonClick}>
        {kkey}
        </button>
    )
}

export default MyButton;