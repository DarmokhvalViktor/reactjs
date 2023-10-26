import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const todosService = {
    getAllTodos: () => axiosService.get(urls.todos)
}

export {
    todosService
}