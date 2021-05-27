import React, { useState } from 'react';
import InputFields from "./InputFields";
import UserForm from "./UserForm";

function DisplayWizard() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="order">
  
      <button id="create-order" onClick={() => setShowForm(!showForm)}>Create an order</button>
      {showForm && (
        <div>
          <InputFields />
          {/* <UserForm /> */}
        </div>
      )}
    </div>
  )
}

export default DisplayWizard;
