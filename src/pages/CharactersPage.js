import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import {Characters} from "../components/CharactersContainer";
import {useAppContext} from "../hooks";

const CharactersPage = () => {

    const location = useLocation();
    const characters = location.state.characters;
    const {setEpisodeTitle} = useAppContext();

    const navigate = useNavigate();
    const toEpisodes = () => {
        setEpisodeTitle(null)
        navigate("/episodes")
    }

    return (
        <div>
            <button onClick={toEpisodes}>Go back</button>
            <Characters characters={characters}/>
        </div>
    );
};

export {CharactersPage};