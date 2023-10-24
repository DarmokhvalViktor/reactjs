import React, {useEffect} from 'react';
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";

import {carService} from "../services/carService";
import {carValidator} from "../validators/carValidator";

const CarForm = ({setTrigger, carForUpdate}) => {
    const {reset, handleSubmit, register, formState: {isValid, errors},
        setValue} = useForm({mode: "all", resolver: joiResolver(carValidator)
    });



    useEffect(() => {
        if(carForUpdate) {
            setValue("brand", carForUpdate.brand, {shouldValidate:true})
            setValue("price", carForUpdate.price, {shouldValidate:true})
            setValue("year", carForUpdate.year, {shouldValidate:true})
        }
    }, [carForUpdate])

    const save = async (car) => {
        await carService.create(car);
        setTrigger(prev => !prev);
        reset()
    }

    const updateCar = async (car) => {
        await carService.updateById(carForUpdate.id, car);
        setTrigger(prev => !prev);
        reset()
    }

    return (
        <>
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={"brand"} {...register("brand")}/>
            <input type="text" placeholder={"price"} {...register("price", {valueAsNumber:true})}/>
            <input type="text" placeholder={"year"} {...register("year", {valueAsNumber:true})}/>
            <button disabled={!isValid}>save</button>
            <button onClick={handleSubmit(updateCar)} disabled={!isValid || !carForUpdate}>update</button>
        </form>
        {errors.brand && <div>{errors.brand.message}</div>}
        {errors.price && <div>{errors.price.message}</div>}
        {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

export {CarForm};