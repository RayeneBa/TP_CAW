
import React from "react";

class Mycontact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		editMode: false,
		editedName: "",
		editedPhone: "",
		editedEmail:"",
    };
  }


  handleNameChange = (e) => {
    this.setState({
      editedName: e.target.value,
    });
  };

  handlePhoneChange = (e) => {
    this.setState({
      editedPhone: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      editedEmail: e.target.value,
    });
  };

  render() {
    const { name, contact,eml, handleDelete, id } = this.props;
    const { editMode } = this.state;
    return (
      <li>
        <p className="name-container">
          {editMode ? (
            <input
              placeholder="Name..."
              onChange={this.handleNameChange}
              required
            />
          ) : (
            name
          )}
        </p>
        <p className="phone-container">
          {editMode ? (
            <input
              placeholder="Phone..."
              onChange={this.handlePhoneChange}
              required
            />
          ) : (
            contact
          )}
        </p>
		<p className="email-container">
          {editMode ? (
            <input
              placeholder="email..."
              onChange={this.handleEmailChange}
              required
            />
          ) : (
            eml
          )}
        </p>
        <p className="btns-container">
         
          <img
            className="list-btn"
            onClick={() => handleDelete(id)}
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            alt="delete-btn"
          />
        </p>
      </li>
    );
  }
}

export default Mycontact;
