import React from 'react';

import {Episode} from "./Episode";
import css from "./Episodes.module.css"

const Episodes = ({episodes}) => {

    return (
        <div className={css.Episodes}>
            {episodes && episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};