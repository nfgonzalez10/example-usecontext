import React, { useContext, useState } from 'react';
import ThemeContext, { themes } from './context';
import './style.css';

export default function App() {
  const [themeState, setThemeState] = useState(themes.light);
  const colorToChange =
    themeState.backgroundColor === 'black' ? 'light' : 'dark';
  const changeContext = () => {
    setThemeState(themes[colorToChange]);
  };
  return (
    <React.Fragment>
      <ThemeContext.Provider value={themeState}>
        <Main />
        <ChangeContext
          colorToChange={colorToChange}
          changeContext={changeContext}
        />
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

const Main = () => {
  const { backgroundColor, color } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor, color }}>
      <h1>Hello StackBlitz!</h1>
      <p> {JSON.stringify(backgroundColor)}</p>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};

const ChangeContext = ({ colorToChange, changeContext }) => {
  const { backgroundColor, color } = useContext(ThemeContext);
  return (
    <button
      style={{ backgroundColor: color, color: backgroundColor }}
      onClick={changeContext}
    >
      Change to {colorToChange} theme
    </button>
  );
};
