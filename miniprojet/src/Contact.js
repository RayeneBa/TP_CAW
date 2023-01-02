  import React, { Component } from 'react'
  import './App.css';
  import './Mycontact';
  import './AddContacts';
  import Mycontact from './Mycontact';
  import AddContacts from './AddContacts';
  
  export class Contact extends Component{
  constructor(props){
    super(props)
    this.state = {
      users: [],
      tabType:'cont'
    }
    
  }
    toggleMe=(value)=>{
      this.setState({
        tabType:value
      })
    }
    async componentDidMount() {
      const url = "https://my-json-server.typicode.com/nour5487/mc/add";
      const response = await fetch(url);
      const data = await response.json();
  
      this.setState({
        users: data,
      });
  
      console.log("current state", this.state);
    }
  
    handleDeleteContact = async (id) => {
      let { users } = this.state;
      const url = `https://my-json-server.typicode.com/nour5487/mc/add/${id}`;
      await fetch(url, {
        method: "DELETE",
      });
  
      let updatedUsers = users.filter((user) => user.id !== id);
  
      this.setState({
        users: updatedUsers,
      });


    };
  

    handleAddContact = async (name, phone,email) => {
      let id = Date.now();
      const { users } = this.state;
      const url = "https://my-json-server.typicode.com/nour5487/mc/add";
      await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name,
          phone,
          email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log("ADD CONTACT", json));
  
      let updatedUsers = [{ name, phone,email, id }].concat(users);
  
      this.setState({
        users: updatedUsers,
      });
    };
  
  render(){
    const { users } = this.state;
    return (
      <div className="Contact">
  
        <p> Contact Page </p>
  
        <div className='at1'>
          <button onClick={()=>this.toggleMe('display')}>Display contact</button>
          <button onClick={()=>this.toggleMe('add')}>Add a contact</button>
          
          </div>
         <div>
          <div >
          {
              this.state.tabType==='display' && <div> <ul>
              {users.length === 0 ? (
                <h1>My Contacts List</h1>
                
              ) : (
                users.map((user) => {
                  return (
                    <Mycontact
                      name={user.name}
                      contact={user.phone}
                      eml={user.email}
                      key={user.id}
                      id={user.id}
                      handleDelete={this.handleDeleteContact}
                    />
                  );
                })
              )}
            </ul></div>
            }
            {
              this.state.tabType==='add' && <div className="App">
              <AddContacts addContact={this.handleAddContact} />
              
  
              </div>
            }
            {
              this.state.tabType==='cont' && <div></div>
            }
  
          </div>
        </div>
  
  
  
  
  
  
      </div>
    )
  }}
  
  export default Contact