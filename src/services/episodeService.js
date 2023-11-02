import {axiosService} from "./axiosService";
import {urls} from "../constants";

const episodeService = {
    getAll: (page="1") => axiosService.get(urls.getAll, {params:{page}})
}

export {
    episodeService
}