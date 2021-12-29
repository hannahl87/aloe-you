import React from 'react';
import Hero from '../../components/hero/hero.component';
import Highlight from '../../components/highlight/highlight.component';

function Homepage() {
  return (
    <div className='main mt-28 flex flex-col md:grid md:grid-cols-5 md:gap-10'>
      <Highlight />
      <Hero />
    </div>
  );
}

export default Homepage;
