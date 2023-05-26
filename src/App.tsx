import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import Router from './components/common/Router';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div></div>}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
