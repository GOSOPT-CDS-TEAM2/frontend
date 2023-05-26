import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

import { GlobalStyle } from './styles/globalStyle';
import Router from './components/common/Router';
import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
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
