import React from 'react';
import './App.css';

import Nav from './components/Nav/nav.component';
import Highlight from './components/highlight/highlight.component';
import Hero from './components/hero/hero.component';

function App() {
  return (
    <div>
      <Nav />
      <div className='main flex mt-20 mx-14'>
        <Highlight />
        <Hero />
      </div>
    </div>
  );
}

export default App;
