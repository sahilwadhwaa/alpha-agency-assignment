import React from 'react';
//importing all the components
import { LandingPage } from './components/LandingPage';
import { Form } from './components/Form';
import { Benefits } from './components/Benefits';
import { WhyUs } from './components/WhyUs';
import { Footer } from './components/Footer';

function App() {
  //this is the logic for scrolling the user up to the form
  const scrollToForm = () => {
    const formElement = document.getElementById('form');
    if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <LandingPage />
      <div className='block md:hidden'>
        <Form />
      </div>
      <Benefits scrollToForm={scrollToForm} />
      <WhyUs scrollToForm={scrollToForm} />
      <Footer />
    </div>

  );
}

export default App;
