import React from "react";

const MyDisplay = ({result,input,theme})=>{

    return(
        <div className="display" id="display">
        <div className='input-display'>{result}</div>
        <div className={`input ${theme === "dark" ? 'dark-mode' : 'light-mode'}`}>{input}</div>
        </div>
    )
}

export default MyDisplay;