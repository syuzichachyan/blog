import React, {Component} from 'react';

class ViewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        }
    }
    getPostId=()=>{return this.props.match.params.id};
    addCommentOnClick = () => {
        const id=this.getPostId();
        const {body} = this.state;
        const usersData = JSON.parse(localStorage.getItem("usersData"))|| [];
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        const onlineUser = usersData.filter(user =>{return  user.isAuthenticated})[0];
        comments.push({
            'author': onlineUser.email,
            'body': body,
            'postId': id,
            'userId': onlineUser.email
        });
        localStorage.setItem("comments", JSON.stringify(comments));
    };
    commentBodyChange = (e) => {
        this.setState({body: e.target.value});
    };

    render() {
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        const post = posts.filter(post => {return  post.id == this.props.match.params.id})[0];
        const usersData = JSON.parse(localStorage.getItem("usersData"))|| [];
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        const commentsOfCurrentPost = comments.filter(el => {return el.id == post.id}) || [];
        const {body}=this.state;

        const onlineUsersPost = usersData.filter(user => { return user.isAuthenticated && user.email === post.author}) || [];
        const onlineUser = usersData.filter(user => {return  user.isAuthenticated})[0];
        return (
            <div>

                <div>
                  <span>{post.author}</span>
                    {(onlineUsersPost.length) ? (<input type="text" value={post.date}  />) : (<span>{post.date}</span>)}
                    {(onlineUsersPost.length) ? (<input type="text" value={post.title}  />) : (<span>{post.title}</span>)}
                    {(onlineUsersPost.length) ? (<input type="text" value={post.body}  />) : (<span>{post.body}</span>)}
                </div>
                <div> Comments</div>
                <div>Author email: {onlineUser.email}</div>
                <input type="text" value={body} onChange={this.commentBodyChange}/>
                <button onClick={this.addCommentOnClick}>Add Comment</button>

                {(commentsOfCurrentPost.length)?commentsOfCurrentPost.forEach(el => {
                    return (
                        <div>
                            el.id
                        </div>
                    )
                }):null}
            </div>


        )
    }

};
export default ViewPost;