import { useContext } from 'react';
import { FormContext } from './Form';


function Global() {
 

  const formContext = useContext(FormContext);
  const { form, formPast , handleFormChange } = formContext;
  console.table(formPast);
  console.log("===============");
  console.table(form);

  return (
    <div className="Global">
          <h1>Past Values</h1>
      <p>firstName : {form['firstName']}</p>
    </div>
  )
}

export default Global;