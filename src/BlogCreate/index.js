import React, {Component} from "react";


class BlogCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author:"",
            date: "",
            title: "",
            body: ""
        }

    }
    authorOnChange=(e)=> {
        this.setState({author:e.target.value});
    };
    dateOnChange=(e)=> {
        this.setState({date:e.target.value});
    };

    bodyOnChange=(e)=> {
        this.setState({body:e.target.value});
    };
    titleOnChange=(e)=> {
        this.setState({title:e.target.value});
    };
    saveOnClick=()=>{
        const {author,date, title, body}=this.state;
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push({'author':author,'date':date, 'title':title, 'body':body});
        localStorage.setItem('posts', JSON.stringify(posts));
        this.props.history.push(`/post:${1}`);//static id mast ++
    };


    render(){
        return (
            <div>
                <input type="text"  placeholder="author" onChange={authorOnChange} />
                <input type="text"  placeholder="date" onChange={dateOnChange} />
                <input type="text"  placeholder="body"  onChange={bodyOnChange}/>
                <input type="text"  placeholder="title" onChange={titleOnChange} />
                <button onClick={saveOnClick}>Save</button>
            </div>
        )
    }

}

export default BlogCreate;