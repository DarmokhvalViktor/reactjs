import React from 'react';
import {useEffect, useState} from "react";

import {postService} from "../../services/postService";
import css from "./Post.module.css"

const Post = ({postId}) => {

    const [post, setPost] = useState({});

    const {userId, id, title, body} = post;

    useEffect(() => {
        postService.getByPostId(postId).then(({data}) => setPost(data))
    }, [])

    return (
        <div className={css.Post}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Post};