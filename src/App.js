import React, { useContext, useState } from 'react';
import ThemeContext, { themes } from './context';
import './style.css';

export default function App() {
  const [themeState, setThemeState] = useState({ theme: themes.dark });
  const changeTheme = () => {
    const newTheme =
      themeState.theme.backgroundColor === 'black'
        ? themes['light']
        : themes['dark'];
    setThemeState({ theme: newTheme });
  };
  const value = { theme: themeState.theme, setNewTheme: changeTheme };

  return (
    <React.Fragment>
      <ThemeContext.Provider value={value}>
        <Main />
        <ChangeContext />
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

const Main = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <h1>Hello StackBlitz!</h1>
      <p> {JSON.stringify(theme.backgroundColor)}</p>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};

const ChangeContext = ({ colorToChange }) => {
  const { theme, setNewTheme } = useContext(ThemeContext);
  return (
    <button
      style={{ backgroundColor: theme.color, color: theme.backgroundColor }}
      onClick={setNewTheme}
    >
      Change to {colorToChange} theme
    </button>
  );
};
