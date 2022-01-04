//import 'bulma/css/bulma.css';
import React from 'react';
import './formField.css'


function FormField(props) {
    return(
      <div className='field'>
        <label className='label'>{props.label}</label>
        <div className="control">
          <input className="input" type={props.text} placeholder={props.placeholder}/>
        </div>
      </div>
    )
}

export default FormField;