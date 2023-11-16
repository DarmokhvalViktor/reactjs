import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {charactersService} from "../../services/charactersService";

const initialState = {
    characters: [],
    isLoading: null,
    errors: null
}

const getCharacters = createAsyncThunk(
    "charactersSlice/getCharacters",
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await charactersService.getByIds(ids);
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const charactersSlice = createSlice({
    name: "charactersSlice",
    initialState,
    reducers: {},
    extraReducers:builder =>
        builder
            .addCase(getCharacters.fulfilled, (state, action) => {
                state.characters = action.payload;
                state.isLoading = null;
                state.errors = null;
            })
            .addCase(getCharacters.rejected, (state, action) => {
                state.errors = action.payload
                state.isLoading = false
            })
            .addCase(getCharacters.pending, state => {
                state.isLoading = true
            })
})

const {reducer: characterReducer, actions} = charactersSlice;
const characterActions = {
    ...actions,
    getCharacters
}
export {
    characterActions,
    characterReducer
}

