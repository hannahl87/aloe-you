import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import Highlight from './components/highlight/highlight.component';
import Hero from './components/hero/hero.component';

function App() {
  return (
    <div>
      <div className='h-screen'>
        <Header />
        <div className='main mt-28 grid grid-cols-5 gap-10'>
          <Highlight />
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
