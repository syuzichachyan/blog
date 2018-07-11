import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from '../Login';
import BlogPosts from '../BlogPosts';
import BlogCreate from '../BlogCreate';
import ViewPost from "../ViewPost";
import PrivateRoute from  '../PrivateRoute';

class Routers extends Component {
    render() {
        return (
            <Router>
                <Switch>
                        <Route exact path="/" component={BlogPosts}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/blog/posts" component={BlogPosts}/>
                        <PrivateRoute path="/blog/create" component={BlogCreate}/>
                        <PrivateRoute  path="/blog/:id" component={ViewPost}/>

                </Switch>
            </Router>
        )
    }
}

export default Routers;