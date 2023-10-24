// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments

import React from 'react';

import {PostContainer} from "./components/PostComponent/PostContainer";
import {CommentContainer} from "./components/CommentComponent/CommentContainer";
import {UserContainer} from "./components/UserContainer/UserContainer";



const App = () => {
    return (
        <div>
            <UserContainer/>
            <CommentContainer/>
            <PostContainer/>
        </div>
    );
};

export {App};