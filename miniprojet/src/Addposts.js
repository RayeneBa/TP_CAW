import React, { Component } from "react";

class Addposts extends Component {
  constructor() {
    super();
    this.state = {
        subject: "",
        description: "",
        datep:"",
      
    };
  }
  
  handleChange = (inputType, e) => {
    if (inputType === "subject") {
      this.setState({
        subject: e.target.value,
      });
      return;
    }else{
    if(inputType === "description"){
    this.setState({
        description: e.target.value,
    });
    return;
     }
    this.setState({
        datep: e.target.value,
      });
    };
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { subject, description, datep } = this.state;
    const { addPost } = this.props;
    if (subject && description && datep) {
      addPost(subject, description,datep);
      this.setState({
        subject: "",
        description: "",
        datep:"",
      });
    }
  };



  render() {
    const { subject, description,datep } = this.state;
    return (
      <div id="add-posts-container">
        <br></br>
        <br></br>
        <br></br>
        <h1>Add Post</h1>
        <br></br>
        <br></br>
        <form>
          <input
            placeholder="Enter the subject"
            value={subject}
            required
            onChange={(e) => this.handleChange("subject", e)}
          />
          <br></br>
          <input
            placeholder="Enter more details"
            value={description}
            required
            onChange={(e) => this.handleChange("description", e)}
          />
          <br></br>
          <input
            placeholder="Enter Date"
            value={datep}
            required
            onChange={(e) => this.handleChange("datep", e)}
          />
          <br />
          <button onClick={this.handleSubmit}>Add The post</button>
        </form>
      </div>
    );
  }
}

export default Addposts;