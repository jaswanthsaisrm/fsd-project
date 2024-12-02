import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditContact = ({ updateContactHandler }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Safely retrieve state from location
  const contact = location.state?.contact || { name: "", email: "" };

  // Always call hooks at the top level
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are mandatory!");
      return;
    }
    updateContactHandler({ ...contact, name, email });
    navigate("/");
  };

  // Conditional rendering after hook calls
  if (!location.state || !location.state.contact) {
    return <div>Error: No contact data provided!</div>;
  }

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue" onClick={update}>
  Update
</button>

      </form>
    </div>
  );
};


export default EditContact;
