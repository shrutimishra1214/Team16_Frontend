import React from 'react';
import Form from "./form.jsx";
import "./style.css";
import Header from '../Navbar';

function AddBond() {
  return(
    <div>
      <Header />
      <div className="bondSytle">
      <p className="title">Add new bond</p>
      <Form />
    </div>
    </div>
  );
}

export default AddBond;