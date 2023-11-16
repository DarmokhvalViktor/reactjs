import {axiosService} from "./axiosService";
import {urls} from "../constants";

const mainService = {
    getEpisodes: (page) => axiosService.get(urls.episodes, {params:{page}})
}

export {
    mainService
}