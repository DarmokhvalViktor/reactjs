import React from 'react';
import {useLocation} from "react-router-dom";

import {Post} from "../component/PostsContainer/Post";

const PostsPage = () => {

    const {state:postId} = useLocation();
    return (
        <div>
            <Post postId={postId}/>
        </div>
    );
};

export {PostsPage};