import React, {Component} from 'react';
import BlogsItem from "./BlogsItem";

class BlogPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    createPost = () => {
        this.props.history.push('/blog/create');
    };


    render() {
        const blogPosts = JSON.parse(localStorage.getItem("posts")) || [];
        return (

            <div>
                <button onClick={this.createPost}>Create post</button>
                <div>

                    {blogPosts.map(el => {
                        return  (<BlogsItem item={el} key={el.id}/>);
                    })
                    }
                </div>
            </div>

        )

    }

}

export default BlogPosts;