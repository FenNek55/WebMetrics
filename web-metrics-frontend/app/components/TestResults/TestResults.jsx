import TestEntryCard from "../TestEntryCard/TestEntryCard"
import styles from './TestResults.module.css'
import BaseLoader from "../Base/BaseLoader/BaseLoader"
import { useSelector } from "react-redux"
import ExpandableSection from "../ExpandableSection/ExpandableSection"
import Image from "next/image"

const TestResults = ({ testResults }) => {
    const testResultsAreLoading = useSelector(state => state.loadingState.testResultsAreLoading)

    return (
        <section className={styles['test-results']}>
            {testResultsAreLoading && 
                <div className={styles['test-results__loader-wrapper']}>
                    <BaseLoader/>
                </div>
            }
            {(testResults && !testResultsAreLoading) && (
                <>
                    <h1>Test results:</h1>
                    <ExpandableSection title="Request info">
                        <div className={styles["test-results__cards-wrapper"]}>
                            <TestEntryCard title="Tested URL" data={testResults['url']} />
                            <TestEntryCard title="Status" data={testResults['status']} />
                        </div>
                    </ExpandableSection>
                    <ExpandableSection title="Meta">
                        <div className={styles["test-results__cards-wrapper"]}>
                            <TestEntryCard title="Title" data={testResults['title']} />
                            <TestEntryCard title="Description" data={testResults['meta_description']} />
                        </div>
                    </ExpandableSection>
                    <ExpandableSection title="OpenGraph meta data">
                        <div className={styles["test-results__cards-wrapper"]}>
                            <TestEntryCard title="OG title" data={testResults['og_title']} />
                            <TestEntryCard title="OG description" data={testResults['og_description']} />
                            <TestEntryCard title="OG image" data={testResults['og_image']}>
                                {testResults['og_image'] && (<img className={styles["test-results__og-image"]} src={testResults['og_image']} alt="OG image" />)}
                            </TestEntryCard>
                            <TestEntryCard title="OG type" data={testResults['og_type']} />
                            <TestEntryCard title="OG url" data={testResults['og_url']} />
                        </div>
                    </ExpandableSection>
                    <ExpandableSection title="Twitter meta data">
                        <div className={styles["test-results__cards-wrapper"]}>
                            <TestEntryCard title="Twitter card" data={testResults['twitter_title']} />
                            <TestEntryCard title="Twitter title" data={testResults['twitter_title']} />
                            <TestEntryCard title="Twitter description" data={testResults['twitter_description']} />
                            <TestEntryCard title="Twitter image" data={testResults['twitter_image']}>
                                {testResults['twitter_image'] && (<img className={styles["test-results__og-image"]} src={testResults['twitter_image']} alt="Twitter image" />)}
                            </TestEntryCard>
                        </div>
                    </ExpandableSection>
                </>
            )}
        </section>
    )
}

export default TestResults