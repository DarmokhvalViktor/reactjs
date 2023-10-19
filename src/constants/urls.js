const baseURL = "https://api.spacexdata.com/v3";

const launches = "/launches";

const urls = {
    launches: {
        base: launches,
        byFlightNumber: (flightNumber) => `${launches}/${flightNumber}`
    }
}
export {
    baseURL, urls
}