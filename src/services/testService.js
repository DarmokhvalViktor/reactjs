import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const testService = {
    getCommentsAndPosts: (postId) => {

        const test3 = axiosService.get(urls.comments.byPostId(postId))
        const test4 = axiosService.get(urls.posts.getById(postId))

        // const test1 = commentService.getCommentsByPostId(postId)
        // const test2 = postService.getPostById(postId)
        // return [test1, test2]

        return [test3, test4]
    }
}

export {
    testService
}