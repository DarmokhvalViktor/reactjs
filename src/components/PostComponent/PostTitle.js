import React from 'react';
import {useNavigate} from "react-router-dom";
import css from "./Post.module.css";

const PostTitle = ({post}) => {

    const {id, title} = post;
    const navigate = useNavigate();
    const passPostId = () => {
        navigate("/post-details", {state:{id: id}});
    }

    return (
        <div className={css.PostTitle}>
            <div>title :{title}</div>
            <button onClick={() => {passPostId()}}>Post details</button>
        </div>
    );
};

export {PostTitle};