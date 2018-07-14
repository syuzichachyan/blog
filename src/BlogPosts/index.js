import React, {Component} from 'react';
import BlogsItem from "./BlogsItem";
import {Redirect} from 'react-router-dom';

class BlogPosts extends Component {
    createPost = () => {
        this.setState({isButtonClicked: true});

    };

    constructor(props) {
        super(props);
        this.state = {
            blogPosts: JSON.parse(localStorage.getItem("posts")) || [],
            isButtonClicked: false
        }
    }

    render() {
        const {blogPosts, isButtonClicked} = this.state;
        if (isButtonClicked)
            return (<Redirect to={'/blog/create'}/>);

        else
        return (
            <div>
                <button onClick={this.createPost}>Create post</button>
                <div>
                    {blogPosts.map(el => {
                        return (<BlogsItem item={el} key={el.id}/>);
                    })
                    }
                </div>
            </div>

        )

    }

}

export default BlogPosts;