import React from 'react';

import {Character} from "./Character";
import css from "./Characters.module.css"

const Characters = ({characters}) => {

    return (
        <div className={css.Characters}>

            {characters.map(character => <Character key={character} character={character}/>)}
        </div>
    );
};

export {Characters};