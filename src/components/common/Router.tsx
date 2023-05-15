import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';
import PremiumPage from '../../pages/PremiumPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Premium" element = {<PremiumPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
