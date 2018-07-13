import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import style from './style';
import {withStyles} from '@material-ui/core/styles';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            isAuthenticated: false,
            usersData: JSON.parse(localStorage.getItem("usersData")) || []

        }

    }

    static onlineUser = () => {
        const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
        return usersData.filter(user => {
            return user.isAuthenticated
        })[0];
    };

    loginChange = (e) => {
        this.setState({email: e.target.value});
    };
    makeAllOffline = (usersData) => {
        usersData = (usersData.length ? usersData.map((el) => {
            el.isAuthenticated = false;
        }) : []);
        localStorage.setItem('usersData', JSON.stringify(usersData));
        this.setState({usersData})

    };
    loginButtonClick = (e) => {
        const {email} = this.state;
        const {usersData} = this.state;
        this.makeAllOffline(usersData);
        this.setState({isAuthenticated: true});
        if (!usersData.find(el => el.email === email)) {
            usersData.push({'email': email, 'isAuthenticated': true});
            localStorage.setItem('usersData', JSON.stringify(usersData));
            this.setState({usersData});
        }

    };

    render() {
        const {classes} = this.props;
        const {isAuthenticated} = this.state;
        if (isAuthenticated && this.props.location.state)
            return <Redirect to={this.props.location.state.from}/>;
        if (isAuthenticated) {
            return (
                <Redirect to="/blog/posts"/>)
        }

        else
            return (
                <form className={classes.root} onSubmit={this.loginButtonClick}>
                    <input type="email" value={this.state.email} onChange={this.loginChange}/>
                    <input type="password" minLength="8"/>
                    <input type="submit" value="Login"/>
                </form>
            )

    }
}

export default withStyles(style)(Login);