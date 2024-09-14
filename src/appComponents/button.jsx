import React from "react";

const MyButton = ({iD,kkey})=>{

    return(
        <button id={iD} className={iD}>
        {kkey}
        </button>
    )
}

export default MyButton;