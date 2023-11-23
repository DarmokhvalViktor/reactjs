import {Component} from "react";

import css from "./Comment.module.css"

class Comment extends Component {
    render() {
        const {id, postId, name, email, body} = this.props.comment;
        return (
            <div className={css.Comment}>
                <div>id: {id}</div>
                <div>postId: {postId}</div>
                <div>name: {name}</div>
                <div>email: {email}</div>
                <div>body: {body}</div>
            </div>
        )
    }
}

export {
    Comment
}