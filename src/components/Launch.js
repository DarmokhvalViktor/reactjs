import React from 'react';

import css from "./Launch.module.css"
const Launch = ({launch}) => {
    const {mission_name, launch_year, links} = launch;
    return (
        <div className={css.Launch}>
            <div> mission_name: {mission_name}</div>
            <div> launch_year: {launch_year}</div>
            <img src={links.mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Launch};