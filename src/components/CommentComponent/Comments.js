import React, {useEffect, useState} from 'react';

import {commentService} from "../../services/commentService";
import {Comment} from "./Comment";
import css from "./Comment.module.css"

const Comments = ({postId}) => {

    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentService.getCommentsByPostId(postId).then(({data}) => setComments(data))
    }, [postId])

    return (
        <div className={css.Comments}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};