import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formField/FormField';
import CoolButton from './coolButton/CoolButton';
import Signup from './signup/Signup';
import Message from './message/Message';

const App = () => {
  return (
    <div>
      <Navbar/>

      <hr/>
      <FormField 
        label="Name" 
        type="text" 
        placeholder="e.g. Alex Smith"
      />
      <FormField 
        label="Email" 
        type="email" 
        placeholder="e.g. alexsmith@gmail.com"
      />
      <Message />
      <Signup />
    </div>
  )
};

export default App;
