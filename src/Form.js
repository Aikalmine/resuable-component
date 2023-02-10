import React from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import useUndoable from 'use-undoable';
import './Form.css';

export const FormContext = React.createContext({
  form: {}, //contain original values
  formPast: {} //contain past values
});

function Form(props) {
  const { children, initialValues } = props;
  // console.log(children);
  const unDoAbleOptions = {
    behavior: 'mergePastReversed',
    historyLimit: 1 
} 
const [
  form,
  setForm,
  {
      past : pastForm
  }
] = useUndoable(initialValues, unDoAbleOptions);

  // const [form, setForm] = (initialValues);

  const handleFormChange = (event) => {
    // Get the name of the field that caused this change event
    // Get the new value of this field
    const { name, value } = event.target;

    // Update state
    // Assign new value to the appropriate form field
    setForm({
      ...form,
      [name]: value
    });
    // console.log(form);
    // console.table(pastForm)
    reactLocalStorage.setObject('adrForm1', form);
  };

  return (
    <form className="Form">
      <FormContext.Provider value={{
        form,
        pastForm,
        handleFormChange
      }}>
        {children}
      </FormContext.Provider>
    </form>
  );
}

export default Form;