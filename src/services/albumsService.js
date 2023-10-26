import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const albumsService = {
    getAllAlbums: () => axiosService.get(urls.albums)
}

export {
    albumsService
}