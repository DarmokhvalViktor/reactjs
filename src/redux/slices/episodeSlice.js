import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {mainService} from "../../services";

const initialState = {
    episodes: [],
    errors: null,
    isLoading: null,
    next: null,
    previous: null,
    episodeName: null

}

const getAll = createAsyncThunk(
    "episodeSlice/getAll",
    async ({page}, thunkAPI) => {
        try {
            const {data} = await mainService.getEpisodes(page);
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const episodeSlice = createSlice({
    name: "episodeSlice",
    initialState,
    reducers: {
        setEpisodeName:(state, action) => {
            state.episodeName = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.episodes = action.payload.results
                state.next = action.payload.info.next;
                state.previous = action.payload.info.prev;
                state.errors = null
                state.isLoading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.payload
                state.isLoading = false;
            })
            .addCase(getAll.pending, state => {
                state.isLoading = true;
            })
})

const {reducer: episodeReducer, actions} = episodeSlice;

const episodeActions = {
    ...actions,
    getAll
}

export {
    episodeReducer,
    episodeActions
}