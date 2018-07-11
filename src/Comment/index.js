import React, {Component} from 'react'

class Comment extends Component{

    render(){
        const {item }=this.props;

        return(
            <div>
                <div>Author {item.author}</div>
                <div>{item.body}</div>
            </div>
        )
    }


}
export default Comment;