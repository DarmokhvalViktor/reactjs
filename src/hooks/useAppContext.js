import {useContext} from "react";

import {Context} from "../hoc";

const useAppContext = () => {
    const [state, setState] = useContext(Context)
    return {
        episodeTitle:state.episodeTitle,
        setEpisodeTitle:(value) => setState(prev => ({...prev, episodeTitle:value}))
    }
}

export {
    useAppContext
}