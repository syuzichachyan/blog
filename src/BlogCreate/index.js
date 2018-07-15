import React, {Component} from "react";
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
class BlogCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: (this.props.item) ? this.props.item.title : "",
            body: (this.props.item) ? this.props.item.body : "",
            postButtonClicked:false
        }
    }

    bodyOnChange = (e) => {
        this.setState({body: e.target.value});
    };
    titleOnChange = (e) => {
        this.setState({title: e.target.value});
    };

    saveOnClick = () => {
        const {title, body} = this.state;
        const {addPost, editPost, onlineUser, posts} = this.props;

        if (body.trim() !== "" || title.trim() !== "") {
            this.setState({isSaveClicked: true});
            if (this.props.item)
                editPost({
                    'author': onlineUser().email,
                    'title': title,
                    'body': body,
                    id: this.props.item.id
                });
            else {
                addPost({
                    'author': onlineUser().email,
                    'title': title,
                    'body': body,
                    id: posts.length
                });

            }

        }

    };

    postButtonClicked=()=>{
        this.setState({postButtonClicked:true});
    };
    render() {

        let {isItOnlineUsersPost, onlineUser} = this.props;
        if(this.state.postButtonClicked)
            return <Redirect to={"/blog/posts"}/>;
        return (

            <Router>
                <div>
                    <h1>{onlineUser().email}</h1>
                    {!(isItOnlineUsersPost === false) ?
                        <div>
                            <div>
                                <input type="text" placeholder="title" onChange={this.titleOnChange}
                                       value={this.state.title}/>

                            </div>
                            <div>
                                <input type="text" placeholder="body" onChange={this.bodyOnChange}
                                       value={this.state.body}/>
                            </div>

                            <button onClick={this.saveOnClick}>Save</button>
                        </div> :
                        <div>
                            <div>body {this.state.body}</div>
                            <div>title {this.state.title}</div>
                        </div>}
                        <button onClick={this.postButtonClicked}>Back to Posts</button>
                </div>
            </Router>
        )
    }

}

export default BlogCreate;