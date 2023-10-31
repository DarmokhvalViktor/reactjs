import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getPostById: (postId) => axiosService.get(urls.posts.getById(postId)),
    getPostsByUserId: (userId) => axiosService.get(urls.posts.getByUserId(userId))
}

export {
    postService
}