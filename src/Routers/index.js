import React,{Component} from 'react';
import { Switch,BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../Login';
import Blogs from '../Blogs';
import BlogCreate from '../BlogCreate';
class  Routers extends Component{
    render() {
        return (
        <Router>
            <Route exact path="/" component={Blogs}/>
            <Route  path="/login" component={Login}/>
            <Route exact path="/" component={BlogCreate}/>//change to private route
        </Router>
        )
    }
}
export default Routers;