import React from 'react';
import {useLoaderData} from "react-router-dom";

import {Posts} from "../components/PostComponent/Posts";

const UserPostsPage = () => {

    const {data: posts} = useLoaderData();


    return (
        <div>
            <Posts posts={posts}/>
        </div>
    );
};

export {UserPostsPage};