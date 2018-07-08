import React, {Component} from 'react';
import {Redirect, Route, Router} from 'react-router-dom';
import BlogCreate from "../BlogCreate";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            isAuthenticated: false,
        }

    }

    loginChange = (e) => {
        this.setState({login: e.target.value});
    };
    passwordChange = (e) => {
        this.setState({password: e.target.value});
    };
    loginButtonClick = (e) => {
        const {login, password} = this.state;
        if (login.length && password.length == 8) {
            this.setState({isAuthenticated: true});
            let data = JSON.parse(localStorage.getItem('data')) || [];
            if (!data.find(el => el.login === login && el.password === password)) {
                data.push({'login': login, 'password': password});
                localStorage.setItem('data', JSON.stringify(data));

            }

            this.props.history.push('/blog/create');
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
                <input type='text' placeholder="Login" onChange={this.loginChange}/>
                <input type="password" placeholder="Password" onChange={this.passwordChange}/>
                <button onClick={this.loginButtonClick}>LogIn</button>
            </div>)

    }
}

export default Login;