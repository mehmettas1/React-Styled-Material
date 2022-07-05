import Header from "./components/Header";
import {ThemeProvider} from 'styled-components';
import { GlobalStlyes } from "./components/styles/global";


const theme ={
  colors:{
    Header:'#886',
    body: '#fff',
    footer: '#8A1C4A'
  },
  responsive:"768px",
};





const App = () => {
  return (
  <ThemeProvider theme={theme}>
    <GlobalStlyes/>
    <Header/>
  </ThemeProvider>
  );
};

export default App;
