import {Component} from "react";

import {jsonPlaceholderService} from "../../services/jsonPlaceholderService";
import {Post} from "./Post";
import css from "./Posts.module.css"

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts:[]
        }
    }

    componentDidMount() {
        jsonPlaceholderService.getAllPosts().then(({data}) => {
            this.setState({posts: data})
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h1>Posts:</h1>
            <div className={css.Posts}>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            </div>
        )
    }
}
export {
    Posts
}