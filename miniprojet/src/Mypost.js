
import React from "react";

class Mypost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		editMode: false,
		editedSubject: "",
		editedDescription: "",
		editedDatep:"",
    };
  }

 

  handleSubjectChange = (e) => {
    this.setState({
        editedSubject: e.target.value,
    });
  };

  handleDescriptionChange = (e) => {
    this.setState({
        editedDescription: e.target.value,
    });
  };

  handleDatepChange = (e) => {
    this.setState({
        editedDatep: e.target.value,
    });
  };

  render() {
    const { subject,description,datep , handleDelete, id } = this.props;
    const { editMode } = this.state;
    return (
      <li>
        <p className="sub-container">
          {editMode ? (
            <input
              placeholder="Subject..."
              onChange={this.handleSubjectChange}
              required
            />
          ) : (
            subject
          )}
        </p>
        <p className="des-container">
          {editMode ? (
            <input
              placeholder="Description..."
              onChange={this.handleDescriptionChange}
              required
            />
          ) : (
            description
          )}
        </p>
		<p className="date-container">
          {editMode ? (
            <input
              placeholder="Date..."
              onChange={this.handleDatepChange}
              required
            />
          ) : (
            datep
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

export default Mypost;
