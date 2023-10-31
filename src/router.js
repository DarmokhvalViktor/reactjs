// Отримати всіх юзерів з jsonplaceholder
// 2 Вивести id,name всіх юзерів
// 3 Додати кожному юзеру кнопку/посилання , при кліку на яку відбувається перехід на сторінку user-details, котра має детальну інфорацію про об'єкт на який клікнули
//
// На сторінці user-details:
// 4 Вивести детальну інформацію (5 і більше полів) про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details, котра має детальну інфу про поточний пост.
//
// На cторінці post-detail:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Під інформацією про пост, вивести всі коментарі поточного поста


import {createBrowserRouter, Navigate} from "react-router-dom";

import {ErrorPage} from "./pages/ErrorPage";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {UserPostsPage} from "./pages/UserPostsPage";
import {userService} from "./services/userService";
import {postService} from "./services/postService";

const router = createBrowserRouter([
    {path: "", element:<MainLayout/>, errorElement:<ErrorPage/>, children: [
            {index: true, element:<Navigate to={"users"}/>},
            {path: "users", element:<UsersPage/>, loader: () => userService.getAll()},
            {path: "users/:id", element:<UserDetailsPage/>, loader: ({params: {id}}) => userService.getById(id),
                children: [
                    {path: "user-posts", element:<UserPostsPage/>, loader: ({params: {id}}) => postService.getPostsByUserId(id)}
                ]},
            {path:"posts/:id", element:<PostDetailsPage/>, loader: ({params: {id}}) => postService.getPostById(id)}
        ]}
])

export {
    router
}