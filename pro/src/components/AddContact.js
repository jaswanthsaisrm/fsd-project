import React, { Component } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state); // Add contact
    this.setState({ name: "", email: "" }); // Reset state after adding
    this.props.navigate("/"); // Navigate to the home page
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

// Wrapping the AddContact class component with a function to use useNavigate hook
const AddContactWithNavigate = (props) => {
  const navigate = useNavigate(); // Get navigate function
  return <AddContact {...props} navigate={navigate} />;
};

export default AddContactWithNavigate;
