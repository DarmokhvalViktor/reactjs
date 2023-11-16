const baseURL = "https://rickandmortyapi.com/api";

const characters = "/character";
const locations = "/location";
const episodes = "/episode";

const urls = {
    characters,
    locations,
    episodes,
    charactersById:(ids) => `${characters}/${ids}`
}

export {
    baseURL,
    urls
}