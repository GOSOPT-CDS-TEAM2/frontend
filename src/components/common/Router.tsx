import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../../pages/Main';
import PremiumPage from '../../pages/PremiumPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/Premium" element = {<PremiumPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
