import React, {Component} from 'react';
import {Redirect, Route, Router} from 'react-router-dom';
import BlogCreate from "../BlogCreate";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            isAuthenticated: false,
            status:"offline"
        }

    }

    loginChange = (e) => {
        this.setState({email: e.target.value});
    };
    passwordChange = (e) => {
        this.setState({password: e.target.value});
    };
    loginButtonClick = (e) => {
        const {login,status} = this.state;
        this.setState({isAuthenticated: true});
        let usersDate = JSON.parse(localStorage.getItem('data')) || [];
        if (!usersDate.find(el => el.login === login)) {
            usersDate.push({'login': login, 'status': status});
            localStorage.setItem('data', JSON.stringify(usersDate));
            this.props.history.push('/blog/posts');
        }

    };

    render() {
        const {login, password, isAuthenticated} = this.state;
        if (isAuthenticated) {
            return (
                <Router>
                    <Route path="/blog/create" component={BlogCreate}/>
                    <Redirect to='/blog/create' login={login} password={password}/>

                </Router>)

        }
                else
            return (<div>
                <input type='text' placeholder="Login" onChange={this.loginChange} minLength="1"/>
                <input type="text" placeholder="Password" onChange={this.passwordChange}/>
                <button onClick={this.loginButtonClick}>LogIn</button>
            </div>)

    }
}

export default Login;