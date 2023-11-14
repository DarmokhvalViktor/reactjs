import {configureStore} from "@reduxjs/toolkit";

import {carReducer, carForUpdateReducer, triggerReducer} from "./slices";

const store = configureStore({
    reducer: {
        cars: carReducer,
        carForUpdate: carForUpdateReducer,
        trigger: triggerReducer
    }
})

export {
    store
}