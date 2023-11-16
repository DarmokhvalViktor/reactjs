import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux";

import css from "./Episode.module.css"
import {episodeActions} from "../../redux";

const Episode = ({episode}) => {
    const {id, name, episode:episodeName} = episode;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const redirect = ()=> {
        const ids = episode.characters.map(character => character.split("/").slice(-1).join()).toString();
        dispatch(episodeActions.setEpisodeName(episodeName))
        navigate(`/characters/${ids}`)
    }

    return (
        <div className={css.Episode} onClick={redirect}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {episodeName}</div>
        </div>
    );
};

export {Episode};