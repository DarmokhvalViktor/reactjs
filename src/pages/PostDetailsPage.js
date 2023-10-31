import React, {useEffect, useState} from 'react';
import {useLoaderData} from "react-router-dom";

import {Post} from "../components/PostComponent/Post";
import {Comments} from "../components/CommentComponent/Comments";

const PostDetailsPage = () => {

    // const {data: post} = useLoaderData();
    // const {data} = useLoaderData();

    const comments = useLoaderData()[0]
    const post = useLoaderData()[1]

    const [post2, setPost] = useState({});
    const [comments2, setComments] = useState([]);

    useEffect(() => {
        comments.then(({data}) => setComments(data))
        post.then(({data}) => setPost(data))
    }, [])

    // console.log(data)
    // const {id} = post;

    // const [comments, setComments] = useState([]);
    //
    // const [test, setTest] = useState([])
    //
    // useEffect(() => {
    //     // commentService.getCommentsByPostId(id).then(({data}) => setComments(data))
    // }, [id]);
    // console.log(comments)


    return (
        <div>
            <Post post={post2}/>
            <Comments comments={comments2}/>

        </div>
    );
};

export {PostDetailsPage};