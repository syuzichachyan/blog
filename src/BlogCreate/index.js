import React, {Component} from "react";
import {BrowserRouter as Router, Redirect} from 'react-router-dom';


class BlogCreate extends Component {
    static id = (JSON.parse(localStorage.getItem('posts')) || []).length;

    constructor(props) {
        super(props);
        this.state = {
            date: (this.props.item) ? this.props.item.title : "",
            title: (this.props.item) ? this.props.item.date : "",
            body: (this.props.item) ? this.props.item.body : "",
            isSaveClicked:false
        }

    }

    onlineUser = () => {
        const usersData = JSON.parse(localStorage.getItem("usersData")) || [];

        return usersData.filter(user => {
            return user.isAuthenticated
        })[0];
    };

    dateOnChange = (e) => {
        this.setState({date: e.target.value});
    };

    bodyOnChange = (e) => {
        this.setState({body: e.target.value});
    };
    titleOnChange = (e) => {
        this.setState({title: e.target.value});
    };
    saveOnClick = () => {
        const {date, title, body} = this.state;
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        if (this.props.item)
            posts[this.props.item.id] = {
                'author': this.onlineUser().email,
                'date': date,
                'title': title,
                'body': body,
                id: this.props.item.id
            };
        else
            posts.push({
                'author': this.onlineUser().email,
                'date': date,
                'title': title,
                'body': body,
                id: BlogCreate.id++
            });
        localStorage.setItem('posts', JSON.stringify(posts));
        this.setState({isSaveClicked:true});

    };


    render() {
        const {isSaveClicked}=this.state;
        let {isItOnlineUsersPost}=this.props;
        isItOnlineUsersPost= isItOnlineUsersPost==undefined || isItOnlineUsersPost ?true:false;

        if(isSaveClicked)
            return (<Redirect to={"/blog/posts"}/>);

        return (
            <Router>
                <div>
                    <span>{this.onlineUser().email}</span>
                    {(isItOnlineUsersPost)?  <input type="text" placeholder="date" onChange={this.dateOnChange} value={this.state.date}/>:(<div>date {this.state.date}</div>)}
                    {(isItOnlineUsersPost)? <input type="text" placeholder="body" onChange={this.bodyOnChange} value={this.state.body}/>:(<div>body  {this.state.body}</div>)}
                    {(isItOnlineUsersPost)? <input type="text" placeholder="title" onChange={this.titleOnChange} value={this.state.title}/>:(<div>title {this.state.title}</div>)}
                    {(isItOnlineUsersPost)?  <button onClick={this.saveOnClick}>Save</button>:null}

                </div>
            </Router>
        )
    }

}

export default BlogCreate;