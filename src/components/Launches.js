// =====
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)

import React, {useEffect, useState} from 'react';
import axios from "axios";

import {Launch} from "./Launch";
import css from "./Launches.module.css"
import {launchService} from "../services/launchService";

const Launches = () => {
    let [launches, setLaunches] = useState([])

    useEffect(() => {
        // axios.get("https://api.spacexdata.com/v3/launches").then(({data}) => setLaunches(data));
        launchService.getAll().then(({data}) => setLaunches(data))
    }, [])

    console.log(launches);
    launches = launches.filter(launch => +launch.launch_year !== 2020)
    console.log(launches)

    return (
        <div className={css.Launches}>
            {launches.map(launch => <Launch key={launch.flight_number} launch={launch}/>)}
        </div>
    );
};

export {Launches};