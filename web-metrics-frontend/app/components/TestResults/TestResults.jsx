import TestEntryCard from "../TestEntryCard/TestEntryCard"
import styles from './TestResults.module.css'
import BaseLoader from "../Base/BaseLoader/BaseLoader"
import { useSelector } from "react-redux"

const TestResults = ({ testResults }) => {
    const testResultsAreLoading = useSelector(state => state.loadingState.testResultsAreLoading)

    return (
        <section className={styles['test-results']}>
            {testResultsAreLoading && 
                <div className={styles['test-results__loader-wrapper']}>
                    <BaseLoader/>
                </div>
            }
            {(testResults && !testResultsAreLoading) && Object.keys(testResults).map((key, index) => {
                return <TestEntryCard key={index} title={key} data={testResults[key]} />
            })}
        </section>
    )
}

export default TestResults