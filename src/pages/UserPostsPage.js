import React from 'react';
import {useLocation} from "react-router-dom";

import {Posts} from "../components/PostComponent/Posts";

const UserPostsPage = () => {

    const userId = useLocation().state.id;


    return (
        <div>
            <Posts userId={userId}/>

        </div>
    );
};

export {UserPostsPage};