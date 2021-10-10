import React, { useState } from 'react';
import Nav from './components/Navigation'
import About from './components/About'

function App() {
  const [choices] = useState([
    {name:'Portefolio'},
    {name:'Contact'},
    {name: 'Resume'}
  ]);
  const [currentChoice, setCurrentChoice] = useState(choices[0]);
  return (
    <div>
   <Nav
     choices={choices}
     setCurrentChoice={setCurrentChoice}
     currentChoice={currentChoice}

   ></Nav>

    <main>
      <About></About>
    
    </main>
    </div>
  )
  }
export default App;
