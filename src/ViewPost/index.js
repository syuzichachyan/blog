import React, {Component} from 'react';
import Comment from "../Comment";
import BlogCreate from "../BlogCreate";

class ViewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            flag:true
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
        });
        localStorage.setItem("comments", JSON.stringify(comments));
        this.setState({flag:false})
    };
    commentBodyChange = (e) => {
        this.setState({body: e.target.value});
    };


    render() {
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        const post = posts.find(post => {return  post.id === +this.props.match.params.id});
        const usersData = JSON.parse(localStorage.getItem("usersData"))|| [];
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        const commentsOfCurrentPost = comments.filter(el => {return +el.postId === post.id}) || [];
        const {body}=this.state;

        const isItOnlineUsersPost = usersData.some(user => { return user.isAuthenticated && user.email === post.author});
        return (
            <div>

                <div>
                    <BlogCreate item={post} isItOnlineUsersPost={isItOnlineUsersPost}/>

                </div>
                <div> Comments</div>
                {this.state.flag? <input type="text" value={body} onChange={this.commentBodyChange}/>:null}
                {this.state.flag?  <button onClick={this.addCommentOnClick}>Add Comment</button>:null}

                {(commentsOfCurrentPost.length)?commentsOfCurrentPost.map((el,index) => {

                    return (
                        <Comment item={el} key={index}/>
                    )
                }):null}
            </div>


        )
    }

};
export default ViewPost;