import React from 'react';

import css from "./Header.module.css"
import {useAppContext} from "../hooks";

const Header = () => {

    const {episodeTitle} = useAppContext();

    return (
        <div className={css.Header}>
            {
                episodeTitle ? <h1>{episodeTitle}</h1>
                    :
                    <h1>Rick & Morty</h1>
            }
        </div>
    );
};

export {Header};