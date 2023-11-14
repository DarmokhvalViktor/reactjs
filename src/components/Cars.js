import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carsService} from "../services";
import {carActions} from "../redux";
import {Car} from "./Car";

const Cars = () => {

    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars)
    const {trigger} = useSelector(state => state.trigger)

    useEffect(() => {
        carsService.getAll().then(({data}) => {
            dispatch(carActions.setResponse(data))
        })
    }, [trigger])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};