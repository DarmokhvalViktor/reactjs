// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)


import React, {useEffect, useState} from 'react';

import {Post} from "./Post";
import css from "./Posts.module.css";
import {postService} from "../services/postService";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    return (
        <div className={css.Users}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};