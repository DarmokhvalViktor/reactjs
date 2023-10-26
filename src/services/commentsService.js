import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentsService = {
    getAllComments: () => axiosService.get(urls.comments)
}

export {
    commentsService
}