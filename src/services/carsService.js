import {axiosService} from "./axiosService";
import {urls} from "../constants";

const carsService = {
    getAll: () => axiosService.get(urls.cars),
    create: (data) => axiosService.post(urls.cars, data),
    updateById: (id, data) => axiosService.put(urls.byId(id), data),
    deleteById: (id) => axiosService.delete(urls.byId(id))
}

export {
    carsService
}