import React, {useEffect, useState} from 'react';

import {charactersService} from "../../services";
import css from "./Character.module.css"

const Character = ({character}) => {

    const [char, setChar] = useState(null);
    useEffect(() => {
        charactersService.getCharacter(character).then(({data}) => setChar(data))
    })

    return (
        <div className={css.Character}>
            {char && <div>id: {char.id}</div>}
            {char && <div>name: {char.name}</div>}
            {char && <img src={char.image} alt={char.name}/>}

        </div>
    );
};

export {Character};