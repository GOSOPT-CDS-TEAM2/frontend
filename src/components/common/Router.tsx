import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../../pages/Main';
import Membership from '../../pages/Membership';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
