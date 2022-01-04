import React from 'react';
import Navbar from './navbar/Navbar';
import FormField from './formField/FormField';

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <FormField label="Name" text="text" placeholder="e.g. Alex Smith"/>
      <FormField label="Email" text="email" placeholder="e.g. alexsmith@gmail.com"/>

    </div>
  )
};

export default App;
