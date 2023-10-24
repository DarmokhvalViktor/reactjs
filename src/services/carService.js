import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const carService = {
    getAll: () => axiosService.get(urls.cars.base),
    create: (car) => axiosService.post(urls.cars.base, car),
    updateById: (id, car) => axiosService.put(urls.cars.byId(id), car),
    deleteById: (id) => axiosService.delete(urls.cars.byId(id))
}

export {
    carService
}