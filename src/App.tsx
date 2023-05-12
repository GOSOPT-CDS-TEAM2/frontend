import Router from './components/common/Router';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
