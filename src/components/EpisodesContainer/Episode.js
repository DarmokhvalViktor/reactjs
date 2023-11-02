import React from 'react';
import {useNavigate} from "react-router-dom"

import css from "./Episode.module.css"
import {useAppContext} from "../../hooks";

const Episode = ({episode}) => {
    const {id, name, characters} = episode;

    const {setEpisodeTitle} = useAppContext();

    const navigate = useNavigate();
    const navigateToCharacters = () => {
        navigate("/characters", {state:{characters: characters}})
        setEpisodeTitle(name);
    }

    return (
        <div className={css.Episode} onClick={navigateToCharacters}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {episode.episode}</div>
        </div>
    );
};

export {Episode};