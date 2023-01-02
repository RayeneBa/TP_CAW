import React, { Component } from "react";

class AddContacts extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      email:"",
    };
  }

  handleChange = (inputType, e) => {
    if (inputType === "name") {
      this.setState({
        name: e.target.value,
      });
      return;
    }else{
    if(inputType === "phone"){
    this.setState({
      phone: e.target.value,
    });
    return;
     }
    this.setState({
        email: e.target.value,
      });
    };
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email } = this.state;
    const { addContact } = this.props;
    if (name && phone && email) {
      addContact(name, phone,email);
      this.setState({
        name: "",
        phone: "",
        email:"",
      });
    }
  };

  render() {
    const { name, phone,email } = this.state;
    return (
      <div id="add-contacts-container">
        <br></br>
        <br></br>
        <br></br>
        <h1>Add Contact</h1>
        <br></br>
        <br></br>
        <form>
          <input
            placeholder="Enter Name"
            value={name}
            required
            onChange={(e) => this.handleChange("name", e)}
          />
          <br></br>
          <input
            placeholder="Enter Phone"
            value={phone}
            required
            onChange={(e) => this.handleChange("phone", e)}
          />
          <br></br>
          <input
            placeholder="Enter Email"
            value={email}
            required
            onChange={(e) => this.handleChange("email", e)}
          />
          <br />
          <button onClick={this.handleSubmit}>Add Contact</button>
        </form>
      </div>
    );
  }
}

export default AddContacts;