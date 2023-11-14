import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars:[],
    carForUpdate: null,
    trigger: false

}

const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers:{
        setCars:(state, action) => {
            state.cars = action.payload
        },
        setCarForUpdate:(state, action) => {
            state.carForUpdate = action.payload;
        },
        setTrigger:(state, action) => {
            state.trigger = action.payload
        }
    }
});

const {reducer:carReducer, actions} = carSlice

const carActions = {
    ...actions
}

export {
    carReducer,
    carActions
}