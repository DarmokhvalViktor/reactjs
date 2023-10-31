import React, {useEffect, useState} from 'react';

import {postService} from "../../services/postService";
import css from "./Posts.module.css"
import {PostTitle} from "./PostTitle";

const Posts = ({userId}) => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getPostsByUserId(userId).then(({data}) => setPosts(data))
    }, [userId])

    return (
        <div className={css.Posts}>
            {posts.map(post => <PostTitle key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};