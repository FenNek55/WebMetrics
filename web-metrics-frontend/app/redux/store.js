import { configureStore } from "@reduxjs/toolkit"
import testResults from "./features/testResults"
import loadingState from "./features/loadingState"

export const store = configureStore({
    reducer: {
        testResults,
        loadingState
    }
})