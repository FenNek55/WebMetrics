"use client"

import TestForm from "./components/TestForm/TestForm"
import TestResults from "./components/TestResults/TestResults"
import LighthouseResults from "./components/LighthouseResults/LighthouseResults"
import { useSelector } from "react-redux"

const Home = ()=> {
  const storedTestResults = useSelector(state => state.testResults.testResults)

  return (
    <main className="container" style={{paddingTop: '64px'}}>
      <TestForm/>
      {storedTestResults?.google_pagespeed && <LighthouseResults lighthouseResults={storedTestResults?.google_pagespeed?.lighthouseResult}/>}
      {storedTestResults && <TestResults testResults={storedTestResults}/>}
    </main>
  )
}

export default Home