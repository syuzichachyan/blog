import React, {Component} from "react";
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import Login from "../Login";


class BlogCreate extends Component {
    static id = (JSON.parse(localStorage.getItem('posts')) || []).length;

    constructor(props) {
        super(props);
        this.state = {
            date: (this.props.item) ? this.props.item.date : "",
            title: (this.props.item) ? this.props.item.title : "",
            body: (this.props.item) ? this.props.item.body : "",
            isSaveClicked: false
        }

    }


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
                'author': Login.onlineUser().email,
                'date': date,
                'title': title,
                'body': body,
                id: this.props.item.id
            };
        else
            posts.push({
                'author': Login.onlineUser().email,
                'date': date,
                'title': title,
                'body': body,
                id: BlogCreate.id++
            });
        localStorage.setItem('posts', JSON.stringify(posts));
        this.setState({isSaveClicked: true});

    };

    render() {
        const {isSaveClicked} = this.state;
        let {isItOnlineUsersPost} = this.props;
        if (isSaveClicked)
            return (<Redirect to={"/blog/posts"}/>);
        return (
            <Router>
                <div>
                    <h1>{Login.onlineUser().email}</h1>
                    {!(isItOnlineUsersPost === false) ?
                        <div>
                            <div>

                                <input type="text" placeholder="date" onChange={this.dateOnChange}
                                       value={this.state.date}/>
                            </div>
                            <div>
                                <input type="text" placeholder="body" onChange={this.bodyOnChange}
                                       value={this.state.body}/>
                            </div>
                            <div>
                                <input type="text" placeholder="title" onChange={this.titleOnChange}
                                       value={this.state.title}/>

                            </div>
                            <button onClick={this.saveOnClick}>Save</button>
                        </div> :
                        <div>
                            <div>date {this.state.date}</div>
                            <div>body {this.state.body}</div>
                            <div>title {this.state.title}</div>
                        </div>}
                </div>
            </Router>
        )
    }

}

export default BlogCreate;