import {createSlice} from "@reduxjs/toolkit"

export const loadingStateSlice = createSlice({
    name: "loadingState",
    initialState: {
        testResultsAreLoading: false,
        loadingStatus: null
    },
    reducers: {
        setTestResultsAreLoading: (state, action)=> {
            state.testResultsAreLoading = action.payload
        },
        setLoadingStatus: (state, action)=> {
            state.loadingStatus = action.payload
        }
    }
})

export const { setTestResultsAreLoading, setLoadingStatus } = loadingStateSlice.actions

export default loadingStateSlice.reducer