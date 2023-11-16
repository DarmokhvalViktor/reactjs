import {useSelector} from "react-redux";

import {Episode} from "./Episode";

import css from "./Episodes.module.css"

const Episodes = () => {

    const {episodes, isLoading} = useSelector(state => state.episodes)

    return (
        <div>
            <div className={css.Episodes}>
                {isLoading && <h1>Loading...</h1>}
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>

        </div>
    );
};

export {Episodes};