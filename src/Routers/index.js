import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from '../Login';
import BlogPosts from '../BlogPosts';
import BlogCreate from '../BlogCreate';
import ViewPost from "../ViewPost";
import PrivateRoute from '../PrivateRoute';
import Error from '../Error';

class Routers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usersData: JSON.parse(localStorage.getItem("usersData")) || [],
            comments: JSON.parse(localStorage.getItem("comments")) || [],
            posts: JSON.parse(localStorage.getItem("posts")) || [],
            isAuthenticated: false
        };
    }
    makeAllOffline = () => {
        let {usersData} = this.state;
        usersData = (usersData.length ? usersData.map((el) => {
            el.isAuthenticated = false;
        }) : []);
        localStorage.setItem('usersData', JSON.stringify(usersData));
        this.setState({usersData})

    };
    loginHandler = (email) => {
        const {usersData} = this.state;
        this.makeAllOffline(usersData);
        this.setState({isAuthenticated: true});
        if (!usersData.find(el => el.email === email)) {
            usersData.push({'email': email, 'isAuthenticated': true});
            localStorage.setItem('usersData', JSON.stringify(usersData));
            this.setState({usersData});
        }

    };

     onlineUser = () => {
        const {usersData} =this.state;
        return usersData.filter(user => {
            return user.isAuthenticated
        })[0];
    };
     editPost=(post)=>{
         const {posts}=this.state;
         posts[post.id] = {
             ...post
         };
         this.setState({posts});
         localStorage.setItem("posts",JSON.stringify(posts));

     };

    addPost=(post)=>{
        let {posts}=this.state;
        posts.push(post);
        this.setState({posts});
        localStorage.setItem("posts",JSON.stringify(posts));


    };


    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/"
                           component={props => (<Login {...props} makeAllOffline={this.makeAllOffline} isAuthenticated={this.state.isAuthenticated} loginHandler={this.loginHandler} AuthenticationChange={this.AuthenticationChange}/>)}/>

                    <Route exact path="/login"
                           component={props => (<Login {...props} makeAllOffline={this.makeAllOffline} isAuthenticated={this.state.isAuthenticated} loginHandler={this.loginHandler} AuthenticationChange={this.AuthenticationChange}/>)}/>
                    <Route exact path="/blog/posts" component={props=>(<BlogPosts {...props} posts={this.state.posts}/>)}/>
                    <PrivateRoute exact path="/blog/create" onlineUser={this.onlineUser}  component={props=>(<BlogCreate posts={this.state.posts} onlineUser={this.onlineUser} editPost={this.editPost} addPost={this.addPost}/> ) }/>
                    <PrivateRoute exact path="/blog/:id"  onlineUser={this.onlineUser} component={props=>(<ViewPost onlineUser={this.onlineUser} posts={this.state.posts} id={props.match.params.id} editPost={this.editPost} addPost={this.addPost}/>)}  />
                    <Route component={Error}/>
                </Switch>
            </Router>
        )
    }
}

export default Routers;

