import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <div className='h-screen'>
        <Header />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
