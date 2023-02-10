import { useContext, useState } from 'react';
import './App.css';
import Form, { FormContext } from './Form';
// import {FormContext} from './Form';
import FormInput from './FormInput';
import Global from './global';

function App() {
 

  const initialValues = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  };



  return (
    <div className="App">
      <h3>Form undoable & Local Storage</h3>

      <Form  initialValues={initialValues}>
        <FormInput 
          label="First Name" 
          name="firstName" />
        <FormInput 
          label="Last Name" 
          name="lastName" />
        <FormInput 
          label="Email Address" 
          type="email" 
          name="emailAddress" />
        <FormInput 
          label="Password" 
          type="password" 
          name="password" />
            <Global/>
      </Form>
    

      {/* <h2>Log In</h2>
      <Form
        submit={(form) => {
          alert(`Logged in as ${form.username}!`);
        }}
        initialValues={{
          username: '',
          password: ''
        }}>
        <FormInput
          label="Username"
          name="username" />
        <FormInput
          label="Password"
          name="password" />
      </Form> */}
    </div>
  );
}

export default App;
