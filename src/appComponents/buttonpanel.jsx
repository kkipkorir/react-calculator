import React from "react";
import MyButton from "./button";
import MyDisplay from "./display";
import ThemeToggle from "./theme";
import { useState } from "react";

const ButtonPanel = ({theme,toggleTheme}) => {
const [input,setInput]=useState('');
const [result,setResult]=useState('');
const [isResult,setIsResult]=useState(false);

const evaluate = (theInput)=>{
    /*evaluates*/
    try {
        // Replace symbols with their JavaScript equivalents
        const sanitizedInput = theInput.replace(/÷/g, "/").replace(/×/g, "*");
        
        // Use eval to evaluate the expression
        const evalResult = eval(sanitizedInput);
        
        // If the result is a float with too many decimals, round it
        return evalResult % 1 !== 0 ? evalResult.toFixed(4) : evalResult;
      } catch (error) {
        return "Error";
      }
}

const handleButtonClick = (value)=>{
    const operators = ['+', '-', '×', '÷'];
    let resultValue ='';

    // Prevent more than two consecutive operators
    if (operators.includes(value)) {
      const lastChar = input.slice(-1); // Get the last character

      // Prevent double operator entry (like "++" or "--")
      if (operators.includes(lastChar)) {
        return; // Do nothing if two consecutive operators are detected
      }
    }

    // If equals button is clicked
    if (value === "=") {
      try {
        resultValue = evaluate(input);
        setResult(`${input}=${resultValue}`);
        setInput(String(resultValue)); // Convert result to string
        setIsResult(true); // Mark that the result is shown
      } catch (error) {
        setResult("Error");
      }
    } 
    // If AC button is clicked
    else if (value === "AC") {
      setResult("");
      setInput("");
      setIsResult(false); // Reset the flag
    } 
    // For other button clicks
    else {
      // If result was just shown, start a new input
      if (isResult && !operators.includes(value)) {
        setInput(value); // Start a new input with the clicked number
        setResult(value); // Display the new input
        setIsResult(false); // Reset the flag
      } else {
        if(isResult){
            setInput((prevState) => prevState + value); // Append value to the input
        setResult((prevState) => prevState + value);
        }
        setInput((prevState) => prevState + value); // Append value to the input
        setResult((prevState) => prevState + value); // Append to the result
      }
    }
}

    return (
        <div className={`calculator-grid ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <MyDisplay result={result} input={input} />
            <MyButton iD="clear" kkey="AC" theme={theme} onClicked={handleButtonClick} />
            <MyButton iD="divide" kkey="÷" theme={theme} onClicked={handleButtonClick}/>
            <MyButton iD="multiply" kkey="×" theme={theme} onClicked={handleButtonClick}/>
            <MyButton iD="seven" kkey="7" theme={theme} onClicked={handleButtonClick}/>
            <MyButton iD="eight" kkey="8" theme={theme} onClicked={handleButtonClick}/>
            <MyButton iD="nine" kkey="9" theme={theme} onClicked={handleButtonClick}/>
            <MyButton iD="subtract" kkey="-" theme={theme} onClicked={handleButtonClick}/>
            <MyButton iD="four" kkey="4" theme={theme} onClicked={handleButtonClick}/>
            <MyButton iD="five" kkey="5" theme={theme} onClicked={handleButtonClick}/>
            <MyButton iD="six" kkey="6" theme={theme} onClicked={handleButtonClick}/>
            <MyButton iD="add" kkey="+" theme={theme} onClicked={handleButtonClick}/>
            <MyButton iD="one" kkey="1" theme={theme} onClicked={handleButtonClick}/>
            <MyButton iD="two" kkey="2" theme={theme} onClicked={handleButtonClick}/>
            <MyButton iD="three" kkey="3" theme={theme} onClicked={handleButtonClick}/>
            <MyButton iD="equals" kkey="=" theme={theme} onClicked={handleButtonClick}/>
            <MyButton iD="zero" kkey="0" theme={theme} onClicked={handleButtonClick}/>
            <MyButton iD="decimal" kkey="." theme={theme} onClicked={handleButtonClick}/>
        </div>
    )
}

export default ButtonPanel