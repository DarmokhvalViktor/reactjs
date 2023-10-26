import React from 'react';
import {useNavigate} from "react-router-dom";

import css from "./Comment.module.css"

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    const navigate = useNavigate();

    return (
        <div className={css.Comment} onClick={() => navigate("/post", {state: postId})}>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Comment};