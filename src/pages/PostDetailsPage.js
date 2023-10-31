import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {postService} from "../services/postService";
import {Post} from "../components/PostComponent/Post";
import {Comments} from "../components/CommentComponent/Comments";

const PostDetailsPage = () => {

    const postId = useLocation().state.id;
    const [post, setPost] = useState({});
    useEffect(() => {
        postService.getPostById(postId).then(({data}) => setPost(data))
    }, [postId])

    return (
        <div>
            <Post post={post}/>
            <Comments postId={postId}/>

        </div>
    );
};

export {PostDetailsPage};