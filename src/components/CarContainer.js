import React, {useEffect, useState} from 'react';

import {CarForm} from "./CarForm";
import {carService} from "../services/carService";
import {Cars} from "./Cars";

const CarContainer = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));
    }, [trigger])
    return (
        <div>
            <CarForm setTrigger={setTrigger} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger}/>
        </div>
    );
};

export {CarContainer};