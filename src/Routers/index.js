import React,{Component} from 'react';
import { Switch,BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../Login';
class  Routers extends Component{
    render() {
        return (
        <Router>
            <Route exact path="/" component={Login}/>
        </Router>
        )
    }
}
export default Routers;