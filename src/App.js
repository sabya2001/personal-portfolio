import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NavToggler from './components/NavToggler';
import ContactMe from './components/ContactMe';
import LandingPage from './components/LandingPage';
function App() {
  const [valueOfToggler, setValueOfToggler] = useState("HOME")
  function returnMainContent() {
    if (valueOfToggler == "HOME")
      return <LandingPage />
    else if (valueOfToggler == "CONTACT")
      return <ContactMe />
  }
  return (
    <main>

      <Header heading={valueOfToggler} />
      <section className='container-content-toggler'>
          <div className='app-container'>
            {returnMainContent()}
          </div>
          <NavToggler setValueOfToggler={setValueOfToggler} />
      </section>
      
    </main>
  );
}

export default App;
