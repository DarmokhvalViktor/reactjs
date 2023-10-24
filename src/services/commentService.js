import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = {
    getAll: () => axiosService.get(urls.comments),
    create: (comment) => axiosService.post(urls.comments, comment)
}

export {
    commentService
}