import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {carValidator} from "../validators";
import {carsService} from "../services";
import {carForUpdateActions, triggerActions} from "../redux";
import {useEffect} from "react";

const CarForm = () => {

    const {reset, register, handleSubmit, formState:{errors, isValid}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    })

    const {carForUpdate} = useSelector(state => state.carForUpdate)
    const {trigger} = useSelector(state => state.trigger)
    const dispatch = useDispatch();

    useEffect(() => {
        if(carForUpdate) {
            setValue("brand", carForUpdate.brand, {shouldValidate: true})
            setValue("price", carForUpdate.price, {shouldValidate: true})
            setValue("year", carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue])

    const save = async (car) => {
        await carsService.create(car);
        dispatch(triggerActions.setResponse(trigger))
        reset()
    }

    const update = async(car) => {
        await carsService.updateById(carForUpdate.id, car)
        dispatch(carForUpdateActions.setResponse(null))
        dispatch(triggerActions.setResponse(trigger))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type={"text"} placeholder={"brand"} {...register("brand")}/>
                <input type={"text"} placeholder={"price"} {...register("price", {valueAsNumber: true})}/>
                <input type={"text"} placeholder={"year"} {...register("year", {valueAsNumber: true})}/>
                <button disabled={!isValid}>{carForUpdate ? `Update`: "Save"}</button>
            </form>
            {errors.brand && <div>brand: {errors.brand.message}</div>}
            {errors.price && <div>brand: {errors.price.message}</div>}
            {errors.year && <div>brand: {errors.year.message}</div>}
        </div>
    );
};

export {CarForm};