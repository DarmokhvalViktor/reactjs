import React from 'react';
import {useForm} from "react-hook-form";

import {postService} from "../../services/postService";

const PostForm = ({setPost}) => {
    const {reset, handleSubmit, register} = useForm();

    const save = async (post) => {
        const {data} = await postService.create(post);
        setPost(prev => [...prev, data]);
        reset();
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={"userId"} {...register("userId")}/>
            <input type="text" placeholder={"title"} {...register("title")}/>
            <input type="text" placeholder={"body"} {...register("body")}/>
            <button>save post</button>
        </form>
    );
};

export {PostForm};