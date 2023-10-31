import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getAll: () => axiosService.get(urls.users.users),
    getById: (userId) => axiosService.get(urls.users.getUserById(userId))
}

export {
    userService
}