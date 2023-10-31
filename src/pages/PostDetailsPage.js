import React, {useEffect, useState} from 'react';
import {useLoaderData} from "react-router-dom";

import {Post} from "../components/PostComponent/Post";
import {Comments} from "../components/CommentComponent/Comments";
import {commentService} from "../services/commentService";

const PostDetailsPage = () => {

    const {data: post} = useLoaderData();
    const {id} = post;

    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentService.getCommentsByPostId(id).then(({data}) => setComments(data))
    }, [id]);


    return (
        <div>
            <Post post={post}/>
            <Comments comments={comments}/>

        </div>
    );
};

export {PostDetailsPage};