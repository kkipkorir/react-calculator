import React from 'react';

// Importing icons from the images folder
import lightModeIcon from '../images/light-mode-icon.svg'
import darkModeIcon from '../images/dark-mode-icon.svg';

const ThemeToggle = ({ theme, toggleTheme }) => {
    const styleToggleTheme = {
        gridColumn:'span 4',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
    return (
        <div className="theme-toggle" style={styleToggleTheme}>
            <p style={{color:(theme==='dark'?'#fff':'#202229')}}>Kkips Calc</p>
            {/* Clicking on the icon will trigger the toggleTheme function */}
            <img
                src={theme === 'dark' ? lightModeIcon : darkModeIcon}
                alt="Toggle Theme"
                onClick={toggleTheme}
                style={{ cursor: 'pointer', width: '30px', height: '30px' }}
            />
        </div>
    );
};

export default ThemeToggle;
