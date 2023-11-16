import {axiosService} from "./axiosService";
import {urls} from "../constants";

const charactersService = {
    getByIds:(ids) => axiosService.get(urls.charactersById(ids))
}

export {
    charactersService
}