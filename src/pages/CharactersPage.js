import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

import {characterActions} from "../redux";
import {Characters} from "../components";

const CharactersPage = () => {

    const {ids} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(characterActions.getCharacters({ids}))
    }, [ids, dispatch])

    return (
        <div>
            <Characters/>
        </div>
    );
};

export {CharactersPage};