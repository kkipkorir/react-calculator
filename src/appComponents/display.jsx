import React from "react";

const MyDisplay = ({result,input})=>{

    return(
        <div className="display" id="display">
        <div className="input-display">{result}{ /*  I am kip */}</div>
        <div className="input">{input}</div>
        </div>
    )
}

export default MyDisplay;