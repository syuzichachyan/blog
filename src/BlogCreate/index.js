import React, {Component} from "react";
import {BrowserRouter as Router} from 'react-router-dom';


class BlogCreate extends Component {
  static id=0;
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      title: "",
      body: ""
    }

  }
  onlineUser =()=>{
      const usersData = JSON.parse(localStorage.getItem("usersData"))|| [];

      return usersData.filter(user => {return  user.isAuthenticated})[0];};

  authorOnChange = (e) => {
    this.setState({author: e.target.value});
  };
  dateOnChange = (e) => {
    this.setState({date: e.target.value});
  };

  bodyOnChange = (e) => {
    this.setState({body: e.target.value});
  };
  titleOnChange = (e) => {
    this.setState({title: e.target.value});
  };
  saveOnClick = () => {
    const { date, title, body} = this.state;
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push({'author': this.onlineUser().email, 'date': date, 'title': title, 'body': body,id: BlogCreate.id++});
    localStorage.setItem('posts', JSON.stringify(posts));
    this.props.history.push(`/blog/${BlogCreate.id-1}`);
  };


  render() {
    return (
        <Router>
            <div>
                <span>{this.onlineUser().email}</span>
                <input type="text" placeholder="date" onChange={this.dateOnChange}/>
                <input type="text" placeholder="body" onChange={this.bodyOnChange}/>
                <input type="text" placeholder="title" onChange={this.titleOnChange}/>
                <button onClick={this.saveOnClick}>Save</button>

            </div>
        </Router>
    )
  }

}

export default BlogCreate;