import React, {Component} from 'react';
import BlogsItem from "./BlogsItem";
import {Link} from 'react-router-dom';

class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const blogs = localStorage.getItem("blogs") || [];
        return (<div>
                <Link to="/blog/create">Create post</Link>
                    <div>
                        {blogs.forEach(el => {
                            <BlogsItem item={el}/>
                        })}
                    </div>
                </div>
        )

    }
}

export default Blogs;