import React, {Component} from 'react';
import BlogsItem from "./BlogsItem";
import {Redirect} from 'react-router-dom';

class BlogPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isButtonClicked: false
        }
    }
    createPost = () => {
        this.setState({isButtonClicked: true});

    };

    render() {
        const {posts} = this.props;
        const {isButtonClicked} = this.state;
        if (isButtonClicked)
            return (<Redirect to={'/blog/create'}/>);

        else
        return (
            <div>
                <button onClick={this.createPost}>Create post</button>
                <div>
                    {posts.map(el => {
                        return (<BlogsItem item={el} key={el.id}/>);
                    })
                    }
                </div>
            </div>

        )

    }

}

export default BlogPosts;