import React, {Component} from "react";


class BlogCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogName: "",
            postTitle: "",
            postBody: ""
        }

    }

    render() {
        return (
            <div>
                <input type="text" />

            </div>
        )
    }

}

export default BlogCreate;