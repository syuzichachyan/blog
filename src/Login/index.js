import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isAuthenticated: false,

    }

  }

  loginChange = (e) => {
    this.setState({email: e.target.value});
  };

  loginButtonClick = (e) => {
    const {email} = this.state;
    let usersData = JSON.parse(localStorage.getItem('usersData')) || [];
    this.setState({isAuthenticated: true});
    if (!usersData.find(el => el.email === email)) {
      usersData.push({'email': email, 'isAuthenticated': true});
      localStorage.setItem('usersData', JSON.stringify(usersData));
    }

  };

  render() {

    const {isAuthenticated} = this.state;
    if (isAuthenticated) {
      return (
        <Redirect to="/blog/posts"/>)
    }
    else
      return (
        <div>
          <input type='text' placeholder="Login" onChange={this.loginChange} minLength="1"/>
          <input type="password" placeholder="Password"/>
          <button onClick={this.loginButtonClick}>LogIn</button>
        </div>
      )

  }
}

export default Login;