import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';
import Membership from '../../pages/Membership';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
