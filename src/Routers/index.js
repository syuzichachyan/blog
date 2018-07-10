import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from '../Login';
import BlogPosts from '../BlogPosts';
import BlogCreate from '../BlogCreate';
import ViewPost from "../ViewPost";

class Routers extends Component {
    render() {
        return (
            <Router>
                <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/blog/posts" component={BlogPosts}/>
                        <Route path="/blog/create" component={BlogCreate}/>
                        <Route path="/blog/:id" component={ViewPost}/>

                </Switch>
            </Router>
        )
    }
}

export default Routers;