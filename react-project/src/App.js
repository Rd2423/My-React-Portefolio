import React, { useState } from 'react';
import Nav from './components/Navigation'
import About from './components/About'
import Gallery from './components/Project/Gallery'
import ContactForm from './components/Footer/Contact';

function App() {
  const [choices] = useState([
    {name: 'About Me'},
    {name:'Portefolio'},
    {name: 'Resume'},
    // {name:'Contact'}
  ]);
  const [currentChoice, setCurrentChoice] = useState(choices[0]);

  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
   <Nav
     choices={choices}
     setCurrentChoice={setCurrentChoice}
     currentChoice={currentChoice}
    setContactSelected={setContactSelected}
    contactSelected={contactSelected}
   ></Nav>
 
    <main>
      {!contactSelected ? (
        <>
        <About currentChoice={currentChoice}></About>
        
        </>
      ) : (
        <>
        <div>
        <ContactForm></ContactForm>
        </div>
        <div>
        <Gallery></Gallery>
        </div>
        </>
      
      )
}
    </main>
    </div>
  )
  }
export default App;
