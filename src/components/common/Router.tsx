import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../../pages/Main';
import Membership from '../../pages/Membership';
import PremiumPage from '../../pages/PremiumPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/premium" element = {<PremiumPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
