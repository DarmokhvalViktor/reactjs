import React, {useState} from 'react';

import css from "./Post.module.css";
import {postService} from "../services/postService";
import {PostDetails} from "./PostDetails";

const Post = ({post}) => {
    const {id, title} = post;

    const [postDetails, setPostDetails] = useState(null);

    const click = async (id) => {
        const {data} = await postService.getById(id);
        setPostDetails(data);
    }

    return (
        <div className={css.Post}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => click(id)}>More info</button>
            {
                postDetails && <PostDetails postDetails={postDetails}/>
            }
        </div>
    );
};

export {Post};