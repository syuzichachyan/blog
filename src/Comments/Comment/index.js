import React from 'react'

function Comment(props) {

    const {item} = props;

    return (
        <div>
            <h3>Author:{item.author}</h3>
            <div>{item.body}</div>
        </div>
    )
}

export default Comment;