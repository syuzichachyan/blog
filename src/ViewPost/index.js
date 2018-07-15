import React, {Component} from 'react';
import BlogCreate from "../BlogCreate";
import Comments from "../Comments";

class ViewPost extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.id
        }
    }



    filterPostWithId = (id) => {
        const {posts} = this.props;
        return (
            posts.find(post => {
                return post.id === +id
            }))
    };

    render() {
        const post = this.filterPostWithId(this.state.id);
        const {onlineUser} = this.props;
        return (
            <div>
                <BlogCreate item={post} isItOnlineUsersPost={onlineUser().email === post.author} onlineUser={onlineUser} editPost={this.props.editPost} addPost={this.props.addPost} />
                <Comments postId={this.state.id} author={onlineUser().email}/>
            </div>


        )
    }

};
export default ViewPost;