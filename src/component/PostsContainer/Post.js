import React from 'react';
import {useEffect, useState} from "react";

import {postService} from "../../services/postService";
import css from "./Post.module.css"

const Post = ({postId}) => {

    // const [post, setPost] = useState({});
    const [post, setPost] = useState(null);



    // useEffect(() => {
    //     postService.getByPostId(postId).then(({data}) => setPost(data))
    // }, [])
    useEffect(() => {
        postService.getByPostId(postId).then(({data}) => setPost(data))
    }, [postId])
    const {userId, id, title, body} = post;

    return (
        <div className={css.Post}>
            { post &&
                <div>
                    <div>userId: {userId}</div>
                    <div>id: {id}</div>
                    <div>title: {title}</div>
                    <div>body: {body}</div>
                </div>
            }

        </div>
    );
};

export {Post};