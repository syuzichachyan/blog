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
    makeAllOffline = (usersData) => {
        return (usersData.length ? usersData.map((el) => {
            el.isAuthenticated = false;
            return el;
        }) : []);
    };
    loginButtonClick = (e) => {
        const {email} = this.state;
        let usersData = this.makeAllOffline(JSON.parse(localStorage.getItem('usersData')) || []);
        this.setState({isAuthenticated: true});
        if (!usersData.find(el => el.email === email)) {
            usersData.push({'email': email, 'isAuthenticated': true});
            localStorage.setItem('usersData', JSON.stringify(usersData));
        }

    };

    render() {

        const {isAuthenticated} = this.state;
        if (isAuthenticated && this.props.location.state)
            return <Redirect to={this.props.location.state.from}/>;
        if (isAuthenticated) {
            return (
                <Redirect to="/blog/posts"/>)
        }

        else
            return (
                <div>
                    <input type='email' placeholder="Login" onChange={this.loginChange}/>
                    <input type="password" placeholder="Password" />
                    <button onClick={this.loginButtonClick}>LogIn</button>
                </div>
            )

    }
}

export default Login;