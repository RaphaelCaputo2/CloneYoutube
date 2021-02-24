import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme, makeStyles, Button } from '@material-ui/core';
import Home from '../src/Components/Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [aviso, setAviso] = useState(true);



const handleChange = () => {
    setAviso(false)
}


  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3EA6FF',
      },
      background: {
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#FFF',
      },
    },
  });

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
      
      {!!aviso ? <div><h1> Atenção, esse site foi feito para estudos!</h1> <Button 
         variant="contained" color="secondary" disableElevation
         onClick={() => handleChange()}>Entrar no YouTube/CLone Por Raphael Caputo - </Button> </div> : <Home darkMode={darkMode} setDarkMode={setDarkMode} />}
      </div>
    </ThemeProvider>
  );
}

export default App;