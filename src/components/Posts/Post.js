import {Component} from "react";

import css from "./Post.module.css"

class Post extends Component {

    render() {
        const {id, userId, title, body} = this.props.post;
        return (
            <div className={css.Post}>
                <div>id: {id}</div>
                <div>userId: {userId}</div>
                <div>title: {title}</div>
                <div>body: {body}</div>
            </div>
        )
    }
}

export {
    Post
}