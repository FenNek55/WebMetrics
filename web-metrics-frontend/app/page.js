"use client"

import TestForm from "./components/TestForm/TestForm"
import TestResults from "./components/TestResults/TestResults"
import { useSelector } from "react-redux"

const Home = ()=> {
  const storedTestResults = useSelector(state => state.testResults.testResults)

  return (
    <main className="container" style={{paddingTop: '64px'}}>
      <TestForm/>
      <TestResults testResults={storedTestResults}/>
    </main>
  )
}

export default Home