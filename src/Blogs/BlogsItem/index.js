import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class BlogsItem extends Component{
    constructor(props){
        super(props);
        this.state={
            ...this.props
        }
    }
    render(){
        const {item}=this.props;

        return (
            <div>
                <span>{item.auther}</span>
                <span>{item.title}</span>
                <span>{item.body}</span>
                <span>{item.date}</span>
                <Link to={`/blogs/${item.id}`}>View</Link>
            </div>
        )
    }
}
export default BlogsItem;