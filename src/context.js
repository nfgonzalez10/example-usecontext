import React, { useContext } from 'react';

export const themes = {
  dark: {
    backgroundColor: 'black',
    color: 'white'
  },
  light: {
    backgroundColor: 'white',
    color: 'black'
  }
};
const ThemeContext = React.createContext({
  theme: themes.dark,
  setNewTheme: () => {}
});

export default ThemeContext;
