import {useContext} from "react";

import {Context} from "../hoc";

const useAppContext = () => {
    const [state, setState] = useContext(Context)
    return {
        episodeTitle:state,
        setEpisodeTitle:(value) => setState(value)
    }
}

export {
    useAppContext
}