import React from 'react'
import './App2.css';
import LandingPage from './LandingPage';

  // dark mode 
import { Toggle } from './components/Toggle';
import { useDarkMode } from './styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';






function App() {

  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
    <div >
       
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <LandingPage/>
        
    </div>
    </ThemeProvider>
  );
}
export default App;
