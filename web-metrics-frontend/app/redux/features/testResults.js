import { createSlice } from "@reduxjs/toolkit"

export const testResultsSlice = createSlice({
    name: "testResults",
    initialState: {
        testResults: null
    },
    reducers: {
        setTestResults: (state, action)=> {
            state.testResults = action.payload
        }
    }
})

export const { setTestResults } = testResultsSlice.actions

export default testResultsSlice.reducer