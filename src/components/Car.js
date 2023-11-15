import {useDispatch} from "react-redux";

import {carActions} from "../redux";
import {carsService} from "../services";

const Car = ({car}) => {
    const {id, brand, price, year} = car;

    const dispatch = useDispatch();

    const update = () => {
        dispatch(carActions.setCarForUpdate(car))
    }

    const del = async () => {
        await carsService.deleteById(id);
        dispatch(carActions.trigger())
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={update}>update</button>
            <button onClick={del}>delete</button>
        </div>
    );
};

export {Car};