import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <div className='h-screen'>
        <Header />
        <Routes>
          <Route path='/aloe-you' element={<Homepage />} />
          <Route path='/aloe-you/shop' element={<ShopPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
