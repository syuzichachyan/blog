import React, {Component} from 'react';
import Comment from "./Comment";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: JSON.parse(localStorage.getItem("comments")) || [],
            body: "",
        }
    }

    addCommentOnClick = () => {
        const {body} = this.state;
        let {comments} = this.state;
        const {postId} = this.props;
        const {author} = this.props;
        if (body.trim() !== "") {
            comments.push({body, postId, author});
            localStorage.setItem("comments", JSON.stringify(comments));
            this.setState({comments});
            this.setState({body: ""})
        }

    };

    commentBodyChange = (e) => {
        this.setState({body: e.target.value});
    };

    filterCommentsWithId = () => {
        const {postId} = this.props;
        const {comments} = this.state;
        return comments.filter(el => {
            return el.postId === postId
        }) || [];
    };

    render() {
        const filteredComments = this.filterCommentsWithId();
        const {body} = this.state;
        return (
            <div>
                <h1>Comments</h1>
                <div>
                    <input type="text" value={body} onChange={this.commentBodyChange} minlength="1"/>
                    <button onClick={this.addCommentOnClick}>Add Comment</button>
                </div>

                {(filteredComments.length) ? filteredComments.map((el, index) => {
                    return (
                        <Comment item={el} key={index}/>
                    )
                }) : null}
            </div>)

    }

}

export default Comments;