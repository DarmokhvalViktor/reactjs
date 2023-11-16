import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {episodeActions} from "../../redux";
import {Character} from "./Character";

const Characters = () => {

    const {characters} = useSelector(state => state.characters);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goBack = () => {
        dispatch(episodeActions.setEpisodeName(null));
        navigate(-1)
    }

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};