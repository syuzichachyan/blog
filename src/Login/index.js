import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import style from './style';
import {withStyles} from '@material-ui/core/styles';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        }

    }


    loginChange = (e) => {
        this.setState({email: e.target.value});
    };

    loginButtonClick = (e) => {
        const {loginHandler}=this.props;
        const {email} = this.state;
        loginHandler(email);

    };

    render() {
        const {classes,isAuthenticated} = this.props;
        if (isAuthenticated && this.props.location.state)
            return <Redirect to={this.props.location.state.from}/>;
        if (isAuthenticated) {
            return (<Redirect to="/blog/posts"/>);
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