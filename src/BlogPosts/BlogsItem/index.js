import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BlogsItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props
        }
    }

    render() {
        const {item} = this.props;

        return (
            <div>
                <div>Author {item.author}</div>
                <div>Title {item.title}</div>
                <div>Body {item.body}</div>
                <div>Date {item.date}</div>

            </div>
        )
    }
}

export default BlogsItem;