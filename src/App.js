import React from 'react';
import Accordion from './State-Drills/Accordion'
import sections from './State-Drills/Section'

function App() {
  return (
    <main className='App'>
      <Accordion sections={sections} />
    </main>
  );
}

export default App;