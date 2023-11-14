import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    carForUpdate: null
}

const carForUpdateSlice = createSlice({
    name:"carForUpdateSlice",
    initialState,
    reducers:{
        setResponse:(state, action) => {
            state.carForUpdate = action.payload;
        }
    }
})

const {reducer: carForUpdateReducer, actions} = carForUpdateSlice;
const carForUpdateActions = {
    ...actions
}

export {
    carForUpdateReducer,
    carForUpdateActions
}
