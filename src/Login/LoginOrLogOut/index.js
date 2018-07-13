import React, {Component} from 'react';
import BlogCreate from './';

class LoginOrLogOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: BlogCreate.onlineUser()
        }

    }



    changeValue() {
        const {isAuthenticated} = this.state;
        this.setState({
            isAuthenticated: !isAuthenticated
        })
    }

    render() {
        return <button onClick={this.changeValue}>{!this.state.isAuthenticated ? 'Log In' : 'Log Out'}</button>;

    }
}
export default LoginOrLogOut;


