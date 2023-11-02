import {axiosService} from "./axiosService";

const charactersService = {
    getCharacter: (charURL) => axiosService.get(charURL)
}

export {
    charactersService
}