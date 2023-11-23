import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";

const baseService = axios.create({baseURL})

class JsonPlaceholderService {
    getAllPosts(){
        return baseService.get("/posts")
    }
    getAllComments() {
        return baseService.get("/comments")
    }
}

export const jsonPlaceholderService = new JsonPlaceholderService();
