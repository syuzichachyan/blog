import React, {Component} from 'react'

class Comment extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const {item }=this.props;

        return(
            <div>
                <div>{item.author}</div>
                <div>{item.body}</div>
            </div>
        )
    }


}
export default Comment;