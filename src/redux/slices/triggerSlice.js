import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    trigger: false
}

const triggerSlice = createSlice({
    name: "triggerSlice",
    initialState,
    reducers:{
        setResponse:(state, action) => {
            const payload = action.payload
            state.trigger = !payload
        }
    }
})

const {reducer:triggerReducer, actions} = triggerSlice;
const triggerActions = {
    ...actions
}

export {
    triggerReducer,
    triggerActions
}