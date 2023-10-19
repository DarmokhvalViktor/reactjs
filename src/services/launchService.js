import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const launchService = {
    getAll:() => axiosService.get(urls.launches.base),
    getByFlightNumber: (flightNumber) => axiosService.get(urls.launches.byFlightNumber(flightNumber))
}

export {launchService}