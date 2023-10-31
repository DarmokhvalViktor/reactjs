import React from 'react';


import {Comment} from "./Comment";
import css from "./Comment.module.css"

const Comments = ({comments}) => {

    return (
        <div className={css.Comments}>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};