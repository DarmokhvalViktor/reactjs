import axios from "axios";

const baseURL = "http://owu.linkpc.net/carsAPI/v1"

const baseService = axios.create({baseURL});

class CarsService {
    getAllCars() {
        return baseService.get("/cars")
    }
}

export const carsService = new CarsService();