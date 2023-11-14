import {useDispatch, useSelector} from "react-redux";
import {carForUpdateActions, triggerActions} from "../redux";
import {carsService} from "../services";

const Car = ({car}) => {
    const {id, brand, price, year} = car;

    const dispatch = useDispatch();
    const {trigger} = useSelector(state => state.trigger)

    const update = () => {
        dispatch(carForUpdateActions.setResponse(car))
    }

    const del = async () => {
        await carsService.deleteById(id);
        dispatch(triggerActions.setResponse(trigger))
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