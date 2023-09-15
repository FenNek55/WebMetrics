import {createSlice} from "@reduxjs/toolkit"

export const loadingStateSlice = createSlice({
    name: "loadingState",
    initialState: {
        testResultsAreLoading: false
    },
    reducers: {
        setTestResultsAreLoading: (state, action)=> {
            state.testResultsAreLoading = action.payload
        }
    }
})

export const { setTestResultsAreLoading } = loadingStateSlice.actions

export default loadingStateSlice.reducer