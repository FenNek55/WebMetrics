import { configureStore } from "@reduxjs/toolkit"
import testResults from "./features/testResults"

export const store = configureStore({
    reducer: {
        testResults
    }
})