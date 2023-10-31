import React from 'react';

import css from "./Posts.module.css"
import {PostTitle} from "./PostTitle";

const Posts = ({posts}) => {

    return (
        <div className={css.Posts}>
            {posts.map(post => <PostTitle key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};