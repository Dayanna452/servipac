import React from 'react';
import NavBar from './components/NavBar/NavBar';
import FirstSlide from './components/FirstSlide/FirstSlide';
import Nosotros from './components/Nosotros/Nosotros';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <FirstSlide />
        <Nosotros/> 
        
      </main>
    </React.Fragment>


  );
}

export default App;
