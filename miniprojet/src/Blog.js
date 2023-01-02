import React, { Component } from 'react'
import './App.css';
import './Mypost';
import './Addposts';
import Mypost from './Mypost';
import Addposts from './Addposts';



export class Blog extends Component{
constructor(props){
  super(props)
  this.state = {
	blog: [],
	tabType:'cont'
  }
  
}
  toggleMe=(value)=>{
	this.setState({
	  tabType:value
	})
  }

  async componentDidMount() {
	const url = "https://my-json-server.typicode.com/nour5487/Blog/blog";
	const response = await fetch(url);
	const data = await response.json();

	this.setState({
		blog: data,
	});

	console.log("current state", this.state);
  }

  handleDeletePost = async (id) => {
	let { blog } = this.state;
	const url = `https://my-json-server.typicode.com/nour5487/Blog/blog/${id}`;
	await fetch(url, {
	  method: "DELETE",
	});


	let updatedBlog = blog.filter((blog) => blog.id !== id);

	this.setState({
		blog: updatedBlog,
	});


  };


  handleAddPost = async (subject, description,datep) => {
	let id = Date.now();
	const { blog } = this.state;
	const url = "https://my-json-server.typicode.com/nour5487/Blog/blog";
	await fetch(url, {
	  method: "POST",
	  body: JSON.stringify({
		subject,
		description,
		 datep,
	  }),
	  headers: {
		"Content-type": "application/json; charset=UTF-8",
	  },
	})
	  .then((response) => response.json())
	  .then((json) => console.log("ADD BLOG", json));

	let updatedBlog = [{ subject, description,datep, id }].concat(blog);

	this.setState({
		blog: updatedBlog,
	});
  };





render(){
  const { blog } = this.state;
  return (
	<div className="Blog">

	  <p> Blog Page </p>

	  <div className='at2'>
	  <button onClick={()=>this.toggleMe('display')}>All posts</button>
		<button onClick={()=>this.toggleMe('add')}>Create a post</button>
		
	  </div>
	  <div>
		<div >
		{
			this.state.tabType==='display' && <div> <ul>
			{blog.length === 0 ? (
			  <h1>My posts List</h1>
			  
			) : (
				blog.map((blog) => {
				return (
				  <Mypost
				  subject={blog.subject}
				  description={blog.description }
					datep={blog.datep}
					key={blog.id}
					id={blog.id}
					handleDelete={this.handleDeletePost}
				
				  />
				);
			  })
			)}
		  </ul></div>
		  }
		  {
			this.state.tabType==='add' && <div className="App">
			<Addposts addPost={this.handleAddPost} />
			

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

export default  Blog
