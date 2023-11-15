import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carsService} from "../services";
import {carActions} from "../redux";
import {Car} from "./Car";

const Cars = () => {

    const dispatch = useDispatch();

    const {trigger, cars} = useSelector(state => state.cars)

    useEffect(() => {
        carsService.getAll().then(({data}) => {
            dispatch(carActions.setCars(data))
        })
    }, [trigger, dispatch])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};