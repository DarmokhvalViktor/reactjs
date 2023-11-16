import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CharactersPage, EpisodesPage} from "./pages";

const router = createBrowserRouter([
    {path:"", element:<MainLayout/>, children:[
            {index: true, element:<Navigate to={"episodesPage"}/>},
            {path: "episodesPage", element:<EpisodesPage/>},
            {path: "characters/:ids", element:<CharactersPage/>}
        ]}
])

export {
    router
}