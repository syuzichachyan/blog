import React from 'react';
import {Link} from 'react-router-dom';

function BlogsItem(props) {
    const {item} = props;
    return (
        <div>
            <div>Author {item.author}</div>
            <div>Title {item.title}</div>
            <div>Body {item.body}</div>
            <Link to={`/blog/${item.id}`}>View</Link>
        </div>
    )
}


export default BlogsItem;