import React from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formField/FormField';
import CoolButton from '../coolButton/CoolButton';

// const Signup = () {

// }
function Signup () {
  return (
    <div>
      <Navbar />
      <form>
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
        <FormField 
          label="Password" 
          type="password" 
          placeholder="your password here"
        />
        <CoolButton 
          class="field button is-small is-primary"
          name="Submit"
        />
      </form>
    </div>
  )
}

export default Signup;