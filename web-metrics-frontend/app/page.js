"use client"

import TestForm from "./components/TestForm/TestForm"
import TestResults from "./components/TestResults/TestResults"
import LighthouseResults from "./components/LighthouseResults/LighthouseResults"
import BaseLoader from "./components/Base/BaseLoader/BaseLoader"
import { useSelector } from "react-redux"

const Home = ()=> {
  const storedTestResults = useSelector(state => state.testResults.testResults)
  const testResultsAreLoading = useSelector(state => state.loadingState.testResultsAreLoading)

  return (
    <main className="container" style={{paddingTop: '64px'}}>
      <TestForm/>
      {testResultsAreLoading && (
      <div className="loader-container">
        <BaseLoader/>
      </div>
      )}
      {storedTestResults?.google_pagespeed && <LighthouseResults lighthouseResults={storedTestResults?.google_pagespeed?.lighthouseResult}/>}
      {storedTestResults && <TestResults testResults={storedTestResults}/>}
    </main>
  )
}

export default Home