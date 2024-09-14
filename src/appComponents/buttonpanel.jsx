import React from "react";
import MyButton from "./button";
import MyDisplay from "./display";
import ThemeToggle from "./theme";


const ButtonPanel = ({theme,toggleTheme}) => {

    return (
        <div className={`calculator-grid ${theme === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <MyDisplay />
            <MyButton iD="clear" kkey="AC" />
            <MyButton iD="divide" kkey="÷" />
            <MyButton iD="multiply" kkey="×" />
            <MyButton iD="seven" kkey="7" />
            <MyButton iD="eight" kkey="8" />
            <MyButton iD="nine" kkey="9" />
            <MyButton iD="subtract" kkey="-" />
            <MyButton iD="four" kkey="4" />
            <MyButton iD="five" kkey="5" />
            <MyButton iD="six" kkey="6" />
            <MyButton iD="add" kkey="+" />
            <MyButton iD="one" kkey="1" />
            <MyButton iD="two" kkey="2" />
            <MyButton iD="three" kkey="3" />
            <MyButton iD="equals" kkey="=" />
            <MyButton iD="zero" kkey="0" />
            <MyButton iD="decimal" kkey="." />
        </div>
    )
}

export default ButtonPanel