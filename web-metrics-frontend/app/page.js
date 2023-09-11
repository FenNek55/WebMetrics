"use client"

import TestEntryCard from "./components/TestEntryCard/TestEntryCard"
import { useSelector } from "react-redux"
import TestForm from "./components/TestForm/TestForm"

const Home = ()=> {
  const testResults = useSelector(state => state.testResults.testResults)

  return (
    <main className="container">
      <TestForm/>
      <div className="grid">
        {testResults && Object.keys(testResults).map((key, index)=> {
          return <TestEntryCard key={index} title={key} data={testResults[key]} />
        })}
      </div>
    </main>
  )
}

export default Home;