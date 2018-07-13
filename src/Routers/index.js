import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from '../Login';
import BlogPosts from '../BlogPosts';
import BlogCreate from '../BlogCreate';
import ViewPost from "../ViewPost";
import PrivateRoute from  '../PrivateRoute';
import Error from '../Error';

class Routers extends Component {
    render() {
        return (
            <Router>
                <Switch>
                        <Route exact path="/" component={BlogPosts}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/blog/posts" component={BlogPosts}/>
                        <PrivateRoute exact path="/blog/create" component={BlogCreate}/>
                        <PrivateRoute exact  path="/blog/:id" component={ViewPost}/>
                        <Route component={Error} />
                </Switch>
            </Router>
        )
    }
}

export default Routers;