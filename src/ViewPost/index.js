import React, {Component} from 'react';
import BlogCreate from "../BlogCreate";
import Comments from "../Comments";
import Login from "../Login";

class ViewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            posts: JSON.parse(localStorage.getItem("posts")) || []
        }
    }

    getPostId = () => {
        return this.props.match.params.id
    };


    filterPostWithId = (id) => {
        const {posts} = this.state;
        return (
            posts.find(post => {
                return post.id === +this.props.match.params.id
            }))
    };


    render() {

        const post = this.filterPostWithId(this.getPostId());
        const onlineUser = Login.onlineUser();
        return (
            <div>
                <BlogCreate item={post} isItOnlineUsersPost={onlineUser.email === post.author}/>
                <Comments postId={this.getPostId()} author={onlineUser.email}/>
            </div>


        )
    }

};
export default ViewPost;